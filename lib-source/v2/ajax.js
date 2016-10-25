/**
    @type Function
    @name ajax
    @desc
        Sends an async ajax request to the specified url.
    @return {Promise}
        Returns a promise that resolves with the result of the ajax request.
        The resolved value is an object with the 'status', 'statusText', and
        'response' properties. The type of 'response' depends on the type
        option if specified.
    @param {string} url
        The url to request.
    @param {object} [optional] options
        @property {headers} [optional] Object
            Additional headers to send with the request.
            Format is {header: headerValue}.
            Default sends no additional headers.
        @property {Number} [optional] timeout
            The amount of time to wait before closing the connection.
            Set to 0 to let connections try as long as possible.
            Default is 0.
        @property {String} [optional] type
            The type of object to return from the ajax request.
            Valid options depend on the browser.
            See the [link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType MDN Docs] for details.
            Default is null (text).
        @property {Function} [optional] onProgress
            A function to call while the request is loading.
            Should take one argument that is the ProgressEvent.
        @property {ajax.cancelToken} [optional] token
            A cancellatio token for the request.
            A cancelled ajax request will not throw an error, instead it
            will return null.
        @property {*, FormData} [optional] post
            Post data to send with the request.
            If the object is not a FormData object, it will have JSON.stringify
            called on it before it is sent.
*/

const ajax = (url, options = {}) => new Promise(
    (resolve, reject) => {
        const {
            headers = {},
            timeout = 0,
            type = null,
            onProgress = () => {},
            token = null
        } = options;
        const request = new XMLHttpRequest();
        let {post = null} = options;

        let contentType = null;
        let method;

        if (token !== null && token.used === false) {
            token.bindTo(request);
        }

        if (post === null) {
            method = 'GET';
        } else {
            method = "POST";
            if (FormData.prototype.isPrototypeOf(post) === false) {
                // debugger;
                post = JSON.stringify(post);
                contentType = "application/json";
            }
        }

        if (type !== null) {
            request.responseType = type;
        }

        request.addEventListener(
            'load',
            () => {
                if (request.status === 0 || (request.status >= 200 && request.status < 300)) {
                    resolve({
                        status: request.status,
                        statusText: request.statusText,
                        response: request.response,
                        request
                    });
                } else {
                    reject(request);
                }
            }
        );
        request.addEventListener("error", reject);
        request.addEventListener("timeout", reject);
        request.addEventListener("abort", () => resolve(null));
        request.addEventListener("progress", onProgress);

        try {
            request.open(method, url, true);
            request.timeout = timeout;
            for (const [header, value] of Object.entries(headers)) {
                request.setRequestHeader(header, value);
            }
            request.setRequestHeader("Accept", "");
            request.setRequestHeader("Accept", "*/*");
            if (contentType !== null) {
                request.setRequestHeader("Content-Type", contentType);
            }
            request.send(post);
        } catch (error) {
            reject(error);
        }
    }
);

/**
    @type Constructor
    @name cancelToken
    @parent ajax
    @desc
        Creates a cancellation token for an ajax request.
        Note: A token can only be used to cancel one request. Every request
        that needs to be cancelled needs its own token.
    @property {Boolean} used
        Whether or not the token has been given to a request.
    @property {Function} cancel
        Cancels the request that has been given this token.
*/
ajax.cancelToken = () => {
    let request = null;

    return {
        cancel() {
            if (request !== null) {
                request.abort();
            }
        },
        get used() {
            return request !== null;
        },
        bindTo(req) {
            if (request === null) {
                request = req;
            }
        }
    };
};

export default ajax;

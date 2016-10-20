const getStorage = (storage, appKey) => {
    if (appKey === null) {
        throw new Error("App must have a non-null appKey");
    }
    return {
        read(name, defaultValue) {
            let value = storage.getItem(`${appKey}:${name}`);
            if (value === null) {
                return defaultValue;
            }
            return JSON.parse(value);
        },
        write(name, value) {
            storage.setItem(
                `${appKey}:${name}`,
                JSON.stringify(value)
            );
        },
        has(name) {
            return storage.getItem(`${appKey}:${name}`) !== null;
        },
        remove(name) {
            storage.removeItem(`${appKey}:${name}`);
        },
        clear() {
            storage.clear();
        }
    };
};

export default {
    getSettings: name => getStorage(localStorage, name),
    getSession: name => getStorage(sessionStorage, name),
    /**
        @type Constructor
        @name API
        @parent App
        @param {String} appName
            The name of the application on the server.
    */
    API(appName) {
        /**
            @type Function
            @name request
            @parent App.API
            @param {String} url
                The url to request. This is the path specified in the app.xml file,
                NOT the full web address.
            @param {Object} options
                See [link #ajax.param.options ajax options].
            @return {Promise}
                See [link #ajax.return ajax return].
        */
        const request = (url, options) => ajax(`${baseURL}/${appName}${url}`, options);
        /**
            @type Function
            @name requestData
            @parent App.API
            @param {String} url
                The url to request. This is the path specified in the app.xml file,
                NOT the full web address.
            @param {Object} options
                See [link #ajax.param.options ajax options].
            @return {Promise}
                Returns a promise that resolves with the result of the ajax request
                parsed into an object. The resolved value will be the result of
                calling JSON.parse on the response.
        */

        const requestData = async (url, options) => {
            const serverResponse = await request(url, options);
            return JSON.parse(serverResponse.response);
        };
        return {request, requestData, genURL: url => `${baseURL}/${appName}${url}`};
    }
};

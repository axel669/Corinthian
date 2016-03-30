const arraySlice = Array.prototype.slice;
const arrayEach = Array.prototype.forEach;

const remove = (iterable, index, count = 1) => [
    ...iterable::arraySlice(0, index),
    ...iterable::arraySlice(index + count)
];

const range = (size, value) => {
    let valueFunc;
    let array;
    let index;

    array = [];
    switch (typeof value) {
        case 'undefined':
            valueFunc = n => n;
            break;

        case 'function':
            valueFunc = value;
            break;

        default:
            valueFunc = () => value;
    }

    index = 0;
    while (true) {
        if (index === size) {
            break;
        }

        array.push(valueFunc(index));

        index += 1;
    }

    return array;
};

const count = ({from = 0, to, increment = 1} = {}, loop = null) => {
    let reverse;
    if (loop === null) {
        throw new Error("Cannot call count without a function to execute");
    }

    if (increment === 0) {
        throw new Error("Increment for count must be non-zero");
    }

    reverse = false;
    if (increment < 0) {
        increment = -increment;
        reverse = true;
        [to, from] = [from, to];
    }

    while (true) {
        if (reverse === true) {
            loop(to - from);
        } else {
            loop(from);
        }

        from += increment;

        if (from >= to) {
            break;
        }
    }
};

const each = (iterable, func) => {
    iterable::arrayEach(func);
};

const group = (iterable, keyFunc) => {
    let groups;

    groups = {};
    each(
        iterable,
        item => {
            let key;

            key = keyFunc(item);
            if (groups.hasOwnProperty(key) === false) {
                groups[key] = [];
            }

            groups[key].push(item);
        }
    );

    return groups;
};

const ajax = (url, {post = null, headers = {}, formData = null, timeout = 0, type = null, onProgress = () => {}} = {}) => {
    const request = new XMLHttpRequest();;
    let method;

    if (post === null) {
        method = "GET";
    } else {
        method = "POST";
        post = JSON.stringify(post);
    }
    if (formData !== null) {
        method = "POST";
        post = formData;
    }

    const promise = new Promise(
        (resolve, reject) => {
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
            request.addEventListener(
                "error",
                reject
            );
            request.addEventListener(
                "timeout",
                reject
            );
            request.addEventListener(
                "abort",
                () => resolve(null)
            );
            request.addEventListener(
                "progress",
                onProgress
            );

            try {
                request.open(method, url, true);
                request.timeout = timeout;
                Object.keys(headers).forEach(
                    header => request.setRequestHeader(header, headers[header])
                );
                request.setRequestHeader("Accept", "");
                request.setRequestHeader("Accept", "*/*");
                if (post !== null) {
                    if (formData === null) {
                        request.setRequestHeader("Content-Type", "application/json");
                    }
                }
                request.send(post);
            } catch (error) {
                reject(error);
            }
        }
    );
    promise.abort = () => request.abort();

    return promise;
};

export default Object.freeze({
    remove,
    range,
    each,
    group,
    ajax,
    count
});

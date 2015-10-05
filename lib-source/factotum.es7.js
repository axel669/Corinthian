let arraySlice;
let arrayEach;
let ajaxBase;

let remove;
let range;
let indexOf;
let each;
let find;
let group;
let ajax;

arraySlice = Array.prototype.slice;
arrayEach = Array.prototype.forEach;

if (Object.hasOwnProperty('assign') === false) {
    Object.assign = (dest, ...sources) => {
        sources.forEach(source =>
            Object.keys(source).forEach(key =>
                dest[key] = source[key]
            )
        );

        return dest;
    };
}

remove = (iterable, index, count) => {
    count = count || 1;
    return [
        ...iterable::arraySlice(0, index),
        ...iterable::arraySlice(index + count)
    ];
};

range = (size, value) => {
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

indexOf = (iterable, testFunc, start) => {
    let index;
    let length;

    index = start || 0;
    length = iterable.length;

    while (true) {
        if (index === length) {
            break;
        }

        if (testFunc(iterable[index]) === true) {
            return index;
        }

        index += 1;
    }

    return -1;
};

each = (iterable, func) => {
    iterable::arrayEach(func);
};

find = (iterable, testFunc, start) => {
    let index;

    index = indexOf(iterable, testFunc, start);
    if (index === -1) {
        return;
    }

    return iterable[index];
};

group = (iterable, keyFunc) => {
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

ajaxBase = async (url, options = {}) => {
    let {post = null, headers = {}, formData = null, timeout = 0, type = null} = options;
    let method;
    let request;

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

    return new Promise(
        (resolve, reject) => {
            request = new XMLHttpRequest();
            if (type !== null) {
                request.responseType = type;
            }

            request.addEventListener(
                'load',
                () => {
                    if (request.status >= 200 && request.status < 300) {
                        resolve({
                            status: request.status,
                            statusText: request.statusText,
                            response: request.response
                        });
                    } else {
                        reject(request);
                    }
                }
            );
            request.addEventListener(
                "timeout",
                reject
            );

            try {
                request.open(method, url, true);
                console.log('timeout', timeout);
                request.timeout = timeout;
                Object.keys(headers).forEach(
                    header => request.setRequestHeader(header, headers[header])
                );
                if (post !== null) {
                    request.setRequestHeader("Content-Type", "application/json");
                }
                request.send(post);
            } catch(error) {
                reject(error);
            }
        }
    );
};
ajax = {
    get (url, options) {
        return ajaxBase(url, options);
    },
    post (url, post, options = {}) {
        return ajaxBase(url, {post, ...options});
    }
};

export {
    remove,
    range,
    indexOf,
    each,
    find,
    group,
    ajax
};
export default {
    remove,
    range,
    indexOf,
    each,
    find,
    group,
    ajax
};

// let arraySlice;
// let arrayEach;
// let ajaxBase;

// let remove;
// let range;
// let indexOf;
// let each;
// let find;
// let group;
// let ajax;

const arraySlice = Array.prototype.slice;
const arrayEach = Array.prototype.forEach;

// if (Object.hasOwnProperty('assign') === false) {
//     Object.assign = (dest, ...sources) => {
//         sources.forEach(source =>
//             Object.keys(source).forEach(key =>
//                 dest[key] = source[key]
//             )
//         );

//         return dest;
//     };
// }

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

// const indexOf = (iterable, testFunc, start = 0) => {
//     let index;
//     let length;

//     index = start;
//     length = iterable.length;

//     while (true) {
//         if (index === length) {
//             break;
//         }

//         if (testFunc(iterable[index]) === true) {
//             return index;
//         }

//         index += 1;
//     }

//     return -1;
// };

const each = (iterable, func) => {
    iterable::arrayEach(func);
};

// find = (iterable, testFunc, start) => {
//     let index;

//     index = indexOf(iterable, testFunc, start);
//     if (index === -1) {
//         return;
//     }

//     return iterable[index];
// };

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

const ajax = async (url, {post = null, headers = {}, formData = null, timeout = 0, type = null} = {}) => {
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

            try {
                request.open(method, url, true);
                request.timeout = timeout;
                Object.keys(headers).forEach(
                    header => request.setRequestHeader(header, headers[header])
                );
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
};
export default Object.freeze({
    remove,
    range,
    each,
    group,
    ajax,
    count
});

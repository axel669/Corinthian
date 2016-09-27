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
    API(appName) {
        const request = (url, options) => ajax(`${baseURL}/${appName}${url}`, options);
        const requestData = async (url, options) => {
            const serverResponse = await request(url, options);
            return JSON.parse(serverResponse.response);
        };
        return {request, requestData, genURL: url => `${baseURL}/${appName}${url}`};
    }
};

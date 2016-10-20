import ajax from "lib-source/v2/ajax";

/**
    @type Object
    @name API
    @parent App
    @property {Function}
*/
export default {
    create(baseURL) {
        const request = (url, options) => {
            return ajax(`${baseURL}${url}`, options);
        };
        const json = async (url, options) => {
            const result = await request(url, options);
            if (result === null) {
                return null;
            }
            return JSON.parse(result.response);
        };
        return {
            request,
            json,
            genURL: url => `${baseURL}${url}`
        };
    }
};

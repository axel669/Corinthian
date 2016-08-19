export default Object.freeze({
    mobile: typeof orientation !== 'undefined' || navigator.userAgent.indexOf("Mobile") !== -1,
    app: typeof cordova !== 'undefined'
});

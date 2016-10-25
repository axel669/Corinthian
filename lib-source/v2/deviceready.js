import Environment from 'lib-source/v2/Environment';

/**
    @type Promise
    @name deviceReady
    @desc a promise that resolves after the deviceready event has fired in codova.
        Useful for plugins that are written and included outside of Corinthian.
*/
if (window.deviceReady === undefined) {
    window.deviceReady = new Promise(
        resolve => {
            if (Environment.app === true) {
                document.addEventListener("deviceready", () => resolve(true));
            } else {
                resolve(true);
            }
        }
    );
}

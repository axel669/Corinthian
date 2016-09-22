import Environment from 'lib-source/v2/Environment';

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

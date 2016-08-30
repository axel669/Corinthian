import "babel-polyfill";

import {XRegExp} from "xregexp";
import PubSub from "pubsub-js";
import React from "react";
import ReactDOM from "react-dom";
import CSSTransition from "react-addons-css-transition-group";
import * as ReactRouter from "react-router";
import {createHashHistory} from "history";
// import moment from "moment";
import chrono from "lib-source/chrono.js";
import UI from "lib-source/ui.es7.jsx";
import factotum from "lib-source/factotum.es7.js";
import Zip from "lib-source/zip.es7.js";
import fs from "lib-source/fs.es7.js";
import icons from "lib-source/ionic-icons.js";
import crypto from "lib-source/crypto.es7.js";
import Dialog from "lib-source/dialog.js";
import "lib-source/gesture.es7.js";
import {Style, Theme} from "lib-source/style.js";

import Environment from "lib-source/environment.js";

import RobotoURI from "lib-source/data-uri/roboto-light.woff.source";
import IonicURI from "lib-source/data-uri/ionicons.woff.source";

const {Router, Route, useRouterHistory, hashHistory} = ReactRouter;

const App = {};

window.factotum = factotum;
window.regex = XRegExp;
window.PubSub = PubSub;
window.React = React;
window.ReactDOM = ReactDOM;
window.ReactRouter = ReactRouter;
window.UI = UI;
window.fs = fs;
window.ionic = icons;
window.Dialog = Dialog;
window.security = crypto;
window.Zip = Zip;
window.Style = Style;
window.Theme = Theme;
window.chrono = chrono;

window.corinthian = Object.freeze({
    version: "0.1.0"
});

window.API = {
    create(baseURL) {
        const request = (url, options) => {
            return factotum.ajax(`${baseURL}${url}`, options);
        };
        const json = async (url, options) => {
            const result = await request(url, options);
            return JSON.parse(result.response);
        };
        return {
            request,
            json,
            genURL: url => `${baseURL}${url}`
        };
    }
};

window.CSSTransition = CSSTransition;

const readSetting = (storage, key, name, defaultValue) => {
    const value = storage.getItem(`${key}:${name}`);

    if (value === null) {
        return defaultValue;
    }

    return JSON.parse(value);
};
const writeSetting = (storage, key, name, value) => {
    storage.setItem(`${key}:${name}`, JSON.stringify(value));
};
const genStorage = mechanism =>
    key => ({
        read(name, defaultValue) {
            return readSetting(mechanism, key, name, defaultValue);
        },
        readObject(...names) {
            return names.reduce(
                (result, item) => {
                    if (typeof item === 'string') {
                        item = [item, undefined];
                    }
                    const [name, defaultValue] = item;

                    result[name] = readSetting(mechanism, key, name, defaultValue);
                    return result;
                },
                {}
            );
        },
        write(name, value) {
            writeSetting(mechanism, key, name, value);
        },
        writeObject(settings) {
            for (const [name, value] of Object.entries(settings)) {
                writeSetting(mechanism, key, name, value);
            }
        },
        has(name) {
            return mechanism.getItem(`${key}:${name}`) !== null;
        },
        remove(name) {
            mechanism.removeItem(`${key}:${name}`);
        }
    });

App.createSettings = genStorage(localStorage);
App.createSession = genStorage(sessionStorage);

window.cblog = ::console.log;

Style.create(
    "core",
    {
        ".desktop": {},
        ".web": {
            overflowY: 'scroll',
            WebkitOverflowScrolling: 'touch'
        },
        ".app": {
            position: 'relative',
            width: '100%',
            height: '100%',
            padding: '0px',
            margin: '0px',
            fontFamily: 'Roboto',
            backgroundColor: Theme.get("app/backgroundColor"),
            color: Theme.get("app/textColor"),
            textAlign: 'left',
            WebkitUserSelect: 'none',
            touchEvents: 'none',
            WebkitTextSizeAdjust: '100%',
            overflow: 'hidden'
        },
        ".icon": {
            fontFamily: "Ionic",
            cursor: 'default'
        },
        ".componentLabel": {
            fontSize: 15,
            color: 'black',
            padding: 5,
            paddingLeft: 8,
            cursor: 'default'
        },
        ".viewport": {
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            left: '-100vw',
            top: '-100vh',
            opacity: 0
        },
        ".appContainer": {
            position: 'fixed',
            width: '100%',
            height: '100%'
        }
    }
);

Style.addFonts(
    "core",
    {
        name: "Roboto",
        dataURI: RobotoURI
    },
    {
        name: "Ionic",
        dataURI: IonicURI
    }
);
Style.__rawCSS(
    "core",
    {
        selector: "*",
        rules: {
            boxSizing: "border-box"
        }
    },
    {
        selector: "html",
        rules: {
            width: '100%',
            height: '100%',
            overflow: 'hidden'
        }
    }
);

const clearPrev = () => {
    const head = document.querySelector("head");
    for (const node of head.querySelectorAll("style")) {
        head.removeChild(node);
    }
    // history.replaceState(null, "", "#/");
};
let appContainer;
let appComponent;
const init = () => {
    const viewportContainer = document.createElement("div");
    const bodyClasses = document.body.className;
    const additionalClasses = Style.getClassNames({
        "core:app": true,
        "core:desktop": Environment.mobile === false,
        "core:web": Environment.app === false
    });

    appContainer = document.createElement("div");
    appContainer.className = Style.getClassName("core:appContainer");

    viewportContainer.className = Style.getClassName("core:viewport");
    appContainer.setAttribute("data-name", "app-container");

    document.body.appendChild(appContainer);
    document.body.appendChild(Dialog.container);
    document.body.appendChild(viewportContainer);

    App.viewport = {
        get width() {
            return viewportContainer.offsetWidth;
        },
        get height() {
            return viewportContainer.offsetHeight;
        }
    };

    if (Environment.mobile === false) {
        appContainer.style.position = null;
        appContainer.style.overflow = 'visible';
    }
    document.body.className = `${bodyClasses} ${additionalClasses}`.trim();
};

(() => {
    const frameFunction = () => {
        requestAnimationFrame(frameFunction);
        const now = Date.now();
        PubSub.publishSync("system.framedraw", now - lastFrame);
        lastFrame = now;
    };
    let lastFrame;

    lastFrame = Date.now();
    requestAnimationFrame(frameFunction);
})();

const deviceReady = new Promise(
    resolve => {
        if (Environment.app === true) {
            document.addEventListener("deviceready", () => resolve(true));
        } else {
            resolve(true);
        }
    }
);


if (Environment.app === true) {
    let history = ['/'];
    let navVars = {'0': {}};
    App.navigation = {
        push(url) {
            navVars[history.length] = {};
            history.push(url);
            appComponent.router.replace(url);
        },
        pop(n = 1) {
            if (n >= history.length) {
                throw new Error(`Cannot pop ${n} screens off the history`);
            }
            const max = history.length;

            history = history.slice(0, -n);
            factotum.count(
                {from: history.length, to: max},
                n => {
                    navVars[n] = null;
                }
            );
            appComponent.router.replace(history.slice(-1)[0]);
        },
        replace(url) {
            history[history.length - 1] = url;
            navVars[history.length - 1] = {};
            appComponent.router.replace(url);
        },
        reset() {
            appComponent.router.replace('/');
        },
        get vars() {
            return navVars[history.length - 1];
        }
    };
} else {
    App.navigation = {
        push(url) {
            appComponent.router.push(url);
        },
        pop() {
            appComponent.router.goBack();
        },
        replace(url) {
            appComponent.router.replace(url);
        },
        refresh() {
            appComponent.refresh();
        },
        get vars() {
            return {};
        }
    };
}

window.App = App;

let active = false;
let routes;
App.start = async (newRoutes, options = {}) => {
    // await deviceReady;
    const {initialPath = "/"} = options;
    const path = `#${initialPath}`;
    if (appContainer !== undefined) {
        appContainer.style.display = 'none';
    }
    clearPrev();
    Style.renderCSS();

    // console.log(routes === newRoutes);
    routes = newRoutes;

    if (active === false) {
        init();
        // history.replaceState(null, null, path);
        document.location = path;
        const appHistory = useRouterHistory(createHashHistory)({queryKey: false});
        // const appHistory = useRouterHistory(hashHistory);
        appComponent = ReactDOM.render(
            <Router history={appHistory}>
                <Route getChildRoutes={(location, cb) => cb(null, routes)} />
            </Router>,
            document.querySelector("div")
        );
    } else {
        App.navigation.replace(path);
    }
    active = true;
    appContainer.style.display = '';
};

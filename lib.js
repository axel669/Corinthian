import "babel-polyfill";

import {XRegExp} from "xregexp";
import PubSub from "pubsub-js";
import React from "react";
import ReactDOM from "react-dom";
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

import RobotoURI from "lib-source/data-uri/roboto-light.ttf.source";
import IonicURI from "lib-source/data-uri/ionicons.ttf.source";

let {Router, Route} = ReactRouter;

let App;
// let ScreenWrapper;
// let appContainer;

// window.moment = (...args) => {
//     let momentProto;
//     let momentObject;

//     if (args.length > 0 && args[0]._isAmomentObject === true) {
//         momentObject = args[0];
//     } else {
//         momentObject = moment(...args);
//     }
//     momentProto = momentObject.constructor.prototype;
//     return Object.keys(momentProto).reduce(
//         (functional, funcName) => {
//             functional[funcName] = (...args) => {
//                 let intermediate;

//                 intermediate = moment(momentObject)[funcName](...args);
//                 if (intermediate._isAMomentObject === true) {
//                     intermediate = specialMoment(intermediate);
//                 }
//                 return intermediate;
//             };
//             return functional;
//         },
//         {
//             get timeStamp() {return momentObject.valueOf();}
//         }
//     );
// };
// Object.keys(moment).forEach(key => {
//     window.moment[key] = moment[key];
// });

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

window.schedule = (time, func, ...args) => {
    const currentStack = new Error("Error occured in scheduled function");
    setTimeout(
        () => {
            try {
                func(...args);
            } catch (e) {
                currentStack.error = e;
                throw currentStack;
            }
        },
        time
    );
};
window.API = {
    create(baseURL) {
        return {
            request(url, options) {
                return factotum.ajax(`${baseURL}${url}`, options);
            },
            genURL: url => `${baseURL}${url}`
        };
    }
};

// App.settings = Object.freeze({
//     get (name, defaultValue) {
//         let value;

//         value = localStorage.getItem(name);
//         if (value === null) {
//             return defaultValue;
//         }
//         return JSON.parse(value);
//     },
//     set (name, value) {
//         localStorage.setItem(name, JSON.stringify(value));
//     },
//     getObject (...names) {
//         return names.reduce(
//             (settings, name) => {
//                 let defaultValue;

//                 if (typeof name !== 'string') {
//                     [name, defaultValue] = name;
//                 }
//                 settings[name] = App.settings.get(name, defaultValue);
//                 return settings;
//             },
//             {}
//         );
//     },
//     setObject (obj) {
//         Object.keys(obj).forEach(key => App.settings.set(key, obj[key]));
//     }
// });
// App.storage = App.settings;

// App.session = Object.freeze({
//     get(name, defaultValue) {
//         let value;

//         value = sessionStorage.getItem(name);
//         if (value === null) {
//             return defaultValue;
//         }
//         return JSON.parse(value);
//     },
//     set(name, value) {
//         sessionStorage.setItem(name, JSON.stringify(value));
//     },
//     getObject(...names) {
//         return names.reduce(
//             (settings, name) => {
//                 let defaultValue;

//                 if (typeof name !== 'string') {
//                     [name, defaultValue] = name;
//                 }
//                 settings[name] = App.settings.get(name, defaultValue);
//                 return settings;
//             },
//             {}
//         );
//     },
//     setObject(obj) {
//         Object.keys(obj).forEach(key => App.settings.set(key, obj[key]));
//     }
// });

App = {};

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

App.createSettings = key => ({
    read(name, defaultValue) {
        return readSetting(localStorage, key, name, defaultValue);
    },
    readObject(...names) {
        return names.reduce(
            (result, item) => {
                if (typeof item === 'string') {
                    item = [item, undefined];
                }
                const [name, defaultValue] = item;

                result[name] = readSetting(localStorage, key, name, defaultValue);
                return result;
            },
            {}
        );
    },
    write(name, value) {
        writeSetting(localStorage, key, name, value);
    },
    writeObject(settings) {
        for (const [name, value] of Object.entries(settings)) {
            writeSetting(localStorage, key, name, value);
        }
    }
});

App.createSession = key => ({
    read(name, defaultValue) {
        return readSetting(sessionStorage, key, name, defaultValue);
    },
    readObject(...names) {
        return names.reduce(
            (result, item) => {
                if (typeof item === 'string') {
                    item = [item, undefined];
                }
                const [name, defaultValue] = item;

                result[name] = readSetting(sessionStorage, key, name, defaultValue);
                return result;
            },
            {}
        );
    },
    write(name, value) {
        writeSetting(sessionStorage, key, name, value);
    },
    writeObject(settings) {
        for (const [name, value] of Object.entries(settings)) {
            writeSetting(sessionStorage, key, name, value);
        }
    }
});

window.cblog = ::console.log;

// let animator = (component, done, func, time) => {
//     let progress;
//     let lastFrame;
//     let frameRender;

//     time = time || 500
//     progress = 0;
//     lastFrame = Date.now();
//     // let progress = 0, max = 250, last = Date.now();
//     frameRender = () => {
//         let now;
//         let t;

//         now = Date.now();
//         progress += (now - lastFrame);
//         lastFrame = now;
//         t = progress / time;
//         t = Math.sin(t * Math.PI / 2);

//         if (progress > time) {
//             progress = time;
//         }

//         component.setState({style: func(t)});
//         // console.log(func(progress / time));

//         if (progress !== time) {
//             requestAnimationFrame(frameRender);
//         } else {
//             component.setState({style: null});
//             done();
//         }
//     };
//     component.setState({style: func(0)});
//     requestAnimationFrame(frameRender);
// };
// let animations = {
//     enter: {
//         forward: progress => ({
//             WebkitTransform: `translateX(${100 - progress * 100}%)`,
//             opacity: progress
//         }),
//         backward: progress => ({
//             WebkitTransform: `translateX(${-100 + progress * 100}%)`,
//             opacity: progress
//         })
//     },
//     leave: {
//         forward: progress => ({
//             WebkitTransform: `translateX(${-progress * 100}%)`,
//             opacity: 1 - progress
//         }),
//         backward: progress => ({
//             WebkitTransform: `translateX(${progress * 100}%)`,
//             opacity: 1 - progress
//         })
//     }
// };

// let TestTransitioner = React.createClass({
//     getInitialState () {
//         return {style: null};
//     },
//     componentWillEnter (done) {
//         animator(this, done, animations.enter[this.props.parent.direction], App.transitionTime);
//     },
//     componentWillLeave (done) {
//         let finish;

//         finish = () => {
//             done();
//         };
//         animator(this, done, animations.leave[this.props.parent.direction], App.transitionTime);
//     },
//     render () {
//         let style;
//         let extra;

//         style = {
//             height: '100%',
//             width: '100%',
//             position: 'absolute',
//             backgroundColor: 'white',
//             ...this.state.style
//         }
//         return <div style={style}>{this.props.children}</div>;
//     }
// });

// ScreenWrapper = React.createClass({
//     render () {
//         let {action} = this.props;

//         if (action !== 'pop') {
//             this.direction = 'forward';
//         } else {
//             this.direction = 'backward';
//         }
//         return (
//             <React.addons.TransitionGroup component="div" style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, WebkitTransform: 'translateZ(0)'}}>
//                 <TestTransitioner key={Date.now()} parent={this}>
//                     <ReactRouter.RouteHandler />
//                 </TestTransitioner>
//             </React.addons.TransitionGroup>
//         );
//     }
// });

// App.ScreenTransition = ScreenWrapper;

let appComponent;

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
    // for(const node of document.body.querySelectorAll("body > div")) {
    //     if (node.getAttribute("data-name") !== "app-container") {
    //         document.body.removeChild(node);
    //     }
    // }
    history.replaceState(null, "", "#/");
};
let appContainer;
const init = () => {
    const viewportContainer = document.createElement("div");
    const bodyClasses = document.body.className;
    const additionalClasses = Style.getClassNames({
        "core:app": true,
        "core:desktop": Environment.mobile === false,
        "core:web": Environment.app === false
    });

    appContainer = document.createElement("div");

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
App.start = (routes, {hiddenStatusBar = false} = {}) => {
    // clearPrev();
    // init();

    // let history = createHashHistory({queryKey: false});
    // appComponent = ReactDOM.render(
    //     <Router history={history}>{routes}</Router>,
    //     document.querySelector("div")
    // );
    // console.log(appComponent);
    // console.log(appComponent, appComponent.props.context, appComponent.props.context.replace);
};

let frameFunction = () => {
    requestAnimationFrame(frameFunction);
    PubSub.publishSync("system.framedraw");
};
requestAnimationFrame(frameFunction);


if (Environment.app === true) {
    let history = ['/'];
    let navVars = {'0': {}};
    App.navigation = {
        push(url) {
            navVars[history.length] = {};
            history.push(url);
            appComponent.history.replace(url);
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
            appComponent.history.replace(history.slice(-1)[0]);
        },
        replace(url) {
            history[history.length - 1] = url;
            navVars[history.length - 1] = {};
            appComponent.history.replace(url);
        },
        reset() {
            appComponent.history.replace('/');
        },
        get vars() {
            return navVars[history.length - 1];
        }
    };

    window.deviceReady = new Promise(
        resolve => document.addEventListener("deviceready", () => resolve(null))
    );
} else {
    App.navigation = {
        push(url) {
            appComponent.history.push(url);
        },
        pop() {
            appComponent.history.goBack();
        },
        replace(url) {
            appComponent.history.replace(url);
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
App.start = (newRoutes) => {
    if (appContainer !== undefined) {
        appContainer.style.display = 'none';
    }
    clearPrev();
    Style.renderCSS();

    // console.log(routes === newRoutes);
    routes = newRoutes;

    if (active === false) {
        init();
        const history = createHashHistory({queryKey: false});
        appComponent = ReactDOM.render(
            <Router history={history}>
                <Route getChildRoutes={(location, cb) => cb(null, routes)} />
            </Router>,
            document.querySelector("div")
        );
    } else {
        App.navigation.replace("/");
    }
    active = true;
    appContainer.style.display = '';
};

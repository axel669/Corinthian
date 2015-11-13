// import {XRegExp} from "xregexp";
import PubSub from "pubsub-js";
import React from "react";
import ReactDOM from "react-dom";
import * as ReactRouter from "react-router";
import moment from "moment";
import alertify from "external/alertify.js";
// import "external/zip.js";
// import "external/zip-ext.js";
import "external/gesture.js";
import UI from "lib-source/ui.es7.jsx";
import factotum from "lib-source/factotum.es7.js";
// import {Zip} from "lib-source/zip.es7.js";
// import fs from "lib-source/fs.es7.js";
// import {Picture} from "lib-source/camera.es7.js";
import icons from "lib-source/ionic-icons.js";
// import crypto from "lib-source/crypto.es7.js";
// import microDB from "lib-source/microdb.js";

let {Router} = ReactRouter;

let App;
let ScreenWrapper;
let appContainer;

window.specialMoment = (...args) => {
    let momentProto;
    let momentObject;

    if (args.length > 0 && args[0]._isAmomentObject === true) {
        momentObject = args[0];
    } else {
        momentObject = moment(...args);
    }
    momentProto = momentObject.constructor.prototype;
    return Object.keys(momentProto).reduce(
        (functional, funcName) => {
            functional[funcName] = (...args) => {
                let intermediate;

                intermediate = moment(momentObject)[funcName](...args);
                if (intermediate._isAMomentObject === true) {
                    intermediate = specialMoment(intermediate);
                }
                return intermediate;
            };
            return functional;
        },
        {
            get timeStamp() {return momentObject.valueOf();}
        }
    );
};

window.factotum = factotum;
window.alertify = alertify;
// window.regex = XRegExp;
window.PubSub = PubSub;
window.React = React;
window.ReactDOM = ReactDOM;
window.ReactRouter = ReactRouter;
window.UI = UI;
// window.fs = fs;
// window.Picture = Picture;
window.ionic = icons;
// window.security = crypto;
// window.microDB = microDB;
window.moment = moment;

window.asyncChain = async funcs => {
    let caller = async (index, cb) => {
        if (index === funcs.length) {
            cb();
            return;
        }
        await funcs[index]();
        setTimeout(() => caller(index + 1, cb), 0);
    };

    return new Promise(
        resolve => caller(0, () => resolve(null))
    );
};

// zip.download = Zip.download;
// zip.readArrayBuffer = Zip.readArrayBuffer;

App = {
    transitionTime: 300
};

App.settings = Object.freeze({
    get (name, defaultValue) {
        let value;

        value = localStorage.getItem(name);
        if (value === null) {
            return defaultValue;
        }
        return JSON.parse(value);
    },
    set (name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    },
    getObject (...names) {
        return names.reduce(
            (settings, name) => {
                let defaultValue;

                if (typeof name !== 'string') {
                    [name, defaultValue] = name;
                }
                settings[name] = App.settings.get(name, defaultValue);
                return settings;
            },
            {}
        );
    },
    setObject (obj) {
        Object.keys(obj).forEach(key => App.settings.set(key, obj[key]));
    }
});
App.storage = App.settings;

App.session = Object.freeze({
    get (name, defaultValue) {
        let value;

        value = sessionStorage.getItem(name);
        if (value === null) {
            return defaultValue;
        }
        return JSON.parse(value);
    },
    set (name, value) {
        sessionStorage.setItem(name, JSON.stringify(value));
    },
    getObject (...names) {
        return names.reduce(
            (settings, name) => {
                let defaultValue;

                if (typeof name !== 'string') {
                    [name, defaultValue] = name;
                }
                settings[name] = App.settings.get(name, defaultValue);
                return settings;
            },
            {}
        );
    },
    setObject (obj) {
        Object.keys(obj).forEach(key => App.settings.set(key, obj[key]));
    }
});


App.initHistory = (...backLog) => {
    history.replaceState(null, "", "#/");
    backLog.forEach(route => {
        history.pushState(null, "", "#" + route);
        // ReactRouter.HashLocation.push("#" + route);
        ReactRouter.History.length += 1;
    });
};

let animator = (component, done, func, time) => {
    let progress;
    let lastFrame;
    let frameRender;

    time = time || 500
    progress = 0;
    lastFrame = Date.now();
    // let progress = 0, max = 250, last = Date.now();
    frameRender = () => {
        let now;
        let t;

        now = Date.now();
        progress += (now - lastFrame);
        lastFrame = now;
        t = progress / time;
        t = Math.sin(t * Math.PI / 2);

        if (progress > time) {
            progress = time;
        }

        component.setState({style: func(t)});
        // console.log(func(progress / time));

        if (progress !== time) {
            requestAnimationFrame(frameRender);
        } else {
            component.setState({style: null});
            done();
        }
    };
    component.setState({style: func(0)});
    requestAnimationFrame(frameRender);
};
let animations = {
    enter: {
        forward: progress => ({
            WebkitTransform: `translateX(${100 - progress * 100}%)`,
            opacity: progress
        }),
        backward: progress => ({
            WebkitTransform: `translateX(${-100 + progress * 100}%)`,
            opacity: progress
        })
    },
    leave: {
        forward: progress => ({
            WebkitTransform: `translateX(${-progress * 100}%)`,
            opacity: 1 - progress
        }),
        backward: progress => ({
            WebkitTransform: `translateX(${progress * 100}%)`,
            opacity: 1 - progress
        })
    }
};

let TestTransitioner = React.createClass({
    getInitialState () {
        return {style: null};
    },
    componentWillEnter (done) {
        animator(this, done, animations.enter[this.props.parent.direction], App.transitionTime);
    },
    componentWillLeave (done) {
        let finish;

        finish = () => {
            done();
        };
        animator(this, done, animations.leave[this.props.parent.direction], App.transitionTime);
    },
    render () {
        let style;
        let extra;

        style = {
            height: '100%',
            width: '100%',
            position: 'absolute',
            backgroundColor: 'white',
            ...this.state.style
        }
        return <div style={style}>{this.props.children}</div>;
    }
});

ScreenWrapper = React.createClass({
    render () {
        let {action} = this.props;

        if (action !== 'pop') {
            this.direction = 'forward';
        } else {
            this.direction = 'backward';
        }
        return (
            <React.addons.TransitionGroup component="div" style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, WebkitTransform: 'translateZ(0)'}}>
                <TestTransitioner key={Date.now()} parent={this}>
                    <ReactRouter.RouteHandler />
                </TestTransitioner>
            </React.addons.TransitionGroup>
        );
    }
});

App.ScreenTransition = ScreenWrapper;

let appComponent;
appContainer = document.querySelector("#AppContainer");
App.start = (routes, {hiddenStatusBar = false, orientation = 'portrait'} = {}) => {
    let bbox;
    let container;

    bbox = document.body.getBoundingClientRect();
    if (hiddenStatusBar === true) {
        bbox = screen;
    }
    let {width, height} = bbox;
    if (orientation === 'landscape' && width < height) {
        [width, height] = [height, width];
    }

    // if (typeof cordova !== 'undefined') {
    //     width = '100%';
    //     height = '100%';
    // } else {
    //     width = `${width}px`;
    //     height = `${height}px`;
    // }

    // container = document.querySelector("#AppContainer");
    // container.style.width = width;
    // container.style.height = height;

    // ReactRouter.run(
    //     routes,
    //     (Handler, changeInfo) => {
    //         React.render(
    //             <Handler action={changeInfo.action} />,
    //             appContainer
    //         );
    //     }
    // );
    appComponent = ReactDOM.render(
        <Router>{routes}</Router>,
        appContainer
    );
};

let frameFunction = () => {
    requestAnimationFrame(frameFunction);
    PubSub.publishSync("system.framedraw");
};
requestAnimationFrame(frameFunction);

App.transitionTo = url => appComponent.history.pushState(null, url);
App.replaceWith = url => appComponent.history.replaceState(null, url, null);
App.goBack = () => appComponent.history.goBack();

window.App = App;
window.createComponent = React.createClass;

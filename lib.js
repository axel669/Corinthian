import "babel-polyfill";

import {XRegExp} from "xregexp";
import PubSub from "pubsub-js";
import React from "react";
import ReactDOM from "react-dom";
import CSSTransition from "react-addons-css-transition-group";
import * as ReactRouter from "react-router";
import {createHashHistory} from "history";


import "lib-source/v2/deviceready";
import "lib-source/v2/gesture";
import chrono from "lib-source/v2/chrono";
import ajax from "lib-source/v2/ajax";
import appData from "lib-source/v2/appdata";
import fs from "lib-source/v2/fs";

import ionic from "lib-source/v2/ionic-icons";

import Icon from 'lib-source/uiv2/icon';
import Ripple from 'lib-source/uiv2/ripple';
import Button from 'lib-source/uiv2/button';
import IconButton from 'lib-source/uiv2/iconbutton';
import Card from 'lib-source/uiv2/Card';
import Image from 'lib-source/uiv2/Image';
import CenterContent from 'lib-source/uiv2/CenterContent';
import Checkbox from 'lib-source/uiv2/Checkbox';
import Toggle from 'lib-source/uiv2/Toggle';
import Touchable from 'lib-source/uiv2/Touchable';
import Combobox from 'lib-source/uiv2/Combobox';
import Option from 'lib-source/uiv2/Option';
import Spinner from 'lib-source/uiv2/Spinner';
import Radio from 'lib-source/uiv2/Radio';
import Calendar from 'lib-source/uiv2/Calendar';
import Input from 'lib-source/uiv2/Input';
import ProgressBar from 'lib-source/uiv2/ProgressBar';

import Flexbox from 'lib-source/uiv2/layout/Flexbox';
import Grid from 'lib-source/uiv2/layout/Grid';
import Pinboard from 'lib-source/uiv2/layout/Pinboard';

import Form from 'lib-source/uiv2/Form';
import Screen from 'lib-source/uiv2/Screen';

import {defineComponentStyle,  __setup as createStyles, defineStyleForComponent, genFontCSS} from "lib-source/v2/style";

import {warningFunc} from "lib-source/v2/utils";
import {sharedReference, SharedObjectDisplay} from "lib-source/v2/shared";

import secure from 'lib-source/v2/crypto';
import zip from 'lib-source/v2/zip';
import Environment from 'lib-source/v2/Environment';

import RobotoURI from "lib-source/data-uri/roboto-light.woff.source";
import IonicURI from "lib-source/data-uri/ionicons.woff.source";

const {Route, Router, useRouterHistory} = ReactRouter;

const coolBlue = "#2FB1DF";

window.range = (size, value) => {
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

defineComponentStyle(
    'final',
    'fantasy',
    {
        "$*": {
            boxSizing: 'border-box'
        },
        "$body": {
            fontFamily: "Roboto",
            backgroundColor: '#f1f1f1',
        },
        "$html, $body": {
            padding: 0,
            margin: 0
        }
    }
);
if (Environment.app === false) {
    defineComponentStyle(
        'global',
        'elite',
        {
            "$html, $body": {
                WebkitOverflowScrolling: 'touch'
            }
        }
    );
} else {
    defineComponentStyle(
        'global',
        'elite',
        {
            "$body": {
                overflow: 'hidden',
                width: '100%',
                height: '100%'
            }
        }
    );
}

defineComponentStyle(
    'app',
    'core',
    {
    }
);
defineComponentStyle(
    'roboto',
    'font',
    {"$@font-face": genFontCSS("Roboto", RobotoURI)}
);
defineComponentStyle(
    'ionic',
    'font',
    {"$@font-face": genFontCSS("Ionic", IonicURI)}
);

window.qsel = (...args) => document.querySelector(...args);

let backRef;
const App = {
    async start(appRoutes, options) {
        await deviceReady;
        removePreviousStyles();
        createStyles();
        routes = appRoutes;
        backRef = [];
        navReplace("/");
    },
    get rc() {
        return renderedComponent;
    }
};
if (Environment.app === true) {
    App.navigation = {
        push(url) {
            backRef.push(currentPath());
            navReplace(url);
        },
        pop() {
            if (backRef.length === 0) {
                throw new Error("Cannot go back");
            }
            navReplace(backRef.pop());
        },
        replace(url){
            navReplace(url);
        }
    };
} else {
    App.navigation = {
        push(url) {
            navPush(url);
        },
        pop() {
            navPop();
        },
        replace(url) {
            navReplace(url);
        }
    };
}

const PlaceHolder = () => <div>Loading App</div>;
let routes = <Route path="/" component={PlaceHolder} />;
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});
history.replaceState(null, null, "#/");
const renderedComponent = ReactDOM.render(
    <Router history={appHistory}>
        <Route getChildRoutes={(loc, cb) => cb(null, routes)} />
    </Router>,
    qsel("#app-container")
);
const currentPath = () => renderedComponent.state.location.pathname;
const navPush = url => renderedComponent.router.push(url);
const navReplace = url => renderedComponent.router.replace(url);
const navPop = () => renderedComponent.router.pop();
// renderedComponent.router.replace("/_sys_back");

const removePreviousStyles = () => {
    const head = document.querySelector("head");

    for (const styleTag of head.querySelectorAll("style[data-generated]")) {
        head.removeChild(styleTag);
    }
};

let prevFrameTime = Date.now();
const frameHandler = () => {
    const now = Date.now();
    const frameTime = now - prevFrameTime;

    prevFrameTime = now;
    requestAnimationFrame(frameHandler);
    PubSub.publishSync("system.framedraw", frameTime);
};
requestAnimationFrame(frameHandler);

App.getSettings = appData.getSettings;
App.getSession = appData.getSession;
App.API = appData.API;

window.defineComponentStyle = defineComponentStyle;
window.defineStyleForComponent = defineStyleForComponent;

window.chrono = chrono;
window.ajax = ajax;
window.fs = fs;

window.regex = XRegExp;
window.PubSub = PubSub;
window.zip = zip;
window.env = Environment;
window.security = secure;
window.ionicIcons = ionic;

window.PubSub = PubSub;

window.App = App;
window.React = React;
window.ReactDOM = ReactDOM;
window.Route = Route;
window.UI = {
    Icon,
    Ripple,
    Button,
    IconButton,
    Card,
    Image,
    CenterContent,
    Checkbox,
    Toggle,
    Touchable,
    Combobox,
    Option,
    Spinner,
    Radio,
    Calendar,
    Input,
    ProgressBar,

    Flexbox,
    Grid,
    Pinboard,

    Form,
    Screen
};
window.Util = {
    warningFunc,
    sharedReference,
    SharedObjectDisplay
};
window.GlobalSettings = App.getSettings("");

window.cblog = ::console.log;
window.cberr = ::console.error;

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = "data:image/gif;base64,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";

},{}],2:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _libSourceV2StyleJs = require("lib-source/v2/style.js");

var _libSourceUiv2RippleJs = require("lib-source/uiv2/ripple.js");

var _libSourceUiv2RippleJs2 = _interopRequireDefault(_libSourceUiv2RippleJs);

var _libSourceUiv2IconJs = require('lib-source/uiv2/icon.js');

var _libSourceUiv2IconJs2 = _interopRequireDefault(_libSourceUiv2IconJs);

var _libSourceUiv2Touchable = require('lib-source/uiv2/Touchable');

var _libSourceUiv2Touchable2 = _interopRequireDefault(_libSourceUiv2Touchable);

_libSourceV2StyleJs.defineComponentStyle('button', 'core', {
    "wrapper": {
        position: 'relative',
        textAlign: 'center',
        margin: 4,
        overflow: 'hidden',
        zIndex: "+0",
        backgroundColor: 'transparent',
        color: 'black',
        // color: () => Theme.variable.core.button.textColor,
        // textTransform: 'uppercase',
        whiteSpace: 'pre',
        display: 'inline-block',
        borderRadius: 3
    },
    "wrapper:focus": {
        outline: 'none'
    },
    "wrapper[disabled]": {
        backgroundColor: '#eaeaea',
        color: '#a0a0a0'
    },
    "text-wrapper": {
        display: 'table',
        width: '100%'
    },
    "text": {
        height: '100%',
        width: '100%',
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'center',
        verticalAlign: 'middle',
        whiteSpace: 'pre',
        display: 'table-cell'
    },
    "wrapper > overlay": {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition: 'background-color 500ms linear'
    },
    ".core-desktop overlay:hover": {
        backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    "wrapper:active > overlay": {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        transition: 'none'
    }
});
/*
    text
    onTap
    styleName
*/
var Button = function Button(props) {
    var text = props.text;
    var _props$onTap = props.onTap;
    var onTap = _props$onTap === undefined ? function () {
        return console.warn("No onTap given to Button");
    } : _props$onTap;
    var _props$styleName = props.styleName;
    var styleName = _props$styleName === undefined ? "core" : _props$styleName;
    var buttonColor = props.buttonColor;
    var textColor = props.textColor;
    var flush = props.flush;
    var block = props.block;
    var fill = props.fill;
    var padding = props.padding;
    var disabled = props.disabled;
    var _props$iconName = props.iconName;
    var iconName = _props$iconName === undefined ? null : _props$iconName;

    var wrapperName = "button-" + styleName + "-wrapper";
    var textWrapperName = "button-" + styleName + "-text-wrapper";
    var textName = "button-" + styleName + "-text";
    var overlayName = "button-" + styleName + "-overlay";

    var wrapperStyle = {};
    var textWrapperStyle = {};
    var rippleElement = undefined;
    var onTapHandler = undefined;

    if (disabled !== true) {
        // rippleElement = <Ripple />;
        onTapHandler = onTap;
    }
    if (block === true) {
        wrapperStyle.display = 'block';
    }
    if (fill === true) {
        flush = true;
        wrapperStyle.width = '100%';
        wrapperStyle.height = '100%';
        textWrapperStyle.height = '100%';
    }
    if (flush === true) {
        wrapperStyle.margin = 0;
    }
    if (iconName !== null) {
        text = React.createElement(
            "span",
            null,
            React.createElement(_libSourceUiv2IconJs2["default"], { name: iconName }),
            text
        );
    }

    return React.createElement(
        _libSourceUiv2Touchable2["default"],
        { component: "div", tabIndex: -1, className: wrapperName, onTap: onTapHandler, disabled: disabled, style: wrapperStyle },
        React.createElement(
            "div",
            { className: textWrapperName, style: textWrapperStyle },
            React.createElement(
                "div",
                { className: textName },
                text
            )
        ),
        React.createElement("div", { className: overlayName }),
        rippleElement
    );
};

exports["default"] = Button;
module.exports = exports["default"];

},{"babel-runtime/helpers/interop-require-default":30,"lib-source/uiv2/Touchable":16,"lib-source/uiv2/icon.js":8,"lib-source/uiv2/ripple.js":13,"lib-source/v2/style.js":17}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _libSourceV2Style = require("lib-source/v2/style");

_libSourceV2Style.defineComponentStyle('card', 'core', {
    "container": {
        margin: 5,
        padding: 5,
        boxShadow: '1px 2px 2px rgba(120, 120, 120, 0.15)',
        border: '1px solid #e0e0e0',
        backgroundColor: 'white',
        borderRadius: 3
    },
    "title": {
        fontSize: 20,
        padding: 3,
        color: 'black'
    }
});
var Card = function Card(_ref) {
    var children = _ref.children;
    var _ref$title = _ref.title;
    var title = _ref$title === undefined ? null : _ref$title;

    var content = undefined;

    if (title === null) {
        content = children;
    } else {
        content = React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'card-core-title' },
                title
            ),
            children
        );
    }

    return React.createElement(
        'div',
        { className: 'card-core-container' },
        content
    );
};

exports['default'] = Card;
module.exports = exports['default'];

},{"lib-source/v2/style":17}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _libSourceV2Style = require("lib-source/v2/style");

_libSourceV2Style.defineComponentStyle('center-content', 'core', {
    'container': {
        display: 'table',
        whiteSpace: 'pre',
        textAlign: 'center',
        width: '100%'
    },
    'content': {
        display: 'table-cell',
        verticalAlign: 'middle',
        padding: 'auto'
    }
});
var CenterContent = function CenterContent(_ref) {
    var children = _ref.children;
    var width = _ref.width;
    var height = _ref.height;
    var _ref$className = _ref.className;
    var className = _ref$className === undefined ? "" : _ref$className;
    return React.createElement(
        'div',
        { className: 'center-content-core-container ' + className, style: { width: width, height: height } },
        React.createElement(
            'div',
            { className: 'center-content-core-content' },
            React.createElement(
                'div',
                { style: { margin: 'auto', display: 'inline-block' } },
                children
            )
        )
    );
};

exports['default'] = CenterContent;
module.exports = exports['default'];

},{"lib-source/v2/style":17}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _libSourceV2Style = require("lib-source/v2/style");

var _libSourceUiv2CenterContent = require("lib-source/uiv2/CenterContent");

var _libSourceUiv2CenterContent2 = _interopRequireDefault(_libSourceUiv2CenterContent);

// import Ripple from "lib-source/uiv2/Ripple";

var _libSourceUiv2Icon = require("lib-source/uiv2/Icon");

var _libSourceUiv2Icon2 = _interopRequireDefault(_libSourceUiv2Icon);

_libSourceV2Style.defineComponentStyle('checkbox', 'core', {
    "container": {
        position: 'relative',
        transition: 'background-color 500ms linear',
        fontSize: 20,
        overflow: 'hidden'
    },
    "container:active": {
        backgroundColor: 'rgba(0, 0, 0, 0.075)',
        transition: 'none'
    },
    "icon": {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: 30,
        color: 'black',
        fontSize: 24,
        transition: 'color 250ms linear'
    },
    "icon[data-checked='true']": {
        color: '#24b324'
    },
    "label": {
        padding: 3,
        paddingRight: 30,
        whiteSpace: 'pre',
        color: 'black'
    },
    "subtitle": {
        color: 'gray',
        fontSize: 14
    }
});
var ionOnIcon = "ion-android-checkbox";
var ionOffIcon = "ion-android-checkbox-outline-blank";

var Checkbox = function Checkbox(props) {
    var _props$checked = props.checked;
    var checked = _props$checked === undefined ? false : _props$checked;
    var _props$onIconName = props.onIconName;
    var onIconName = _props$onIconName === undefined ? ionOnIcon : _props$onIconName;
    var _props$offIconName = props.offIconName;
    var offIconName = _props$offIconName === undefined ? ionOffIcon : _props$offIconName;
    var label = props.label;
    var _props$subTitle = props.subTitle;
    var subTitle = _props$subTitle === undefined ? null : _props$subTitle;
    var _props$onChange = props.onChange;
    var onChange = _props$onChange === undefined ? function () {
        return console.warn("No onChange given to checkbox");
    } : _props$onChange;

    var iconName = checked === true ? onIconName : offIconName;
    var content = label;

    if (subTitle !== null) {
        content = React.createElement(
            "div",
            null,
            label,
            React.createElement(
                "div",
                { className: "checkbox-core-subtitle" },
                subTitle
            )
        );
    }

    return React.createElement(
        UI.Touchable,
        { component: "div", className: "checkbox-core-container", onTap: function () {
                return onChange(!checked);
            } },
        React.createElement(
            "div",
            { className: "checkbox-core-icon", "data-checked": checked },
            React.createElement(
                _libSourceUiv2CenterContent2["default"],
                { height: "100%" },
                React.createElement(_libSourceUiv2Icon2["default"], { name: iconName })
            )
        ),
        React.createElement(
            "div",
            { className: "checkbox-core-label" },
            content
        )
    );
};

exports["default"] = Checkbox;
module.exports = exports["default"];
/*<Ripple />*/

},{"babel-runtime/helpers/interop-require-default":30,"lib-source/uiv2/CenterContent":4,"lib-source/uiv2/Icon":8,"lib-source/v2/style":17}],6:[function(require,module,exports){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _libSourceV2Style = require("lib-source/v2/style");

var _libSourceUiv2Button = require("lib-source/uiv2/Button");

var _libSourceUiv2Button2 = _interopRequireDefault(_libSourceUiv2Button);

var _libSourceUiv2Icon = require("lib-source/uiv2/Icon");

var _libSourceUiv2Icon2 = _interopRequireDefault(_libSourceUiv2Icon);

var _libSourceUiv2Option = require("lib-source/uiv2/Option");

var _libSourceUiv2Option2 = _interopRequireDefault(_libSourceUiv2Option);

var _libSourceUiv2Touchable = require("lib-source/uiv2/Touchable");

var _libSourceUiv2Touchable2 = _interopRequireDefault(_libSourceUiv2Touchable);

_libSourceV2Style.defineComponentStyle('combobox', 'core', {
    'container': {
        border: '1px solid lightgray',
        borderRadius: 3,
        // padding: 3,
        position: 'relative',
        color: 'black'
    },
    "icon": {
        position: 'absolute',
        top: '50%',
        right: 10,
        transform: 'translateY(-50%)',
        pointerEvents: 'none'
    }
});

var comboboxSelect = function comboboxSelect(index, value) {
    return dialog.success([index, value]);
};

var Combobox = (function (_React$Component) {
    _inherits(Combobox, _React$Component);

    function Combobox(props) {
        var _this = this;

        _classCallCheck(this, Combobox);

        _React$Component.call(this, props);

        this.openOptions = function callee$2$0() {
            var _props, _props$title, title, _props$scrollToSelected, scrollToSelected, selectedIndex, children, response, _props2;

            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        _props = this.props;
                        _props$title = _props.title;
                        title = _props$title === undefined ? "Combobox!" : _props$title;
                        _props$scrollToSelected = _props.scrollToSelected;
                        scrollToSelected = _props$scrollToSelected === undefined ? false : _props$scrollToSelected;
                        selectedIndex = _props.selectedIndex;
                        children = React.Children.toArray(this.props.children);
                        context$3$0.next = 9;
                        return _regeneratorRuntime.awrap(dialog.show({
                            title: title,
                            content: children.map(function (_ref, index) {
                                var _ref$props = _ref.props;
                                var _ref$props$value = _ref$props.value;
                                var value = _ref$props$value === undefined ? null : _ref$props$value;
                                var children = _ref$props.children;
                                var _ref$props$style = _ref$props.style;
                                var style = _ref$props$style === undefined ? null : _ref$props$style;
                                var _ref$props$className = _ref$props.className;
                                var className = _ref$props$className === undefined ? null : _ref$props$className;

                                var onTap = function onTap() {
                                    return dialog.hide(comboboxSelect(index, value));
                                };
                                return React.createElement(
                                    "div",
                                    _extends({ style: style, className: className }, { key: index }),
                                    React.createElement(_libSourceUiv2Button2["default"], { text: children, block: true, flush: true, onTap: onTap })
                                );
                            }),
                            buttons: [{ text: "Cancel", cancels: true }],
                            setup: function setup(container) {
                                if (scrollToSelected === true && selectedIndex !== -1) {
                                    container.scrollTop = container.children[selectedIndex].offsetTop - container.offsetTop;
                                }
                            }
                        }));

                    case 9:
                        response = context$3$0.sent;

                        if (response.status === "success") {
                            (_props2 = this.props).onChange.apply(_props2, response.value);
                        }

                    case 11:
                    case "end":
                        return context$3$0.stop();
                }
            }, null, _this);
        };

        this.render = function () {
            var _props3 = _this.props;
            var selectedIndex = _props3.selectedIndex;
            var children = _props3.children;

            var flattenedChildren = React.Children.toArray(children);
            var currentChild = "Please select an option";

            if (selectedIndex !== -1) {
                currentChild = flattenedChildren[selectedIndex].props.children;
            }

            return React.createElement(
                _libSourceUiv2Touchable2["default"],
                { component: "div", className: "combobox-core-container" },
                React.createElement(_libSourceUiv2Button2["default"], { text: currentChild, block: true, flush: true, onTap: _this.openOptions }),
                React.createElement(
                    "div",
                    { className: "combobox-core-icon" },
                    React.createElement(_libSourceUiv2Icon2["default"], { name: "ion-arrow-down-b", size: 24 })
                )
            );
        };
    }

    return Combobox;
})(React.Component);

exports["default"] = Combobox;
module.exports = exports["default"];

},{"babel-runtime/helpers/class-call-check":27,"babel-runtime/helpers/extends":28,"babel-runtime/helpers/inherits":29,"babel-runtime/helpers/interop-require-default":30,"babel-runtime/regenerator":32,"lib-source/uiv2/Button":2,"lib-source/uiv2/Icon":8,"lib-source/uiv2/Option":11,"lib-source/uiv2/Touchable":16,"lib-source/v2/style":17}],7:[function(require,module,exports){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _libSourceV2Style = require("lib-source/v2/style");

var _libSourceUiv2Button = require("lib-source/uiv2/Button");

var _libSourceUiv2Button2 = _interopRequireDefault(_libSourceUiv2Button);

var _libSourceUiv2Touchable = require("lib-source/uiv2/Touchable");

var _libSourceUiv2Touchable2 = _interopRequireDefault(_libSourceUiv2Touchable);

var animationTime = 250;
_libSourceV2Style.defineComponentStyle('dialog', 'core', {
    "overlay": {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        zIndex: '+100',
        display: 'none',
        WebkitOverflowScrolling: 'auto',
        opacity: 0,
        transition: "opacity " + animationTime + "ms linear"
    },

    "window": {
        position: 'absolute',
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',
        borderRadius: 5,
        width: '75%',
        maxWidth: 480,
        padding: 0,
        overflow: 'hidden'
    },
    "window-top": {
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)'
    },
    "window-center": {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },

    "content": {
        maxHeight: '40vh',
        WebkitOverflowScrolling: 'touch',
        overflow: 'auto',
        borderBottom: '1px solid lightgray',
        borderTop: '1px solid lightgray'
    },
    "title": {
        padding: '5 15',
        fontSize: 20,
        fontWeight: 900,
        color: 'black'
    }
});

var currentDialog = null;
window.dialog = {
    show: function show(options) {
        return currentDialog.show(options);
    },
    hide: function hide(value) {
        return currentDialog.hide(value);
    },
    success: function success(value) {
        return { value: value, status: 'success' };
    },
    cancel: function cancel(value) {
        return { value: value, status: 'canceled' };
    },
    invalid: function invalid() {
        var value = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
        var reason = arguments.length <= 1 || arguments[1] === undefined ? 'invalid' : arguments[1];

        return { value: value, reason: reason };
    }
};

var Dialog = (function (_React$Component) {
    _inherits(Dialog, _React$Component);

    function Dialog(props) {
        var _this2 = this;

        _classCallCheck(this, Dialog);

        _React$Component.call(this, props);

        this.show = function callee$2$0(displayProps) {
            var _displayProps$content, content, _displayProps$closable, closable, _displayProps$buttons, buttons, _displayProps$title, title, _displayProps$setup, setup;

            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                var _this = this;

                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        if (!(this.animating === true || this.resolver !== null)) {
                            context$3$0.next = 2;
                            break;
                        }

                        return context$3$0.abrupt("return", dialog.invalid());

                    case 2:
                        this.animating = true;
                        this.resolver = new _Promise(function (resolve) {
                            _this.response = function (value) {
                                return resolve(value);
                            };
                        });

                        _displayProps$content = displayProps.content;
                        content = _displayProps$content === undefined ? null : _displayProps$content;
                        _displayProps$closable = displayProps.closable;
                        closable = _displayProps$closable === undefined ? true : _displayProps$closable;
                        _displayProps$buttons = displayProps.buttons;
                        buttons = _displayProps$buttons === undefined ? [{ text: 'ok' }] : _displayProps$buttons;
                        _displayProps$title = displayProps.title;
                        title = _displayProps$title === undefined ? null : _displayProps$title;
                        _displayProps$setup = displayProps.setup;
                        setup = _displayProps$setup === undefined ? null : _displayProps$setup;

                        this.setState({ display: 'block', content: content, buttons: buttons, closable: closable, title: title });
                        context$3$0.next = 17;
                        return _regeneratorRuntime.awrap(chrono.wait(50));

                    case 17:
                        this.refs.container.scrollTop = 0;
                        if (setup !== null) {
                            setup(this.refs.container);
                        }
                        this.setState({ opacity: 1 });
                        context$3$0.next = 22;
                        return _regeneratorRuntime.awrap(chrono.wait(animationTime));

                    case 22:
                        this.animating = false;
                        context$3$0.next = 25;
                        return _regeneratorRuntime.awrap(this.resolver);

                    case 25:
                        return context$3$0.abrupt("return", context$3$0.sent);

                    case 26:
                    case "end":
                        return context$3$0.stop();
                }
            }, null, _this2);
        };

        this.hide = function callee$2$0(value) {
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                var _this3 = this;

                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        if (!(this.animating === true || this.resolve === null)) {
                            context$3$0.next = 2;
                            break;
                        }

                        return context$3$0.abrupt("return");

                    case 2:
                        this.animating = true;
                        this.setState({ opacity: null });
                        context$3$0.next = 6;
                        return _regeneratorRuntime.awrap(chrono.wait(animationTime));

                    case 6:
                        this.setState({ display: null });
                        requestAnimationFrame(function () {
                            _this3.response(value);
                            _this3.response = null;
                            _this3.resolver = null;
                        });
                        this.animating = false;

                    case 9:
                    case "end":
                        return context$3$0.stop();
                }
            }, null, _this2);
        };

        this.close = function () {
            if (_this2.state.closable === false) {
                return;
            }
            _this2.hide(dialog.cancel(null));
        };

        this.stopper = function (evt) {
            evt.stopPropagation();
        };

        this.componentDidMount = function () {
            currentDialog = _this2;
        };

        this.componentWillUnmount = function () {
            currentDialog = null;
        };

        this.render = function () {
            var _state = _this2.state;
            var display = _state.display;
            var opacity = _state.opacity;
            var pos = _state.pos;
            var content = _state.content;
            var buttons = _state.buttons;
            var title = _state.title;

            var buttonList = (buttons || []).map(function (_ref, index) {
                var text = _ref.text;
                var _ref$value = _ref.value;
                var value = _ref$value === undefined ? null : _ref$value;
                var _ref$cancels = _ref.cancels;
                var cancels = _ref$cancels === undefined ? false : _ref$cancels;

                // const valueFunc = (cancels === true) ? dialog.cancel : dialog.success;
                var retValue = cancels === true ? dialog.cancel(value) : dialog.success(value);
                return React.createElement(_libSourceUiv2Button2["default"], { text: text, key: index, onTap: function () {
                        return _this2.hide(retValue);
                    }, block: true, flush: true });
            });
            var titleDisplay = null;

            if (title !== null) {
                titleDisplay = React.createElement(
                    "div",
                    { className: "dialog-core-title" },
                    title
                );
            }

            return React.createElement(
                _libSourceUiv2Touchable2["default"],
                { component: "div", onTap: _this2.close, className: "dialog-core-overlay", style: { display: display, opacity: opacity } },
                React.createElement(
                    _libSourceUiv2Touchable2["default"],
                    { component: "div", className: "dialog-core-window dialog-core-window-" + pos, onTap: _this2.stopper },
                    titleDisplay,
                    React.createElement(
                        "div",
                        { className: "dialog-core-content", ref: "container" },
                        content
                    ),
                    React.createElement(
                        UI.Flexbox,
                        { colCount: 3 },
                        buttonList
                    )
                )
            );
        };

        this.state = {
            display: null,
            opacity: null,
            name: null,
            pos: 'top',
            content: null,
            closable: !true,
            buttons: null,
            title: null
        };
        this.animating = false;
        this.resolver = null;
    }

    return Dialog;
})(React.Component);

exports["default"] = Dialog;
module.exports = exports["default"];

// console.log(this.animating, this.animating === true);
/*<Button text="demo" block onTap={() => this.hide('test')} />*/

},{"babel-runtime/core-js/promise":24,"babel-runtime/helpers/class-call-check":27,"babel-runtime/helpers/inherits":29,"babel-runtime/helpers/interop-require-default":30,"babel-runtime/regenerator":32,"lib-source/uiv2/Button":2,"lib-source/uiv2/Touchable":16,"lib-source/v2/style":17}],8:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _libSourceV2StyleJs = require("lib-source/v2/style.js");

_libSourceV2StyleJs.defineComponentStyle('icon', 'core', {
    "content": {
        fontFamily: "Ionic",
        marginLeft: 2,
        marginRight: 2
    }
});
var Icon = function Icon(_ref) {
    var name = _ref.name;
    var _ref$styleName = _ref.styleName;
    var styleName = _ref$styleName === undefined ? 'core' : _ref$styleName;
    var size = _ref.size;
    return React.createElement(
        'span',
        { className: 'icon-' + styleName + '-content', style: { fontSize: size } },
        ionic[name]
    );
};

exports['default'] = Icon;
module.exports = exports['default'];

},{"lib-source/v2/style.js":17}],9:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _libSourceV2StyleJs = require("lib-source/v2/style.js");

var _libSourceUiv2RippleJs = require("lib-source/uiv2/ripple.js");

var _libSourceUiv2RippleJs2 = _interopRequireDefault(_libSourceUiv2RippleJs);

var _libSourceUiv2IconJs = require('lib-source/uiv2/icon.js');

var _libSourceUiv2IconJs2 = _interopRequireDefault(_libSourceUiv2IconJs);

_libSourceV2StyleJs.defineComponentStyle('icon-button', 'core', {
    "wrapper": {
        position: 'relative',
        textAlign: 'center',
        margin: 4,
        overflow: 'hidden',
        zIndex: "+0",
        backgroundColor: 'transparent',
        color: function color() {
            return _libSourceV2StyleJs.Theme.variable.core.button.textColor;
        },
        display: 'inline-block',
        borderRadius: '50%'
    }
});
var IconButton = function IconButton(props) {
    var _props$size = props.size;
    var size = _props$size === undefined ? 42 : _props$size;
    var name = props.name;
    var iconSize = props.iconSize;
    var _props$styleName = props.styleName;
    var styleName = _props$styleName === undefined ? 'core' : _props$styleName;

    var wrapperName = "icon-button-" + styleName + "-wrapper";

    return React.createElement(
        UI.Touchable,
        { component: "div", className: wrapperName, style: { width: size, height: size } },
        React.createElement(_libSourceUiv2RippleJs2["default"], null),
        React.createElement(
            "div",
            { className: "button-core-text-wrapper", style: { height: '100%' } },
            React.createElement(
                "div",
                { className: "button-core-text", style: { padding: 0 } },
                React.createElement(_libSourceUiv2IconJs2["default"], { name: name, size: iconSize })
            )
        )
    );
};

exports["default"] = IconButton;
module.exports = exports["default"];

},{"babel-runtime/helpers/interop-require-default":30,"lib-source/uiv2/icon.js":8,"lib-source/uiv2/ripple.js":13,"lib-source/v2/style.js":17}],10:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var Image = function Image(_ref) {
    var source = _ref.source;
    var _ref$width = _ref.width;
    var width = _ref$width === undefined ? '100%' : _ref$width;
    var _ref$height = _ref.height;
    var height = _ref$height === undefined ? null : _ref$height;
    var _ref$imageSize = _ref.imageSize;
    var imageSize = _ref$imageSize === undefined ? 'fit' : _ref$imageSize;
    var color = _ref.color;
    var _ref$block = _ref.block;
    var block = _ref$block === undefined ? false : _ref$block;

    if (height === null) {
        throw new Error("Need to give image height");
    }

    var style = {
        display: block === true ? "block" : "inline-block",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: 'url("' + source + '")',
        position: 'relative',
        backgroundColor: color,
        width: width,
        height: height
    };

    switch (imageSize) {
        case 'fit':
            style.backgroundSize = 'contain';
            break;

        case 'clip':
            style.backgroundSize = 'cover';
            break;

        default:
            style.backgroundSize = imageSize;
    }

    return React.createElement('div', { style: style });
};

exports['default'] = Image;
module.exports = exports['default'];

},{}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var Option = function Option() {
    throw new Error("Option is intended as a filler element and should not be rendered on its own");
};

exports["default"] = Option;
module.exports = exports["default"];

},{}],12:[function(require,module,exports){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _objectWithoutProperties = require("babel-runtime/helpers/object-without-properties")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _Object$entries = require("babel-runtime/core-js/object/entries")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _libSourceV2Style = require("lib-source/v2/style");

var _libSourceUiv2CenterContent = require("lib-source/uiv2/CenterContent");

var _libSourceUiv2CenterContent2 = _interopRequireDefault(_libSourceUiv2CenterContent);

var _libSourceUiv2Touchable = require("lib-source/uiv2/Touchable");

var _libSourceUiv2Touchable2 = _interopRequireDefault(_libSourceUiv2Touchable);

var _libSourceUiv2Icon = require("lib-source/uiv2/Icon");

var _libSourceUiv2Icon2 = _interopRequireDefault(_libSourceUiv2Icon);

_libSourceV2Style.defineComponentStyle('radio', 'core', {
    "title": {
        fontSize: 22,
        padding: 3
    }
});
_libSourceV2Style.defineComponentStyle("radio-item", "core", {
    "default-item": {
        color: 'black',
        position: 'relative',
        paddingLeft: 30,
        transition: 'background-color 500ms linear'
    },
    ".radio-item-container:active > default-item": {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        transition: 'none'
    },
    "icon": {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: 30
    }
});
var RadioItem = function RadioItem(_ref) {
    var checked = _ref.checked;
    var iconColor = _ref.iconColor;
    var children = _ref.children;

    var iconName = "ion-android-radio-button-" + (checked === true ? 'on' : 'off');
    return React.createElement(
        "div",
        { className: "radio-item-core-default-item", "data-checked": checked },
        React.createElement(
            "div",
            { className: "radio-item-core-icon", "data-checked": checked },
            React.createElement(
                _libSourceUiv2CenterContent2["default"],
                { height: "100%" },
                React.createElement(_libSourceUiv2Icon2["default"], { size: 18, name: iconName })
            )
        ),
        children
    );
};

var Radio = (function (_React$Component) {
    _inherits(Radio, _React$Component);

    function Radio(props) {
        var _this = this;

        _classCallCheck(this, Radio);

        _React$Component.call(this, props);

        this.select = function (index, value) {
            if (index !== _this.props.selectedIndex) {
                _this.props.onChange(index, value);
            }
        };

        this.render = function () {
            var _props = _this.props;
            var _props$layout = _props.layout;
            var layout = _props$layout === undefined ? 'div' : _props$layout;
            var selectedIndex = _props.selectedIndex;
            var _props$onChange = _props.onChange;
            var onChange = _props$onChange === undefined ? function () {} : _props$onChange;
            var title = _props.title;

            var Container = layout;

            var _props2 = _this.props;
            var children = _props2.children;

            var layoutProps = _objectWithoutProperties(_props2, ["children"]);

            var Item = undefined;

            if (Container === 'div') {
                Item = RadioItem;
            } else {
                Item = Container.RadioItem;
            }

            children = React.Children.toArray(children);
            layoutProps = _Object$entries(layoutProps).reduce(function (newProps, _ref2) {
                var key = _ref2[0];
                var value = _ref2[1];

                if (key.startsWith("layout-") === true) {
                    newProps[key.slice(7)] = value;
                }
                return newProps;
            }, {});

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "radio-core-title" },
                    title
                ),
                React.createElement(
                    Container,
                    layoutProps,
                    children.map(function (child, index) {
                        var value = child.props.value;
                        return React.createElement(
                            _libSourceUiv2Touchable2["default"],
                            { component: "div", className: "radio-item-container", key: index, onTap: function () {
                                    return _this.select(index, value);
                                } },
                            React.createElement(Item, _extends({ checked: selectedIndex === index }, child.props))
                        );
                    })
                )
            );
        };
    }

    return Radio;
})(React.Component);

exports["default"] = Radio;
module.exports = exports["default"];

},{"babel-runtime/core-js/object/entries":22,"babel-runtime/helpers/class-call-check":27,"babel-runtime/helpers/extends":28,"babel-runtime/helpers/inherits":29,"babel-runtime/helpers/interop-require-default":30,"babel-runtime/helpers/object-without-properties":31,"lib-source/uiv2/CenterContent":4,"lib-source/uiv2/Icon":8,"lib-source/uiv2/Touchable":16,"lib-source/v2/style":17}],13:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _libSourceV2StyleJs = require("lib-source/v2/style.js");

var animationDuration = 300;
_libSourceV2StyleJs.defineComponentStyle('ripple', 'core', {
    "wrapper": {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: '+5'
        // transform: 'translate3d(0, 0, 0)'
    },
    "dot": {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        animation: 'ripple-core-animation-ripple-effect ' + animationDuration + 'ms linear',
        borderRadius: '50%',
        display: 'inline-block',
        width: '250%'
    },
    "dot:before": {
        paddingTop: '100%',
        content: '""',
        float: 'left'
    },
    "!ripple-effect": {
        "0%": {
            transform: 'translate(-50%, -50%) scale(0, 0)',
            // width: 0,
            backgroundColor: 'rgba(0, 0, 0, 0)'
        },
        "70%": {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        },
        "100%": {
            transform: 'translate(-50%, -50%) scale(1, 1)',
            // width: '150%',
            backgroundColor: 'rgba(0, 0, 0, 0.0)'
        }
    }
});

var Ripple = (function (_React$Component) {
    _inherits(Ripple, _React$Component);

    function Ripple(props) {
        var _this = this;

        _classCallCheck(this, Ripple);

        _React$Component.call(this, props);

        this.touch = function (evt) {
            var position = evt.touch.position;

            var _refs$wrapper$getBoundingClientRect = _this.refs.wrapper.getBoundingClientRect();

            var top = _refs$wrapper$getBoundingClientRect.top;
            var left = _refs$wrapper$getBoundingClientRect.left;

            _this.triggerRipple(position.x - left, position.y - top);
        };

        this.triggerRipple = function (x, y) {
            if (x === undefined) x = null;
            var list = _this.state.list;

            if (x === null) {
                var _refs$wrapper$getBoundingClientRect2 = _this.refs.wrapper.getBoundingClientRect();

                var width = _refs$wrapper$getBoundingClientRect2.width;
                var height = _refs$wrapper$getBoundingClientRect2.height;

                x = width / 2;
                y = height / 2;
            }

            chrono.trigger(animationDuration, function () {
                if (_this.active === false) {
                    return;
                }
                _this.setState({
                    list: _this.state.list.slice(1)
                });
            });
            list = [].concat(list, [{ x: x, y: y, id: Date.now() }]);

            _this.setState({ list: list });
        };

        this.componentDidMount = function () {
            _this.active = true;
        };

        this.componentWillUnmount = function () {
            _this.active = false;
            // console.log('removing');
        };

        this.render = function () {
            var list = _this.state.list;

            return React.createElement(
                UI.Touchable,
                { component: 'div', className: 'ripple-core-wrapper', onTap: _this.touch, ref: 'wrapper' },
                list.map(function (_ref) {
                    var id = _ref.id;
                    var x = _ref.x;
                    var y = _ref.y;
                    return React.createElement('div', { key: id, style: { top: y, left: x }, className: 'ripple-core-dot' });
                })
            );
        };

        this.state = { list: [] };
    }

    return Ripple;
})(React.Component);

exports['default'] = Ripple;
module.exports = exports['default'];

},{"babel-runtime/helpers/class-call-check":27,"babel-runtime/helpers/inherits":29,"lib-source/v2/style.js":17}],14:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _libSourceUiv2Image = require("lib-source/uiv2/Image");

var _libSourceUiv2Image2 = _interopRequireDefault(_libSourceUiv2Image);

var _libSourceDataUriLoadSpinnerGifSource = require("lib-source/data-uri/load-spinner.gif.source");

var _libSourceDataUriLoadSpinnerGifSource2 = _interopRequireDefault(_libSourceDataUriLoadSpinnerGifSource);

var Spinner = function Spinner(_ref) {
  var size = _ref.size;
  return React.createElement(_libSourceUiv2Image2["default"], { width: size, height: size, source: _libSourceDataUriLoadSpinnerGifSource2["default"] });
};

exports["default"] = Spinner;
module.exports = exports["default"];

},{"babel-runtime/helpers/interop-require-default":30,"lib-source/data-uri/load-spinner.gif.source":1,"lib-source/uiv2/Image":10}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _libSourceV2Style = require("lib-source/v2/style");

var animationTime = 100;
_libSourceV2Style.defineComponentStyle('toggle', 'core', {
    "container": {
        position: 'relative',
        transition: 'background-color 500ms linear',
        fontSize: 20,
        overflow: 'hidden'
    },
    "container:active": {
        backgroundColor: 'rgba(0, 0, 0, 0.075)',
        transition: 'none'
    },
    "toggle-container": {
        position: 'absolute',
        right: 13,
        width: 30,
        top: '50%',
        transform: "translateY(-50%)",
        height: 8,
        fontSize: 11,
        borderRadius: 15,
        backgroundColor: 'lightgray',
        lineHeight: '22px'
    },
    "toggle-container[data-on='true']": {
        backgroundColor: '#bed0bd'
    },
    "toggle": {
        WebkitTransition: 'background-color ' + animationTime + 'ms linear, -webkit-transform ' + animationTime + 'ms linear',
        transition: 'background-color ' + animationTime + 'ms linear, transform ' + animationTime + 'ms linear',
        position: 'absolute',
        left: -11,
        top: -7,
        height: 22,
        width: 22,
        borderRadius: 15,
        textAlign: 'center',
        border: '1px solid lightgray',
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)'
    },
    "toggle[data-on='false']": {
        transform: 'translateX(0)',
        backgroundColor: 'white'
    },
    "toggle[data-on='true']": {
        transform: 'translateX(30px)',
        backgroundColor: '#24b324'
    },
    "label": {
        padding: 3,
        paddingRight: 70,
        whiteSpace: 'pre',
        color: 'black'
    },
    "subtitle": {
        color: 'gray',
        fontSize: 14
    }
});

var Toggle = function Toggle(props) {
    var _props$on = props.on;
    var on = _props$on === undefined ? false : _props$on;
    var label = props.label;
    var _props$subTitle = props.subTitle;
    var subTitle = _props$subTitle === undefined ? null : _props$subTitle;
    var _props$onChange = props.onChange;
    var onChange = _props$onChange === undefined ? function () {
        return console.warn("No onChange given to checkbox");
    } : _props$onChange;

    var content = label;
    var toggleStyle = undefined;

    if (subTitle !== null) {
        content = React.createElement(
            'div',
            null,
            label,
            React.createElement(
                'div',
                { className: 'checkbox-core-subtitle' },
                subTitle
            )
        );
    }

    return React.createElement(
        UI.Touchable,
        { component: 'div', className: 'toggle-core-container', onTap: function () {
                return onChange(!on);
            } },
        React.createElement(
            'div',
            { className: 'toggle-core-label' },
            content
        ),
        React.createElement(
            'div',
            { className: 'toggle-core-toggle-container', 'data-on': on },
            React.createElement('div', { className: 'toggle-core-toggle', 'data-on': on })
        )
    );
};

exports['default'] = Toggle;
module.exports = exports['default'];
/*<Ripple />*/

},{"lib-source/v2/style":17}],16:[function(require,module,exports){
// import React from "react";
// import ReactDOM from "react-dom";

"use strict";

var _extends = require("babel-runtime/helpers/extends")["default"];

var _objectWithoutProperties = require("babel-runtime/helpers/object-without-properties")["default"];

exports.__esModule = true;
var forEach = Array.prototype.forEach;
var sqrt = Math.sqrt;

var Touchable = undefined;

Touchable = React.createClass({
    displayName: "Touchable",

    touchStart: function touchStart(evt) {
        var onTouchStart = this.props.onTouchStart;
        var _evt$changedTouches = evt.changedTouches;
        var touch = _evt$changedTouches[0];

        ReactDOM.findDOMNode(this).classList.add("cor-touch-active");
        if (onTouchStart !== undefined) {
            onTouchStart(evt);
        }

        this.info = {
            id: touch.identifier,
            x: touch.pageX,
            y: touch.pageY
        };
    },
    touchMove: function touchMove(evt) {
        var _context,
            _this = this;

        var onTouchMove = this.props.onTouchMove;

        if (onTouchMove !== undefined) {
            onTouchMove(evt);
        }

        (_context = evt.changedTouches, forEach).call(_context, function (touch) {
            if (touch.identifier !== _this.info.id) {
                return;
            }

            if (sqrt(Math.pow(touch.pageX - _this.info.x, 2) + Math.pow(touch.pageY - _this.info.y, 2)) > 25) {
                ReactDOM.findDOMNode(_this).classList.remove("cor-touch-active");
            }
        });
    },
    touchEnd: function touchEnd(evt) {
        var _context2,
            _this2 = this;

        var onTouchEnd = this.props.onTouchEnd;

        if (onTouchEnd !== undefined) {
            onTouchEnd(evt);
        }
        (_context2 = evt.changedTouches, forEach).call(_context2, function (touch) {
            if (touch.identifier !== _this2.info.id) {
                return;
            }

            ReactDOM.findDOMNode(_this2).classList.remove("cor-touch-active");
        });
        // this.props.onTouchEnd(evt);
    },
    getBoundingClientRect: function getBoundingClientRect() {
        return this.refs.node.getBoundingClientRect();
    },
    componentDidMount: function componentDidMount() {
        var _this3 = this;

        var node = this.refs.node;

        node.addEventListener('tap', function (evt) {
            var onTap = _this3.props.onTap;

            node.focus();
            if (onTap !== undefined) {
                onTap.call(_this3, evt);
            }
            // ::this.props.onTap(evt);
        });
        node.addEventListener('hold', function (evt) {
            var onHold = _this3.props.onHold;

            node.focus();
            if (onHold !== undefined) {
                onHold.call(_this3, evt);
            }
            // ::this.props.onHold(evt);
        });
    },
    render: function render() {
        var _props = this.props;
        var _props$component = _props.component;
        var component = _props$component === undefined ? null : _props$component;
        var children = _props.children;
        var onTap = _props.onTap;
        var onHold = _props.onHold;

        var props = _objectWithoutProperties(_props, ["component", "children", "onTap", "onHold"]);

        var Component = component;
        var componentProps = _extends({}, props, {
            onTouchStart: this.touchStart,
            onTouchMove: this.touchMove,
            onTouchEnd: this.touchEnd,
            onTouchCancel: this.touchEnd
        });

        if (Component === null) {
            throw new Error("Must pass a component into Touchable");
        }

        return React.createElement(
            Component,
            _extends({ ref: "node" }, componentProps),
            children
        );
    }
});

exports["default"] = Touchable;
module.exports = exports["default"];

},{"babel-runtime/helpers/extends":28,"babel-runtime/helpers/object-without-properties":31}],17:[function(require,module,exports){
"use strict";

var _Set = require("babel-runtime/core-js/set")["default"];

var _Object$entries = require("babel-runtime/core-js/object/entries")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

exports.__esModule = true;
var cssNoMeasurement = new _Set(["animationIterationCount", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "fillOpacity", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "fontWeight", "lineClamp", "lineHeight", "opacity", "order", "orphans", "stopOpacity", "strokeDashoffset", "strokeOpacity", "strokeWidth", "tabSize", "widows", "zIndex", "zoom"]);
var cssPrefixNames = new _Set(['transform', 'box-shadow', 'transition', 'animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction']);
var cssPrefixes = ['-webkit-', '-moz-', '-ms-', '-o-', ''];

var getCSSValue = function getCSSValue(prop, value) {
    if (typeof value === 'function') {
        value = value();
    }
    if (Array.isArray(value) === true) {
        return value.map(getCSSValue);
    }
    if (typeof value === 'number' && cssNoMeasurement.has(prop) === false) {
        value += "px";
    }
    return [value];
};
var processSelector = function processSelector(componentName, styleName, selector) {
    var parts = selector.split(/\s+/);
    var realParts = parts.map(function (part) {
        part = part.replace(":active", ".cor-touch-active");
        return part.split('/').map(function (part) {
            switch (true) {
                case part.charAt(0) === "$":
                    return part.slice(1);
                case /^[a-z]/i.test(part) === true:
                    return "." + componentName + "-" + styleName + "-" + part;
                default:
                    return part;
            }
        }).join('.');
    });
    return realParts.join(' ');
};
var processDef = function processDef(cssLines, selector, defs) {
    cssLines = [].concat(cssLines, [selector + " {"]);

    var _loop = function () {
        if (_isArray) {
            if (_i >= _iterator.length) return "break";
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) return "break";
            _ref = _i.value;
        }

        var cssProp = _ref[0];
        var cssValue = _ref[1];

        var value = getCSSValue(cssProp, cssValue);
        var prop = cssProp.replace(/[A-Z]/g, function (letter) {
            return '-' + letter.toLowerCase();
        });
        if (cssPrefixNames.has(cssProp) === true) {
            cssLines = [].concat(cssLines, cssPrefixes.map(function (prefix) {
                return "\t" + prefix + prop + ": " + value[0] + ";";
            }));
        } else {
            cssLines = [].concat(cssLines, value.map(function (value) {
                return "\t" + prop + ": " + value + ";";
            }));
        }
    };

    for (var _iterator = _Object$entries(defs), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
        var _ref;

        var _ret = _loop();

        if (_ret === "break") break;
    }
    cssLines = [].concat(cssLines, ["}"]);
    return cssLines;
    // cssLines.push("}");
};

var componentStyles = {};
var createProp = function createProp(object, propName, defaultValue) {
    if (object.hasOwnProperty(propName) === false) {
        object[propName] = defaultValue;
    }
    return object[propName];
};
var defineComponentStyle = function defineComponentStyle(component, styleName, styles) {
    return createProp(createProp(componentStyles, component, {}), styleName, styles);
};

var createStyles = function createStyles() {
    var head = document.querySelector("head");

    //  Iterate over the components that have styles defined
    for (var _iterator2 = _Object$entries(componentStyles), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _getIterator(_iterator2);;) {
        var _ref2;

        if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
        } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
        }

        var componentName = _ref2[0];
        var styles = _ref2[1];

        //  Iterate over the various named styles for the given component
        for (var _iterator3 = _Object$entries(styles), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _getIterator(_iterator3);;) {
            var _ref3;

            if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
            } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
            }

            var styleName = _ref3[0];
            var styleDefs = _ref3[1];

            var cssLines = [];
            //  Grab all the individual groups of styles defined in the named style
            for (var _iterator4 = _Object$entries(styleDefs), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _getIterator(_iterator4);;) {
                var _ref4;

                if (_isArray4) {
                    if (_i4 >= _iterator4.length) break;
                    _ref4 = _iterator4[_i4++];
                } else {
                    _i4 = _iterator4.next();
                    if (_i4.done) break;
                    _ref4 = _i4.value;
                }

                var descriptor = _ref4[0];
                var defs = _ref4[1];

                if (descriptor.startsWith("!") === true) {
                    //  Repeat an extra time with prefixed keyframes because ios < 9 is pretty awful
                    cssLines.push("@-webkit-keyframes " + componentName + "-" + styleName + "-animation-" + descriptor.slice(1) + " {");
                    for (var _iterator5 = _Object$entries(defs), _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _getIterator(_iterator5);;) {
                        var _ref5;

                        if (_isArray5) {
                            if (_i5 >= _iterator5.length) break;
                            _ref5 = _iterator5[_i5++];
                        } else {
                            _i5 = _iterator5.next();
                            if (_i5.done) break;
                            _ref5 = _i5.value;
                        }

                        var selector = _ref5[0];
                        var def = _ref5[1];

                        cssLines = processDef(cssLines, selector, def);
                    }
                    cssLines.push("}");

                    //  normal @keyframes css
                    cssLines.push("@keyframes " + componentName + "-" + styleName + "-animation-" + descriptor.slice(1) + " {");
                    for (var _iterator6 = _Object$entries(defs), _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _getIterator(_iterator6);;) {
                        var _ref6;

                        if (_isArray6) {
                            if (_i6 >= _iterator6.length) break;
                            _ref6 = _iterator6[_i6++];
                        } else {
                            _i6 = _iterator6.next();
                            if (_i6.done) break;
                            _ref6 = _i6.value;
                        }

                        var selector = _ref6[0];
                        var def = _ref6[1];

                        cssLines = processDef(cssLines, selector, def);
                    }
                    cssLines.push("}");
                } else {
                    var selector = processSelector(componentName, styleName, descriptor);
                    cssLines = processDef(cssLines, selector, defs);
                }
            }
            var styleTag = document.createElement("style");
            styleTag.setAttribute("type", "text/css");
            styleTag.setAttribute("data-name", componentName + "/" + styleName);
            styleTag.innerHTML = cssLines.join('\n');
            head.appendChild(styleTag);
        }
    }
};

var themeValues = undefined;
var Theme = _Object$defineProperties({
    define: function define(theme) {
        themeValues = theme;
    }
}, {
    variable: {
        get: function get() {
            return themeValues;
        },
        configurable: true,
        enumerable: true
    }
});

exports["default"] = {
    defineComponentStyle: defineComponentStyle,
    Theme: Theme,
    __setup: createStyles
};
module.exports = exports["default"];

},{"babel-runtime/core-js/get-iterator":18,"babel-runtime/core-js/object/define-properties":21,"babel-runtime/core-js/object/entries":22,"babel-runtime/core-js/set":25}],18:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":34}],19:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":35}],20:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":36}],21:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":37}],22:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/entries"), __esModule: true };
},{"core-js/library/fn/object/entries":38}],23:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":39}],24:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":40}],25:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":41}],26:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":42}],27:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],28:[function(require,module,exports){
"use strict";

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

exports["default"] = _Object$assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/assign":19}],29:[function(require,module,exports){
"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Object$setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of")["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/create":20,"babel-runtime/core-js/object/set-prototype-of":23}],30:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],31:[function(require,module,exports){
"use strict";

exports["default"] = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

exports.__esModule = true;
},{}],32:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

module.exports = { "default": module.exports, __esModule: true };

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./runtime":33}],33:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Object$setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

!(function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = _Object$create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (_Object$setPrototypeOf) {
      _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = _Object$create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function (arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return _Promise.resolve(value.arg).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return _Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new _Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":113,"babel-runtime/core-js/object/create":20,"babel-runtime/core-js/object/set-prototype-of":23,"babel-runtime/core-js/promise":24,"babel-runtime/core-js/symbol":26}],34:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":101,"../modules/es6.string.iterator":108,"../modules/web.dom.iterable":112}],35:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":51,"../../modules/es6.object.assign":103}],36:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":76}],37:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperties(T, D){
  return $.setDescs(T, D);
};
},{"../../modules/$":76}],38:[function(require,module,exports){
require('../../modules/es7.object.entries');
module.exports = require('../../modules/$.core').Object.entries;
},{"../../modules/$.core":51,"../../modules/es7.object.entries":110}],39:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":51,"../../modules/es6.object.set-prototype-of":104}],40:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":51,"../modules/es6.object.to-string":105,"../modules/es6.promise":106,"../modules/es6.string.iterator":108,"../modules/web.dom.iterable":112}],41:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.set');
require('../modules/es7.set.to-json');
module.exports = require('../modules/$.core').Set;
},{"../modules/$.core":51,"../modules/es6.object.to-string":105,"../modules/es6.set":107,"../modules/es6.string.iterator":108,"../modules/es7.set.to-json":111,"../modules/web.dom.iterable":112}],42:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":51,"../../modules/es6.object.to-string":105,"../../modules/es6.symbol":109}],43:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],44:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],45:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":69}],46:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./$.cof')
  , TAG = require('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":47,"./$.wks":99}],47:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],48:[function(require,module,exports){
'use strict';
var $            = require('./$')
  , hide         = require('./$.hide')
  , redefineAll  = require('./$.redefine-all')
  , ctx          = require('./$.ctx')
  , strictNew    = require('./$.strict-new')
  , defined      = require('./$.defined')
  , forOf        = require('./$.for-of')
  , $iterDefine  = require('./$.iter-define')
  , step         = require('./$.iter-step')
  , ID           = require('./$.uid')('id')
  , $has         = require('./$.has')
  , isObject     = require('./$.is-object')
  , setSpecies   = require('./$.set-species')
  , DESCRIPTORS  = require('./$.descriptors')
  , isExtensible = Object.isExtensible || isObject
  , SIZE         = DESCRIPTORS ? '_s' : 'size'
  , id           = 0;

var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!$has(it, ID)){
    // can't set id to frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add id
    if(!create)return 'E';
    // add missing object id
    hide(it, ID, ++id);
  // return object id with prefix
  } return 'O' + it[ID];
};

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      strictNew(that, C, NAME);
      that._i = $.create(null); // index
      that._f = undefined;      // first entry
      that._l = undefined;      // last entry
      that[SIZE] = 0;           // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./$":76,"./$.ctx":52,"./$.defined":53,"./$.descriptors":54,"./$.for-of":59,"./$.has":62,"./$.hide":63,"./$.is-object":69,"./$.iter-define":72,"./$.iter-step":74,"./$.redefine-all":83,"./$.set-species":87,"./$.strict-new":91,"./$.uid":98}],49:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var forOf   = require('./$.for-of')
  , classof = require('./$.classof');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    var arr = [];
    forOf(this, false, arr.push, arr);
    return arr;
  };
};
},{"./$.classof":46,"./$.for-of":59}],50:[function(require,module,exports){
'use strict';
var $              = require('./$')
  , global         = require('./$.global')
  , $export        = require('./$.export')
  , fails          = require('./$.fails')
  , hide           = require('./$.hide')
  , redefineAll    = require('./$.redefine-all')
  , forOf          = require('./$.for-of')
  , strictNew      = require('./$.strict-new')
  , isObject       = require('./$.is-object')
  , setToStringTag = require('./$.set-to-string-tag')
  , DESCRIPTORS    = require('./$.descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
  } else {
    C = wrapper(function(target, iterable){
      strictNew(target, C, NAME);
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)$.setDesc(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./$":76,"./$.descriptors":54,"./$.export":57,"./$.fails":58,"./$.for-of":59,"./$.global":61,"./$.hide":63,"./$.is-object":69,"./$.redefine-all":83,"./$.set-to-string-tag":88,"./$.strict-new":91}],51:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],52:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":43}],53:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],54:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":58}],55:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":61,"./$.is-object":69}],56:[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":76}],57:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , ctx       = require('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":51,"./$.ctx":52,"./$.global":61}],58:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],59:[function(require,module,exports){
var ctx         = require('./$.ctx')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , anObject    = require('./$.an-object')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./$.an-object":45,"./$.ctx":52,"./$.is-array-iter":67,"./$.iter-call":70,"./$.to-length":96,"./core.get-iterator-method":100}],60:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":76,"./$.to-iobject":95}],61:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],62:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],63:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":76,"./$.descriptors":54,"./$.property-desc":82}],64:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":61}],65:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],66:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":47}],67:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./$.iterators')
  , ITERATOR   = require('./$.wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./$.iterators":75,"./$.wks":99}],68:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":47}],69:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],70:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./$.an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./$.an-object":45}],71:[function(require,module,exports){
'use strict';
var $              = require('./$')
  , descriptor     = require('./$.property-desc')
  , setToStringTag = require('./$.set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./$":76,"./$.hide":63,"./$.property-desc":82,"./$.set-to-string-tag":88,"./$.wks":99}],72:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./$.library')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , hide           = require('./$.hide')
  , has            = require('./$.has')
  , Iterators      = require('./$.iterators')
  , $iterCreate    = require('./$.iter-create')
  , setToStringTag = require('./$.set-to-string-tag')
  , getProto       = require('./$').getProto
  , ITERATOR       = require('./$.wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./$":76,"./$.export":57,"./$.has":62,"./$.hide":63,"./$.iter-create":71,"./$.iterators":75,"./$.library":78,"./$.redefine":84,"./$.set-to-string-tag":88,"./$.wks":99}],73:[function(require,module,exports){
var ITERATOR     = require('./$.wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":99}],74:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],75:[function(require,module,exports){
module.exports = {};
},{}],76:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],77:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":76,"./$.to-iobject":95}],78:[function(require,module,exports){
module.exports = true;
},{}],79:[function(require,module,exports){
var global    = require('./$.global')
  , macrotask = require('./$.task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./$.cof')(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain, fn;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
};

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify = function(){
    Promise.resolve().then(flush);
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};
},{"./$.cof":47,"./$.global":61,"./$.task":93}],80:[function(require,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var $        = require('./$')
  , toObject = require('./$.to-object')
  , IObject  = require('./$.iobject');

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = require('./$.fails')(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;
},{"./$":76,"./$.fails":58,"./$.iobject":66,"./$.to-object":97}],81:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject')
  , isEnum    = $.isEnum;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = $.getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};
},{"./$":76,"./$.to-iobject":95}],82:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],83:[function(require,module,exports){
var redefine = require('./$.redefine');
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};
},{"./$.redefine":84}],84:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":63}],85:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],86:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./$":76,"./$.an-object":45,"./$.ctx":52,"./$.is-object":69}],87:[function(require,module,exports){
'use strict';
var core        = require('./$.core')
  , $           = require('./$')
  , DESCRIPTORS = require('./$.descriptors')
  , SPECIES     = require('./$.wks')('species');

module.exports = function(KEY){
  var C = core[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":76,"./$.core":51,"./$.descriptors":54,"./$.wks":99}],88:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":76,"./$.has":62,"./$.wks":99}],89:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":61}],90:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./$.an-object')
  , aFunction = require('./$.a-function')
  , SPECIES   = require('./$.wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./$.a-function":43,"./$.an-object":45,"./$.wks":99}],91:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],92:[function(require,module,exports){
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":53,"./$.to-integer":94}],93:[function(require,module,exports){
var ctx                = require('./$.ctx')
  , invoke             = require('./$.invoke')
  , html               = require('./$.html')
  , cel                = require('./$.dom-create')
  , global             = require('./$.global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./$.cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$.cof":47,"./$.ctx":52,"./$.dom-create":55,"./$.global":61,"./$.html":64,"./$.invoke":65}],94:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],95:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":53,"./$.iobject":66}],96:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":94}],97:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":53}],98:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],99:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":61,"./$.shared":89,"./$.uid":98}],100:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":46,"./$.core":51,"./$.iterators":75,"./$.wks":99}],101:[function(require,module,exports){
var anObject = require('./$.an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./$.core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./$.an-object":45,"./$.core":51,"./core.get-iterator-method":100}],102:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./$.add-to-unscopables')
  , step             = require('./$.iter-step')
  , Iterators        = require('./$.iterators')
  , toIObject        = require('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./$.add-to-unscopables":44,"./$.iter-define":72,"./$.iter-step":74,"./$.iterators":75,"./$.to-iobject":95}],103:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./$.export');

$export($export.S + $export.F, 'Object', {assign: require('./$.object-assign')});
},{"./$.export":57,"./$.object-assign":80}],104:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":57,"./$.set-proto":86}],105:[function(require,module,exports){

},{}],106:[function(require,module,exports){
'use strict';
var $          = require('./$')
  , LIBRARY    = require('./$.library')
  , global     = require('./$.global')
  , ctx        = require('./$.ctx')
  , classof    = require('./$.classof')
  , $export    = require('./$.export')
  , isObject   = require('./$.is-object')
  , anObject   = require('./$.an-object')
  , aFunction  = require('./$.a-function')
  , strictNew  = require('./$.strict-new')
  , forOf      = require('./$.for-of')
  , setProto   = require('./$.set-proto').set
  , same       = require('./$.same-value')
  , SPECIES    = require('./$.wks')('species')
  , speciesConstructor = require('./$.species-constructor')
  , asap       = require('./$.microtask')
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , empty      = function(){ /* empty */ }
  , Wrapper;

var testResolve = function(sub){
  var test = new P(empty), promise;
  if(sub)test.constructor = function(exec){
    exec(empty, empty);
  };
  (promise = P.resolve(test))['catch'](empty);
  return promise === test;
};

var USE_NATIVE = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && require('./$.descriptors')){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var PromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve),
  this.reject  = aFunction(reject)
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok)record.h = true;
          result = handler === true ? value : handler(value);
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      var promise = record.p
        , handler, console;
      if(isUnhandled(promise)){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise._d
    , chain  = record.a || record.c
    , i      = 0
    , reaction;
  if(record.h)return false;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(record.p === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = this._d = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  require('./$.redefine-all')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = new PromiseCapability(speciesConstructor(this, P))
        , promise  = reaction.promise
        , record   = this._d;
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if(record.a)record.a.push(reaction);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
require('./$.set-to-string-tag')(P, PROMISE);
require('./$.set-species')(PROMISE);
Wrapper = require('./$.core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = new PromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof P && sameConstructor(x.constructor, this))return x;
    var capability = new PromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject
      , values     = [];
    var abrupt = perform(function(){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        var alreadyCalled = false;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./$":76,"./$.a-function":43,"./$.an-object":45,"./$.classof":46,"./$.core":51,"./$.ctx":52,"./$.descriptors":54,"./$.export":57,"./$.for-of":59,"./$.global":61,"./$.is-object":69,"./$.iter-detect":73,"./$.library":78,"./$.microtask":79,"./$.redefine-all":83,"./$.same-value":85,"./$.set-proto":86,"./$.set-species":87,"./$.set-to-string-tag":88,"./$.species-constructor":90,"./$.strict-new":91,"./$.wks":99}],107:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.2 Set Objects
require('./$.collection')('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./$.collection":50,"./$.collection-strong":48}],108:[function(require,module,exports){
'use strict';
var $at  = require('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":72,"./$.string-at":92}],109:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , DESCRIPTORS    = require('./$.descriptors')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , $fails         = require('./$.fails')
  , shared         = require('./$.shared')
  , setToStringTag = require('./$.set-to-string-tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , isArray        = require('./$.is-array')
  , anObject       = require('./$.an-object')
  , toIObject      = require('./$.to-iobject')
  , createDesc     = require('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./$.library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./$":76,"./$.an-object":45,"./$.descriptors":54,"./$.enum-keys":56,"./$.export":57,"./$.fails":58,"./$.get-names":60,"./$.global":61,"./$.has":62,"./$.is-array":68,"./$.keyof":77,"./$.library":78,"./$.property-desc":82,"./$.redefine":84,"./$.set-to-string-tag":88,"./$.shared":89,"./$.to-iobject":95,"./$.uid":98,"./$.wks":99}],110:[function(require,module,exports){
// http://goo.gl/XkBrjD
var $export  = require('./$.export')
  , $entries = require('./$.object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});
},{"./$.export":57,"./$.object-to-array":81}],111:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./$.export');

$export($export.P, 'Set', {toJSON: require('./$.collection-to-json')('Set')});
},{"./$.collection-to-json":49,"./$.export":57}],112:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":75,"./es6.array.iterator":102}],113:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
  try {
    cachedSetTimeout = setTimeout;
  } catch (e) {
    cachedSetTimeout = function () {
      throw new Error('setTimeout is not defined');
    }
  }
  try {
    cachedClearTimeout = clearTimeout;
  } catch (e) {
    cachedClearTimeout = function () {
      throw new Error('clearTimeout is not defined');
    }
  }
} ())
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = cachedSetTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        cachedSetTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],114:[function(require,module,exports){
// import CSSTransition from 'react-addons-css-transition-group';
'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _libSourceUiv2Icon = require('lib-source/uiv2/icon');

var _libSourceUiv2Icon2 = _interopRequireDefault(_libSourceUiv2Icon);

var _libSourceUiv2Ripple = require('lib-source/uiv2/ripple');

var _libSourceUiv2Ripple2 = _interopRequireDefault(_libSourceUiv2Ripple);

var _libSourceUiv2Button = require('lib-source/uiv2/button');

var _libSourceUiv2Button2 = _interopRequireDefault(_libSourceUiv2Button);

var _libSourceUiv2Iconbutton = require('lib-source/uiv2/iconbutton');

var _libSourceUiv2Iconbutton2 = _interopRequireDefault(_libSourceUiv2Iconbutton);

var _libSourceUiv2Card = require('lib-source/uiv2/Card');

var _libSourceUiv2Card2 = _interopRequireDefault(_libSourceUiv2Card);

var _libSourceUiv2Image = require('lib-source/uiv2/Image');

var _libSourceUiv2Image2 = _interopRequireDefault(_libSourceUiv2Image);

var _libSourceUiv2CenterContent = require('lib-source/uiv2/CenterContent');

var _libSourceUiv2CenterContent2 = _interopRequireDefault(_libSourceUiv2CenterContent);

var _libSourceUiv2Checkbox = require('lib-source/uiv2/Checkbox');

var _libSourceUiv2Checkbox2 = _interopRequireDefault(_libSourceUiv2Checkbox);

var _libSourceUiv2Toggle = require('lib-source/uiv2/Toggle');

var _libSourceUiv2Toggle2 = _interopRequireDefault(_libSourceUiv2Toggle);

var _libSourceUiv2Touchable = require('lib-source/uiv2/Touchable');

var _libSourceUiv2Touchable2 = _interopRequireDefault(_libSourceUiv2Touchable);

var _libSourceUiv2Combobox = require('lib-source/uiv2/Combobox');

var _libSourceUiv2Combobox2 = _interopRequireDefault(_libSourceUiv2Combobox);

var _libSourceUiv2Option = require('lib-source/uiv2/Option');

var _libSourceUiv2Option2 = _interopRequireDefault(_libSourceUiv2Option);

var _libSourceUiv2Spinner = require('lib-source/uiv2/Spinner');

var _libSourceUiv2Spinner2 = _interopRequireDefault(_libSourceUiv2Spinner);

var _libSourceUiv2Radio = require('lib-source/uiv2/Radio');

var _libSourceUiv2Radio2 = _interopRequireDefault(_libSourceUiv2Radio);

var _libSourceUiv2Dialog = require("lib-source/uiv2/dialog");

var _libSourceUiv2Dialog2 = _interopRequireDefault(_libSourceUiv2Dialog);

var _libSourceV2Style = require("lib-source/v2/style");

var range = _regeneratorRuntime.mark(function range(args) {
    var _args$start, start, _args$end, end, _args$count, count, _args$step, step, _args$map, map;

    return _regeneratorRuntime.wrap(function range$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                _args$start = args.start;
                start = _args$start === undefined ? 0 : _args$start;
                _args$end = args.end;
                end = _args$end === undefined ? null : _args$end;
                _args$count = args.count;
                count = _args$count === undefined ? null : _args$count;
                _args$step = args.step;
                step = _args$step === undefined ? 1 : _args$step;
                _args$map = args.map;
                map = _args$map === undefined ? function (i) {
                    return i;
                } : _args$map;

                if (!(end === null)) {
                    context$1$0.next = 14;
                    break;
                }

                if (!(count === null)) {
                    context$1$0.next = 13;
                    break;
                }

                throw new Error("Must give the size of the range");

            case 13:
                end = start + count;

            case 14:
                if (!true) {
                    context$1$0.next = 22;
                    break;
                }

                if (!(start >= end)) {
                    context$1$0.next = 17;
                    break;
                }

                return context$1$0.abrupt('break', 22);

            case 17:
                context$1$0.next = 19;
                return map(start);

            case 19:
                start += step;
                context$1$0.next = 14;
                break;

            case 22:
            case 'end':
                return context$1$0.stop();
        }
    }, range, this);
});

window.frange = _regeneratorRuntime.mark(function callee$0$0(count) {
    var current;
    return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                current = 0;

            case 1:
                if (!true) {
                    context$1$0.next = 9;
                    break;
                }

                if (!(current === count)) {
                    context$1$0.next = 4;
                    break;
                }

                return context$1$0.abrupt('break', 9);

            case 4:
                context$1$0.next = 6;
                return current;

            case 6:
                current += 1;
                context$1$0.next = 1;
                break;

            case 9:
            case 'end':
                return context$1$0.stop();
        }
    }, callee$0$0, this);
});

var _ReactRouter = ReactRouter;
var Route = _ReactRouter.Route;

var coolBlue = "#2FB1DF";

Theme.define({
    app: {
        backgroundColor: 'white',
        textColor: '#747474'
    },
    button: {
        hoverColor: 'rgba(0, 0, 0, 0.11)',
        activeColor: 'rgba(0, 0, 0, 0.2)',
        raised: {
            color: coolBlue,
            textColor: 'white'
        }
    },
    card: {
        backgroundColor: 'white'
    },
    progressbar: {
        backgroundColor: '#B3CEED',
        color: '#3B8AF3'
    },
    radio: {
        grid: {
            selectedColor: coolBlue
        }
    },
    rangeInput: {
        track: {
            color: coolBlue
        }
    },
    'switch': {
        track: {
            color: coolBlue
        }
    },
    title: {
        backgroundColor: coolBlue,
        textColor: 'white'
    },
    userInput: {
        activeColor: '#2FB1DF',
        textColor: 'black'
    }
});

var ScreenTransition = React.createClass({
    displayName: 'ScreenTransition',

    render: function render() {
        return React.createElement(
            'div',
            { style: { position: 'absolute', width: '100%', height: '100%' } },
            this.props.children
        );
    }
});

Style.__rawCSS("test", {
    selector: ".test-enter",
    rules: {
        'transition': 'left 250ms ease-out',
        left: '100%'
    }
}, {
    selector: ".test-enter.test-enter-active",
    rules: {
        left: 0
    }
}, {
    selector: ".test-leave",
    rules: {
        'transition': 'left 250ms ease-out',
        left: 0
    }
}, {
    selector: ".test-leave.test-leave-active",
    rules: {
        left: '-100%'
    }
}, {
    selector: ".test-appear",
    rules: {
        'transition': 'top 250ms ease-out',
        top: '100%'
    }
}, {
    selector: ".test-appear.test-appear-active",
    rules: {
        top: 0
    }
});

var Wrapper = React.createClass({
    displayName: 'Wrapper',

    render: function render() {
        return React.createElement(
            CSSTransition,
            { component: 'div', transitionName: 'test', transitionEnterTimeout: 250, transitionLeaveTimeout: 250 },
            React.createElement(
                ScreenTransition,
                { key: Date.now() },
                this.props.children
            )
        );
    }
});

// window.benchmark = (iterations, first, second) => {
//     const r = [];
//     for (const testNum of range({count: 30})) {
//         let a = performance.now();
//         for (let i = 0; i < iterations; i += 1) {
//             first();
//         }
//         a = performance.now() - a;
//
//         let b = performance.now();
//         for (let i = 0; i < iterations; i += 1) {
//             second();
//         }
//         b = performance.now() - b;
//         r.push([a.toFixed(3), b.toFixed(3)]);
//     }
//     return r;
// };
//
// const checkProp = (obj, prop, value) => obj.hasOwnProperty(prop) === true && obj[prop] === value;
// const x = {a: 10, b: 12};
// const res = benchmark(1e6, () => typeof x.c === 'undefined', () => x.c === undefined);
// console.log(res.map(i => i.join('\t')).join('\n'));

/*
const url = "http://vignette1.wikia.nocookie.net/bayonetta/images/e/e3/Cereza_Bayonetta_2_render.png/revision/latest?cb=20140615210025";
const url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";
*/

var InputBase = function InputBase(_ref) {
    var label = _ref.label;

    var props = _objectWithoutProperties(_ref, ['label']);

    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            null,
            label
        ),
        React.createElement('input', props)
    );
};

var Input = {
    Text: function Text(props) {
        return React.createElement(InputBase, props);
    }
};

var Main = React.createClass({
    displayName: 'Main',

    demo: function demo() {
        return _regeneratorRuntime.async(function demo$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(Dialog.confirm("Really?"));

                case 2:
                    context$1$0.t0 = context$1$0.sent;

                    if (!(context$1$0.t0 === true)) {
                        context$1$0.next = 5;
                        break;
                    }

                    console.log("Nope!");

                case 5:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    },
    getInitialState: function getInitialState() {
        return {
            checked: false,
            on: false,
            disabled: false,
            button: {
                image: false
            },
            index: -1
        };
    },
    render: function render() {
        var disabled = this.state.disabled;

        return React.createElement(
            UI.Screen,
            { title: 'Test', backText: "test", width: 600, onBack: this.demo },
            React.createElement(Input.Text, { label: 'test', value: 'wat', onChange: cblog }),
            React.createElement(_libSourceUiv2Dialog2['default'], null)
        );
    }
});

App.start(React.createElement(
    Route,
    { component: Wrapper },
    React.createElement(Route, { path: '/', component: Main }),
    React.createElement(Route, { path: '/test', component: Main })
));
_libSourceV2Style.__setup();
/*<Image source={url} height={150} color="cyan" />*/ /*<Checkbox checked={this.state.checked} onChange={checked => this.setState({checked})} label={"Test"} subTitle="more text?" />
                                                     <Toggle on={this.state.on} onChange={on => this.setState({on})} label={"Test"} subTitle="more text?" />
                                                     <Button text={<span>{disabled ? <Spinner size={20} /> : null}Button Text</span>} disabled={disabled} onTap={() => this.setState({disabled: true})} />
                                                     <Combobox selectedIndex={this.state.index} onChange={index => this.setState({index})} scrollToSelected>
                                                        {Array.from(range({
                                                            count: 20,
                                                            map: i => <Option value={i ** i}><Spinner size={14} />Test {i}</Option>
                                                        }))}
                                                        <Option value={'lol'}><Image source={url} height={50} width="50%" /></Option>
                                                     </Combobox>*/ /*<Radio selectedIndex={this.state.index} onChange={index => this.setState({index})} title="Test">
                                                                      {Array.from(range({
                                                                          count: 10,
                                                                          map: n => <Option value={n ** n}>{n}</Option>
                                                                      }))}
                                                                      <Option><Image source={url} height={30} /></Option>
                                                                   </Radio>
                                                                   <Button text="Test" />*/

},{"babel-runtime/helpers/interop-require-default":30,"babel-runtime/helpers/object-without-properties":31,"babel-runtime/regenerator":32,"lib-source/uiv2/Card":3,"lib-source/uiv2/CenterContent":4,"lib-source/uiv2/Checkbox":5,"lib-source/uiv2/Combobox":6,"lib-source/uiv2/Image":10,"lib-source/uiv2/Option":11,"lib-source/uiv2/Radio":12,"lib-source/uiv2/Spinner":14,"lib-source/uiv2/Toggle":15,"lib-source/uiv2/Touchable":16,"lib-source/uiv2/button":2,"lib-source/uiv2/dialog":7,"lib-source/uiv2/icon":8,"lib-source/uiv2/iconbutton":9,"lib-source/uiv2/ripple":13,"lib-source/v2/style":17}]},{},[114])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWItc291cmNlL2RhdGEtdXJpL2xvYWQtc3Bpbm5lci5naWYuc291cmNlIiwiQzovVXNlcnMvY21vcmdhbjIvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9idXR0b24uanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vbGliLXNvdXJjZS91aXYyL2NhcmQuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vbGliLXNvdXJjZS91aXYyL2NlbnRlcmNvbnRlbnQuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vbGliLXNvdXJjZS91aXYyL2NoZWNrYm94LmpzIiwiQzovVXNlcnMvY21vcmdhbjIvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9jb21ib2JveC5qcyIsIkM6L1VzZXJzL2Ntb3JnYW4yL0RvY3VtZW50cy9wcm9ncmFtbWluZy9naXRodWIvQ29yaW50aGlhbi9saWItc291cmNlL3VpdjIvZGlhbG9nLmpzIiwiQzovVXNlcnMvY21vcmdhbjIvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9pY29uLmpzIiwiQzovVXNlcnMvY21vcmdhbjIvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9pY29uYnV0dG9uLmpzIiwiQzovVXNlcnMvY21vcmdhbjIvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9pbWFnZS5qcyIsIkM6L1VzZXJzL2Ntb3JnYW4yL0RvY3VtZW50cy9wcm9ncmFtbWluZy9naXRodWIvQ29yaW50aGlhbi9saWItc291cmNlL3VpdjIvb3B0aW9uLmpzIiwiQzovVXNlcnMvY21vcmdhbjIvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9yYWRpby5qcyIsIkM6L1VzZXJzL2Ntb3JnYW4yL0RvY3VtZW50cy9wcm9ncmFtbWluZy9naXRodWIvQ29yaW50aGlhbi9saWItc291cmNlL3VpdjIvcmlwcGxlLmpzIiwiQzovVXNlcnMvY21vcmdhbjIvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9zcGlubmVyLmpzIiwiQzovVXNlcnMvY21vcmdhbjIvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi90b2dnbGUuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vbGliLXNvdXJjZS91aXYyL3RvdWNoYWJsZS5qcyIsIkM6L1VzZXJzL2Ntb3JnYW4yL0RvY3VtZW50cy9wcm9ncmFtbWluZy9naXRodWIvQ29yaW50aGlhbi9saWItc291cmNlL3YyL3N0eWxlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2VudHJpZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zZXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3Qtd2l0aG91dC1wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9ydW50aW1lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2VudHJpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zZXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZvci1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW52b2tlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQua2V5b2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubWljcm90YXNrLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQub2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC10by1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZmluZS1hbGwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNhbWUtdmFsdWUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtcHJvdG8uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmljdC1uZXcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50YXNrLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC53a3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnNldC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIkM6L1VzZXJzL2Ntb3JnYW4yL0RvY3VtZW50cy9wcm9ncmFtbWluZy9naXRodWIvQ29yaW50aGlhbi90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7Ozs7Ozs7a0NDRDBDLHdCQUF3Qjs7cUNBQy9DLDJCQUEyQjs7OzttQ0FDN0IseUJBQXlCOzs7O3NDQUNwQiwyQkFBMkI7Ozs7QUFFakQseUNBQ0ksUUFBUSxFQUNSLE1BQU0sRUFDTjtBQUNJLGFBQVMsRUFBRTtBQUNQLGdCQUFRLEVBQUUsVUFBVTtBQUNwQixpQkFBUyxFQUFFLFFBQVE7QUFDbkIsY0FBTSxFQUFFLENBQUM7QUFDVCxnQkFBUSxFQUFFLFFBQVE7QUFDbEIsY0FBTSxFQUFFLElBQUk7QUFDWix1QkFBZSxFQUFFLGFBQWE7QUFDOUIsYUFBSyxFQUFFLE9BQU87OztBQUdkLGtCQUFVLEVBQUUsS0FBSztBQUNqQixlQUFPLEVBQUUsY0FBYztBQUN2QixvQkFBWSxFQUFFLENBQUM7S0FDbEI7QUFDRCxtQkFBZSxFQUFFO0FBQ2IsZUFBTyxFQUFFLE1BQU07S0FDbEI7QUFD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Q0E7QUFDQTtBQUNBOzs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RvQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7S0FFNUI7QUFDRCxtQkFBZSxFQUFBLDJCQUFHO0FBQ2QsZUFBTztBQUNILG1CQUFPLEVBQUUsS0FBSztBQUNkLGNBQUUsRUFBRSxLQUFLO0FBQ1Qsb0JBQVEsRUFBRSxLQUFLO0FBQ2Ysa0JBQU0sRUFBRTtBQUNKLHFCQUFLLEVBQUUsS0FBSzthQUNmO0FBQ0QsaUJBQUssRUFBRSxDQUFDLENBQUM7U0FDWixDQUFDO0tBQ0w7QUFDRCxVQUFNLEVBQUEsa0JBQUc7WUFDRSxRQUFRLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBdEIsUUFBUTs7QUFFZixlQUNJO0FBQUMsY0FBRSxDQUFDLE1BQU07Y0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBRSxNQUFNLEFBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxBQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEFBQUM7WUFvQnBFLG9CQUFDLEtBQUssQ0FBQyxJQUFJLElBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBRSxLQUFLLEFBQUMsR0FBRztZQUN4RCwyREFBbUI7U0FDWCxDQUNkO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsR0FBRyxDQUFDLEtBQUssQ0FDTDtBQUFDLFNBQUs7TUFBQyxTQUFTLEVBQUUsT0FBTyxBQUFDO0lBQ3RCLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztJQUNuQyxvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUUsSUFBSSxBQUFDLEdBQUc7Q0FDbkMsQ0FDWCxDQUFDO0FBQ0YsMkJBQWMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoTUFBd0FQY0FBQUFBQURNek0yVmxaWmVYbDVpWW1KbVptYWlvcUt1cnE3Q3dzTHU3dThMQ3dzckt5czdPenMvUHo5TFMwdFRVMU5YVjFkbloyZURnNE9IaDRlUGo0K1RrNU9ibTV1am82T3JxNnV2cjYrN3U3dkR3OFBMeTh2UHo4L1gxOWZiMjl2ZjM5L2o0K1BuNStmcjYrdnY3Ky96OC9QMzkvZjcrL3YvLy81R1JrWmFXbHBxYW1rMU5UWFIwZElDQWdISnljcW1wcWQvZjN6UTBORFkyTmtORFEwUkVSRWhJU0VsSlNVOVBUMXBhV2x0YlczbDVlWDkvZjV1Ym01K2ZuNkNnb0tPam82U2twS2FtcHFlbnA3T3pzN1MwdExhMnRybTV1YisvdjhIQndjM056ZERRME5iVzF0ZlgxOXpjM09YbDVlbnA2ZTN0N1ZOVFV4MGRIU0FnSUNZbUprVkZSWHA2ZW41K2ZvU0VoSk9UazlIUjBVNU9Ub1dGaFFFQkFRSUNBZ1FFQkJRVUZCVVZGUm9hR2hzYkd5SWlJaU1qSXk4dkx6QXdNREV4TVRJeU1sRlJVVlpXVmxkWFYyWm1abWRuWjJob2FHeHNiSEZ4Y1hOemMzWjJkbmg0ZUh4OGZJYUdob2VIaDRpSWlKV1ZsWjZlbnF5c3JMR3hzYmUzdDdpNHVMcTZ1cjYrdnNQRHc4VEV4TXZMeTh6TXpOUFQwOWpZMk5yYTJ0dmIyOTdlM3VMaTR1enM3Ty92Ny9IeDhmVDA5RXRMUzFKU1VwS1NraDRlSGlRa0pDY25KMFpHUmxSVVZIVjFkWHQ3ZTB4TVRIZDNkN3k4dkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNIL0MwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaC93dEpRME5TUjBKSE1UQXhNa2dBQUF4SVRHbHVid0lRQUFCdGJuUnlVa2RDSUZoWldpQUh6Z0FDQUFrQUJnQXhBQUJoWTNOd1RWTkdWQUFBQUFCSlJVTWdjMUpIUWdBQUFBQUFBQUFBQUFBQUFRQUE5dFlBSWY4TFNVTkRVa2RDUnpFd01USklBQUFNU0V4cGJtOENFQUFBYlc1MGNsSkhRaUJZV1ZvZ0I4NEFBZ0FKQUFZQU1RQUFZV056Y0UxVFJsUUFBQUFBU1VWRElITlNSMElBQUFBQUFBQUFBQUFBQUFFQUFQYldBQ0gvQzBsRFExSkhRa2N4TURFeVNBQUFERWhNYVc1dkFoQUFBRzF1ZEhKU1IwSWdXRmxhSUFmT0FBSUFDUUFHQURFQUFHRmpjM0JOVTBaVUFBQUFBRWxGUXlCelVrZENBQUFBQUFBQUFBQUFBQUFCQUFEMjFnQWgvd3RKUTBOU1IwSkhNVEF4TWtnQUFBeElUR2x1YndJUUFBQnRiblJ5VWtkQ0lGaFpXaUFIemdBQ0FBa0FCZ0F4QUFCaFkzTndUVk5HVkFBQUFBQkpSVU1nYzFKSFFnQUFBQUFBQUFBQUFBQUFBUUFBOXRZQUlmOExTVU5EVWtkQ1J6RXdNVEpJQUFBTVNFeHBibThDRUFBQWJXNTBjbEpIUWlCWVdWb2dCODRBQWdBSkFBWUFNUUFBWVdOemNFMVRSbFFBQUFBQVNVVkRJSE5TUjBJQUFBQUFBQUFBQUFBQUFBRUFBUGJXQUNIL0MwbERRMUpIUWtjeE1ERXlTQUFBREVoTWFXNXZBaEFBQUcxdWRISlNSMElnV0ZsYUlBZk9BQUlBQ1FBR0FERUFBR0ZqYzNCTlUwWlVBQUFBQUVsRlF5QnpVa2RDQUFBQUFBQUFBQUFBQUFBQkFBRDIxZ0FoL3d0SlEwTlNSMEpITVRBeE1rZ0FBQXhJVEdsdWJ3SVFBQUJ0Ym5SeVVrZENJRmhaV2lBSHpnQUNBQWtBQmdBeEFBQmhZM053VFZOR1ZBQUFBQUJKUlVNZ2MxSkhRZ0FBQUFBQUFBQUFBQUFBQVFBQTl0WUFJZjhMU1VORFVrZENSekV3TVRKSUFBQU1TRXhwYm04Q0VBQUFiVzUwY2xKSFFpQllXVm9nQjg0QUFnQUpBQVlBTVFBQVlXTnpjRTFUUmxRQUFBQUFTVVZESUhOU1IwSUFBQUFBQUFBQUFBQUFBQUVBQVBiV0FDSCtMVTFoWkdVZ1lua2dTM0poYzJsdGFYSmhJRTVsYW1Ob1pYWmhJQ2gzZDNjdWJHOWhaR2x1Wm04dWJtVjBLUUFoK1FRRUJRRC9BQ3dBQUFBQU1BQXdBQUFILzRBb2dvT0VoWWFIaUltS2k0eU5qbzRsSlkrVGpVMVpVbEpaVFpTY2hrVlZBS0VBVlVXZHBoQ2dvcUZWRUthY1BLcXFQSzZJSnhzVVVDT0RKRGl4b2pna3RJVlJQVGsyT0RzTkp5Z2pMTDZoTExyQ2dsRXZNZ0hZQVRjS2dsZlBBRmZUZ3ozWjVUb1lLQTFVdmxRTjRpZ2JPdVhaTXdtQ0JsT3FVd2J2S0JRMjg3TDlFSFJDU1FzclZsb29XZllPQ282QTJBNFFPaEVpQk1OK0pIWkFyTUdrMzZJR04rYkpTQ0hKb3lJRk9XWmdvNUdDZzBsR0dCTDRPTUFrMkV0RUpremNiQVRGeUFBVlJDenNUQVFCaTRDakFxNHNHV29JZ3d1a1NLOVVZRXJvQ0ZTb0NLZ1M3SEVWcVphU1RFOXc3U3JncTFZVVZzbG1QZXUwcTlTemdyT0tRbFVLZDFEUG4wSHJGc3FwTnhHSUNROGlhTGdJOXdtQ0ZRTUlBR0ZnODJ5R0lRTWlSMTdCZ1BEUUUwa2thdzZpNGV3SEdKb2xFNGhRNklSbGNSMkNoSmI4WUpDSUMwNmNYQkRoY1FTQzFRTjZUQkRFNGNHQzN3c2V1T3pub01CcUJDQlFpSUFBSERnRTJ1OUVJREV1V2NnVFFWQ2FONGZpVWNRV0JFRU1KTWt3S0laMjRERmVqdWp3Z2JENTh3dlNzNFcvQU4zWkVVek9NNUYyMWtOKzRFeDQwTmNJR1VnZ1FRYjg5YVhnZ2xvRkFnQWgrUVFGQlFBdkFDd0NBQUlBSndBckFBQUkvd0JSQ0J4SXNLQkJFeVlNS2x6SXNLQ0VQWFRvN0pIUXNHTEZRWkVDYUF3UWFaREZqd1VWcmRtNGNZMGlrQ2hYa0NTNTRvWExsekJqeXZTUVlVT0pnU1htck53NDU2WkFFWXNRTVRyUnNJT2ZMblRzN0RtSm9vU2NuUnJsM0R5aGdFMlpNV2hjWEZqWW9ZQWJBV0FGMUlFZ1VBWFVBQ29FOWhrRG9DMEFMMXkyR3ZUek5TellPNDVRSUdLeGt3VWlGQlhTdUhYcnhZVkJEM2ZzaG9YRFFHQUNTQ1FoSlJCb0FNeGd0Mm9ZRmN4QVIzSFlCQzhQcFlnVEo4V2hsM2t1dXgyVHFPQUdPNTdCQ29vNVlrUk1QVjVVQXpDenFLQ0pQYkZiVUxCSVNJenVOaU1NS3FxaitBMkNoQlZKdFBoeW1ZeUNoUkM2d0JIZ1pnNENFQ0ExdE44SWt4dk1tVDVFRnpwaUFFZ1FCZWdnUnhEU2c4ZEFoWVVuMHFQY0w1RERsZ1NBTkxBQmZ5aFpjQUFCQXd4QWdBSERFVmhSQjN3a0tPRUFCalRpWUVPR0lEaGhnb1ZjeUZBZ0cwcjRCM3dlRWdSaWlBT01XS0pCR2FMWTRZb0ZRUmhpaFRBYVpLQ0dDelpZWTBIK0FTamdqZ3psQitSSEpYQ0FnUVloREZuUUl4RVVzZ0FoVzF4QTRvNGZHTExBbFZjV0l0ZVFFMkRwNVJaSkFrbkNBMTVpU1lnR1E0N2dRSmxZWWpDa0NSR3d1VUFoSENpSkFTRnNSdUFUa0NaSWdDZVdoanlpcEVBbFlIQ0lBdzlNQU42Z0E1a3dBZ2t4TVNycHBKUlcrbEZBQUNINUJBVUZBQ3dBTEFNQUFnQXJBQ2NBQUFqL0FGRUlIRWl3WU1FVEp3d3FYTWlRSVlZalBYb2N3ZEN3b3NXQkVIZ0kyQ2lBQjRTTElCVkMwY2h4SXc4b0lWTUtORkt5cEJHVkMwZDArSkJRb0lrQkxUa09NREZ3QkJRS0cycGFGT0VBUVJBRFNUTFlWSkZ6b3dxZUp4cnN3R0VqUjQ4b1E1RVVHTUIxZ0pBbkFvazBGVUJFb0lJYkFkSUdrUEVDYTBNSFc3dHlSUUFDaFlWTU9UTlpRSUZCaDlxL1BScU9RQ0MzYTQ4SkFwZnNLTGxqaWNBRU0vNnExYkdCWVljZ2hicytHRmdCZ1NSSkNDb00vQ0ZaclEwS0REL0F5RHlBUUlTQ0pVb1VQRkE2TFE2VUMwOGtZUjFFZzBVbU5XcnZJTkV3dzVEQ0t4Z0laVmdpaFF6Sk54cFlmSUpnUldzZ0RJaGY1SkNDUnRvWk9SU0FzUVF4NFVFRURjc3RrbWh5d0VjQ2lqRGpHeHlodmFEUEdER2dpSkIvVUxFbUxoNFI1QUVUQ3hTNHdBTWM4RGVRQVpNQTRDQUFsQlFoMEFoTkdHamdBL3Z4cDBTRER6cFlTUk1vWkdDaGhSY29pRW1ISFhhQmdnUWpHdWdFZnlGWWd1S0RsNVRBWW9zTHZDaGZqRE02V0tPSU9KYkkzNGs5cWtoaGl4Z3F1T0dNSHdvMG9JVUlLaWdRZ3gxR1NOQjkrV1VvNVFuK0FmaVJsQ0hSQithWVpKWnA1cGxvcHFubW1teTI2ZWFiY0Y0VUVBQWgrUVFGQlFBcEFDd0RBQUlBS3dBbkFBQUkvd0JSQ0J4SXNLREJnd2dUS2pUWXdWQ2dRSVk2TEp4STBRSWZBZ01HRU9CamdhTEhneHdPWkJ3NTRBQ0hqeWdGYnNGSVV1T1dsQWhOakNCeFl1Q0pCQzFIY3FvcHNNU0dEQjU0VGl5QjRaQ0RCeE5BQ0x5Wk0yTUNub3IyMktIVHhZL0VoU1lrRUZyQWRZR2hSd0liTkIzUVFDQ0VPZ0xTQ25CVDRHcENERnU3Y28xUUFzVUdHRGxoYkVEaDZJNWF0Vzc4S0RRUlFXN1hRaWRSVURCQTBnQUZnUXpnL0ZWN3gwUENFUTRNZDhVd3NGR2hQMzhLTlJxWVlMSmFPaGtTa25pZ2VRRWhEUVZObUNnb3lIUmFPM3NUVG1pOUpjUkVDaTFzNzVtZDhJTWh3NFV1VURTQjRNM2tPb29tUG9wUXlQV1dDOFFuZ2tBd3g0MEFPRjBnZU5Vc3dRR0RCdDhvVFZBUUJJaUJJNWp3RDVhb0d6L2xDVVI2NUx3b0VLUCt4d1NhQkNCZ0FHc000dDlFaHdRNG9JQlNTSENnUXBJc3VPQWVEeUkwUWh3U0RyaEpkaFVPZEdHR0FtN1lvVUVSZ2tqaGlBVWxtR0dES0JvRTRJSUZ0bWpRZmZudDE1K01DTTJIbzRlRTZJR0hBUlhzU0pBR0xZVGhCUUJnbk5HSFVES1MwTUlYQUVRWkpSa0tDRW1JR0ZKbTJjWUlPK3B4WkpaUm1ySElqbm1BS2VVWWlleG9BQmhtQXFBR0l6dFdrSWFaWHJnZ0pBcDlqSkdsRjF3b0orUUpDckJSeGhob3VPRG5uU2lJc0FnaWpEQkpVRUFBSWZrRUJRVUFXd0FzQndBREFDY0FLd0FBQi8rQUtJS0RoSVFqR1JJU0dTT0ZqWTZQalI1TUM1UUxUQjZRbVpvams1V1VUSXlhb29VWW5wNFlvNm1DTWFhVk1ZUW5IeDJocW9Tc3JRdXZnaGxKQmtFSURpSzFnMUM0QzFDQ1QwSUR6QU1GU01MREloQ3RFTUlnQ00zTkJRN0RnaHdQbmc4Y2doTTkyczBJdExVaUYwNU9GOUVvRCtqTlFSM2VneWNuaFJFRTlRTmdmTWdIU1VNUWdFbjRFWFIwZ3NFS2RFTXlMSVJFZ2dHUWZ5c1FQSm1ZNllTR0NBOG1nT0E0eklRSmtwb3NFRkV4d0FneWxJMldYQkZBVXdBV0NEQUpWWmhaazZZTFZEbFJJT2paODBqUUVscUkxdXloRUNWU3BUU1pCaDBLMVdqUW5VcC9CaFVrcytmTnJZTlVzblFKdHBCSnNDU1lIUENSQUNoWURpbWhhQVFJTUNPSEFyQWxVc2lZeS9kR2c2MU1hdkFkdklNRXdSTWhRalJGY1dEd1lCd3ZhNTFRMHNLS2xSWktGUDV3ek5jR0JXOEdwZ0FZRFdDS0FVRUpabkFPb0dQRHNBWlVTSk9tOGhlRGp0VTl2RjJSTGZ1S0lBVTNCc3Q0RVdYWUNCYThTYk5nZEtMQkRodzJjdlFvUG93RWp1U2pjUmdXTkFJS2hRMkxhL0hBRG9ESFZnaFZrbGZCdWJWSWV0SlZpcFJGMFNTTEZDbFptc3dmVktMRXdrQUFJZmtFQlFVQUx3QXNCd0FEQUNjQUt3QUFDUDhBVVFnY1NMQ2d3WU1JRXlwY3lMQ2h3NGNRSTBwY2VJTEVDQk1USDRLWThNREJJUXdsTWk1OFpHaUJ5UVdFSkdBVWViQkVoSk1uQ1dGZ2VaQkRJWmduRDYya09SQUR6cE1PUnZBa3FJSFF6d1VQU0F3ZEdHTEwwUWxMQ1Y2NENkUFFoNmdEVFZ6WVlyUlFoRWRZQzRiUWdJRkR5TEFLVDV4QVczQkRBMEFKdG5CZ2k0S0NBUUlEQmhBNFlBRnRJd041QXcvZzB5RnNJY0dCQ1JqQ2F1SVA0c0NCR0R0K1BDQXkxc09QRllmOSs1Z3dXcnQ0OWZLbDZ4YXVYTG9EMVNLc1lBQ1BIa0pDSDVxZ0lBZ1FBMGNKVC9RNUF3YUFsekF0TkRnRWdXQ09Hd0Z3dWtCQXFJQU1nT2ZQdjdSUXV0QUVnamNDc21ldm84amdpRGJRdzR2WkljU1FRZ3Z0NlBmc0ZMaklUSGpvWHZRUVBERml4TnFCZ3RDanQ3T2hZS0l4NzBHWGgwQW5ISkpDSEhHa2NNaDlDZWluSFIwWkZNU0lHZ0VDQUlZQkFpVUFTUUFjQmdCSkFnSXhBSWVEQXR6aGdVRXVlQkZnR2hXZ2dBZ0xIWGJJQWlJb09IS0hnMjc0Y2RBRlhLZ0kzUmg5Q0tSQ2pER3FJQkFFZGFEblJnR0Y3ZWdDR21PVXdZWUNhNVVnQjVFZHluR1dJbnZZUVVjWGZqU0owQW1NSUxLSUNBT1ZNQWVXSE01eEZnb2xiSkNCQi9kSnRBS2JBYXdRbGlKcllMbEdkMkVORWttTWtReENsd1I3MEVISEhoS2dKcEFKNjBVVUVBQWgrUVFGQlFBdEFDd0NBQWNBS3dBbkFBQUkvd0JSQ0J4SXNLREJnd2dUS2x6SXNLSERoeEFqU3B4SXNhTEZpeGd6YXR6SXNhUEhoaVJHZkVRSWdRY1hGanVXbk1nb0FrcU1HRkJFRGl4Q0NZQk5BSk1NWU9Ud1lJSFBCVXc4Q0d4UzZlYk5TVW9zaXVqNTAyY1RrVjJNR3NWazhVTFRwaGxLWEpKNjAxS0lpazZ1L3BTZ2xhdE5yMkRGK3BTQUlxcFpxaFd0cXMyQWdpaFhwRXFaTm4wcWtLYlJuRHYxQWhVNnNPVEpsQ3N4dG53WjgyRElrUXd4SlBCeG9Ba0ppQ2MwUkhnd0FZUkRCVGxtQkFoQUl3VUhoeVFZQUNFd29BZUNKd3diM0JoTlcwYUtFZ3hQTUZneG9IZnZJWFFUa3RoQnUzZ05KZ3cxQlBITlBFbmlnMUJ3RkM5K29HQUozQVFqc0diZUc4YUhoQlJzVExHbi9XTmdCUVNTSkNHb01QQUJkOTlCT2lUY29HTjhnQmtKQkM3WklhQy9nSlFDVGRERGV3TWdJQk5DUGRpbkF3WW9XSkNKZi81bFlnRUtJQ0R3WGdFT0xCVEZDeklVZDRNQ0FoRUJJWVJFQ1BTRUVNd1ZnSVFJREVYUlF3NDI0TEJEQXl1Wm9NS0kvcWxnZ2tBWkpHRkFFQWhzd1dKREoyeEFRV01DbVRBQWp2ME5zS05BSjN6UXdZRVdHY0drQUVaQUJnVVBPUElBQldRb2xBUWhEeENBS1JBR1IvVFF3eEVNbWpuUUNjOUZGQkFBSWZrRUJRVUFLUUFzQWdBSEFDc0FKd0FBQ1A4QVVRZ2NLUEFFSTBTTFJCQmN5TENodzRZWFhLQVpVNGFOZ2hNUE0yb2tlSUdMRndBZ0FZenBzN0hrUXhjZlE0Sk1VOEdreTRHTTFLZ01DY2JBeTVlSnhzd01tZWVteTBWbWRnTHdvc2VueVJGdGhJb2haTlNrQWpJenY3UWcwYlRraVQ1bndBd04wMEpEVlpjVkRPRFJRMmpFMTQwbFNweDlHYVBBQ3psNkVHRmNtM0hRbWdCNEEyaEtRUGVoQkNsNTgybzYxTGZobnNDQkpSVmVhR0lUNHJ4eHpDNFcyUGd4M3NpVEJ4NjJyRGl6d0wrUEIzc2VhRGZ3M3RFRTI3Nk5PeGYxd0xTdU16cGlBRWdRQlJNM1EyakF3RUZ0U1FoZDRBaHdNd2NCQ0pNbUxtd2h0S0JRaEVjYkZkVVJRSjM2R3dTNE4xNG90S0I3ZDBNZk1wclUyRk85ZkFzS0cwTnM4YzUrUXNZTmRzcVhGOFE0KzBBTnpObDNmMERWWVFZNjhsWEhsMENORlBMSEg0VTBNaEFHK25ubmdHUU5lWEJIZ0FMQXdZQkFGQmd3d0lZREdJQWVDaHh3MTJBRTlqWGtoeHNCM3VFSUNodkF3Q0dITUd5QVFna1JORWdJQmhwMVVBQ0sxZFVCZ1VBTnZQaGlBd0k5WWdoN2hFaFFva01kK05FRkhYYnNvVWhCQ1FqSllRSnpnVERCQXc0Y2dvRnZHNTNnUVFZYmdIbENsVllPd0Vscko1QXd3cEpOYlVHQWxRUnNnUm9IQjFoNUFBZXVXY0RIbkFNUXdJY0ZzYUhRZ1NHQkJHSklCNFhTRlJBQU93PT1cIjtcbiIsImltcG9ydCB7ZGVmaW5lQ29tcG9uZW50U3R5bGUsIFRoZW1lfSBmcm9tIFwibGliLXNvdXJjZS92Mi9zdHlsZS5qc1wiO1xyXG5pbXBvcnQgUmlwcGxlIGZyb20gXCJsaWItc291cmNlL3VpdjIvcmlwcGxlLmpzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gJ2xpYi1zb3VyY2UvdWl2Mi9pY29uLmpzJztcclxuaW1wb3J0IFRvdWNoYWJsZSBmcm9tICdsaWItc291cmNlL3VpdjIvVG91Y2hhYmxlJztcclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ2J1dHRvbicsXHJcbiAgICAnY29yZScsXHJcbiAgICB7XHJcbiAgICAgICAgXCJ3cmFwcGVyXCI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIG1hcmdpbjogNCxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICB6SW5kZXg6IFwiKzBcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgLy8gY29sb3I6ICgpID0+IFRoZW1lLnZhcmlhYmxlLmNvcmUuYnV0dG9uLnRleHRDb2xvcixcclxuICAgICAgICAgICAgLy8gdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndyYXBwZXI6Zm9jdXNcIjoge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAnbm9uZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid3JhcHBlcltkaXNhYmxlZF1cIjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWFlYWVhJyxcclxuICAgICAgICAgICAgY29sb3I6ICcjYTBhMGEwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0ZXh0LXdyYXBwZXJcIjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAndGFibGUnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRleHRcIjoge1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDE1LFxyXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDE1LFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgd2hpdGVTcGFjZTogJ3ByZScsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICd0YWJsZS1jZWxsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3cmFwcGVyID4gb3ZlcmxheVwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGxpbmVhcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiLmNvcmUtZGVza3RvcCBvdmVybGF5OmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjA1KSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid3JhcHBlcjphY3RpdmUgPiBvdmVybGF5XCI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjEpJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG4vKlxyXG4gICAgdGV4dFxyXG4gICAgb25UYXBcclxuICAgIHN0eWxlTmFtZVxyXG4qL1xyXG5jb25zdCBCdXR0b24gPSBwcm9wcyA9PiB7XHJcbiAgICBsZXQge1xyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgb25UYXAgPSAoKSA9PiBjb25zb2xlLndhcm4oXCJObyBvblRhcCBnaXZlbiB0byBCdXR0b25cIiksXHJcbiAgICAgICAgc3R5bGVOYW1lID0gXCJjb3JlXCIsXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgdGV4dENvbG9yLFxyXG4gICAgICAgIGZsdXNoLFxyXG4gICAgICAgIGJsb2NrLFxyXG4gICAgICAgIGZpbGwsXHJcbiAgICAgICAgcGFkZGluZyxcclxuICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICBpY29uTmFtZSA9IG51bGxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB3cmFwcGVyTmFtZSA9IGBidXR0b24tJHtzdHlsZU5hbWV9LXdyYXBwZXJgO1xyXG4gICAgY29uc3QgdGV4dFdyYXBwZXJOYW1lID0gYGJ1dHRvbi0ke3N0eWxlTmFtZX0tdGV4dC13cmFwcGVyYDtcclxuICAgIGNvbnN0IHRleHROYW1lID0gYGJ1dHRvbi0ke3N0eWxlTmFtZX0tdGV4dGA7XHJcbiAgICBjb25zdCBvdmVybGF5TmFtZSA9IGBidXR0b24tJHtzdHlsZU5hbWV9LW92ZXJsYXlgO1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXJTdHlsZSA9IHt9O1xyXG4gICAgY29uc3QgdGV4dFdyYXBwZXJTdHlsZSA9IHt9O1xyXG4gICAgbGV0IHJpcHBsZUVsZW1lbnQ7XHJcbiAgICBsZXQgb25UYXBIYW5kbGVyO1xyXG5cclxuICAgIGlmIChkaXNhYmxlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIC8vIHJpcHBsZUVsZW1lbnQgPSA8UmlwcGxlIC8+O1xyXG4gICAgICAgIG9uVGFwSGFuZGxlciA9IG9uVGFwO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrID09PSB0cnVlKSB7XHJcbiAgICAgICAgd3JhcHBlclN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbGwgPT09IHRydWUpIHtcclxuICAgICAgICBmbHVzaCA9IHRydWU7XHJcbiAgICAgICAgd3JhcHBlclN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIHdyYXBwZXJTdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgdGV4dFdyYXBwZXJTdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICB9XHJcbiAgICBpZiAoZmx1c2ggPT09IHRydWUpIHtcclxuICAgICAgICB3cmFwcGVyU3R5bGUubWFyZ2luID0gMDtcclxuICAgIH1cclxuICAgIGlmIChpY29uTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRleHQgPSA8c3Bhbj48SWNvbiBuYW1lPXtpY29uTmFtZX0gLz57dGV4dH08L3NwYW4+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRvdWNoYWJsZSBjb21wb25lbnQ9XCJkaXZcIiB0YWJJbmRleD17LTF9IGNsYXNzTmFtZT17d3JhcHBlck5hbWV9IG9uVGFwPXtvblRhcEhhbmRsZXJ9IGRpc2FibGVkPXtkaXNhYmxlZH0gc3R5bGU9e3dyYXBwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0ZXh0V3JhcHBlck5hbWV9IHN0eWxlPXt0ZXh0V3JhcHBlclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0ZXh0TmFtZX0+e3RleHR9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3ZlcmxheU5hbWV9IC8+XHJcbiAgICAgICAgICAgIHtyaXBwbGVFbGVtZW50fVxyXG4gICAgICAgIDwvVG91Y2hhYmxlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IHtkZWZpbmVDb21wb25lbnRTdHlsZX0gZnJvbSBcImxpYi1zb3VyY2UvdjIvc3R5bGVcIjtcclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ2NhcmQnLFxyXG4gICAgJ2NvcmUnLFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGFpbmVyXCI6IHtcclxuICAgICAgICAgICAgbWFyZ2luOiA1LFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcxcHggMnB4IDJweCByZ2JhKDEyMCwgMTIwLCAxMjAsIDAuMTUpJyxcclxuICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlMGUwZTAnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgcGFkZGluZzogMyxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbmNvbnN0IENhcmQgPSAoe2NoaWxkcmVuLCB0aXRsZSA9IG51bGx9KSA9PiB7XHJcbiAgICBsZXQgY29udGVudDtcclxuXHJcbiAgICBpZiAodGl0bGUgPT09IG51bGwpIHtcclxuICAgICAgICBjb250ZW50ID0gY2hpbGRyZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29yZS10aXRsZVwiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb3JlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQge2RlZmluZUNvbXBvbmVudFN0eWxlfSBmcm9tIFwibGliLXNvdXJjZS92Mi9zdHlsZVwiO1xyXG5cclxuZGVmaW5lQ29tcG9uZW50U3R5bGUoXHJcbiAgICAnY2VudGVyLWNvbnRlbnQnLFxyXG4gICAgJ2NvcmUnLFxyXG4gICAge1xyXG4gICAgICAgICdjb250YWluZXInOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICd0YWJsZScsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUnLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnY29udGVudCc6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ3RhYmxlLWNlbGwnLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgcGFkZGluZzogJ2F1dG8nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5jb25zdCBDZW50ZXJDb250ZW50ID0gKHtjaGlsZHJlbiwgd2lkdGgsIGhlaWdodCwgY2xhc3NOYW1lID0gXCJcIn0pID0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGNlbnRlci1jb250ZW50LWNvcmUtY29udGFpbmVyICR7Y2xhc3NOYW1lfWB9IHN0eWxlPXt7d2lkdGgsIGhlaWdodH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNvbnRlbnQtY29yZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICdhdXRvJywgZGlzcGxheTogJ2lubGluZS1ibG9jayd9fT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENlbnRlckNvbnRlbnQ7XHJcbiIsImltcG9ydCB7ZGVmaW5lQ29tcG9uZW50U3R5bGV9IGZyb20gXCJsaWItc291cmNlL3YyL3N0eWxlXCI7XHJcbmltcG9ydCBDZW50ZXJDb250ZW50IGZyb20gXCJsaWItc291cmNlL3VpdjIvQ2VudGVyQ29udGVudFwiO1xyXG4vLyBpbXBvcnQgUmlwcGxlIGZyb20gXCJsaWItc291cmNlL3VpdjIvUmlwcGxlXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCJsaWItc291cmNlL3VpdjIvSWNvblwiO1xyXG5cclxuZGVmaW5lQ29tcG9uZW50U3R5bGUoXHJcbiAgICAnY2hlY2tib3gnLFxyXG4gICAgJ2NvcmUnLFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGFpbmVyXCI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGxpbmVhcicsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNvbnRhaW5lcjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDc1KScsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdub25lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpY29uXCI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMjUwbXMgbGluZWFyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpY29uW2RhdGEtY2hlY2tlZD0ndHJ1ZSddXCI6IHtcclxuICAgICAgICAgICAgY29sb3I6ICcjMjRiMzI0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMsXHJcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMzAsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdWJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuY29uc3QgaW9uT25JY29uID0gXCJpb24tYW5kcm9pZC1jaGVja2JveFwiO1xyXG5jb25zdCBpb25PZmZJY29uID0gXCJpb24tYW5kcm9pZC1jaGVja2JveC1vdXRsaW5lLWJsYW5rXCI7XHJcblxyXG5jb25zdCBDaGVja2JveCA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjaGVja2VkID0gZmFsc2UsXHJcbiAgICAgICAgb25JY29uTmFtZSA9IGlvbk9uSWNvbixcclxuICAgICAgICBvZmZJY29uTmFtZSA9IGlvbk9mZkljb24sXHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgc3ViVGl0bGUgPSBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlID0gKCkgPT4gY29uc29sZS53YXJuKFwiTm8gb25DaGFuZ2UgZ2l2ZW4gdG8gY2hlY2tib3hcIilcclxuICAgIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGljb25OYW1lID0gKGNoZWNrZWQgPT09IHRydWUpID8gb25JY29uTmFtZSA6IG9mZkljb25OYW1lO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBsYWJlbDtcclxuXHJcbiAgICBpZiAoc3ViVGl0bGUgIT09IG51bGwpIHtcclxuICAgICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1jb3JlLXN1YnRpdGxlXCI+e3N1YlRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVJLlRvdWNoYWJsZSBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJjaGVja2JveC1jb3JlLWNvbnRhaW5lclwiIG9uVGFwPXsoKSA9PiBvbkNoYW5nZSghY2hlY2tlZCl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWNvcmUtaWNvblwiIGRhdGEtY2hlY2tlZD17Y2hlY2tlZH0+XHJcbiAgICAgICAgICAgICAgICA8Q2VudGVyQ29udGVudCBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17aWNvbk5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NlbnRlckNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWNvcmUtbGFiZWxcIj57Y29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgey8qPFJpcHBsZSAvPiovfVxyXG4gICAgICAgIDwvVUkuVG91Y2hhYmxlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xyXG4iLCJpbXBvcnQge2RlZmluZUNvbXBvbmVudFN0eWxlfSBmcm9tIFwibGliLXNvdXJjZS92Mi9zdHlsZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJsaWItc291cmNlL3VpdjIvQnV0dG9uXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCJsaWItc291cmNlL3VpdjIvSWNvblwiO1xyXG5pbXBvcnQgT3B0aW9uIGZyb20gXCJsaWItc291cmNlL3VpdjIvT3B0aW9uXCI7XHJcbmltcG9ydCBUb3VjaGFibGUgZnJvbSBcImxpYi1zb3VyY2UvdWl2Mi9Ub3VjaGFibGVcIjtcclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ2NvbWJvYm94JyxcclxuICAgICdjb3JlJyxcclxuICAgIHtcclxuICAgICAgICAnY29udGFpbmVyJzoge1xyXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAzLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaWNvblwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICAgICAgICByaWdodDogMTAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxyXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5jb25zdCBjb21ib2JveFNlbGVjdCA9IChpbmRleCwgdmFsdWUpID0+IGRpYWxvZy5zdWNjZXNzKFtpbmRleCwgdmFsdWVdKTtcclxuY2xhc3MgQ29tYm9ib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3RpdGxlID0gXCJDb21ib2JveCFcIiwgc2Nyb2xsVG9TZWxlY3RlZCA9IGZhbHNlLCBzZWxlY3RlZEluZGV4fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNoaWxkcmVuLm1hcChcclxuICAgICAgICAgICAgICAgICh7cHJvcHM6IHt2YWx1ZSA9IG51bGwsIGNoaWxkcmVuLCBzdHlsZSA9IG51bGwsIGNsYXNzTmFtZSA9IG51bGx9fSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvblRhcCA9ICgpID0+IGRpYWxvZy5oaWRlKGNvbWJvYm94U2VsZWN0KGluZGV4LCB2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgey4uLntzdHlsZSwgY2xhc3NOYW1lfX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e2NoaWxkcmVufSBibG9jayBmbHVzaCBvblRhcD17b25UYXB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgIHt0ZXh0OiBcIkNhbmNlbFwiLCBjYW5jZWxzOiB0cnVlfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBzZXR1cChjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb1NlbGVjdGVkID09PSB0cnVlICYmIHNlbGVjdGVkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbnRhaW5lci5jaGlsZHJlbltzZWxlY3RlZEluZGV4XS5vZmZzZXRUb3AgLSBjb250YWluZXIub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoLi4ucmVzcG9uc2UudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3NlbGVjdGVkSW5kZXgsIGNoaWxkcmVufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZmxhdHRlbmVkQ2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcclxuICAgICAgICBsZXQgY3VycmVudENoaWxkID0gXCJQbGVhc2Ugc2VsZWN0IGFuIG9wdGlvblwiO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY3VycmVudENoaWxkID0gZmxhdHRlbmVkQ2hpbGRyZW5bc2VsZWN0ZWRJbmRleF0ucHJvcHMuY2hpbGRyZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VG91Y2hhYmxlIGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cImNvbWJvYm94LWNvcmUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e2N1cnJlbnRDaGlsZH0gYmxvY2sgZmx1c2ggb25UYXA9e3RoaXMub3Blbk9wdGlvbnN9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbWJvYm94LWNvcmUtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJpb24tYXJyb3ctZG93bi1iXCIgc2l6ZT17MjR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Ub3VjaGFibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tYm9ib3g7XHJcbiIsImltcG9ydCB7ZGVmaW5lQ29tcG9uZW50U3R5bGV9IGZyb20gXCJsaWItc291cmNlL3YyL3N0eWxlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcImxpYi1zb3VyY2UvdWl2Mi9CdXR0b25cIjtcclxuaW1wb3J0IFRvdWNoYWJsZSBmcm9tIFwibGliLXNvdXJjZS91aXYyL1RvdWNoYWJsZVwiO1xyXG5cclxuY29uc3QgYW5pbWF0aW9uVGltZSA9IDI1MDtcclxuZGVmaW5lQ29tcG9uZW50U3R5bGUoXHJcbiAgICAnZGlhbG9nJyxcclxuICAgICdjb3JlJyxcclxuICAgIHtcclxuICAgICAgICBcIm92ZXJsYXlcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjM1KScsXHJcbiAgICAgICAgICAgIHpJbmRleDogJysxMDAnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAnYXV0bycsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7YW5pbWF0aW9uVGltZX1tcyBsaW5lYXJgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXCJ3aW5kb3dcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICB3aWR0aDogJzc1JScsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA0ODAsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3aW5kb3ctdG9wXCI6IHtcclxuICAgICAgICAgICAgdG9wOiAnMTUlJyxcclxuICAgICAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRvdy1jZW50ZXJcIjoge1xyXG4gICAgICAgICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgIG1heEhlaWdodDogJzQwdmgnLFxyXG4gICAgICAgICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheScsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCBsaWdodGdyYXknXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRpdGxlXCI6IHtcclxuICAgICAgICAgICAgcGFkZGluZzogJzUgMTUnLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5sZXQgY3VycmVudERpYWxvZyA9IG51bGw7XHJcbndpbmRvdy5kaWFsb2cgPSB7XHJcbiAgICBzaG93KG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudERpYWxvZy5zaG93KG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIGhpZGUodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudERpYWxvZy5oaWRlKHZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHt2YWx1ZSwgc3RhdHVzOiAnc3VjY2Vzcyd9O1xyXG4gICAgfSxcclxuICAgIGNhbmNlbCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB7dmFsdWUsIHN0YXR1czogJ2NhbmNlbGVkJ307XHJcbiAgICB9LFxyXG4gICAgaW52YWxpZCh2YWx1ZSA9IG51bGwsIHJlYXNvbiA9ICdpbnZhbGlkJykge1xyXG4gICAgICAgIHJldHVybiB7dmFsdWUsIHJlYXNvbn07XHJcbiAgICB9XHJcbn07XHJcbmNsYXNzIERpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBudWxsLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBudWxsLFxyXG4gICAgICAgICAgICBuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBwb3M6ICd0b3AnLFxyXG4gICAgICAgICAgICBjb250ZW50OiBudWxsLFxyXG4gICAgICAgICAgICBjbG9zYWJsZTogIXRydWUsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IG51bGwsXHJcbiAgICAgICAgICAgIHRpdGxlOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3cgPSBhc3luYyAoZGlzcGxheVByb3BzKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW5nID09PSB0cnVlIHx8IHRoaXMucmVzb2x2ZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpYWxvZy5pbnZhbGlkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJlc29sdmVyID0gbmV3IFByb21pc2UoXHJcbiAgICAgICAgICAgIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IHZhbHVlID0+IHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBjb250ZW50ID0gbnVsbCxcclxuICAgICAgICAgICAgY2xvc2FibGUgPSB0cnVlLFxyXG4gICAgICAgICAgICBidXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge3RleHQ6ICdvayd9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHRpdGxlID0gbnVsbCxcclxuICAgICAgICAgICAgc2V0dXAgPSBudWxsXHJcbiAgICAgICAgfSA9IGRpc3BsYXlQcm9wcztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogJ2Jsb2NrJywgY29udGVudCwgYnV0dG9ucywgY2xvc2FibGUsIHRpdGxlfSk7XHJcbiAgICAgICAgYXdhaXQgY2hyb25vLndhaXQoNTApO1xyXG4gICAgICAgIHRoaXMucmVmcy5jb250YWluZXIuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgICBpZiAoc2V0dXAgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2V0dXAodGhpcy5yZWZzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wYWNpdHk6IDF9KTtcclxuICAgICAgICBhd2FpdCBjaHJvbm8ud2FpdChhbmltYXRpb25UaW1lKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlc29sdmVyO1xyXG4gICAgfVxyXG4gICAgaGlkZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYW5pbWF0aW5nLCB0aGlzLmFuaW1hdGluZyA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW5nID09PSB0cnVlIHx8IHRoaXMucmVzb2x2ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGFjaXR5OiBudWxsfSk7XHJcbiAgICAgICAgYXdhaXQgY2hyb25vLndhaXQoYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogbnVsbH0pO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2UodmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlciA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jbG9zYWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhpZGUoZGlhbG9nLmNhbmNlbChudWxsKSk7XHJcbiAgICB9XHJcbiAgICBzdG9wcGVyID0gKGV2dCkgPT4ge1xyXG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgICAgICBjdXJyZW50RGlhbG9nID0gdGhpcztcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnREaWFsb2cgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7ZGlzcGxheSwgb3BhY2l0eSwgcG9zLCBjb250ZW50LCBidXR0b25zLCB0aXRsZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkxpc3QgPSAoYnV0dG9ucyB8fCBbXSkubWFwKFxyXG4gICAgICAgICAgICAoe3RleHQsIHZhbHVlID0gbnVsbCwgY2FuY2VscyA9IGZhbHNlfSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHZhbHVlRnVuYyA9IChjYW5jZWxzID09PSB0cnVlKSA/IGRpYWxvZy5jYW5jZWwgOiBkaWFsb2cuc3VjY2VzcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldFZhbHVlID0gKGNhbmNlbHMgPT09IHRydWUpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNhbmNlbCh2YWx1ZSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuc3VjY2Vzcyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEJ1dHRvbiB0ZXh0PXt0ZXh0fSBrZXk9e2luZGV4fSBvblRhcD17KCkgPT4gdGhpcy5oaWRlKHJldFZhbHVlKX0gYmxvY2sgZmx1c2ggLz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCB0aXRsZURpc3BsYXkgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGl0bGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGl0bGVEaXNwbGF5ID0gPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctY29yZS10aXRsZVwiPnt0aXRsZX08L2Rpdj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VG91Y2hhYmxlIGNvbXBvbmVudD1cImRpdlwiIG9uVGFwPXt0aGlzLmNsb3NlfSBjbGFzc05hbWU9XCJkaWFsb2ctY29yZS1vdmVybGF5XCIgc3R5bGU9e3tkaXNwbGF5LCBvcGFjaXR5fX0+XHJcbiAgICAgICAgICAgICAgICA8VG91Y2hhYmxlIGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT17YGRpYWxvZy1jb3JlLXdpbmRvdyBkaWFsb2ctY29yZS13aW5kb3ctJHtwb3N9YH0gb25UYXA9e3RoaXMuc3RvcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpdGxlRGlzcGxheX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy1jb3JlLWNvbnRlbnRcIiByZWY9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPEJ1dHRvbiB0ZXh0PVwiZGVtb1wiIGJsb2NrIG9uVGFwPXsoKSA9PiB0aGlzLmhpZGUoJ3Rlc3QnKX0gLz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVJLkZsZXhib3ggY29sQ291bnQ9ezN9PntidXR0b25MaXN0fTwvVUkuRmxleGJveD5cclxuICAgICAgICAgICAgICAgIDwvVG91Y2hhYmxlPlxyXG4gICAgICAgICAgICA8L1RvdWNoYWJsZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XHJcbiIsImltcG9ydCB7ZGVmaW5lQ29tcG9uZW50U3R5bGV9IGZyb20gXCJsaWItc291cmNlL3YyL3N0eWxlLmpzXCI7XHJcblxyXG5kZWZpbmVDb21wb25lbnRTdHlsZShcclxuICAgICdpY29uJyxcclxuICAgICdjb3JlJyxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIklvbmljXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDIsXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5jb25zdCBJY29uID0gKHtuYW1lLCBzdHlsZU5hbWUgPSAnY29yZScsIHNpemV9KSA9PlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtgaWNvbi0ke3N0eWxlTmFtZX0tY29udGVudGB9IHN0eWxlPXt7Zm9udFNpemU6IHNpemV9fT57aW9uaWNbbmFtZV19PC9zcGFuPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImltcG9ydCB7ZGVmaW5lQ29tcG9uZW50U3R5bGUsIFRoZW1lfSBmcm9tIFwibGliLXNvdXJjZS92Mi9zdHlsZS5qc1wiO1xyXG5pbXBvcnQgUmlwcGxlIGZyb20gXCJsaWItc291cmNlL3VpdjIvcmlwcGxlLmpzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gJ2xpYi1zb3VyY2UvdWl2Mi9pY29uLmpzJztcclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ2ljb24tYnV0dG9uJyxcclxuICAgICdjb3JlJyxcclxuICAgIHtcclxuICAgICAgICBcIndyYXBwZXJcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgbWFyZ2luOiA0LFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgIHpJbmRleDogXCIrMFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAoKSA9PiBUaGVtZS52YXJpYWJsZS5jb3JlLmJ1dHRvbi50ZXh0Q29sb3IsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5jb25zdCBJY29uQnV0dG9uID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHNpemUgPSA0MixcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGljb25TaXplLFxyXG4gICAgICAgIHN0eWxlTmFtZSA9ICdjb3JlJ1xyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXJOYW1lID0gYGljb24tYnV0dG9uLSR7c3R5bGVOYW1lfS13cmFwcGVyYDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxVSS5Ub3VjaGFibGUgY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPXt3cmFwcGVyTmFtZX0gc3R5bGU9e3t3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplfX0+XHJcbiAgICAgICAgICAgIDxSaXBwbGUgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29yZS10ZXh0LXdyYXBwZXJcIiBzdHlsZT17e2hlaWdodDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb3JlLXRleHRcIiBzdHlsZT17e3BhZGRpbmc6IDB9fT48SWNvbiBuYW1lPXtuYW1lfSBzaXplPXtpY29uU2l6ZX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9VSS5Ub3VjaGFibGU+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbkJ1dHRvbjtcclxuIiwiY29uc3QgSW1hZ2UgPSAoe3NvdXJjZSwgd2lkdGggPSAnMTAwJScsIGhlaWdodCA9IG51bGwsIGltYWdlU2l6ZSA9ICdmaXQnLCBjb2xvciwgYmxvY2sgPSBmYWxzZX0pID0+IHtcclxuICAgIGlmIChoZWlnaHQgPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZWVkIHRvIGdpdmUgaW1hZ2UgaGVpZ2h0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrID09PSB0cnVlID8gXCJibG9ja1wiIDogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke3NvdXJjZX1cIilgLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICAgIHN3aXRjaCAoaW1hZ2VTaXplKSB7XHJcbiAgICAgICAgY2FzZSAnZml0JzpcclxuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdjbGlwJzpcclxuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZFNpemUgPSBpbWFnZVNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e3N0eWxlfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iLCJjb25zdCBPcHRpb24gPSAoKSA9PiB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJPcHRpb24gaXMgaW50ZW5kZWQgYXMgYSBmaWxsZXIgZWxlbWVudCBhbmQgc2hvdWxkIG5vdCBiZSByZW5kZXJlZCBvbiBpdHMgb3duXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9uO1xyXG4iLCJpbXBvcnQge2RlZmluZUNvbXBvbmVudFN0eWxlfSBmcm9tIFwibGliLXNvdXJjZS92Mi9zdHlsZVwiO1xyXG5pbXBvcnQgQ2VudGVyQ29udGVudCBmcm9tIFwibGliLXNvdXJjZS91aXYyL0NlbnRlckNvbnRlbnRcIjtcclxuaW1wb3J0IFRvdWNoYWJsZSBmcm9tIFwibGliLXNvdXJjZS91aXYyL1RvdWNoYWJsZVwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwibGliLXNvdXJjZS91aXYyL0ljb25cIjtcclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ3JhZGlvJyxcclxuICAgICdjb3JlJyxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5kZWZpbmVDb21wb25lbnRTdHlsZShcclxuICAgIFwicmFkaW8taXRlbVwiLFxyXG4gICAgXCJjb3JlXCIsXHJcbiAgICB7XHJcbiAgICAgICAgXCJkZWZhdWx0LWl0ZW1cIjoge1xyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAzMCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgNTAwbXMgbGluZWFyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCIucmFkaW8taXRlbS1jb250YWluZXI6YWN0aXZlID4gZGVmYXVsdC1pdGVtXCI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjEpJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImljb25cIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuY29uc3QgUmFkaW9JdGVtID0gKHtjaGVja2VkLCBpY29uQ29sb3IsIGNoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgaWNvbk5hbWUgPSBgaW9uLWFuZHJvaWQtcmFkaW8tYnV0dG9uLSR7Y2hlY2tlZCA9PT0gdHJ1ZSA/ICdvbicgOiAnb2ZmJ31gO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvLWl0ZW0tY29yZS1kZWZhdWx0LWl0ZW1cIiBkYXRhLWNoZWNrZWQ9e2NoZWNrZWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvLWl0ZW0tY29yZS1pY29uXCIgZGF0YS1jaGVja2VkPXtjaGVja2VkfT5cclxuICAgICAgICAgICAgICAgIDxDZW50ZXJDb250ZW50IGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBzaXplPXsxOH0gbmFtZT17aWNvbk5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NlbnRlckNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5jbGFzcyBSYWRpbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSB0aGlzLnByb3BzLnNlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpbmRleCwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBsYXlvdXQgPSAnZGl2JyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCxcclxuICAgICAgICAgICAgb25DaGFuZ2UgPSAoKSA9PiB7fSxcclxuICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBDb250YWluZXIgPSBsYXlvdXQ7XHJcblxyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgICAgICAuLi5sYXlvdXRQcm9wc1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBJdGVtO1xyXG5cclxuICAgICAgICBpZiAoQ29udGFpbmVyID09PSAnZGl2Jykge1xyXG4gICAgICAgICAgICBJdGVtID0gUmFkaW9JdGVtO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEl0ZW0gPSBDb250YWluZXIuUmFkaW9JdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcclxuICAgICAgICBsYXlvdXRQcm9wcyA9IE9iamVjdC5lbnRyaWVzKGxheW91dFByb3BzKS5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChuZXdQcm9wcywgW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoXCJsYXlvdXQtXCIpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHNba2V5LnNsaWNlKDcpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Byb3BzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7fVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvLWNvcmUtdGl0bGVcIj57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHsuLi5sYXlvdXRQcm9wc30+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKChjaGlsZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNoaWxkLnByb3BzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb3VjaGFibGUgY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPVwicmFkaW8taXRlbS1jb250YWluZXJcIiBrZXk9e2luZGV4fSBvblRhcD17KCkgPT4gdGhpcy5zZWxlY3QoaW5kZXgsIHZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtIGNoZWNrZWQ9e3NlbGVjdGVkSW5kZXggPT09IGluZGV4fSB7Li4uY2hpbGQucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG91Y2hhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYWRpbztcclxuIiwiaW1wb3J0IHtkZWZpbmVDb21wb25lbnRTdHlsZX0gZnJvbSBcImxpYi1zb3VyY2UvdjIvc3R5bGUuanNcIjtcclxuXHJcbmNvbnN0IGFuaW1hdGlvbkR1cmF0aW9uID0gMzAwO1xyXG5kZWZpbmVDb21wb25lbnRTdHlsZShcclxuICAgICdyaXBwbGUnLFxyXG4gICAgJ2NvcmUnLFxyXG4gICAge1xyXG4gICAgICAgIFwid3JhcHBlclwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgIHpJbmRleDogJys1J1xyXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZG90XCI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYHJpcHBsZS1jb3JlLWFuaW1hdGlvbi1yaXBwbGUtZWZmZWN0ICR7YW5pbWF0aW9uRHVyYXRpb259bXMgbGluZWFyYCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwJSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZG90OmJlZm9yZVwiOiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcxMDAlJyxcclxuICAgICAgICAgICAgY29udGVudDogYFwiXCJgLFxyXG4gICAgICAgICAgICBmbG9hdDogJ2xlZnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiFyaXBwbGUtZWZmZWN0XCI6IHtcclxuICAgICAgICAgICAgXCIwJVwiOiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCwgMCknLFxyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIjcwJVwiOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMSknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiMTAwJVwiOiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMSknLFxyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6ICcxNTAlJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wKSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmNsYXNzIFJpcHBsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge2xpc3Q6IFtdfTtcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaCA9IChldnQpID0+IHtcclxuICAgICAgICBjb25zdCB7cG9zaXRpb259ID0gZXZ0LnRvdWNoO1xyXG4gICAgICAgIGNvbnN0IHt0b3AsIGxlZnR9ID0gdGhpcy5yZWZzLndyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyUmlwcGxlKHBvc2l0aW9uLnggLSBsZWZ0LCBwb3NpdGlvbi55IC0gdG9wKTtcclxuICAgIH1cclxuICAgIHRyaWdnZXJSaXBwbGUgPSAoeCA9IG51bGwsIHkpID0+IHtcclxuICAgICAgICBsZXQge2xpc3R9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3Qge3dpZHRoLCBoZWlnaHR9ID0gdGhpcy5yZWZzLndyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIHggPSB3aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHkgPSBoZWlnaHQgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hyb25vLnRyaWdnZXIoXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogdGhpcy5zdGF0ZS5saXN0LnNsaWNlKDEpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGlzdCA9IFsuLi5saXN0LCB7eCwgeSwgaWQ6IERhdGUubm93KCl9XTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtsaXN0fSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxVSS5Ub3VjaGFibGUgY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPVwicmlwcGxlLWNvcmUtd3JhcHBlclwiIG9uVGFwPXt0aGlzLnRvdWNofSByZWY9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7bGlzdC5tYXAoKHtpZCwgeCwgeX0pID0+IDxkaXYga2V5PXtpZH0gc3R5bGU9e3t0b3A6IHksIGxlZnQ6IHh9fSBjbGFzc05hbWU9XCJyaXBwbGUtY29yZS1kb3RcIiAvPil9XHJcbiAgICAgICAgICAgIDwvVUkuVG91Y2hhYmxlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJpcHBsZTtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gXCJsaWItc291cmNlL3VpdjIvSW1hZ2VcIjtcclxuaW1wb3J0IFNwaW5uZXJEYXRhVVJMIGZyb20gXCJsaWItc291cmNlL2RhdGEtdXJpL2xvYWQtc3Bpbm5lci5naWYuc291cmNlXCI7XHJcblxyXG5jb25zdCBTcGlubmVyID0gKHtzaXplfSkgPT4gPEltYWdlIHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHNvdXJjZT17U3Bpbm5lckRhdGFVUkx9IC8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjtcclxuIiwiaW1wb3J0IHtkZWZpbmVDb21wb25lbnRTdHlsZX0gZnJvbSBcImxpYi1zb3VyY2UvdjIvc3R5bGVcIjtcclxuXHJcbmNvbnN0IGFuaW1hdGlvblRpbWUgPSAxMDA7XHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ3RvZ2dsZScsXHJcbiAgICAnY29yZScsXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250YWluZXJcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgNTAwbXMgbGluZWFyJyxcclxuICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY29udGFpbmVyOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNzUpJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRvZ2dsZS1jb250YWluZXJcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgcmlnaHQ6IDEzLFxyXG4gICAgICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogOCxcclxuICAgICAgICAgICAgZm9udFNpemU6IDExLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE1LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyYXknLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjJweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidG9nZ2xlLWNvbnRhaW5lcltkYXRhLW9uPSd0cnVlJ11cIjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYmVkMGJkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0b2dnbGVcIjoge1xyXG4gICAgICAgICAgICBXZWJraXRUcmFuc2l0aW9uOiBgYmFja2dyb3VuZC1jb2xvciAke2FuaW1hdGlvblRpbWV9bXMgbGluZWFyLCAtd2Via2l0LXRyYW5zZm9ybSAke2FuaW1hdGlvblRpbWV9bXMgbGluZWFyYCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYGJhY2tncm91bmQtY29sb3IgJHthbmltYXRpb25UaW1lfW1zIGxpbmVhciwgdHJhbnNmb3JtICR7YW5pbWF0aW9uVGltZX1tcyBsaW5lYXJgLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgbGVmdDogLTExLFxyXG4gICAgICAgICAgICB0b3A6IC03LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDIyLFxyXG4gICAgICAgICAgICB3aWR0aDogMjIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTUsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGdyYXknLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0b2dnbGVbZGF0YS1vbj0nZmFsc2UnXVwiOiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidG9nZ2xlW2RhdGEtb249J3RydWUnXVwiOiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMzBweCknLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjRiMzI0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMsXHJcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogNzAsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdWJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmNvbnN0IFRvZ2dsZSA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBvbiA9IGZhbHNlLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHN1YlRpdGxlID0gbnVsbCxcclxuICAgICAgICBvbkNoYW5nZSA9ICgpID0+IGNvbnNvbGUud2FybihcIk5vIG9uQ2hhbmdlIGdpdmVuIHRvIGNoZWNrYm94XCIpXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBsZXQgY29udGVudCA9IGxhYmVsO1xyXG4gICAgbGV0IHRvZ2dsZVN0eWxlO1xyXG5cclxuICAgIGlmIChzdWJUaXRsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWNvcmUtc3VidGl0bGVcIj57c3ViVGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VUkuVG91Y2hhYmxlIGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cInRvZ2dsZS1jb3JlLWNvbnRhaW5lclwiIG9uVGFwPXsoKSA9PiBvbkNoYW5nZSghb24pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtY29yZS1sYWJlbFwiPntjb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1jb3JlLXRvZ2dsZS1jb250YWluZXJcIiBkYXRhLW9uPXtvbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1jb3JlLXRvZ2dsZVwiIGRhdGEtb249e29ufSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qPFJpcHBsZSAvPiovfVxyXG4gICAgICAgIDwvVUkuVG91Y2hhYmxlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcclxuIiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xyXG5jb25zdCB7c3FydH0gPSBNYXRoO1xyXG5cclxubGV0IFRvdWNoYWJsZTtcclxuXHJcblRvdWNoYWJsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHRvdWNoU3RhcnQoZXZ0KSB7XHJcbiAgICAgICAgY29uc3Qge29uVG91Y2hTdGFydH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IFt0b3VjaF0gPSBldnQuY2hhbmdlZFRvdWNoZXM7XHJcblxyXG4gICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmNsYXNzTGlzdC5hZGQoXCJjb3ItdG91Y2gtYWN0aXZlXCIpO1xyXG4gICAgICAgIGlmIChvblRvdWNoU3RhcnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQoZXZ0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5mbyA9IHtcclxuICAgICAgICAgICAgaWQ6IHRvdWNoLmlkZW50aWZpZXIsXHJcbiAgICAgICAgICAgIHg6IHRvdWNoLnBhZ2VYLFxyXG4gICAgICAgICAgICB5OiB0b3VjaC5wYWdlWVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdG91Y2hNb3ZlKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IHtvblRvdWNoTW92ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChvblRvdWNoTW92ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlKGV2dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldnQuY2hhbmdlZFRvdWNoZXM6OmZvckVhY2godG91Y2ggPT4ge1xyXG4gICAgICAgICAgICBpZiAodG91Y2guaWRlbnRpZmllciAhPT0gdGhpcy5pbmZvLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzcXJ0KCh0b3VjaC5wYWdlWCAtIHRoaXMuaW5mby54KSAqKiAyICsgKHRvdWNoLnBhZ2VZIC0gdGhpcy5pbmZvLnkpICoqIDIpID4gMjUpIHtcclxuICAgICAgICAgICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmNsYXNzTGlzdC5yZW1vdmUoXCJjb3ItdG91Y2gtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG91Y2hFbmQoZXZ0KSB7XHJcbiAgICAgICAgY29uc3Qge29uVG91Y2hFbmR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAob25Ub3VjaEVuZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9uVG91Y2hFbmQoZXZ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZ0LmNoYW5nZWRUb3VjaGVzOjpmb3JFYWNoKHRvdWNoID0+IHtcclxuICAgICAgICAgICAgaWYgKHRvdWNoLmlkZW50aWZpZXIgIT09IHRoaXMuaW5mby5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5jbGFzc0xpc3QucmVtb3ZlKFwiY29yLXRvdWNoLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLnByb3BzLm9uVG91Y2hFbmQoZXZ0KTtcclxuICAgIH0sXHJcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtub2RlfSA9IHRoaXMucmVmcztcclxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICd0YXAnLFxyXG4gICAgICAgICAgICBldnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge29uVGFwfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob25UYXAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXM6Om9uVGFwKGV2dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyA6OnRoaXMucHJvcHMub25UYXAoZXZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnaG9sZCcsXHJcbiAgICAgICAgICAgIGV2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7b25Ib2xkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob25Ib2xkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzOjpvbkhvbGQoZXZ0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIDo6dGhpcy5wcm9wcy5vbkhvbGQoZXZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtjb21wb25lbnQgPSBudWxsLCBjaGlsZHJlbiwgb25UYXAsIG9uSG9sZCwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50UHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzLFxyXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMudG91Y2hTdGFydCxcclxuICAgICAgICAgICAgb25Ub3VjaE1vdmU6IHRoaXMudG91Y2hNb3ZlLFxyXG4gICAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLnRvdWNoRW5kLFxyXG4gICAgICAgICAgICBvblRvdWNoQ2FuY2VsOiB0aGlzLnRvdWNoRW5kXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKENvbXBvbmVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHBhc3MgYSBjb21wb25lbnQgaW50byBUb3VjaGFibGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPENvbXBvbmVudCByZWY9XCJub2RlXCIgey4uLmNvbXBvbmVudFByb3BzfT57Y2hpbGRyZW59PC9Db21wb25lbnQ+O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvdWNoYWJsZTtcclxuIiwiY29uc3QgY3NzTm9NZWFzdXJlbWVudCA9IG5ldyBTZXQoW1xyXG4gICAgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiLFxyXG4gICAgXCJib3hGbGV4XCIsXHJcbiAgICBcImJveEZsZXhHcm91cFwiLFxyXG4gICAgXCJib3hPcmRpbmFsR3JvdXBcIixcclxuICAgIFwiY29sdW1uQ291bnRcIixcclxuICAgIFwiZmlsbE9wYWNpdHlcIixcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJmbGV4R3Jvd1wiLFxyXG4gICAgXCJmbGV4UG9zaXRpdmVcIixcclxuICAgIFwiZmxleFNocmlua1wiLFxyXG4gICAgXCJmbGV4TmVnYXRpdmVcIixcclxuICAgIFwiZmxleE9yZGVyXCIsXHJcbiAgICBcImZvbnRXZWlnaHRcIixcclxuICAgIFwibGluZUNsYW1wXCIsXHJcbiAgICBcImxpbmVIZWlnaHRcIixcclxuICAgIFwib3BhY2l0eVwiLFxyXG4gICAgXCJvcmRlclwiLFxyXG4gICAgXCJvcnBoYW5zXCIsXHJcbiAgICBcInN0b3BPcGFjaXR5XCIsXHJcbiAgICBcInN0cm9rZURhc2hvZmZzZXRcIixcclxuICAgIFwic3Ryb2tlT3BhY2l0eVwiLFxyXG4gICAgXCJzdHJva2VXaWR0aFwiLFxyXG4gICAgXCJ0YWJTaXplXCIsXHJcbiAgICBcIndpZG93c1wiLFxyXG4gICAgXCJ6SW5kZXhcIixcclxuICAgIFwiem9vbVwiXHJcbl0pO1xyXG5jb25zdCBjc3NQcmVmaXhOYW1lcyA9IG5ldyBTZXQoW1xyXG4gICAgJ3RyYW5zZm9ybScsXHJcbiAgICAnYm94LXNoYWRvdycsXHJcbiAgICAndHJhbnNpdGlvbicsXHJcbiAgICAnYW5pbWF0aW9uJyxcclxuICAgICdhbmltYXRpb25EZWxheScsXHJcbiAgICAnYW5pbWF0aW9uRGlyZWN0aW9uJyxcclxuICAgICdhbmltYXRpb25EdXJhdGlvbicsXHJcbiAgICAnYW5pbWF0aW9uRmlsbE1vZGUnLFxyXG4gICAgJ2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50JyxcclxuICAgICdhbmltYXRpb25OYW1lJyxcclxuICAgICdhbmltYXRpb25QbGF5U3RhdGUnLFxyXG4gICAgJ2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uJ1xyXG5dKTtcclxuY29uc3QgY3NzUHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1tcy0nLCAnLW8tJywgJyddO1xyXG5cclxuY29uc3QgZ2V0Q1NTVmFsdWUgPSAocHJvcCwgdmFsdWUpID0+IHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubWFwKGdldENTU1ZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGNzc05vTWVhc3VyZW1lbnQuaGFzKHByb3ApID09PSBmYWxzZSkge1xyXG4gICAgICAgIHZhbHVlICs9IFwicHhcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBbdmFsdWVdO1xyXG59O1xyXG5jb25zdCBwcm9jZXNzU2VsZWN0b3IgPSAoY29tcG9uZW50TmFtZSwgc3R5bGVOYW1lLCBzZWxlY3RvcikgPT4ge1xyXG4gICAgY29uc3QgcGFydHMgPSBzZWxlY3Rvci5zcGxpdCgvXFxzKy8pO1xyXG4gICAgY29uc3QgcmVhbFBhcnRzID0gcGFydHMubWFwKHBhcnQgPT4ge1xyXG4gICAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoXCI6YWN0aXZlXCIsIFwiLmNvci10b3VjaC1hY3RpdmVcIik7XHJcbiAgICAgICAgcmV0dXJuIHBhcnQuc3BsaXQoJy8nKS5tYXAocGFydCA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBwYXJ0LmNoYXJBdCgwKSA9PT0gXCIkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnQuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIC9eW2Etel0vaS50ZXN0KHBhcnQpID09PSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgLiR7Y29tcG9uZW50TmFtZX0tJHtzdHlsZU5hbWV9LSR7cGFydH1gO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmpvaW4oJy4nKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlYWxQYXJ0cy5qb2luKCcgJyk7XHJcbn07XHJcbmNvbnN0IHByb2Nlc3NEZWYgPSAoY3NzTGluZXMsIHNlbGVjdG9yLCBkZWZzKSA9PiB7XHJcbiAgICBjc3NMaW5lcyA9IFsuLi5jc3NMaW5lcywgYCR7c2VsZWN0b3J9IHtgXTtcclxuICAgIGZvciAoY29uc3QgW2Nzc1Byb3AsIGNzc1ZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkZWZzKSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0Q1NTVmFsdWUoY3NzUHJvcCwgY3NzVmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHByb3AgPSBjc3NQcm9wLnJlcGxhY2UoL1tBLVpdL2csIGxldHRlciA9PiAnLScgKyBsZXR0ZXIudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgaWYgKGNzc1ByZWZpeE5hbWVzLmhhcyhjc3NQcm9wKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjc3NMaW5lcyA9IFtcclxuICAgICAgICAgICAgICAgIC4uLmNzc0xpbmVzLFxyXG4gICAgICAgICAgICAgICAgLi4uY3NzUHJlZml4ZXMubWFwKHByZWZpeCA9PiBgXFx0JHtwcmVmaXh9JHtwcm9wfTogJHt2YWx1ZVswXX07YClcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjc3NMaW5lcyA9IFtcclxuICAgICAgICAgICAgICAgIC4uLmNzc0xpbmVzLFxyXG4gICAgICAgICAgICAgICAgLi4udmFsdWUubWFwKHZhbHVlID0+IGBcXHQke3Byb3B9OiAke3ZhbHVlfTtgKVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNzc0xpbmVzID0gWy4uLmNzc0xpbmVzLCBcIn1cIl07XHJcbiAgICByZXR1cm4gY3NzTGluZXM7XHJcbiAgICAvLyBjc3NMaW5lcy5wdXNoKFwifVwiKTtcclxufTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudFN0eWxlcyA9IHt9O1xyXG5jb25zdCBjcmVhdGVQcm9wID0gKG9iamVjdCwgcHJvcE5hbWUsIGRlZmF1bHRWYWx1ZSkgPT4ge1xyXG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgb2JqZWN0W3Byb3BOYW1lXSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3RbcHJvcE5hbWVdO1xyXG59O1xyXG5jb25zdCBkZWZpbmVDb21wb25lbnRTdHlsZSA9IChjb21wb25lbnQsIHN0eWxlTmFtZSwgc3R5bGVzKSA9PlxyXG4gICAgY3JlYXRlUHJvcChcclxuICAgICAgICBjcmVhdGVQcm9wKGNvbXBvbmVudFN0eWxlcywgY29tcG9uZW50LCB7fSksXHJcbiAgICAgICAgc3R5bGVOYW1lLFxyXG4gICAgICAgIHN0eWxlc1xyXG4gICAgKTtcclxuXHJcbmNvbnN0IGNyZWF0ZVN0eWxlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKTtcclxuXHJcbiAgICAvLyAgSXRlcmF0ZSBvdmVyIHRoZSBjb21wb25lbnRzIHRoYXQgaGF2ZSBzdHlsZXMgZGVmaW5lZFxyXG4gICAgZm9yIChjb25zdCBbY29tcG9uZW50TmFtZSwgc3R5bGVzXSBvZiBPYmplY3QuZW50cmllcyhjb21wb25lbnRTdHlsZXMpKSB7XHJcbiAgICAgICAgLy8gIEl0ZXJhdGUgb3ZlciB0aGUgdmFyaW91cyBuYW1lZCBzdHlsZXMgZm9yIHRoZSBnaXZlbiBjb21wb25lbnRcclxuICAgICAgICBmb3IgKGNvbnN0IFtzdHlsZU5hbWUsIHN0eWxlRGVmc10gb2YgT2JqZWN0LmVudHJpZXMoc3R5bGVzKSkge1xyXG4gICAgICAgICAgICBsZXQgY3NzTGluZXMgPSBbXTtcclxuICAgICAgICAgICAgLy8gIEdyYWIgYWxsIHRoZSBpbmRpdmlkdWFsIGdyb3VwcyBvZiBzdHlsZXMgZGVmaW5lZCBpbiB0aGUgbmFtZWQgc3R5bGVcclxuICAgICAgICAgICAgZm9yIChjb25zdCBbZGVzY3JpcHRvciwgZGVmc10gb2YgT2JqZWN0LmVudHJpZXMoc3R5bGVEZWZzKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3Iuc3RhcnRzV2l0aChcIiFcIikgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgUmVwZWF0IGFuIGV4dHJhIHRpbWUgd2l0aCBwcmVmaXhlZCBrZXlmcmFtZXMgYmVjYXVzZSBpb3MgPCA5IGlzIHByZXR0eSBhd2Z1bFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0xpbmVzLnB1c2goYEAtd2Via2l0LWtleWZyYW1lcyAke2NvbXBvbmVudE5hbWV9LSR7c3R5bGVOYW1lfS1hbmltYXRpb24tJHtkZXNjcmlwdG9yLnNsaWNlKDEpfSB7YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIGRlZl0gb2YgT2JqZWN0LmVudHJpZXMoZGVmcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzTGluZXMgPSBwcm9jZXNzRGVmKGNzc0xpbmVzLCBzZWxlY3RvciwgZGVmKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzTGluZXMucHVzaChcIn1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICBub3JtYWwgQGtleWZyYW1lcyBjc3NcclxuICAgICAgICAgICAgICAgICAgICBjc3NMaW5lcy5wdXNoKGBAa2V5ZnJhbWVzICR7Y29tcG9uZW50TmFtZX0tJHtzdHlsZU5hbWV9LWFuaW1hdGlvbi0ke2Rlc2NyaXB0b3Iuc2xpY2UoMSl9IHtgKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgZGVmXSBvZiBPYmplY3QuZW50cmllcyhkZWZzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NMaW5lcyA9IHByb2Nlc3NEZWYoY3NzTGluZXMsIHNlbGVjdG9yLCBkZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjc3NMaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBwcm9jZXNzU2VsZWN0b3IoY29tcG9uZW50TmFtZSwgc3R5bGVOYW1lLCBkZXNjcmlwdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBjc3NMaW5lcyA9IHByb2Nlc3NEZWYoY3NzTGluZXMsIHNlbGVjdG9yLCBkZWZzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVUYWcuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVRhZy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgYCR7Y29tcG9uZW50TmFtZX0vJHtzdHlsZU5hbWV9YCk7XHJcbiAgICAgICAgICAgIHN0eWxlVGFnLmlubmVySFRNTCA9IGNzc0xpbmVzLmpvaW4oJ1xcbicpO1xyXG4gICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlVGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5sZXQgdGhlbWVWYWx1ZXM7XHJcbmNvbnN0IFRoZW1lID0ge1xyXG4gICAgZGVmaW5lKHRoZW1lKSB7XHJcbiAgICAgICAgdGhlbWVWYWx1ZXMgPSB0aGVtZTtcclxuICAgIH0sXHJcbiAgICBnZXQgdmFyaWFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoZW1lVmFsdWVzO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGVmaW5lQ29tcG9uZW50U3R5bGUsXHJcbiAgICBUaGVtZSxcclxuICAgIF9fc2V0dXA6IGNyZWF0ZVN0eWxlc1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2VudHJpZXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zZXRcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGFzc2lnbiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX09iamVjdCRhc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRjcmVhdGUgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGVcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX09iamVjdCRzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBfT2JqZWN0JGNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX09iamVjdCRzZXRQcm90b3R5cGVPZiA/IF9PYmplY3Qkc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9XG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpcztcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiBtb2R1bGUuZXhwb3J0cywgX19lc01vZHVsZTogdHJ1ZSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfU3ltYm9sID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2xcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX09iamVjdCRjcmVhdGUgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGVcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX09iamVjdCRzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX1Byb21pc2UgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2VcIilbXCJkZWZhdWx0XCJdO1xuXG4hKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBfU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBfU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgZ2VuZXJhdG9yID0gX09iamVjdCRjcmVhdGUoKG91dGVyRm4gfHwgR2VuZXJhdG9yKS5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9IEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvciA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgaWYgKF9PYmplY3Qkc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIF9PYmplY3Qkc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IF9PYmplY3QkY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgdmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50YCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC4gU29tZSBtYXkgY29uc2lkZXIgdGhlIG5hbWUgb2YgdGhpcyBtZXRob2QgdG9vXG4gIC8vIGN1dGVzeSwgYnV0IHRoZXkgYXJlIGN1cm11ZGdlb25zLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiBuZXcgQXdhaXRBcmd1bWVudChhcmcpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEF3YWl0QXJndW1lbnQoYXJnKSB7XG4gICAgdGhpcy5hcmcgPSBhcmc7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gX1Byb21pc2UucmVzb2x2ZSh2YWx1ZS5hcmcpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKGludm9rZSk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IF9Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIgfHwgbWV0aG9kID09PSBcInRocm93XCIgJiYgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBBIHJldHVybiBvciB0aHJvdyAod2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIHRocm93XG4gICAgICAgICAgICAvLyBtZXRob2QpIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgICB2YXIgcmV0dXJuTWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl07XG4gICAgICAgICAgICBpZiAocmV0dXJuTWV0aG9kKSB7XG4gICAgICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChyZXR1cm5NZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBhcmcpO1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXR1cm4gbWV0aG9kIHRocmV3IGFuIGV4Y2VwdGlvbiwgbGV0IHRoYXRcbiAgICAgICAgICAgICAgICAvLyBleGNlcHRpb24gcHJldmFpbCBvdmVyIHRoZSBvcmlnaW5hbCByZXR1cm4gb3IgdGhyb3cuXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgICAvLyBDb250aW51ZSB3aXRoIHRoZSBvdXRlciByZXR1cm4sIG5vdyB0aGF0IHRoZSBkZWxlZ2F0ZVxuICAgICAgICAgICAgICAvLyBpdGVyYXRvciBoYXMgYmVlbiB0ZXJtaW5hdGVkLlxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIExpa2UgcmV0dXJuaW5nIGdlbmVyYXRvci50aHJvdyh1bmNhdWdodCksIGJ1dCB3aXRob3V0IHRoZVxuICAgICAgICAgICAgLy8gb3ZlcmhlYWQgb2YgYW4gZXh0cmEgZnVuY3Rpb24gY2FsbC5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBnZW5lcmF0b3IgcmFuIGFuZCBoYW5kbGVkIGl0cyBvd24gZXhjZXB0aW9ucyBzb1xuICAgICAgICAgIC8vIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGUgbWV0aG9kIHdhcywgd2UgY29udGludWUgYXMgaWYgaXQgaXNcbiAgICAgICAgICAvLyBcIm5leHRcIiB3aXRoIGFuIHVuZGVmaW5lZCBhcmcuXG4gICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCkge1xuICAgICAgICAgICAgY29udGV4dC5zZW50ID0gYXJnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LnNlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IEdlblN0YXRlQ29tcGxldGVkIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmRlbGVnYXRlICYmIG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsXG4gICAgICAgICAgICBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIHRoaXMuc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiYgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmICh0eXBlID09PSBcImJyZWFrXCIgfHwgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJiBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJiBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fCByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaChmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuLy8gb2JqZWN0LCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHJlbGlhYmxlIHRlY2huaXF1ZSB0aGF0IGRvZXMgbm90XG4vLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxudHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB1bmRlZmluZWQpOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmFzc2lnbjsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkLmNyZWF0ZShQLCBEKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhULCBEKXtcbiAgcmV0dXJuICQuc2V0RGVzY3MoVCwgRCk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmVudHJpZXM7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy8kLmNvcmUnKS5Qcm9taXNlOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zZXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvJC5jb3JlJykuU2V0OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLlN5bWJvbDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSAoTyA9IE9iamVjdChpdCkpW1RBR10pID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGhpZGUgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBzdHJpY3ROZXcgICAgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpXG4gICwgZGVmaW5lZCAgICAgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKVxuICAsIGZvck9mICAgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsICRpdGVyRGVmaW5lICA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSUQgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpKCdpZCcpXG4gICwgJGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgaXNPYmplY3QgICAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgc2V0U3BlY2llcyAgID0gcmVxdWlyZSgnLi8kLnNldC1zcGVjaWVzJylcbiAgLCBERVNDUklQVE9SUyAgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgaXNPYmplY3RcbiAgLCBTSVpFICAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSdcbiAgLCBpZCAgICAgICAgICAgPSAwO1xuXG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoISRoYXMoaXQsIElEKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IGlkIHRvIGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIGlkXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG9iamVjdCBpZFxuICAgIGhpZGUoaXQsIElELCArK2lkKTtcbiAgLy8gcmV0dXJuIG9iamVjdCBpZCB3aXRoIHByZWZpeFxuICB9IHJldHVybiAnTycgKyBpdFtJRF07XG59O1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpe1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcbiAgaWYoaW5kZXggIT09ICdGJylyZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIHN0cmljdE5ldyh0aGF0LCBDLCBOQU1FKTtcbiAgICAgIHRoYXQuX2kgPSAkLmNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKSQuc2V0RGVzYyhDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcbiAgICAgICwgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYoZW50cnkpe1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYoIXRoYXQuX2YpdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYoaW5kZXggIT09ICdGJyl0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICAgICB0aGlzLl90ID0gaXRlcmF0ZWQ7ICAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgLCBraW5kICA9IHRoYXQuX2tcbiAgICAgICAgLCBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpe1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBmb3JPZiAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgY2xhc3NvZiA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvck9mKHRoaXMsIGZhbHNlLCBhcnIucHVzaCwgYXJyKTtcbiAgICByZXR1cm4gYXJyO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBmYWlscyAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgcmVkZWZpbmVBbGwgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJylcbiAgLCBmb3JPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIHN0cmljdE5ldyAgICAgID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIGlmKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgc3RyaWN0TmV3KHRhcmdldCwgQywgTkFNRSk7XG4gICAgICB0YXJnZXQuX2MgPSBuZXcgQmFzZTtcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgICQuZWFjaC5jYWxsKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcycuc3BsaXQoJywnKSxmdW5jdGlvbihLRVkpe1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmKEtFWSBpbiBwcm90byAmJiAhKElTX1dFQUsgJiYgS0VZID09ICdjbGVhcicpKWhpZGUoQy5wcm90b3R5cGUsIEtFWSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGlmKCFJU19BRERFUiAmJiBJU19XRUFLICYmICFpc09iamVjdChhKSlyZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCdzaXplJyBpbiBwcm90bykkLnNldERlc2MoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBrZXlzICAgICAgID0gJC5nZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gJC5pc0VudW1cbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlrZXlzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQpe1xuICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gIH1cbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCBnZXROYW1lcyAgPSByZXF1aXJlKCcuLyQnKS5nZXROYW1lc1xuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdldE5hbWVzKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIGlmKHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nKXJldHVybiBnZXRXaW5kb3dOYW1lcyhpdCk7XG4gIHJldHVybiBnZXROYW1lcyh0b0lPYmplY3QoaXQpKTtcbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvICAgICAgID0gcmVxdWlyZSgnLi8kJykuZ2V0UHJvdG9cbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsIG1ldGhvZHMsIGtleTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkbmF0aXZlKXtcbiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90bygkZGVmYXVsdC5jYWxsKG5ldyBCYXNlKSk7XG4gICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgIC8vIEZGIGZpeFxuICAgIGlmKCFMSUJSQVJZICYmIGhhcyhwcm90bywgRkZfSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gICAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gICAgfVxuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKVxuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwidmFyICRPYmplY3QgPSBPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcbn07IiwidmFyICQgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gJC5nZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vJC50YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi8kLmNvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxudmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgdmFyIHBhcmVudCwgZG9tYWluLCBmbjtcbiAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpe1xuICAgIHByb2Nlc3MuZG9tYWluID0gbnVsbDtcbiAgICBwYXJlbnQuZXhpdCgpO1xuICB9XG4gIHdoaWxlKGhlYWQpe1xuICAgIGRvbWFpbiA9IGhlYWQuZG9tYWluO1xuICAgIGZuICAgICA9IGhlYWQuZm47XG4gICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgIGZuKCk7IC8vIDwtIGN1cnJlbnRseSB3ZSB1c2UgaXQgb25seSBmb3IgUHJvbWlzZSAtIHRyeSAvIGNhdGNoIG5vdCByZXF1aXJlZFxuICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xufTtcblxuLy8gTm9kZS5qc1xuaWYoaXNOb2RlKXtcbiAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgfTtcbi8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxufSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgdmFyIHRvZ2dsZSA9IDFcbiAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gLXRvZ2dsZTtcbiAgfTtcbi8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG59IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZmx1c2gpO1xuICB9O1xuLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbi8vIC0gc2V0SW1tZWRpYXRlXG4vLyAtIE1lc3NhZ2VDaGFubmVsXG4vLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4vLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuLy8gLSBzZXRUaW1lb3V0XG59IGVsc2Uge1xuICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhc2FwKGZuKXtcbiAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWQsIGRvbWFpbjogaXNOb2RlICYmIHByb2Nlc3MuZG9tYWlufTtcbiAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICBpZighaGVhZCl7XG4gICAgaGVhZCA9IHRhc2s7XG4gICAgbm90aWZ5KCk7XG4gIH0gbGFzdCA9IHRhc2s7XG59OyIsIi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0Jyk7XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgYSA9IE9iamVjdC5hc3NpZ25cbiAgICAsIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gYSh7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cyhhKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCAkJCAgICA9IGFyZ3VtZW50c1xuICAgICwgJCRsZW4gPSAkJC5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0S2V5cyAgICA9ICQuZ2V0S2V5c1xuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9sc1xuICAgICwgaXNFbnVtICAgICA9ICQuaXNFbnVtO1xuICB3aGlsZSgkJGxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdCgkJFtpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9XG4gIHJldHVybiBUO1xufSA6IE9iamVjdC5hc3NpZ247IiwidmFyICQgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIGlzRW51bSAgICA9ICQuaXNFbnVtO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc0VudHJpZXMpe1xuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoaXQpXG4gICAgICAsIGtleXMgICA9ICQuZ2V0S2V5cyhPKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBpICAgICAgPSAwXG4gICAgICAsIHJlc3VsdCA9IFtdXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpe1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmhpZGUnKTsiLCIvLyA3LjIuOSBTYW1lVmFsdWUoeCwgeSlcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpe1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07IiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGdldERlc2MgID0gcmVxdWlyZSgnLi8kJykuZ2V0RGVzY1xuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi8kLmN0eCcpKEZ1bmN0aW9uLmNhbGwsIGdldERlc2MoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY29yZSAgICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gY29yZVtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSQuc2V0RGVzYyhDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuLyQnKS5zZXREZXNjXG4gICwgaGFzID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXRocm93IFR5cGVFcnJvcihuYW1lICsgXCI6IHVzZSB0aGUgJ25ldycgb3BlcmF0b3IhXCIpO1xuICByZXR1cm4gaXQ7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi8kLmNvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0bmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdG5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIHN0b3JlICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuLyQudWlkJylcbiAgLCBTeW1ib2wgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuU3ltYm9sO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgU3ltYm9sICYmIFN5bWJvbFtuYW1lXSB8fCAoU3ltYm9sIHx8IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuLyQub2JqZWN0LWFzc2lnbicpfSk7IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXR9KTsiLG51bGwsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBMSUJSQVJZICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjdHggICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgY2xhc3NvZiAgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgaXNPYmplY3QgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKVxuICAsIHN0cmljdE5ldyAgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpXG4gICwgZm9yT2YgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIHNldFByb3RvICAgPSByZXF1aXJlKCcuLyQuc2V0LXByb3RvJykuc2V0XG4gICwgc2FtZSAgICAgICA9IHJlcXVpcmUoJy4vJC5zYW1lLXZhbHVlJylcbiAgLCBTUEVDSUVTICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLyQuc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgYXNhcCAgICAgICA9IHJlcXVpcmUoJy4vJC5taWNyb3Rhc2snKVxuICAsIFBST01JU0UgICAgPSAnUHJvbWlzZSdcbiAgLCBwcm9jZXNzICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBQICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgZW1wdHkgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBXcmFwcGVyO1xuXG52YXIgdGVzdFJlc29sdmUgPSBmdW5jdGlvbihzdWIpe1xuICB2YXIgdGVzdCA9IG5ldyBQKGVtcHR5KSwgcHJvbWlzZTtcbiAgaWYoc3ViKXRlc3QuY29uc3RydWN0b3IgPSBmdW5jdGlvbihleGVjKXtcbiAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gIH07XG4gIChwcm9taXNlID0gUC5yZXNvbHZlKHRlc3QpKVsnY2F0Y2gnXShlbXB0eSk7XG4gIHJldHVybiBwcm9taXNlID09PSB0ZXN0O1xufTtcblxudmFyIFVTRV9OQVRJVkUgPSBmdW5jdGlvbigpe1xuICB2YXIgd29ya3MgPSBmYWxzZTtcbiAgZnVuY3Rpb24gUDIoeCl7XG4gICAgdmFyIHNlbGYgPSBuZXcgUCh4KTtcbiAgICBzZXRQcm90byhzZWxmLCBQMi5wcm90b3R5cGUpO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG4gIHRyeSB7XG4gICAgd29ya3MgPSBQICYmIFAucmVzb2x2ZSAmJiB0ZXN0UmVzb2x2ZSgpO1xuICAgIHNldFByb3RvKFAyLCBQKTtcbiAgICBQMi5wcm90b3R5cGUgPSAkLmNyZWF0ZShQLnByb3RvdHlwZSwge2NvbnN0cnVjdG9yOiB7dmFsdWU6IFAyfX0pO1xuICAgIC8vIGFjdHVhbCBGaXJlZm94IGhhcyBicm9rZW4gc3ViY2xhc3Mgc3VwcG9ydCwgdGVzdCB0aGF0XG4gICAgaWYoIShQMi5yZXNvbHZlKDUpLnRoZW4oZnVuY3Rpb24oKXt9KSBpbnN0YW5jZW9mIFAyKSl7XG4gICAgICB3b3JrcyA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBhY3R1YWwgVjggYnVnLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDE2MlxuICAgIGlmKHdvcmtzICYmIHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpKXtcbiAgICAgIHZhciB0aGVuYWJsZVRoZW5Hb3R0ZW4gPSBmYWxzZTtcbiAgICAgIFAucmVzb2x2ZSgkLnNldERlc2Moe30sICd0aGVuJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHRoZW5hYmxlVGhlbkdvdHRlbiA9IHRydWU7IH1cbiAgICAgIH0pKTtcbiAgICAgIHdvcmtzID0gdGhlbmFibGVUaGVuR290dGVuO1xuICAgIH1cbiAgfSBjYXRjaChlKXsgd29ya3MgPSBmYWxzZTsgfVxuICByZXR1cm4gd29ya3M7XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICBpZihMSUJSQVJZICYmIGEgPT09IFAgJiYgYiA9PT0gV3JhcHBlcilyZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHNhbWUoYSwgYik7XG59O1xudmFyIGdldENvbnN0cnVjdG9yID0gZnVuY3Rpb24oQyl7XG4gIHZhciBTID0gYW5PYmplY3QoQylbU1BFQ0lFU107XG4gIHJldHVybiBTICE9IHVuZGVmaW5lZCA/IFMgOiBDO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpLFxuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KVxufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHJlY29yZCwgaXNSZWplY3Qpe1xuICBpZihyZWNvcmQubilyZXR1cm47XG4gIHJlY29yZC5uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcmVjb3JkLmM7XG4gIGFzYXAoZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSByZWNvcmQudlxuICAgICAgLCBvayAgICA9IHJlY29yZC5zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXJlY29yZC5oID0gdHJ1ZTtcbiAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyID09PSB0cnVlID8gdmFsdWUgOiBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgY2hhaW4ubGVuZ3RoID0gMDtcbiAgICByZWNvcmQubiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0KXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHZhciBwcm9taXNlID0gcmVjb3JkLnBcbiAgICAgICAgLCBoYW5kbGVyLCBjb25zb2xlO1xuICAgICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IHJlY29yZC5hID0gdW5kZWZpbmVkO1xuICAgIH0sIDEpO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdmFyIHJlY29yZCA9IHByb21pc2UuX2RcbiAgICAsIGNoYWluICA9IHJlY29yZC5hIHx8IHJlY29yZC5jXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgaWYocmVjb3JkLmgpcmV0dXJuIGZhbHNlO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcmVjb3JkID0gdGhpcztcbiAgaWYocmVjb3JkLmQpcmV0dXJuO1xuICByZWNvcmQuZCA9IHRydWU7XG4gIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXG4gIHJlY29yZC52ID0gdmFsdWU7XG4gIHJlY29yZC5zID0gMjtcbiAgcmVjb3JkLmEgPSByZWNvcmQuYy5zbGljZSgpO1xuICBub3RpZnkocmVjb3JkLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciByZWNvcmQgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihyZWNvcmQuZClyZXR1cm47XG4gIHJlY29yZC5kID0gdHJ1ZTtcbiAgcmVjb3JkID0gcmVjb3JkLnIgfHwgcmVjb3JkOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihyZWNvcmQucCA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIGFzYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7cjogcmVjb3JkLCBkOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjb3JkLnYgPSB2YWx1ZTtcbiAgICAgIHJlY29yZC5zID0gMTtcbiAgICAgIG5vdGlmeShyZWNvcmQsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtyOiByZWNvcmQsIGQ6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgUCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgdmFyIHJlY29yZCA9IHRoaXMuX2QgPSB7XG4gICAgICBwOiBzdHJpY3ROZXcodGhpcywgUCwgUFJPTUlTRSksICAgICAgICAgLy8gPC0gcHJvbWlzZVxuICAgICAgYzogW10sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgICAgYTogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgICBzOiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICAgIGQ6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBkb25lXG4gICAgICB2OiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgIGg6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBoYW5kbGVkIHJlamVjdGlvblxuICAgICAgbjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgcmVjb3JkLCAxKSwgY3R4KCRyZWplY3QsIHJlY29yZCwgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbChyZWNvcmQsIGVycik7XG4gICAgfVxuICB9O1xuICByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJykoUC5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBQKSlcbiAgICAgICAgLCBwcm9taXNlICA9IHJlYWN0aW9uLnByb21pc2VcbiAgICAgICAgLCByZWNvcmQgICA9IHRoaXMuX2Q7XG4gICAgICByZWFjdGlvbi5vayAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVjb3JkLmMucHVzaChyZWFjdGlvbik7XG4gICAgICBpZihyZWNvcmQuYSlyZWNvcmQuYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHJlY29yZC5zKW5vdGlmeShyZWNvcmQsIGZhbHNlKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogUH0pO1xucmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJykoUCwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuLyQuc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuLyQuY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8IHRlc3RSZXNvbHZlKHRydWUpKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mIFAgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gIFAuYWxsKGl0ZXIpWydjYXRjaCddKGZ1bmN0aW9uKCl7fSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IGdldENvbnN0cnVjdG9yKHRoaXMpXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3RcbiAgICAgICwgdmFsdWVzICAgICA9IFtdO1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIHZhbHVlcy5wdXNoLCB2YWx1ZXMpO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHZhbHVlcy5sZW5ndGhcbiAgICAgICAgLCByZXN1bHRzICAgPSBBcnJheShyZW1haW5pbmcpO1xuICAgICAgaWYocmVtYWluaW5nKSQuZWFjaC5jYWxsKHZhbHVlcywgZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpe1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICBlbHNlIHJlc29sdmUocmVzdWx0cyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKVxuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnU2V0JywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmtleW9mJylcbiAgLCAkbmFtZXMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nZXQtbmFtZXMnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi8kLmVudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgZ2V0RGVzYyAgICAgICAgPSAkLmdldERlc2NcbiAgLCBzZXREZXNjICAgICAgICA9ICQuc2V0RGVzY1xuICAsIF9jcmVhdGUgICAgICAgID0gJC5jcmVhdGVcbiAgLCBnZXROYW1lcyAgICAgICA9ICRuYW1lcy5nZXRcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBzZXR0ZXIgICAgICAgICA9IGZhbHNlXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIGlzRW51bSAgICAgICAgID0gJC5pc0VudW1cbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgdXNlTmF0aXZlICAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKHNldERlc2Moe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHNldERlc2ModGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ2V0RGVzYyhPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBzZXREZXNjKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKXNldERlc2MoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBzZXREZXNjO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2wucHJvdG90eXBlKTtcbiAgc3ltLl9rID0gdGFnO1xuICBERVNDUklQVE9SUyAmJiBzZXR0ZXIgJiYgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpc2V0RGVzYyhpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gc2V0RGVzYyhpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5KTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XVxuICAgID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHZhciBEID0gZ2V0RGVzYyhpdCA9IHRvSU9iamVjdChpdCksIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTilyZXN1bHQucHVzaChrZXkpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gIHZhciBhcmdzID0gW2l0XVxuICAgICwgaSAgICA9IDFcbiAgICAsICQkICAgPSBhcmd1bWVudHNcbiAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gIHdoaWxlKCQkLmxlbmd0aCA+IGkpYXJncy5wdXNoKCQkW2krK10pO1xuICByZXBsYWNlciA9IGFyZ3NbMV07XG4gIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gIH07XG4gIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xufTtcbnZhciBidWdneUpTT04gPSAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSk7XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIXVzZU5hdGl2ZSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZihpc1N5bWJvbCh0aGlzKSl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHJldHVybiB3cmFwKHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCkpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgaXNTeW1ib2wgPSBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbiAgfTtcblxuICAkLmNyZWF0ZSAgICAgPSAkY3JlYXRlO1xuICAkLmlzRW51bSAgICAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICQuZ2V0RGVzYyAgICA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICQuc2V0RGVzYyAgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgJC5zZXREZXNjcyAgID0gJGRlZmluZVByb3BlcnRpZXM7XG4gICQuZ2V0TmFtZXMgICA9ICRuYW1lcy5nZXQgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgJC5nZXRTeW1ib2xzID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi8kLmxpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cbn1cblxudmFyIHN5bWJvbFN0YXRpY3MgPSB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn07XG4vLyAxOS40LjIuMiBTeW1ib2wuaGFzSW5zdGFuY2Vcbi8vIDE5LjQuMi4zIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVcbi8vIDE5LjQuMi40IFN5bWJvbC5pdGVyYXRvclxuLy8gMTkuNC4yLjYgU3ltYm9sLm1hdGNoXG4vLyAxOS40LjIuOCBTeW1ib2wucmVwbGFjZVxuLy8gMTkuNC4yLjkgU3ltYm9sLnNlYXJjaFxuLy8gMTkuNC4yLjEwIFN5bWJvbC5zcGVjaWVzXG4vLyAxOS40LjIuMTEgU3ltYm9sLnNwbGl0XG4vLyAxOS40LjIuMTIgU3ltYm9sLnRvUHJpbWl0aXZlXG4vLyAxOS40LjIuMTMgU3ltYm9sLnRvU3RyaW5nVGFnXG4vLyAxOS40LjIuMTQgU3ltYm9sLnVuc2NvcGFibGVzXG4kLmVhY2guY2FsbCgoXG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsJyArXG4gICdzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBmdW5jdGlvbihpdCl7XG4gIHZhciBzeW0gPSB3a3MoaXQpO1xuICBzeW1ib2xTdGF0aWNzW2l0XSA9IHVzZU5hdGl2ZSA/IHN5bSA6IHdyYXAoc3ltKTtcbn0pO1xuXG5zZXR0ZXIgPSB0cnVlO1xuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVywge1N5bWJvbDogJFN5bWJvbH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1N5bWJvbCcsIHN5bWJvbFN0YXRpY3MpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICF1c2VOYXRpdmUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCF1c2VOYXRpdmUgfHwgYnVnZ3lKU09OKSwgJ0pTT04nLCB7c3RyaW5naWZ5OiAkc3RyaW5naWZ5fSk7XG5cbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7IiwiLy8gaHR0cDovL2dvby5nbC9Ya0JyakRcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRlbnRyaWVzID0gcmVxdWlyZSgnLi8kLm9iamVjdC10by1hcnJheScpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhpdCl7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1NldCcsIHt0b0pTT046IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXRvLWpzb24nKSgnU2V0Jyl9KTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbkl0ZXJhdG9ycy5Ob2RlTGlzdCA9IEl0ZXJhdG9ycy5IVE1MQ29sbGVjdGlvbiA9IEl0ZXJhdG9ycy5BcnJheTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxuICB0cnkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICB9XG59ICgpKVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gY2FjaGVkU2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8vIGltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XHJcbmltcG9ydCBJY29uIGZyb20gJ2xpYi1zb3VyY2UvdWl2Mi9pY29uJztcclxuaW1wb3J0IFJpcHBsZSBmcm9tICdsaWItc291cmNlL3VpdjIvcmlwcGxlJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdsaWItc291cmNlL3VpdjIvYnV0dG9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnbGliLXNvdXJjZS91aXYyL2ljb25idXR0b24nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdsaWItc291cmNlL3VpdjIvQ2FyZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdsaWItc291cmNlL3VpdjIvSW1hZ2UnO1xyXG5pbXBvcnQgQ2VudGVyQ29udGVudCBmcm9tICdsaWItc291cmNlL3VpdjIvQ2VudGVyQ29udGVudCc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdsaWItc291cmNlL3VpdjIvQ2hlY2tib3gnO1xyXG5pbXBvcnQgVG9nZ2xlIGZyb20gJ2xpYi1zb3VyY2UvdWl2Mi9Ub2dnbGUnO1xyXG5pbXBvcnQgVG91Y2hhYmxlIGZyb20gJ2xpYi1zb3VyY2UvdWl2Mi9Ub3VjaGFibGUnO1xyXG5pbXBvcnQgQ29tYm9ib3ggZnJvbSAnbGliLXNvdXJjZS91aXYyL0NvbWJvYm94JztcclxuaW1wb3J0IE9wdGlvbiBmcm9tICdsaWItc291cmNlL3VpdjIvT3B0aW9uJztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnbGliLXNvdXJjZS91aXYyL1NwaW5uZXInO1xyXG5pbXBvcnQgUmFkaW8gZnJvbSAnbGliLXNvdXJjZS91aXYyL1JhZGlvJztcclxuXHJcbmltcG9ydCBEaWFsb2dDb21wb25lbnQgZnJvbSBcImxpYi1zb3VyY2UvdWl2Mi9kaWFsb2dcIjtcclxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnRTdHlsZSwgVGhlbWUgYXMgX1RoZW1lLCBfX3NldHVwIGFzIGNyZWF0ZVN0eWxlc30gZnJvbSBcImxpYi1zb3VyY2UvdjIvc3R5bGVcIjtcclxuXHJcbmNvbnN0IHJhbmdlID0gZnVuY3Rpb24qIChhcmdzKSB7XHJcbiAgbGV0IHtzdGFydCA9IDAsIGVuZCA9IG51bGwsIGNvdW50ID0gbnVsbCwgc3RlcCA9IDEsIG1hcCA9IGkgPT4gaX0gPSBhcmdzO1xyXG5cclxuICBpZiAoZW5kID09PSBudWxsKSB7XHJcbiAgICBpZiAoY291bnQgPT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBnaXZlIHRoZSBzaXplIG9mIHRoZSByYW5nZVwiKVxyXG4gICAgfVxyXG4gICAgZW5kID0gc3RhcnQgKyBjb3VudDtcclxuICB9XHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBpZiAoc3RhcnQgPj0gZW5kKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgeWllbGQgbWFwKHN0YXJ0KTtcclxuICAgIHN0YXJ0ICs9IHN0ZXA7XHJcbiAgfVxyXG59O1xyXG5cclxud2luZG93LmZyYW5nZSA9IGZ1bmN0aW9uKiAoY291bnQpIHtcclxuICAgIGxldCBjdXJyZW50ID0gMDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IGNvdW50KSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB5aWVsZCBjdXJyZW50O1xyXG4gICAgICAgIGN1cnJlbnQgKz0gMTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHtSb3V0ZX0gPSBSZWFjdFJvdXRlcjtcclxuXHJcbmNvbnN0IGNvb2xCbHVlID0gXCIjMkZCMURGXCI7XHJcblxyXG5UaGVtZS5kZWZpbmUoe1xyXG4gICAgYXBwOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHRleHRDb2xvcjogJyM3NDc0NzQnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgaG92ZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4xMSknLFxyXG4gICAgICAgIGFjdGl2ZUNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICByYWlzZWQ6IHtcclxuICAgICAgICAgICAgY29sb3I6IGNvb2xCbHVlLFxyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ1xyXG4gICAgfSxcclxuICAgIHByb2dyZXNzYmFyOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0IzQ0VFRCcsXHJcbiAgICAgICAgY29sb3I6ICcjM0I4QUYzJ1xyXG4gICAgfSxcclxuICAgIHJhZGlvOiB7XHJcbiAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENvbG9yOiBjb29sQmx1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByYW5nZUlucHV0OiB7XHJcbiAgICAgICAgdHJhY2s6IHtcclxuICAgICAgICAgICAgY29sb3I6IGNvb2xCbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN3aXRjaDoge1xyXG4gICAgICAgIHRyYWNrOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBjb29sQmx1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29vbEJsdWUsXHJcbiAgICAgICAgdGV4dENvbG9yOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gICAgdXNlcklucHV0OiB7XHJcbiAgICAgICAgYWN0aXZlQ29sb3I6ICcjMkZCMURGJyxcclxuICAgICAgICB0ZXh0Q29sb3I6ICdibGFjaydcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBTY3JlZW5UcmFuc2l0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnfX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuU3R5bGUuX19yYXdDU1MoXHJcbiAgICBcInRlc3RcIixcclxuICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIudGVzdC1lbnRlclwiLFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzogJ2xlZnQgMjUwbXMgZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBsZWZ0OiAnMTAwJSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi50ZXN0LWVudGVyLnRlc3QtZW50ZXItYWN0aXZlXCIsXHJcbiAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgbGVmdDogMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLnRlc3QtbGVhdmVcIixcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICAndHJhbnNpdGlvbic6ICdsZWZ0IDI1MG1zIGVhc2Utb3V0JyxcclxuICAgICAgICAgICAgbGVmdDogMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLnRlc3QtbGVhdmUudGVzdC1sZWF2ZS1hY3RpdmVcIixcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICBsZWZ0OiAnLTEwMCUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIudGVzdC1hcHBlYXJcIixcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICAndHJhbnNpdGlvbic6ICd0b3AgMjUwbXMgZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICB0b3A6ICcxMDAlJyxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi50ZXN0LWFwcGVhci50ZXN0LWFwcGVhci1hY3RpdmVcIixcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICB0b3A6IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uIGNvbXBvbmVudD1cImRpdlwiIHRyYW5zaXRpb25OYW1lPVwidGVzdFwiIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezI1MH0gdHJhbnNpdGlvbkxlYXZlVGltZW91dD17MjUwfT5cclxuICAgICAgICAgICAgICAgIDxTY3JlZW5UcmFuc2l0aW9uIGtleT17RGF0ZS5ub3coKX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L1NjcmVlblRyYW5zaXRpb24+XHJcbiAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIHdpbmRvdy5iZW5jaG1hcmsgPSAoaXRlcmF0aW9ucywgZmlyc3QsIHNlY29uZCkgPT4ge1xyXG4vLyAgICAgY29uc3QgciA9IFtdO1xyXG4vLyAgICAgZm9yIChjb25zdCB0ZXN0TnVtIG9mIHJhbmdlKHtjb3VudDogMzB9KSkge1xyXG4vLyAgICAgICAgIGxldCBhID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zOyBpICs9IDEpIHtcclxuLy8gICAgICAgICAgICAgZmlyc3QoKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgYSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gYTtcclxuLy9cclxuLy8gICAgICAgICBsZXQgYiA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgaSArPSAxKSB7XHJcbi8vICAgICAgICAgICAgIHNlY29uZCgpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBiID0gcGVyZm9ybWFuY2Uubm93KCkgLSBiO1xyXG4vLyAgICAgICAgIHIucHVzaChbYS50b0ZpeGVkKDMpLCBiLnRvRml4ZWQoMyldKTtcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiByO1xyXG4vLyB9O1xyXG4vL1xyXG4vLyBjb25zdCBjaGVja1Byb3AgPSAob2JqLCBwcm9wLCB2YWx1ZSkgPT4gb2JqLmhhc093blByb3BlcnR5KHByb3ApID09PSB0cnVlICYmIG9ialtwcm9wXSA9PT0gdmFsdWU7XHJcbi8vIGNvbnN0IHggPSB7YTogMTAsIGI6IDEyfTtcclxuLy8gY29uc3QgcmVzID0gYmVuY2htYXJrKDFlNiwgKCkgPT4gdHlwZW9mIHguYyA9PT0gJ3VuZGVmaW5lZCcsICgpID0+IHguYyA9PT0gdW5kZWZpbmVkKTtcclxuLy8gY29uc29sZS5sb2cocmVzLm1hcChpID0+IGkuam9pbignXFx0JykpLmpvaW4oJ1xcbicpKTtcclxuXHJcbi8qXHJcbmNvbnN0IHVybCA9IFwiaHR0cDovL3ZpZ25ldHRlMS53aWtpYS5ub2Nvb2tpZS5uZXQvYmF5b25ldHRhL2ltYWdlcy9lL2UzL0NlcmV6YV9CYXlvbmV0dGFfMl9yZW5kZXIucG5nL3JldmlzaW9uL2xhdGVzdD9jYj0yMDE0MDYxNTIxMDAyNVwiO1xyXG5jb25zdCB1cmwgPSBcImh0dHA6Ly9hc3NldHMxLmlnbmltZ3MuY29tL3RodW1icy91c2VyVXBsb2FkZWQvMjAxNC8xMC8xMi9CYXlvbmV0dGEyXzEyODAtMTQxMzE0MjQ1MTEwMC5qcGdcIjtcclxuKi9cclxuXHJcbmNvbnN0IElucHV0QmFzZSA9ICh7bGFiZWwsIC4uLnByb3BzfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2PntsYWJlbH08L2Rpdj5cclxuICAgICAgICA8aW5wdXQgey4uLnByb3BzfSAvPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBJbnB1dCA9IHtcclxuICAgIFRleHQ6IHByb3BzID0+IHtcclxuICAgICAgICByZXR1cm4gPElucHV0QmFzZSB7Li4ucHJvcHN9IC8+O1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGFzeW5jIGRlbW8oKSB7XHJcbiAgICAgICAgaWYgKGF3YWl0IERpYWxvZy5jb25maXJtKFwiUmVhbGx5P1wiKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vcGUhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmRleDogLTFcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7ZGlzYWJsZWR9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFVJLlNjcmVlbiB0aXRsZT1cIlRlc3RcIiBiYWNrVGV4dD17XCJ0ZXN0XCJ9IHdpZHRoPXs2MDB9IG9uQmFjaz17dGhpcy5kZW1vfT5cclxuICAgICAgICAgICAgICAgIHsvKjxJbWFnZSBzb3VyY2U9e3VybH0gaGVpZ2h0PXsxNTB9IGNvbG9yPVwiY3lhblwiIC8+Ki99XHJcbiAgICAgICAgICAgICAgICB7Lyo8Q2hlY2tib3ggY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfSBvbkNoYW5nZT17Y2hlY2tlZCA9PiB0aGlzLnNldFN0YXRlKHtjaGVja2VkfSl9IGxhYmVsPXtcIlRlc3RcIn0gc3ViVGl0bGU9XCJtb3JlIHRleHQ/XCIgLz5cclxuICAgICAgICAgICAgICAgIDxUb2dnbGUgb249e3RoaXMuc3RhdGUub259IG9uQ2hhbmdlPXtvbiA9PiB0aGlzLnNldFN0YXRlKHtvbn0pfSBsYWJlbD17XCJUZXN0XCJ9IHN1YlRpdGxlPVwibW9yZSB0ZXh0P1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9ezxzcGFuPntkaXNhYmxlZCA/IDxTcGlubmVyIHNpemU9ezIwfSAvPiA6IG51bGx9QnV0dG9uIFRleHQ8L3NwYW4+fSBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uVGFwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtkaXNhYmxlZDogdHJ1ZX0pfSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbWJvYm94IHNlbGVjdGVkSW5kZXg9e3RoaXMuc3RhdGUuaW5kZXh9IG9uQ2hhbmdlPXtpbmRleCA9PiB0aGlzLnNldFN0YXRlKHtpbmRleH0pfSBzY3JvbGxUb1NlbGVjdGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIHtBcnJheS5mcm9tKHJhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXA6IGkgPT4gPE9wdGlvbiB2YWx1ZT17aSAqKiBpfT48U3Bpbm5lciBzaXplPXsxNH0gLz5UZXN0IHtpfTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXsnbG9sJ30+PEltYWdlIHNvdXJjZT17dXJsfSBoZWlnaHQ9ezUwfSB3aWR0aD1cIjUwJVwiIC8+PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbWJvYm94PiovfVxyXG4gICAgICAgICAgICAgICAgey8qPFJhZGlvIHNlbGVjdGVkSW5kZXg9e3RoaXMuc3RhdGUuaW5kZXh9IG9uQ2hhbmdlPXtpbmRleCA9PiB0aGlzLnNldFN0YXRlKHtpbmRleH0pfSB0aXRsZT1cIlRlc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbShyYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiBuID0+IDxPcHRpb24gdmFsdWU9e24gKiogbn0+e259PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24+PEltYWdlIHNvdXJjZT17dXJsfSBoZWlnaHQ9ezMwfSAvPjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRlc3RcIiAvPiovfVxyXG4gICAgICAgICAgICAgICAgPElucHV0LlRleHQgbGFiZWw9XCJ0ZXN0XCIgdmFsdWU9XCJ3YXRcIiBvbkNoYW5nZT17Y2Jsb2d9IC8+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgIDwvVUkuU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQXBwLnN0YXJ0KFxyXG4gICAgPFJvdXRlIGNvbXBvbmVudD17V3JhcHBlcn0+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtNYWlufSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Rlc3RcIiBjb21wb25lbnQ9e01haW59IC8+XHJcbiAgICA8L1JvdXRlPlxyXG4pO1xyXG5jcmVhdGVTdHlsZXMoKTtcclxuIl19

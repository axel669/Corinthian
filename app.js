(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = "data:image/gif;base64,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";

},{}],2:[function(require,module,exports){
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

},{"lib-source/v2/style":13}],3:[function(require,module,exports){
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

},{"lib-source/v2/style":13}],4:[function(require,module,exports){
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

},{"babel-runtime/helpers/interop-require-default":27,"lib-source/uiv2/CenterContent":3,"lib-source/uiv2/Icon":5,"lib-source/v2/style":13}],5:[function(require,module,exports){
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

},{"lib-source/v2/style.js":13}],6:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var Image = function Image(_ref) {
    var source = _ref.source;
    var width = _ref.width;
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
        backgroundImage: "url(\"" + source + "\")",
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

    return React.createElement("div", { style: style });
};

exports["default"] = Image;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _libSourceV2Style = require("lib-source/v2/style");

// import Ripple from "lib-source/uiv2/Ripple";

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
        WebkitTransition: 'background-color 150ms linear, -webkit-transform 150ms linear',
        transition: 'background-color 150ms linear, transform 150ms linear',
        position: 'absolute',
        left: -11,
        top: -7,
        // top: '50%',
        // transform: "translate(-50%, -50%)",
        height: 22,
        width: 22,
        borderRadius: 15,
        textAlign: 'center',
        border: '1px solid lightgray',
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)'
    },
    "toggle[data-on='false']": {
        // left: 0,
        transform: 'translateX(0)',
        backgroundColor: 'white'
    },
    "toggle[data-on='true']": {
        // right: 0,
        // left: 30,
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

},{"lib-source/v2/style":13}],8:[function(require,module,exports){
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

},{"babel-runtime/helpers/extends":25,"babel-runtime/helpers/object-without-properties":28}],9:[function(require,module,exports){
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
        color: function color() {
            return _libSourceV2StyleJs.Theme.variable.core.button.textColor;
        },
        textTransform: 'uppercase',
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
        backgroundColor: 'rgba(0, 0, 0, 0.075)',
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
        rippleElement = React.createElement(_libSourceUiv2RippleJs2["default"], null);
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

},{"babel-runtime/helpers/interop-require-default":27,"lib-source/uiv2/Touchable":8,"lib-source/uiv2/icon.js":10,"lib-source/uiv2/ripple.js":12,"lib-source/v2/style.js":13}],10:[function(require,module,exports){
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

},{"lib-source/v2/style.js":13}],11:[function(require,module,exports){
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

},{"babel-runtime/helpers/interop-require-default":27,"lib-source/uiv2/icon.js":10,"lib-source/uiv2/ripple.js":12,"lib-source/v2/style.js":13}],12:[function(require,module,exports){
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

},{"babel-runtime/helpers/class-call-check":24,"babel-runtime/helpers/inherits":26,"lib-source/v2/style.js":13}],13:[function(require,module,exports){
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

},{"babel-runtime/core-js/get-iterator":15,"babel-runtime/core-js/object/define-properties":18,"babel-runtime/core-js/object/entries":19,"babel-runtime/core-js/set":22}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":29}],15:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":30}],16:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":31}],17:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":32}],18:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":33}],19:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/entries"), __esModule: true };
},{"core-js/library/fn/object/entries":34}],20:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":35}],21:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":36}],22:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":37}],23:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":38}],24:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],25:[function(require,module,exports){
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
},{"babel-runtime/core-js/object/assign":16}],26:[function(require,module,exports){
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
},{"babel-runtime/core-js/object/create":17,"babel-runtime/core-js/object/set-prototype-of":20}],27:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],28:[function(require,module,exports){
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
},{}],29:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/$.core').Array.from;
},{"../../modules/$.core":47,"../../modules/es6.array.from":98,"../../modules/es6.string.iterator":105}],30:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":97,"../modules/es6.string.iterator":105,"../modules/web.dom.iterable":109}],31:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":47,"../../modules/es6.object.assign":100}],32:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":72}],33:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperties(T, D){
  return $.setDescs(T, D);
};
},{"../../modules/$":72}],34:[function(require,module,exports){
require('../../modules/es7.object.entries');
module.exports = require('../../modules/$.core').Object.entries;
},{"../../modules/$.core":47,"../../modules/es7.object.entries":107}],35:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":47,"../../modules/es6.object.set-prototype-of":101}],36:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":47,"../modules/es6.object.to-string":102,"../modules/es6.promise":103,"../modules/es6.string.iterator":105,"../modules/web.dom.iterable":109}],37:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.set');
require('../modules/es7.set.to-json');
module.exports = require('../modules/$.core').Set;
},{"../modules/$.core":47,"../modules/es6.object.to-string":102,"../modules/es6.set":104,"../modules/es6.string.iterator":105,"../modules/es7.set.to-json":108,"../modules/web.dom.iterable":109}],38:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":47,"../../modules/es6.object.to-string":102,"../../modules/es6.symbol":106}],39:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],40:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],41:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":65}],42:[function(require,module,exports){
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
},{"./$.cof":43,"./$.wks":95}],43:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],44:[function(require,module,exports){
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
},{"./$":72,"./$.ctx":48,"./$.defined":49,"./$.descriptors":50,"./$.for-of":55,"./$.has":58,"./$.hide":59,"./$.is-object":65,"./$.iter-define":68,"./$.iter-step":70,"./$.redefine-all":79,"./$.set-species":83,"./$.strict-new":87,"./$.uid":94}],45:[function(require,module,exports){
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
},{"./$.classof":42,"./$.for-of":55}],46:[function(require,module,exports){
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
},{"./$":72,"./$.descriptors":50,"./$.export":53,"./$.fails":54,"./$.for-of":55,"./$.global":57,"./$.hide":59,"./$.is-object":65,"./$.redefine-all":79,"./$.set-to-string-tag":84,"./$.strict-new":87}],47:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],48:[function(require,module,exports){
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
},{"./$.a-function":39}],49:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],50:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":54}],51:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":57,"./$.is-object":65}],52:[function(require,module,exports){
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
},{"./$":72}],53:[function(require,module,exports){
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
},{"./$.core":47,"./$.ctx":48,"./$.global":57}],54:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],55:[function(require,module,exports){
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
},{"./$.an-object":41,"./$.ctx":48,"./$.is-array-iter":63,"./$.iter-call":66,"./$.to-length":92,"./core.get-iterator-method":96}],56:[function(require,module,exports){
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
},{"./$":72,"./$.to-iobject":91}],57:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],58:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],59:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":72,"./$.descriptors":50,"./$.property-desc":78}],60:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":57}],61:[function(require,module,exports){
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
},{}],62:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":43}],63:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./$.iterators')
  , ITERATOR   = require('./$.wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./$.iterators":71,"./$.wks":95}],64:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":43}],65:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],66:[function(require,module,exports){
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
},{"./$.an-object":41}],67:[function(require,module,exports){
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
},{"./$":72,"./$.hide":59,"./$.property-desc":78,"./$.set-to-string-tag":84,"./$.wks":95}],68:[function(require,module,exports){
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
},{"./$":72,"./$.export":53,"./$.has":58,"./$.hide":59,"./$.iter-create":67,"./$.iterators":71,"./$.library":74,"./$.redefine":80,"./$.set-to-string-tag":84,"./$.wks":95}],69:[function(require,module,exports){
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
    iter.next = function(){ safe = true; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":95}],70:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],71:[function(require,module,exports){
module.exports = {};
},{}],72:[function(require,module,exports){
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
},{}],73:[function(require,module,exports){
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
},{"./$":72,"./$.to-iobject":91}],74:[function(require,module,exports){
module.exports = true;
},{}],75:[function(require,module,exports){
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
},{"./$.cof":43,"./$.global":57,"./$.task":89}],76:[function(require,module,exports){
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
},{"./$":72,"./$.fails":54,"./$.iobject":62,"./$.to-object":93}],77:[function(require,module,exports){
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
},{"./$":72,"./$.to-iobject":91}],78:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],79:[function(require,module,exports){
var redefine = require('./$.redefine');
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};
},{"./$.redefine":80}],80:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":59}],81:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],82:[function(require,module,exports){
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
},{"./$":72,"./$.an-object":41,"./$.ctx":48,"./$.is-object":65}],83:[function(require,module,exports){
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
},{"./$":72,"./$.core":47,"./$.descriptors":50,"./$.wks":95}],84:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":72,"./$.has":58,"./$.wks":95}],85:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":57}],86:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./$.an-object')
  , aFunction = require('./$.a-function')
  , SPECIES   = require('./$.wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./$.a-function":39,"./$.an-object":41,"./$.wks":95}],87:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],88:[function(require,module,exports){
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
},{"./$.defined":49,"./$.to-integer":90}],89:[function(require,module,exports){
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
},{"./$.cof":43,"./$.ctx":48,"./$.dom-create":51,"./$.global":57,"./$.html":60,"./$.invoke":61}],90:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],91:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":49,"./$.iobject":62}],92:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":90}],93:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":49}],94:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],95:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":57,"./$.shared":85,"./$.uid":94}],96:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":42,"./$.core":47,"./$.iterators":71,"./$.wks":95}],97:[function(require,module,exports){
var anObject = require('./$.an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./$.core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./$.an-object":41,"./$.core":47,"./core.get-iterator-method":96}],98:[function(require,module,exports){
'use strict';
var ctx         = require('./$.ctx')
  , $export     = require('./$.export')
  , toObject    = require('./$.to-object')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
$export($export.S + $export.F * !require('./$.iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , $$      = arguments
      , $$len   = $$.length
      , mapfn   = $$len > 1 ? $$[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});

},{"./$.ctx":48,"./$.export":53,"./$.is-array-iter":63,"./$.iter-call":66,"./$.iter-detect":69,"./$.to-length":92,"./$.to-object":93,"./core.get-iterator-method":96}],99:[function(require,module,exports){
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
},{"./$.add-to-unscopables":40,"./$.iter-define":68,"./$.iter-step":70,"./$.iterators":71,"./$.to-iobject":91}],100:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./$.export');

$export($export.S + $export.F, 'Object', {assign: require('./$.object-assign')});
},{"./$.export":53,"./$.object-assign":76}],101:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":53,"./$.set-proto":82}],102:[function(require,module,exports){

},{}],103:[function(require,module,exports){
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
  , Wrapper;

var testResolve = function(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
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
},{"./$":72,"./$.a-function":39,"./$.an-object":41,"./$.classof":42,"./$.core":47,"./$.ctx":48,"./$.descriptors":50,"./$.export":53,"./$.for-of":55,"./$.global":57,"./$.is-object":65,"./$.iter-detect":69,"./$.library":74,"./$.microtask":75,"./$.redefine-all":79,"./$.same-value":81,"./$.set-proto":82,"./$.set-species":83,"./$.set-to-string-tag":84,"./$.species-constructor":86,"./$.strict-new":87,"./$.wks":95}],104:[function(require,module,exports){
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
},{"./$.collection":46,"./$.collection-strong":44}],105:[function(require,module,exports){
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
},{"./$.iter-define":68,"./$.string-at":88}],106:[function(require,module,exports){
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
},{"./$":72,"./$.an-object":41,"./$.descriptors":50,"./$.enum-keys":52,"./$.export":53,"./$.fails":54,"./$.get-names":56,"./$.global":57,"./$.has":58,"./$.is-array":64,"./$.keyof":73,"./$.library":74,"./$.property-desc":78,"./$.redefine":80,"./$.set-to-string-tag":84,"./$.shared":85,"./$.to-iobject":91,"./$.uid":94,"./$.wks":95}],107:[function(require,module,exports){
// http://goo.gl/XkBrjD
var $export  = require('./$.export')
  , $entries = require('./$.object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});
},{"./$.export":53,"./$.object-to-array":77}],108:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./$.export');

$export($export.P, 'Set', {toJSON: require('./$.collection-to-json')('Set')});
},{"./$.collection-to-json":45,"./$.export":53}],109:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":71,"./es6.array.iterator":99}],110:[function(require,module,exports){
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

},{"./runtime":111}],111:[function(require,module,exports){
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

},{"_process":112,"babel-runtime/core-js/object/create":17,"babel-runtime/core-js/object/set-prototype-of":20,"babel-runtime/core-js/promise":21,"babel-runtime/core-js/symbol":23}],112:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
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
    var timeout = setTimeout(cleanUpNextTick);
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
    clearTimeout(timeout);
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
        setTimeout(drainQueue, 0);
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

},{}],113:[function(require,module,exports){
// import CSSTransition from 'react-addons-css-transition-group';
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _Object$defineProperties = require('babel-runtime/core-js/object/define-properties')['default'];

var _Array$from = require('babel-runtime/core-js/array/from')['default'];

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

var _libSourceV2Style = require("lib-source/v2/style");

var _libSourceDataUriLoadSpinnerGifSource = require("lib-source/data-uri/load-spinner.gif.source");

var _libSourceDataUriLoadSpinnerGifSource2 = _interopRequireDefault(_libSourceDataUriLoadSpinnerGifSource);

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

var Filler = function Filler(_ref2) {
    var color = _ref2.color;
    return React.createElement('div', { style: { width: '100%', height: '100%', backgroundColor: color } });
};
var test = function test(n) {
    return React.createElement(
        UI.Card,
        { title: 'Test Item' },
        n
    );
};

var Test = function Test(_ref3) {
    var children = _ref3.children;

    children = React.Children.toArray(children);
    for (var _iterator = children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var child = _ref;

        console.log(child, child.type.valueName);
    }
    return React.createElement(
        'div',
        null,
        children
    );
};

var FormattedInput = (function (_React$Component) {
    _inherits(FormattedInput, _React$Component);

    function FormattedInput(props) {
        var _this = this;

        _classCallCheck(this, FormattedInput);

        _React$Component.call(this, props);

        this.change = function (evt) {
            var value = evt.target.value;

            value = value + value;
            _this.setState({ value: value });
        };

        this.render = function () {
            return React.createElement('input', { type: 'text', value: _this.state.value, onChange: _this.change });
        };

        this.state = { value: "" };
    }

    // const Horiz = ({children}) => (
    //     <div>
    //         {React.Children.toArray(children).map(child => )}
    //     </div>
    // );

    return FormattedInput;
})(React.Component);

Style.__rawCSS("demo", {
    selector: ".normal",
    rules: {
        backgroundColor: 'cyan'
    }
});

// const Button = ({...buttonProps, text}) => <button style={{whiteSpace: 'pre'}} {...buttonProps}>{text}</button>;
// const StyledButton = styleName => {
//     styleName = `${styleName.charAt(0).toUpperCase()}${styleName.slice(1)}`;
//     Button[styleName] = props => <Button className={styleName} {...props} />;
// };
//
// StyledButton("normal");

_libSourceV2Style.Theme.define({
    core: {
        button: {
            textColor: "black"
        }
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
*/
var url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";

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
        transition: 'opacity ' + animationTime + 'ms linear'
        // display: 'none'
    },

    "window": {
        position: 'absolute',
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',
        borderRadius: 5,
        width: '75%',
        maxWidth: 480
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
        padding: 10
    }

    // ".window": {
    //     position: 'absolute',
    //     top: '15%',
    //     left: '50%',
    //     transform: 'translateX(-50%)',
    //     backgroundColor: 'white',
    //     boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.6)',
    //     width: '70%',
    //     maxWidth: 480,
    //     opacity: 0,
    //     transition: 'opacity 0.5s',
    //     borderRadius: 3
    // },
    // '.content': {
    //     maxHeight: '40vh',
    //     WebkitOverflowScrolling: 'touch',
    //     overflow: 'auto',
    //     padding: 15,
    //     transform: 'translateZ(0)'
    // },
    // ".title": {
    //     lineHeight: '30px',
    //     padding: 15,
    //     paddingTop: 10,
    //     paddingBottom: 0,
    //     fontSize: 18,
    //     fontWeight: 900,
    //     color: 'black'
    // },
    // ".buttons": {
    //     textAlign: 'right',
    //     width: '100%',
    //     height: 35
    // },
    //
    // ".loadSpinner": {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     padding: 5,
    //     backgroundColor: 'white',
    //     borderRadius: 3,
    //     minWidth: 54
    // }
});

var currentDialog = null;
window.dialog = _Object$defineProperties({}, {
    current: {
        get: function get() {
            return currentDialog;
        },
        configurable: true,
        enumerable: true
    }
});

var Dialog = (function (_React$Component2) {
    _inherits(Dialog, _React$Component2);

    function Dialog(props) {
        var _this2 = this;

        _classCallCheck(this, Dialog);

        _React$Component2.call(this, props);

        this.show = function callee$2$0(style) {
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        if (!(this.animating === true)) {
                            context$3$0.next = 2;
                            break;
                        }

                        return context$3$0.abrupt('return');

                    case 2:
                        this.animating = true;
                        this.setState({ display: 'block' });
                        context$3$0.next = 6;
                        return _regeneratorRuntime.awrap(chrono.wait(50));

                    case 6:
                        this.setState({ opacity: 1 });
                        context$3$0.next = 9;
                        return _regeneratorRuntime.awrap(chrono.wait(animationTime));

                    case 9:
                        this.animating = false;

                    case 10:
                    case 'end':
                        return context$3$0.stop();
                }
            }, null, _this2);
        };

        this.hide = function callee$2$0(value) {
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                var _this3 = this;

                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        if (!(this.animating === true)) {
                            context$3$0.next = 2;
                            break;
                        }

                        return context$3$0.abrupt('return');

                    case 2:
                        this.animating = true;
                        this.setState({ opacity: null });
                        context$3$0.next = 6;
                        return _regeneratorRuntime.awrap(chrono.wait(animationTime));

                    case 6:
                        this.setState({ display: null });
                        requestAnimationFrame(function () {
                            return _this3.state.response(value);
                        });
                        this.animating = false;

                    case 9:
                    case 'end':
                        return context$3$0.stop();
                }
            }, null, _this2);
        };

        this.close = function () {
            if (_this2.state.closable === false) {
                return;
            }
            _this2.hide(undefined);
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

            return React.createElement(
                _libSourceUiv2Touchable2['default'],
                { component: 'div', onTap: _this2.close, className: 'dialog-core-overlay', style: { display: display, opacity: opacity } },
                React.createElement(
                    _libSourceUiv2Touchable2['default'],
                    { component: 'div', className: 'dialog-core-window dialog-core-window-' + pos, onTap: _this2.stopper },
                    React.createElement(
                        'div',
                        { className: 'dialog-core-content' },
                        React.createElement(_libSourceUiv2Button2['default'], { text: 'demo', block: true, onTap: function () {
                                return _this2.hide('test');
                            } })
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
            response: cblog,
            closable: !true
        };
        this.animating = false;
    }

    return Dialog;
})(React.Component);

var Combobox = (function (_React$Component3) {
    _inherits(Combobox, _React$Component3);

    function Combobox(props) {
        var _this4 = this;

        _classCallCheck(this, Combobox);

        _React$Component3.call(this, props);

        this.openOptions = function callee$2$0() {
            var _props$title, title;

            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        _props$title = this.props.title;
                        title = _props$title === undefined ? "Combobox!" : _props$title;
                        context$3$0.t0 = console;
                        context$3$0.next = 5;
                        return _regeneratorRuntime.awrap(Dialog.__custom(function (closeDialog) {
                            return {
                                content: React.createElement(
                                    'div',
                                    null,
                                    _Array$from(range({
                                        count: 10,
                                        map: function map(n) {
                                            return React.createElement(_libSourceUiv2Button2['default'], { text: n, key: n, block: true, onTap: function () {
                                                    return closeDialog(n);
                                                } });
                                        }
                                    }))
                                ),
                                title: title,
                                buttons: [{ text: 'cancel' }]
                            };
                        }));

                    case 5:
                        context$3$0.t1 = context$3$0.sent;
                        context$3$0.t0.log.call(context$3$0.t0, context$3$0.t1);

                    case 7:
                    case 'end':
                        return context$3$0.stop();
                }
            }, null, _this4);
        };

        this.render = function () {
            return React.createElement(
                _libSourceUiv2Touchable2['default'],
                { component: 'div', onTap: _this4.openOptions },
                'Test?'
            );
            // return <div>Edit Me</div>;
        };
    }

    return Combobox;
})(React.Component);

var Option = function Option() {
    throw new Error("Option is intended as a filler element and should not be rendered on its own");
};

var Spinner = function Spinner(_ref4) {
    var size = _ref4.size;
    return React.createElement(_libSourceUiv2Image2['default'], { width: size, height: size, source: _libSourceDataUriLoadSpinnerGifSource2['default'] });
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
        return { checked: false, on: false };
    },
    render: function render() {
        var _this5 = this;

        return React.createElement(
            UI.Screen,
            { title: 'Test', backText: "test", width: 600, onBack: this.demo },
            React.createElement(_libSourceUiv2Checkbox2['default'], { checked: this.state.checked, onChange: function (checked) {
                    return _this5.setState({ checked: checked });
                }, label: "Test", subTitle: 'more text?' }),
            React.createElement(_libSourceUiv2Toggle2['default'], { on: this.state.on, onChange: function (on) {
                    return _this5.setState({ on: on });
                }, label: "Test", subTitle: 'more text?' }),
            React.createElement(_libSourceUiv2Button2['default'], { text: React.createElement(
                    'span',
                    null,
                    React.createElement(Spinner, { size: 20 }),
                    'Button Text'
                ), onTap: function () {
                    return dialog.current.show();
                } }),
            React.createElement(
                Combobox,
                { selectedIndex: 0 },
                React.createElement(
                    Option,
                    { value: 0 },
                    'Test'
                )
            ),
            React.createElement(Dialog, null)
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

// console.log(this.animating, this.animating === true);
/*<Image source={url} height={150} color="cyan" />*/

},{"babel-runtime/core-js/array/from":14,"babel-runtime/core-js/get-iterator":15,"babel-runtime/core-js/object/define-properties":18,"babel-runtime/helpers/class-call-check":24,"babel-runtime/helpers/inherits":26,"babel-runtime/helpers/interop-require-default":27,"babel-runtime/regenerator":110,"lib-source/data-uri/load-spinner.gif.source":1,"lib-source/uiv2/Card":2,"lib-source/uiv2/CenterContent":3,"lib-source/uiv2/Checkbox":4,"lib-source/uiv2/Image":6,"lib-source/uiv2/Toggle":7,"lib-source/uiv2/Touchable":8,"lib-source/uiv2/button":9,"lib-source/uiv2/icon":10,"lib-source/uiv2/iconbutton":11,"lib-source/uiv2/ripple":12,"lib-source/v2/style":13}]},{},[113])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWItc291cmNlL2RhdGEtdXJpL2xvYWQtc3Bpbm5lci5naWYuc291cmNlIiwiQzovVXNlcnMvQXhlbDEvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9DYXJkLmpzIiwiQzovVXNlcnMvQXhlbDEvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9DZW50ZXJDb250ZW50LmpzIiwiQzovVXNlcnMvQXhlbDEvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9DaGVja2JveC5qcyIsIkM6L1VzZXJzL0F4ZWwxL0RvY3VtZW50cy9wcm9ncmFtbWluZy9naXRodWIvQ29yaW50aGlhbi9saWItc291cmNlL3VpdjIvSWNvbi5qcyIsIkM6L1VzZXJzL0F4ZWwxL0RvY3VtZW50cy9wcm9ncmFtbWluZy9naXRodWIvQ29yaW50aGlhbi9saWItc291cmNlL3VpdjIvSW1hZ2UuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vbGliLXNvdXJjZS91aXYyL1RvZ2dsZS5qcyIsIkM6L1VzZXJzL0F4ZWwxL0RvY3VtZW50cy9wcm9ncmFtbWluZy9naXRodWIvQ29yaW50aGlhbi9saWItc291cmNlL3VpdjIvVG91Y2hhYmxlLmpzIiwiQzovVXNlcnMvQXhlbDEvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9idXR0b24uanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vbGliLXNvdXJjZS91aXYyL2ljb24uanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vbGliLXNvdXJjZS91aXYyL2ljb25idXR0b24uanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vbGliLXNvdXJjZS91aXYyL3JpcHBsZS5qcyIsIkM6L1VzZXJzL0F4ZWwxL0RvY3VtZW50cy9wcm9ncmFtbWluZy9naXRodWIvQ29yaW50aGlhbi9saWItc291cmNlL3YyL3N0eWxlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2VudHJpZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zZXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3Qtd2l0aG91dC1wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2VudHJpZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zZXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZvci1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW52b2tlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQua2V5b2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubWljcm90YXNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQub2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC10by1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZmluZS1hbGwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNhbWUtdmFsdWUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtcHJvdG8uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmljdC1uZXcuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50YXNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC53a3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnNldC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9ydW50aW1lLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIkM6L1VzZXJzL0F4ZWwxL0RvY3VtZW50cy9wcm9ncmFtbWluZy9naXRodWIvQ29yaW50aGlhbi90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7Ozs7O2dDQ0RtQyxxQkFBcUI7O0FBRXhELHVDQUNJLE1BQU0sRUFDTixNQUFNLEVBQ047QUFDSSxlQUFXLEVBQUU7QUFDVCxjQUFNLEVBQUUsQ0FBQztBQUNULGVBQU8sRUFBRSxDQUFDO0FBQ1YsaUJBQVMsRUFBRSx1Q0FBdUM7QUFDbEQsY0FBTSxFQUFFLG1CQUFtQjtBQUMzQix1QkFBZSxFQUFFLE9BQU87QUFDeEIs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0b0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNDMUZpQixzQkFBc0I7Ozs7bUNBQ3BCLHdCQUF3Qjs7OzttQ0FDeEIsd0JBQXdCOzs7O3VDQUNwQiw0QkFBNEI7Ozs7aUNBQ2xDLHNCQUFzQjs7OztrQ0FDckIsdUJBQXVCOzs7OzBDQUNmLCtCQUErQjs7OztxQ0FDcEMsMEJBQTBCOzs7O21DQUM1Qix3QkFBd0I7Ozs7c0NBQ3JCLDJCQUEyQjs7OztnQ0FDNEIscUJBQXFCOztvREF5YnZFLDZDQUE2Qzs7OztBQXZieEUsSUFBTSxLQUFLLDRCQUFHLFNBQVIsS0FBSyxDQUFjLElBQUk7cUJBQ3RCLEtBQUssYUFBTSxHQUFHLGVBQVMsS0FBSyxjQUFTLElBQUksYUFBTSxHQUFHOzs7Ozs4QkFBYSxJQUFJLENBQW5FLEtBQUs7QUFBTCxxQkFBSywrQkFBRyxDQUFDOzRCQUFzRCxJQUFJLENBQXhELEdBQUc7QUFBSCxtQkFBRyw2QkFBRyxJQUFJOzhCQUEwQyxJQUFJLENBQTVDLEtBQUs7QUFBTCxxQkFBSywrQkFBRyxJQUFJOzZCQUE0QixJQUFJLENBQTlCLElBQUk7QUFBSixvQkFBSSw4QkFBRyxDQUFDOzRCQUFrQixJQUFJLENBQXBCLEdBQUc7QUFBSCxtQkFBRyw2QkFBRyxVQUFBLENBQUM7MkJBQUksQ0FBQztpQkFBQTs7c0JBRTVELEdBQUcsS0FBSyxJQUFJLENBQUE7Ozs7O3NCQUNWLEtBQUssS0FBSyxJQUFJLENBQUE7Ozs7O3NCQUNWLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDOzs7QUFFcEQsbUJBQUcsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDOzs7cUJBR2YsSUFBSTs7Ozs7c0JBQ0wsS0FBSyxJQUFJLEdBQUcsQ0FBQTs7Ozs7Ozs7O3VCQUdWLEdBQUcsQ0FBQyxLQUFLLENBQUM7OztBQUNoQixxQkFBSyxJQUFJLElBQUksQ0FBQzs7Ozs7Ozs7T0FmWixLQUFLO0NBaUJWLENBQUEsQ0FBQzs7QUFFRixNQUFNLENBQUMsTUFBTSw0QkFBRyxvQkFBVyxLQUFLO1FBQ3hCLE9BQU87Ozs7QUFBUCx1QkFBTyxHQUFHLENBQUM7OztxQkFDUixJQUFJOzs7OztzQkFDSCxPQUFPLEtBQUssS0FBSyxDQUFBOzs7Ozs7Ozs7dUJBR2YsT0FBTzs7O0FBQ2IsdUJBQU8sSUFBSSxDQUFDLENBQUM7Ozs7Ozs7OztDQUVwQixDQUFBLENBQUM7O21CQUVjLFdBQVc7SUFBcEIsS0FBSyxnQkFBTCxLQUFLOztBQUVaLElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQzs7QUFFM0IsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNULE9BQUcsRUFBRTtBQUNELHVCQUFlLEVBQUUsT0FBTztBQUN4QixpQkFBUyxFQUFFLFNBQVM7S0FDdkI7QUFDRCxVQUFNLEVBQUU7QUFDSixrQkFBVSxFQUFFLHFCQUFxQjtBQUNqQyxtQkFBVyxFQUFFLG9CQUFvQjtBQUNqQyxjQUFNLEVBQUU7QUFDSixpQkFBSyxFQUFFLFFBQVE7QUFDZixxQkFBUyxFQUFFLE9BQU87U0FDckI7S0FDSjtBQUNELFFBQUksRUFBRTtBQUNGLHVCQUFlLEVBQUUsT0FBTztLQUMzQjtBQUNELGVBQVcsRUFBRTtBQUNULHVCQUFlLEVBQUUsU0FBUztBQUMxQixhQUFLLEVBQUUsU0FBUztLQUNuQjtBQUNELFNBQUssRUFBRTtBQUNILFlBQUksRUFBRTtBQUNGLHlCQUFhLEVBQUUsUUFBUTtTQUMxQjtLQUNKO0FBQ0QsY0FBVSxFQUFFO0FBQ1IsYUFBSyxFQUFFO0FBQ0gsaUJBQUssRUFBRSxRQUFRO1NBQ2xCO0tBQ0o7QUFDRCxjQUFRO0FBQ0osYUFBSyxFQUFFO0FBQ0gsaUJBQUssRUFBRSxRQUFRO1NBQ2xCO0tBQ0o7QUFDRCxTQUFLLEVBQUU7QUFDSCx1QkFBZSxFQUFFLFFBQVE7QUFDekIsaUJBQVMsRUFBRSxPQUFPO0tBQ3JCO0FBQ0QsYUFBUyxFQUFFO0FBQ1AsbUJBQVcsRUFBRSxTQUFTO0FBQ3RCLGlCQUFTLEVBQUUsT0FBTztLQUNyQjtDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUN2QyxVQUFNLEVBQUEsa0JBQUc7QUFDTCxlQUFPOztjQUFLLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLEFBQUM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FBTyxDQUFBO0tBQ3hHO0NBQ0osQ0FBQyxDQUFDOztBQUVILEtBQUssQ0FBQyxRQUFRLENBQ1YsTUFBTSxFQUNOO0FBQ0ksWUFBUSxFQUFFLGFBQWE7QUFDdkIsU0FBSyxFQUFFO0FBQ0gsb0JBQVksRUFBRSxxQkFBcUI7QUFDbkMsWUFBSSxFQUFFLE1BQU07S0FDZjtDQUNKLEVBQ0Q7QUFDSSxZQUFRLEVBQUUsK0JBQStCO0FBQ3pDLFNBQUssRUFBRTtBQUNILFlBQUksRUFBRSxDQUFDO0tBQ1Y7Q0FDSixFQUNEO0FBQ0ksWUFBUSxFQUFFLGFBQWE7QUFDdkIsU0FBSyxFQUFFO0FBQ0gsb0JBQVksRUFBRSxxQkFBcUI7QUFDbkMsWUFBSSxFQUFFLENBQUM7S0FDVjtDQUNKLEVBQ0Q7QUFDSSxZQUFRLEVBQUUsK0JBQStCO0FBQ3pDLFNBQUssRUFBRTtBQUNILFlBQUksRUFBRSxPQUFPO0tBQ2hCO0NBQ0osRUFDRDtBQUNJLFlBQVEsRUFBRSxjQUFjO0FBQ3hCLFNBQUssRUFBRTtBQUNILG9CQUFZLEVBQUUsb0JBQW9CO0FBQ2xDLFdBQUcsRUFBRSxNQUFNO0tBQ2Q7Q0FDSixFQUNEO0FBQ0ksWUFBUSxFQUFFLGlDQUFpQztBQUMzQyxTQUFLLEVBQUU7QUFDSCxXQUFHLEVBQUUsQ0FBQztLQUNUO0NBQ0osQ0FDSixDQUFDOztBQUVGLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM5QixVQUFNLEVBQUEsa0JBQUc7QUFDTCxlQUNJO0FBQUMseUJBQWE7Y0FBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLGNBQWMsRUFBQyxNQUFNLEVBQUMsc0JBQXNCLEVBQUUsR0FBRyxBQUFDLEVBQUMsc0JBQXNCLEVBQUUsR0FBRyxBQUFDO1lBQzFHO0FBQUMsZ0NBQWdCO2tCQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEFBQUM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTthQUNMO1NBQ1AsQ0FDbEI7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFNLE1BQU0sR0FBRyxTQUFULE1BQU0sQ0FBSSxLQUFPO1FBQU4sS0FBSyxHQUFOLEtBQU8sQ0FBTixLQUFLO1dBQU0sNkJBQUssS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQUFBQyxHQUFHO0NBQUEsQ0FBQztBQUNwRyxJQUFNLElBQUksR0FBRyxTQUFQLElBQUksQ0FBRyxDQUFDO1dBQ1Y7QUFBQyxVQUFFLENBQUMsSUFBSTtVQUFDLEtBQUssRUFBQyxXQUFXO1FBQUUsQ0FBQztLQUFXO0NBQzNDLENBQUM7O0FBRUYsSUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFJLENBQUksS0FBVSxFQUFLO1FBQWQsUUFBUSxHQUFULEtBQVUsQ0FBVCxRQUFROztBQUNuQixZQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUMseUJBQW9CLFFBQVEsNkdBQUU7Ozs7Ozs7Ozs7OztZQUFuQixLQUFLOztBQUNaLGVBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDNUM7QUFDRCxXQUFPOzs7UUFBTSxRQUFRO0tBQU8sQ0FBQTtDQUMvQixDQUFDOztJQUVJLGNBQWM7Y0FBZCxjQUFjOztBQUNMLGFBRFQsY0FBYyxDQUNKLEtBQUssRUFBRTs7OzhCQURqQixjQUFjOztBQUVaLG9DQUFNLEtBQUssQ0FBQyxDQUFDOzthQUlqQixNQUFNLEdBQUcsVUFBQyxHQUFHLEVBQUs7Z0JBQ1QsS0FBSyxHQUFJLEdBQUcsQ0FBQyxNQUFNLENBQW5CLEtBQUs7O0FBQ1YsaUJBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLGtCQUFLLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBTCxLQUFLLEVBQUMsQ0FBQyxDQUFDO1NBQzFCOzthQUVELE1BQU0sR0FBRzttQkFBTSwrQkFBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxNQUFLLEtBQUssQ0FBQyxLQUFLLEFBQUMsRUFBQyxRQUFRLEVBQUUsTUFBSyxNQUFNLEFBQUMsR0FBRztTQUFBOztBQVRoRixZQUFJLENBQUMsS0FBSyxHQUFHLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDO0tBQzVCOzs7Ozs7OztXQUpDLGNBQWM7R0FBUyxLQUFLLENBQUMsU0FBUzs7QUFxQjVDLEtBQUssQ0FBQyxRQUFRLENBQ1YsTUFBTSxFQUNOO0FBQ0ksWUFBUSxFQUFFLFNBQVM7QUFDbkIsU0FBSyxFQUFFO0FBQ0gsdUJBQWUsRUFBRSxNQUFNO0tBQzFCO0NBQ0osQ0FDSixDQUFDOzs7Ozs7Ozs7O0FBV0Ysd0JBQU8sTUFBTSxDQUFDO0FBQ1YsUUFBSSxFQUFFO0FBQ0YsY0FBTSxFQUFFO0FBQ0oscUJBQVMsRUFBRSxPQUFPO1NBQ3JCO0tBQ0o7Q0FDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJILElBQU0sR0FBRyxHQUFHLDZGQUE2RixDQUFDOztBQUUxRyxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFDMUIsdUNBQ0ksUUFBUSxFQUNSLE1BQU0sRUFDTjtBQUNJLGFBQVMsRUFBRTtBQUNQLGdCQUFRLEVBQUUsVUFBVTtBQUNwQixXQUFHLEVBQUUsQ0FBQztBQUNOLFlBQUksRUFBRSxDQUFDO0FBQ1AsYUFBSyxFQUFFLE1BQU07QUFDYixjQUFNLEVBQUUsTUFBTTtBQUNkLHVCQUFlLEVBQUUscUJBQXFCO0FBQ3RDLGNBQU0sRUFBRSxNQUFNO0FBQ2QsZUFBTyxFQUFFLE1BQU07QUFDZiwrQkFBdUIsRUFBRSxNQUFNO0FBQy9CLGVBQU8sRUFBRSxDQUFDO0FBQ1Ysa0JBQVUsZUFBYSxhQUFhLGNBQVc7O0tBRWxEOztBQUVELFlBQVEsRUFBRTtBQUNOLGdCQUFRLEVBQUUsVUFBVTtBQUNwQix1QkFBZSxFQUFFLE9BQU87QUFDeEIsaUJBQVMsRUFBRSxpQ0FBaUM7QUFDNUMsb0JBQVksRUFBRSxDQUFDO0FBQ2YsYUFBSyxFQUFFLEtBQUs7QUFDWixnQkFBUSxFQUFFLEdBQUc7S0FDaEI7QUFDRCxnQkFBWSxFQUFFO0FBQ1YsV0FBRyxFQUFFLEtBQUs7QUFDVixZQUFJLEVBQUUsS0FBSztBQUNYLGlCQUFTLEVBQUUsa0JBQWtCO0tBQ2hDO0FBQ0QsbUJBQWUsRUFBRTtBQUNiLFdBQUcsRUFBRSxLQUFLO0FBQ1YsWUFBSSxFQUFFLEtBQUs7QUFDWCxpQkFBUyxFQUFFLHVCQUF1QjtLQUNyQzs7QUFFRCxhQUFTLEVBQUU7QUFDUCxpQkFBUyxFQUFFLE1BQU07QUFDakIsK0JBQXVCLEVBQUUsT0FBTztBQUNoQyxnQkFBUSxFQUFFLE1BQU07QUFDaEIsZUFBTyxFQUFFLEVBQUU7S0FDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0ErQ0osQ0FDSixDQUFDOztBQUVGLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztBQUN6QixNQUFNLENBQUMsTUFBTSw0QkFBRyxFQUlmO0FBSE8sV0FBTzthQUFBLGVBQUc7QUFDVixtQkFBTyxhQUFhLENBQUM7U0FDeEI7Ozs7RUFDSixDQUFDOztJQUNJLE1BQU07Y0FBTixNQUFNOztBQUNHLGFBRFQsTUFBTSxDQUNJLEtBQUssRUFBRTs7OzhCQURqQixNQUFNOztBQUVKLHFDQUFNLEtBQUssQ0FBQyxDQUFDOzthQWFqQixJQUFJLEdBQUcsb0JBQU8sS0FBSzs7Ozs4QkFDWCxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQTs7Ozs7Ozs7QUFHM0IsNEJBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLDRCQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7O3lEQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7O0FBQ3JCLDRCQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7O3lEQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7O0FBQ2hDLDRCQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7Ozs7OztTQUMxQjs7YUFDRCxJQUFJLEdBQUcsb0JBQU8sS0FBSzs7Ozs7OzhCQUVYLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFBOzs7Ozs7OztBQUczQiw0QkFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdEIsNEJBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzs7eURBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDOzs7QUFDaEMsNEJBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUMvQiw2Q0FBcUIsQ0FBQzttQ0FBTSxPQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO3lCQUFBLENBQUMsQ0FBQztBQUN4RCw0QkFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7U0FDMUI7O2FBRUQsS0FBSyxHQUFHLFlBQU07QUFDVixnQkFBSSxPQUFLLEtBQUssQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO0FBQy9CLHVCQUFPO2FBQ1Y7QUFDRCxtQkFBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEI7O2FBQ0QsT0FBTyxHQUFHLFVBQUMsR0FBRyxFQUFLO0FBQ2YsZUFBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCOzthQUVELGlCQUFpQixHQUFHLFlBQU07QUFDdEIseUJBQWEsU0FBTyxDQUFDO1NBQ3hCOzthQUNELG9CQUFvQixHQUFHLFlBQU07QUFDekIseUJBQWEsR0FBRyxJQUFJLENBQUM7U0FDeEI7O2FBRUQsTUFBTSxHQUFHLFlBQU07eUJBQzhCLE9BQUssS0FBSztnQkFBNUMsT0FBTyxVQUFQLE9BQU87Z0JBQUUsT0FBTyxVQUFQLE9BQU87Z0JBQUUsR0FBRyxVQUFILEdBQUc7Z0JBQUUsT0FBTyxVQUFQLE9BQU87O0FBRXJDLG1CQUNJOztrQkFBVyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxPQUFLLEtBQUssQUFBQyxFQUFDLFNBQVMsRUFBQyxxQkFBcUIsRUFBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQVAsT0FBTyxFQUFFLE9BQU8sRUFBUCxPQUFPLEVBQUMsQUFBQztnQkFDcEc7O3NCQUFXLFNBQVMsRUFBQyxLQUFLLEVBQUMsU0FBUyw2Q0FBMkMsR0FBRyxBQUFHLEVBQUMsS0FBSyxFQUFFLE9BQUssT0FBTyxBQUFDO29CQUN0Rzs7MEJBQUssU0FBUyxFQUFDLHFCQUFxQjt3QkFDaEMsd0RBQVEsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLE1BQUEsRUFBQyxLQUFLLEVBQUU7dUNBQU0sT0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDOzZCQUFBLEFBQUMsR0FBRztxQkFDMUQ7aUJBQ0U7YUFDSixDQUNkO1NBQ0w7O0FBakVHLFlBQUksQ0FBQyxLQUFLLEdBQUc7QUFDVCxtQkFBTyxFQUFFLElBQUk7QUFDYixtQkFBTyxFQUFFLElBQUk7QUFDYixnQkFBSSxFQUFFLElBQUk7QUFDVixlQUFHLEVBQUUsS0FBSztBQUNWLG1CQUFPLEVBQUUsSUFBSTtBQUNiLG9CQUFRLEVBQUUsS0FBSztBQUNmLG9CQUFRLEVBQUUsQ0FBQyxJQUFJO1NBQ2xCLENBQUM7QUFDRixZQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztLQUMxQjs7V0FiQyxNQUFNO0dBQVMsS0FBSyxDQUFDLFNBQVM7O0lBdUU5QixRQUFRO2NBQVIsUUFBUTs7QUFDQyxhQURULFFBQVEsQ0FDRSxLQUFLLEVBQUU7Ozs4QkFEakIsUUFBUTs7QUFFTixxQ0FBTSxLQUFLLENBQUMsQ0FBQzs7YUFHakIsV0FBVyxHQUFHOzhCQUNILEtBQUs7Ozs7O3VDQUFrQixJQUFJLENBQUMsS0FBSyxDQUFqQyxLQUFLO0FBQUwsNkJBQUssZ0NBQUcsV0FBVzt5Q0FDMUIsT0FBTzs7eURBQVcsTUFBTSxDQUFDLFFBQVEsQ0FDN0IsVUFBQSxXQUFXO21DQUFLO0FBQ1osdUNBQU8sRUFDSDs7O29DQUNLLFlBQVcsS0FBSyxDQUFDO0FBQ2QsNkNBQUssRUFBRSxFQUFFO0FBQ1QsMkNBQUcsRUFBRSxhQUFBLENBQUM7bURBQUksd0RBQVEsSUFBSSxFQUFFLENBQUMsQUFBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEFBQUMsRUFBQyxLQUFLLE1BQUEsRUFBQyxLQUFLLEVBQUU7MkRBQU0sV0FBVyxDQUFDLENBQUMsQ0FBQztpREFBQSxBQUFDLEdBQUc7eUNBQUE7cUNBQzNFLENBQUMsQ0FBQztpQ0FDRCxBQUNUO0FBQ0QscUNBQUssRUFBTCxLQUFLO0FBQ0wsdUNBQU8sRUFBRSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDOzZCQUM5Qjt5QkFBQyxDQUNMOzs7O3VDQWJPLEdBQUc7Ozs7Ozs7U0FjZDs7YUFFRCxNQUFNLEdBQUcsWUFBTTtBQUNYLG1CQUNJOztrQkFBVyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxPQUFLLFdBQVcsQUFBQzs7YUFFdkMsQ0FDZDs7U0FFTDtLQTNCQTs7V0FIQyxRQUFRO0dBQVMsS0FBSyxDQUFDLFNBQVM7O0FBaUN0QyxJQUFNLE1BQU0sR0FBRyxTQUFULE1BQU0sR0FBUztBQUNqQixVQUFNLElBQUksS0FBSyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7Q0FDbkcsQ0FBQzs7QUFJRixJQUFNLE9BQU8sR0FBRyxTQUFWLE9BQU8sQ0FBSSxLQUFNO1FBQUwsSUFBSSxHQUFMLEtBQU0sQ0FBTCxJQUFJO1dBQU0sdURBQU8sS0FBSyxFQUFFLElBQUksQUFBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLEFBQUMsRUFBQyxNQUFNLG1EQUFpQixHQUFHO0NBQUEsQ0FBQzs7QUFHekYsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzNCLEFBQU0sUUFBSSxFQUFBOzs7OztxREFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzs7Ozs7NkNBQUssSUFBSTs7Ozs7QUFDeEMsMkJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7S0FFNUI7QUFDRCxtQkFBZSxFQUFBLDJCQUFHO0FBQ2QsZUFBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBQyxDQUFDO0tBQ3RDO0FBQ0QsVUFBTSxFQUFBLGtCQUFHOzs7QUFDTCxlQUNJO0FBQUMsY0FBRSxDQUFDLE1BQU07Y0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBRSxNQUFNLEFBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxBQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEFBQUM7WUFFcEUsMERBQVUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxBQUFDLEVBQUMsUUFBUSxFQUFFLFVBQUEsT0FBTzsyQkFBSSxPQUFLLFFBQVEsQ0FBQyxFQUFDLE9BQU8sRUFBUCxPQUFPLEVBQUMsQ0FBQztpQkFBQSxBQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQUFBQyxFQUFDLFFBQVEsRUFBQyxZQUFZLEdBQUc7WUFDN0gsd0RBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxBQUFDLEVBQUMsUUFBUSxFQUFFLFVBQUEsRUFBRTsyQkFBSSxPQUFLLFFBQVEsQ0FBQyxFQUFDLEVBQUUsRUFBRixFQUFFLEVBQUMsQ0FBQztpQkFBQSxBQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQUFBQyxFQUFDLFFBQVEsRUFBQyxZQUFZLEdBQUc7WUFDdkcsd0RBQVEsSUFBSSxFQUFFOzs7b0JBQU0sb0JBQUMsT0FBTyxJQUFDLElBQUksRUFBRSxFQUFFLEFBQUMsR0FBRzs7aUJBQWtCLEFBQUMsRUFBQyxLQUFLLEVBQUU7MkJBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7aUJBQUEsQUFBQyxHQUFHO1lBQ25HO0FBQUMsd0JBQVE7a0JBQUMsYUFBYSxFQUFFLENBQUMsQUFBQztnQkFDdkI7QUFBQywwQkFBTTtzQkFBQyxLQUFLLEVBQUUsQ0FBQyxBQUFDOztpQkFBYzthQUN4QjtZQUNYLG9CQUFDLE1BQU0sT0FBRztTQUNGLENBQ2Q7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxHQUFHLENBQUMsS0FBSyxDQUNMO0FBQUMsU0FBSztNQUFDLFNBQVMsRUFBRSxPQUFPLEFBQUM7SUFDdEIsb0JBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksQUFBQyxHQUFHO0lBQ25DLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztDQUNuQyxDQUNYLENBQUM7QUFDRiwyQkFBYyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhNQUF3QVBjQUFBQUFBRE16TTJWbFpaZVhsNWlZbUptWm1haW9xS3VycTdDd3NMdTd1OExDd3NyS3lzN096cy9QejlMUzB0VFUxTlhWMWRuWjJlRGc0T0hoNGVQajQrVGs1T2JtNXVqbzZPcnE2dXZyNis3dTd2RHc4UEx5OHZQejgvWDE5ZmIyOXZmMzkvajQrUG41K2ZyNit2djcrL3o4L1AzOS9mNysvdi8vLzVHUmtaYVdscHFhbWsxTlRYUjBkSUNBZ0hKeWNxbXBxZC9mM3pRME5EWTJOa05EUTBSRVJFaElTRWxKU1U5UFQxcGFXbHRiVzNsNWVYOS9mNXVibTUrZm42Q2dvS09qbzZTa3BLYW1wcWVucDdPenM3UzB0TGEydHJtNXViKy92OEhCd2MzTnpkRFEwTmJXMXRmWDE5emMzT1hsNWVucDZlM3Q3Vk5UVXgwZEhTQWdJQ1ltSmtWRlJYcDZlbjUrZm9TRWhKT1RrOUhSMFU1T1RvV0ZoUUVCQVFJQ0FnUUVCQlFVRkJVVkZSb2FHaHNiR3lJaUlpTWpJeTh2THpBd01ERXhNVEl5TWxGUlVWWldWbGRYVjJabVptZG5aMmhvYUd4c2JIRnhjWE56YzNaMmRuaDRlSHg4ZklhR2hvZUhoNGlJaUpXVmxaNmVucXlzckxHeHNiZTN0N2k0dUxxNnVyNit2c1BEdzhURXhNdkx5OHpNek5QVDA5alkyTnJhMnR2YjI5N2UzdUxpNHV6czdPL3Y3L0h4OGZUMDlFdExTMUpTVXBLU2toNGVIaVFrSkNjbkowWkdSbFJVVkhWMWRYdDdlMHhNVEhkM2Q3eTh2QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0gvQzA1RlZGTkRRVkJGTWk0d0F3RUFBQUFoL3d0SlEwTlNSMEpITVRBeE1rZ0FBQXhJVEdsdWJ3SVFBQUJ0Ym5SeVVrZENJRmhaV2lBSHpnQUNBQWtBQmdBeEFBQmhZM053VFZOR1ZBQUFBQUJKUlVNZ2MxSkhRZ0FBQUFBQUFBQUFBQUFBQVFBQTl0WUFJZjhMU1VORFVrZENSekV3TVRKSUFBQU1TRXhwYm04Q0VBQUFiVzUwY2xKSFFpQllXVm9nQjg0QUFnQUpBQVlBTVFBQVlXTnpjRTFUUmxRQUFBQUFTVVZESUhOU1IwSUFBQUFBQUFBQUFBQUFBQUVBQVBiV0FDSC9DMGxEUTFKSFFrY3hNREV5U0FBQURFaE1hVzV2QWhBQUFHMXVkSEpTUjBJZ1dGbGFJQWZPQUFJQUNRQUdBREVBQUdGamMzQk5VMFpVQUFBQUFFbEZReUJ6VWtkQ0FBQUFBQUFBQUFBQUFBQUJBQUQyMWdBaC93dEpRME5TUjBKSE1UQXhNa2dBQUF4SVRHbHVid0lRQUFCdGJuUnlVa2RDSUZoWldpQUh6Z0FDQUFrQUJnQXhBQUJoWTNOd1RWTkdWQUFBQUFCSlJVTWdjMUpIUWdBQUFBQUFBQUFBQUFBQUFRQUE5dFlBSWY4TFNVTkRVa2RDUnpFd01USklBQUFNU0V4cGJtOENFQUFBYlc1MGNsSkhRaUJZV1ZvZ0I4NEFBZ0FKQUFZQU1RQUFZV056Y0UxVFJsUUFBQUFBU1VWRElITlNSMElBQUFBQUFBQUFBQUFBQUFFQUFQYldBQ0gvQzBsRFExSkhRa2N4TURFeVNBQUFERWhNYVc1dkFoQUFBRzF1ZEhKU1IwSWdXRmxhSUFmT0FBSUFDUUFHQURFQUFHRmpjM0JOVTBaVUFBQUFBRWxGUXlCelVrZENBQUFBQUFBQUFBQUFBQUFCQUFEMjFnQWgvd3RKUTBOU1IwSkhNVEF4TWtnQUFBeElUR2x1YndJUUFBQnRiblJ5VWtkQ0lGaFpXaUFIemdBQ0FBa0FCZ0F4QUFCaFkzTndUVk5HVkFBQUFBQkpSVU1nYzFKSFFnQUFBQUFBQUFBQUFBQUFBUUFBOXRZQUlmOExTVU5EVWtkQ1J6RXdNVEpJQUFBTVNFeHBibThDRUFBQWJXNTBjbEpIUWlCWVdWb2dCODRBQWdBSkFBWUFNUUFBWVdOemNFMVRSbFFBQUFBQVNVVkRJSE5TUjBJQUFBQUFBQUFBQUFBQUFBRUFBUGJXQUNIK0xVMWhaR1VnWW5rZ1MzSmhjMmx0YVhKaElFNWxhbU5vWlhaaElDaDNkM2N1Ykc5aFpHbHVabTh1Ym1WMEtRQWgrUVFFQlFEL0FDd0FBQUFBTUFBd0FBQUgvNEFvZ29PRWhZYUhpSW1LaTR5TmpvNGxKWStUalUxWlVsSlpUWlNjaGtWVkFLRUFWVVdkcGhDZ29xRlZFS2FjUEtxcVBLNklKeHNVVUNPREpEaXhvamdrdElWUlBUazJPRHNOSnlnakxMNmhMTHJDZ2xFdk1nSFlBVGNLZ2xmUEFGZlRnejNaNVRvWUtBMVV2bFFONGlnYk91WFpNd21DQmxPcVV3YnZLQlEyODdMOUVIUkNTUXNyVmxvb1dmWU9DbzZBMkE0UU9oRWlCTU4rSkhaQXJNR2szNklHTitiSlNDSEpveUlGT1daZ281R0NnMGxHR0JMNE9NQWsyRXRFSmt6Y2JBVEZ5QUFWUkN6c1RBUUJpNENqQXE0c0dXb0lnd3VrU0s5VVlFcm9DRlNvQ0tnUzdIRVZxWmFTVEU5dzdTcmdxMVlVVnNsbVBldTBxOVN6Z3JPS1FsVUtkMURQbjBIckZzcXBOeEdJQ1E4aWFMZ0k5d21DRlFNSUFHRmc4MnlHSVFNaVIxN0JnUERRRTBra2F3Nmk0ZXdIR0pvbEU0aFE2SVJsY1IyQ2hKYjhZSkNJQzA2Y1hCRGhjUVNDMVFONlRCREU0Y0dDM3dzZXVPem5vTUJxQkNCUWlJQUFIRGdFMnU5RUlERXVXY2dUUVZDYU40ZmlVY1FXQkVFTUpNa3dLSVoyNERGZWp1andnYkQ1OHd2U3M0Vy9BTjNaRVV6T001RjIxa04rNEV4NDBOY0lHVWdnUVFiODlhWGdnbG9GQWdBaCtRUUZCUUF2QUN3Q0FBSUFKd0FyQUFBSS93QlJDQnhJc0tCQkV5WU1LbHpJc0tDRVBYVG83SkhRc0dMRlFaRUNhQXdRYVpERmp3VVZyZG00Y1kwaWtDaFhrQ1M1NG9YTGx6Qmp5dlNRWVVPSmdTWG1yTnc0NTZaQUVZc1FNVHJSc0lPZkxuVHM3RG1Kb29TY25ScmwzRHloZ0UyWk1XaGNYRmpZb1lBYkFXQUYxSUVnVUFYVUFDb0U5aGtEb0MwQUwxeTJHdlR6TlN6WU80NVFJR0t4a3dVaUZCWFN1SFhyeFlWQkQzZnNob1hEUUdBQ1NDUWhKUkJvQU14Z3Qyb1lGY3hBUjNIWUJDOFBwWWdUSjhXaGwza3V1eDJUcU9BR081N0JDb281WWtSTVBWNVVBekN6cUtDSlBiRmJVTEJJU0l6dU5pTU1LcXFqK0EyQ2hCVkp0UGh5bVl5Q2hSQzZ3QkhnWmc0Q0VDQTF0TjhJa3h2TW1UNUVGenBpQUVnUUJlZ2dSeERTZzhkQWhZVW4wcVBjTDVERGxnU0FOTEFCZnloWmNBQUJBd3hBZ0FIREVWaFJCM3drS09FQUJqVGlZRU9HSURoaGdvVmN5RkFnRzByNEIzd2VFZ1JpaUFPTVdLSkJHYUxZNFlvRlFSaGloVEFhWktDR0N6WllZMEgrQVNqZ2pnemxCK1JISlhDQWdRWWhERm5RSXhFVXNnQWhXMXhBNG80ZkdMTEFsVmNXSXRlUUUyRHA1UlpKQWtuQ0ExNWlTWWdHUTQ3Z1FKbFlZakNrQ1JHd3VVQWhIQ2lKQVNGc1J1QVRrQ1pJZ0NlV2hqeWlwRUFsWUhDSUF3OU1BTjZnQTVrd0Fna3hNU3JwcEpSVytsRkFBQ0g1QkFVRkFDd0FMQU1BQWdBckFDY0FBQWovQUZFSUhFaXdZTUVUSnd3cVhNaVFJWVlqUFhvY3dkQ3dvc1dCRUhnSTJDaUFCNFNMSUJWQzBjaHhJdzhvSVZNS05GS3lwQkdWQzBkMCtKQlFvSWtCTFRrT01ERndCQlFLRzJwYUZPRUFRUkFEU1RMWVZKRnpvd3FlSnhyc3dHRWpSNDhvUTVFVUdNQjFnSkFuQW9rMEZVQkVvSUliQWRJR2tQRUNhME1IVzd0eVJRQUNoWVZNT1ROWlFJRkJoOXEvUFJxT1FDQzNhNDhKQXBmc0tMbGppY0FFTS82cTFiR0JZWWNnaGJzK0dGZ0JnU1JKQ0NvTS9DRlpyUTBLREQvQXlEeUFRSVNDSlVvVVBGQTZMUTZVQzA4a1lSMUVnMFVtTldydklORXd3NURDS3hnSVpWZ2loUXpKTnhwWWZJSmdSV3NnREloZjVKQ0NSdG9aT1JTQXNRUXg0VUVFRGNzdGttaHl3RWNDaWpEakd4eWh2YURQR0RHZ2lKQi9VTEVtTGg0UjVBRVRDeFM0d0FNYzhEZVFBWk1BNENBQWxCUWgwQWhOR0dqZ0EvdnhwMFNERHpwWVNSTW9aR0NoaFJjb2lFbUhIWGFCZ2dRakd1Z0VmeUZZZ3VLRGw1VEFZb3NMdkNoZmpETTZXS09JT0piSTM0azlxa2hoaXhncXVPR01Id28wb0lVSUtpZ1FneDFHU05COStXVW81UW4rQWZpUmxDSFJCK2FZWkpacDVwbG9wcW5tbW15MjZlYWJjRjRVRUFBaCtRUUZCUUFwQUN3REFBSUFLd0FuQUFBSS93QlJDQnhJc0tEQmd3Z1RLalRZd1ZDZ1FJWTZMSnhJMFFJZkFnTUdFT0JqZ2FMSGd4d09aQnc1NEFDSGp5Z0Zic0ZJVXVPV2xBaE5qQ0J4WXVDSkJDMUhjcW9wc01TR0RCNTRUaXlCNFpDREJ4TkFDTHlaTTJNQ25vcjIyS0hUeFkvRWhTWWtFRnJBZFlHaFJ3SWJOQjNRUUNDRU9nTFNDbkJUNEdwQ0RGdTdjbzFRQXNVR0dEbGhiRURoNkk1YXRXNzhLRFFSUVc3WFFpZFJVREJBMGdBRmdRemcvRlY3eDBQQ0VRNE1kOFV3c0ZHaFAzOEtOUnFZWUxKYU9oa1NrbmlnZVFFaERRVk5tQ2dveUhSYU8zc1RUbWk5SmNSRUNpMXM3NW1kOElNaHc0VXVVRFNCNE0za09vb21Qb3BReVBXV0M4UW5na0F3eDQwQU9GMGdlTlVzd1FHREJ0OG9UVkFRQklpQkk1andENWFvR3ovbENVUjY1THdvRUtQK3h3U2FCQ0JnQUdzTTR0OUVod1E0b0lCU1NIQ2dRcElzdU9BZUR5STBRaHdTRHJoSmRoVU9kR0dHQW03WW9VRVJna2poaUFVbG1HR0RLQm9FNElJRnRtalFmZm50MTUrTUNNMkhvNGVFNklHSEFSWHNTSkFHTFlUaEJRQmduTkdIVURLUzBNSVhBRVFaSlJrS0NFbUlHRkptMmNZSU8rcHhaSlpSbXJISWpubUFLZVVZaWV4b0FCaG1BcUFHSXp0V2tJYVpYcmdnSkFwOWpKR2xGMXdvSitRSkNyQlJ4aGhvdU9Ebm5TaUlzQWdpakRCSlVFQUFJZmtFQlFVQVd3QXNCd0FEQUNjQUt3QUFCLytBS0lLRGhJUWpHUklTR1NPRmpZNlBqUjVNQzVRTFRCNlFtWm9qazVXVVRJeWFvb1VZbnA0WW82bUNNYWFWTVlRbkh4Mmhxb1NzclF1dmdobEpCa0VJRGlLMWcxQzRDMUNDVDBJRHpBTUZTTUxESWhDdEVNSWdDTTNOQlE3RGdod1BuZzhjZ2hNOTJzMEl0TFVpRjA1T0Y5RW9EK2pOUVIzZWd5Y25oUkVFOVFOZ2ZNZ0hTVU1RZ0VuNEVYUjBnc0VLZEVNeUxJUkVnZ0dRZnlzUVBKbVk2WVNHQ0E4bWdPQTR6SVFKa3Bvc0VGRXh3QWd5bEkyV1hCRkFVd0FXQ0RBSlZaaFprNllMVkRsUklPalo4MGpRRWxxSTF1eWhFQ1ZTcFRTWkJoMEsxV2pRblVwL0JoVWtzK2ZOcllOVXNuUUp0cEJKc0NTWUhQQ1JBQ2hZRGltaGFBUUlNQ09IQXJBbFVzaVl5L2RHZzYxTWF2QWR2SU1Fd1JNaFFqUkZjV0R3WUJ3dmE1MVEwc0tLbFJaS0ZQNXd6TmNHQlc4R3BnQVlEV0NLQVVFSlpuQU9vR1BEc0FaVVNKT204aGVEanRVOXZGMlJMZnVLSUFVM0JzdDRFV1hZQ0JhOFNiTmdkS0xCRGh3MmN2UW9Qb3dFanVTamNSZ1dOQUlLaFEyTGEvSEFEb0RIVmdoVmtsZkJ1YlZJZXRKVmlwUkYwU1NMRkNsWm1zd2ZWS0xFd2tBQUlma0VCUVVBTHdBc0J3QURBQ2NBS3dBQUNQOEFVUWdjU0xDZ3dZTUlFeXBjeUxDaHc0Y1FJMHBjZUlMRUNCTVRINEtZOE1EQklRd2xNaTU4WkdpQnlRV0VKR0FVZWJCRWhKTW5DV0ZnZVpCRElaZ25ENjJrT1JBRHpwTU9SdkFrcUlIUXp3VVBTQXdkR0dMTDBRbExDVjY0Q2RQUWg2Z0RUVnpZWXJSUWhFZFlDNGJRZ0lGRHlMQUtUNXhBVzNCREEwQUp0bkJnaTRLQ0FRSURCaEE0WUFGdEl3TjVBdy9nMHlGc0ljR0JDUmpDYXVJUDRzQ0JHRHQrUENBeTFzT1BGWWY5KzVnd1dydDQ5ZktsNnhhdVhMb0QxU0tzWUFDUEhrSkNINXFnSUFnUUEwY0pUL1E1QXdhQWx6QXRORGdFZ1dDT0d3Rnd1a0JBcUlBTWdPZlB2N1JRdXRBRWdqY0NzbWV2bzhqZ2lEYlF3NHZaSWNTUVFndnQ2UGZzRkxqSVRIam9YdlFRUERGaXhOcUJndENqdDdPaFlLSXg3MEdYaDBBbkhKSkNISEdrY01oOUNlaW5IUjBaRk1TSUdnRUNBSVlCQWlVQVNRQWNCZ0JKQWdJeEFJZURBdHpoZ1VFdWVCRmdHaFdnZ0FnTEhYYklBaUlvT0hLSGcyNzRjZEFGWEtnSTNSaDlDS1JDakRHcUlCQUVkYURuUmdHRjdlZ0NHbU9Vd1lZQ2E1VWdCNUVkeW5HV0ludllRVWNYZmpTSjBBbU1JTEtJQ0FPVk1BZVdITTV4RmdvbGJKQ0JCL2RKdEFLYkFhd1FsaUpyWUxsR2QyRU5Fa21Na1F4Q2x3UjcwRUhISGhLZ0pwQUo2MFVVRUFBaCtRUUZCUUF0QUN3Q0FBY0FLd0FuQUFBSS93QlJDQnhJc0tEQmd3Z1RLbHpJc0tIRGh4QWpTcHhJc2FMRml4Z3phdHpJc2FQSGhpUkdmRVFJZ1FjWEZqdVduTWdvQWtxTUdGQkVEaXhDQ1lCTkFKTU1ZT1R3WUlIUEJVdzhDR3hTNmViTlNVb3NpdWo1MDJjVGtWMk1Hc1ZrOFVMVHBobEtYSko2MDFLSWlrNnUvcFNnbGF0TnIyREYrcFNBSXFwWnFoV3RxczJBZ2loWHBFcVpObjBxa0tiUm5EdjFBaFU2c09USmxDc3h0bndaODJESWtRd3hKUEJ4b0FrSmlDYzBSSGd3QVlSREJUbG1CQWhBSXdVSGh5UVlBQ0V3b0FlQ0p3d2IzQmhOVzBhS0VneFBNRmd4b0hmdklYUVRrdGhCdTNnTkpndzFCUEhOUEVuaWcxQndGQzkrb0dBSjNBUWpzR2JlRzhhSGhCUnNUTEduL1dOZ0JRU1NKQ0dvTVBBQmQ5OUJPaVRjb0dOOGdCa0pCQzdaSWFDL2dKUUNUZEREZXdNZ0lCTkNQZGluQXdZb1dKQ0pmLzVsWWdFS0lDRHdYZ0VPTEJURkN6SVVkNE1DQWhFQklZUkVDUFNFRU13VmdJUUlERVhSUXc0MjRMQkRBeXVab01LSS9xbGdna0FaSkdGQUVBaHN3V0pESjJ4QVFXTUNtVEFBanYwTnNLTkFKM3pRd1lFV0djR2tBRVpBQmdVUE9QSUFCV1FvbEFRaER4Q0FLUkFHUi9UUXd4RU1tam5RQ2M5RkZCQUFJZmtFQlFVQUtRQXNBZ0FIQUNzQUp3QUFDUDhBVVFnY0tQQUVJMFNMUkJCY3lMQ2h3NFlYWEtBWlU0YU5naE1QTTJva2VJR0xGd0FnQVl6cHM3SGtReGNmUTRKTVU4R2t5NEdNMUtnTUNjYkF5NWVKeHN3TW1lZW15MFZtZGdMd29zZW55UkZ0aElvaFpOU2tBakl6djdRZzBiVGtpVDVud0F3TjAwSkRWWmNWRE9EUlEyakUxNDBsU3B4OUdhUEFDemw2RUdGY20zSFFtZ0I0QTJoS1FQZWhCQ2w1ODJvNjFMZmhuc0NCSlJWZWFHSVQ0cnh4ekM0VzJQZ3gzc2lUQng2MnJEaXp3TCtQQjNzZWFEZnczdEVFMjc2Tk94ZjF3TFN1TXpwaUFFZ1FCUk0zUTJqQXdFRnRTUWhkNEFod013Y0JDSk1tTG13aHRLQlFoRWNiRmRVUlFKMzZHd1M0TjE0b3RLQjdkME1mTXByVTJGTzlmQXNLRzBOczhjNStRc1lOZHNxWEY4UTQrMEFOek5sM2YwRFZZUVk2OGxYSGwwQ05GUExISDRVME1oQUcrbm5uZ0dRTmVYQkhnQUxBd1lCQUZCZ3d3SVlER0lBZUNoeHcxMkFFOWpYa2h4c0IzdUVJQ2h2QXdDR0hNR3lBUWdrUk5FZ0lCaHAxVUFDSzFkVUJnVUFOdlBoaUF3STlZZ2g3aEVoUW9rTWQrTkVGSFhic29VaEJDUWpKWVFKemdUREJBdzRjZ29Gdkc1M2dRUVliZ0hsQ2xWWU93RWxySjVBd3dwSk5iVUdBbFFSc2dSb0hCMWg1QUFldVdjREhuQU1Rd0ljRnNhSFFnU0dCQkdKSUI0WFNGUkFBT3c9PVwiO1xuIiwiaW1wb3J0IHtkZWZpbmVDb21wb25lbnRTdHlsZX0gZnJvbSBcImxpYi1zb3VyY2UvdjIvc3R5bGVcIjtcclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ2NhcmQnLFxyXG4gICAgJ2NvcmUnLFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGFpbmVyXCI6IHtcclxuICAgICAgICAgICAgbWFyZ2luOiA1LFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcxcHggMnB4IDJweCByZ2JhKDEyMCwgMTIwLCAxMjAsIDAuMTUpJyxcclxuICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlMGUwZTAnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgcGFkZGluZzogMyxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbmNvbnN0IENhcmQgPSAoe2NoaWxkcmVuLCB0aXRsZSA9IG51bGx9KSA9PiB7XHJcbiAgICBsZXQgY29udGVudDtcclxuXHJcbiAgICBpZiAodGl0bGUgPT09IG51bGwpIHtcclxuICAgICAgICBjb250ZW50ID0gY2hpbGRyZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29yZS10aXRsZVwiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb3JlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQge2RlZmluZUNvbXBvbmVudFN0eWxlfSBmcm9tIFwibGliLXNvdXJjZS92Mi9zdHlsZVwiO1xyXG5cclxuZGVmaW5lQ29tcG9uZW50U3R5bGUoXHJcbiAgICAnY2VudGVyLWNvbnRlbnQnLFxyXG4gICAgJ2NvcmUnLFxyXG4gICAge1xyXG4gICAgICAgICdjb250YWluZXInOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICd0YWJsZScsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUnLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnY29udGVudCc6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ3RhYmxlLWNlbGwnLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgcGFkZGluZzogJ2F1dG8nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5jb25zdCBDZW50ZXJDb250ZW50ID0gKHtjaGlsZHJlbiwgd2lkdGgsIGhlaWdodCwgY2xhc3NOYW1lID0gXCJcIn0pID0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGNlbnRlci1jb250ZW50LWNvcmUtY29udGFpbmVyICR7Y2xhc3NOYW1lfWB9IHN0eWxlPXt7d2lkdGgsIGhlaWdodH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNvbnRlbnQtY29yZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICdhdXRvJywgZGlzcGxheTogJ2lubGluZS1ibG9jayd9fT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENlbnRlckNvbnRlbnQ7XHJcbiIsImltcG9ydCB7ZGVmaW5lQ29tcG9uZW50U3R5bGV9IGZyb20gXCJsaWItc291cmNlL3YyL3N0eWxlXCI7XHJcbmltcG9ydCBDZW50ZXJDb250ZW50IGZyb20gXCJsaWItc291cmNlL3VpdjIvQ2VudGVyQ29udGVudFwiO1xyXG4vLyBpbXBvcnQgUmlwcGxlIGZyb20gXCJsaWItc291cmNlL3VpdjIvUmlwcGxlXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCJsaWItc291cmNlL3VpdjIvSWNvblwiO1xyXG5cclxuZGVmaW5lQ29tcG9uZW50U3R5bGUoXHJcbiAgICAnY2hlY2tib3gnLFxyXG4gICAgJ2NvcmUnLFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGFpbmVyXCI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGxpbmVhcicsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNvbnRhaW5lcjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDc1KScsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdub25lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpY29uXCI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMjUwbXMgbGluZWFyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpY29uW2RhdGEtY2hlY2tlZD0ndHJ1ZSddXCI6IHtcclxuICAgICAgICAgICAgY29sb3I6ICcjMjRiMzI0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMsXHJcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMzAsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdWJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuY29uc3QgaW9uT25JY29uID0gXCJpb24tYW5kcm9pZC1jaGVja2JveFwiO1xyXG5jb25zdCBpb25PZmZJY29uID0gXCJpb24tYW5kcm9pZC1jaGVja2JveC1vdXRsaW5lLWJsYW5rXCI7XHJcblxyXG5jb25zdCBDaGVja2JveCA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjaGVja2VkID0gZmFsc2UsXHJcbiAgICAgICAgb25JY29uTmFtZSA9IGlvbk9uSWNvbixcclxuICAgICAgICBvZmZJY29uTmFtZSA9IGlvbk9mZkljb24sXHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgc3ViVGl0bGUgPSBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlID0gKCkgPT4gY29uc29sZS53YXJuKFwiTm8gb25DaGFuZ2UgZ2l2ZW4gdG8gY2hlY2tib3hcIilcclxuICAgIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGljb25OYW1lID0gKGNoZWNrZWQgPT09IHRydWUpID8gb25JY29uTmFtZSA6IG9mZkljb25OYW1lO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBsYWJlbDtcclxuXHJcbiAgICBpZiAoc3ViVGl0bGUgIT09IG51bGwpIHtcclxuICAgICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1jb3JlLXN1YnRpdGxlXCI+e3N1YlRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVJLlRvdWNoYWJsZSBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJjaGVja2JveC1jb3JlLWNvbnRhaW5lclwiIG9uVGFwPXsoKSA9PiBvbkNoYW5nZSghY2hlY2tlZCl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWNvcmUtaWNvblwiIGRhdGEtY2hlY2tlZD17Y2hlY2tlZH0+XHJcbiAgICAgICAgICAgICAgICA8Q2VudGVyQ29udGVudCBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17aWNvbk5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NlbnRlckNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWNvcmUtbGFiZWxcIj57Y29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgey8qPFJpcHBsZSAvPiovfVxyXG4gICAgICAgIDwvVUkuVG91Y2hhYmxlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xyXG4iLCJpbXBvcnQge2RlZmluZUNvbXBvbmVudFN0eWxlfSBmcm9tIFwibGliLXNvdXJjZS92Mi9zdHlsZS5qc1wiO1xyXG5cclxuZGVmaW5lQ29tcG9uZW50U3R5bGUoXHJcbiAgICAnaWNvbicsXHJcbiAgICAnY29yZScsXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZW50XCI6IHtcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJJb25pY1wiLFxyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAyLFxyXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogMlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuY29uc3QgSWNvbiA9ICh7bmFtZSwgc3R5bGVOYW1lID0gJ2NvcmUnLCBzaXplfSkgPT5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT17YGljb24tJHtzdHlsZU5hbWV9LWNvbnRlbnRgfSBzdHlsZT17e2ZvbnRTaXplOiBzaXplfX0+e2lvbmljW25hbWVdfTwvc3Bhbj47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uO1xyXG4iLCJjb25zdCBJbWFnZSA9ICh7c291cmNlLCB3aWR0aCwgaGVpZ2h0ID0gbnVsbCwgaW1hZ2VTaXplID0gJ2ZpdCcsIGNvbG9yLCBibG9jayA9IGZhbHNlfSkgPT4ge1xyXG4gICAgaWYgKGhlaWdodCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5lZWQgdG8gZ2l2ZSBpbWFnZSBoZWlnaHRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgPT09IHRydWUgPyBcImJsb2NrXCIgOiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7c291cmNlfVwiKWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHRcclxuICAgIH07XHJcblxyXG4gICAgc3dpdGNoIChpbWFnZVNpemUpIHtcclxuICAgICAgICBjYXNlICdmaXQnOlxyXG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2NsaXAnOlxyXG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGltYWdlU2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGV9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XHJcbiIsImltcG9ydCB7ZGVmaW5lQ29tcG9uZW50U3R5bGV9IGZyb20gXCJsaWItc291cmNlL3YyL3N0eWxlXCI7XHJcbi8vIGltcG9ydCBSaXBwbGUgZnJvbSBcImxpYi1zb3VyY2UvdWl2Mi9SaXBwbGVcIjtcclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ3RvZ2dsZScsXHJcbiAgICAnY29yZScsXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250YWluZXJcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgNTAwbXMgbGluZWFyJyxcclxuICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY29udGFpbmVyOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNzUpJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRvZ2dsZS1jb250YWluZXJcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgcmlnaHQ6IDEzLFxyXG4gICAgICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogOCxcclxuICAgICAgICAgICAgZm9udFNpemU6IDExLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE1LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyYXknLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjJweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidG9nZ2xlLWNvbnRhaW5lcltkYXRhLW9uPSd0cnVlJ11cIjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYmVkMGJkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0b2dnbGVcIjoge1xyXG4gICAgICAgICAgICBXZWJraXRUcmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciAxNTBtcyBsaW5lYXIsIC13ZWJraXQtdHJhbnNmb3JtIDE1MG1zIGxpbmVhcicsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGxpbmVhciwgdHJhbnNmb3JtIDE1MG1zIGxpbmVhcicsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICBsZWZ0OiAtMTEsXHJcbiAgICAgICAgICAgIHRvcDogLTcsXHJcbiAgICAgICAgICAgIC8vIHRvcDogJzUwJScsXHJcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMixcclxuICAgICAgICAgICAgd2lkdGg6IDIyLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE1LFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyxcclxuICAgICAgICAgICAgYm94U2hhZG93OiAnMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidG9nZ2xlW2RhdGEtb249J2ZhbHNlJ11cIjoge1xyXG4gICAgICAgICAgICAvLyBsZWZ0OiAwLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRvZ2dsZVtkYXRhLW9uPSd0cnVlJ11cIjoge1xyXG4gICAgICAgICAgICAvLyByaWdodDogMCxcclxuICAgICAgICAgICAgLy8gbGVmdDogMzAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMzBweCknLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjRiMzI0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMsXHJcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogNzAsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdWJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmNvbnN0IFRvZ2dsZSA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBvbiA9IGZhbHNlLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHN1YlRpdGxlID0gbnVsbCxcclxuICAgICAgICBvbkNoYW5nZSA9ICgpID0+IGNvbnNvbGUud2FybihcIk5vIG9uQ2hhbmdlIGdpdmVuIHRvIGNoZWNrYm94XCIpXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBsZXQgY29udGVudCA9IGxhYmVsO1xyXG4gICAgbGV0IHRvZ2dsZVN0eWxlO1xyXG5cclxuICAgIGlmIChzdWJUaXRsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWNvcmUtc3VidGl0bGVcIj57c3ViVGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VUkuVG91Y2hhYmxlIGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cInRvZ2dsZS1jb3JlLWNvbnRhaW5lclwiIG9uVGFwPXsoKSA9PiBvbkNoYW5nZSghb24pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtY29yZS1sYWJlbFwiPntjb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1jb3JlLXRvZ2dsZS1jb250YWluZXJcIiBkYXRhLW9uPXtvbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1jb3JlLXRvZ2dsZVwiIGRhdGEtb249e29ufSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qPFJpcHBsZSAvPiovfVxyXG4gICAgICAgIDwvVUkuVG91Y2hhYmxlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcclxuIiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xyXG5jb25zdCB7c3FydH0gPSBNYXRoO1xyXG5cclxubGV0IFRvdWNoYWJsZTtcclxuXHJcblRvdWNoYWJsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHRvdWNoU3RhcnQoZXZ0KSB7XHJcbiAgICAgICAgY29uc3Qge29uVG91Y2hTdGFydH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IFt0b3VjaF0gPSBldnQuY2hhbmdlZFRvdWNoZXM7XHJcblxyXG4gICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmNsYXNzTGlzdC5hZGQoXCJjb3ItdG91Y2gtYWN0aXZlXCIpO1xyXG4gICAgICAgIGlmIChvblRvdWNoU3RhcnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQoZXZ0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5mbyA9IHtcclxuICAgICAgICAgICAgaWQ6IHRvdWNoLmlkZW50aWZpZXIsXHJcbiAgICAgICAgICAgIHg6IHRvdWNoLnBhZ2VYLFxyXG4gICAgICAgICAgICB5OiB0b3VjaC5wYWdlWVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdG91Y2hNb3ZlKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IHtvblRvdWNoTW92ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChvblRvdWNoTW92ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlKGV2dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldnQuY2hhbmdlZFRvdWNoZXM6OmZvckVhY2godG91Y2ggPT4ge1xyXG4gICAgICAgICAgICBpZiAodG91Y2guaWRlbnRpZmllciAhPT0gdGhpcy5pbmZvLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzcXJ0KCh0b3VjaC5wYWdlWCAtIHRoaXMuaW5mby54KSAqKiAyICsgKHRvdWNoLnBhZ2VZIC0gdGhpcy5pbmZvLnkpICoqIDIpID4gMjUpIHtcclxuICAgICAgICAgICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmNsYXNzTGlzdC5yZW1vdmUoXCJjb3ItdG91Y2gtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG91Y2hFbmQoZXZ0KSB7XHJcbiAgICAgICAgY29uc3Qge29uVG91Y2hFbmR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAob25Ub3VjaEVuZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9uVG91Y2hFbmQoZXZ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZ0LmNoYW5nZWRUb3VjaGVzOjpmb3JFYWNoKHRvdWNoID0+IHtcclxuICAgICAgICAgICAgaWYgKHRvdWNoLmlkZW50aWZpZXIgIT09IHRoaXMuaW5mby5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5jbGFzc0xpc3QucmVtb3ZlKFwiY29yLXRvdWNoLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLnByb3BzLm9uVG91Y2hFbmQoZXZ0KTtcclxuICAgIH0sXHJcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtub2RlfSA9IHRoaXMucmVmcztcclxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICd0YXAnLFxyXG4gICAgICAgICAgICBldnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge29uVGFwfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob25UYXAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXM6Om9uVGFwKGV2dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyA6OnRoaXMucHJvcHMub25UYXAoZXZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnaG9sZCcsXHJcbiAgICAgICAgICAgIGV2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7b25Ib2xkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob25Ib2xkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzOjpvbkhvbGQoZXZ0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIDo6dGhpcy5wcm9wcy5vbkhvbGQoZXZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtjb21wb25lbnQgPSBudWxsLCBjaGlsZHJlbiwgb25UYXAsIG9uSG9sZCwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50UHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzLFxyXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMudG91Y2hTdGFydCxcclxuICAgICAgICAgICAgb25Ub3VjaE1vdmU6IHRoaXMudG91Y2hNb3ZlLFxyXG4gICAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLnRvdWNoRW5kLFxyXG4gICAgICAgICAgICBvblRvdWNoQ2FuY2VsOiB0aGlzLnRvdWNoRW5kXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKENvbXBvbmVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHBhc3MgYSBjb21wb25lbnQgaW50byBUb3VjaGFibGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPENvbXBvbmVudCByZWY9XCJub2RlXCIgey4uLmNvbXBvbmVudFByb3BzfT57Y2hpbGRyZW59PC9Db21wb25lbnQ+O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvdWNoYWJsZTtcclxuIiwiaW1wb3J0IHtkZWZpbmVDb21wb25lbnRTdHlsZSwgVGhlbWV9IGZyb20gXCJsaWItc291cmNlL3YyL3N0eWxlLmpzXCI7XHJcbmltcG9ydCBSaXBwbGUgZnJvbSBcImxpYi1zb3VyY2UvdWl2Mi9yaXBwbGUuanNcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnbGliLXNvdXJjZS91aXYyL2ljb24uanMnO1xyXG5pbXBvcnQgVG91Y2hhYmxlIGZyb20gJ2xpYi1zb3VyY2UvdWl2Mi9Ub3VjaGFibGUnO1xyXG5cclxuZGVmaW5lQ29tcG9uZW50U3R5bGUoXHJcbiAgICAnYnV0dG9uJyxcclxuICAgICdjb3JlJyxcclxuICAgIHtcclxuICAgICAgICBcIndyYXBwZXJcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgbWFyZ2luOiA0LFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgIHpJbmRleDogXCIrMFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAoKSA9PiBUaGVtZS52YXJpYWJsZS5jb3JlLmJ1dHRvbi50ZXh0Q29sb3IsXHJcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAncHJlJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3cmFwcGVyOmZvY3VzXCI6IHtcclxuICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndyYXBwZXJbZGlzYWJsZWRdXCI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VhZWFlYScsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2EwYTBhMCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidGV4dC13cmFwcGVyXCI6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ3RhYmxlJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0ZXh0XCI6IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAxNSxcclxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAxNSxcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid3JhcHBlciA+IG92ZXJsYXlcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciA1MDBtcyBsaW5lYXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIi5jb3JlLWRlc2t0b3Agb3ZlcmxheTpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNSknXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndyYXBwZXI6YWN0aXZlID4gb3ZlcmxheVwiOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNzUpJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG4vKlxyXG4gICAgdGV4dFxyXG4gICAgb25UYXBcclxuICAgIHN0eWxlTmFtZVxyXG4qL1xyXG5jb25zdCBCdXR0b24gPSBwcm9wcyA9PiB7XHJcbiAgICBsZXQge1xyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgb25UYXAgPSAoKSA9PiBjb25zb2xlLndhcm4oXCJObyBvblRhcCBnaXZlbiB0byBCdXR0b25cIiksXHJcbiAgICAgICAgc3R5bGVOYW1lID0gXCJjb3JlXCIsXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgdGV4dENvbG9yLFxyXG4gICAgICAgIGZsdXNoLFxyXG4gICAgICAgIGJsb2NrLFxyXG4gICAgICAgIGZpbGwsXHJcbiAgICAgICAgcGFkZGluZyxcclxuICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICBpY29uTmFtZSA9IG51bGxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB3cmFwcGVyTmFtZSA9IGBidXR0b24tJHtzdHlsZU5hbWV9LXdyYXBwZXJgO1xyXG4gICAgY29uc3QgdGV4dFdyYXBwZXJOYW1lID0gYGJ1dHRvbi0ke3N0eWxlTmFtZX0tdGV4dC13cmFwcGVyYDtcclxuICAgIGNvbnN0IHRleHROYW1lID0gYGJ1dHRvbi0ke3N0eWxlTmFtZX0tdGV4dGA7XHJcbiAgICBjb25zdCBvdmVybGF5TmFtZSA9IGBidXR0b24tJHtzdHlsZU5hbWV9LW92ZXJsYXlgO1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXJTdHlsZSA9IHt9O1xyXG4gICAgY29uc3QgdGV4dFdyYXBwZXJTdHlsZSA9IHt9O1xyXG4gICAgbGV0IHJpcHBsZUVsZW1lbnQ7XHJcbiAgICBsZXQgb25UYXBIYW5kbGVyO1xyXG5cclxuICAgIGlmIChkaXNhYmxlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIHJpcHBsZUVsZW1lbnQgPSA8UmlwcGxlIC8+O1xyXG4gICAgICAgIG9uVGFwSGFuZGxlciA9IG9uVGFwO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrID09PSB0cnVlKSB7XHJcbiAgICAgICAgd3JhcHBlclN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbGwgPT09IHRydWUpIHtcclxuICAgICAgICBmbHVzaCA9IHRydWU7XHJcbiAgICAgICAgd3JhcHBlclN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIHdyYXBwZXJTdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgdGV4dFdyYXBwZXJTdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICB9XHJcbiAgICBpZiAoZmx1c2ggPT09IHRydWUpIHtcclxuICAgICAgICB3cmFwcGVyU3R5bGUubWFyZ2luID0gMDtcclxuICAgIH1cclxuICAgIGlmIChpY29uTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRleHQgPSA8c3Bhbj48SWNvbiBuYW1lPXtpY29uTmFtZX0gLz57dGV4dH08L3NwYW4+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRvdWNoYWJsZSBjb21wb25lbnQ9XCJkaXZcIiB0YWJJbmRleD17LTF9IGNsYXNzTmFtZT17d3JhcHBlck5hbWV9IG9uVGFwPXtvblRhcEhhbmRsZXJ9IGRpc2FibGVkPXtkaXNhYmxlZH0gc3R5bGU9e3dyYXBwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0ZXh0V3JhcHBlck5hbWV9IHN0eWxlPXt0ZXh0V3JhcHBlclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0ZXh0TmFtZX0+e3RleHR9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3ZlcmxheU5hbWV9IC8+XHJcbiAgICAgICAgICAgIHtyaXBwbGVFbGVtZW50fVxyXG4gICAgICAgIDwvVG91Y2hhYmxlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IHtkZWZpbmVDb21wb25lbnRTdHlsZX0gZnJvbSBcImxpYi1zb3VyY2UvdjIvc3R5bGUuanNcIjtcclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ2ljb24nLFxyXG4gICAgJ2NvcmUnLFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSW9uaWNcIixcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogMixcclxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbmNvbnN0IEljb24gPSAoe25hbWUsIHN0eWxlTmFtZSA9ICdjb3JlJywgc2l6ZX0pID0+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e2BpY29uLSR7c3R5bGVOYW1lfS1jb250ZW50YH0gc3R5bGU9e3tmb250U2l6ZTogc2l6ZX19Pntpb25pY1tuYW1lXX08L3NwYW4+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcclxuIiwiaW1wb3J0IHtkZWZpbmVDb21wb25lbnRTdHlsZSwgVGhlbWV9IGZyb20gXCJsaWItc291cmNlL3YyL3N0eWxlLmpzXCI7XHJcbmltcG9ydCBSaXBwbGUgZnJvbSBcImxpYi1zb3VyY2UvdWl2Mi9yaXBwbGUuanNcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnbGliLXNvdXJjZS91aXYyL2ljb24uanMnO1xyXG5cclxuZGVmaW5lQ29tcG9uZW50U3R5bGUoXHJcbiAgICAnaWNvbi1idXR0b24nLFxyXG4gICAgJ2NvcmUnLFxyXG4gICAge1xyXG4gICAgICAgIFwid3JhcHBlclwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBtYXJnaW46IDQsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgekluZGV4OiBcIiswXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgY29sb3I6ICgpID0+IFRoZW1lLnZhcmlhYmxlLmNvcmUuYnV0dG9uLnRleHRDb2xvcixcclxuICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbmNvbnN0IEljb25CdXR0b24gPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgc2l6ZSA9IDQyLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgaWNvblNpemUsXHJcbiAgICAgICAgc3R5bGVOYW1lID0gJ2NvcmUnXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlck5hbWUgPSBgaWNvbi1idXR0b24tJHtzdHlsZU5hbWV9LXdyYXBwZXJgO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVJLlRvdWNoYWJsZSBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9e3dyYXBwZXJOYW1lfSBzdHlsZT17e3dpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemV9fT5cclxuICAgICAgICAgICAgPFJpcHBsZSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb3JlLXRleHQtd3JhcHBlclwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvcmUtdGV4dFwiIHN0eWxlPXt7cGFkZGluZzogMH19PjxJY29uIG5hbWU9e25hbWV9IHNpemU9e2ljb25TaXplfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1VJLlRvdWNoYWJsZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uO1xyXG4iLCJpbXBvcnQge2RlZmluZUNvbXBvbmVudFN0eWxlfSBmcm9tIFwibGliLXNvdXJjZS92Mi9zdHlsZS5qc1wiO1xyXG5cclxuY29uc3QgYW5pbWF0aW9uRHVyYXRpb24gPSAzMDA7XHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ3JpcHBsZScsXHJcbiAgICAnY29yZScsXHJcbiAgICB7XHJcbiAgICAgICAgXCJ3cmFwcGVyXCI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgekluZGV4OiAnKzUnXHJcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkb3RcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBgcmlwcGxlLWNvcmUtYW5pbWF0aW9uLXJpcHBsZS1lZmZlY3QgJHthbmltYXRpb25EdXJhdGlvbn1tcyBsaW5lYXJgLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcyNTAlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkb3Q6YmVmb3JlXCI6IHtcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogJzEwMCUnLFxyXG4gICAgICAgICAgICBjb250ZW50OiBgXCJcImAsXHJcbiAgICAgICAgICAgIGZsb2F0OiAnbGVmdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiIXJpcHBsZS1lZmZlY3RcIjoge1xyXG4gICAgICAgICAgICBcIjAlXCI6IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLCAwKScsXHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiNzAlXCI6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4xKSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCIxMDAlXCI6IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAxKScsXHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogJzE1MCUnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjApJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuY2xhc3MgUmlwcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7bGlzdDogW119O1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoID0gKGV2dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtwb3NpdGlvbn0gPSBldnQudG91Y2g7XHJcbiAgICAgICAgY29uc3Qge3RvcCwgbGVmdH0gPSB0aGlzLnJlZnMud3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXJSaXBwbGUocG9zaXRpb24ueCAtIGxlZnQsIHBvc2l0aW9uLnkgLSB0b3ApO1xyXG4gICAgfVxyXG4gICAgdHJpZ2dlclJpcHBsZSA9ICh4ID0gbnVsbCwgeSkgPT4ge1xyXG4gICAgICAgIGxldCB7bGlzdH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoeCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB7d2lkdGgsIGhlaWdodH0gPSB0aGlzLnJlZnMud3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgeCA9IHdpZHRoIC8gMjtcclxuICAgICAgICAgICAgeSA9IGhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaHJvbm8udHJpZ2dlcihcclxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb24sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0OiB0aGlzLnN0YXRlLmxpc3Quc2xpY2UoMSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaXN0ID0gWy4uLmxpc3QsIHt4LCB5LCBpZDogRGF0ZS5ub3coKX1dO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge2xpc3R9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFVJLlRvdWNoYWJsZSBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJyaXBwbGUtY29yZS13cmFwcGVyXCIgb25UYXA9e3RoaXMudG91Y2h9IHJlZj1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIHtsaXN0Lm1hcCgoe2lkLCB4LCB5fSkgPT4gPGRpdiBrZXk9e2lkfSBzdHlsZT17e3RvcDogeSwgbGVmdDogeH19IGNsYXNzTmFtZT1cInJpcHBsZS1jb3JlLWRvdFwiIC8+KX1cclxuICAgICAgICAgICAgPC9VSS5Ub3VjaGFibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmlwcGxlO1xyXG4iLCJjb25zdCBjc3NOb01lYXN1cmVtZW50ID0gbmV3IFNldChbXHJcbiAgICBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCIsXHJcbiAgICBcImJveEZsZXhcIixcclxuICAgIFwiYm94RmxleEdyb3VwXCIsXHJcbiAgICBcImJveE9yZGluYWxHcm91cFwiLFxyXG4gICAgXCJjb2x1bW5Db3VudFwiLFxyXG4gICAgXCJmaWxsT3BhY2l0eVwiLFxyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcImZsZXhHcm93XCIsXHJcbiAgICBcImZsZXhQb3NpdGl2ZVwiLFxyXG4gICAgXCJmbGV4U2hyaW5rXCIsXHJcbiAgICBcImZsZXhOZWdhdGl2ZVwiLFxyXG4gICAgXCJmbGV4T3JkZXJcIixcclxuICAgIFwiZm9udFdlaWdodFwiLFxyXG4gICAgXCJsaW5lQ2xhbXBcIixcclxuICAgIFwibGluZUhlaWdodFwiLFxyXG4gICAgXCJvcGFjaXR5XCIsXHJcbiAgICBcIm9yZGVyXCIsXHJcbiAgICBcIm9ycGhhbnNcIixcclxuICAgIFwic3RvcE9wYWNpdHlcIixcclxuICAgIFwic3Ryb2tlRGFzaG9mZnNldFwiLFxyXG4gICAgXCJzdHJva2VPcGFjaXR5XCIsXHJcbiAgICBcInN0cm9rZVdpZHRoXCIsXHJcbiAgICBcInRhYlNpemVcIixcclxuICAgIFwid2lkb3dzXCIsXHJcbiAgICBcInpJbmRleFwiLFxyXG4gICAgXCJ6b29tXCJcclxuXSk7XHJcbmNvbnN0IGNzc1ByZWZpeE5hbWVzID0gbmV3IFNldChbXHJcbiAgICAndHJhbnNmb3JtJyxcclxuICAgICdib3gtc2hhZG93JyxcclxuICAgICd0cmFuc2l0aW9uJyxcclxuICAgICdhbmltYXRpb24nLFxyXG4gICAgJ2FuaW1hdGlvbkRlbGF5JyxcclxuICAgICdhbmltYXRpb25EaXJlY3Rpb24nLFxyXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uJyxcclxuICAgICdhbmltYXRpb25GaWxsTW9kZScsXHJcbiAgICAnYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQnLFxyXG4gICAgJ2FuaW1hdGlvbk5hbWUnLFxyXG4gICAgJ2FuaW1hdGlvblBsYXlTdGF0ZScsXHJcbiAgICAnYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24nXHJcbl0pO1xyXG5jb25zdCBjc3NQcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW1zLScsICctby0nLCAnJ107XHJcblxyXG5jb25zdCBnZXRDU1NWYWx1ZSA9IChwcm9wLCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUoKTtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZ2V0Q1NTVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgY3NzTm9NZWFzdXJlbWVudC5oYXMocHJvcCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdmFsdWUgKz0gXCJweFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt2YWx1ZV07XHJcbn07XHJcbmNvbnN0IHByb2Nlc3NTZWxlY3RvciA9IChjb21wb25lbnROYW1lLCBzdHlsZU5hbWUsIHNlbGVjdG9yKSA9PiB7XHJcbiAgICBjb25zdCBwYXJ0cyA9IHNlbGVjdG9yLnNwbGl0KC9cXHMrLyk7XHJcbiAgICBjb25zdCByZWFsUGFydHMgPSBwYXJ0cy5tYXAocGFydCA9PiB7XHJcbiAgICAgICAgcGFydCA9IHBhcnQucmVwbGFjZShcIjphY3RpdmVcIiwgXCIuY29yLXRvdWNoLWFjdGl2ZVwiKTtcclxuICAgICAgICByZXR1cm4gcGFydC5zcGxpdCgnLycpLm1hcChwYXJ0ID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHBhcnQuY2hhckF0KDApID09PSBcIiRcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFydC5zbGljZSgxKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgL15bYS16XS9pLnRlc3QocGFydCkgPT09IHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAuJHtjb21wb25lbnROYW1lfS0ke3N0eWxlTmFtZX0tJHtwYXJ0fWA7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuam9pbignLicpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVhbFBhcnRzLmpvaW4oJyAnKTtcclxufTtcclxuY29uc3QgcHJvY2Vzc0RlZiA9IChjc3NMaW5lcywgc2VsZWN0b3IsIGRlZnMpID0+IHtcclxuICAgIGNzc0xpbmVzID0gWy4uLmNzc0xpbmVzLCBgJHtzZWxlY3Rvcn0ge2BdO1xyXG4gICAgZm9yIChjb25zdCBbY3NzUHJvcCwgY3NzVmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRlZnMpKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRDU1NWYWx1ZShjc3NQcm9wLCBjc3NWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgcHJvcCA9IGNzc1Byb3AucmVwbGFjZSgvW0EtWl0vZywgbGV0dGVyID0+ICctJyArIGxldHRlci50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBpZiAoY3NzUHJlZml4TmFtZXMuaGFzKGNzc1Byb3ApID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNzc0xpbmVzID0gW1xyXG4gICAgICAgICAgICAgICAgLi4uY3NzTGluZXMsXHJcbiAgICAgICAgICAgICAgICAuLi5jc3NQcmVmaXhlcy5tYXAocHJlZml4ID0+IGBcXHQke3ByZWZpeH0ke3Byb3B9OiAke3ZhbHVlWzBdfTtgKVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNzc0xpbmVzID0gW1xyXG4gICAgICAgICAgICAgICAgLi4uY3NzTGluZXMsXHJcbiAgICAgICAgICAgICAgICAuLi52YWx1ZS5tYXAodmFsdWUgPT4gYFxcdCR7cHJvcH06ICR7dmFsdWV9O2ApXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3NzTGluZXMgPSBbLi4uY3NzTGluZXMsIFwifVwiXTtcclxuICAgIHJldHVybiBjc3NMaW5lcztcclxuICAgIC8vIGNzc0xpbmVzLnB1c2goXCJ9XCIpO1xyXG59O1xyXG5cclxuY29uc3QgY29tcG9uZW50U3R5bGVzID0ge307XHJcbmNvbnN0IGNyZWF0ZVByb3AgPSAob2JqZWN0LCBwcm9wTmFtZSwgZGVmYXVsdFZhbHVlKSA9PiB7XHJcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BOYW1lKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBvYmplY3RbcHJvcE5hbWVdID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdFtwcm9wTmFtZV07XHJcbn07XHJcbmNvbnN0IGRlZmluZUNvbXBvbmVudFN0eWxlID0gKGNvbXBvbmVudCwgc3R5bGVOYW1lLCBzdHlsZXMpID0+XHJcbiAgICBjcmVhdGVQcm9wKFxyXG4gICAgICAgIGNyZWF0ZVByb3AoY29tcG9uZW50U3R5bGVzLCBjb21wb25lbnQsIHt9KSxcclxuICAgICAgICBzdHlsZU5hbWUsXHJcbiAgICAgICAgc3R5bGVzXHJcbiAgICApO1xyXG5cclxuY29uc3QgY3JlYXRlU3R5bGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xyXG5cclxuICAgIC8vICBJdGVyYXRlIG92ZXIgdGhlIGNvbXBvbmVudHMgdGhhdCBoYXZlIHN0eWxlcyBkZWZpbmVkXHJcbiAgICBmb3IgKGNvbnN0IFtjb21wb25lbnROYW1lLCBzdHlsZXNdIG9mIE9iamVjdC5lbnRyaWVzKGNvbXBvbmVudFN0eWxlcykpIHtcclxuICAgICAgICAvLyAgSXRlcmF0ZSBvdmVyIHRoZSB2YXJpb3VzIG5hbWVkIHN0eWxlcyBmb3IgdGhlIGdpdmVuIGNvbXBvbmVudFxyXG4gICAgICAgIGZvciAoY29uc3QgW3N0eWxlTmFtZSwgc3R5bGVEZWZzXSBvZiBPYmplY3QuZW50cmllcyhzdHlsZXMpKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3NMaW5lcyA9IFtdO1xyXG4gICAgICAgICAgICAvLyAgR3JhYiBhbGwgdGhlIGluZGl2aWR1YWwgZ3JvdXBzIG9mIHN0eWxlcyBkZWZpbmVkIGluIHRoZSBuYW1lZCBzdHlsZVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtkZXNjcmlwdG9yLCBkZWZzXSBvZiBPYmplY3QuZW50cmllcyhzdHlsZURlZnMpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5zdGFydHNXaXRoKFwiIVwiKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICBSZXBlYXQgYW4gZXh0cmEgdGltZSB3aXRoIHByZWZpeGVkIGtleWZyYW1lcyBiZWNhdXNlIGlvcyA8IDkgaXMgcHJldHR5IGF3ZnVsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzTGluZXMucHVzaChgQC13ZWJraXQta2V5ZnJhbWVzICR7Y29tcG9uZW50TmFtZX0tJHtzdHlsZU5hbWV9LWFuaW1hdGlvbi0ke2Rlc2NyaXB0b3Iuc2xpY2UoMSl9IHtgKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgZGVmXSBvZiBPYmplY3QuZW50cmllcyhkZWZzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NMaW5lcyA9IHByb2Nlc3NEZWYoY3NzTGluZXMsIHNlbGVjdG9yLCBkZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjc3NMaW5lcy5wdXNoKFwifVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIG5vcm1hbCBAa2V5ZnJhbWVzIGNzc1xyXG4gICAgICAgICAgICAgICAgICAgIGNzc0xpbmVzLnB1c2goYEBrZXlmcmFtZXMgJHtjb21wb25lbnROYW1lfS0ke3N0eWxlTmFtZX0tYW5pbWF0aW9uLSR7ZGVzY3JpcHRvci5zbGljZSgxKX0ge2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCBkZWZdIG9mIE9iamVjdC5lbnRyaWVzKGRlZnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc0xpbmVzID0gcHJvY2Vzc0RlZihjc3NMaW5lcywgc2VsZWN0b3IsIGRlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0xpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHByb2Nlc3NTZWxlY3Rvcihjb21wb25lbnROYW1lLCBzdHlsZU5hbWUsIGRlc2NyaXB0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNzc0xpbmVzID0gcHJvY2Vzc0RlZihjc3NMaW5lcywgc2VsZWN0b3IsIGRlZnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVRhZy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9jc3NcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVGFnLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCBgJHtjb21wb25lbnROYW1lfS8ke3N0eWxlTmFtZX1gKTtcclxuICAgICAgICAgICAgc3R5bGVUYWcuaW5uZXJIVE1MID0gY3NzTGluZXMuam9pbignXFxuJyk7XHJcbiAgICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVUYWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmxldCB0aGVtZVZhbHVlcztcclxuY29uc3QgVGhlbWUgPSB7XHJcbiAgICBkZWZpbmUodGhlbWUpIHtcclxuICAgICAgICB0aGVtZVZhbHVlcyA9IHRoZW1lO1xyXG4gICAgfSxcclxuICAgIGdldCB2YXJpYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhlbWVWYWx1ZXM7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkZWZpbmVDb21wb25lbnRTdHlsZSxcclxuICAgIFRoZW1lLFxyXG4gICAgX19zZXR1cDogY3JlYXRlU3R5bGVzXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9lbnRyaWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc2V0XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRhc3NpZ24gPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9PYmplY3QkYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkY3JlYXRlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9PYmplY3Qkc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gX09iamVjdCRjcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9PYmplY3Qkc2V0UHJvdG90eXBlT2YgPyBfT2JqZWN0JHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5BcnJheS5mcm9tOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmFzc2lnbjsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkLmNyZWF0ZShQLCBEKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhULCBEKXtcbiAgcmV0dXJuICQuc2V0RGVzY3MoVCwgRCk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmVudHJpZXM7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy8kLmNvcmUnKS5Qcm9taXNlOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zZXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvJC5jb3JlJykuU2V0OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLlN5bWJvbDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSAoTyA9IE9iamVjdChpdCkpW1RBR10pID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGhpZGUgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBzdHJpY3ROZXcgICAgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpXG4gICwgZGVmaW5lZCAgICAgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKVxuICAsIGZvck9mICAgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsICRpdGVyRGVmaW5lICA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSUQgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpKCdpZCcpXG4gICwgJGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgaXNPYmplY3QgICAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgc2V0U3BlY2llcyAgID0gcmVxdWlyZSgnLi8kLnNldC1zcGVjaWVzJylcbiAgLCBERVNDUklQVE9SUyAgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgaXNPYmplY3RcbiAgLCBTSVpFICAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSdcbiAgLCBpZCAgICAgICAgICAgPSAwO1xuXG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoISRoYXMoaXQsIElEKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IGlkIHRvIGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIGlkXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG9iamVjdCBpZFxuICAgIGhpZGUoaXQsIElELCArK2lkKTtcbiAgLy8gcmV0dXJuIG9iamVjdCBpZCB3aXRoIHByZWZpeFxuICB9IHJldHVybiAnTycgKyBpdFtJRF07XG59O1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpe1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcbiAgaWYoaW5kZXggIT09ICdGJylyZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIHN0cmljdE5ldyh0aGF0LCBDLCBOQU1FKTtcbiAgICAgIHRoYXQuX2kgPSAkLmNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKSQuc2V0RGVzYyhDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcbiAgICAgICwgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYoZW50cnkpe1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYoIXRoYXQuX2YpdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYoaW5kZXggIT09ICdGJyl0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICAgICB0aGlzLl90ID0gaXRlcmF0ZWQ7ICAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgLCBraW5kICA9IHRoYXQuX2tcbiAgICAgICAgLCBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpe1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBmb3JPZiAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgY2xhc3NvZiA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvck9mKHRoaXMsIGZhbHNlLCBhcnIucHVzaCwgYXJyKTtcbiAgICByZXR1cm4gYXJyO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBmYWlscyAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgcmVkZWZpbmVBbGwgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJylcbiAgLCBmb3JPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIHN0cmljdE5ldyAgICAgID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIGlmKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgc3RyaWN0TmV3KHRhcmdldCwgQywgTkFNRSk7XG4gICAgICB0YXJnZXQuX2MgPSBuZXcgQmFzZTtcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgICQuZWFjaC5jYWxsKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcycuc3BsaXQoJywnKSxmdW5jdGlvbihLRVkpe1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmKEtFWSBpbiBwcm90byAmJiAhKElTX1dFQUsgJiYgS0VZID09ICdjbGVhcicpKWhpZGUoQy5wcm90b3R5cGUsIEtFWSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGlmKCFJU19BRERFUiAmJiBJU19XRUFLICYmICFpc09iamVjdChhKSlyZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCdzaXplJyBpbiBwcm90bykkLnNldERlc2MoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBrZXlzICAgICAgID0gJC5nZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gJC5pc0VudW1cbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlrZXlzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQpe1xuICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gIH1cbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCBnZXROYW1lcyAgPSByZXF1aXJlKCcuLyQnKS5nZXROYW1lc1xuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdldE5hbWVzKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIGlmKHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nKXJldHVybiBnZXRXaW5kb3dOYW1lcyhpdCk7XG4gIHJldHVybiBnZXROYW1lcyh0b0lPYmplY3QoaXQpKTtcbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvICAgICAgID0gcmVxdWlyZSgnLi8kJykuZ2V0UHJvdG9cbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsIG1ldGhvZHMsIGtleTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkbmF0aXZlKXtcbiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90bygkZGVmYXVsdC5jYWxsKG5ldyBCYXNlKSk7XG4gICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgIC8vIEZGIGZpeFxuICAgIGlmKCFMSUJSQVJZICYmIGhhcyhwcm90bywgRkZfSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gICAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gICAgfVxuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKVxuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyBzYWZlID0gdHJ1ZTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwidmFyICRPYmplY3QgPSBPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcbn07IiwidmFyICQgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gJC5nZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vJC50YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi8kLmNvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxudmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgdmFyIHBhcmVudCwgZG9tYWluLCBmbjtcbiAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpe1xuICAgIHByb2Nlc3MuZG9tYWluID0gbnVsbDtcbiAgICBwYXJlbnQuZXhpdCgpO1xuICB9XG4gIHdoaWxlKGhlYWQpe1xuICAgIGRvbWFpbiA9IGhlYWQuZG9tYWluO1xuICAgIGZuICAgICA9IGhlYWQuZm47XG4gICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgIGZuKCk7IC8vIDwtIGN1cnJlbnRseSB3ZSB1c2UgaXQgb25seSBmb3IgUHJvbWlzZSAtIHRyeSAvIGNhdGNoIG5vdCByZXF1aXJlZFxuICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xufTtcblxuLy8gTm9kZS5qc1xuaWYoaXNOb2RlKXtcbiAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgfTtcbi8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxufSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgdmFyIHRvZ2dsZSA9IDFcbiAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gLXRvZ2dsZTtcbiAgfTtcbi8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG59IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZmx1c2gpO1xuICB9O1xuLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbi8vIC0gc2V0SW1tZWRpYXRlXG4vLyAtIE1lc3NhZ2VDaGFubmVsXG4vLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4vLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuLy8gLSBzZXRUaW1lb3V0XG59IGVsc2Uge1xuICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhc2FwKGZuKXtcbiAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWQsIGRvbWFpbjogaXNOb2RlICYmIHByb2Nlc3MuZG9tYWlufTtcbiAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICBpZighaGVhZCl7XG4gICAgaGVhZCA9IHRhc2s7XG4gICAgbm90aWZ5KCk7XG4gIH0gbGFzdCA9IHRhc2s7XG59OyIsIi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0Jyk7XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgYSA9IE9iamVjdC5hc3NpZ25cbiAgICAsIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gYSh7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cyhhKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCAkJCAgICA9IGFyZ3VtZW50c1xuICAgICwgJCRsZW4gPSAkJC5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0S2V5cyAgICA9ICQuZ2V0S2V5c1xuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9sc1xuICAgICwgaXNFbnVtICAgICA9ICQuaXNFbnVtO1xuICB3aGlsZSgkJGxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdCgkJFtpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9XG4gIHJldHVybiBUO1xufSA6IE9iamVjdC5hc3NpZ247IiwidmFyICQgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIGlzRW51bSAgICA9ICQuaXNFbnVtO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc0VudHJpZXMpe1xuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoaXQpXG4gICAgICAsIGtleXMgICA9ICQuZ2V0S2V5cyhPKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBpICAgICAgPSAwXG4gICAgICAsIHJlc3VsdCA9IFtdXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpe1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmhpZGUnKTsiLCIvLyA3LjIuOSBTYW1lVmFsdWUoeCwgeSlcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpe1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07IiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGdldERlc2MgID0gcmVxdWlyZSgnLi8kJykuZ2V0RGVzY1xuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi8kLmN0eCcpKEZ1bmN0aW9uLmNhbGwsIGdldERlc2MoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY29yZSAgICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gY29yZVtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSQuc2V0RGVzYyhDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuLyQnKS5zZXREZXNjXG4gICwgaGFzID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXRocm93IFR5cGVFcnJvcihuYW1lICsgXCI6IHVzZSB0aGUgJ25ldycgb3BlcmF0b3IhXCIpO1xuICByZXR1cm4gaXQ7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi8kLmNvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0bmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdG5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIHN0b3JlICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuLyQudWlkJylcbiAgLCBTeW1ib2wgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuU3ltYm9sO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgU3ltYm9sICYmIFN5bWJvbFtuYW1lXSB8fCAoU3ltYm9sIHx8IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXktaXRlcicpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuLyQuaXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgJCQgICAgICA9IGFyZ3VtZW50c1xuICAgICAgLCAkJGxlbiAgID0gJCQubGVuZ3RoXG4gICAgICAsIG1hcGZuICAgPSAkJGxlbiA+IDEgPyAkJFsxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpbmRleCAgID0gMFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihtYXBwaW5nKW1hcGZuID0gY3R4KG1hcGZuLCAkJGxlbiA+IDIgPyAkJFsyXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvcihyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vJC5vYmplY3QtYXNzaWduJyl9KTsiLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi8kLnNldC1wcm90bycpLnNldH0pOyIsbnVsbCwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIExJQlJBUlkgICAgPSByZXF1aXJlKCcuLyQubGlicmFyeScpXG4gICwgZ2xvYmFsICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBjbGFzc29mICAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsICRleHBvcnQgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBpc09iamVjdCAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpXG4gICwgc3RyaWN0TmV3ICA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JylcbiAgLCBmb3JPZiAgICAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgc2V0UHJvdG8gICA9IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXRcbiAgLCBzYW1lICAgICAgID0gcmVxdWlyZSgnLi8kLnNhbWUtdmFsdWUnKVxuICAsIFNQRUNJRVMgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vJC5zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCBhc2FwICAgICAgID0gcmVxdWlyZSgnLi8kLm1pY3JvdGFzaycpXG4gICwgUFJPTUlTRSAgICA9ICdQcm9taXNlJ1xuICAsIHByb2Nlc3MgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIFAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBXcmFwcGVyO1xuXG52YXIgdGVzdFJlc29sdmUgPSBmdW5jdGlvbihzdWIpe1xuICB2YXIgdGVzdCA9IG5ldyBQKGZ1bmN0aW9uKCl7fSk7XG4gIGlmKHN1Yil0ZXN0LmNvbnN0cnVjdG9yID0gT2JqZWN0O1xuICByZXR1cm4gUC5yZXNvbHZlKHRlc3QpID09PSB0ZXN0O1xufTtcblxudmFyIFVTRV9OQVRJVkUgPSBmdW5jdGlvbigpe1xuICB2YXIgd29ya3MgPSBmYWxzZTtcbiAgZnVuY3Rpb24gUDIoeCl7XG4gICAgdmFyIHNlbGYgPSBuZXcgUCh4KTtcbiAgICBzZXRQcm90byhzZWxmLCBQMi5wcm90b3R5cGUpO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG4gIHRyeSB7XG4gICAgd29ya3MgPSBQICYmIFAucmVzb2x2ZSAmJiB0ZXN0UmVzb2x2ZSgpO1xuICAgIHNldFByb3RvKFAyLCBQKTtcbiAgICBQMi5wcm90b3R5cGUgPSAkLmNyZWF0ZShQLnByb3RvdHlwZSwge2NvbnN0cnVjdG9yOiB7dmFsdWU6IFAyfX0pO1xuICAgIC8vIGFjdHVhbCBGaXJlZm94IGhhcyBicm9rZW4gc3ViY2xhc3Mgc3VwcG9ydCwgdGVzdCB0aGF0XG4gICAgaWYoIShQMi5yZXNvbHZlKDUpLnRoZW4oZnVuY3Rpb24oKXt9KSBpbnN0YW5jZW9mIFAyKSl7XG4gICAgICB3b3JrcyA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBhY3R1YWwgVjggYnVnLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDE2MlxuICAgIGlmKHdvcmtzICYmIHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpKXtcbiAgICAgIHZhciB0aGVuYWJsZVRoZW5Hb3R0ZW4gPSBmYWxzZTtcbiAgICAgIFAucmVzb2x2ZSgkLnNldERlc2Moe30sICd0aGVuJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHRoZW5hYmxlVGhlbkdvdHRlbiA9IHRydWU7IH1cbiAgICAgIH0pKTtcbiAgICAgIHdvcmtzID0gdGhlbmFibGVUaGVuR290dGVuO1xuICAgIH1cbiAgfSBjYXRjaChlKXsgd29ya3MgPSBmYWxzZTsgfVxuICByZXR1cm4gd29ya3M7XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICBpZihMSUJSQVJZICYmIGEgPT09IFAgJiYgYiA9PT0gV3JhcHBlcilyZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHNhbWUoYSwgYik7XG59O1xudmFyIGdldENvbnN0cnVjdG9yID0gZnVuY3Rpb24oQyl7XG4gIHZhciBTID0gYW5PYmplY3QoQylbU1BFQ0lFU107XG4gIHJldHVybiBTICE9IHVuZGVmaW5lZCA/IFMgOiBDO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpLFxuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KVxufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHJlY29yZCwgaXNSZWplY3Qpe1xuICBpZihyZWNvcmQubilyZXR1cm47XG4gIHJlY29yZC5uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcmVjb3JkLmM7XG4gIGFzYXAoZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSByZWNvcmQudlxuICAgICAgLCBvayAgICA9IHJlY29yZC5zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXJlY29yZC5oID0gdHJ1ZTtcbiAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyID09PSB0cnVlID8gdmFsdWUgOiBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgY2hhaW4ubGVuZ3RoID0gMDtcbiAgICByZWNvcmQubiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0KXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHZhciBwcm9taXNlID0gcmVjb3JkLnBcbiAgICAgICAgLCBoYW5kbGVyLCBjb25zb2xlO1xuICAgICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IHJlY29yZC5hID0gdW5kZWZpbmVkO1xuICAgIH0sIDEpO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdmFyIHJlY29yZCA9IHByb21pc2UuX2RcbiAgICAsIGNoYWluICA9IHJlY29yZC5hIHx8IHJlY29yZC5jXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgaWYocmVjb3JkLmgpcmV0dXJuIGZhbHNlO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcmVjb3JkID0gdGhpcztcbiAgaWYocmVjb3JkLmQpcmV0dXJuO1xuICByZWNvcmQuZCA9IHRydWU7XG4gIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXG4gIHJlY29yZC52ID0gdmFsdWU7XG4gIHJlY29yZC5zID0gMjtcbiAgcmVjb3JkLmEgPSByZWNvcmQuYy5zbGljZSgpO1xuICBub3RpZnkocmVjb3JkLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciByZWNvcmQgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihyZWNvcmQuZClyZXR1cm47XG4gIHJlY29yZC5kID0gdHJ1ZTtcbiAgcmVjb3JkID0gcmVjb3JkLnIgfHwgcmVjb3JkOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihyZWNvcmQucCA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIGFzYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7cjogcmVjb3JkLCBkOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjb3JkLnYgPSB2YWx1ZTtcbiAgICAgIHJlY29yZC5zID0gMTtcbiAgICAgIG5vdGlmeShyZWNvcmQsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtyOiByZWNvcmQsIGQ6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgUCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgdmFyIHJlY29yZCA9IHRoaXMuX2QgPSB7XG4gICAgICBwOiBzdHJpY3ROZXcodGhpcywgUCwgUFJPTUlTRSksICAgICAgICAgLy8gPC0gcHJvbWlzZVxuICAgICAgYzogW10sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgICAgYTogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgICBzOiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICAgIGQ6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBkb25lXG4gICAgICB2OiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgIGg6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBoYW5kbGVkIHJlamVjdGlvblxuICAgICAgbjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgcmVjb3JkLCAxKSwgY3R4KCRyZWplY3QsIHJlY29yZCwgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbChyZWNvcmQsIGVycik7XG4gICAgfVxuICB9O1xuICByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJykoUC5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBQKSlcbiAgICAgICAgLCBwcm9taXNlICA9IHJlYWN0aW9uLnByb21pc2VcbiAgICAgICAgLCByZWNvcmQgICA9IHRoaXMuX2Q7XG4gICAgICByZWFjdGlvbi5vayAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVjb3JkLmMucHVzaChyZWFjdGlvbik7XG4gICAgICBpZihyZWNvcmQuYSlyZWNvcmQuYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHJlY29yZC5zKW5vdGlmeShyZWNvcmQsIGZhbHNlKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogUH0pO1xucmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJykoUCwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuLyQuc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuLyQuY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8IHRlc3RSZXNvbHZlKHRydWUpKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mIFAgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gIFAuYWxsKGl0ZXIpWydjYXRjaCddKGZ1bmN0aW9uKCl7fSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IGdldENvbnN0cnVjdG9yKHRoaXMpXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3RcbiAgICAgICwgdmFsdWVzICAgICA9IFtdO1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIHZhbHVlcy5wdXNoLCB2YWx1ZXMpO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHZhbHVlcy5sZW5ndGhcbiAgICAgICAgLCByZXN1bHRzICAgPSBBcnJheShyZW1haW5pbmcpO1xuICAgICAgaWYocmVtYWluaW5nKSQuZWFjaC5jYWxsKHZhbHVlcywgZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpe1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICBlbHNlIHJlc29sdmUocmVzdWx0cyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKVxuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnU2V0JywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmtleW9mJylcbiAgLCAkbmFtZXMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nZXQtbmFtZXMnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi8kLmVudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgZ2V0RGVzYyAgICAgICAgPSAkLmdldERlc2NcbiAgLCBzZXREZXNjICAgICAgICA9ICQuc2V0RGVzY1xuICAsIF9jcmVhdGUgICAgICAgID0gJC5jcmVhdGVcbiAgLCBnZXROYW1lcyAgICAgICA9ICRuYW1lcy5nZXRcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBzZXR0ZXIgICAgICAgICA9IGZhbHNlXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIGlzRW51bSAgICAgICAgID0gJC5pc0VudW1cbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgdXNlTmF0aXZlICAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKHNldERlc2Moe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHNldERlc2ModGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ2V0RGVzYyhPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBzZXREZXNjKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKXNldERlc2MoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBzZXREZXNjO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2wucHJvdG90eXBlKTtcbiAgc3ltLl9rID0gdGFnO1xuICBERVNDUklQVE9SUyAmJiBzZXR0ZXIgJiYgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpc2V0RGVzYyhpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gc2V0RGVzYyhpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5KTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XVxuICAgID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHZhciBEID0gZ2V0RGVzYyhpdCA9IHRvSU9iamVjdChpdCksIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTilyZXN1bHQucHVzaChrZXkpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gIHZhciBhcmdzID0gW2l0XVxuICAgICwgaSAgICA9IDFcbiAgICAsICQkICAgPSBhcmd1bWVudHNcbiAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gIHdoaWxlKCQkLmxlbmd0aCA+IGkpYXJncy5wdXNoKCQkW2krK10pO1xuICByZXBsYWNlciA9IGFyZ3NbMV07XG4gIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gIH07XG4gIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xufTtcbnZhciBidWdneUpTT04gPSAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSk7XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIXVzZU5hdGl2ZSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZihpc1N5bWJvbCh0aGlzKSl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHJldHVybiB3cmFwKHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCkpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgaXNTeW1ib2wgPSBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbiAgfTtcblxuICAkLmNyZWF0ZSAgICAgPSAkY3JlYXRlO1xuICAkLmlzRW51bSAgICAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICQuZ2V0RGVzYyAgICA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICQuc2V0RGVzYyAgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgJC5zZXREZXNjcyAgID0gJGRlZmluZVByb3BlcnRpZXM7XG4gICQuZ2V0TmFtZXMgICA9ICRuYW1lcy5nZXQgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgJC5nZXRTeW1ib2xzID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi8kLmxpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cbn1cblxudmFyIHN5bWJvbFN0YXRpY3MgPSB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn07XG4vLyAxOS40LjIuMiBTeW1ib2wuaGFzSW5zdGFuY2Vcbi8vIDE5LjQuMi4zIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVcbi8vIDE5LjQuMi40IFN5bWJvbC5pdGVyYXRvclxuLy8gMTkuNC4yLjYgU3ltYm9sLm1hdGNoXG4vLyAxOS40LjIuOCBTeW1ib2wucmVwbGFjZVxuLy8gMTkuNC4yLjkgU3ltYm9sLnNlYXJjaFxuLy8gMTkuNC4yLjEwIFN5bWJvbC5zcGVjaWVzXG4vLyAxOS40LjIuMTEgU3ltYm9sLnNwbGl0XG4vLyAxOS40LjIuMTIgU3ltYm9sLnRvUHJpbWl0aXZlXG4vLyAxOS40LjIuMTMgU3ltYm9sLnRvU3RyaW5nVGFnXG4vLyAxOS40LjIuMTQgU3ltYm9sLnVuc2NvcGFibGVzXG4kLmVhY2guY2FsbCgoXG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsJyArXG4gICdzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBmdW5jdGlvbihpdCl7XG4gIHZhciBzeW0gPSB3a3MoaXQpO1xuICBzeW1ib2xTdGF0aWNzW2l0XSA9IHVzZU5hdGl2ZSA/IHN5bSA6IHdyYXAoc3ltKTtcbn0pO1xuXG5zZXR0ZXIgPSB0cnVlO1xuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVywge1N5bWJvbDogJFN5bWJvbH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1N5bWJvbCcsIHN5bWJvbFN0YXRpY3MpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICF1c2VOYXRpdmUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCF1c2VOYXRpdmUgfHwgYnVnZ3lKU09OKSwgJ0pTT04nLCB7c3RyaW5naWZ5OiAkc3RyaW5naWZ5fSk7XG5cbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7IiwiLy8gaHR0cDovL2dvby5nbC9Ya0JyakRcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRlbnRyaWVzID0gcmVxdWlyZSgnLi8kLm9iamVjdC10by1hcnJheScpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhpdCl7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1NldCcsIHt0b0pTT046IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXRvLWpzb24nKSgnU2V0Jyl9KTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbkl0ZXJhdG9ycy5Ob2RlTGlzdCA9IEl0ZXJhdG9ycy5IVE1MQ29sbGVjdGlvbiA9IEl0ZXJhdG9ycy5BcnJheTsiLCIvLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPVxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXM7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogbW9kdWxlLmV4cG9ydHMsIF9fZXNNb2R1bGU6IHRydWUgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX1N5bWJvbCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9PYmplY3QkY3JlYXRlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9PYmplY3Qkc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9Qcm9taXNlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCIpW1wiZGVmYXVsdFwiXTtcblxuIShmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgX1N5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gX1N5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIGdlbmVyYXRvciA9IF9PYmplY3QkY3JlYXRlKChvdXRlckZuIHx8IEdlbmVyYXRvcikucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3IgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIGlmIChfT2JqZWN0JHNldFByb3RvdHlwZU9mKSB7XG4gICAgICBfT2JqZWN0JHNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBfT2JqZWN0JGNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudGAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuIFNvbWUgbWF5IGNvbnNpZGVyIHRoZSBuYW1lIG9mIHRoaXMgbWV0aG9kIHRvb1xuICAvLyBjdXRlc3ksIGJ1dCB0aGV5IGFyZSBjdXJtdWRnZW9ucy5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gbmV3IEF3YWl0QXJndW1lbnQoYXJnKTtcbiAgfTtcblxuICBmdW5jdGlvbiBBd2FpdEFyZ3VtZW50KGFyZykge1xuICAgIHRoaXMuYXJnID0gYXJnO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF9Qcm9taXNlLnJlc29sdmUodmFsdWUuYXJnKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX1Byb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcpIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiIHx8IG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gQSByZXR1cm4gb3IgdGhyb3cgKHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyB0aHJvd1xuICAgICAgICAgICAgLy8gbWV0aG9kKSBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKHJldHVybk1ldGhvZCkge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gocmV0dXJuTWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgYXJnKTtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmV0dXJuIG1ldGhvZCB0aHJldyBhbiBleGNlcHRpb24sIGxldCB0aGF0XG4gICAgICAgICAgICAgICAgLy8gZXhjZXB0aW9uIHByZXZhaWwgb3ZlciB0aGUgb3JpZ2luYWwgcmV0dXJuIG9yIHRocm93LlxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgb3V0ZXIgcmV0dXJuLCBub3cgdGhhdCB0aGUgZGVsZWdhdGVcbiAgICAgICAgICAgICAgLy8gaXRlcmF0b3IgaGFzIGJlZW4gdGVybWluYXRlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sIGRlbGVnYXRlLml0ZXJhdG9yLCBhcmcpO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMaWtlIHJldHVybmluZyBnZW5lcmF0b3IudGhyb3codW5jYXVnaHQpLCBidXQgd2l0aG91dCB0aGVcbiAgICAgICAgICAgIC8vIG92ZXJoZWFkIG9mIGFuIGV4dHJhIGZ1bmN0aW9uIGNhbGwuXG4gICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkWWllbGQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuc2VudCA9IGFyZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmUgPyBHZW5TdGF0ZUNvbXBsZXRlZCA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSAmJiBtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLFxuICAgICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICB0aGlzLnNlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uIGFicnVwdCh0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJiAodHlwZSA9PT0gXCJicmVha1wiIHx8IHR5cGUgPT09IFwiY29udGludWVcIikgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHwgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2goZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbiBfY2F0Y2godHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbi8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbi8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbnR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOiB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDogdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdW5kZWZpbmVkKTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8vIGltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XHJcbmltcG9ydCBJY29uIGZyb20gJ2xpYi1zb3VyY2UvdWl2Mi9pY29uJztcclxuaW1wb3J0IFJpcHBsZSBmcm9tICdsaWItc291cmNlL3VpdjIvcmlwcGxlJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdsaWItc291cmNlL3VpdjIvYnV0dG9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnbGliLXNvdXJjZS91aXYyL2ljb25idXR0b24nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdsaWItc291cmNlL3VpdjIvQ2FyZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdsaWItc291cmNlL3VpdjIvSW1hZ2UnO1xyXG5pbXBvcnQgQ2VudGVyQ29udGVudCBmcm9tICdsaWItc291cmNlL3VpdjIvQ2VudGVyQ29udGVudCc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdsaWItc291cmNlL3VpdjIvQ2hlY2tib3gnO1xyXG5pbXBvcnQgVG9nZ2xlIGZyb20gJ2xpYi1zb3VyY2UvdWl2Mi9Ub2dnbGUnO1xyXG5pbXBvcnQgVG91Y2hhYmxlIGZyb20gJ2xpYi1zb3VyY2UvdWl2Mi9Ub3VjaGFibGUnO1xyXG5pbXBvcnQge2RlZmluZUNvbXBvbmVudFN0eWxlLCBUaGVtZSBhcyBfVGhlbWUsIF9fc2V0dXAgYXMgY3JlYXRlU3R5bGVzfSBmcm9tIFwibGliLXNvdXJjZS92Mi9zdHlsZVwiO1xyXG5cclxuY29uc3QgcmFuZ2UgPSBmdW5jdGlvbiogKGFyZ3MpIHtcclxuICBsZXQge3N0YXJ0ID0gMCwgZW5kID0gbnVsbCwgY291bnQgPSBudWxsLCBzdGVwID0gMSwgbWFwID0gaSA9PiBpfSA9IGFyZ3M7XHJcblxyXG4gIGlmIChlbmQgPT09IG51bGwpIHtcclxuICAgIGlmIChjb3VudCA9PT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGdpdmUgdGhlIHNpemUgb2YgdGhlIHJhbmdlXCIpXHJcbiAgICB9XHJcbiAgICBlbmQgPSBzdGFydCArIGNvdW50O1xyXG4gIH1cclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGlmIChzdGFydCA+PSBlbmQpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB5aWVsZCBtYXAoc3RhcnQpO1xyXG4gICAgc3RhcnQgKz0gc3RlcDtcclxuICB9XHJcbn07XHJcblxyXG53aW5kb3cuZnJhbmdlID0gZnVuY3Rpb24qIChjb3VudCkge1xyXG4gICAgbGV0IGN1cnJlbnQgPSAwO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBpZiAoY3VycmVudCA9PT0gY291bnQpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHlpZWxkIGN1cnJlbnQ7XHJcbiAgICAgICAgY3VycmVudCArPSAxO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3Qge1JvdXRlfSA9IFJlYWN0Um91dGVyO1xyXG5cclxuY29uc3QgY29vbEJsdWUgPSBcIiMyRkIxREZcIjtcclxuXHJcblRoZW1lLmRlZmluZSh7XHJcbiAgICBhcHA6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgdGV4dENvbG9yOiAnIzc0NzQ3NCdcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgICBob3ZlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjExKScsXHJcbiAgICAgICAgYWN0aXZlQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgIHJhaXNlZDoge1xyXG4gICAgICAgICAgICBjb2xvcjogY29vbEJsdWUsXHJcbiAgICAgICAgICAgIHRleHRDb2xvcjogJ3doaXRlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gICAgcHJvZ3Jlc3NiYXI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQjNDRUVEJyxcclxuICAgICAgICBjb2xvcjogJyMzQjhBRjMnXHJcbiAgICB9LFxyXG4gICAgcmFkaW86IHtcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IGNvb2xCbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJhbmdlSW5wdXQ6IHtcclxuICAgICAgICB0cmFjazoge1xyXG4gICAgICAgICAgICBjb2xvcjogY29vbEJsdWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3dpdGNoOiB7XHJcbiAgICAgICAgdHJhY2s6IHtcclxuICAgICAgICAgICAgY29sb3I6IGNvb2xCbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb29sQmx1ZSxcclxuICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZSdcclxuICAgIH0sXHJcbiAgICB1c2VySW5wdXQ6IHtcclxuICAgICAgICBhY3RpdmVDb2xvcjogJyMyRkIxREYnLFxyXG4gICAgICAgIHRleHRDb2xvcjogJ2JsYWNrJ1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IFNjcmVlblRyYW5zaXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJSd9fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgIH1cclxufSk7XHJcblxyXG5TdHlsZS5fX3Jhd0NTUyhcclxuICAgIFwidGVzdFwiLFxyXG4gICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi50ZXN0LWVudGVyXCIsXHJcbiAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nOiAnbGVmdCAyNTBtcyBlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIGxlZnQ6ICcxMDAlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLnRlc3QtZW50ZXIudGVzdC1lbnRlci1hY3RpdmVcIixcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIudGVzdC1sZWF2ZVwiLFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzogJ2xlZnQgMjUwbXMgZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIudGVzdC1sZWF2ZS50ZXN0LWxlYXZlLWFjdGl2ZVwiLFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6ICctMTAwJSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi50ZXN0LWFwcGVhclwiLFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzogJ3RvcCAyNTBtcyBlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIHRvcDogJzEwMCUnLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLnRlc3QtYXBwZWFyLnRlc3QtYXBwZWFyLWFjdGl2ZVwiLFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENTU1RyYW5zaXRpb24gY29tcG9uZW50PVwiZGl2XCIgdHJhbnNpdGlvbk5hbWU9XCJ0ZXN0XCIgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MjUwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXsyNTB9PlxyXG4gICAgICAgICAgICAgICAgPFNjcmVlblRyYW5zaXRpb24ga2V5PXtEYXRlLm5vdygpfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvU2NyZWVuVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgRmlsbGVyID0gKHtjb2xvcn0pID0+IDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiBjb2xvcn19IC8+O1xyXG5jb25zdCB0ZXN0ID0gbiA9PiAoXHJcbiAgICA8VUkuQ2FyZCB0aXRsZT1cIlRlc3QgSXRlbVwiPntufTwvVUkuQ2FyZD5cclxuKTtcclxuXHJcbmNvbnN0IFRlc3QgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcclxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGlsZCwgY2hpbGQudHlwZS52YWx1ZU5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxyXG59O1xyXG5cclxuY2xhc3MgRm9ybWF0dGVkSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogXCJcIn07XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlID0gKGV2dCkgPT4ge1xyXG4gICAgICAgIGxldCB7dmFsdWV9ID0gZXZ0LnRhcmdldDtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlICsgdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuY2hhbmdlfSAvPlxyXG59XHJcblxyXG4vLyBjb25zdCBIb3JpeiA9ICh7Y2hpbGRyZW59KSA9PiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICAgIHtSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5tYXAoY2hpbGQgPT4gKX1cclxuLy8gICAgIDwvZGl2PlxyXG4vLyApO1xyXG5cclxuU3R5bGUuX19yYXdDU1MoXHJcbiAgICBcImRlbW9cIixcclxuICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIubm9ybWFsXCIsXHJcbiAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3lhbidcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG4vLyBjb25zdCBCdXR0b24gPSAoey4uLmJ1dHRvblByb3BzLCB0ZXh0fSkgPT4gPGJ1dHRvbiBzdHlsZT17e3doaXRlU3BhY2U6ICdwcmUnfX0gey4uLmJ1dHRvblByb3BzfT57dGV4dH08L2J1dHRvbj47XHJcbi8vIGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlTmFtZSA9PiB7XHJcbi8vICAgICBzdHlsZU5hbWUgPSBgJHtzdHlsZU5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtzdHlsZU5hbWUuc2xpY2UoMSl9YDtcclxuLy8gICAgIEJ1dHRvbltzdHlsZU5hbWVdID0gcHJvcHMgPT4gPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlTmFtZX0gey4uLnByb3BzfSAvPjtcclxuLy8gfTtcclxuLy9cclxuLy8gU3R5bGVkQnV0dG9uKFwibm9ybWFsXCIpO1xyXG5cclxuXHJcbl9UaGVtZS5kZWZpbmUoe1xyXG4gICAgY29yZToge1xyXG4gICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6IFwiYmxhY2tcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vLyB3aW5kb3cuYmVuY2htYXJrID0gKGl0ZXJhdGlvbnMsIGZpcnN0LCBzZWNvbmQpID0+IHtcclxuLy8gICAgIGNvbnN0IHIgPSBbXTtcclxuLy8gICAgIGZvciAoY29uc3QgdGVzdE51bSBvZiByYW5nZSh7Y291bnQ6IDMwfSkpIHtcclxuLy8gICAgICAgICBsZXQgYSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgaSArPSAxKSB7XHJcbi8vICAgICAgICAgICAgIGZpcnN0KCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGEgPSBwZXJmb3JtYW5jZS5ub3coKSAtIGE7XHJcbi8vXHJcbi8vICAgICAgICAgbGV0IGIgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnM7IGkgKz0gMSkge1xyXG4vLyAgICAgICAgICAgICBzZWNvbmQoKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgYiA9IHBlcmZvcm1hbmNlLm5vdygpIC0gYjtcclxuLy8gICAgICAgICByLnB1c2goW2EudG9GaXhlZCgzKSwgYi50b0ZpeGVkKDMpXSk7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gcjtcclxuLy8gfTtcclxuLy9cclxuLy8gY29uc3QgY2hlY2tQcm9wID0gKG9iaiwgcHJvcCwgdmFsdWUpID0+IG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSA9PT0gdHJ1ZSAmJiBvYmpbcHJvcF0gPT09IHZhbHVlO1xyXG4vLyBjb25zdCB4ID0ge2E6IDEwLCBiOiAxMn07XHJcbi8vIGNvbnN0IHJlcyA9IGJlbmNobWFyaygxZTYsICgpID0+IHR5cGVvZiB4LmMgPT09ICd1bmRlZmluZWQnLCAoKSA9PiB4LmMgPT09IHVuZGVmaW5lZCk7XHJcbi8vIGNvbnNvbGUubG9nKHJlcy5tYXAoaSA9PiBpLmpvaW4oJ1xcdCcpKS5qb2luKCdcXG4nKSk7XHJcblxyXG4vKlxyXG5jb25zdCB1cmwgPSBcImh0dHA6Ly92aWduZXR0ZTEud2lraWEubm9jb29raWUubmV0L2JheW9uZXR0YS9pbWFnZXMvZS9lMy9DZXJlemFfQmF5b25ldHRhXzJfcmVuZGVyLnBuZy9yZXZpc2lvbi9sYXRlc3Q/Y2I9MjAxNDA2MTUyMTAwMjVcIjtcclxuKi9cclxuY29uc3QgdXJsID0gXCJodHRwOi8vYXNzZXRzMS5pZ25pbWdzLmNvbS90aHVtYnMvdXNlclVwbG9hZGVkLzIwMTQvMTAvMTIvQmF5b25ldHRhMl8xMjgwLTE0MTMxNDI0NTExMDAuanBnXCI7XHJcblxyXG5jb25zdCBhbmltYXRpb25UaW1lID0gMjUwO1xyXG5kZWZpbmVDb21wb25lbnRTdHlsZShcclxuICAgICdkaWFsb2cnLFxyXG4gICAgJ2NvcmUnLFxyXG4gICAge1xyXG4gICAgICAgIFwib3ZlcmxheVwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMzUpJyxcclxuICAgICAgICAgICAgekluZGV4OiAnKzEwMCcsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICdhdXRvJyxcclxuICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHthbmltYXRpb25UaW1lfW1zIGxpbmVhcmBcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogJ25vbmUnXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXCJ3aW5kb3dcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICB3aWR0aDogJzc1JScsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA0ODBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid2luZG93LXRvcFwiOiB7XHJcbiAgICAgICAgICAgIHRvcDogJzE1JScsXHJcbiAgICAgICAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3aW5kb3ctY2VudGVyXCI6IHtcclxuICAgICAgICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSdcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcImNvbnRlbnRcIjoge1xyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6ICc0MHZoJyxcclxuICAgICAgICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBcIi53aW5kb3dcIjoge1xyXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAvLyAgICAgdG9wOiAnMTUlJyxcclxuICAgICAgICAvLyAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgLy8gICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgLy8gICAgIGJveFNoYWRvdzogJzBweCAwcHggMzVweCByZ2JhKDAsIDAsIDAsIDAuNiknLFxyXG4gICAgICAgIC8vICAgICB3aWR0aDogJzcwJScsXHJcbiAgICAgICAgLy8gICAgIG1heFdpZHRoOiA0ODAsXHJcbiAgICAgICAgLy8gICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgLy8gICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuNXMnLFxyXG4gICAgICAgIC8vICAgICBib3JkZXJSYWRpdXM6IDNcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vICcuY29udGVudCc6IHtcclxuICAgICAgICAvLyAgICAgbWF4SGVpZ2h0OiAnNDB2aCcsXHJcbiAgICAgICAgLy8gICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxyXG4gICAgICAgIC8vICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgIC8vICAgICBwYWRkaW5nOiAxNSxcclxuICAgICAgICAvLyAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWigwKSdcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIFwiLnRpdGxlXCI6IHtcclxuICAgICAgICAvLyAgICAgbGluZUhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIC8vICAgICBwYWRkaW5nOiAxNSxcclxuICAgICAgICAvLyAgICAgcGFkZGluZ1RvcDogMTAsXHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmdCb3R0b206IDAsXHJcbiAgICAgICAgLy8gICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAvLyAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICAgIC8vICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gXCIuYnV0dG9uc1wiOiB7XHJcbiAgICAgICAgLy8gICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgICAgICAvLyAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAvLyAgICAgaGVpZ2h0OiAzNVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBcIi5sb2FkU3Bpbm5lclwiOiB7XHJcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIC8vICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICAgIC8vICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICAvLyAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgICAgICAvLyAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIC8vICAgICBib3JkZXJSYWRpdXM6IDMsXHJcbiAgICAgICAgLy8gICAgIG1pbldpZHRoOiA1NFxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmxldCBjdXJyZW50RGlhbG9nID0gbnVsbDtcclxud2luZG93LmRpYWxvZyA9IHtcclxuICAgIGdldCBjdXJyZW50KCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50RGlhbG9nO1xyXG4gICAgfVxyXG59O1xyXG5jbGFzcyBEaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICAgICAgb3BhY2l0eTogbnVsbCxcclxuICAgICAgICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgICAgICAgcG9zOiAndG9wJyxcclxuICAgICAgICAgICAgY29udGVudDogbnVsbCxcclxuICAgICAgICAgICAgcmVzcG9uc2U6IGNibG9nLFxyXG4gICAgICAgICAgICBjbG9zYWJsZTogIXRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyA9IGFzeW5jIChzdHlsZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiAnYmxvY2snfSk7XHJcbiAgICAgICAgYXdhaXQgY2hyb25vLndhaXQoNTApO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wYWNpdHk6IDF9KTtcclxuICAgICAgICBhd2FpdCBjaHJvbm8ud2FpdChhbmltYXRpb25UaW1lKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaGlkZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYW5pbWF0aW5nLCB0aGlzLmFuaW1hdGluZyA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wYWNpdHk6IG51bGx9KTtcclxuICAgICAgICBhd2FpdCBjaHJvbm8ud2FpdChhbmltYXRpb25UaW1lKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiBudWxsfSk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuc3RhdGUucmVzcG9uc2UodmFsdWUpKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNsb3NhYmxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGlkZSh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgc3RvcHBlciA9IChldnQpID0+IHtcclxuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY3VycmVudERpYWxvZyA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcclxuICAgICAgICBjdXJyZW50RGlhbG9nID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge2Rpc3BsYXksIG9wYWNpdHksIHBvcywgY29udGVudH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VG91Y2hhYmxlIGNvbXBvbmVudD1cImRpdlwiIG9uVGFwPXt0aGlzLmNsb3NlfSBjbGFzc05hbWU9XCJkaWFsb2ctY29yZS1vdmVybGF5XCIgc3R5bGU9e3tkaXNwbGF5LCBvcGFjaXR5fX0+XHJcbiAgICAgICAgICAgICAgICA8VG91Y2hhYmxlIGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT17YGRpYWxvZy1jb3JlLXdpbmRvdyBkaWFsb2ctY29yZS13aW5kb3ctJHtwb3N9YH0gb25UYXA9e3RoaXMuc3RvcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctY29yZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cImRlbW9cIiBibG9jayBvblRhcD17KCkgPT4gdGhpcy5oaWRlKCd0ZXN0Jyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RvdWNoYWJsZT5cclxuICAgICAgICAgICAgPC9Ub3VjaGFibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ29tYm9ib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3RpdGxlID0gXCJDb21ib2JveCFcIn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IERpYWxvZy5fX2N1c3RvbShcclxuICAgICAgICAgICAgY2xvc2VEaWFsb2cgPT4gKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbShyYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXA6IG4gPT4gPEJ1dHRvbiB0ZXh0PXtufSBrZXk9e259IGJsb2NrIG9uVGFwPXsoKSA9PiBjbG9zZURpYWxvZyhuKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW3t0ZXh0OiAnY2FuY2VsJ31dXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxUb3VjaGFibGUgY29tcG9uZW50PVwiZGl2XCIgb25UYXA9e3RoaXMub3Blbk9wdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgVGVzdD9cclxuICAgICAgICAgICAgPC9Ub3VjaGFibGU+XHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyByZXR1cm4gPGRpdj5FZGl0IE1lPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBPcHRpb24gPSAoKSA9PiB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJPcHRpb24gaXMgaW50ZW5kZWQgYXMgYSBmaWxsZXIgZWxlbWVudCBhbmQgc2hvdWxkIG5vdCBiZSByZW5kZXJlZCBvbiBpdHMgb3duXCIpO1xyXG59O1xyXG5cclxuXHJcbmltcG9ydCBTcGlubmVyRGF0YVVSTCBmcm9tIFwibGliLXNvdXJjZS9kYXRhLXVyaS9sb2FkLXNwaW5uZXIuZ2lmLnNvdXJjZVwiO1xyXG5jb25zdCBTcGlubmVyID0gKHtzaXplfSkgPT4gPEltYWdlIHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHNvdXJjZT17U3Bpbm5lckRhdGFVUkx9IC8+O1xyXG5cclxuXHJcbmNvbnN0IE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBhc3luYyBkZW1vKCkge1xyXG4gICAgICAgIGlmIChhd2FpdCBEaWFsb2cuY29uZmlybShcIlJlYWxseT9cIikgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3BlIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB7Y2hlY2tlZDogZmFsc2UsIG9uOiBmYWxzZX07XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxVSS5TY3JlZW4gdGl0bGU9XCJUZXN0XCIgYmFja1RleHQ9e1widGVzdFwifSB3aWR0aD17NjAwfSBvbkJhY2s9e3RoaXMuZGVtb30+XHJcbiAgICAgICAgICAgICAgICB7Lyo8SW1hZ2Ugc291cmNlPXt1cmx9IGhlaWdodD17MTUwfSBjb2xvcj1cImN5YW5cIiAvPiovfVxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH0gb25DaGFuZ2U9e2NoZWNrZWQgPT4gdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZH0pfSBsYWJlbD17XCJUZXN0XCJ9IHN1YlRpdGxlPVwibW9yZSB0ZXh0P1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8VG9nZ2xlIG9uPXt0aGlzLnN0YXRlLm9ufSBvbkNoYW5nZT17b24gPT4gdGhpcy5zZXRTdGF0ZSh7b259KX0gbGFiZWw9e1wiVGVzdFwifSBzdWJUaXRsZT1cIm1vcmUgdGV4dD9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXs8c3Bhbj48U3Bpbm5lciBzaXplPXsyMH0gLz5CdXR0b24gVGV4dDwvc3Bhbj59IG9uVGFwPXsoKSA9PiBkaWFsb2cuY3VycmVudC5zaG93KCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q29tYm9ib3ggc2VsZWN0ZWRJbmRleD17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17MH0+VGVzdDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db21ib2JveD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cgLz5cclxuICAgICAgICAgICAgPC9VSS5TY3JlZW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5BcHAuc3RhcnQoXHJcbiAgICA8Um91dGUgY29tcG9uZW50PXtXcmFwcGVyfT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01haW59IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvdGVzdFwiIGNvbXBvbmVudD17TWFpbn0gLz5cclxuICAgIDwvUm91dGU+XHJcbik7XHJcbmNyZWF0ZVN0eWxlcygpO1xyXG4iXX0=

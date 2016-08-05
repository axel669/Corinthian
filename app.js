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
        color: function color() {
            return _libSourceV2StyleJs.Theme.variable.core.button.textColor;
        },
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

},{"babel-runtime/helpers/interop-require-default":26,"lib-source/uiv2/Touchable":11,"lib-source/uiv2/icon.js":6,"lib-source/uiv2/ripple.js":9,"lib-source/v2/style.js":12}],3:[function(require,module,exports){
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

},{"lib-source/v2/style":12}],4:[function(require,module,exports){
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

},{"lib-source/v2/style":12}],5:[function(require,module,exports){
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

},{"babel-runtime/helpers/interop-require-default":26,"lib-source/uiv2/CenterContent":4,"lib-source/uiv2/Icon":6,"lib-source/v2/style":12}],6:[function(require,module,exports){
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

},{"lib-source/v2/style.js":12}],7:[function(require,module,exports){
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

},{"babel-runtime/helpers/interop-require-default":26,"lib-source/uiv2/icon.js":6,"lib-source/uiv2/ripple.js":9,"lib-source/v2/style.js":12}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{"babel-runtime/helpers/class-call-check":23,"babel-runtime/helpers/inherits":25,"lib-source/v2/style.js":12}],10:[function(require,module,exports){
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

},{"lib-source/v2/style":12}],11:[function(require,module,exports){
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

},{"babel-runtime/helpers/extends":24,"babel-runtime/helpers/object-without-properties":27}],12:[function(require,module,exports){
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

},{"babel-runtime/core-js/get-iterator":14,"babel-runtime/core-js/object/define-properties":17,"babel-runtime/core-js/object/entries":18,"babel-runtime/core-js/set":21}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":30}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":31}],15:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":32}],16:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":33}],17:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":34}],18:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/entries"), __esModule: true };
},{"core-js/library/fn/object/entries":35}],19:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":36}],20:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":37}],21:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":38}],22:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":39}],23:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],24:[function(require,module,exports){
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
},{"babel-runtime/core-js/object/assign":15}],25:[function(require,module,exports){
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
},{"babel-runtime/core-js/object/create":16,"babel-runtime/core-js/object/set-prototype-of":19}],26:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],27:[function(require,module,exports){
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
},{}],28:[function(require,module,exports){
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

},{"./runtime":29}],29:[function(require,module,exports){
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

},{"_process":111,"babel-runtime/core-js/object/create":16,"babel-runtime/core-js/object/set-prototype-of":19,"babel-runtime/core-js/promise":20,"babel-runtime/core-js/symbol":22}],30:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/$.core').Array.from;
},{"../../modules/$.core":48,"../../modules/es6.array.from":99,"../../modules/es6.string.iterator":106}],31:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":98,"../modules/es6.string.iterator":106,"../modules/web.dom.iterable":110}],32:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":48,"../../modules/es6.object.assign":101}],33:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":73}],34:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperties(T, D){
  return $.setDescs(T, D);
};
},{"../../modules/$":73}],35:[function(require,module,exports){
require('../../modules/es7.object.entries');
module.exports = require('../../modules/$.core').Object.entries;
},{"../../modules/$.core":48,"../../modules/es7.object.entries":108}],36:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":48,"../../modules/es6.object.set-prototype-of":102}],37:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":48,"../modules/es6.object.to-string":103,"../modules/es6.promise":104,"../modules/es6.string.iterator":106,"../modules/web.dom.iterable":110}],38:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.set');
require('../modules/es7.set.to-json');
module.exports = require('../modules/$.core').Set;
},{"../modules/$.core":48,"../modules/es6.object.to-string":103,"../modules/es6.set":105,"../modules/es6.string.iterator":106,"../modules/es7.set.to-json":109,"../modules/web.dom.iterable":110}],39:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":48,"../../modules/es6.object.to-string":103,"../../modules/es6.symbol":107}],40:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],41:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],42:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":66}],43:[function(require,module,exports){
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
},{"./$.cof":44,"./$.wks":96}],44:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],45:[function(require,module,exports){
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
},{"./$":73,"./$.ctx":49,"./$.defined":50,"./$.descriptors":51,"./$.for-of":56,"./$.has":59,"./$.hide":60,"./$.is-object":66,"./$.iter-define":69,"./$.iter-step":71,"./$.redefine-all":80,"./$.set-species":84,"./$.strict-new":88,"./$.uid":95}],46:[function(require,module,exports){
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
},{"./$.classof":43,"./$.for-of":56}],47:[function(require,module,exports){
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
},{"./$":73,"./$.descriptors":51,"./$.export":54,"./$.fails":55,"./$.for-of":56,"./$.global":58,"./$.hide":60,"./$.is-object":66,"./$.redefine-all":80,"./$.set-to-string-tag":85,"./$.strict-new":88}],48:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],49:[function(require,module,exports){
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
},{"./$.a-function":40}],50:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],51:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":55}],52:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":58,"./$.is-object":66}],53:[function(require,module,exports){
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
},{"./$":73}],54:[function(require,module,exports){
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
},{"./$.core":48,"./$.ctx":49,"./$.global":58}],55:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],56:[function(require,module,exports){
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
},{"./$.an-object":42,"./$.ctx":49,"./$.is-array-iter":64,"./$.iter-call":67,"./$.to-length":93,"./core.get-iterator-method":97}],57:[function(require,module,exports){
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
},{"./$":73,"./$.to-iobject":92}],58:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],59:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],60:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":73,"./$.descriptors":51,"./$.property-desc":79}],61:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":58}],62:[function(require,module,exports){
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
},{}],63:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":44}],64:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./$.iterators')
  , ITERATOR   = require('./$.wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./$.iterators":72,"./$.wks":96}],65:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":44}],66:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],67:[function(require,module,exports){
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
},{"./$.an-object":42}],68:[function(require,module,exports){
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
},{"./$":73,"./$.hide":60,"./$.property-desc":79,"./$.set-to-string-tag":85,"./$.wks":96}],69:[function(require,module,exports){
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
},{"./$":73,"./$.export":54,"./$.has":59,"./$.hide":60,"./$.iter-create":68,"./$.iterators":72,"./$.library":75,"./$.redefine":81,"./$.set-to-string-tag":85,"./$.wks":96}],70:[function(require,module,exports){
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
},{"./$.wks":96}],71:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],72:[function(require,module,exports){
module.exports = {};
},{}],73:[function(require,module,exports){
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
},{}],74:[function(require,module,exports){
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
},{"./$":73,"./$.to-iobject":92}],75:[function(require,module,exports){
module.exports = true;
},{}],76:[function(require,module,exports){
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
},{"./$.cof":44,"./$.global":58,"./$.task":90}],77:[function(require,module,exports){
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
},{"./$":73,"./$.fails":55,"./$.iobject":63,"./$.to-object":94}],78:[function(require,module,exports){
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
},{"./$":73,"./$.to-iobject":92}],79:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],80:[function(require,module,exports){
var redefine = require('./$.redefine');
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};
},{"./$.redefine":81}],81:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":60}],82:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],83:[function(require,module,exports){
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
},{"./$":73,"./$.an-object":42,"./$.ctx":49,"./$.is-object":66}],84:[function(require,module,exports){
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
},{"./$":73,"./$.core":48,"./$.descriptors":51,"./$.wks":96}],85:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":73,"./$.has":59,"./$.wks":96}],86:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":58}],87:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./$.an-object')
  , aFunction = require('./$.a-function')
  , SPECIES   = require('./$.wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./$.a-function":40,"./$.an-object":42,"./$.wks":96}],88:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],89:[function(require,module,exports){
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
},{"./$.defined":50,"./$.to-integer":91}],90:[function(require,module,exports){
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
},{"./$.cof":44,"./$.ctx":49,"./$.dom-create":52,"./$.global":58,"./$.html":61,"./$.invoke":62}],91:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],92:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":50,"./$.iobject":63}],93:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":91}],94:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":50}],95:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],96:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":58,"./$.shared":86,"./$.uid":95}],97:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":43,"./$.core":48,"./$.iterators":72,"./$.wks":96}],98:[function(require,module,exports){
var anObject = require('./$.an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./$.core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./$.an-object":42,"./$.core":48,"./core.get-iterator-method":97}],99:[function(require,module,exports){
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

},{"./$.ctx":49,"./$.export":54,"./$.is-array-iter":64,"./$.iter-call":67,"./$.iter-detect":70,"./$.to-length":93,"./$.to-object":94,"./core.get-iterator-method":97}],100:[function(require,module,exports){
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
},{"./$.add-to-unscopables":41,"./$.iter-define":69,"./$.iter-step":71,"./$.iterators":72,"./$.to-iobject":92}],101:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./$.export');

$export($export.S + $export.F, 'Object', {assign: require('./$.object-assign')});
},{"./$.export":54,"./$.object-assign":77}],102:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":54,"./$.set-proto":83}],103:[function(require,module,exports){

},{}],104:[function(require,module,exports){
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
},{"./$":73,"./$.a-function":40,"./$.an-object":42,"./$.classof":43,"./$.core":48,"./$.ctx":49,"./$.descriptors":51,"./$.export":54,"./$.for-of":56,"./$.global":58,"./$.is-object":66,"./$.iter-detect":70,"./$.library":75,"./$.microtask":76,"./$.redefine-all":80,"./$.same-value":82,"./$.set-proto":83,"./$.set-species":84,"./$.set-to-string-tag":85,"./$.species-constructor":87,"./$.strict-new":88,"./$.wks":96}],105:[function(require,module,exports){
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
},{"./$.collection":47,"./$.collection-strong":45}],106:[function(require,module,exports){
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
},{"./$.iter-define":69,"./$.string-at":89}],107:[function(require,module,exports){
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
},{"./$":73,"./$.an-object":42,"./$.descriptors":51,"./$.enum-keys":53,"./$.export":54,"./$.fails":55,"./$.get-names":57,"./$.global":58,"./$.has":59,"./$.is-array":65,"./$.keyof":74,"./$.library":75,"./$.property-desc":79,"./$.redefine":81,"./$.set-to-string-tag":85,"./$.shared":86,"./$.to-iobject":92,"./$.uid":95,"./$.wks":96}],108:[function(require,module,exports){
// http://goo.gl/XkBrjD
var $export  = require('./$.export')
  , $entries = require('./$.object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});
},{"./$.export":54,"./$.object-to-array":78}],109:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./$.export');

$export($export.P, 'Set', {toJSON: require('./$.collection-to-json')('Set')});
},{"./$.collection-to-json":46,"./$.export":54}],110:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":72,"./es6.array.iterator":100}],111:[function(require,module,exports){
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

},{}],112:[function(require,module,exports){
// import CSSTransition from 'react-addons-css-transition-group';
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _Object$defineProperties = require('babel-runtime/core-js/object/define-properties')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

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
        // padding: 10,
        borderBottom: '1px solid lightgray',
        borderTop: '1px solid lightgray'
    },
    "title": {
        padding: '5 15',
        fontSize: 20,
        fontWeight: 900,
        color: 'black'
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
window.dialog = _Object$defineProperties({
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
}, {
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
        var _this3 = this;

        _classCallCheck(this, Dialog);

        _React$Component2.call(this, props);

        this.show = function callee$2$0(displayProps) {
            var _displayProps$content, content, _displayProps$closable, closable, _displayProps$buttons, buttons, _displayProps$title, title, _displayProps$setup, setup;

            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                var _this2 = this;

                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        if (!(this.animating === true || this.resolver !== null)) {
                            context$3$0.next = 2;
                            break;
                        }

                        return context$3$0.abrupt('return', dialog.invalid());

                    case 2:
                        this.animating = true;
                        this.resolver = new _Promise(function (resolve) {
                            _this2.response = function (value) {
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
                        return context$3$0.abrupt('return', context$3$0.sent);

                    case 26:
                    case 'end':
                        return context$3$0.stop();
                }
            }, null, _this3);
        };

        this.hide = function callee$2$0(value) {
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                var _this4 = this;

                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        if (!(this.animating === true || this.resolve === null)) {
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
                            _this4.response(value);
                            _this4.response = null;
                            _this4.resolver = null;
                        });
                        this.animating = false;

                    case 9:
                    case 'end':
                        return context$3$0.stop();
                }
            }, null, _this3);
        };

        this.close = function () {
            if (_this3.state.closable === false) {
                return;
            }
            _this3.hide(dialog.cancel(null));
        };

        this.stopper = function (evt) {
            evt.stopPropagation();
        };

        this.componentDidMount = function () {
            currentDialog = _this3;
        };

        this.componentWillUnmount = function () {
            currentDialog = null;
        };

        this.render = function () {
            var _state = _this3.state;
            var display = _state.display;
            var opacity = _state.opacity;
            var pos = _state.pos;
            var content = _state.content;
            var buttons = _state.buttons;
            var title = _state.title;

            var buttonList = (buttons || []).map(function (_ref4, index) {
                var text = _ref4.text;
                var _ref4$value = _ref4.value;
                var value = _ref4$value === undefined ? null : _ref4$value;
                var _ref4$cancels = _ref4.cancels;
                var cancels = _ref4$cancels === undefined ? false : _ref4$cancels;

                // const valueFunc = (cancels === true) ? dialog.cancel : dialog.success;
                var retValue = cancels === true ? dialog.cancel(value) : dialog.success(value);
                return React.createElement(_libSourceUiv2Button2['default'], { text: text, key: index, onTap: function () {
                        return _this3.hide(retValue);
                    }, block: true, flush: true });
            });
            var titleDisplay = null;

            if (title !== null) {
                titleDisplay = React.createElement(
                    'div',
                    { className: 'dialog-core-title' },
                    title
                );
            }

            return React.createElement(
                _libSourceUiv2Touchable2['default'],
                { component: 'div', onTap: _this3.close, className: 'dialog-core-overlay', style: { display: display, opacity: opacity } },
                React.createElement(
                    _libSourceUiv2Touchable2['default'],
                    { component: 'div', className: 'dialog-core-window dialog-core-window-' + pos, onTap: _this3.stopper },
                    titleDisplay,
                    React.createElement(
                        'div',
                        { className: 'dialog-core-content', ref: 'container' },
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

var Combobox = (function (_React$Component3) {
    _inherits(Combobox, _React$Component3);

    function Combobox(props) {
        var _this5 = this;

        _classCallCheck(this, Combobox);

        _React$Component3.call(this, props);

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
                        return _regeneratorRuntime.awrap(dialog.current.show({
                            title: title,
                            content: children.map(function (_ref5, index) {
                                var _ref5$props = _ref5.props;
                                var _ref5$props$value = _ref5$props.value;
                                var value = _ref5$props$value === undefined ? null : _ref5$props$value;
                                var children = _ref5$props.children;
                                var _ref5$props$style = _ref5$props.style;
                                var style = _ref5$props$style === undefined ? null : _ref5$props$style;
                                var _ref5$props$className = _ref5$props.className;
                                var className = _ref5$props$className === undefined ? null : _ref5$props$className;

                                var onTap = function onTap() {
                                    return dialog.current.hide(comboboxSelect(index, value));
                                };
                                return React.createElement(
                                    'div',
                                    _extends({ style: style, className: className }, { key: index }),
                                    React.createElement(_libSourceUiv2Button2['default'], { text: children, block: true, flush: true, onTap: onTap })
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
                    case 'end':
                        return context$3$0.stop();
                }
            }, null, _this5);
        };

        this.render = function () {
            var _props3 = _this5.props;
            var selectedIndex = _props3.selectedIndex;
            var children = _props3.children;

            var flattenedChildren = React.Children.toArray(children);
            var currentChild = "Please select an option";

            if (selectedIndex !== -1) {
                currentChild = flattenedChildren[selectedIndex].props.children;
            }

            return React.createElement(
                _libSourceUiv2Touchable2['default'],
                { component: 'div', className: 'combobox-core-container' },
                React.createElement(_libSourceUiv2Button2['default'], { text: currentChild, block: true, flush: true, onTap: _this5.openOptions }),
                React.createElement(
                    'div',
                    { className: 'combobox-core-icon' },
                    React.createElement(_libSourceUiv2Icon2['default'], { name: 'ion-arrow-down-b', size: 24 })
                )
            );
            // return <div>Edit Me</div>;
        };
    }

    return Combobox;
})(React.Component);

var Option = function Option() {
    throw new Error("Option is intended as a filler element and should not be rendered on its own");
};

var Spinner = function Spinner(_ref6) {
    var size = _ref6.size;
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
    dialogTest: function dialogTest() {
        return _regeneratorRuntime.async(function dialogTest$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.t0 = console;
                    context$1$0.next = 3;
                    return _regeneratorRuntime.awrap(dialog.current.show({
                        content: "Testing?",
                        buttons: [{ text: 'a', value: 10 }, { text: 'b', cancels: true }],
                        title: "Alert!"
                    }));

                case 3:
                    context$1$0.t1 = context$1$0.sent;
                    context$1$0.t0.log.call(context$1$0.t0, context$1$0.t1);

                case 5:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    },
    render: function render() {
        var _this6 = this;

        var disabled = this.state.disabled;

        return React.createElement(
            UI.Screen,
            { title: 'Test', backText: "test", width: 600, onBack: this.demo },
            React.createElement(_libSourceUiv2Checkbox2['default'], { checked: this.state.checked, onChange: function (checked) {
                    return _this6.setState({ checked: checked });
                }, label: "Test", subTitle: 'more text?' }),
            React.createElement(_libSourceUiv2Toggle2['default'], { on: this.state.on, onChange: function (on) {
                    return _this6.setState({ on: on });
                }, label: "Test", subTitle: 'more text?' }),
            React.createElement(_libSourceUiv2Button2['default'], { text: React.createElement(
                    'span',
                    null,
                    disabled ? React.createElement(Spinner, { size: 20 }) : null,
                    'Button Text'
                ), disabled: disabled, onTap: function () {
                    return _this6.setState({ disabled: true });
                } }),
            React.createElement(
                Combobox,
                { selectedIndex: this.state.index, onChange: function (index) {
                        return _this6.setState({ index: index });
                    }, scrollToSelected: true },
                _Array$from(range({
                    count: 20,
                    map: function map(i) {
                        return React.createElement(
                            Option,
                            { value: Math.pow(i, i) },
                            React.createElement(Spinner, { size: 14 }),
                            'Test ',
                            i
                        );
                    }
                })),
                React.createElement(
                    Option,
                    { value: 'lol' },
                    React.createElement(_libSourceUiv2Image2['default'], { source: url, height: 50, width: '50%' })
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
/*<Button text="demo" block onTap={() => this.hide('test')} />*/ /*<Image source={url} height={150} color="cyan" />*/ /*<Option value={0}>Test</Option>*/

},{"babel-runtime/core-js/array/from":13,"babel-runtime/core-js/get-iterator":14,"babel-runtime/core-js/object/define-properties":17,"babel-runtime/core-js/promise":20,"babel-runtime/helpers/class-call-check":23,"babel-runtime/helpers/extends":24,"babel-runtime/helpers/inherits":25,"babel-runtime/helpers/interop-require-default":26,"babel-runtime/regenerator":28,"lib-source/data-uri/load-spinner.gif.source":1,"lib-source/uiv2/Card":3,"lib-source/uiv2/CenterContent":4,"lib-source/uiv2/Checkbox":5,"lib-source/uiv2/Image":8,"lib-source/uiv2/Toggle":10,"lib-source/uiv2/Touchable":11,"lib-source/uiv2/button":2,"lib-source/uiv2/icon":6,"lib-source/uiv2/iconbutton":7,"lib-source/uiv2/ripple":9,"lib-source/v2/style":12}]},{},[112])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWItc291cmNlL2RhdGEtdXJpL2xvYWQtc3Bpbm5lci5naWYuc291cmNlIiwiQzovVXNlcnMvY21vcmdhbjIvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9idXR0b24uanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vbGliLXNvdXJjZS91aXYyL2NhcmQuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vbGliLXNvdXJjZS91aXYyL2NlbnRlcmNvbnRlbnQuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vbGliLXNvdXJjZS91aXYyL2NoZWNrYm94LmpzIiwiQzovVXNlcnMvY21vcmdhbjIvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9pY29uLmpzIiwiQzovVXNlcnMvY21vcmdhbjIvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9pY29uYnV0dG9uLmpzIiwiQzovVXNlcnMvY21vcmdhbjIvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi9pbWFnZS5qcyIsIkM6L1VzZXJzL2Ntb3JnYW4yL0RvY3VtZW50cy9wcm9ncmFtbWluZy9naXRodWIvQ29yaW50aGlhbi9saWItc291cmNlL3VpdjIvcmlwcGxlLmpzIiwiQzovVXNlcnMvY21vcmdhbjIvRG9jdW1lbnRzL3Byb2dyYW1taW5nL2dpdGh1Yi9Db3JpbnRoaWFuL2xpYi1zb3VyY2UvdWl2Mi90b2dnbGUuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vbGliLXNvdXJjZS91aXYyL3RvdWNoYWJsZS5qcyIsIkM6L1VzZXJzL2Ntb3JnYW4yL0RvY3VtZW50cy9wcm9ncmFtbWluZy9naXRodWIvQ29yaW50aGlhbi9saWItc291cmNlL3YyL3N0eWxlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2VudHJpZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zZXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3Qtd2l0aG91dC1wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9ydW50aW1lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2VudHJpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zZXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZvci1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW52b2tlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQua2V5b2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubWljcm90YXNrLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQub2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC10by1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZmluZS1hbGwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNhbWUtdmFsdWUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtcHJvdG8uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmljdC1uZXcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50YXNrLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC53a3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnNldC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIkM6L1VzZXJzL2Ntb3JnYW4yL0RvY3VtZW50cy9wcm9ncmFtbWluZy9naXRodWIvQ29yaW50aGlhbi90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7Ozs7Ozs7a0NDRDBDLHdCQUF3Qjs7cUNBQy9DLDJCQUEyQjs7OzttQ0FDN0IseUJBQXlCOzs7O3NDQUNwQiwyQkFBMkI7Ozs7QUFFakQseUNBQ0ksUUFBUSxFQUNSLE1BQU0sRUFDTjtBQUNJLGFBQVMsRUFBRTtBQUNQLGdCQUFRLEVBQUUsVUFBVTtBQUNwQixpQkFBUyxFQUFFLFFBQVE7QUFDbkIsY0FBTSxFQUFFLENBQUM7QUFDVCxnQkFBUSxFQUFFLFFBQVE7QUFDbEIsY0FBTSxFQUFFLElBQUk7QUFDWix1QkFBZSxFQUFFLGFBQWE7QUFDOUIsYUFBSyxFQUFFO21CQUFNLDBCQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7U0FBQTs7QUFFakQsa0JBQVUsRUFBRSxLQUFLO0FBQ2pCLGVBQU8sRUFBRSxjQUFjO0FBQ3ZCLG9CQUFZLEVBQUUsQ0FBQztLQUNsQjtBQUNELG1CQUFlLEVBQUU7QUFDYixlQUFPLEVBQUUsTUFBTTtLQUNsQjtBQUNELHVCQUFtQixFQUFFO0FBQ2pCLHVCQUFlLEVBQUUsU0FBUztBQUMxQixhQUFLLEVBQUUsU0FBUztLQUNuQjtBQUNELGtCQUFjLEVBQUU7QUFDWixlQUFPLEVBQUUsT0FBTztBQUNoQixhQUFLLEVBQUUsTUFBTTtLQUNoQjtBQUNELFVBQU0sRUFBRTtBQUNKLGNBQU0sRUFBRSxNQUFNO0FBQ2QsYUFBSyxFQUFFLE1BQU07QUFDYixlQUFPLEVBQUUsQ0FBQztBQUNWLG1CQUFXLEVBQUUsRUFBRTtBQUNmLG9C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O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdG9CQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtB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Q0FDTDtBQUFDLFNBQUs7TUFBQyxTQUFTLEVBQUUsT0FBTyxBQUFDO0lBQ3RCLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztJQUNuQyxvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUUsSUFBSSxBQUFDLEdBQUc7Q0FDbkMsQ0FDWCxDQUFDO0FBQ0YsMkJBQWMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoTUFBd0FQY0FBQUFBQURNek0yVmxaWmVYbDVpWW1KbVptYWlvcUt1cnE3Q3dzTHU3dThMQ3dzckt5czdPenMvUHo5TFMwdFRVMU5YVjFkbloyZURnNE9IaDRlUGo0K1RrNU9ibTV1am82T3JxNnV2cjYrN3U3dkR3OFBMeTh2UHo4L1gxOWZiMjl2ZjM5L2o0K1BuNStmcjYrdnY3Ky96OC9QMzkvZjcrL3YvLy81R1JrWmFXbHBxYW1rMU5UWFIwZElDQWdISnljcW1wcWQvZjN6UTBORFkyTmtORFEwUkVSRWhJU0VsSlNVOVBUMXBhV2x0YlczbDVlWDkvZjV1Ym01K2ZuNkNnb0tPam82U2twS2FtcHFlbnA3T3pzN1MwdExhMnRybTV1YisvdjhIQndjM056ZERRME5iVzF0ZlgxOXpjM09YbDVlbnA2ZTN0N1ZOVFV4MGRIU0FnSUNZbUprVkZSWHA2ZW41K2ZvU0VoSk9UazlIUjBVNU9Ub1dGaFFFQkFRSUNBZ1FFQkJRVUZCVVZGUm9hR2hzYkd5SWlJaU1qSXk4dkx6QXdNREV4TVRJeU1sRlJVVlpXVmxkWFYyWm1abWRuWjJob2FHeHNiSEZ4Y1hOemMzWjJkbmg0ZUh4OGZJYUdob2VIaDRpSWlKV1ZsWjZlbnF5c3JMR3hzYmUzdDdpNHVMcTZ1cjYrdnNQRHc4VEV4TXZMeTh6TXpOUFQwOWpZMk5yYTJ0dmIyOTdlM3VMaTR1enM3Ty92Ny9IeDhmVDA5RXRMUzFKU1VwS1NraDRlSGlRa0pDY25KMFpHUmxSVVZIVjFkWHQ3ZTB4TVRIZDNkN3k4dkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNIL0MwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaC93dEpRME5TUjBKSE1UQXhNa2dBQUF4SVRHbHVid0lRQUFCdGJuUnlVa2RDSUZoWldpQUh6Z0FDQUFrQUJnQXhBQUJoWTNOd1RWTkdWQUFBQUFCSlJVTWdjMUpIUWdBQUFBQUFBQUFBQUFBQUFRQUE5dFlBSWY4TFNVTkRVa2RDUnpFd01USklBQUFNU0V4cGJtOENFQUFBYlc1MGNsSkhRaUJZV1ZvZ0I4NEFBZ0FKQUFZQU1RQUFZV056Y0UxVFJsUUFBQUFBU1VWRElITlNSMElBQUFBQUFBQUFBQUFBQUFFQUFQYldBQ0gvQzBsRFExSkhRa2N4TURFeVNBQUFERWhNYVc1dkFoQUFBRzF1ZEhKU1IwSWdXRmxhSUFmT0FBSUFDUUFHQURFQUFHRmpjM0JOVTBaVUFBQUFBRWxGUXlCelVrZENBQUFBQUFBQUFBQUFBQUFCQUFEMjFnQWgvd3RKUTBOU1IwSkhNVEF4TWtnQUFBeElUR2x1YndJUUFBQnRiblJ5VWtkQ0lGaFpXaUFIemdBQ0FBa0FCZ0F4QUFCaFkzTndUVk5HVkFBQUFBQkpSVU1nYzFKSFFnQUFBQUFBQUFBQUFBQUFBUUFBOXRZQUlmOExTVU5EVWtkQ1J6RXdNVEpJQUFBTVNFeHBibThDRUFBQWJXNTBjbEpIUWlCWVdWb2dCODRBQWdBSkFBWUFNUUFBWVdOemNFMVRSbFFBQUFBQVNVVkRJSE5TUjBJQUFBQUFBQUFBQUFBQUFBRUFBUGJXQUNIL0MwbERRMUpIUWtjeE1ERXlTQUFBREVoTWFXNXZBaEFBQUcxdWRISlNSMElnV0ZsYUlBZk9BQUlBQ1FBR0FERUFBR0ZqYzNCTlUwWlVBQUFBQUVsRlF5QnpVa2RDQUFBQUFBQUFBQUFBQUFBQkFBRDIxZ0FoL3d0SlEwTlNSMEpITVRBeE1rZ0FBQXhJVEdsdWJ3SVFBQUJ0Ym5SeVVrZENJRmhaV2lBSHpnQUNBQWtBQmdBeEFBQmhZM053VFZOR1ZBQUFBQUJKUlVNZ2MxSkhRZ0FBQUFBQUFBQUFBQUFBQVFBQTl0WUFJZjhMU1VORFVrZENSekV3TVRKSUFBQU1TRXhwYm04Q0VBQUFiVzUwY2xKSFFpQllXVm9nQjg0QUFnQUpBQVlBTVFBQVlXTnpjRTFUUmxRQUFBQUFTVVZESUhOU1IwSUFBQUFBQUFBQUFBQUFBQUVBQVBiV0FDSCtMVTFoWkdVZ1lua2dTM0poYzJsdGFYSmhJRTVsYW1Ob1pYWmhJQ2gzZDNjdWJHOWhaR2x1Wm04dWJtVjBLUUFoK1FRRUJRRC9BQ3dBQUFBQU1BQXdBQUFILzRBb2dvT0VoWWFIaUltS2k0eU5qbzRsSlkrVGpVMVpVbEpaVFpTY2hrVlZBS0VBVlVXZHBoQ2dvcUZWRUthY1BLcXFQSzZJSnhzVVVDT0RKRGl4b2pna3RJVlJQVGsyT0RzTkp5Z2pMTDZoTExyQ2dsRXZNZ0hZQVRjS2dsZlBBRmZUZ3ozWjVUb1lLQTFVdmxRTjRpZ2JPdVhaTXdtQ0JsT3FVd2J2S0JRMjg3TDlFSFJDU1FzclZsb29XZllPQ282QTJBNFFPaEVpQk1OK0pIWkFyTUdrMzZJR04rYkpTQ0hKb3lJRk9XWmdvNUdDZzBsR0dCTDRPTUFrMkV0RUpremNiQVRGeUFBVlJDenNUQVFCaTRDakFxNHNHV29JZ3d1a1NLOVVZRXJvQ0ZTb0NLZ1M3SEVWcVphU1RFOXc3U3JncTFZVVZzbG1QZXUwcTlTemdyT0tRbFVLZDFEUG4wSHJGc3FwTnhHSUNROGlhTGdJOXdtQ0ZRTUlBR0ZnODJ5R0lRTWlSMTdCZ1BEUUUwa2thdzZpNGV3SEdKb2xFNGhRNklSbGNSMkNoSmI4WUpDSUMwNmNYQkRoY1FTQzFRTjZUQkRFNGNHQzN3c2V1T3pub01CcUJDQlFpSUFBSERnRTJ1OUVJREV1V2NnVFFWQ2FONGZpVWNRV0JFRU1KTWt3S0laMjRERmVqdWp3Z2JENTh3dlNzNFcvQU4zWkVVek9NNUYyMWtOKzRFeDQwTmNJR1VnZ1FRYjg5YVhnZ2xvRkFnQWgrUVFGQlFBdkFDd0NBQUlBSndBckFBQUkvd0JSQ0J4SXNLQkJFeVlNS2x6SXNLQ0VQWFRvN0pIUXNHTEZRWkVDYUF3UWFaREZqd1VWcmRtNGNZMGlrQ2hYa0NTNTRvWExsekJqeXZTUVlVT0pnU1htck53NDU2WkFFWXNRTVRyUnNJT2ZMblRzN0RtSm9vU2NuUnJsM0R5aGdFMlpNV2hjWEZqWW9ZQWJBV0FGMUlFZ1VBWFVBQ29FOWhrRG9DMEFMMXkyR3ZUek5TellPNDVRSUdLeGt3VWlGQlhTdUhYcnhZVkJEM2ZzaG9YRFFHQUNTQ1FoSlJCb0FNeGd0Mm9ZRmN4QVIzSFlCQzhQcFlnVEo4V2hsM2t1dXgyVHFPQUdPNTdCQ29vNVlrUk1QVjVVQXpDenFLQ0pQYkZiVUxCSVNJenVOaU1NS3FxaitBMkNoQlZKdFBoeW1ZeUNoUkM2d0JIZ1pnNENFQ0ExdE44SWt4dk1tVDVFRnpwaUFFZ1FCZWdnUnhEU2c4ZEFoWVVuMHFQY0w1RERsZ1NBTkxBQmZ5aFpjQUFCQXd4QWdBSERFVmhSQjN3a0tPRUFCalRpWUVPR0lEaGhnb1ZjeUZBZ0cwcjRCM3dlRWdSaWlBT01XS0pCR2FMWTRZb0ZRUmhpaFRBYVpLQ0dDelpZWTBIK0FTamdqZ3psQitSSEpYQ0FnUVloREZuUUl4RVVzZ0FoVzF4QTRvNGZHTExBbFZjV0l0ZVFFMkRwNVJaSkFrbkNBMTVpU1lnR1E0N2dRSmxZWWpDa0NSR3d1VUFoSENpSkFTRnNSdUFUa0NaSWdDZVdoanlpcEVBbFlIQ0lBdzlNQU42Z0E1a3dBZ2t4TVNycHBKUlcrbEZBQUNINUJBVUZBQ3dBTEFNQUFnQXJBQ2NBQUFqL0FGRUlIRWl3WU1FVEp3d3FYTWlRSVlZalBYb2N3ZEN3b3NXQkVIZ0kyQ2lBQjRTTElCVkMwY2h4SXc4b0lWTUtORkt5cEJHVkMwZDArSkJRb0lrQkxUa09NREZ3QkJRS0cycGFGT0VBUVJBRFNUTFlWSkZ6b3dxZUp4cnN3R0VqUjQ4b1E1RVVHTUIxZ0pBbkFvazBGVUJFb0lJYkFkSUdrUEVDYTBNSFc3dHlSUUFDaFlWTU9UTlpRSUZCaDlxL1BScU9RQ0MzYTQ4SkFwZnNLTGxqaWNBRU0vNnExYkdCWVljZ2hicytHRmdCZ1NSSkNDb00vQ0ZaclEwS0REL0F5RHlBUUlTQ0pVb1VQRkE2TFE2VUMwOGtZUjFFZzBVbU5XcnZJTkV3dzVEQ0t4Z0laVmdpaFF6Sk54cFlmSUpnUldzZ0RJaGY1SkNDUnRvWk9SU0FzUVF4NFVFRURjc3RrbWh5d0VjQ2lqRGpHeHlodmFEUEdER2dpSkIvVUxFbUxoNFI1QUVUQ3hTNHdBTWM4RGVRQVpNQTRDQUFsQlFoMEFoTkdHamdBL3Z4cDBTRER6cFlTUk1vWkdDaGhSY29pRW1ISFhhQmdnUWpHdWdFZnlGWWd1S0RsNVRBWW9zTHZDaGZqRE02V0tPSU9KYkkzNGs5cWtoaGl4Z3F1T0dNSHdvMG9JVUlLaWdRZ3gxR1NOQjkrV1VvNVFuK0FmaVJsQ0hSQithWVpKWnA1cGxvcHFubW1teTI2ZWFiY0Y0VUVBQWgrUVFGQlFBcEFDd0RBQUlBS3dBbkFBQUkvd0JSQ0J4SXNLREJnd2dUS2pUWXdWQ2dRSVk2TEp4STBRSWZBZ01HRU9CamdhTEhneHdPWkJ3NTRBQ0hqeWdGYnNGSVV1T1dsQWhOakNCeFl1Q0pCQzFIY3FvcHNNU0dEQjU0VGl5QjRaQ0RCeE5BQ0x5Wk0yTUNub3IyMktIVHhZL0VoU1lrRUZyQWRZR2hSd0liTkIzUVFDQ0VPZ0xTQ25CVDRHcENERnU3Y28xUUFzVUdHRGxoYkVEaDZJNWF0Vzc4S0RRUlFXN1hRaWRSVURCQTBnQUZnUXpnL0ZWN3gwUENFUTRNZDhVd3NGR2hQMzhLTlJxWVlMSmFPaGtTa25pZ2VRRWhEUVZObUNnb3lIUmFPM3NUVG1pOUpjUkVDaTFzNzVtZDhJTWh3NFV1VURTQjRNM2tPb29tUG9wUXlQV1dDOFFuZ2tBd3g0MEFPRjBnZU5Vc3dRR0RCdDhvVFZBUUJJaUJJNWp3RDVhb0d6L2xDVVI2NUx3b0VLUCt4d1NhQkNCZ0FHc000dDlFaHdRNG9JQlNTSENnUXBJc3VPQWVEeUkwUWh3U0RyaEpkaFVPZEdHR0FtN1lvVUVSZ2tqaGlBVWxtR0dES0JvRTRJSUZ0bWpRZmZudDE1K01DTTJIbzRlRTZJR0hBUlhzU0pBR0xZVGhCUUJnbk5HSFVES1MwTUlYQUVRWkpSa0tDRW1JR0ZKbTJjWUlPK3B4WkpaUm1ySElqbm1BS2VVWWlleG9BQmhtQXFBR0l6dFdrSWFaWHJnZ0pBcDlqSkdsRjF3b0orUUpDckJSeGhob3VPRG5uU2lJc0FnaWpEQkpVRUFBSWZrRUJRVUFXd0FzQndBREFDY0FLd0FBQi8rQUtJS0RoSVFqR1JJU0dTT0ZqWTZQalI1TUM1UUxUQjZRbVpvams1V1VUSXlhb29VWW5wNFlvNm1DTWFhVk1ZUW5IeDJocW9Tc3JRdXZnaGxKQmtFSURpSzFnMUM0QzFDQ1QwSUR6QU1GU01MREloQ3RFTUlnQ00zTkJRN0RnaHdQbmc4Y2doTTkyczBJdExVaUYwNU9GOUVvRCtqTlFSM2VneWNuaFJFRTlRTmdmTWdIU1VNUWdFbjRFWFIwZ3NFS2RFTXlMSVJFZ2dHUWZ5c1FQSm1ZNllTR0NBOG1nT0E0eklRSmtwb3NFRkV4d0FneWxJMldYQkZBVXdBV0NEQUpWWmhaazZZTFZEbFJJT2paODBqUUVscUkxdXloRUNWU3BUU1pCaDBLMVdqUW5VcC9CaFVrcytmTnJZTlVzblFKdHBCSnNDU1lIUENSQUNoWURpbWhhQVFJTUNPSEFyQWxVc2lZeS9kR2c2MU1hdkFkdklNRXdSTWhRalJGY1dEd1lCd3ZhNTFRMHNLS2xSWktGUDV3ek5jR0JXOEdwZ0FZRFdDS0FVRUpabkFPb0dQRHNBWlVTSk9tOGhlRGp0VTl2RjJSTGZ1S0lBVTNCc3Q0RVdYWUNCYThTYk5nZEtMQkRodzJjdlFvUG93RWp1U2pjUmdXTkFJS2hRMkxhL0hBRG9ESFZnaFZrbGZCdWJWSWV0SlZpcFJGMFNTTEZDbFptc3dmVktMRXdrQUFJZmtFQlFVQUx3QXNCd0FEQUNjQUt3QUFDUDhBVVFnY1NMQ2d3WU1JRXlwY3lMQ2h3NGNRSTBwY2VJTEVDQk1USDRLWThNREJJUXdsTWk1OFpHaUJ5UVdFSkdBVWViQkVoSk1uQ1dGZ2VaQkRJWmduRDYya09SQUR6cE1PUnZBa3FJSFF6d1VQU0F3ZEdHTEwwUWxMQ1Y2NENkUFFoNmdEVFZ6WVlyUlFoRWRZQzRiUWdJRkR5TEFLVDV4QVczQkRBMEFKdG5CZ2k0S0NBUUlEQmhBNFlBRnRJd041QXcvZzB5RnNJY0dCQ1JqQ2F1SVA0c0NCR0R0K1BDQXkxc09QRllmOSs1Z3dXcnQ0OWZLbDZ4YXVYTG9EMVNLc1lBQ1BIa0pDSDVxZ0lBZ1FBMGNKVC9RNUF3YUFsekF0TkRnRWdXQ09Hd0Z3dWtCQXFJQU1nT2ZQdjdSUXV0QUVnamNDc21ldm84amdpRGJRdzR2WkljU1FRZ3Z0NlBmc0ZMaklUSGpvWHZRUVBERml4TnFCZ3RDanQ3T2hZS0l4NzBHWGgwQW5ISkpDSEhHa2NNaDlDZWluSFIwWkZNU0lHZ0VDQUlZQkFpVUFTUUFjQmdCSkFnSXhBSWVEQXR6aGdVRXVlQkZnR2hXZ2dBZ0xIWGJJQWlJb09IS0hnMjc0Y2RBRlhLZ0kzUmg5Q0tSQ2pER3FJQkFFZGFEblJnR0Y3ZWdDR21PVXdZWUNhNVVnQjVFZHluR1dJbnZZUVVjWGZqU0owQW1NSUxLSUNBT1ZNQWVXSE01eEZnb2xiSkNCQi9kSnRBS2JBYXdRbGlKcllMbEdkMkVORWttTWtReENsd1I3MEVISEhoS2dKcEFKNjBVVUVBQWgrUVFGQlFBdEFDd0NBQWNBS3dBbkFBQUkvd0JSQ0J4SXNLREJnd2dUS2x6SXNLSERoeEFqU3B4SXNhTEZpeGd6YXR6SXNhUEhoaVJHZkVRSWdRY1hGanVXbk1nb0FrcU1HRkJFRGl4Q0NZQk5BSk1NWU9Ud1lJSFBCVXc4Q0d4UzZlYk5TVW9zaXVqNTAyY1RrVjJNR3NWazhVTFRwaGxLWEpKNjAxS0lpazZ1L3BTZ2xhdE5yMkRGK3BTQUlxcFpxaFd0cXMyQWdpaFhwRXFaTm4wcWtLYlJuRHYxQWhVNnNPVEpsQ3N4dG53WjgyRElrUXd4SlBCeG9Ba0ppQ2MwUkhnd0FZUkRCVGxtQkFoQUl3VUhoeVFZQUNFd29BZUNKd3diM0JoTlcwYUtFZ3hQTUZneG9IZnZJWFFUa3RoQnUzZ05KZ3cxQlBITlBFbmlnMUJ3RkM5K29HQUozQVFqc0diZUc4YUhoQlJzVExHbi9XTmdCUVNTSkNHb01QQUJkOTlCT2lUY29HTjhnQmtKQkM3WklhQy9nSlFDVGRERGV3TWdJQk5DUGRpbkF3WW9XSkNKZi81bFlnRUtJQ0R3WGdFT0xCVEZDeklVZDRNQ0FoRUJJWVJFQ1BTRUVNd1ZnSVFJREVYUlF3NDI0TEJEQXl1Wm9NS0kvcWxnZ2tBWkpHRkFFQWhzd1dKREoyeEFRV01DbVRBQWp2ME5zS05BSjN6UXdZRVdHY0drQUVaQUJnVVBPUElBQldRb2xBUWhEeENBS1JBR1IvVFF3eEVNbWpuUUNjOUZGQkFBSWZrRUJRVUFLUUFzQWdBSEFDc0FKd0FBQ1A4QVVRZ2NLUEFFSTBTTFJCQmN5TENodzRZWFhLQVpVNGFOZ2hNUE0yb2tlSUdMRndBZ0FZenBzN0hrUXhjZlE0Sk1VOEdreTRHTTFLZ01DY2JBeTVlSnhzd01tZWVteTBWbWRnTHdvc2VueVJGdGhJb2haTlNrQWpJenY3UWcwYlRraVQ1bndBd04wMEpEVlpjVkRPRFJRMmpFMTQwbFNweDlHYVBBQ3psNkVHRmNtM0hRbWdCNEEyaEtRUGVoQkNsNTgybzYxTGZobnNDQkpSVmVhR0lUNHJ4eHpDNFcyUGd4M3NpVEJ4NjJyRGl6d0wrUEIzc2VhRGZ3M3RFRTI3Nk5PeGYxd0xTdU16cGlBRWdRQlJNM1EyakF3RUZ0U1FoZDRBaHdNd2NCQ0pNbUxtd2h0S0JRaEVjYkZkVVJRSjM2R3dTNE4xNG90S0I3ZDBNZk1wclUyRk85ZkFzS0cwTnM4YzUrUXNZTmRzcVhGOFE0KzBBTnpObDNmMERWWVFZNjhsWEhsMENORlBMSEg0VTBNaEFHK25ubmdHUU5lWEJIZ0FMQXdZQkFGQmd3d0lZREdJQWVDaHh3MTJBRTlqWGtoeHNCM3VFSUNodkF3Q0dITUd5QVFna1JORWdJQmhwMVVBQ0sxZFVCZ1VBTnZQaGlBd0k5WWdoN2hFaFFva01kK05FRkhYYnNvVWhCQ1FqSllRSnpnVERCQXc0Y2dvRnZHNTNnUVFZYmdIbENsVllPd0Vscko1QXd3cEpOYlVHQWxRUnNnUm9IQjFoNUFBZXVXY0RIbkFNUXdJY0ZzYUhRZ1NHQkJHSklCNFhTRlJBQU93PT1cIjtcbiIsImltcG9ydCB7ZGVmaW5lQ29tcG9uZW50U3R5bGUsIFRoZW1lfSBmcm9tIFwibGliLXNvdXJjZS92Mi9zdHlsZS5qc1wiO1xyXG5pbXBvcnQgUmlwcGxlIGZyb20gXCJsaWItc291cmNlL3VpdjIvcmlwcGxlLmpzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gJ2xpYi1zb3VyY2UvdWl2Mi9pY29uLmpzJztcclxuaW1wb3J0IFRvdWNoYWJsZSBmcm9tICdsaWItc291cmNlL3VpdjIvVG91Y2hhYmxlJztcclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ2J1dHRvbicsXHJcbiAgICAnY29yZScsXHJcbiAgICB7XHJcbiAgICAgICAgXCJ3cmFwcGVyXCI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIG1hcmdpbjogNCxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICB6SW5kZXg6IFwiKzBcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICBjb2xvcjogKCkgPT4gVGhlbWUudmFyaWFibGUuY29yZS5idXR0b24udGV4dENvbG9yLFxyXG4gICAgICAgICAgICAvLyB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgICAgICAgd2hpdGVTcGFjZTogJ3ByZScsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid3JhcHBlcjpmb2N1c1wiOiB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6ICdub25lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3cmFwcGVyW2Rpc2FibGVkXVwiOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlYWVhZWEnLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNhMGEwYTAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRleHQtd3JhcHBlclwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICd0YWJsZScsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidGV4dFwiOiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogMTUsXHJcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMTUsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAncHJlJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ3RhYmxlLWNlbGwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndyYXBwZXIgPiBvdmVybGF5XCI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgNTAwbXMgbGluZWFyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCIuY29yZS1kZXNrdG9wIG92ZXJsYXk6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDUpJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3cmFwcGVyOmFjdGl2ZSA+IG92ZXJsYXlcIjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDc1KScsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdub25lJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuLypcclxuICAgIHRleHRcclxuICAgIG9uVGFwXHJcbiAgICBzdHlsZU5hbWVcclxuKi9cclxuY29uc3QgQnV0dG9uID0gcHJvcHMgPT4ge1xyXG4gICAgbGV0IHtcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIG9uVGFwID0gKCkgPT4gY29uc29sZS53YXJuKFwiTm8gb25UYXAgZ2l2ZW4gdG8gQnV0dG9uXCIpLFxyXG4gICAgICAgIHN0eWxlTmFtZSA9IFwiY29yZVwiLFxyXG4gICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgIHRleHRDb2xvcixcclxuICAgICAgICBmbHVzaCxcclxuICAgICAgICBibG9jayxcclxuICAgICAgICBmaWxsLFxyXG4gICAgICAgIHBhZGRpbmcsXHJcbiAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgaWNvbk5hbWUgPSBudWxsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlck5hbWUgPSBgYnV0dG9uLSR7c3R5bGVOYW1lfS13cmFwcGVyYDtcclxuICAgIGNvbnN0IHRleHRXcmFwcGVyTmFtZSA9IGBidXR0b24tJHtzdHlsZU5hbWV9LXRleHQtd3JhcHBlcmA7XHJcbiAgICBjb25zdCB0ZXh0TmFtZSA9IGBidXR0b24tJHtzdHlsZU5hbWV9LXRleHRgO1xyXG4gICAgY29uc3Qgb3ZlcmxheU5hbWUgPSBgYnV0dG9uLSR7c3R5bGVOYW1lfS1vdmVybGF5YDtcclxuXHJcbiAgICBjb25zdCB3cmFwcGVyU3R5bGUgPSB7fTtcclxuICAgIGNvbnN0IHRleHRXcmFwcGVyU3R5bGUgPSB7fTtcclxuICAgIGxldCByaXBwbGVFbGVtZW50O1xyXG4gICAgbGV0IG9uVGFwSGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZGlzYWJsZWQgIT09IHRydWUpIHtcclxuICAgICAgICAvLyByaXBwbGVFbGVtZW50ID0gPFJpcHBsZSAvPjtcclxuICAgICAgICBvblRhcEhhbmRsZXIgPSBvblRhcDtcclxuICAgIH1cclxuICAgIGlmIChibG9jayA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHdyYXBwZXJTdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxuICAgIGlmIChmaWxsID09PSB0cnVlKSB7XHJcbiAgICAgICAgZmx1c2ggPSB0cnVlO1xyXG4gICAgICAgIHdyYXBwZXJTdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICB3cmFwcGVyU3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIHRleHRXcmFwcGVyU3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgfVxyXG4gICAgaWYgKGZsdXNoID09PSB0cnVlKSB7XHJcbiAgICAgICAgd3JhcHBlclN0eWxlLm1hcmdpbiA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAoaWNvbk5hbWUgIT09IG51bGwpIHtcclxuICAgICAgICB0ZXh0ID0gPHNwYW4+PEljb24gbmFtZT17aWNvbk5hbWV9IC8+e3RleHR9PC9zcGFuPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUb3VjaGFibGUgY29tcG9uZW50PVwiZGl2XCIgdGFiSW5kZXg9ey0xfSBjbGFzc05hbWU9e3dyYXBwZXJOYW1lfSBvblRhcD17b25UYXBIYW5kbGVyfSBkaXNhYmxlZD17ZGlzYWJsZWR9IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGV4dFdyYXBwZXJOYW1lfSBzdHlsZT17dGV4dFdyYXBwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGV4dE5hbWV9Pnt0ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e292ZXJsYXlOYW1lfSAvPlxyXG4gICAgICAgICAgICB7cmlwcGxlRWxlbWVudH1cclxuICAgICAgICA8L1RvdWNoYWJsZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCB7ZGVmaW5lQ29tcG9uZW50U3R5bGV9IGZyb20gXCJsaWItc291cmNlL3YyL3N0eWxlXCI7XHJcblxyXG5kZWZpbmVDb21wb25lbnRTdHlsZShcclxuICAgICdjYXJkJyxcclxuICAgICdjb3JlJyxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRhaW5lclwiOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNSxcclxuICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgYm94U2hhZG93OiAnMXB4IDJweCAycHggcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjE1KScsXHJcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZTBlMGUwJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidGl0bGVcIjoge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5jb25zdCBDYXJkID0gKHtjaGlsZHJlbiwgdGl0bGUgPSBudWxsfSkgPT4ge1xyXG4gICAgbGV0IGNvbnRlbnQ7XHJcblxyXG4gICAgaWYgKHRpdGxlID09PSBudWxsKSB7XHJcbiAgICAgICAgY29udGVudCA9IGNoaWxkcmVuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvcmUtdGl0bGVcIj57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29yZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IHtkZWZpbmVDb21wb25lbnRTdHlsZX0gZnJvbSBcImxpYi1zb3VyY2UvdjIvc3R5bGVcIjtcclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ2NlbnRlci1jb250ZW50JyxcclxuICAgICdjb3JlJyxcclxuICAgIHtcclxuICAgICAgICAnY29udGFpbmVyJzoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAndGFibGUnLFxyXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAncHJlJyxcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICd0YWJsZS1jZWxsJyxcclxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICdhdXRvJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuY29uc3QgQ2VudGVyQ29udGVudCA9ICh7Y2hpbGRyZW4sIHdpZHRoLCBoZWlnaHQsIGNsYXNzTmFtZSA9IFwiXCJ9KSA9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BjZW50ZXItY29udGVudC1jb3JlLWNvbnRhaW5lciAke2NsYXNzTmFtZX1gfSBzdHlsZT17e3dpZHRoLCBoZWlnaHR9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1jb250ZW50LWNvcmUtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnYXV0bycsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDZW50ZXJDb250ZW50O1xyXG4iLCJpbXBvcnQge2RlZmluZUNvbXBvbmVudFN0eWxlfSBmcm9tIFwibGliLXNvdXJjZS92Mi9zdHlsZVwiO1xyXG5pbXBvcnQgQ2VudGVyQ29udGVudCBmcm9tIFwibGliLXNvdXJjZS91aXYyL0NlbnRlckNvbnRlbnRcIjtcclxuLy8gaW1wb3J0IFJpcHBsZSBmcm9tIFwibGliLXNvdXJjZS91aXYyL1JpcHBsZVwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwibGliLXNvdXJjZS91aXYyL0ljb25cIjtcclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ2NoZWNrYm94JyxcclxuICAgICdjb3JlJyxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRhaW5lclwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciA1MDBtcyBsaW5lYXInLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjb250YWluZXI6YWN0aXZlXCI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjA3NSknLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaWNvblwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2NvbG9yIDI1MG1zIGxpbmVhcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaWNvbltkYXRhLWNoZWNrZWQ9J3RydWUnXVwiOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzI0YjMyNCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibGFiZWxcIjoge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzLFxyXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDMwLFxyXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAncHJlJyxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3VidGl0bGVcIjoge1xyXG4gICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMTRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbmNvbnN0IGlvbk9uSWNvbiA9IFwiaW9uLWFuZHJvaWQtY2hlY2tib3hcIjtcclxuY29uc3QgaW9uT2ZmSWNvbiA9IFwiaW9uLWFuZHJvaWQtY2hlY2tib3gtb3V0bGluZS1ibGFua1wiO1xyXG5cclxuY29uc3QgQ2hlY2tib3ggPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgY2hlY2tlZCA9IGZhbHNlLFxyXG4gICAgICAgIG9uSWNvbk5hbWUgPSBpb25Pbkljb24sXHJcbiAgICAgICAgb2ZmSWNvbk5hbWUgPSBpb25PZmZJY29uLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHN1YlRpdGxlID0gbnVsbCxcclxuICAgICAgICBvbkNoYW5nZSA9ICgpID0+IGNvbnNvbGUud2FybihcIk5vIG9uQ2hhbmdlIGdpdmVuIHRvIGNoZWNrYm94XCIpXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpY29uTmFtZSA9IChjaGVja2VkID09PSB0cnVlKSA/IG9uSWNvbk5hbWUgOiBvZmZJY29uTmFtZTtcclxuICAgIGxldCBjb250ZW50ID0gbGFiZWw7XHJcblxyXG4gICAgaWYgKHN1YlRpdGxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29udGVudCA9IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29yZS1zdWJ0aXRsZVwiPntzdWJUaXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxVSS5Ub3VjaGFibGUgY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29yZS1jb250YWluZXJcIiBvblRhcD17KCkgPT4gb25DaGFuZ2UoIWNoZWNrZWQpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1jb3JlLWljb25cIiBkYXRhLWNoZWNrZWQ9e2NoZWNrZWR9PlxyXG4gICAgICAgICAgICAgICAgPENlbnRlckNvbnRlbnQgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9e2ljb25OYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9DZW50ZXJDb250ZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1jb3JlLWxhYmVsXCI+e2NvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgIHsvKjxSaXBwbGUgLz4qL31cclxuICAgICAgICA8L1VJLlRvdWNoYWJsZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcclxuIiwiaW1wb3J0IHtkZWZpbmVDb21wb25lbnRTdHlsZX0gZnJvbSBcImxpYi1zb3VyY2UvdjIvc3R5bGUuanNcIjtcclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ2ljb24nLFxyXG4gICAgJ2NvcmUnLFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSW9uaWNcIixcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogMixcclxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbmNvbnN0IEljb24gPSAoe25hbWUsIHN0eWxlTmFtZSA9ICdjb3JlJywgc2l6ZX0pID0+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e2BpY29uLSR7c3R5bGVOYW1lfS1jb250ZW50YH0gc3R5bGU9e3tmb250U2l6ZTogc2l6ZX19Pntpb25pY1tuYW1lXX08L3NwYW4+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcclxuIiwiaW1wb3J0IHtkZWZpbmVDb21wb25lbnRTdHlsZSwgVGhlbWV9IGZyb20gXCJsaWItc291cmNlL3YyL3N0eWxlLmpzXCI7XHJcbmltcG9ydCBSaXBwbGUgZnJvbSBcImxpYi1zb3VyY2UvdWl2Mi9yaXBwbGUuanNcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnbGliLXNvdXJjZS91aXYyL2ljb24uanMnO1xyXG5cclxuZGVmaW5lQ29tcG9uZW50U3R5bGUoXHJcbiAgICAnaWNvbi1idXR0b24nLFxyXG4gICAgJ2NvcmUnLFxyXG4gICAge1xyXG4gICAgICAgIFwid3JhcHBlclwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBtYXJnaW46IDQsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgekluZGV4OiBcIiswXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgY29sb3I6ICgpID0+IFRoZW1lLnZhcmlhYmxlLmNvcmUuYnV0dG9uLnRleHRDb2xvcixcclxuICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbmNvbnN0IEljb25CdXR0b24gPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgc2l6ZSA9IDQyLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgaWNvblNpemUsXHJcbiAgICAgICAgc3R5bGVOYW1lID0gJ2NvcmUnXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlck5hbWUgPSBgaWNvbi1idXR0b24tJHtzdHlsZU5hbWV9LXdyYXBwZXJgO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVJLlRvdWNoYWJsZSBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9e3dyYXBwZXJOYW1lfSBzdHlsZT17e3dpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemV9fT5cclxuICAgICAgICAgICAgPFJpcHBsZSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb3JlLXRleHQtd3JhcHBlclwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvcmUtdGV4dFwiIHN0eWxlPXt7cGFkZGluZzogMH19PjxJY29uIG5hbWU9e25hbWV9IHNpemU9e2ljb25TaXplfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1VJLlRvdWNoYWJsZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uO1xyXG4iLCJjb25zdCBJbWFnZSA9ICh7c291cmNlLCB3aWR0aCA9ICcxMDAlJywgaGVpZ2h0ID0gbnVsbCwgaW1hZ2VTaXplID0gJ2ZpdCcsIGNvbG9yLCBibG9jayA9IGZhbHNlfSkgPT4ge1xyXG4gICAgaWYgKGhlaWdodCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5lZWQgdG8gZ2l2ZSBpbWFnZSBoZWlnaHRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgPT09IHRydWUgPyBcImJsb2NrXCIgOiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7c291cmNlfVwiKWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHRcclxuICAgIH07XHJcblxyXG4gICAgc3dpdGNoIChpbWFnZVNpemUpIHtcclxuICAgICAgICBjYXNlICdmaXQnOlxyXG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2NsaXAnOlxyXG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGltYWdlU2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGV9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XHJcbiIsImltcG9ydCB7ZGVmaW5lQ29tcG9uZW50U3R5bGV9IGZyb20gXCJsaWItc291cmNlL3YyL3N0eWxlLmpzXCI7XHJcblxyXG5jb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IDMwMDtcclxuZGVmaW5lQ29tcG9uZW50U3R5bGUoXHJcbiAgICAncmlwcGxlJyxcclxuICAgICdjb3JlJyxcclxuICAgIHtcclxuICAgICAgICBcIndyYXBwZXJcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICB6SW5kZXg6ICcrNSdcclxuICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRvdFwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgICAgICAgICBhbmltYXRpb246IGByaXBwbGUtY29yZS1hbmltYXRpb24tcmlwcGxlLWVmZmVjdCAke2FuaW1hdGlvbkR1cmF0aW9ufW1zIGxpbmVhcmAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICB3aWR0aDogJzI1MCUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRvdDpiZWZvcmVcIjoge1xyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBcIlwiYCxcclxuICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCIhcmlwcGxlLWVmZmVjdFwiOiB7XHJcbiAgICAgICAgICAgIFwiMCVcIjoge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAsIDApJyxcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCI3MCVcIjoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjEpJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIjEwMCVcIjoge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEsIDEpJyxcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAnMTUwJScsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMCknXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5jbGFzcyBSaXBwbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtsaXN0OiBbXX07XHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2ggPSAoZXZ0KSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3Bvc2l0aW9ufSA9IGV2dC50b3VjaDtcclxuICAgICAgICBjb25zdCB7dG9wLCBsZWZ0fSA9IHRoaXMucmVmcy53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclJpcHBsZShwb3NpdGlvbi54IC0gbGVmdCwgcG9zaXRpb24ueSAtIHRvcCk7XHJcbiAgICB9XHJcbiAgICB0cmlnZ2VyUmlwcGxlID0gKHggPSBudWxsLCB5KSA9PiB7XHJcbiAgICAgICAgbGV0IHtsaXN0fSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmICh4ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IHRoaXMucmVmcy53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICB4ID0gd2lkdGggLyAyO1xyXG4gICAgICAgICAgICB5ID0gaGVpZ2h0IC8gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNocm9uby50cmlnZ2VyKFxyXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbixcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IHRoaXMuc3RhdGUubGlzdC5zbGljZSgxKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGxpc3QgPSBbLi4ubGlzdCwge3gsIHksIGlkOiBEYXRlLm5vdygpfV07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3R9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7bGlzdH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VUkuVG91Y2hhYmxlIGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cInJpcHBsZS1jb3JlLXdyYXBwZXJcIiBvblRhcD17dGhpcy50b3VjaH0gcmVmPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAge2xpc3QubWFwKCh7aWQsIHgsIHl9KSA9PiA8ZGl2IGtleT17aWR9IHN0eWxlPXt7dG9wOiB5LCBsZWZ0OiB4fX0gY2xhc3NOYW1lPVwicmlwcGxlLWNvcmUtZG90XCIgLz4pfVxyXG4gICAgICAgICAgICA8L1VJLlRvdWNoYWJsZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaXBwbGU7XHJcbiIsImltcG9ydCB7ZGVmaW5lQ29tcG9uZW50U3R5bGV9IGZyb20gXCJsaWItc291cmNlL3YyL3N0eWxlXCI7XHJcbi8vIGltcG9ydCBSaXBwbGUgZnJvbSBcImxpYi1zb3VyY2UvdWl2Mi9SaXBwbGVcIjtcclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ3RvZ2dsZScsXHJcbiAgICAnY29yZScsXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250YWluZXJcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgNTAwbXMgbGluZWFyJyxcclxuICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY29udGFpbmVyOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNzUpJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRvZ2dsZS1jb250YWluZXJcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgcmlnaHQ6IDEzLFxyXG4gICAgICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogOCxcclxuICAgICAgICAgICAgZm9udFNpemU6IDExLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE1LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyYXknLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjJweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidG9nZ2xlLWNvbnRhaW5lcltkYXRhLW9uPSd0cnVlJ11cIjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYmVkMGJkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0b2dnbGVcIjoge1xyXG4gICAgICAgICAgICBXZWJraXRUcmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciAxNTBtcyBsaW5lYXIsIC13ZWJraXQtdHJhbnNmb3JtIDE1MG1zIGxpbmVhcicsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGxpbmVhciwgdHJhbnNmb3JtIDE1MG1zIGxpbmVhcicsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICBsZWZ0OiAtMTEsXHJcbiAgICAgICAgICAgIHRvcDogLTcsXHJcbiAgICAgICAgICAgIC8vIHRvcDogJzUwJScsXHJcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMixcclxuICAgICAgICAgICAgd2lkdGg6IDIyLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE1LFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyxcclxuICAgICAgICAgICAgYm94U2hhZG93OiAnMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidG9nZ2xlW2RhdGEtb249J2ZhbHNlJ11cIjoge1xyXG4gICAgICAgICAgICAvLyBsZWZ0OiAwLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRvZ2dsZVtkYXRhLW9uPSd0cnVlJ11cIjoge1xyXG4gICAgICAgICAgICAvLyByaWdodDogMCxcclxuICAgICAgICAgICAgLy8gbGVmdDogMzAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMzBweCknLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjRiMzI0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMsXHJcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogNzAsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdWJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmNvbnN0IFRvZ2dsZSA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBvbiA9IGZhbHNlLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHN1YlRpdGxlID0gbnVsbCxcclxuICAgICAgICBvbkNoYW5nZSA9ICgpID0+IGNvbnNvbGUud2FybihcIk5vIG9uQ2hhbmdlIGdpdmVuIHRvIGNoZWNrYm94XCIpXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBsZXQgY29udGVudCA9IGxhYmVsO1xyXG4gICAgbGV0IHRvZ2dsZVN0eWxlO1xyXG5cclxuICAgIGlmIChzdWJUaXRsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWNvcmUtc3VidGl0bGVcIj57c3ViVGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VUkuVG91Y2hhYmxlIGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cInRvZ2dsZS1jb3JlLWNvbnRhaW5lclwiIG9uVGFwPXsoKSA9PiBvbkNoYW5nZSghb24pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtY29yZS1sYWJlbFwiPntjb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1jb3JlLXRvZ2dsZS1jb250YWluZXJcIiBkYXRhLW9uPXtvbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1jb3JlLXRvZ2dsZVwiIGRhdGEtb249e29ufSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qPFJpcHBsZSAvPiovfVxyXG4gICAgICAgIDwvVUkuVG91Y2hhYmxlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcclxuIiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xyXG5jb25zdCB7c3FydH0gPSBNYXRoO1xyXG5cclxubGV0IFRvdWNoYWJsZTtcclxuXHJcblRvdWNoYWJsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHRvdWNoU3RhcnQoZXZ0KSB7XHJcbiAgICAgICAgY29uc3Qge29uVG91Y2hTdGFydH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IFt0b3VjaF0gPSBldnQuY2hhbmdlZFRvdWNoZXM7XHJcblxyXG4gICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmNsYXNzTGlzdC5hZGQoXCJjb3ItdG91Y2gtYWN0aXZlXCIpO1xyXG4gICAgICAgIGlmIChvblRvdWNoU3RhcnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQoZXZ0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5mbyA9IHtcclxuICAgICAgICAgICAgaWQ6IHRvdWNoLmlkZW50aWZpZXIsXHJcbiAgICAgICAgICAgIHg6IHRvdWNoLnBhZ2VYLFxyXG4gICAgICAgICAgICB5OiB0b3VjaC5wYWdlWVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdG91Y2hNb3ZlKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IHtvblRvdWNoTW92ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChvblRvdWNoTW92ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlKGV2dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldnQuY2hhbmdlZFRvdWNoZXM6OmZvckVhY2godG91Y2ggPT4ge1xyXG4gICAgICAgICAgICBpZiAodG91Y2guaWRlbnRpZmllciAhPT0gdGhpcy5pbmZvLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzcXJ0KCh0b3VjaC5wYWdlWCAtIHRoaXMuaW5mby54KSAqKiAyICsgKHRvdWNoLnBhZ2VZIC0gdGhpcy5pbmZvLnkpICoqIDIpID4gMjUpIHtcclxuICAgICAgICAgICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmNsYXNzTGlzdC5yZW1vdmUoXCJjb3ItdG91Y2gtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG91Y2hFbmQoZXZ0KSB7XHJcbiAgICAgICAgY29uc3Qge29uVG91Y2hFbmR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAob25Ub3VjaEVuZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9uVG91Y2hFbmQoZXZ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZ0LmNoYW5nZWRUb3VjaGVzOjpmb3JFYWNoKHRvdWNoID0+IHtcclxuICAgICAgICAgICAgaWYgKHRvdWNoLmlkZW50aWZpZXIgIT09IHRoaXMuaW5mby5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5jbGFzc0xpc3QucmVtb3ZlKFwiY29yLXRvdWNoLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLnByb3BzLm9uVG91Y2hFbmQoZXZ0KTtcclxuICAgIH0sXHJcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtub2RlfSA9IHRoaXMucmVmcztcclxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICd0YXAnLFxyXG4gICAgICAgICAgICBldnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge29uVGFwfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob25UYXAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXM6Om9uVGFwKGV2dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyA6OnRoaXMucHJvcHMub25UYXAoZXZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnaG9sZCcsXHJcbiAgICAgICAgICAgIGV2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7b25Ib2xkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob25Ib2xkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzOjpvbkhvbGQoZXZ0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIDo6dGhpcy5wcm9wcy5vbkhvbGQoZXZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtjb21wb25lbnQgPSBudWxsLCBjaGlsZHJlbiwgb25UYXAsIG9uSG9sZCwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50UHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzLFxyXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMudG91Y2hTdGFydCxcclxuICAgICAgICAgICAgb25Ub3VjaE1vdmU6IHRoaXMudG91Y2hNb3ZlLFxyXG4gICAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLnRvdWNoRW5kLFxyXG4gICAgICAgICAgICBvblRvdWNoQ2FuY2VsOiB0aGlzLnRvdWNoRW5kXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKENvbXBvbmVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHBhc3MgYSBjb21wb25lbnQgaW50byBUb3VjaGFibGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPENvbXBvbmVudCByZWY9XCJub2RlXCIgey4uLmNvbXBvbmVudFByb3BzfT57Y2hpbGRyZW59PC9Db21wb25lbnQ+O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvdWNoYWJsZTtcclxuIiwiY29uc3QgY3NzTm9NZWFzdXJlbWVudCA9IG5ldyBTZXQoW1xyXG4gICAgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiLFxyXG4gICAgXCJib3hGbGV4XCIsXHJcbiAgICBcImJveEZsZXhHcm91cFwiLFxyXG4gICAgXCJib3hPcmRpbmFsR3JvdXBcIixcclxuICAgIFwiY29sdW1uQ291bnRcIixcclxuICAgIFwiZmlsbE9wYWNpdHlcIixcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJmbGV4R3Jvd1wiLFxyXG4gICAgXCJmbGV4UG9zaXRpdmVcIixcclxuICAgIFwiZmxleFNocmlua1wiLFxyXG4gICAgXCJmbGV4TmVnYXRpdmVcIixcclxuICAgIFwiZmxleE9yZGVyXCIsXHJcbiAgICBcImZvbnRXZWlnaHRcIixcclxuICAgIFwibGluZUNsYW1wXCIsXHJcbiAgICBcImxpbmVIZWlnaHRcIixcclxuICAgIFwib3BhY2l0eVwiLFxyXG4gICAgXCJvcmRlclwiLFxyXG4gICAgXCJvcnBoYW5zXCIsXHJcbiAgICBcInN0b3BPcGFjaXR5XCIsXHJcbiAgICBcInN0cm9rZURhc2hvZmZzZXRcIixcclxuICAgIFwic3Ryb2tlT3BhY2l0eVwiLFxyXG4gICAgXCJzdHJva2VXaWR0aFwiLFxyXG4gICAgXCJ0YWJTaXplXCIsXHJcbiAgICBcIndpZG93c1wiLFxyXG4gICAgXCJ6SW5kZXhcIixcclxuICAgIFwiem9vbVwiXHJcbl0pO1xyXG5jb25zdCBjc3NQcmVmaXhOYW1lcyA9IG5ldyBTZXQoW1xyXG4gICAgJ3RyYW5zZm9ybScsXHJcbiAgICAnYm94LXNoYWRvdycsXHJcbiAgICAndHJhbnNpdGlvbicsXHJcbiAgICAnYW5pbWF0aW9uJyxcclxuICAgICdhbmltYXRpb25EZWxheScsXHJcbiAgICAnYW5pbWF0aW9uRGlyZWN0aW9uJyxcclxuICAgICdhbmltYXRpb25EdXJhdGlvbicsXHJcbiAgICAnYW5pbWF0aW9uRmlsbE1vZGUnLFxyXG4gICAgJ2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50JyxcclxuICAgICdhbmltYXRpb25OYW1lJyxcclxuICAgICdhbmltYXRpb25QbGF5U3RhdGUnLFxyXG4gICAgJ2FuaW1hdGlvblRpbWluZ0Z1bmN0aW9uJ1xyXG5dKTtcclxuY29uc3QgY3NzUHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1tcy0nLCAnLW8tJywgJyddO1xyXG5cclxuY29uc3QgZ2V0Q1NTVmFsdWUgPSAocHJvcCwgdmFsdWUpID0+IHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubWFwKGdldENTU1ZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGNzc05vTWVhc3VyZW1lbnQuaGFzKHByb3ApID09PSBmYWxzZSkge1xyXG4gICAgICAgIHZhbHVlICs9IFwicHhcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBbdmFsdWVdO1xyXG59O1xyXG5jb25zdCBwcm9jZXNzU2VsZWN0b3IgPSAoY29tcG9uZW50TmFtZSwgc3R5bGVOYW1lLCBzZWxlY3RvcikgPT4ge1xyXG4gICAgY29uc3QgcGFydHMgPSBzZWxlY3Rvci5zcGxpdCgvXFxzKy8pO1xyXG4gICAgY29uc3QgcmVhbFBhcnRzID0gcGFydHMubWFwKHBhcnQgPT4ge1xyXG4gICAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoXCI6YWN0aXZlXCIsIFwiLmNvci10b3VjaC1hY3RpdmVcIik7XHJcbiAgICAgICAgcmV0dXJuIHBhcnQuc3BsaXQoJy8nKS5tYXAocGFydCA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBwYXJ0LmNoYXJBdCgwKSA9PT0gXCIkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnQuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIC9eW2Etel0vaS50ZXN0KHBhcnQpID09PSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgLiR7Y29tcG9uZW50TmFtZX0tJHtzdHlsZU5hbWV9LSR7cGFydH1gO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmpvaW4oJy4nKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlYWxQYXJ0cy5qb2luKCcgJyk7XHJcbn07XHJcbmNvbnN0IHByb2Nlc3NEZWYgPSAoY3NzTGluZXMsIHNlbGVjdG9yLCBkZWZzKSA9PiB7XHJcbiAgICBjc3NMaW5lcyA9IFsuLi5jc3NMaW5lcywgYCR7c2VsZWN0b3J9IHtgXTtcclxuICAgIGZvciAoY29uc3QgW2Nzc1Byb3AsIGNzc1ZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkZWZzKSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0Q1NTVmFsdWUoY3NzUHJvcCwgY3NzVmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHByb3AgPSBjc3NQcm9wLnJlcGxhY2UoL1tBLVpdL2csIGxldHRlciA9PiAnLScgKyBsZXR0ZXIudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgaWYgKGNzc1ByZWZpeE5hbWVzLmhhcyhjc3NQcm9wKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjc3NMaW5lcyA9IFtcclxuICAgICAgICAgICAgICAgIC4uLmNzc0xpbmVzLFxyXG4gICAgICAgICAgICAgICAgLi4uY3NzUHJlZml4ZXMubWFwKHByZWZpeCA9PiBgXFx0JHtwcmVmaXh9JHtwcm9wfTogJHt2YWx1ZVswXX07YClcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjc3NMaW5lcyA9IFtcclxuICAgICAgICAgICAgICAgIC4uLmNzc0xpbmVzLFxyXG4gICAgICAgICAgICAgICAgLi4udmFsdWUubWFwKHZhbHVlID0+IGBcXHQke3Byb3B9OiAke3ZhbHVlfTtgKVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNzc0xpbmVzID0gWy4uLmNzc0xpbmVzLCBcIn1cIl07XHJcbiAgICByZXR1cm4gY3NzTGluZXM7XHJcbiAgICAvLyBjc3NMaW5lcy5wdXNoKFwifVwiKTtcclxufTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudFN0eWxlcyA9IHt9O1xyXG5jb25zdCBjcmVhdGVQcm9wID0gKG9iamVjdCwgcHJvcE5hbWUsIGRlZmF1bHRWYWx1ZSkgPT4ge1xyXG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgb2JqZWN0W3Byb3BOYW1lXSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3RbcHJvcE5hbWVdO1xyXG59O1xyXG5jb25zdCBkZWZpbmVDb21wb25lbnRTdHlsZSA9IChjb21wb25lbnQsIHN0eWxlTmFtZSwgc3R5bGVzKSA9PlxyXG4gICAgY3JlYXRlUHJvcChcclxuICAgICAgICBjcmVhdGVQcm9wKGNvbXBvbmVudFN0eWxlcywgY29tcG9uZW50LCB7fSksXHJcbiAgICAgICAgc3R5bGVOYW1lLFxyXG4gICAgICAgIHN0eWxlc1xyXG4gICAgKTtcclxuXHJcbmNvbnN0IGNyZWF0ZVN0eWxlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKTtcclxuXHJcbiAgICAvLyAgSXRlcmF0ZSBvdmVyIHRoZSBjb21wb25lbnRzIHRoYXQgaGF2ZSBzdHlsZXMgZGVmaW5lZFxyXG4gICAgZm9yIChjb25zdCBbY29tcG9uZW50TmFtZSwgc3R5bGVzXSBvZiBPYmplY3QuZW50cmllcyhjb21wb25lbnRTdHlsZXMpKSB7XHJcbiAgICAgICAgLy8gIEl0ZXJhdGUgb3ZlciB0aGUgdmFyaW91cyBuYW1lZCBzdHlsZXMgZm9yIHRoZSBnaXZlbiBjb21wb25lbnRcclxuICAgICAgICBmb3IgKGNvbnN0IFtzdHlsZU5hbWUsIHN0eWxlRGVmc10gb2YgT2JqZWN0LmVudHJpZXMoc3R5bGVzKSkge1xyXG4gICAgICAgICAgICBsZXQgY3NzTGluZXMgPSBbXTtcclxuICAgICAgICAgICAgLy8gIEdyYWIgYWxsIHRoZSBpbmRpdmlkdWFsIGdyb3VwcyBvZiBzdHlsZXMgZGVmaW5lZCBpbiB0aGUgbmFtZWQgc3R5bGVcclxuICAgICAgICAgICAgZm9yIChjb25zdCBbZGVzY3JpcHRvciwgZGVmc10gb2YgT2JqZWN0LmVudHJpZXMoc3R5bGVEZWZzKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3Iuc3RhcnRzV2l0aChcIiFcIikgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgUmVwZWF0IGFuIGV4dHJhIHRpbWUgd2l0aCBwcmVmaXhlZCBrZXlmcmFtZXMgYmVjYXVzZSBpb3MgPCA5IGlzIHByZXR0eSBhd2Z1bFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0xpbmVzLnB1c2goYEAtd2Via2l0LWtleWZyYW1lcyAke2NvbXBvbmVudE5hbWV9LSR7c3R5bGVOYW1lfS1hbmltYXRpb24tJHtkZXNjcmlwdG9yLnNsaWNlKDEpfSB7YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIGRlZl0gb2YgT2JqZWN0LmVudHJpZXMoZGVmcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzTGluZXMgPSBwcm9jZXNzRGVmKGNzc0xpbmVzLCBzZWxlY3RvciwgZGVmKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzTGluZXMucHVzaChcIn1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICBub3JtYWwgQGtleWZyYW1lcyBjc3NcclxuICAgICAgICAgICAgICAgICAgICBjc3NMaW5lcy5wdXNoKGBAa2V5ZnJhbWVzICR7Y29tcG9uZW50TmFtZX0tJHtzdHlsZU5hbWV9LWFuaW1hdGlvbi0ke2Rlc2NyaXB0b3Iuc2xpY2UoMSl9IHtgKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgZGVmXSBvZiBPYmplY3QuZW50cmllcyhkZWZzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NMaW5lcyA9IHByb2Nlc3NEZWYoY3NzTGluZXMsIHNlbGVjdG9yLCBkZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjc3NMaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBwcm9jZXNzU2VsZWN0b3IoY29tcG9uZW50TmFtZSwgc3R5bGVOYW1lLCBkZXNjcmlwdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBjc3NMaW5lcyA9IHByb2Nlc3NEZWYoY3NzTGluZXMsIHNlbGVjdG9yLCBkZWZzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVUYWcuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVRhZy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIiwgYCR7Y29tcG9uZW50TmFtZX0vJHtzdHlsZU5hbWV9YCk7XHJcbiAgICAgICAgICAgIHN0eWxlVGFnLmlubmVySFRNTCA9IGNzc0xpbmVzLmpvaW4oJ1xcbicpO1xyXG4gICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlVGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5sZXQgdGhlbWVWYWx1ZXM7XHJcbmNvbnN0IFRoZW1lID0ge1xyXG4gICAgZGVmaW5lKHRoZW1lKSB7XHJcbiAgICAgICAgdGhlbWVWYWx1ZXMgPSB0aGVtZTtcclxuICAgIH0sXHJcbiAgICBnZXQgdmFyaWFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoZW1lVmFsdWVzO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGVmaW5lQ29tcG9uZW50U3R5bGUsXHJcbiAgICBUaGVtZSxcclxuICAgIF9fc2V0dXA6IGNyZWF0ZVN0eWxlc1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllc1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZW50cmllc1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3NldFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkYXNzaWduID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfT2JqZWN0JGFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGNyZWF0ZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfT2JqZWN0JHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IF9PYmplY3QkY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfT2JqZWN0JHNldFByb3RvdHlwZU9mID8gX09iamVjdCRzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID1cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IG1vZHVsZS5leHBvcnRzLCBfX2VzTW9kdWxlOiB0cnVlIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9TeW1ib2wgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbFwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfT2JqZWN0JGNyZWF0ZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfT2JqZWN0JHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfUHJvbWlzZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiKVtcImRlZmF1bHRcIl07XG5cbiEoZnVuY3Rpb24gKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIF9TeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IF9TeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBnZW5lcmF0b3IgPSBfT2JqZWN0JGNyZWF0ZSgob3V0ZXJGbiB8fCBHZW5lcmF0b3IpLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID0gR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICBpZiAoX09iamVjdCRzZXRQcm90b3R5cGVPZikge1xuICAgICAgX09iamVjdCRzZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gX09iamVjdCRjcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnRgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLiBTb21lIG1heSBjb25zaWRlciB0aGUgbmFtZSBvZiB0aGlzIG1ldGhvZCB0b29cbiAgLy8gY3V0ZXN5LCBidXQgdGhleSBhcmUgY3VybXVkZ2VvbnMuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIG5ldyBBd2FpdEFyZ3VtZW50KGFyZyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gQXdhaXRBcmd1bWVudChhcmcpIHtcbiAgICB0aGlzLmFyZyA9IGFyZztcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudCkge1xuICAgICAgICAgIHJldHVybiBfUHJvbWlzZS5yZXNvbHZlKHZhbHVlLmFyZykudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9Qcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy5kb21haW4pIHtcbiAgICAgIGludm9rZSA9IHByb2Nlc3MuZG9tYWluLmJpbmQoaW52b2tlKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgX1Byb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uIChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkpO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIiB8fCBtZXRob2QgPT09IFwidGhyb3dcIiAmJiBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIEEgcmV0dXJuIG9yIHRocm93ICh3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gdGhyb3dcbiAgICAgICAgICAgIC8vIG1ldGhvZCkgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICAgIHZhciByZXR1cm5NZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5NZXRob2QpIHtcbiAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKHJldHVybk1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJldHVybiBtZXRob2QgdGhyZXcgYW4gZXhjZXB0aW9uLCBsZXQgdGhhdFxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbiBwcmV2YWlsIG92ZXIgdGhlIG9yaWdpbmFsIHJldHVybiBvciB0aHJvdy5cbiAgICAgICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgIC8vIENvbnRpbnVlIHdpdGggdGhlIG91dGVyIHJldHVybiwgbm93IHRoYXQgdGhlIGRlbGVnYXRlXG4gICAgICAgICAgICAgIC8vIGl0ZXJhdG9yIGhhcyBiZWVuIHRlcm1pbmF0ZWQuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLCBkZWxlZ2F0ZS5pdGVyYXRvciwgYXJnKTtcblxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gTGlrZSByZXR1cm5pbmcgZ2VuZXJhdG9yLnRocm93KHVuY2F1Z2h0KSwgYnV0IHdpdGhvdXQgdGhlXG4gICAgICAgICAgICAvLyBvdmVyaGVhZCBvZiBhbiBleHRyYSBmdW5jdGlvbiBjYWxsLlxuICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERlbGVnYXRlIGdlbmVyYXRvciByYW4gYW5kIGhhbmRsZWQgaXRzIG93biBleGNlcHRpb25zIHNvXG4gICAgICAgICAgLy8gcmVnYXJkbGVzcyBvZiB3aGF0IHRoZSBtZXRob2Qgd2FzLCB3ZSBjb250aW51ZSBhcyBpZiBpdCBpc1xuICAgICAgICAgIC8vIFwibmV4dFwiIHdpdGggYW4gdW5kZWZpbmVkIGFyZy5cbiAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG4gICAgICAgICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkKSB7XG4gICAgICAgICAgICBjb250ZXh0LnNlbnQgPSBhcmc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lID8gR2VuU3RhdGVDb21wbGV0ZWQgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgdGhpcy5zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG4gICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiYgKHR5cGUgPT09IFwiYnJlYWtcIiB8fCB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8IHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4vLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4vLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3Rcbi8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG50eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDogdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHVuZGVmaW5lZCk7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuQXJyYXkuZnJvbTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLk9iamVjdC5hc3NpZ247IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJC5jcmVhdGUoUCwgRCk7XG59OyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoVCwgRCl7XG4gIHJldHVybiAkLnNldERlc2NzKFQsIEQpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLk9iamVjdC5lbnRyaWVzOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvJC5jb3JlJykuUHJvbWlzZTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc2V0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zZXQudG8tanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzLyQuY29yZScpLlNldDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5TeW1ib2w7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtUQUddKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBoaWRlICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgcmVkZWZpbmVBbGwgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpXG4gICwgY3R4ICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgc3RyaWN0TmV3ICAgID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKVxuICAsIGRlZmluZWQgICAgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCAkaXRlckRlZmluZSAgPSByZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKVxuICAsIHN0ZXAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLXN0ZXAnKVxuICAsIElEICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKSgnaWQnKVxuICAsICRoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIGlzT2JqZWN0ICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIHNldFNwZWNpZXMgICA9IHJlcXVpcmUoJy4vJC5zZXQtc3BlY2llcycpXG4gICwgREVTQ1JJUFRPUlMgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGlzT2JqZWN0XG4gICwgU0laRSAgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnXG4gICwgaWQgICAgICAgICAgID0gMDtcblxudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCEkaGFzKGl0LCBJRCkpe1xuICAgIC8vIGNhbid0IHNldCBpZCB0byBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBpZFxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBvYmplY3QgaWRcbiAgICBoaWRlKGl0LCBJRCwgKytpZCk7XG4gIC8vIHJldHVybiBvYmplY3QgaWQgd2l0aCBwcmVmaXhcbiAgfSByZXR1cm4gJ08nICsgaXRbSURdO1xufTtcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBzdHJpY3ROZXcodGhhdCwgQywgTkFNRSk7XG4gICAgICB0aGF0Ll9pID0gJC5jcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKVxuICAgICAgICAgICwgZW50cnk7XG4gICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZil7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZihERVNDUklQVE9SUykkLnNldERlc2MoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgZm9yT2YgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIGNsYXNzb2YgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICBmb3JPZih0aGlzLCBmYWxzZSwgYXJyLnB1c2gsIGFycik7XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCBzdHJpY3ROZXcgICAgICA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICBpZighREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgIHN0cmljdE5ldyh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgdGFyZ2V0Ll9jID0gbmV3IEJhc2U7XG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICAkLmVhY2guY2FsbCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMnLnNwbGl0KCcsJyksZnVuY3Rpb24oS0VZKXtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZihLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSloaWRlKEMucHJvdG90eXBlLCBLRVksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBpZighSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZignc2l6ZScgaW4gcHJvdG8pJC5zZXREZXNjKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIga2V5cyAgICAgICA9ICQuZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHM7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9ICQuaXNFbnVtXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpa2V5cy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIGlmKElTX1BST1RPKShleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgLy8gd3JhcFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvcjtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICB9XG59OyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgZ2V0TmFtZXMgID0gcmVxdWlyZSgnLi8kJykuZ2V0TmFtZXNcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnZXROYW1lcyhpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICBpZih3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJylyZXR1cm4gZ2V0V2luZG93TmFtZXMoaXQpO1xuICByZXR1cm4gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSk7XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTsiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbihhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLmhpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSAkLmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vJC5saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90byAgICAgICA9IHJlcXVpcmUoJy4vJCcpLmdldFByb3RvXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCBtZXRob2RzLCBrZXk7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJG5hdGl2ZSl7XG4gICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8oJGRlZmF1bHQuY2FsbChuZXcgQmFzZSkpO1xuICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAvLyBGRiBmaXhcbiAgICBpZighTElCUkFSWSAmJiBoYXMocHJvdG8sIEZGX0lURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICAgIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICAgIH1cbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJylcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59OyIsInZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9ICQuZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuLyQudGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbnZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gIHZhciBwYXJlbnQsIGRvbWFpbiwgZm47XG4gIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXtcbiAgICBwcm9jZXNzLmRvbWFpbiA9IG51bGw7XG4gICAgcGFyZW50LmV4aXQoKTtcbiAgfVxuICB3aGlsZShoZWFkKXtcbiAgICBkb21haW4gPSBoZWFkLmRvbWFpbjtcbiAgICBmbiAgICAgPSBoZWFkLmZuO1xuICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICBmbigpOyAvLyA8LSBjdXJyZW50bHkgd2UgdXNlIGl0IG9ubHkgZm9yIFByb21pc2UgLSB0cnkgLyBjYXRjaCBub3QgcmVxdWlyZWRcbiAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICBoZWFkID0gaGVhZC5uZXh0O1xuICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbn07XG5cbi8vIE5vZGUuanNcbmlmKGlzTm9kZSl7XG4gIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gIH07XG4vLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbn0gZWxzZSBpZihPYnNlcnZlcil7XG4gIHZhciB0b2dnbGUgPSAxXG4gICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9IC10b2dnbGU7XG4gIH07XG4vLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxufSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZsdXNoKTtcbiAgfTtcbi8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4vLyAtIHNldEltbWVkaWF0ZVxuLy8gLSBNZXNzYWdlQ2hhbm5lbFxuLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2Vcbi8vIC0gc2V0VGltZW91dFxufSBlbHNlIHtcbiAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXNhcChmbil7XG4gIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkLCBkb21haW46IGlzTm9kZSAmJiBwcm9jZXNzLmRvbWFpbn07XG4gIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgaWYoIWhlYWQpe1xuICAgIGhlYWQgPSB0YXNrO1xuICAgIG5vdGlmeSgpO1xuICB9IGxhc3QgPSB0YXNrO1xufTsiLCIvLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIGEgPSBPYmplY3QuYXNzaWduXG4gICAgLCBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuIGEoe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoYSh7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgJCQgICAgPSBhcmd1bWVudHNcbiAgICAsICQkbGVuID0gJCQubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldEtleXMgICAgPSAkLmdldEtleXNcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHNcbiAgICAsIGlzRW51bSAgICAgPSAkLmlzRW51bTtcbiAgd2hpbGUoJCRsZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoJCRbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfVxuICByZXR1cm4gVDtcbn0gOiBPYmplY3QuYXNzaWduOyIsInZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCBpc0VudW0gICAgPSAkLmlzRW51bTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNFbnRyaWVzKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KGl0KVxuICAgICAgLCBrZXlzICAgPSAkLmdldEtleXMoTylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaSAgICAgID0gMFxuICAgICAgLCByZXN1bHQgPSBbXVxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKXtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYyl7XG4gIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICByZXR1cm4gdGFyZ2V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5oaWRlJyk7IiwiLy8gNy4yLjkgU2FtZVZhbHVlKHgsIHkpXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KXtcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59OyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBnZXREZXNjICA9IHJlcXVpcmUoJy4vJCcpLmdldERlc2NcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vJC5jdHgnKShGdW5jdGlvbi5jYWxsLCBnZXREZXNjKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsICQgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGNvcmVbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkkLnNldERlc2MoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi8kJykuc2V0RGVzY1xuICAsIGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl0aHJvdyBUeXBlRXJyb3IobmFtZSArIFwiOiB1c2UgdGhlICduZXcnIG9wZXJhdG9yIVwiKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmRvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0bmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vJC5jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdG5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBzdG9yZSAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXG4gICwgU3ltYm9sID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLlN5bWJvbDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0gfHwgKFN5bWJvbCB8fCB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsICRleHBvcnQgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XG4gICAgdmFyIE8gICAgICAgPSB0b09iamVjdChhcnJheUxpa2UpXG4gICAgICAsIEMgICAgICAgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5XG4gICAgICAsICQkICAgICAgPSBhcmd1bWVudHNcbiAgICAgICwgJCRsZW4gICA9ICQkLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gJCRsZW4gPiAxID8gJCRbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgJCRsZW4gPiAyID8gJCRbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuLyQub2JqZWN0LWFzc2lnbicpfSk7IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXR9KTsiLG51bGwsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBMSUJSQVJZICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjdHggICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgY2xhc3NvZiAgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgaXNPYmplY3QgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKVxuICAsIHN0cmljdE5ldyAgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpXG4gICwgZm9yT2YgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIHNldFByb3RvICAgPSByZXF1aXJlKCcuLyQuc2V0LXByb3RvJykuc2V0XG4gICwgc2FtZSAgICAgICA9IHJlcXVpcmUoJy4vJC5zYW1lLXZhbHVlJylcbiAgLCBTUEVDSUVTICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLyQuc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgYXNhcCAgICAgICA9IHJlcXVpcmUoJy4vJC5taWNyb3Rhc2snKVxuICAsIFBST01JU0UgICAgPSAnUHJvbWlzZSdcbiAgLCBwcm9jZXNzICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBQICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgZW1wdHkgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBXcmFwcGVyO1xuXG52YXIgdGVzdFJlc29sdmUgPSBmdW5jdGlvbihzdWIpe1xuICB2YXIgdGVzdCA9IG5ldyBQKGVtcHR5KSwgcHJvbWlzZTtcbiAgaWYoc3ViKXRlc3QuY29uc3RydWN0b3IgPSBmdW5jdGlvbihleGVjKXtcbiAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gIH07XG4gIChwcm9taXNlID0gUC5yZXNvbHZlKHRlc3QpKVsnY2F0Y2gnXShlbXB0eSk7XG4gIHJldHVybiBwcm9taXNlID09PSB0ZXN0O1xufTtcblxudmFyIFVTRV9OQVRJVkUgPSBmdW5jdGlvbigpe1xuICB2YXIgd29ya3MgPSBmYWxzZTtcbiAgZnVuY3Rpb24gUDIoeCl7XG4gICAgdmFyIHNlbGYgPSBuZXcgUCh4KTtcbiAgICBzZXRQcm90byhzZWxmLCBQMi5wcm90b3R5cGUpO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG4gIHRyeSB7XG4gICAgd29ya3MgPSBQICYmIFAucmVzb2x2ZSAmJiB0ZXN0UmVzb2x2ZSgpO1xuICAgIHNldFByb3RvKFAyLCBQKTtcbiAgICBQMi5wcm90b3R5cGUgPSAkLmNyZWF0ZShQLnByb3RvdHlwZSwge2NvbnN0cnVjdG9yOiB7dmFsdWU6IFAyfX0pO1xuICAgIC8vIGFjdHVhbCBGaXJlZm94IGhhcyBicm9rZW4gc3ViY2xhc3Mgc3VwcG9ydCwgdGVzdCB0aGF0XG4gICAgaWYoIShQMi5yZXNvbHZlKDUpLnRoZW4oZnVuY3Rpb24oKXt9KSBpbnN0YW5jZW9mIFAyKSl7XG4gICAgICB3b3JrcyA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBhY3R1YWwgVjggYnVnLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDE2MlxuICAgIGlmKHdvcmtzICYmIHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpKXtcbiAgICAgIHZhciB0aGVuYWJsZVRoZW5Hb3R0ZW4gPSBmYWxzZTtcbiAgICAgIFAucmVzb2x2ZSgkLnNldERlc2Moe30sICd0aGVuJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHRoZW5hYmxlVGhlbkdvdHRlbiA9IHRydWU7IH1cbiAgICAgIH0pKTtcbiAgICAgIHdvcmtzID0gdGhlbmFibGVUaGVuR290dGVuO1xuICAgIH1cbiAgfSBjYXRjaChlKXsgd29ya3MgPSBmYWxzZTsgfVxuICByZXR1cm4gd29ya3M7XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICBpZihMSUJSQVJZICYmIGEgPT09IFAgJiYgYiA9PT0gV3JhcHBlcilyZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHNhbWUoYSwgYik7XG59O1xudmFyIGdldENvbnN0cnVjdG9yID0gZnVuY3Rpb24oQyl7XG4gIHZhciBTID0gYW5PYmplY3QoQylbU1BFQ0lFU107XG4gIHJldHVybiBTICE9IHVuZGVmaW5lZCA/IFMgOiBDO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpLFxuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KVxufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHJlY29yZCwgaXNSZWplY3Qpe1xuICBpZihyZWNvcmQubilyZXR1cm47XG4gIHJlY29yZC5uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcmVjb3JkLmM7XG4gIGFzYXAoZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSByZWNvcmQudlxuICAgICAgLCBvayAgICA9IHJlY29yZC5zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXJlY29yZC5oID0gdHJ1ZTtcbiAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyID09PSB0cnVlID8gdmFsdWUgOiBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgY2hhaW4ubGVuZ3RoID0gMDtcbiAgICByZWNvcmQubiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0KXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHZhciBwcm9taXNlID0gcmVjb3JkLnBcbiAgICAgICAgLCBoYW5kbGVyLCBjb25zb2xlO1xuICAgICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IHJlY29yZC5hID0gdW5kZWZpbmVkO1xuICAgIH0sIDEpO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdmFyIHJlY29yZCA9IHByb21pc2UuX2RcbiAgICAsIGNoYWluICA9IHJlY29yZC5hIHx8IHJlY29yZC5jXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgaWYocmVjb3JkLmgpcmV0dXJuIGZhbHNlO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcmVjb3JkID0gdGhpcztcbiAgaWYocmVjb3JkLmQpcmV0dXJuO1xuICByZWNvcmQuZCA9IHRydWU7XG4gIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXG4gIHJlY29yZC52ID0gdmFsdWU7XG4gIHJlY29yZC5zID0gMjtcbiAgcmVjb3JkLmEgPSByZWNvcmQuYy5zbGljZSgpO1xuICBub3RpZnkocmVjb3JkLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciByZWNvcmQgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihyZWNvcmQuZClyZXR1cm47XG4gIHJlY29yZC5kID0gdHJ1ZTtcbiAgcmVjb3JkID0gcmVjb3JkLnIgfHwgcmVjb3JkOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihyZWNvcmQucCA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIGFzYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7cjogcmVjb3JkLCBkOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjb3JkLnYgPSB2YWx1ZTtcbiAgICAgIHJlY29yZC5zID0gMTtcbiAgICAgIG5vdGlmeShyZWNvcmQsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtyOiByZWNvcmQsIGQ6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgUCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgdmFyIHJlY29yZCA9IHRoaXMuX2QgPSB7XG4gICAgICBwOiBzdHJpY3ROZXcodGhpcywgUCwgUFJPTUlTRSksICAgICAgICAgLy8gPC0gcHJvbWlzZVxuICAgICAgYzogW10sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgICAgYTogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgICBzOiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICAgIGQ6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBkb25lXG4gICAgICB2OiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgIGg6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBoYW5kbGVkIHJlamVjdGlvblxuICAgICAgbjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgcmVjb3JkLCAxKSwgY3R4KCRyZWplY3QsIHJlY29yZCwgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbChyZWNvcmQsIGVycik7XG4gICAgfVxuICB9O1xuICByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJykoUC5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBQKSlcbiAgICAgICAgLCBwcm9taXNlICA9IHJlYWN0aW9uLnByb21pc2VcbiAgICAgICAgLCByZWNvcmQgICA9IHRoaXMuX2Q7XG4gICAgICByZWFjdGlvbi5vayAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVjb3JkLmMucHVzaChyZWFjdGlvbik7XG4gICAgICBpZihyZWNvcmQuYSlyZWNvcmQuYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHJlY29yZC5zKW5vdGlmeShyZWNvcmQsIGZhbHNlKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogUH0pO1xucmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJykoUCwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuLyQuc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuLyQuY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8IHRlc3RSZXNvbHZlKHRydWUpKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mIFAgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gIFAuYWxsKGl0ZXIpWydjYXRjaCddKGZ1bmN0aW9uKCl7fSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IGdldENvbnN0cnVjdG9yKHRoaXMpXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3RcbiAgICAgICwgdmFsdWVzICAgICA9IFtdO1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIHZhbHVlcy5wdXNoLCB2YWx1ZXMpO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHZhbHVlcy5sZW5ndGhcbiAgICAgICAgLCByZXN1bHRzICAgPSBBcnJheShyZW1haW5pbmcpO1xuICAgICAgaWYocmVtYWluaW5nKSQuZWFjaC5jYWxsKHZhbHVlcywgZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpe1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICBlbHNlIHJlc29sdmUocmVzdWx0cyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKVxuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnU2V0JywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmtleW9mJylcbiAgLCAkbmFtZXMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nZXQtbmFtZXMnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi8kLmVudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgZ2V0RGVzYyAgICAgICAgPSAkLmdldERlc2NcbiAgLCBzZXREZXNjICAgICAgICA9ICQuc2V0RGVzY1xuICAsIF9jcmVhdGUgICAgICAgID0gJC5jcmVhdGVcbiAgLCBnZXROYW1lcyAgICAgICA9ICRuYW1lcy5nZXRcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBzZXR0ZXIgICAgICAgICA9IGZhbHNlXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIGlzRW51bSAgICAgICAgID0gJC5pc0VudW1cbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgdXNlTmF0aXZlICAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKHNldERlc2Moe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHNldERlc2ModGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ2V0RGVzYyhPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBzZXREZXNjKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKXNldERlc2MoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBzZXREZXNjO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2wucHJvdG90eXBlKTtcbiAgc3ltLl9rID0gdGFnO1xuICBERVNDUklQVE9SUyAmJiBzZXR0ZXIgJiYgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpc2V0RGVzYyhpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gc2V0RGVzYyhpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5KTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XVxuICAgID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHZhciBEID0gZ2V0RGVzYyhpdCA9IHRvSU9iamVjdChpdCksIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTilyZXN1bHQucHVzaChrZXkpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gIHZhciBhcmdzID0gW2l0XVxuICAgICwgaSAgICA9IDFcbiAgICAsICQkICAgPSBhcmd1bWVudHNcbiAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gIHdoaWxlKCQkLmxlbmd0aCA+IGkpYXJncy5wdXNoKCQkW2krK10pO1xuICByZXBsYWNlciA9IGFyZ3NbMV07XG4gIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gIH07XG4gIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xufTtcbnZhciBidWdneUpTT04gPSAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSk7XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIXVzZU5hdGl2ZSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZihpc1N5bWJvbCh0aGlzKSl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHJldHVybiB3cmFwKHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCkpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgaXNTeW1ib2wgPSBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbiAgfTtcblxuICAkLmNyZWF0ZSAgICAgPSAkY3JlYXRlO1xuICAkLmlzRW51bSAgICAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICQuZ2V0RGVzYyAgICA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICQuc2V0RGVzYyAgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgJC5zZXREZXNjcyAgID0gJGRlZmluZVByb3BlcnRpZXM7XG4gICQuZ2V0TmFtZXMgICA9ICRuYW1lcy5nZXQgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgJC5nZXRTeW1ib2xzID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi8kLmxpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cbn1cblxudmFyIHN5bWJvbFN0YXRpY3MgPSB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn07XG4vLyAxOS40LjIuMiBTeW1ib2wuaGFzSW5zdGFuY2Vcbi8vIDE5LjQuMi4zIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVcbi8vIDE5LjQuMi40IFN5bWJvbC5pdGVyYXRvclxuLy8gMTkuNC4yLjYgU3ltYm9sLm1hdGNoXG4vLyAxOS40LjIuOCBTeW1ib2wucmVwbGFjZVxuLy8gMTkuNC4yLjkgU3ltYm9sLnNlYXJjaFxuLy8gMTkuNC4yLjEwIFN5bWJvbC5zcGVjaWVzXG4vLyAxOS40LjIuMTEgU3ltYm9sLnNwbGl0XG4vLyAxOS40LjIuMTIgU3ltYm9sLnRvUHJpbWl0aXZlXG4vLyAxOS40LjIuMTMgU3ltYm9sLnRvU3RyaW5nVGFnXG4vLyAxOS40LjIuMTQgU3ltYm9sLnVuc2NvcGFibGVzXG4kLmVhY2guY2FsbCgoXG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsJyArXG4gICdzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBmdW5jdGlvbihpdCl7XG4gIHZhciBzeW0gPSB3a3MoaXQpO1xuICBzeW1ib2xTdGF0aWNzW2l0XSA9IHVzZU5hdGl2ZSA/IHN5bSA6IHdyYXAoc3ltKTtcbn0pO1xuXG5zZXR0ZXIgPSB0cnVlO1xuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVywge1N5bWJvbDogJFN5bWJvbH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1N5bWJvbCcsIHN5bWJvbFN0YXRpY3MpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICF1c2VOYXRpdmUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCF1c2VOYXRpdmUgfHwgYnVnZ3lKU09OKSwgJ0pTT04nLCB7c3RyaW5naWZ5OiAkc3RyaW5naWZ5fSk7XG5cbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7IiwiLy8gaHR0cDovL2dvby5nbC9Ya0JyakRcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRlbnRyaWVzID0gcmVxdWlyZSgnLi8kLm9iamVjdC10by1hcnJheScpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhpdCl7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1NldCcsIHt0b0pTT046IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXRvLWpzb24nKSgnU2V0Jyl9KTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbkl0ZXJhdG9ycy5Ob2RlTGlzdCA9IEl0ZXJhdG9ycy5IVE1MQ29sbGVjdGlvbiA9IEl0ZXJhdG9ycy5BcnJheTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxuICB0cnkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICB9XG59ICgpKVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gY2FjaGVkU2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8vIGltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XHJcbmltcG9ydCBJY29uIGZyb20gJ2xpYi1zb3VyY2UvdWl2Mi9pY29uJztcclxuaW1wb3J0IFJpcHBsZSBmcm9tICdsaWItc291cmNlL3VpdjIvcmlwcGxlJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdsaWItc291cmNlL3VpdjIvYnV0dG9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnbGliLXNvdXJjZS91aXYyL2ljb25idXR0b24nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdsaWItc291cmNlL3VpdjIvQ2FyZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdsaWItc291cmNlL3VpdjIvSW1hZ2UnO1xyXG5pbXBvcnQgQ2VudGVyQ29udGVudCBmcm9tICdsaWItc291cmNlL3VpdjIvQ2VudGVyQ29udGVudCc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdsaWItc291cmNlL3VpdjIvQ2hlY2tib3gnO1xyXG5pbXBvcnQgVG9nZ2xlIGZyb20gJ2xpYi1zb3VyY2UvdWl2Mi9Ub2dnbGUnO1xyXG5pbXBvcnQgVG91Y2hhYmxlIGZyb20gJ2xpYi1zb3VyY2UvdWl2Mi9Ub3VjaGFibGUnO1xyXG5pbXBvcnQge2RlZmluZUNvbXBvbmVudFN0eWxlLCBUaGVtZSBhcyBfVGhlbWUsIF9fc2V0dXAgYXMgY3JlYXRlU3R5bGVzfSBmcm9tIFwibGliLXNvdXJjZS92Mi9zdHlsZVwiO1xyXG5cclxuY29uc3QgcmFuZ2UgPSBmdW5jdGlvbiogKGFyZ3MpIHtcclxuICBsZXQge3N0YXJ0ID0gMCwgZW5kID0gbnVsbCwgY291bnQgPSBudWxsLCBzdGVwID0gMSwgbWFwID0gaSA9PiBpfSA9IGFyZ3M7XHJcblxyXG4gIGlmIChlbmQgPT09IG51bGwpIHtcclxuICAgIGlmIChjb3VudCA9PT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGdpdmUgdGhlIHNpemUgb2YgdGhlIHJhbmdlXCIpXHJcbiAgICB9XHJcbiAgICBlbmQgPSBzdGFydCArIGNvdW50O1xyXG4gIH1cclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGlmIChzdGFydCA+PSBlbmQpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB5aWVsZCBtYXAoc3RhcnQpO1xyXG4gICAgc3RhcnQgKz0gc3RlcDtcclxuICB9XHJcbn07XHJcblxyXG53aW5kb3cuZnJhbmdlID0gZnVuY3Rpb24qIChjb3VudCkge1xyXG4gICAgbGV0IGN1cnJlbnQgPSAwO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBpZiAoY3VycmVudCA9PT0gY291bnQpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHlpZWxkIGN1cnJlbnQ7XHJcbiAgICAgICAgY3VycmVudCArPSAxO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3Qge1JvdXRlfSA9IFJlYWN0Um91dGVyO1xyXG5cclxuY29uc3QgY29vbEJsdWUgPSBcIiMyRkIxREZcIjtcclxuXHJcblRoZW1lLmRlZmluZSh7XHJcbiAgICBhcHA6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgdGV4dENvbG9yOiAnIzc0NzQ3NCdcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgICBob3ZlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjExKScsXHJcbiAgICAgICAgYWN0aXZlQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgIHJhaXNlZDoge1xyXG4gICAgICAgICAgICBjb2xvcjogY29vbEJsdWUsXHJcbiAgICAgICAgICAgIHRleHRDb2xvcjogJ3doaXRlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gICAgcHJvZ3Jlc3NiYXI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQjNDRUVEJyxcclxuICAgICAgICBjb2xvcjogJyMzQjhBRjMnXHJcbiAgICB9LFxyXG4gICAgcmFkaW86IHtcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IGNvb2xCbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJhbmdlSW5wdXQ6IHtcclxuICAgICAgICB0cmFjazoge1xyXG4gICAgICAgICAgICBjb2xvcjogY29vbEJsdWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3dpdGNoOiB7XHJcbiAgICAgICAgdHJhY2s6IHtcclxuICAgICAgICAgICAgY29sb3I6IGNvb2xCbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb29sQmx1ZSxcclxuICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZSdcclxuICAgIH0sXHJcbiAgICB1c2VySW5wdXQ6IHtcclxuICAgICAgICBhY3RpdmVDb2xvcjogJyMyRkIxREYnLFxyXG4gICAgICAgIHRleHRDb2xvcjogJ2JsYWNrJ1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IFNjcmVlblRyYW5zaXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJSd9fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgIH1cclxufSk7XHJcblxyXG5TdHlsZS5fX3Jhd0NTUyhcclxuICAgIFwidGVzdFwiLFxyXG4gICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi50ZXN0LWVudGVyXCIsXHJcbiAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nOiAnbGVmdCAyNTBtcyBlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIGxlZnQ6ICcxMDAlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLnRlc3QtZW50ZXIudGVzdC1lbnRlci1hY3RpdmVcIixcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIudGVzdC1sZWF2ZVwiLFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzogJ2xlZnQgMjUwbXMgZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIudGVzdC1sZWF2ZS50ZXN0LWxlYXZlLWFjdGl2ZVwiLFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6ICctMTAwJSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi50ZXN0LWFwcGVhclwiLFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzogJ3RvcCAyNTBtcyBlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIHRvcDogJzEwMCUnLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLnRlc3QtYXBwZWFyLnRlc3QtYXBwZWFyLWFjdGl2ZVwiLFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENTU1RyYW5zaXRpb24gY29tcG9uZW50PVwiZGl2XCIgdHJhbnNpdGlvbk5hbWU9XCJ0ZXN0XCIgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MjUwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXsyNTB9PlxyXG4gICAgICAgICAgICAgICAgPFNjcmVlblRyYW5zaXRpb24ga2V5PXtEYXRlLm5vdygpfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvU2NyZWVuVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgRmlsbGVyID0gKHtjb2xvcn0pID0+IDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiBjb2xvcn19IC8+O1xyXG5jb25zdCB0ZXN0ID0gbiA9PiAoXHJcbiAgICA8VUkuQ2FyZCB0aXRsZT1cIlRlc3QgSXRlbVwiPntufTwvVUkuQ2FyZD5cclxuKTtcclxuXHJcbmNvbnN0IFRlc3QgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcclxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGlsZCwgY2hpbGQudHlwZS52YWx1ZU5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxyXG59O1xyXG5cclxuY2xhc3MgRm9ybWF0dGVkSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogXCJcIn07XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlID0gKGV2dCkgPT4ge1xyXG4gICAgICAgIGxldCB7dmFsdWV9ID0gZXZ0LnRhcmdldDtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlICsgdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuY2hhbmdlfSAvPlxyXG59XHJcblxyXG4vLyBjb25zdCBIb3JpeiA9ICh7Y2hpbGRyZW59KSA9PiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICAgIHtSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5tYXAoY2hpbGQgPT4gKX1cclxuLy8gICAgIDwvZGl2PlxyXG4vLyApO1xyXG5cclxuU3R5bGUuX19yYXdDU1MoXHJcbiAgICBcImRlbW9cIixcclxuICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIubm9ybWFsXCIsXHJcbiAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3lhbidcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG4vLyBjb25zdCBCdXR0b24gPSAoey4uLmJ1dHRvblByb3BzLCB0ZXh0fSkgPT4gPGJ1dHRvbiBzdHlsZT17e3doaXRlU3BhY2U6ICdwcmUnfX0gey4uLmJ1dHRvblByb3BzfT57dGV4dH08L2J1dHRvbj47XHJcbi8vIGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlTmFtZSA9PiB7XHJcbi8vICAgICBzdHlsZU5hbWUgPSBgJHtzdHlsZU5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtzdHlsZU5hbWUuc2xpY2UoMSl9YDtcclxuLy8gICAgIEJ1dHRvbltzdHlsZU5hbWVdID0gcHJvcHMgPT4gPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlTmFtZX0gey4uLnByb3BzfSAvPjtcclxuLy8gfTtcclxuLy9cclxuLy8gU3R5bGVkQnV0dG9uKFwibm9ybWFsXCIpO1xyXG5cclxuXHJcbl9UaGVtZS5kZWZpbmUoe1xyXG4gICAgY29yZToge1xyXG4gICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6IFwiYmxhY2tcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vLyB3aW5kb3cuYmVuY2htYXJrID0gKGl0ZXJhdGlvbnMsIGZpcnN0LCBzZWNvbmQpID0+IHtcclxuLy8gICAgIGNvbnN0IHIgPSBbXTtcclxuLy8gICAgIGZvciAoY29uc3QgdGVzdE51bSBvZiByYW5nZSh7Y291bnQ6IDMwfSkpIHtcclxuLy8gICAgICAgICBsZXQgYSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgaSArPSAxKSB7XHJcbi8vICAgICAgICAgICAgIGZpcnN0KCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGEgPSBwZXJmb3JtYW5jZS5ub3coKSAtIGE7XHJcbi8vXHJcbi8vICAgICAgICAgbGV0IGIgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnM7IGkgKz0gMSkge1xyXG4vLyAgICAgICAgICAgICBzZWNvbmQoKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgYiA9IHBlcmZvcm1hbmNlLm5vdygpIC0gYjtcclxuLy8gICAgICAgICByLnB1c2goW2EudG9GaXhlZCgzKSwgYi50b0ZpeGVkKDMpXSk7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gcjtcclxuLy8gfTtcclxuLy9cclxuLy8gY29uc3QgY2hlY2tQcm9wID0gKG9iaiwgcHJvcCwgdmFsdWUpID0+IG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSA9PT0gdHJ1ZSAmJiBvYmpbcHJvcF0gPT09IHZhbHVlO1xyXG4vLyBjb25zdCB4ID0ge2E6IDEwLCBiOiAxMn07XHJcbi8vIGNvbnN0IHJlcyA9IGJlbmNobWFyaygxZTYsICgpID0+IHR5cGVvZiB4LmMgPT09ICd1bmRlZmluZWQnLCAoKSA9PiB4LmMgPT09IHVuZGVmaW5lZCk7XHJcbi8vIGNvbnNvbGUubG9nKHJlcy5tYXAoaSA9PiBpLmpvaW4oJ1xcdCcpKS5qb2luKCdcXG4nKSk7XHJcblxyXG4vKlxyXG5jb25zdCB1cmwgPSBcImh0dHA6Ly92aWduZXR0ZTEud2lraWEubm9jb29raWUubmV0L2JheW9uZXR0YS9pbWFnZXMvZS9lMy9DZXJlemFfQmF5b25ldHRhXzJfcmVuZGVyLnBuZy9yZXZpc2lvbi9sYXRlc3Q/Y2I9MjAxNDA2MTUyMTAwMjVcIjtcclxuKi9cclxuY29uc3QgdXJsID0gXCJodHRwOi8vYXNzZXRzMS5pZ25pbWdzLmNvbS90aHVtYnMvdXNlclVwbG9hZGVkLzIwMTQvMTAvMTIvQmF5b25ldHRhMl8xMjgwLTE0MTMxNDI0NTExMDAuanBnXCI7XHJcblxyXG5jb25zdCBhbmltYXRpb25UaW1lID0gMjUwO1xyXG5kZWZpbmVDb21wb25lbnRTdHlsZShcclxuICAgICdkaWFsb2cnLFxyXG4gICAgJ2NvcmUnLFxyXG4gICAge1xyXG4gICAgICAgIFwib3ZlcmxheVwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMzUpJyxcclxuICAgICAgICAgICAgekluZGV4OiAnKzEwMCcsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICdhdXRvJyxcclxuICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHthbmltYXRpb25UaW1lfW1zIGxpbmVhcmBcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogJ25vbmUnXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXCJ3aW5kb3dcIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICB3aWR0aDogJzc1JScsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA0ODAsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3aW5kb3ctdG9wXCI6IHtcclxuICAgICAgICAgICAgdG9wOiAnMTUlJyxcclxuICAgICAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRvdy1jZW50ZXJcIjoge1xyXG4gICAgICAgICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwiY29udGVudFwiOiB7XHJcbiAgICAgICAgICAgIG1heEhlaWdodDogJzQwdmgnLFxyXG4gICAgICAgICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgICAgLy8gcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBsaWdodGdyYXknLFxyXG4gICAgICAgICAgICBib3JkZXJUb3A6ICcxcHggc29saWQgbGlnaHRncmF5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0aXRsZVwiOiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICc1IDE1JyxcclxuICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBcIi53aW5kb3dcIjoge1xyXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAvLyAgICAgdG9wOiAnMTUlJyxcclxuICAgICAgICAvLyAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgLy8gICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgLy8gICAgIGJveFNoYWRvdzogJzBweCAwcHggMzVweCByZ2JhKDAsIDAsIDAsIDAuNiknLFxyXG4gICAgICAgIC8vICAgICB3aWR0aDogJzcwJScsXHJcbiAgICAgICAgLy8gICAgIG1heFdpZHRoOiA0ODAsXHJcbiAgICAgICAgLy8gICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgLy8gICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuNXMnLFxyXG4gICAgICAgIC8vICAgICBib3JkZXJSYWRpdXM6IDNcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vICcuY29udGVudCc6IHtcclxuICAgICAgICAvLyAgICAgbWF4SGVpZ2h0OiAnNDB2aCcsXHJcbiAgICAgICAgLy8gICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxyXG4gICAgICAgIC8vICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgIC8vICAgICBwYWRkaW5nOiAxNSxcclxuICAgICAgICAvLyAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWigwKSdcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIFwiLnRpdGxlXCI6IHtcclxuICAgICAgICAvLyAgICAgbGluZUhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIC8vICAgICBwYWRkaW5nOiAxNSxcclxuICAgICAgICAvLyAgICAgcGFkZGluZ1RvcDogMTAsXHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmdCb3R0b206IDAsXHJcbiAgICAgICAgLy8gICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAvLyAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICAgIC8vICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gXCIuYnV0dG9uc1wiOiB7XHJcbiAgICAgICAgLy8gICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgICAgICAvLyAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAvLyAgICAgaGVpZ2h0OiAzNVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBcIi5sb2FkU3Bpbm5lclwiOiB7XHJcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIC8vICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICAgIC8vICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICAvLyAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgICAgICAvLyAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIC8vICAgICBib3JkZXJSYWRpdXM6IDMsXHJcbiAgICAgICAgLy8gICAgIG1pbldpZHRoOiA1NFxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmxldCBjdXJyZW50RGlhbG9nID0gbnVsbDtcclxud2luZG93LmRpYWxvZyA9IHtcclxuICAgIGdldCBjdXJyZW50KCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50RGlhbG9nO1xyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3ModmFsdWUpIHtcclxuICAgICAgICByZXR1cm4ge3ZhbHVlLCBzdGF0dXM6ICdzdWNjZXNzJ307XHJcbiAgICB9LFxyXG4gICAgY2FuY2VsKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHt2YWx1ZSwgc3RhdHVzOiAnY2FuY2VsZWQnfTtcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkKHZhbHVlID0gbnVsbCwgcmVhc29uID0gJ2ludmFsaWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHt2YWx1ZSwgcmVhc29ufTtcclxuICAgIH1cclxufTtcclxuY2xhc3MgRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG51bGwsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IG51bGwsXHJcbiAgICAgICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgIHBvczogJ3RvcCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IG51bGwsXHJcbiAgICAgICAgICAgIGNsb3NhYmxlOiAhdHJ1ZSxcclxuICAgICAgICAgICAgYnV0dG9uczogbnVsbCxcclxuICAgICAgICAgICAgdGl0bGU6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyA9IGFzeW5jIChkaXNwbGF5UHJvcHMpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpbmcgPT09IHRydWUgfHwgdGhpcy5yZXNvbHZlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGlhbG9nLmludmFsaWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZXIgPSBuZXcgUHJvbWlzZShcclxuICAgICAgICAgICAgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlID0gdmFsdWUgPT4gcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBudWxsLFxyXG4gICAgICAgICAgICBjbG9zYWJsZSA9IHRydWUsXHJcbiAgICAgICAgICAgIGJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7dGV4dDogJ29rJ31cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdGl0bGUgPSBudWxsLFxyXG4gICAgICAgICAgICBzZXR1cCA9IG51bGxcclxuICAgICAgICB9ID0gZGlzcGxheVByb3BzO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiAnYmxvY2snLCBjb250ZW50LCBidXR0b25zLCBjbG9zYWJsZSwgdGl0bGV9KTtcclxuICAgICAgICBhd2FpdCBjaHJvbm8ud2FpdCg1MCk7XHJcbiAgICAgICAgdGhpcy5yZWZzLmNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgIGlmIChzZXR1cCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXR1cCh0aGlzLnJlZnMuY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BhY2l0eTogMX0pO1xyXG4gICAgICAgIGF3YWl0IGNocm9uby53YWl0KGFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVzb2x2ZXI7XHJcbiAgICB9XHJcbiAgICBoaWRlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hbmltYXRpbmcsIHRoaXMuYW5pbWF0aW5nID09PSB0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpbmcgPT09IHRydWUgfHwgdGhpcy5yZXNvbHZlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wYWNpdHk6IG51bGx9KTtcclxuICAgICAgICBhd2FpdCBjaHJvbm8ud2FpdChhbmltYXRpb25UaW1lKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiBudWxsfSk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb25zZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVyID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNsb3NhYmxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGlkZShkaWFsb2cuY2FuY2VsKG51bGwpKTtcclxuICAgIH1cclxuICAgIHN0b3BwZXIgPSAoZXZ0KSA9PiB7XHJcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnREaWFsb2cgPSB0aGlzO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY3VycmVudERpYWxvZyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtkaXNwbGF5LCBvcGFjaXR5LCBwb3MsIGNvbnRlbnQsIGJ1dHRvbnMsIHRpdGxlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uTGlzdCA9IChidXR0b25zIHx8IFtdKS5tYXAoXHJcbiAgICAgICAgICAgICh7dGV4dCwgdmFsdWUgPSBudWxsLCBjYW5jZWxzID0gZmFsc2V9LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdmFsdWVGdW5jID0gKGNhbmNlbHMgPT09IHRydWUpID8gZGlhbG9nLmNhbmNlbCA6IGRpYWxvZy5zdWNjZXNzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0VmFsdWUgPSAoY2FuY2VscyA9PT0gdHJ1ZSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2FuY2VsKHZhbHVlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5zdWNjZXNzKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8QnV0dG9uIHRleHQ9e3RleHR9IGtleT17aW5kZXh9IG9uVGFwPXsoKSA9PiB0aGlzLmhpZGUocmV0VmFsdWUpfSBibG9jayBmbHVzaCAvPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IHRpdGxlRGlzcGxheSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aXRsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aXRsZURpc3BsYXkgPSA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy1jb3JlLXRpdGxlXCI+e3RpdGxlfTwvZGl2PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxUb3VjaGFibGUgY29tcG9uZW50PVwiZGl2XCIgb25UYXA9e3RoaXMuY2xvc2V9IGNsYXNzTmFtZT1cImRpYWxvZy1jb3JlLW92ZXJsYXlcIiBzdHlsZT17e2Rpc3BsYXksIG9wYWNpdHl9fT5cclxuICAgICAgICAgICAgICAgIDxUb3VjaGFibGUgY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPXtgZGlhbG9nLWNvcmUtd2luZG93IGRpYWxvZy1jb3JlLXdpbmRvdy0ke3Bvc31gfSBvblRhcD17dGhpcy5zdG9wcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGVEaXNwbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLWNvcmUtY29udGVudFwiIHJlZj1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8QnV0dG9uIHRleHQ9XCJkZW1vXCIgYmxvY2sgb25UYXA9eygpID0+IHRoaXMuaGlkZSgndGVzdCcpfSAvPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VUkuRmxleGJveCBjb2xDb3VudD17M30+e2J1dHRvbkxpc3R9PC9VSS5GbGV4Ym94PlxyXG4gICAgICAgICAgICAgICAgPC9Ub3VjaGFibGU+XHJcbiAgICAgICAgICAgIDwvVG91Y2hhYmxlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlZmluZUNvbXBvbmVudFN0eWxlKFxyXG4gICAgJ2NvbWJvYm94JyxcclxuICAgICdjb3JlJyxcclxuICAgIHtcclxuICAgICAgICAnY29udGFpbmVyJzoge1xyXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAzLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaWNvblwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICAgICAgICByaWdodDogMTAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxyXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5jb25zdCBjb21ib2JveFNlbGVjdCA9IChpbmRleCwgdmFsdWUpID0+IGRpYWxvZy5zdWNjZXNzKFtpbmRleCwgdmFsdWVdKTtcclxuY2xhc3MgQ29tYm9ib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3RpdGxlID0gXCJDb21ib2JveCFcIiwgc2Nyb2xsVG9TZWxlY3RlZCA9IGZhbHNlLCBzZWxlY3RlZEluZGV4fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpYWxvZy5jdXJyZW50LnNob3coe1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgY29udGVudDogY2hpbGRyZW4ubWFwKFxyXG4gICAgICAgICAgICAgICAgKHtwcm9wczoge3ZhbHVlID0gbnVsbCwgY2hpbGRyZW4sIHN0eWxlID0gbnVsbCwgY2xhc3NOYW1lID0gbnVsbH19LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9uVGFwID0gKCkgPT4gZGlhbG9nLmN1cnJlbnQuaGlkZShjb21ib2JveFNlbGVjdChpbmRleCwgdmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHsuLi57c3R5bGUsIGNsYXNzTmFtZX19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtjaGlsZHJlbn0gYmxvY2sgZmx1c2ggb25UYXA9e29uVGFwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICB7dGV4dDogXCJDYW5jZWxcIiwgY2FuY2VsczogdHJ1ZX1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgc2V0dXAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9TZWxlY3RlZCA9PT0gdHJ1ZSAmJiBzZWxlY3RlZEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBjb250YWluZXIuY2hpbGRyZW5bc2VsZWN0ZWRJbmRleF0ub2Zmc2V0VG9wIC0gY29udGFpbmVyLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKC4uLnJlc3BvbnNlLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtzZWxlY3RlZEluZGV4LCBjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGZsYXR0ZW5lZENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDaGlsZCA9IFwiUGxlYXNlIHNlbGVjdCBhbiBvcHRpb25cIjtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDaGlsZCA9IGZsYXR0ZW5lZENoaWxkcmVuW3NlbGVjdGVkSW5kZXhdLnByb3BzLmNoaWxkcmVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRvdWNoYWJsZSBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJjb21ib2JveC1jb3JlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtjdXJyZW50Q2hpbGR9IGJsb2NrIGZsdXNoIG9uVGFwPXt0aGlzLm9wZW5PcHRpb25zfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21ib2JveC1jb3JlLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaW9uLWFycm93LWRvd24tYlwiIHNpemU9ezI0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVG91Y2hhYmxlPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gcmV0dXJuIDxkaXY+RWRpdCBNZTwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgT3B0aW9uID0gKCkgPT4ge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiT3B0aW9uIGlzIGludGVuZGVkIGFzIGEgZmlsbGVyIGVsZW1lbnQgYW5kIHNob3VsZCBub3QgYmUgcmVuZGVyZWQgb24gaXRzIG93blwiKTtcclxufTtcclxuXHJcblxyXG5pbXBvcnQgU3Bpbm5lckRhdGFVUkwgZnJvbSBcImxpYi1zb3VyY2UvZGF0YS11cmkvbG9hZC1zcGlubmVyLmdpZi5zb3VyY2VcIjtcclxuY29uc3QgU3Bpbm5lciA9ICh7c2l6ZX0pID0+IDxJbWFnZSB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSBzb3VyY2U9e1NwaW5uZXJEYXRhVVJMfSAvPjtcclxuXHJcblxyXG5jb25zdCBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgYXN5bmMgZGVtbygpIHtcclxuICAgICAgICBpZiAoYXdhaXQgRGlhbG9nLmNvbmZpcm0oXCJSZWFsbHk/XCIpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm9wZSFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgb246IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluZGV4OiAtMVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZGlhbG9nVGVzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYXdhaXQgZGlhbG9nLmN1cnJlbnQuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlRlc3Rpbmc/XCIsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6ICdhJywgdmFsdWU6IDEwfSxcclxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogJ2InLCBjYW5jZWxzOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFsZXJ0IVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2Rpc2FibGVkfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxVSS5TY3JlZW4gdGl0bGU9XCJUZXN0XCIgYmFja1RleHQ9e1widGVzdFwifSB3aWR0aD17NjAwfSBvbkJhY2s9e3RoaXMuZGVtb30+XHJcbiAgICAgICAgICAgICAgICB7Lyo8SW1hZ2Ugc291cmNlPXt1cmx9IGhlaWdodD17MTUwfSBjb2xvcj1cImN5YW5cIiAvPiovfVxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH0gb25DaGFuZ2U9e2NoZWNrZWQgPT4gdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZH0pfSBsYWJlbD17XCJUZXN0XCJ9IHN1YlRpdGxlPVwibW9yZSB0ZXh0P1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8VG9nZ2xlIG9uPXt0aGlzLnN0YXRlLm9ufSBvbkNoYW5nZT17b24gPT4gdGhpcy5zZXRTdGF0ZSh7b259KX0gbGFiZWw9e1wiVGVzdFwifSBzdWJUaXRsZT1cIm1vcmUgdGV4dD9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXs8c3Bhbj57ZGlzYWJsZWQgPyA8U3Bpbm5lciBzaXplPXsyMH0gLz4gOiBudWxsfUJ1dHRvbiBUZXh0PC9zcGFuPn0gZGlzYWJsZWQ9e2Rpc2FibGVkfSBvblRhcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7ZGlzYWJsZWQ6IHRydWV9KX0gLz5cclxuICAgICAgICAgICAgICAgIDxDb21ib2JveCBzZWxlY3RlZEluZGV4PXt0aGlzLnN0YXRlLmluZGV4fSBvbkNoYW5nZT17aW5kZXggPT4gdGhpcy5zZXRTdGF0ZSh7aW5kZXh9KX0gc2Nyb2xsVG9TZWxlY3RlZD5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8T3B0aW9uIHZhbHVlPXswfT5UZXN0PC9PcHRpb24+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAge0FycmF5LmZyb20ocmFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcDogaSA9PiA8T3B0aW9uIHZhbHVlPXtpICoqIGl9PjxTcGlubmVyIHNpemU9ezE0fSAvPlRlc3Qge2l9PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9eydsb2wnfT48SW1hZ2Ugc291cmNlPXt1cmx9IGhlaWdodD17NTB9IHdpZHRoPVwiNTAlXCIgLz48L09wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29tYm9ib3g+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nIC8+XHJcbiAgICAgICAgICAgIDwvVUkuU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQXBwLnN0YXJ0KFxyXG4gICAgPFJvdXRlIGNvbXBvbmVudD17V3JhcHBlcn0+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtNYWlufSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Rlc3RcIiBjb21wb25lbnQ9e01haW59IC8+XHJcbiAgICA8L1JvdXRlPlxyXG4pO1xyXG5jcmVhdGVTdHlsZXMoKTtcclxuIl19

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],2:[function(require,module,exports){
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _ReactRouter = ReactRouter;
var Route = _ReactRouter.Route;

var Wrapper = (function () {
    function Wrapper() {
        _classCallCheck(this, Wrapper);
    }

    Wrapper.prototype.render = function render() {
        return React.createElement(
            'div',
            { style: { backgroundColor: 'lightteal', height: '100%' } },
            this.props.children
        );
    };

    return Wrapper;
})();

var Demo = (function () {
    function Demo() {
        _classCallCheck(this, Demo);
    }

    Demo.prototype.render = function render() {
        console.log(this);
        return React.createElement(
            UI.Screen,
            { scrollable: true },
            React.createElement(
                UI.Card,
                null,
                'Blah'
            )
        );
    };

    return Demo;
})();

App.start(React.createElement(
    Route,
    { component: Wrapper },
    React.createElement(Route, { path: '/', component: Demo }),
    React.createElement(Route, { path: '/test', component: Demo })
));

},{"babel-runtime/helpers/class-call-check":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O21CQ1JjLFdBQVc7SUFBcEIsS0FBSyxnQkFBTCxLQUFLOztJQUVKLE9BQU87YUFBUCxPQUFPOzhCQUFQLE9BQU87OztBQUFQLFdBQU8sV0FDVCxNQUFNLEdBQUMsa0JBQUc7QUFDTixlQUFPOztjQUFLLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxBQUFDO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQU8sQ0FBQztLQUNsRzs7V0FIQyxPQUFPOzs7SUFNUCxJQUFJO2FBQUosSUFBSTs4QkFBSixJQUFJOzs7QUFBSixRQUFJLFdBQ04sTUFBTSxHQUFDLGtCQUFHO0FBQ04sZUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQixlQUFPO0FBQUMsY0FBRSxDQUFDLE1BQU07Y0FBQyxVQUFVLEVBQUUsSUFBSSxBQUFDO1lBQy9CO0FBQUMsa0JBQUUsQ0FBQyxJQUFJOzs7YUFFRTtTQUNGLENBQUE7S0FDZjs7V0FSQyxJQUFJOzs7QUFXVixHQUFHLENBQUMsS0FBSyxDQUNMO0FBQUMsU0FBSztNQUFDLFNBQVMsRUFBRSxPQUFPLEFBQUM7SUFDdEIsb0JBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksQUFBQyxHQUFHO0lBQ25DLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztDQUNuQyxDQUNYLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwibGV0IHtSb3V0ZX0gPSBSZWFjdFJvdXRlcjtcclxuXHJcbmNsYXNzIFdyYXBwZXIge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ2xpZ2h0dGVhbCcsIGhlaWdodDogJzEwMCUnfX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBEZW1vIHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIDxVSS5TY3JlZW4gc2Nyb2xsYWJsZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgIDxVSS5DYXJkPlxyXG4gICAgICAgICAgICAgICAgQmxhaFxyXG4gICAgICAgICAgICA8L1VJLkNhcmQ+XHJcbiAgICAgICAgPC9VSS5TY3JlZW4+XHJcbiAgICB9XHJcbn1cclxuXHJcbkFwcC5zdGFydChcclxuICAgIDxSb3V0ZSBjb21wb25lbnQ9e1dyYXBwZXJ9PlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17RGVtb30gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi90ZXN0XCIgY29tcG9uZW50PXtEZW1vfSAvPlxyXG4gICAgPC9Sb3V0ZT5cclxuKTtcclxuIl19

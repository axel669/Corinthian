(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Demo = React.createClass({
    displayName: "Demo",

    render: function render() {
        return React.createElement(
            UI.Screen,
            { scrollable: true },
            React.createElement(
                UI.Card,
                null,
                React.createElement(UI.Button, { style: { height: 100 }, text: React.createElement(
                        "span",
                        null,
                        "LOL",
                        React.createElement("br", null),
                        "TEST"
                    ) }),
                React.createElement(UI.TextInput, { icon: "ion-email", iconStyle: { color: 'teal' }, fillWidth: "80%" }),
                React.createElement(
                    "div",
                    { style: { width: 100, height: 100, border: '1px solid black' } },
                    React.createElement(UI.Button, { text: "woah", fillContainer: true })
                ),
                factotum.range(10, function (n) {
                    return React.createElement(UI.Image, { source: "adriana.jpg", width: "100%", height: 100 });
                })
            )
        );
    }
});

App.start(React.createElement(ReactRouter.Route, { handler: Demo }));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ3pCLFVBQU0sRUFBQyxrQkFBRztBQUNOLGVBQU87QUFBQyxjQUFFLENBQUMsTUFBTTtjQUFDLFVBQVUsRUFBRSxJQUFJLEFBQUM7WUFDL0I7QUFBQyxrQkFBRSxDQUFDLElBQUk7O2dCQUNKLG9CQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUMsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxBQUFDLEVBQUMsSUFBSSxFQUFFOzs7O3dCQUFTLCtCQUFNOztxQkFBVyxBQUFDLEdBQUc7Z0JBQ3JFLG9CQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUUsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLEFBQUMsRUFBQyxTQUFTLEVBQUMsS0FBSyxHQUFHO2dCQUM3RTs7c0JBQUssS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQyxBQUFDO29CQUM3RCxvQkFBQyxFQUFFLENBQUMsTUFBTSxJQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsYUFBYSxFQUFFLElBQUksQUFBQyxHQUFHO2lCQUM1QztnQkFDTCxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxVQUFBLENBQUM7MkJBQUksb0JBQUMsRUFBRSxDQUFDLEtBQUssSUFBQyxNQUFNLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFFLEdBQUcsQUFBQyxHQUFHO2lCQUFBLENBQUM7YUFDL0U7U0FDRixDQUFBO0tBQ2Y7Q0FDSixDQUFDLENBQUM7O0FBRUgsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQkFBQyxXQUFXLENBQUMsS0FBSyxJQUFDLE9BQU8sRUFBRSxJQUFJLEFBQUMsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IERlbW8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiA8VUkuU2NyZWVuIHNjcm9sbGFibGU9e3RydWV9PlxyXG4gICAgICAgICAgICA8VUkuQ2FyZD5cclxuICAgICAgICAgICAgICAgIDxVSS5CdXR0b24gc3R5bGU9e3toZWlnaHQ6IDEwMH19IHRleHQ9ezxzcGFuPkxPTDxiciAvPlRFU1Q8L3NwYW4+fSAvPlxyXG4gICAgICAgICAgICAgICAgPFVJLlRleHRJbnB1dCBpY29uPVwiaW9uLWVtYWlsXCIgaWNvblN0eWxlPXt7Y29sb3I6ICd0ZWFsJ319IGZpbGxXaWR0aD1cIjgwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjayd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VUkuQnV0dG9uIHRleHQ9XCJ3b2FoXCIgZmlsbENvbnRhaW5lcj17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2ZhY3RvdHVtLnJhbmdlKDEwLCBuID0+IDxVSS5JbWFnZSBzb3VyY2U9XCJhZHJpYW5hLmpwZ1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17MTAwfSAvPil9XHJcbiAgICAgICAgICAgIDwvVUkuQ2FyZD5cclxuICAgICAgICA8L1VJLlNjcmVlbj5cclxuICAgIH1cclxufSk7XHJcblxyXG5BcHAuc3RhcnQoPFJlYWN0Um91dGVyLlJvdXRlIGhhbmRsZXI9e0RlbW99IC8+KTtcclxuIl19

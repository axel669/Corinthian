(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// import CSSTransition from 'react-addons-css-transition-group';

'use strict';

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

var url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";

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

var Filler = function Filler(_ref) {
    var color = _ref.color;
    return React.createElement('div', { style: { width: '100%', height: '100%', backgroundColor: color } });
};
var test = function test(n) {
    return React.createElement(
        UI.Card,
        { title: 'Test Item' },
        n
    );
};

var Main = React.createClass({
    displayName: 'Main',

    render: function render() {
        return React.createElement(
            UI.Screen,
            { title: 'Test', backText: "test", scrollable: true },
            React.createElement(
                UI.Flexbox,
                { colCount: 4, autopad: true },
                factotum.range(7, function (n) {
                    return test(n);
                })
            ),
            React.createElement(UI.ProgressBar, { progress: 0.5, color: 'blue' }),
            React.createElement(UI.ProgressBar, { progress: 0.5, backgroundColor: 'green', height: 20, cornerRadius: 10 })
        );
    }
});

App.start(React.createElement(
    Route,
    { component: Wrapper },
    React.createElement(Route, { path: '/', component: Main }),
    React.createElement(Route, { path: '/test', component: Main })
));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7bUJDRWdCLFdBQVc7SUFBcEIsS0FBSyxnQkFBTCxLQUFLOztBQUVaLElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQzs7QUFFM0IsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNULE9BQUcsRUFBRTtBQUNELHVCQUFlLEVBQUUsT0FBTztBQUN4QixpQkFBUyxFQUFFLFNBQVM7S0FDdkI7QUFDRCxVQUFNLEVBQUU7QUFDSixrQkFBVSxFQUFFLHFCQUFxQjtBQUNqQyxtQkFBVyxFQUFFLG9CQUFvQjtBQUNqQyxjQUFNLEVBQUU7QUFDSixpQkFBSyxFQUFFLFFBQVE7QUFDZixxQkFBUyxFQUFFLE9BQU87U0FDckI7S0FDSjtBQUNELFFBQUksRUFBRTtBQUNGLHVCQUFlLEVBQUUsT0FBTztLQUMzQjtBQUNELGVBQVcsRUFBRTtBQUNULHVCQUFlLEVBQUUsU0FBUztBQUMxQixhQUFLLEVBQUUsU0FBUztLQUNuQjtBQUNELFNBQUssRUFBRTtBQUNILFlBQUksRUFBRTtBQUNGLHlCQUFhLEVBQUUsUUFBUTtTQUMxQjtLQUNKO0FBQ0QsY0FBVSxFQUFFO0FBQ1IsYUFBSyxFQUFFO0FBQ0gsaUJBQUssRUFBRSxRQUFRO1NBQ2xCO0tBQ0o7QUFDRCxjQUFRO0FBQ0osYUFBSyxFQUFFO0FBQ0gsaUJBQUssRUFBRSxRQUFRO1NBQ2xCO0tBQ0o7QUFDRCxTQUFLLEVBQUU7QUFDSCx1QkFBZSxFQUFFLFFBQVE7QUFDekIsaUJBQVMsRUFBRSxPQUFPO0tBQ3JCO0FBQ0QsYUFBUyxFQUFFO0FBQ1AsbUJBQVcsRUFBRSxTQUFTO0FBQ3RCLGlCQUFTLEVBQUUsT0FBTztLQUNyQjtDQUNKLENBQUMsQ0FB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QUMsRUFBRSxDQUFDLFdBQVcsSUFBQyxRQUFRLEVBQUUsR0FBRyxBQUFDLEVBQUMsZUFBZSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsRUFBRSxBQUFDLEVBQUMsWUFBWSxFQUFFLEVBQUUsQUFBQyxHQUFHO1NBQy9FLENBQ2Q7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxHQUFHLENBQUMsS0FBSyxDQUNMO0FBQUMsU0FBSztNQUFDLFNBQVMsRUFBRSxPQUFPLEFBQUM7SUFDdEIsb0JBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksQUFBQyxHQUFHO0lBQ25DLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztDQUNuQyxDQUNYLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gaW1wb3J0IENTU1RyYW5zaXRpb24gZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcclxuXHJcbmNvbnN0IHtSb3V0ZX0gPSBSZWFjdFJvdXRlcjtcclxuXHJcbmNvbnN0IGNvb2xCbHVlID0gXCIjMkZCMURGXCI7XHJcblxyXG5UaGVtZS5kZWZpbmUoe1xyXG4gICAgYXBwOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHRleHRDb2xvcjogJyM3NDc0NzQnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgaG92ZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4xMSknLFxyXG4gICAgICAgIGFjdGl2ZUNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICByYWlzZWQ6IHtcclxuICAgICAgICAgICAgY29sb3I6IGNvb2xCbHVlLFxyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ1xyXG4gICAgfSxcclxuICAgIHByb2dyZXNzYmFyOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0IzQ0VFRCcsXHJcbiAgICAgICAgY29sb3I6ICcjM0I4QUYzJ1xyXG4gICAgfSxcclxuICAgIHJhZGlvOiB7XHJcbiAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENvbG9yOiBjb29sQmx1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByYW5nZUlucHV0OiB7XHJcbiAgICAgICAgdHJhY2s6IHtcclxuICAgICAgICAgICAgY29sb3I6IGNvb2xCbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN3aXRjaDoge1xyXG4gICAgICAgIHRyYWNrOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBjb29sQmx1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29vbEJsdWUsXHJcbiAgICAgICAgdGV4dENvbG9yOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gICAgdXNlcklucHV0OiB7XHJcbiAgICAgICAgYWN0aXZlQ29sb3I6ICcjMkZCMURGJyxcclxuICAgICAgICB0ZXh0Q29sb3I6ICdibGFjaydcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCB1cmwgPSBcImh0dHA6Ly9hc3NldHMxLmlnbmltZ3MuY29tL3RodW1icy91c2VyVXBsb2FkZWQvMjAxNC8xMC8xMi9CYXlvbmV0dGEyXzEyODAtMTQxMzE0MjQ1MTEwMC5qcGdcIjtcclxuXHJcbmNvbnN0IFNjcmVlblRyYW5zaXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJSd9fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgIH1cclxufSk7XHJcblxyXG5TdHlsZS5fX3Jhd0NTUyhcclxuICAgIFwidGVzdFwiLFxyXG4gICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi50ZXN0LWVudGVyXCIsXHJcbiAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nOiAnbGVmdCAyNTBtcyBlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIGxlZnQ6ICcxMDAlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLnRlc3QtZW50ZXIudGVzdC1lbnRlci1hY3RpdmVcIixcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIudGVzdC1sZWF2ZVwiLFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzogJ2xlZnQgMjUwbXMgZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIudGVzdC1sZWF2ZS50ZXN0LWxlYXZlLWFjdGl2ZVwiLFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6ICctMTAwJSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi50ZXN0LWFwcGVhclwiLFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzogJ3RvcCAyNTBtcyBlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIHRvcDogJzEwMCUnLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLnRlc3QtYXBwZWFyLnRlc3QtYXBwZWFyLWFjdGl2ZVwiLFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENTU1RyYW5zaXRpb24gY29tcG9uZW50PVwiZGl2XCIgdHJhbnNpdGlvbk5hbWU9XCJ0ZXN0XCIgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MjUwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXsyNTB9PlxyXG4gICAgICAgICAgICAgICAgPFNjcmVlblRyYW5zaXRpb24ga2V5PXtEYXRlLm5vdygpfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvU2NyZWVuVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgRmlsbGVyID0gKHtjb2xvcn0pID0+IDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiBjb2xvcn19IC8+O1xyXG5jb25zdCB0ZXN0ID0gbiA9PiAoXHJcbiAgICA8VUkuQ2FyZCB0aXRsZT1cIlRlc3QgSXRlbVwiPntufTwvVUkuQ2FyZD5cclxuKTtcclxuXHJcbmNvbnN0IE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFVJLlNjcmVlbiB0aXRsZT1cIlRlc3RcIiBiYWNrVGV4dD17XCJ0ZXN0XCJ9IHNjcm9sbGFibGU+XHJcbiAgICAgICAgICAgICAgICA8VUkuRmxleGJveCBjb2xDb3VudD17NH0gYXV0b3BhZD5cclxuICAgICAgICAgICAgICAgICAgICB7ZmFjdG90dW0ucmFuZ2UoNywgbiA9PiB0ZXN0KG4pKX1cclxuICAgICAgICAgICAgICAgIDwvVUkuRmxleGJveD5cclxuICAgICAgICAgICAgICAgIDxVSS5Qcm9ncmVzc0JhciBwcm9ncmVzcz17MC41fSBjb2xvcj1cImJsdWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFVJLlByb2dyZXNzQmFyIHByb2dyZXNzPXswLjV9IGJhY2tncm91bmRDb2xvcj1cImdyZWVuXCIgaGVpZ2h0PXsyMH0gY29ybmVyUmFkaXVzPXsxMH0gLz5cclxuICAgICAgICAgICAgPC9VSS5TY3JlZW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5BcHAuc3RhcnQoXHJcbiAgICA8Um91dGUgY29tcG9uZW50PXtXcmFwcGVyfT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01haW59IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvdGVzdFwiIGNvbXBvbmVudD17TWFpbn0gLz5cclxuICAgIDwvUm91dGU+XHJcbik7XHJcbiJdfQ==

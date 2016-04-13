(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":2}],2:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperties(T, D){
  return $.setDescs(T, D);
};
},{"../../modules/$":3}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
'use strict';

var _Object$defineProperties = require('babel-runtime/core-js/object/define-properties')['default'];

var _ReactRouter = ReactRouter;
var Route = _ReactRouter.Route;

Theme.define({
    app: {
        backgroundColor: 'white',
        textColor: '#747474'
    },
    button: {
        color: '#2FB1DF',
        textColor: 'white',
        hoverColor: 'rgba(0, 0, 0, 0.11)',
        activeColor: 'rgba(0, 0, 0, 0.2)',
        raised: {
            color: '#2FB1DF',
            textColor: 'white'
        }
    },
    title: {
        backgroundColor: '#2FB1DF',
        textColor: 'white'
    },
    rangeInput: {
        track: {
            color: "#2FB1DF"
        }
    },
    'switch': {
        track: {
            color: '#2FB1DF'
        }
    },
    userInput: {
        activeColor: '#2FB1DF',
        textColor: 'black'
    }
});

var url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";

var DataCenter = (function () {
    var cache = {
        routes: null
    };
    return {
        loadRoutes: function loadRoutes(loc, cb) {
            cb(null, cache.routes);
        },
        updateRoutes: function updateRoutes(routes) {
            cache.routes = routes;
        }
    };
})();

var App1 = (function () {
    var Main = function Main() {
        return React.createElement(
            UI.Screen,
            { title: 'App 1 Main' },
            React.createElement(UI.Button, { block: true, text: 'Test', onTap: function () {
                    return App.navigation.push("/test");
                } }),
            React.createElement(UI.Button, { block: true, raised: true, text: 'App 2', onTap: function () {
                    return App.start(App2.routes);
                } })
        );
    };
    var Test = function Test() {
        return React.createElement(
            UI.Screen,
            { title: 'App 1 Test', backText: 'Back' },
            'LOL HEY'
        );
    };
    return _Object$defineProperties({}, {
        routes: {
            get: function get() {
                return React.createElement(
                    Route,
                    null,
                    React.createElement(Route, { path: '/', component: Main }),
                    React.createElement(Route, { path: '/test', component: Test })
                );
            },
            configurable: true,
            enumerable: true
        }
    });
})();

var App2 = (function () {
    var Main = function Main() {
        return React.createElement(
            UI.Screen,
            { title: 'App 2 Main' },
            React.createElement(UI.Button, { block: true, text: 'Test', onTap: function () {
                    return App.navigation.push("/test");
                } }),
            React.createElement(UI.Button, { block: true, raised: true, text: 'App 1', onTap: function () {
                    return App.start(App1.routes);
                } })
        );
    };
    var Test = function Test() {
        return React.createElement(
            UI.Screen,
            { title: 'App 2 Test', backText: 'Back' },
            'LOL HEY'
        );
    };
    return _Object$defineProperties({}, {
        routes: {
            get: function get() {
                return React.createElement(
                    Route,
                    null,
                    React.createElement(Route, { path: '/', component: Main }),
                    React.createElement(Route, { path: '/test', component: Test })
                );
            },
            configurable: true,
            enumerable: true
        }
    });
})();

// const Test = ({children}) => {
//     // console.log(History.state);
//     return (
//         <UI.Screen title="Test Screen">
//             Hey there
//             <div>{Date.now()}</div>
//             <UI.Button text="test" block raised onTap={() => App.navigation.push("/test")} />
//             <UI.Button text="test" block raised onTap={() => App.navigation.reset()} />
//             {children}
//         </UI.Screen>
//     );
// };
// const Wat = ({children}) => <UI.Screen title="Hey" backText="what">Hey What</UI.Screen>;

// const test = (...args) => {
//     console.log(args);
// };
// let called = false;
// const waitComponent = async (location, cb) => {
//     console.log('load c');
//     if (called === false) {
//         await chrono.wait(500);
//     }
//     called = true;
//     cb(null, Test);
// };
// const waitIndex = async (location, cb) => {
//     console.log('load r', Date.now());
//     await chrono.wait(1000);
//     cb(null, [
//         <Route path="/" component={Test} />,
//         <Route path="/test" component={Wat} />
//     ]);
// };

App.start(App1.routes);

// App.start(
//     <Route>
//         <Route getChildRoutes={DataCenter.loadRoutes} />
//     </Route>
// );

},{"babel-runtime/core-js/object/define-properties":1}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7bUJDWmdCLFdBQVc7SUFBcEIsS0FBSyxnQkFBTCxLQUFLOztBQUVaLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDVCxPQUFHLEVBQUU7QUFDRCx1QkFBZSxFQUFFLE9BQU87QUFDeEIsaUJBQVMsRUFBRSxTQUFTO0tBQ3ZCO0FBQ0QsVUFBTSxFQUFFO0FBQ0osYUFBSyxFQUFFLFNBQVM7QUFDaEIsaUJBQVMsRUFBRSxPQUFPO0FBQ2xCLGtCQUFVLEVBQUUscUJBQXFCO0FBQ2pDLG1CQUFXLEVBQUUsb0JBQW9CO0FBQ2pDLGNBQU0sRUFBRTtBQUNKLGlCQUFLLEVBQUUsU0FBUztBQUNoQixxQkFBUyxFQUFFLE9BQU87U0FDckI7S0FDSjtBQUNELFNBQUssRUFBRTtBQUNILHVCQUFlLEVBQUUsU0FBUztBQUMxQixpQkFBUyxFQUFFLE9BQU87S0FDckI7QUFDRCxjQUFVLEVBQUU7QUFDUixhQUFLLEVBQUU7QUFD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TyxFQVNOO0FBUk8sY0FBTTtpQkFBQSxlQUFHO0FBQ1QsdUJBQ0k7QUFBQyx5QkFBSzs7b0JBQ0Ysb0JBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksQUFBQyxHQUFHO29CQUNuQyxvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUUsSUFBSSxBQUFDLEdBQUc7aUJBQ25DLENBQ1Y7YUFDTDs7OztPQUNIO0NBQ0wsQ0FBQSxFQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0wsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllc1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoVCwgRCl7XG4gIHJldHVybiAkLnNldERlc2NzKFQsIEQpO1xufTsiLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTsiLCJjb25zdCB7Um91dGV9ID0gUmVhY3RSb3V0ZXI7XHJcblxyXG5UaGVtZS5kZWZpbmUoe1xyXG4gICAgYXBwOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHRleHRDb2xvcjogJyM3NDc0NzQnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgY29sb3I6ICcjMkZCMURGJyxcclxuICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgaG92ZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4xMSknLFxyXG4gICAgICAgIGFjdGl2ZUNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgICAgICByYWlzZWQ6IHtcclxuICAgICAgICAgICAgY29sb3I6ICcjMkZCMURGJyxcclxuICAgICAgICAgICAgdGV4dENvbG9yOiAnd2hpdGUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzJGQjFERicsXHJcbiAgICAgICAgdGV4dENvbG9yOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gICAgcmFuZ2VJbnB1dDoge1xyXG4gICAgICAgIHRyYWNrOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiMyRkIxREZcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzd2l0Y2g6IHtcclxuICAgICAgICB0cmFjazoge1xyXG4gICAgICAgICAgICBjb2xvcjogJyMyRkIxREYnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXJJbnB1dDoge1xyXG4gICAgICAgIGFjdGl2ZUNvbG9yOiAnIzJGQjFERicsXHJcbiAgICAgICAgdGV4dENvbG9yOiAnYmxhY2snXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgdXJsID0gXCJodHRwOi8vYXNzZXRzMS5pZ25pbWdzLmNvbS90aHVtYnMvdXNlclVwbG9hZGVkLzIwMTQvMTAvMTIvQmF5b25ldHRhMl8xMjgwLTE0MTMxNDI0NTExMDAuanBnXCI7XHJcblxyXG5jb25zdCBEYXRhQ2VudGVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNhY2hlID0ge1xyXG4gICAgICAgIHJvdXRlczogbnVsbFxyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9hZFJvdXRlcyhsb2MsIGNiKSB7XHJcbiAgICAgICAgICAgIGNiKG51bGwsIGNhY2hlLnJvdXRlcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVSb3V0ZXMocm91dGVzKSB7XHJcbiAgICAgICAgICAgIGNhY2hlLnJvdXRlcyA9IHJvdXRlcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgQXBwMSA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBNYWluID0gKCkgPT4gKFxyXG4gICAgICAgIDxVSS5TY3JlZW4gdGl0bGU9XCJBcHAgMSBNYWluXCI+XHJcbiAgICAgICAgICAgIDxVSS5CdXR0b24gYmxvY2sgdGV4dD1cIlRlc3RcIiBvblRhcD17KCkgPT4gQXBwLm5hdmlnYXRpb24ucHVzaChcIi90ZXN0XCIpfSAvPlxyXG4gICAgICAgICAgICA8VUkuQnV0dG9uIGJsb2NrIHJhaXNlZCB0ZXh0PVwiQXBwIDJcIiBvblRhcD17KCkgPT4gQXBwLnN0YXJ0KEFwcDIucm91dGVzKX0gLz5cclxuICAgICAgICA8L1VJLlNjcmVlbj5cclxuICAgICk7XHJcbiAgICBjb25zdCBUZXN0ID0gKCkgPT4gKFxyXG4gICAgICAgIDxVSS5TY3JlZW4gdGl0bGU9XCJBcHAgMSBUZXN0XCIgYmFja1RleHQ9XCJCYWNrXCI+XHJcbiAgICAgICAgICAgIExPTCBIRVlcclxuICAgICAgICA8L1VJLlNjcmVlbj5cclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldCByb3V0ZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8Um91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtNYWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Rlc3RcIiBjb21wb25lbnQ9e1Rlc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBBcHAyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IE1haW4gPSAoKSA9PiAoXHJcbiAgICAgICAgPFVJLlNjcmVlbiB0aXRsZT1cIkFwcCAyIE1haW5cIj5cclxuICAgICAgICAgICAgPFVJLkJ1dHRvbiBibG9jayB0ZXh0PVwiVGVzdFwiIG9uVGFwPXsoKSA9PiBBcHAubmF2aWdhdGlvbi5wdXNoKFwiL3Rlc3RcIil9IC8+XHJcbiAgICAgICAgICAgIDxVSS5CdXR0b24gYmxvY2sgcmFpc2VkIHRleHQ9XCJBcHAgMVwiIG9uVGFwPXsoKSA9PiBBcHAuc3RhcnQoQXBwMS5yb3V0ZXMpfSAvPlxyXG4gICAgICAgIDwvVUkuU2NyZWVuPlxyXG4gICAgKTtcclxuICAgIGNvbnN0IFRlc3QgPSAoKSA9PiAoXHJcbiAgICAgICAgPFVJLlNjcmVlbiB0aXRsZT1cIkFwcCAyIFRlc3RcIiBiYWNrVGV4dD1cIkJhY2tcIj5cclxuICAgICAgICAgICAgTE9MIEhFWVxyXG4gICAgICAgIDwvVUkuU2NyZWVuPlxyXG4gICAgKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0IHJvdXRlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxSb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01haW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdGVzdFwiIGNvbXBvbmVudD17VGVzdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbi8vIGNvbnN0IFRlc3QgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4vLyAgICAgLy8gY29uc29sZS5sb2coSGlzdG9yeS5zdGF0ZSk7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxVSS5TY3JlZW4gdGl0bGU9XCJUZXN0IFNjcmVlblwiPlxyXG4vLyAgICAgICAgICAgICBIZXkgdGhlcmVcclxuLy8gICAgICAgICAgICAgPGRpdj57RGF0ZS5ub3coKX08L2Rpdj5cclxuLy8gICAgICAgICAgICAgPFVJLkJ1dHRvbiB0ZXh0PVwidGVzdFwiIGJsb2NrIHJhaXNlZCBvblRhcD17KCkgPT4gQXBwLm5hdmlnYXRpb24ucHVzaChcIi90ZXN0XCIpfSAvPlxyXG4vLyAgICAgICAgICAgICA8VUkuQnV0dG9uIHRleHQ9XCJ0ZXN0XCIgYmxvY2sgcmFpc2VkIG9uVGFwPXsoKSA9PiBBcHAubmF2aWdhdGlvbi5yZXNldCgpfSAvPlxyXG4vLyAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbi8vICAgICAgICAgPC9VSS5TY3JlZW4+XHJcbi8vICAgICApO1xyXG4vLyB9O1xyXG4vLyBjb25zdCBXYXQgPSAoe2NoaWxkcmVufSkgPT4gPFVJLlNjcmVlbiB0aXRsZT1cIkhleVwiIGJhY2tUZXh0PVwid2hhdFwiPkhleSBXaGF0PC9VSS5TY3JlZW4+O1xyXG5cclxuLy8gY29uc3QgdGVzdCA9ICguLi5hcmdzKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuLy8gfTtcclxuLy8gbGV0IGNhbGxlZCA9IGZhbHNlO1xyXG4vLyBjb25zdCB3YWl0Q29tcG9uZW50ID0gYXN5bmMgKGxvY2F0aW9uLCBjYikgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2xvYWQgYycpO1xyXG4vLyAgICAgaWYgKGNhbGxlZCA9PT0gZmFsc2UpIHtcclxuLy8gICAgICAgICBhd2FpdCBjaHJvbm8ud2FpdCg1MDApO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgY2FsbGVkID0gdHJ1ZTtcclxuLy8gICAgIGNiKG51bGwsIFRlc3QpO1xyXG4vLyB9O1xyXG4vLyBjb25zdCB3YWl0SW5kZXggPSBhc3luYyAobG9jYXRpb24sIGNiKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnbG9hZCByJywgRGF0ZS5ub3coKSk7XHJcbi8vICAgICBhd2FpdCBjaHJvbm8ud2FpdCgxMDAwKTtcclxuLy8gICAgIGNiKG51bGwsIFtcclxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e1Rlc3R9IC8+LFxyXG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Rlc3RcIiBjb21wb25lbnQ9e1dhdH0gLz5cclxuLy8gICAgIF0pO1xyXG4vLyB9O1xyXG5cclxuQXBwLnN0YXJ0KEFwcDEucm91dGVzKTtcclxuXHJcbi8vIEFwcC5zdGFydChcclxuLy8gICAgIDxSb3V0ZT5cclxuLy8gICAgICAgICA8Um91dGUgZ2V0Q2hpbGRSb3V0ZXM9e0RhdGFDZW50ZXIubG9hZFJvdXRlc30gLz5cclxuLy8gICAgIDwvUm91dGU+XHJcbi8vICk7XHJcbiJdfQ==

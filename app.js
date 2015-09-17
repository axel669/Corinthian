(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ReactRouter = ReactRouter;
var Route = _ReactRouter.Route;

var Wrapper = React.createClass({
    displayName: 'Wrapper',

    render: function render() {
        return React.createElement(
            'div',
            { style: { backgroundColor: 'lightteal', height: '100%' } },
            this.props.children
        );
    }
});

var Demo = React.createClass({
    displayName: 'Demo',

    getInitialState: function getInitialState() {
        return { time: Date.now() };
    },
    render: function render() {
        console.log(this);
        return React.createElement(
            UI.Screen,
            { scrollable: true },
            React.createElement(
                UI.Card,
                null,
                'Blah: ',
                this.state.time
            )
        );
    }
});

App.start(React.createElement(
    Route,
    { component: Wrapper },
    React.createElement(Route, { path: '/', component: Demo }),
    React.createElement(Route, { path: '/test', component: Demo })
));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FjLFdBQVc7SUFBcEIsS0FBSyxnQkFBTCxLQUFLOztBQUVWLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM1QixVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUFPOztjQUFLLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxBQUFDO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQU8sQ0FBQztLQUNsRztDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDekIsbUJBQWUsRUFBQywyQkFBRztBQUNmLGVBQU8sRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUM7S0FDN0I7QUFDRCxVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xCLGVBQU87QUFBQyxjQUFFLENBQUMsTUFBTTtjQUFDLFVBQVUsRUFBRSxJQUFJLEFBQUM7WUFDL0I7QUFBQyxrQkFBRSxDQUFDLElBQUk7OztnQkFDRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7YUFDaEI7U0FDRixDQUFBO0tBQ2Y7Q0FDSixDQUFDLENBQUM7O0FBRUgsR0FBRyxDQUFDLEtBQUssQ0FDTDtBQUFDLFNBQUs7TUFBQyxTQUFTLEVBQUUsT0FBTyxBQUFDO0lBQ3RCLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztJQUNuQyxvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUUsSUFBSSxBQUFDLEdBQUc7Q0FDbkMsQ0FDWCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCB7Um91dGV9ID0gUmVhY3RSb3V0ZXI7XHJcblxyXG5sZXQgV3JhcHBlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodHRlYWwnLCBoZWlnaHQ6ICcxMDAlJ319Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcclxuICAgIH1cclxufSk7XHJcblxyXG5sZXQgRGVtbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt0aW1lOiBEYXRlLm5vdygpfTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiA8VUkuU2NyZWVuIHNjcm9sbGFibGU9e3RydWV9PlxyXG4gICAgICAgICAgICA8VUkuQ2FyZD5cclxuICAgICAgICAgICAgICAgIEJsYWg6IHt0aGlzLnN0YXRlLnRpbWV9XHJcbiAgICAgICAgICAgIDwvVUkuQ2FyZD5cclxuICAgICAgICA8L1VJLlNjcmVlbj5cclxuICAgIH1cclxufSk7XHJcblxyXG5BcHAuc3RhcnQoXHJcbiAgICA8Um91dGUgY29tcG9uZW50PXtXcmFwcGVyfT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0RlbW99IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvdGVzdFwiIGNvbXBvbmVudD17RGVtb30gLz5cclxuICAgIDwvUm91dGU+XHJcbik7XHJcbiJdfQ==

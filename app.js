(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ReactRouter = ReactRouter;
var Route = _ReactRouter.Route;

// let {RaisedButton, Screen} = UI;

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

// const url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";

var Main = React.createClass({
    displayName: 'Main',

    getInitialState: function getInitialState() {
        return {
            check: true,
            selectedIndex: 0,
            inputValue: 50
        };
    },
    updateSetting: function updateSetting(name) {
        var _this = this;

        return function (value) {
            var _setState;

            console.log('saving:', name, value);
            _this.setState((_setState = {}, _setState[name] = value, _setState));
        };
    },
    save: function save() {
        console.log(this.state);
    },
    render: function render() {
        var url = "https://s-media-cache-ak0.pinimg.com/736x/89/aa/35/89aa35dbf42e2abd5a9b8082ebc4a3c3.jpg";
        // console.log(this.state);
        return React.createElement(
            UI.Screen,
            { title: 'Testing', subtext: 'WOAH', width: 600 },
            React.createElement(UI.Button, { block: true, text: 'Dialog', onTap: function () {
                    return Dialog.alert("test");
                }, raised: true })
        );
    }
});

var Test = React.createClass({
    displayName: 'Test',

    render: function render() {
        return React.createElement(
            UI.Screen,
            { title: 'Test Screen', backText: 'Back' },
            'Nope'
        );
    }
});

App.start(React.createElement(
    Route,
    null,
    React.createElement(Route, { path: '/', component: Main }),
    React.createElement(Route, { path: '/test', component: Test })
));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FnQixXQUFXO0lBQXBCLEtBQUssZ0JBQUwsS0FBSzs7OztBQUdaLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM5QixVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUFPOztjQUFLLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxBQUFDO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQU8sQ0FBQztLQUNsRztDQUNKLENBQUMsQ0FBQzs7OztBQUlILElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixtQkFBZSxFQUFDLDJCQUFHO0FBQ2YsZUFBTztBQUNILGlCQUFLLEVBQUUsSUFBSTtBQUNYLHlCQUFhLEVBQUUsQ0FBQztBQUNoQixzQkFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQztLQUNMO0FBQ0QsaUJBQWEsRUFBQyx1QkFBQyxJQUFJLEVBQUU7OztBQUNqQixlQUFPLFVBQUEsS0FBSyxFQUFJOzs7QUFDWixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLGtCQUFLLFFBQVEsNEJBQUcsSUFBSSxJQUFHLEtBQUssYUFBRSxDQUFDO1NBQ2xDLENBQUM7S0FDTDtBQUNELFFBQUksRUFBQyxnQkFBRztBQUNKLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNCO0FBQ0QsVUFBTSxFQUFDLGtCQUFHO0FBQ04sWUFBTSxHQUFHLEdBQUcseUZBQXlGLENBQUM7O0FBRXRHLGVBQ0k7QUFBQyxjQUFFLENBQUMsTUFBTTtjQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsR0FBRyxBQUFDO1lBQ2pELG9CQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUMsS0FBSyxFQUFFLElBQUksQUFBQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFOzJCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2lCQUFBLEFBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxBQUFDLEdBQUc7U0FDakYsQ0FDZDtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUNJO0FBQUMsY0FBRSxDQUFDLE1BQU07Y0FBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxNQUFNOztTQUVsQyxDQUNkO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsR0FBRyxDQUFDLEtBQUssQ0FDTDtBQUFDLFNBQUs7O0lBQ0Ysb0JBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksQUFBQyxHQUFHO0lBQ25DLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztDQUNuQyxDQUNYLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3Qge1JvdXRlfSA9IFJlYWN0Um91dGVyO1xyXG4vLyBsZXQge1JhaXNlZEJ1dHRvbiwgU2NyZWVufSA9IFVJO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodHRlYWwnLCBoZWlnaHQ6ICcxMDAlJ319Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBjb25zdCB1cmwgPSBcImh0dHA6Ly9hc3NldHMxLmlnbmltZ3MuY29tL3RodW1icy91c2VyVXBsb2FkZWQvMjAxNC8xMC8xMi9CYXlvbmV0dGEyXzEyODAtMTQxMzE0MjQ1MTEwMC5qcGdcIjtcclxuXHJcbmNvbnN0IE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNoZWNrOiB0cnVlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiA1MFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlU2V0dGluZyAobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZpbmc6JywgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBzYXZlICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzczNngvODkvYWEvMzUvODlhYTM1ZGJmNDJlMmFiZDVhOWI4MDgyZWJjNGEzYzMuanBnXCI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFVJLlNjcmVlbiB0aXRsZT1cIlRlc3RpbmdcIiBzdWJ0ZXh0PVwiV09BSFwiIHdpZHRoPXs2MDB9PlxyXG4gICAgICAgICAgICAgICAgPFVJLkJ1dHRvbiBibG9jaz17dHJ1ZX0gdGV4dD1cIkRpYWxvZ1wiIG9uVGFwPXsoKSA9PiBEaWFsb2cuYWxlcnQoXCJ0ZXN0XCIpfSByYWlzZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDwvVUkuU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgVGVzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFVJLlNjcmVlbiB0aXRsZT1cIlRlc3QgU2NyZWVuXCIgYmFja1RleHQ9XCJCYWNrXCI+XHJcbiAgICAgICAgICAgICAgICBOb3BlXHJcbiAgICAgICAgICAgIDwvVUkuU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQXBwLnN0YXJ0KFxyXG4gICAgPFJvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi90ZXN0XCIgY29tcG9uZW50PXtUZXN0fSAvPlxyXG4gICAgPC9Sb3V0ZT5cclxuKTtcclxuIl19

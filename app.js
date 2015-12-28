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
            { title: 'Testing', subtext: 'WOAH', backText: 'Testing' },
            React.createElement(UI.Button, { onTap: function () {
                    return App.transitionTo("/test");
                }, text: 'Test' }),
            factotum.range(40, function (n) {
                return React.createElement(
                    'div',
                    null,
                    n
                );
            })
        );
    }
});

var Test = React.createClass({
    displayName: 'Test',

    render: function render() {
        return React.createElement(
            'div',
            null,
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FnQixXQUFXO0lBQXBCLEtBQUssZ0JBQUwsS0FBSzs7OztBQUdaLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM5QixVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUFPOztjQUFLLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxBQUFDO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQU8sQ0FBQztLQUNsRztDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsbUJBQWUsRUFBQywyQkFBRztBQUNmLGVBQU87QUFDSCxpQkFBSyxFQUFFLElBQUk7QUFDWCx5QkFBYSxFQUFFLENBQUM7QUFDaEIsc0JBQVUsRUFBRSxFQUFFO1NBQ2pCLENBQUM7S0FDTDtBQUNELGlCQUFhLEVBQUMsdUJBQUMsSUFBSSxFQUFFOzs7QUFDakIsZUFBTyxVQUFBLEtBQUssRUFBSTs7O0FBQ1osbUJBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxrQkFBSyxRQUFRLDRCQUFHLElBQUksSUFBRyxLQUFLLGFBQUUsQ0FBQztTQUNsQyxDQUFDO0tBQ0w7QUFDRCxRQUFJLEVBQUMsZ0JBQUc7QUFDSixlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjtBQUNELFVBQU0sRUFBQyxrQkFBRztBQUNOLFlBQU0sR0FBRyxHQUFHLHlGQUF5RixDQUFDOztBQUV0RyxlQUNJO0FBQUMsY0FBRSxDQUFDLE1BQU07Y0FBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLFNBQVM7WUFDeEQsb0JBQUMsRUFBRSxDQUFDLE1BQU0sSUFBQyxLQUFLLEVBQUU7MkJBQU0sR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7aUJBQUEsQUFBQyxFQUFDLElBQUksRUFBQyxNQUFNLEdBQUc7WUFDaEUsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsVUFBQSxDQUFDO3VCQUFJOzs7b0JBQU0sQ0FBQztpQkFBTzthQUFBLENBQUM7U0FDaEMsQ0FDZDtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUFPOzs7O1NBQWUsQ0FBQztLQUMxQjtDQUNKLENBQUMsQ0FBQzs7QUFFSCxHQUFHLENBQUMsS0FBSyxDQUNMO0FBQUMsU0FBSzs7SUFDRixvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsSUFBSSxBQUFDLEdBQUc7SUFDbkMsb0JBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFFLElBQUksQUFBQyxHQUFHO0NBQ25DLENBQ1gsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCB7Um91dGV9ID0gUmVhY3RSb3V0ZXI7XHJcbi8vIGxldCB7UmFpc2VkQnV0dG9uLCBTY3JlZW59ID0gVUk7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ2xpZ2h0dGVhbCcsIGhlaWdodDogJzEwMCUnfX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNoZWNrOiB0cnVlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiA1MFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlU2V0dGluZyAobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZpbmc6JywgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBzYXZlICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzczNngvODkvYWEvMzUvODlhYTM1ZGJmNDJlMmFiZDVhOWI4MDgyZWJjNGEzYzMuanBnXCI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFVJLlNjcmVlbiB0aXRsZT1cIlRlc3RpbmdcIiBzdWJ0ZXh0PVwiV09BSFwiIGJhY2tUZXh0PVwiVGVzdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPFVJLkJ1dHRvbiBvblRhcD17KCkgPT4gQXBwLnRyYW5zaXRpb25UbyhcIi90ZXN0XCIpfSB0ZXh0PVwiVGVzdFwiIC8+XHJcbiAgICAgICAgICAgICAgICB7ZmFjdG90dW0ucmFuZ2UoNDAsIG4gPT4gPGRpdj57bn08L2Rpdj4pfVxyXG4gICAgICAgICAgICA8L1VJLlNjcmVlbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IFRlc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2Pk5vcGU8L2Rpdj47XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQXBwLnN0YXJ0KFxyXG4gICAgPFJvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi90ZXN0XCIgY29tcG9uZW50PXtUZXN0fSAvPlxyXG4gICAgPC9Sb3V0ZT5cclxuKTtcclxuIl19

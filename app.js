(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ReactRouter = ReactRouter;
var Route = _ReactRouter.Route;
var _UI = UI;
var RaisedButton = _UI.RaisedButton;
var Screen = _UI.Screen;

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
            selectedIndex: 0
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
        var _this2 = this;

        return React.createElement(
            Screen,
            { title: 'Testing', subtext: 'WOAH', scrollable: true },
            React.createElement(
                UI.CenterContent,
                { height: 100, width: 500 },
                React.createElement(
                    'div',
                    null,
                    'Test content?'
                ),
                React.createElement(UI.Button, { text: 'Working?', onTap: console.log.bind(console) }),
                React.createElement(
                    UI.Card,
                    null,
                    'Testing'
                ),
                React.createElement(UI.Checkbox, { text: 'Checkbox', checked: this.state.check, onChange: function (check) {
                        return _this2.setState({ check: check });
                    } }),
                React.createElement(
                    UI.Combobox,
                    { selectedIndex: this.state.selectedIndex, onChange: function (selectedIndex) {
                            return _this2.setState({ selectedIndex: selectedIndex });
                        } },
                    React.createElement(UI.Option, { text: 'Test' }),
                    React.createElement(UI.Option, { text: 'Testing' })
                )
            )
        );
    }
});

App.start(React.createElement(
    Route,
    null,
    React.createElement(Route, { path: '/', component: Main })
));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FjLFdBQVc7SUFBcEIsS0FBSyxnQkFBTCxLQUFLO1VBQ21CLEVBQUU7SUFBMUIsWUFBWSxPQUFaLFlBQVk7SUFBRSxNQUFNLE9BQU4sTUFBTTs7QUFFekIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzVCLFVBQU0sRUFBQyxrQkFBRztBQUNOLGVBQU87O2NBQUssS0FBSyxFQUFFLEVBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLEFBQUM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FBTyxDQUFDO0tBQ2xHO0NBQ0osQ0FBQyxDQUFDOztBQUVILElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixtQkFBZSxFQUFDLDJCQUFHO0FBQ2YsZUFBTztBQUNILGlCQUFLLEVBQUUsSUFBSTtBQUNYLHlCQUFhLEVBQUUsQ0FBQztTQUNuQixDQUFDO0tBQ0w7QUFDRCxpQkFBYSxFQUFDLHVCQUFDLElBQUksRUFBRTs7O0FBQ2pCLGVBQU8sVUFBQSxLQUFLLEVBQUk7OztBQUNaLG1CQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEMsa0JBQUssUUFBUSw0QkFBRyxJQUFJLElBQUcsS0FBSyxhQUFFLENBQUM7U0FDbEMsQ0FBQztLQUNMO0FBQ0QsUUFBSSxFQUFDLGdCQUFHO0FBQ0osZUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDM0I7QUFDRCxVQUFNLEVBQUMsa0JBQUc7OztBQUNOLGVBQ0k7QUFBQyxrQkFBTTtjQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUUsSUFBSSxBQUFDO1lBQ3BEO0FBQUMsa0JBQUUsQ0FBQyxhQUFhO2tCQUFDLE1BQU0sRUFBRSxHQUFHLEFBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxBQUFDO2dCQUN0Qzs7OztpQkFBd0I7Z0JBQ3hCLG9CQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUksT0FBTyxDQUFDLEdBQUcsTUFBWCxPQUFPLENBQUssR0FBRztnQkFDbkQ7QUFBQyxzQkFBRSxDQUFDLElBQUk7OztpQkFFRTtnQkFDVixvQkFBQyxFQUFFLENBQUMsUUFBUSxJQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxBQUFDLEVBQUMsUUFBUSxFQUFFLFVBQUEsS0FBSzsrQkFBSSxPQUFLLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBTCxLQUFLLEVBQUMsQ0FBQztxQkFBQSxBQUFDLEdBQUc7Z0JBRXJHO0FBQUMsc0JBQUUsQ0FBQyxRQUFRO3NCQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQUFBQyxFQUFDLFFBQVEsRUFBRSxVQUFBLGFBQWE7bUNBQUksT0FBSyxRQUFRLENBQUMsRUFBQyxhQUFhLEVBQWIsYUFBYSxFQUFDLENBQUM7eUJBQUEsQUFBQztvQkFDNUcsb0JBQUMsRUFBRSxDQUFDLE1BQU0sSUFBQyxJQUFJLEVBQUMsTUFBTSxHQUFHO29CQUN6QixvQkFBQyxFQUFFLENBQUMsTUFBTSxJQUFDLElBQUksRUFBQyxTQUFTLEdBQUc7aUJBQ2xCO2FBQ0M7U0FDZCxDQUNYO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsR0FBRyxDQUFDLEtBQUssQ0FDTDtBQUFDLFNBQUs7O0lBQ0Ysb0JBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksQUFBQyxHQUFHO0NBQy9CLENBQ1gsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQge1JvdXRlfSA9IFJlYWN0Um91dGVyO1xyXG5sZXQge1JhaXNlZEJ1dHRvbiwgU2NyZWVufSA9IFVJO1xyXG5cclxubGV0IFdyYXBwZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnbGlnaHR0ZWFsJywgaGVpZ2h0OiAnMTAwJSd9fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj47XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY2hlY2s6IHRydWUsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IDBcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVNldHRpbmcgKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nOicsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgc2F2ZSAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2NyZWVuIHRpdGxlPVwiVGVzdGluZ1wiIHN1YnRleHQ9XCJXT0FIXCIgc2Nyb2xsYWJsZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8VUkuQ2VudGVyQ29udGVudCBoZWlnaHQ9ezEwMH0gd2lkdGg9ezUwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UZXN0IGNvbnRlbnQ/PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVJLkJ1dHRvbiB0ZXh0PVwiV29ya2luZz9cIiBvblRhcD17Ojpjb25zb2xlLmxvZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8VUkuQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGVzdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIDwvVUkuQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8VUkuQ2hlY2tib3ggdGV4dD1cIkNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja30gb25DaGFuZ2U9e2NoZWNrID0+IHRoaXMuc2V0U3RhdGUoe2NoZWNrfSl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxVSS5Db21ib2JveCBzZWxlY3RlZEluZGV4PXt0aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXh9IG9uQ2hhbmdlPXtzZWxlY3RlZEluZGV4ID0+IHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkSW5kZXh9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVSS5PcHRpb24gdGV4dD1cIlRlc3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VUkuT3B0aW9uIHRleHQ9XCJUZXN0aW5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1VJLkNvbWJvYm94PlxyXG4gICAgICAgICAgICAgICAgPC9VSS5DZW50ZXJDb250ZW50PlxyXG4gICAgICAgICAgICA8L1NjcmVlbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbkFwcC5zdGFydChcclxuICAgIDxSb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01haW59IC8+XHJcbiAgICA8L1JvdXRlPlxyXG4pO1xyXG4iXX0=

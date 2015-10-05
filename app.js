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
        return { active: true };
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
        return React.createElement(
            Screen,
            { title: 'Testing', subtext: 'WOAH', scrollable: true, back: 'Yup' },
            React.createElement(RaisedButton, { text: 'Create Flashcards', height: 75 }),
            React.createElement(RaisedButton, { text: "Use Flashcards\nCall Me Maybe", color: 'teal' }),
            React.createElement(UI.Checkbox, { checked: this.state.active, onChange: this.updateSetting('active'), text: 'Woah' }),
            React.createElement(UI.Switch, { on: this.state.active, text: 'Testing' }),
            React.createElement(UI.Button, { text: 'Save', onTap: this.save }),
            React.createElement(
                UI.RadioGroup,
                { selectedIndex: 1 },
                React.createElement(
                    UI.RadioItem,
                    { value: 0 },
                    '0'
                ),
                React.createElement(
                    UI.RadioItem,
                    { value: 1 },
                    '1'
                ),
                React.createElement(
                    UI.RadioItem,
                    { value: 2 },
                    '2'
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FjLFdBQVc7SUFBcEIsS0FBSyxnQkFBTCxLQUFLO1VBQ21CLEVBQUU7SUFBMUIsWUFBWSxPQUFaLFlBQVk7SUFBRSxNQUFNLE9BQU4sTUFBTTs7QUFFekIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzVCLFVBQU0sRUFBQyxrQkFBRztBQUNOLGVBQU87O2NBQUssS0FBSyxFQUFFLEVBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLEFBQUM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FBTyxDQUFDO0tBQ2xHO0NBQ0osQ0FBQyxDQUFDOztBQUVILElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixtQkFBZSxFQUFDLDJCQUFHO0FBQ2YsZUFBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztLQUN6QjtBQUNELGlCQUFhLEVBQUMsdUJBQUMsSUFBSSxFQUFFOzs7QUFDakIsZUFBTyxVQUFBLEtBQUssRUFBSTs7O0FBQ1osbUJBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxrQkFBSyxRQUFRLDRCQUFHLElBQUksSUFBRyxLQUFLLGFBQUUsQ0FBQztTQUNsQyxDQUFDO0tBQ0w7QUFDRCxRQUFJLEVBQUMsZ0JBQUc7QUFDSixlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjtBQUNELFVBQU0sRUFBQyxrQkFBRztBQUNOLGVBQ0k7QUFBQyxrQkFBTTtjQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUUsSUFBSSxBQUFDLEVBQUMsSUFBSSxFQUFDLEtBQUs7WUFDL0Qsb0JBQUMsWUFBWSxJQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBQyxNQUFNLEVBQUUsRUFBRSxBQUFDLEdBQUc7WUFDckQsb0JBQUMsWUFBWSxJQUFDLElBQUksRUFBRSwrQkFBK0IsQUFBQyxFQUFDLEtBQUssRUFBQyxNQUFNLEdBQUc7WUFDcEUsb0JBQUMsRUFBRSxDQUFDLFFBQVEsSUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEFBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQUFBQyxFQUFDLElBQUksRUFBQyxNQUFNLEdBQUc7WUFDL0Ysb0JBQUMsRUFBRSxDQUFDLE1BQU0sSUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEFBQUMsRUFBQyxJQUFJLEVBQUMsU0FBUyxHQUFHO1lBQ25ELG9CQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQUFBQyxHQUFHO1lBQzNDO0FBQUMsa0JBQUUsQ0FBQyxVQUFVO2tCQUFDLGFBQWEsRUFBRSxDQUFDLEFBQUM7Z0JBQzVCO0FBQUMsc0JBQUUsQ0FBQyxTQUFTO3NCQUFDLEtBQUssRUFBRSxDQUFDLEFBQUM7O2lCQUFpQjtnQkFDeEM7QUFBQyxzQkFBRSxDQUFDLFNBQVM7c0JBQUMsS0FBSyxFQUFFLENBQUMsQUFBQzs7aUJBQWlCO2dCQUN4QztBQUFDLHNCQUFFLENBQUMsU0FBUztzQkFBQyxLQUFLLEVBQUUsQ0FBQyxBQUFDOztpQkFBaUI7YUFDNUI7U0FDWCxDQUNYO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsR0FBRyxDQUFDLEtBQUssQ0FDTDtBQUFDLFNBQUs7O0lBQ0Ysb0JBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksQUFBQyxHQUFHO0NBQy9CLENBQ1gsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQge1JvdXRlfSA9IFJlYWN0Um91dGVyO1xyXG5sZXQge1JhaXNlZEJ1dHRvbiwgU2NyZWVufSA9IFVJO1xyXG5cclxubGV0IFdyYXBwZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnbGlnaHR0ZWFsJywgaGVpZ2h0OiAnMTAwJSd9fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj47XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHthY3RpdmU6IHRydWV9O1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVNldHRpbmcgKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nOicsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgc2F2ZSAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2NyZWVuIHRpdGxlPVwiVGVzdGluZ1wiIHN1YnRleHQ9XCJXT0FIXCIgc2Nyb2xsYWJsZT17dHJ1ZX0gYmFjaz1cIll1cFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvbiB0ZXh0PVwiQ3JlYXRlIEZsYXNoY2FyZHNcIiBoZWlnaHQ9ezc1fSAvPlxyXG4gICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvbiB0ZXh0PXtcIlVzZSBGbGFzaGNhcmRzXFxuQ2FsbCBNZSBNYXliZVwifSBjb2xvcj1cInRlYWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFVJLkNoZWNrYm94IGNoZWNrZWQ9e3RoaXMuc3RhdGUuYWN0aXZlfSBvbkNoYW5nZT17dGhpcy51cGRhdGVTZXR0aW5nKCdhY3RpdmUnKX0gdGV4dD1cIldvYWhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFVJLlN3aXRjaCBvbj17dGhpcy5zdGF0ZS5hY3RpdmV9IHRleHQ9XCJUZXN0aW5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxVSS5CdXR0b24gdGV4dD1cIlNhdmVcIiBvblRhcD17dGhpcy5zYXZlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFVJLlJhZGlvR3JvdXAgc2VsZWN0ZWRJbmRleD17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVJLlJhZGlvSXRlbSB2YWx1ZT17MH0+MDwvVUkuUmFkaW9JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVSS5SYWRpb0l0ZW0gdmFsdWU9ezF9PjE8L1VJLlJhZGlvSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8VUkuUmFkaW9JdGVtIHZhbHVlPXsyfT4yPC9VSS5SYWRpb0l0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1VJLlJhZGlvR3JvdXA+XHJcbiAgICAgICAgICAgIDwvU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQXBwLnN0YXJ0KFxyXG4gICAgPFJvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0gLz5cclxuICAgIDwvUm91dGU+XHJcbik7XHJcbiJdfQ==

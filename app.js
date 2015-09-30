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
            { title: 'Testing', subtext: 'WOAH', scrollable: true },
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FjLFdBQVc7SUFBcEIsS0FBSyxnQkFBTCxLQUFLO1VBQ21CLEVBQUU7SUFBMUIsWUFBWSxPQUFaLFlBQVk7SUFBRSxNQUFNLE9BQU4sTUFBTTs7QUFFekIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzVCLFVBQU0sRUFBQyxrQkFBRztBQUNOLGVBQU87O2NBQUssS0FBSyxFQUFFLEVBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLEFBQUM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FBTyxDQUFDO0tBQ2xHO0NBQ0osQ0FBQyxDQUFDOztBQUVILElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixtQkFBZSxFQUFDLDJCQUFHO0FBQ2YsZUFBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztLQUN6QjtBQUNELGlCQUFhLEVBQUMsdUJBQUMsSUFBSSxFQUFFOzs7QUFDakIsZUFBTyxVQUFBLEtBQUssRUFBSTs7O0FBQ1osbUJBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxrQkFBSyxRQUFRLDRCQUFHLElBQUksSUFBRyxLQUFLLGFBQUUsQ0FBQztTQUNsQyxDQUFDO0tBQ0w7QUFDRCxRQUFJLEVBQUMsZ0JBQUc7QUFDSixlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjtBQUNELFVBQU0sRUFBQyxrQkFBRztBQUNOLGVBQ0k7QUFBQyxrQkFBTTtjQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUUsSUFBSSxBQUFDO1lBQ3BELG9CQUFDLFlBQVksSUFBQyxJQUFJLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxFQUFFLEVBQUUsQUFBQyxHQUFHO1lBQ3JELG9CQUFDLFlBQVksSUFBQyxJQUFJLEVBQUUsK0JBQStCLEFBQUMsRUFBQyxLQUFLLEVBQUMsTUFBTSxHQUFHO1lBQ3BFLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEFBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxHQUFHO1lBQy9GLG9CQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDLEVBQUMsSUFBSSxFQUFDLFNBQVMsR0FBRztZQUNuRCxvQkFBQyxFQUFFLENBQUMsTUFBTSxJQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEFBQUMsR0FBRztZQUMzQztBQUFDLGtCQUFFLENBQUMsVUFBVTtrQkFBQyxhQUFhLEVBQUUsQ0FBQyxBQUFDO2dCQUM1QjtBQUFDLHNCQUFFLENBQUMsU0FBUztzQkFBQyxLQUFLLEVBQUUsQ0FBQyxBQUFDOztpQkFBaUI7Z0JBQ3hDO0FBQUMsc0JBQUUsQ0FBQyxTQUFTO3NCQUFDLEtBQUssRUFBRSxDQUFDLEFBQUM7O2lCQUFpQjtnQkFDeEM7QUFBQyxzQkFBRSxDQUFDLFNBQVM7c0JBQUMsS0FBSyxFQUFFLENBQUMsQUFBQzs7aUJBQWlCO2FBQzVCO1NBQ1gsQ0FDWDtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILEdBQUcsQ0FBQyxLQUFLLENBQ0w7QUFBQyxTQUFLOztJQUNGLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztDQUMvQixDQUNYLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IHtSb3V0ZX0gPSBSZWFjdFJvdXRlcjtcclxubGV0IHtSYWlzZWRCdXR0b24sIFNjcmVlbn0gPSBVSTtcclxuXHJcbmxldCBXcmFwcGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ2xpZ2h0dGVhbCcsIGhlaWdodDogJzEwMCUnfX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB7YWN0aXZlOiB0cnVlfTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVTZXR0aW5nIChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmluZzonLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9KTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHNhdmUgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNjcmVlbiB0aXRsZT1cIlRlc3RpbmdcIiBzdWJ0ZXh0PVwiV09BSFwiIHNjcm9sbGFibGU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvbiB0ZXh0PVwiQ3JlYXRlIEZsYXNoY2FyZHNcIiBoZWlnaHQ9ezc1fSAvPlxyXG4gICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvbiB0ZXh0PXtcIlVzZSBGbGFzaGNhcmRzXFxuQ2FsbCBNZSBNYXliZVwifSBjb2xvcj1cInRlYWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFVJLkNoZWNrYm94IGNoZWNrZWQ9e3RoaXMuc3RhdGUuYWN0aXZlfSBvbkNoYW5nZT17dGhpcy51cGRhdGVTZXR0aW5nKCdhY3RpdmUnKX0gdGV4dD1cIldvYWhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFVJLlN3aXRjaCBvbj17dGhpcy5zdGF0ZS5hY3RpdmV9IHRleHQ9XCJUZXN0aW5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxVSS5CdXR0b24gdGV4dD1cIlNhdmVcIiBvblRhcD17dGhpcy5zYXZlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFVJLlJhZGlvR3JvdXAgc2VsZWN0ZWRJbmRleD17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVJLlJhZGlvSXRlbSB2YWx1ZT17MH0+MDwvVUkuUmFkaW9JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVSS5SYWRpb0l0ZW0gdmFsdWU9ezF9PjE8L1VJLlJhZGlvSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8VUkuUmFkaW9JdGVtIHZhbHVlPXsyfT4yPC9VSS5SYWRpb0l0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1VJLlJhZGlvR3JvdXA+XHJcbiAgICAgICAgICAgIDwvU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQXBwLnN0YXJ0KFxyXG4gICAgPFJvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0gLz5cclxuICAgIDwvUm91dGU+XHJcbik7XHJcbiJdfQ==

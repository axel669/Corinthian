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
            { title: 'Flashcards', scrollable: true },
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FjLFdBQVc7SUFBcEIsS0FBSyxnQkFBTCxLQUFLO1VBQ21CLEVBQUU7SUFBMUIsWUFBWSxPQUFaLFlBQVk7SUFBRSxNQUFNLE9BQU4sTUFBTTs7QUFFekIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzVCLFVBQU0sRUFBQyxrQkFBRztBQUNOLGVBQU87O2NBQUssS0FBSyxFQUFFLEVBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLEFBQUM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FBTyxDQUFDO0tBQ2xHO0NBQ0osQ0FBQyxDQUFDOztBQUVILElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixtQkFBZSxFQUFDLDJCQUFHO0FBQ2YsZUFBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztLQUN6QjtBQUNELGlCQUFhLEVBQUMsdUJBQUMsSUFBSSxFQUFFOzs7QUFDakIsZUFBTyxVQUFBLEtBQUssRUFBSTs7O0FBQ1osbUJBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxrQkFBSyxRQUFRLDRCQUFHLElBQUksSUFBRyxLQUFLLGFBQUUsQ0FBQztTQUNsQyxDQUFDO0tBQ0w7QUFDRCxRQUFJLEVBQUMsZ0JBQUc7QUFDSixlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjtBQUNELFVBQU0sRUFBQyxrQkFBRztBQUNOLGVBQ0k7QUFBQyxrQkFBTTtjQUFDLEtBQUssRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFFLElBQUksQUFBQztZQUN4QyxvQkFBQyxZQUFZLElBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFDLE1BQU0sRUFBRSxFQUFFLEFBQUMsR0FBRztZQUNyRCxvQkFBQyxZQUFZLElBQUMsSUFBSSxFQUFFLCtCQUErQixBQUFDLEVBQUMsS0FBSyxFQUFDLE1BQU0sR0FBRztZQUNwRSxvQkFBQyxFQUFFLENBQUMsUUFBUSxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQUFBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxBQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sR0FBRztZQUMvRixvQkFBQyxFQUFFLENBQUMsTUFBTSxJQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQUFBQyxFQUFDLElBQUksRUFBQyxTQUFTLEdBQUc7WUFDbkQsb0JBQUMsRUFBRSxDQUFDLE1BQU0sSUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxBQUFDLEdBQUc7WUFDM0M7QUFBQyxrQkFBRSxDQUFDLFVBQVU7a0JBQUMsYUFBYSxFQUFFLENBQUMsQUFBQztnQkFDNUI7QUFBQyxzQkFBRSxDQUFDLFNBQVM7c0JBQUMsS0FBSyxFQUFFLENBQUMsQUFBQzs7aUJBQWlCO2dCQUN4QztBQUFDLHNCQUFFLENBQUMsU0FBUztzQkFBQyxLQUFLLEVBQUUsQ0FBQyxBQUFDOztpQkFBaUI7Z0JBQ3hDO0FBQUMsc0JBQUUsQ0FBQyxTQUFTO3NCQUFDLEtBQUssRUFBRSxDQUFDLEFBQUM7O2lCQUFpQjthQUM1QjtTQUNYLENBQ1g7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxHQUFHLENBQUMsS0FBSyxDQUNMO0FBQUMsU0FBSzs7SUFDRixvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsSUFBSSxBQUFDLEdBQUc7Q0FDL0IsQ0FDWCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCB7Um91dGV9ID0gUmVhY3RSb3V0ZXI7XHJcbmxldCB7UmFpc2VkQnV0dG9uLCBTY3JlZW59ID0gVUk7XHJcblxyXG5sZXQgV3JhcHBlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodHRlYWwnLCBoZWlnaHQ6ICcxMDAlJ319Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcclxuICAgICAgICByZXR1cm4ge2FjdGl2ZTogdHJ1ZX07XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlU2V0dGluZyAobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZpbmc6JywgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBzYXZlICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTY3JlZW4gdGl0bGU9XCJGbGFzaGNhcmRzXCIgc2Nyb2xsYWJsZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8UmFpc2VkQnV0dG9uIHRleHQ9XCJDcmVhdGUgRmxhc2hjYXJkc1wiIGhlaWdodD17NzV9IC8+XHJcbiAgICAgICAgICAgICAgICA8UmFpc2VkQnV0dG9uIHRleHQ9e1wiVXNlIEZsYXNoY2FyZHNcXG5DYWxsIE1lIE1heWJlXCJ9IGNvbG9yPVwidGVhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VUkuQ2hlY2tib3ggY2hlY2tlZD17dGhpcy5zdGF0ZS5hY3RpdmV9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVNldHRpbmcoJ2FjdGl2ZScpfSB0ZXh0PVwiV29haFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VUkuU3dpdGNoIG9uPXt0aGlzLnN0YXRlLmFjdGl2ZX0gdGV4dD1cIlRlc3RpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFVJLkJ1dHRvbiB0ZXh0PVwiU2F2ZVwiIG9uVGFwPXt0aGlzLnNhdmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8VUkuUmFkaW9Hcm91cCBzZWxlY3RlZEluZGV4PXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8VUkuUmFkaW9JdGVtIHZhbHVlPXswfT4wPC9VSS5SYWRpb0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVJLlJhZGlvSXRlbSB2YWx1ZT17MX0+MTwvVUkuUmFkaW9JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVSS5SYWRpb0l0ZW0gdmFsdWU9ezJ9PjI8L1VJLlJhZGlvSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvVUkuUmFkaW9Hcm91cD5cclxuICAgICAgICAgICAgPC9TY3JlZW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5BcHAuc3RhcnQoXHJcbiAgICA8Um91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtNYWlufSAvPlxyXG4gICAgPC9Sb3V0ZT5cclxuKTtcclxuIl19

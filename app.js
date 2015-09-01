(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _UI = UI;
var ScrollContainer = _UI.ScrollContainer;
var Combobox = _UI.Combobox;
var Option = _UI.Option;
var Button = _UI.Button;
var Image = _UI.Image;
var Spinner = _UI.Spinner;
var RaisedButton = _UI.RaisedButton;
var ImageButton = _UI.ImageButton;
var Checkbox = _UI.Checkbox;
var RadioGroup = _UI.RadioGroup;
var RadioItem = _UI.RadioItem;
var Flexbox = _UI.Flexbox;
var Screen = _UI.Screen;
var RangeInput = _UI.RangeInput;
var Card = _UI.Card;
var TextInput = _UI.TextInput;
var Grid = _UI.Grid;
var VSplit = _UI.VSplit;
var HSplit = _UI.HSplit;
var _ReactRouter = ReactRouter;
var Route = _ReactRouter.Route;
var RouteHandler = _ReactRouter.RouteHandler;

var Demo = undefined;
var Demo2 = undefined;
var imgSource = undefined;

imgSource = "http://7-themes.com/data_images/out/76/7031783-vivi-ornitier-final-fantasy.jpg";
// imgSource = "https://coedbc.files.wordpress.com/2014/09/screen-shot-2014-09-25-at-1-34-30-pm.png?w=640";
imgSource = "https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11887880_828950683869813_8315773794433143779_n.jpg?oh=d7c00ab390cf81fe2fbd3aeb20e44daa&oe=565FD46C";

Demo = React.createClass({
    displayName: "Demo",

    mixins: [ReactRouter.Navigation, ReactRouter.State],
    getInitialState: function getInitialState() {
        return {
            index: 0,
            now: Date.now()
        };
    },
    render: function render() {
        var _this = this;

        return React.createElement(
            Screen,
            { title: "Test 😃", titleStyle: { fontFamily: "Courier New" } },
            React.createElement(RaisedButton, { text: "test", onTap: function () {
                    return _this.transitionTo("/test/1-1-1970");
                } }),
            React.createElement(Image, { height: 350, source: imgSource })
        );
    }
});

Demo2 = React.createClass({
    displayName: "Demo2",

    mixins: [ReactRouter.Navigation, ReactRouter.State],
    getInitialState: function getInitialState() {
        return {
            index: 0,
            now: Date.now()
        };
    },
    render: function render() {
        var _this2 = this;

        return React.createElement(
            Screen,
            { title: "Test 2" },
            React.createElement(
                Screen,
                { title: "Nested" },
                React.createElement(RaisedButton, { text: "test", onTap: function () {
                        return _this2.transitionTo("/test/1-1-1970");
                    } }),
                React.createElement(Image, { height: 350, source: imgSource })
            )
        );
    }
});

var Wrap = React.createClass({
    displayName: "Wrap",

    mixins: [ReactRouter.State],
    getInitialState: function getInitialState() {
        return { title: null };
    },
    render: function render() {
        var _getParams = this.getParams();

        var id = _getParams.id;

        return React.createElement(
            VSplit,
            { bounds: [-50] },
            React.createElement(
                App.ScreenTransition,
                { action: this.props.action },
                React.createElement(RouteHandler, null)
            ),
            React.createElement(RaisedButton, { text: "Still" })
        );
    }
});

App.start(React.createElement(
    Route,
    { handler: Wrap },
    React.createElement(Route, { path: "/", handler: Demo }),
    React.createElement(Route, { path: "/test/:id", handler: Demo2 })
));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O1VDb0JJLEVBQUU7SUFuQkYsZUFBZSxPQUFmLGVBQWU7SUFDZixRQUFRLE9BQVIsUUFBUTtJQUNSLE1BQU0sT0FBTixNQUFNO0lBQ04sTUFBTSxPQUFOLE1BQU07SUFDTixLQUFLLE9BQUwsS0FBSztJQUNMLE9BQU8sT0FBUCxPQUFPO0lBQ1AsWUFBWSxPQUFaLFlBQVk7SUFDWixXQUFXLE9BQVgsV0FBVztJQUNYLFFBQVEsT0FBUixRQUFRO0lBQ1IsVUFBVSxPQUFWLFVBQVU7SUFDVixTQUFTLE9BQVQsU0FBUztJQUNULE9BQU8sT0FBUCxPQUFPO0lBQ1AsTUFBTSxPQUFOLE1BQU07SUFDTixVQUFVLE9BQVYsVUFBVTtJQUNWLElBQUksT0FBSixJQUFJO0lBQ0osU0FBUyxPQUFULFNBQVM7SUFDVCxJQUFJLE9BQUosSUFBSTtJQUNKLE1BQU0sT0FBTixNQUFNO0lBQ04sTUFBTSxPQUFOLE1BQU07bUJBRWtCLFdBQVc7SUFBbEMsS0FBSyxnQkFBTCxLQUFLO0lBQUUsWUFBWSxnQkFBWixZQUFZOztBQUN4QixJQUFJLElBQUksWUFBQSxDQUFDO0FBQ1QsSUFBSSxLQUFLLFlBQUEsQ0FBQztBQUNWLElBQUksU0FBUyxZQUFBLENBQUM7O0FBRWQsU0FBUyxHQUFHLGdGQUFnRixDQUFDOztBQUU3RixTQUFTLEdBQUcsd0pBQXdKLENBQUM7O0FBRXJLLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDckIsVUFBTSxFQUFFLENBQ0osV0FBVyxDQUFDLFVBQVUsRUFDdEIsV0FBVyxDQUFDLEtBQUssQ0FDcEI7QUFDRCxtQkFBZSxFQUFDLDJCQUFHO0FBQ2YsZUFBTztBQUNILGlCQUFLLEVBQUUsQ0FBQztBQUNSLGVBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBQ2xCLENBQUM7S0FDTDtBQUNELFVBQU0sRUFBQyxrQkFBRzs7O0FBQ04sZUFDSTtBQUFDLGtCQUFNO2NBQUMsS0FBSyxFQUFFLFNBQW1CLEFBQUMsRUFBQyxVQUFVLEVBQUUsRUFBQyxVQUFVLEVBQUUsYUFBYSxFQUFDLEFBQUM7WUFDeEUsb0JBQUMsWUFBWSxJQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFOzJCQUFNLE1BQUssWUFBWSxDQUFDLGdCQUFnQixDQUFDO2lCQUFBLEFBQUMsR0FBRztZQUM5RSxvQkFBQyxLQUFLLElBQUMsTUFBTSxFQUFFLEdBQUcsQUFBQyxFQUFDLE1BQU0sRUFBRSxTQUFTLEFBQUMsR0FBRztTQUNwQyxDQUNYO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUN0QixVQUFNLEVBQUUsQ0FDSixXQUFXLENBQUMsVUFBVSxFQUN0QixXQUFXLENBQUMsS0FBSyxDQUNwQjtBQUNELG1CQUFlLEVBQUMsMkJBQUc7QUFDZixlQUFPO0FBQ0gsaUJBQUssRUFBRSxDQUFDO0FBQ1IsZUFBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FDbEIsQ0FBQztLQUNMO0FBQ0QsVUFBTSxFQUFDLGtCQUFHOzs7QUFDTixlQUNJO0FBQUMsa0JBQU07Y0FBQyxLQUFLLEVBQUMsUUFBUTtZQUNsQjtBQUFDLHNCQUFNO2tCQUFDLEtBQUssRUFBQyxRQUFRO2dCQUNsQixvQkFBQyxZQUFZLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUU7K0JBQU0sT0FBSyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7cUJBQUEsQUFBQyxHQUFHO2dCQUM5RSxvQkFBQyxLQUFLLElBQUMsTUFBTSxFQUFFLEdBQUcsQUFBQyxFQUFDLE1BQU0sRUFBRSxTQUFTLEFBQUMsR0FBRzthQUNwQztTQUNKLENBQ1g7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDekIsVUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztBQUMzQixtQkFBZSxFQUFDLDJCQUFHO0FBQ2YsZUFBTyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztLQUN4QjtBQUNELFVBQU0sRUFBQyxrQkFBRzt5QkFDSyxJQUFJLENBQUMsU0FBUyxFQUFFOztZQUF0QixFQUFFLGNBQUYsRUFBRTs7QUFFUCxlQUNJO0FBQUMsa0JBQU07Y0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxBQUFDO1lBQ2xCO0FBQUMsbUJBQUcsQ0FBQyxnQkFBZ0I7a0JBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDO2dCQUM1QyxvQkFBQyxZQUFZLE9BQUc7YUFDRztZQUN2QixvQkFBQyxZQUFZLElBQUMsSUFBSSxFQUFDLE9BQU8sR0FBRztTQUN4QixDQUNYO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsR0FBRyxDQUFDLEtBQUssQ0FDTDtBQUFDLFNBQUs7TUFBQyxPQUFPLEVBQUUsSUFBSSxBQUFDO0lBQ2pCLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBRSxJQUFJLEFBQUMsR0FBRztJQUNqQyxvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUUsS0FBSyxBQUFDLEdBQUc7Q0FDdEMsQ0FDWCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCB7XHJcbiAgICBTY3JvbGxDb250YWluZXIsXHJcbiAgICBDb21ib2JveCxcclxuICAgIE9wdGlvbixcclxuICAgIEJ1dHRvbixcclxuICAgIEltYWdlLFxyXG4gICAgU3Bpbm5lcixcclxuICAgIFJhaXNlZEJ1dHRvbixcclxuICAgIEltYWdlQnV0dG9uLFxyXG4gICAgQ2hlY2tib3gsXHJcbiAgICBSYWRpb0dyb3VwLFxyXG4gICAgUmFkaW9JdGVtLFxyXG4gICAgRmxleGJveCxcclxuICAgIFNjcmVlbixcclxuICAgIFJhbmdlSW5wdXQsXHJcbiAgICBDYXJkLFxyXG4gICAgVGV4dElucHV0LFxyXG4gICAgR3JpZCxcclxuICAgIFZTcGxpdCxcclxuICAgIEhTcGxpdFxyXG59ID0gVUk7XHJcbmxldCB7Um91dGUsIFJvdXRlSGFuZGxlcn0gPSBSZWFjdFJvdXRlcjtcclxubGV0IERlbW87XHJcbmxldCBEZW1vMjtcclxubGV0IGltZ1NvdXJjZTtcclxuXHJcbmltZ1NvdXJjZSA9IFwiaHR0cDovLzctdGhlbWVzLmNvbS9kYXRhX2ltYWdlcy9vdXQvNzYvNzAzMTc4My12aXZpLW9ybml0aWVyLWZpbmFsLWZhbnRhc3kuanBnXCI7XHJcbi8vIGltZ1NvdXJjZSA9IFwiaHR0cHM6Ly9jb2VkYmMuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L3NjcmVlbi1zaG90LTIwMTQtMDktMjUtYXQtMS0zNC0zMC1wbS5wbmc/dz02NDBcIjtcclxuaW1nU291cmNlID0gXCJodHRwczovL3Njb250ZW50Lnh4LmZiY2RuLm5ldC9ocGhvdG9zLXhmcDEvdi90MS4wLTkvMTE4ODc4ODBfODI4OTUwNjgzODY5ODEzXzgzMTU3NzM3OTQ0MzMxNDM3Nzlfbi5qcGc/b2g9ZDdjMDBhYjM5MGNmODFmZTJmYmQzYWViMjBlNDRkYWEmb2U9NTY1RkQ0NkNcIjtcclxuXHJcbkRlbW8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBtaXhpbnM6IFtcclxuICAgICAgICBSZWFjdFJvdXRlci5OYXZpZ2F0aW9uLFxyXG4gICAgICAgIFJlYWN0Um91dGVyLlN0YXRlXHJcbiAgICBdLFxyXG4gICAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbmRleDogMCxcclxuICAgICAgICAgICAgbm93OiBEYXRlLm5vdygpXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTY3JlZW4gdGl0bGU9e1wiVGVzdCBcXHVkODNkXFx1ZGUwM1wifSB0aXRsZVN0eWxlPXt7Zm9udEZhbWlseTogXCJDb3VyaWVyIE5ld1wifX0+XHJcbiAgICAgICAgICAgICAgICA8UmFpc2VkQnV0dG9uIHRleHQ9XCJ0ZXN0XCIgb25UYXA9eygpID0+IHRoaXMudHJhbnNpdGlvblRvKFwiL3Rlc3QvMS0xLTE5NzBcIil9IC8+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgaGVpZ2h0PXszNTB9IHNvdXJjZT17aW1nU291cmNlfSAvPlxyXG4gICAgICAgICAgICA8L1NjcmVlbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbkRlbW8yID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgbWl4aW5zOiBbXHJcbiAgICAgICAgUmVhY3RSb3V0ZXIuTmF2aWdhdGlvbixcclxuICAgICAgICBSZWFjdFJvdXRlci5TdGF0ZVxyXG4gICAgXSxcclxuICAgIGdldEluaXRpYWxTdGF0ZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgIG5vdzogRGF0ZS5ub3coKVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2NyZWVuIHRpdGxlPVwiVGVzdCAyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2NyZWVuIHRpdGxlPVwiTmVzdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvbiB0ZXh0PVwidGVzdFwiIG9uVGFwPXsoKSA9PiB0aGlzLnRyYW5zaXRpb25UbyhcIi90ZXN0LzEtMS0xOTcwXCIpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBoZWlnaHQ9ezM1MH0gc291cmNlPXtpbWdTb3VyY2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1NjcmVlbj5cclxuICAgICAgICAgICAgPC9TY3JlZW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5sZXQgV3JhcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIG1peGluczogW1JlYWN0Um91dGVyLlN0YXRlXSxcclxuICAgIGdldEluaXRpYWxTdGF0ZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt0aXRsZTogbnVsbH07XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBsZXQge2lkfSA9IHRoaXMuZ2V0UGFyYW1zKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxWU3BsaXQgYm91bmRzPXtbLTUwXX0+XHJcbiAgICAgICAgICAgICAgICA8QXBwLlNjcmVlblRyYW5zaXRpb24gYWN0aW9uPXt0aGlzLnByb3BzLmFjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlSGFuZGxlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9BcHAuU2NyZWVuVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gdGV4dD1cIlN0aWxsXCIgLz5cclxuICAgICAgICAgICAgPC9WU3BsaXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5BcHAuc3RhcnQoXHJcbiAgICA8Um91dGUgaGFuZGxlcj17V3JhcH0+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgaGFuZGxlcj17RGVtb30gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi90ZXN0LzppZFwiIGhhbmRsZXI9e0RlbW8yfSAvPlxyXG4gICAgPC9Sb3V0ZT5cclxuKTtcclxuIl19

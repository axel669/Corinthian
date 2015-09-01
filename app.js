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
imgSource = "https://coedbc.files.wordpress.com/2014/09/screen-shot-2014-09-25-at-1-34-30-pm.png?w=640";

// <Image source={`https://coedbc.files.wordpress.com/2014/09/screen-shot-2014-09-25-at-1-34-30-pm.png?w=640&t=${this.state.now}`} width="100%" height={200} />

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
            { title: "Test" },
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvanMvYmFzZS90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7VUNvQkksRUFBRTtJQW5CRixlQUFlLE9BQWYsZUFBZTtJQUNmLFFBQVEsT0FBUixRQUFRO0lBQ1IsTUFBTSxPQUFOLE1BQU07SUFDTixNQUFNLE9BQU4sTUFBTTtJQUNOLEtBQUssT0FBTCxLQUFLO0lBQ0wsT0FBTyxPQUFQLE9BQU87SUFDUCxZQUFZLE9BQVosWUFBWTtJQUNaLFdBQVcsT0FBWCxXQUFXO0lBQ1gsUUFBUSxPQUFSLFFBQVE7SUFDUixVQUFVLE9BQVYsVUFBVTtJQUNWLFNBQVMsT0FBVCxTQUFTO0lBQ1QsT0FBTyxPQUFQLE9BQU87SUFDUCxNQUFNLE9BQU4sTUFBTTtJQUNOLFVBQVUsT0FBVixVQUFVO0lBQ1YsSUFBSSxPQUFKLElBQUk7SUFDSixTQUFTLE9BQVQsU0FBUztJQUNULElBQUksT0FBSixJQUFJO0lBQ0osTUFBTSxPQUFOLE1BQU07SUFDTixNQUFNLE9BQU4sTUFBTTttQkFFa0IsV0FBVztJQUFsQyxLQUFLLGdCQUFMLEtBQUs7SUFBRSxZQUFZLGdCQUFaLFlBQVk7O0FBQ3hCLElBQUksSUFBSSxZQUFBLENBQUM7QUFDVCxJQUFJLEtBQUssWUFBQSxDQUFDO0FBQ1YsSUFBSSxTQUFTLFlBQUEsQ0FBQzs7QUFFZCxTQUFTLEdBQUcsZ0ZBQWdGLENBQUM7QUFDN0YsU0FBUyxHQUFHLDJGQUEyRixDQUFDOzs7O0FBSXhHLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDckIsVUFBTSxFQUFFLENBQ0osV0FBVyxDQUFDLFVBQVUsRUFDdEIsV0FBVyxDQUFDLEtBQUssQ0FDcEI7QUFDRCxtQkFBZSxFQUFDLDJCQUFHO0FBQ2YsZUFBTztBQUNILGlCQUFLLEVBQUUsQ0FBQztBQUNSLGVBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBQ2xCLENBQUM7S0FDTDtBQUNELFVBQU0sRUFBQyxrQkFBRzs7O0FBQ04sZUFDSTtBQUFDLGtCQUFNO2NBQUMsS0FBSyxFQUFDLE1BQU07WUFDaEIsb0JBQUMsWUFBWSxJQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFOzJCQUFNLE1BQUssWUFBWSxDQUFDLGdCQUFnQixDQUFDO2lCQUFBLEFBQUMsR0FBRztZQUM5RSxvQkFBQyxLQUFLLElBQUMsTUFBTSxFQUFFLEdBQUcsQUFBQyxFQUFDLE1BQU0sRUFBRSxTQUFTLEFBQUMsR0FBRztTQUNwQyxDQUNYO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUN0QixVQUFNLEVBQUUsQ0FDSixXQUFXLENBQUMsVUFBVSxFQUN0QixXQUFXLENBQUMsS0FBSyxDQUNwQjtBQUNELG1CQUFlLEVBQUMsMkJBQUc7QUFDZixlQUFPO0FBQ0gsaUJBQUssRUFBRSxDQUFDO0FBQ1IsZUFBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FDbEIsQ0FBQztLQUNMO0FBQ0QsVUFBTSxFQUFDLGtCQUFHOzs7QUFDTixlQUNJO0FBQUMsa0JBQU07Y0FBQyxLQUFLLEVBQUMsUUFBUTtZQUNsQjtBQUFDLHNCQUFNO2tCQUFDLEtBQUssRUFBQyxRQUFRO2dCQUNsQixvQkFBQyxZQUFZLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUU7K0JBQU0sT0FBSyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7cUJBQUEsQUFBQyxHQUFHO2dCQUM5RSxvQkFBQyxLQUFLLElBQUMsTUFBTSxFQUFFLEdBQUcsQUFBQyxFQUFDLE1BQU0sRUFBRSxTQUFTLEFBQUMsR0FBRzthQUNwQztTQUNKLENBQ1g7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDekIsVUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztBQUMzQixtQkFBZSxFQUFDLDJCQUFHO0FBQ2YsZUFBTyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztLQUN4QjtBQUNELFVBQU0sRUFBQyxrQkFBRzt5QkFDSyxJQUFJLENBQUMsU0FBUyxFQUFFOztZQUF0QixFQUFFLGNBQUYsRUFBRTs7QUFFUCxlQUNJO0FBQUMsa0JBQU07Y0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxBQUFDO1lBQ2xCO0FBQUMsbUJBQUcsQ0FBQyxnQkFBZ0I7a0JBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDO2dCQUM1QyxvQkFBQyxZQUFZLE9BQUc7YUFDRztZQUN2QixvQkFBQyxZQUFZLElBQUMsSUFBSSxFQUFDLE9BQU8sR0FBRztTQUN4QixDQUNYO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsR0FBRyxDQUFDLEtBQUssQ0FDTDtBQUFDLFNBQUs7TUFBQyxPQUFPLEVBQUUsSUFBSSxBQUFDO0lBQ2pCLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBRSxJQUFJLEFBQUMsR0FBRztJQUNqQyxvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUUsS0FBSyxBQUFDLEdBQUc7Q0FDdEMsQ0FDWCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCB7XHJcbiAgICBTY3JvbGxDb250YWluZXIsXHJcbiAgICBDb21ib2JveCxcclxuICAgIE9wdGlvbixcclxuICAgIEJ1dHRvbixcclxuICAgIEltYWdlLFxyXG4gICAgU3Bpbm5lcixcclxuICAgIFJhaXNlZEJ1dHRvbixcclxuICAgIEltYWdlQnV0dG9uLFxyXG4gICAgQ2hlY2tib3gsXHJcbiAgICBSYWRpb0dyb3VwLFxyXG4gICAgUmFkaW9JdGVtLFxyXG4gICAgRmxleGJveCxcclxuICAgIFNjcmVlbixcclxuICAgIFJhbmdlSW5wdXQsXHJcbiAgICBDYXJkLFxyXG4gICAgVGV4dElucHV0LFxyXG4gICAgR3JpZCxcclxuICAgIFZTcGxpdCxcclxuICAgIEhTcGxpdFxyXG59ID0gVUk7XHJcbmxldCB7Um91dGUsIFJvdXRlSGFuZGxlcn0gPSBSZWFjdFJvdXRlcjtcclxubGV0IERlbW87XHJcbmxldCBEZW1vMjtcclxubGV0IGltZ1NvdXJjZTtcclxuXHJcbmltZ1NvdXJjZSA9IFwiaHR0cDovLzctdGhlbWVzLmNvbS9kYXRhX2ltYWdlcy9vdXQvNzYvNzAzMTc4My12aXZpLW9ybml0aWVyLWZpbmFsLWZhbnRhc3kuanBnXCI7XHJcbmltZ1NvdXJjZSA9IFwiaHR0cHM6Ly9jb2VkYmMuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L3NjcmVlbi1zaG90LTIwMTQtMDktMjUtYXQtMS0zNC0zMC1wbS5wbmc/dz02NDBcIjtcclxuXHJcbi8vIDxJbWFnZSBzb3VyY2U9e2BodHRwczovL2NvZWRiYy5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvc2NyZWVuLXNob3QtMjAxNC0wOS0yNS1hdC0xLTM0LTMwLXBtLnBuZz93PTY0MCZ0PSR7dGhpcy5zdGF0ZS5ub3d9YH0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXsyMDB9IC8+XHJcblxyXG5EZW1vID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgbWl4aW5zOiBbXHJcbiAgICAgICAgUmVhY3RSb3V0ZXIuTmF2aWdhdGlvbixcclxuICAgICAgICBSZWFjdFJvdXRlci5TdGF0ZVxyXG4gICAgXSxcclxuICAgIGdldEluaXRpYWxTdGF0ZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgIG5vdzogRGF0ZS5ub3coKVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2NyZWVuIHRpdGxlPVwiVGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvbiB0ZXh0PVwidGVzdFwiIG9uVGFwPXsoKSA9PiB0aGlzLnRyYW5zaXRpb25UbyhcIi90ZXN0LzEtMS0xOTcwXCIpfSAvPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGhlaWdodD17MzUwfSBzb3VyY2U9e2ltZ1NvdXJjZX0gLz5cclxuICAgICAgICAgICAgPC9TY3JlZW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5EZW1vMiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIG1peGluczogW1xyXG4gICAgICAgIFJlYWN0Um91dGVyLk5hdmlnYXRpb24sXHJcbiAgICAgICAgUmVhY3RSb3V0ZXIuU3RhdGVcclxuICAgIF0sXHJcbiAgICBnZXRJbml0aWFsU3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICBub3c6IERhdGUubm93KClcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNjcmVlbiB0aXRsZT1cIlRlc3QgMlwiPlxyXG4gICAgICAgICAgICAgICAgPFNjcmVlbiB0aXRsZT1cIk5lc3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gdGV4dD1cInRlc3RcIiBvblRhcD17KCkgPT4gdGhpcy50cmFuc2l0aW9uVG8oXCIvdGVzdC8xLTEtMTk3MFwiKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgaGVpZ2h0PXszNTB9IHNvdXJjZT17aW1nU291cmNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9TY3JlZW4+XHJcbiAgICAgICAgICAgIDwvU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubGV0IFdyYXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBtaXhpbnM6IFtSZWFjdFJvdXRlci5TdGF0ZV0sXHJcbiAgICBnZXRJbml0aWFsU3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB7dGl0bGU6IG51bGx9O1xyXG4gICAgfSxcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgbGV0IHtpZH0gPSB0aGlzLmdldFBhcmFtcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VlNwbGl0IGJvdW5kcz17Wy01MF19PlxyXG4gICAgICAgICAgICAgICAgPEFwcC5TY3JlZW5UcmFuc2l0aW9uIGFjdGlvbj17dGhpcy5wcm9wcy5hY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZUhhbmRsZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvQXBwLlNjcmVlblRyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICAgICA8UmFpc2VkQnV0dG9uIHRleHQ9XCJTdGlsbFwiIC8+XHJcbiAgICAgICAgICAgIDwvVlNwbGl0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQXBwLnN0YXJ0KFxyXG4gICAgPFJvdXRlIGhhbmRsZXI9e1dyYXB9PlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGhhbmRsZXI9e0RlbW99IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvdGVzdC86aWRcIiBoYW5kbGVyPXtEZW1vMn0gLz5cclxuICAgIDwvUm91dGU+XHJcbik7XHJcbiJdfQ==

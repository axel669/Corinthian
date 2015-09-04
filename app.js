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
imgSource = "adriana.jpg";

// function mixin (_mixin) {
//     return _class => {
//         Object.keys(_mixin).forEach(key => _class.prototype[key] = _mixin[key]);
//         return _class;
//     };
// }

// @mixin(ReactRouter.Navigation)
// @mixin(ReactRouter.State)
// class Demo extends React.Component {
//     state = {
//         index: 0,
//         now: Date.now(),
//         on: false
//     };

//     constructor (props) {
//         super(props);
//     }

//     render () {
//         return (
//             <Screen title="Test">
//                 <TextInput placeholder="Email" icon="ion-android-mail" />
//                 <TextInput placeholder="Password" icon="ion-android-lock" />
//                 <TextInput placeholder="Password" icon="ion-android-lock" iconStyle={{color: 'cyan'}} />
//                 <Image height="50%" width="100%" source={imgSource} />
//             </Screen>
//         );
//     }
// }

Demo = React.createClass({
    displayName: "Demo",

    mixins: [ReactRouter.Navigation, ReactRouter.State],
    getInitialState: function getInitialState() {
        return {
            index: 0,
            now: Date.now(),
            on: false
        };
    },
    render: function render() {
        return React.createElement(
            Screen,
            { title: "Test" },
            React.createElement(Image, { height: "100%", width: "100%", source: imgSource })
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
        var _this = this;

        return React.createElement(
            Screen,
            { title: "Test 2" },
            React.createElement(
                Screen,
                { title: "Nested" },
                React.createElement(RaisedButton, { text: "test", onTap: function () {
                        return _this.transitionTo("/test/1-1-1970");
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
    null,
    React.createElement(Route, { path: "/", handler: Demo }),
    React.createElement(Route, { path: "/test/:id", handler: Demo2 })
));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O1VDb0JJLEVBQUU7SUFuQkYsZUFBZSxPQUFmLGVBQWU7SUFDZixRQUFRLE9BQVIsUUFBUTtJQUNSLE1BQU0sT0FBTixNQUFNO0lBQ04sTUFBTSxPQUFOLE1BQU07SUFDTixLQUFLLE9BQUwsS0FBSztJQUNMLE9BQU8sT0FBUCxPQUFPO0lBQ1AsWUFBWSxPQUFaLFlBQVk7SUFDWixXQUFXLE9BQVgsV0FBVztJQUNYLFFBQVEsT0FBUixRQUFRO0lBQ1IsVUFBVSxPQUFWLFVBQVU7SUFDVixTQUFTLE9BQVQsU0FBUztJQUNULE9BQU8sT0FBUCxPQUFPO0lBQ1AsTUFBTSxPQUFOLE1BQU07SUFDTixVQUFVLE9BQVYsVUFBVTtJQUNWLElBQUksT0FBSixJQUFJO0lBQ0osU0FBUyxPQUFULFNBQVM7SUFDVCxJQUFJLE9BQUosSUFBSTtJQUNKLE1BQU0sT0FBTixNQUFNO0lBQ04sTUFBTSxPQUFOLE1BQU07bUJBRWtCLFdBQVc7SUFBbEMsS0FBSyxnQkFBTCxLQUFLO0lBQUUsWUFBWSxnQkFBWixZQUFZOztBQUN4QixJQUFJLElBQUksWUFBQSxDQUFDO0FBQ1QsSUFBSSxLQUFLLFlBQUEsQ0FBQztBQUNWLElBQUksU0FBUyxZQUFBLENBQUM7O0FBRWQsU0FBUyxHQUFHLGdGQUFnRixDQUFDOztBQUU3RixTQUFTLEdBQUcsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0MxQixJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ3JCLFVBQU0sRUFBRSxDQUNKLFdBQVcsQ0FBQyxVQUFVLEVBQ3RCLFdBQVcsQ0FBQyxLQUFLLENBQ3BCO0FBQ0QsbUJBQWUsRUFBQywyQkFBRztBQUNmLGVBQU87QUFDSCxpQkFBSyxFQUFFLENBQUM7QUFDUixlQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNmLGNBQUUsRUFBRSxLQUFLO1NBQ1osQ0FBQztLQUNMO0FBQ0QsVUFBTSxFQUFDLGtCQUFHO0FBQ04sZUFDSTtBQUFDLGtCQUFNO2NBQUMsS0FBSyxFQUFDLE1BQU07WUFDaEIsb0JBQUMsS0FBSyxJQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUUsU0FBUyxBQUFDLEdBQUc7U0FDbEQsQ0FDWDtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDdEIsVUFBTSxFQUFFLENBQ0osV0FBVyxDQUFDLFVBQVUsRUFDdEIsV0FBVyxDQUFDLEtBQUssQ0FDcEI7QUFDRCxtQkFBZSxFQUFDLDJCQUFHO0FBQ2YsZUFBTztBQUNILGlCQUFLLEVBQUUsQ0FBQztBQUNSLGVBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBQ2xCLENBQUM7S0FDTDtBQUNELFVBQU0sRUFBQyxrQkFBRzs7O0FBQ04sZUFDSTtBQUFDLGtCQUFNO2NBQUMsS0FBSyxFQUFDLFFBQVE7WUFDbEI7QUFBQyxzQkFBTTtrQkFBQyxLQUFLLEVBQUMsUUFBUTtnQkFDbEIsb0JBQUMsWUFBWSxJQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFOytCQUFNLE1BQUssWUFBWSxDQUFDLGdCQUFnQixDQUFDO3FCQUFBLEFBQUMsR0FBRztnQkFDOUUsb0JBQUMsS0FBSyxJQUFDLE1BQU0sRUFBRSxHQUFHLEFBQUMsRUFBQyxNQUFNLEVBQUUsU0FBUyxBQUFDLEdBQUc7YUFDcEM7U0FDSixDQUNYO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ3pCLFVBQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7QUFDM0IsbUJBQWUsRUFBQywyQkFBRztBQUNmLGVBQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUM7S0FDeEI7QUFDRCxVQUFNLEVBQUMsa0JBQUc7eUJBQ0ssSUFBSSxDQUFDLFNBQVMsRUFBRTs7WUFBdEIsRUFBRSxjQUFGLEVBQUU7O0FBRVAsZUFDSTtBQUFDLGtCQUFNO2NBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQUFBQztZQUNsQjtBQUFDLG1CQUFHLENBQUMsZ0JBQWdCO2tCQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQUFBQztnQkFDNUMsb0JBQUMsWUFBWSxPQUFHO2FBQ0c7WUFDdkIsb0JBQUMsWUFBWSxJQUFDLElBQUksRUFBQyxPQUFPLEdBQUc7U0FDeEIsQ0FDWDtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILEdBQUcsQ0FBQyxLQUFLLENBQ0w7QUFBQyxTQUFLOztJQUNGLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBRSxJQUFJLEFBQUMsR0FBRztJQUNqQyxvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUUsS0FBSyxBQUFDLEdBQUc7Q0FDdEMsQ0FDWCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCB7XHJcbiAgICBTY3JvbGxDb250YWluZXIsXHJcbiAgICBDb21ib2JveCxcclxuICAgIE9wdGlvbixcclxuICAgIEJ1dHRvbixcclxuICAgIEltYWdlLFxyXG4gICAgU3Bpbm5lcixcclxuICAgIFJhaXNlZEJ1dHRvbixcclxuICAgIEltYWdlQnV0dG9uLFxyXG4gICAgQ2hlY2tib3gsXHJcbiAgICBSYWRpb0dyb3VwLFxyXG4gICAgUmFkaW9JdGVtLFxyXG4gICAgRmxleGJveCxcclxuICAgIFNjcmVlbixcclxuICAgIFJhbmdlSW5wdXQsXHJcbiAgICBDYXJkLFxyXG4gICAgVGV4dElucHV0LFxyXG4gICAgR3JpZCxcclxuICAgIFZTcGxpdCxcclxuICAgIEhTcGxpdFxyXG59ID0gVUk7XHJcbmxldCB7Um91dGUsIFJvdXRlSGFuZGxlcn0gPSBSZWFjdFJvdXRlcjtcclxubGV0IERlbW87XHJcbmxldCBEZW1vMjtcclxubGV0IGltZ1NvdXJjZTtcclxuXHJcbmltZ1NvdXJjZSA9IFwiaHR0cDovLzctdGhlbWVzLmNvbS9kYXRhX2ltYWdlcy9vdXQvNzYvNzAzMTc4My12aXZpLW9ybml0aWVyLWZpbmFsLWZhbnRhc3kuanBnXCI7XHJcbi8vIGltZ1NvdXJjZSA9IFwiaHR0cHM6Ly9jb2VkYmMuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L3NjcmVlbi1zaG90LTIwMTQtMDktMjUtYXQtMS0zNC0zMC1wbS5wbmc/dz02NDBcIjtcclxuaW1nU291cmNlID0gXCJhZHJpYW5hLmpwZ1wiO1xyXG5cclxuLy8gZnVuY3Rpb24gbWl4aW4gKF9taXhpbikge1xyXG4vLyAgICAgcmV0dXJuIF9jbGFzcyA9PiB7XHJcbi8vICAgICAgICAgT2JqZWN0LmtleXMoX21peGluKS5mb3JFYWNoKGtleSA9PiBfY2xhc3MucHJvdG90eXBlW2tleV0gPSBfbWl4aW5ba2V5XSk7XHJcbi8vICAgICAgICAgcmV0dXJuIF9jbGFzcztcclxuLy8gICAgIH07XHJcbi8vIH1cclxuXHJcbi8vIEBtaXhpbihSZWFjdFJvdXRlci5OYXZpZ2F0aW9uKVxyXG4vLyBAbWl4aW4oUmVhY3RSb3V0ZXIuU3RhdGUpXHJcbi8vIGNsYXNzIERlbW8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4vLyAgICAgc3RhdGUgPSB7XHJcbi8vICAgICAgICAgaW5kZXg6IDAsXHJcbi8vICAgICAgICAgbm93OiBEYXRlLm5vdygpLFxyXG4vLyAgICAgICAgIG9uOiBmYWxzZVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuLy8gICAgICAgICBzdXBlcihwcm9wcyk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmVuZGVyICgpIHtcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8U2NyZWVuIHRpdGxlPVwiVGVzdFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPFRleHRJbnB1dCBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgaWNvbj1cImlvbi1hbmRyb2lkLW1haWxcIiAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPFRleHRJbnB1dCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgaWNvbj1cImlvbi1hbmRyb2lkLWxvY2tcIiAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPFRleHRJbnB1dCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgaWNvbj1cImlvbi1hbmRyb2lkLWxvY2tcIiBpY29uU3R5bGU9e3tjb2xvcjogJ2N5YW4nfX0gLz5cclxuLy8gICAgICAgICAgICAgICAgIDxJbWFnZSBoZWlnaHQ9XCI1MCVcIiB3aWR0aD1cIjEwMCVcIiBzb3VyY2U9e2ltZ1NvdXJjZX0gLz5cclxuLy8gICAgICAgICAgICAgPC9TY3JlZW4+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuRGVtbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIG1peGluczogW1xyXG4gICAgICAgIFJlYWN0Um91dGVyLk5hdmlnYXRpb24sXHJcbiAgICAgICAgUmVhY3RSb3V0ZXIuU3RhdGVcclxuICAgIF0sXHJcbiAgICBnZXRJbml0aWFsU3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICBub3c6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIG9uOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2NyZWVuIHRpdGxlPVwiVGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBzb3VyY2U9e2ltZ1NvdXJjZX0gLz5cclxuICAgICAgICAgICAgPC9TY3JlZW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5EZW1vMiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIG1peGluczogW1xyXG4gICAgICAgIFJlYWN0Um91dGVyLk5hdmlnYXRpb24sXHJcbiAgICAgICAgUmVhY3RSb3V0ZXIuU3RhdGVcclxuICAgIF0sXHJcbiAgICBnZXRJbml0aWFsU3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICBub3c6IERhdGUubm93KClcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNjcmVlbiB0aXRsZT1cIlRlc3QgMlwiPlxyXG4gICAgICAgICAgICAgICAgPFNjcmVlbiB0aXRsZT1cIk5lc3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gdGV4dD1cInRlc3RcIiBvblRhcD17KCkgPT4gdGhpcy50cmFuc2l0aW9uVG8oXCIvdGVzdC8xLTEtMTk3MFwiKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgaGVpZ2h0PXszNTB9IHNvdXJjZT17aW1nU291cmNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9TY3JlZW4+XHJcbiAgICAgICAgICAgIDwvU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubGV0IFdyYXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBtaXhpbnM6IFtSZWFjdFJvdXRlci5TdGF0ZV0sXHJcbiAgICBnZXRJbml0aWFsU3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB7dGl0bGU6IG51bGx9O1xyXG4gICAgfSxcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgbGV0IHtpZH0gPSB0aGlzLmdldFBhcmFtcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VlNwbGl0IGJvdW5kcz17Wy01MF19PlxyXG4gICAgICAgICAgICAgICAgPEFwcC5TY3JlZW5UcmFuc2l0aW9uIGFjdGlvbj17dGhpcy5wcm9wcy5hY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZUhhbmRsZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvQXBwLlNjcmVlblRyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICAgICA8UmFpc2VkQnV0dG9uIHRleHQ9XCJTdGlsbFwiIC8+XHJcbiAgICAgICAgICAgIDwvVlNwbGl0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQXBwLnN0YXJ0KFxyXG4gICAgPFJvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGhhbmRsZXI9e0RlbW99IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvdGVzdC86aWRcIiBoYW5kbGVyPXtEZW1vMn0gLz5cclxuICAgIDwvUm91dGU+XHJcbik7XHJcbiJdfQ==

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
        return React.createElement(
            UI.Screen,
            { title: 'Testing', subtext: 'WOAH', scrollable: true },
            React.createElement(
                UI.RadioGroup,
                { selectedIndex: 0, onChange: console.log.bind(console) },
                React.createElement(
                    UI.Item,
                    { value: 100 },
                    React.createElement(UI.Image, { source: 'https://s-media-cache-ak0.pinimg.com/736x/89/aa/35/89aa35dbf42e2abd5a9b8082ebc4a3c3.jpg', height: 200 })
                ),
                React.createElement(
                    UI.Item,
                    { value: 200 },
                    'Test'
                )
            ),
            React.createElement(UI.Button, { text: 'test' }),
            React.createElement(UI.Button, { text: 'Raised?', raised: true, height: 60 })
        );
    }
});

App.start(React.createElement(
    Route,
    null,
    React.createElement(Route, { path: '/', component: Main })
));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FnQixXQUFXO0lBQXBCLEtBQUssZ0JBQUwsS0FBSzs7OztBQUdaLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM5QixVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUFPOztjQUFLLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxBQUFDO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQU8sQ0FBQztLQUNsRztDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsbUJBQWUsRUFBQywyQkFBRztBQUNmLGVBQU87QUFDSCxpQkFBSyxFQUFFLElBQUk7QUFDWCx5QkFBYSxFQUFFLENBQUM7U0FDbkIsQ0FBQztLQUNMO0FBQ0QsaUJBQWEsRUFBQyx1QkFBQyxJQUFJLEVBQUU7OztBQUNqQixlQUFPLFVBQUEsS0FBSyxFQUFJOzs7QUFDWixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLGtCQUFLLFFBQVEsNEJBQUcsSUFBSSxJQUFHLEtBQUssYUFBRSxDQUFDO1NBQ2xDLENBQUM7S0FDTDtBQUNELFFBQUksRUFBQyxnQkFBRztBQUNKLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNCO0FBQ0QsVUFBTSxFQUFDLGtCQUFHO0FBQ04sZUFDSTtBQUFDLGNBQUUsQ0FBQyxNQUFNO2NBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBRSxJQUFJLEFBQUM7WUFDdkQ7QUFBQyxrQkFBRSxDQUFDLFVBQVU7a0JBQUMsYUFBYSxFQUFFLENBQUMsQUFBQyxFQUFDLFFBQVEsRUFBSSxPQUFPLENBQUMsR0FBRyxNQUFYLE9BQU8sQ0FBSztnQkFDckQ7QUFBQyxzQkFBRSxDQUFDLElBQUk7c0JBQUMsS0FBSyxFQUFFLEdBQUcsQUFBQztvQkFDaEIsb0JBQUMsRUFBRSxDQUFDLEtBQUssSUFBQyxNQUFNLEVBQUMseUZBQXlGLEVBQUMsTUFBTSxFQUFFLEdBQUcsQUFBQyxHQUFHO2lCQUNwSDtnQkFDVjtBQUFDLHNCQUFFLENBQUMsSUFBSTtzQkFBQyxLQUFLLEVBQUUsR0FBRyxBQUFDOztpQkFBZTthQUN2QjtZQUNoQixvQkFBQyxFQUFFLENBQUMsTUFBTSxJQUFDLElBQUksRUFBQyxNQUFNLEdBQUc7WUFDekIsb0JBQUMsRUFBRSxDQUFDLE1BQU0sSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBRSxJQUFJLEFBQUMsRUFBQyxNQUFNLEVBQUUsRUFBRSxBQUFDLEdBQUc7U0FDOUMsQ0FDZDtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILEdBQUcsQ0FBQyxLQUFLLENBQ0w7QUFBQyxTQUFLOztJQUNGLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztDQUMvQixDQUNYLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3Qge1JvdXRlfSA9IFJlYWN0Um91dGVyO1xyXG4vLyBsZXQge1JhaXNlZEJ1dHRvbiwgU2NyZWVufSA9IFVJO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodHRlYWwnLCBoZWlnaHQ6ICcxMDAlJ319Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjaGVjazogdHJ1ZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogMFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlU2V0dGluZyAobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZpbmc6JywgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBzYXZlICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxVSS5TY3JlZW4gdGl0bGU9XCJUZXN0aW5nXCIgc3VidGV4dD1cIldPQUhcIiBzY3JvbGxhYmxlPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxVSS5SYWRpb0dyb3VwIHNlbGVjdGVkSW5kZXg9ezB9IG9uQ2hhbmdlPXs6OmNvbnNvbGUubG9nfT5cclxuICAgICAgICAgICAgICAgICAgICA8VUkuSXRlbSB2YWx1ZT17MTAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVJLkltYWdlIHNvdXJjZT1cImh0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS83MzZ4Lzg5L2FhLzM1Lzg5YWEzNWRiZjQyZTJhYmQ1YTliODA4MmViYzRhM2MzLmpwZ1wiIGhlaWdodD17MjAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVUkuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8VUkuSXRlbSB2YWx1ZT17MjAwfT5UZXN0PC9VSS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9VSS5SYWRpb0dyb3VwPlxyXG4gICAgICAgICAgICAgICAgPFVJLkJ1dHRvbiB0ZXh0PVwidGVzdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VUkuQnV0dG9uIHRleHQ9XCJSYWlzZWQ/XCIgcmFpc2VkPXt0cnVlfSBoZWlnaHQ9ezYwfSAvPlxyXG4gICAgICAgICAgICA8L1VJLlNjcmVlbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbkFwcC5zdGFydChcclxuICAgIDxSb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01haW59IC8+XHJcbiAgICA8L1JvdXRlPlxyXG4pO1xyXG4iXX0=

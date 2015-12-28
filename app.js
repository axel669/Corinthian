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
            { title: 'Testing', subtext: 'WOAH' },
            React.createElement(
                UI.Form,
                { submitText: 'Login' },
                React.createElement(UI.Item, { name: 'username', inputType: 'text', label: 'Username' }),
                React.createElement(UI.Item, { name: 'password', inputType: 'text', label: 'Password', type: 'password' }),
                React.createElement(UI.Item, { name: 'age', inputType: 'range', min: 10, max: 50, label: 'Age' }),
                React.createElement(UI.Item, { name: 'shia', inputType: 'switch', label: 'Shia LeBouff' }),
                React.createElement(UI.Item, { name: 'trap', inputType: 'checkbox', label: 'Have Bear Trap', checkSide: 'right' })
            )
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FnQixXQUFXO0lBQXBCLEtBQUssZ0JBQUwsS0FBSzs7OztBQUdaLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM5QixVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUFPOztjQUFLLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxBQUFDO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQU8sQ0FBQztLQUNsRztDQUNKLENBQUMsQ0FBQzs7OztBQUlILElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixtQkFBZSxFQUFDLDJCQUFHO0FBQ2YsZUFBTztBQUNILGlCQUFLLEVBQUUsSUFBSTtBQUNYLHlCQUFhLEVBQUUsQ0FBQztBQUNoQixzQkFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQztLQUNMO0FBQ0QsaUJBQWEsRUFBQyx1QkFBQyxJQUFJLEVBQUU7OztBQUNqQixlQUFPLFVBQUEsS0FBSyxFQUFJOzs7QUFDWixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLGtCQUFLLFFBQVEsNEJBQUcsSUFBSSxJQUFHLEtBQUssYUFBRSxDQUFDO1NBQ2xDLENBQUM7S0FDTDtBQUNELFFBQUksRUFBQyxnQkFBRztBQUNKLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNCO0FBQ0QsVUFBTSxFQUFDLGtCQUFHO0FBQ04sWUFBTSxHQUFHLEdBQUcseUZBQXlGLENBQUM7O0FBRXRHLGVBQ0k7QUFBQyxjQUFFLENBQUMsTUFBTTtjQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE1BQU07WUFDckM7QUFBQyxrQkFBRSxDQUFDLElBQUk7a0JBQUMsVUFBVSxFQUFDLE9BQU87Z0JBQ3ZCLG9CQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxVQUFVLEdBQUc7Z0JBQzdELG9CQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLFVBQVUsR0FBRztnQkFDN0Usb0JBQUMsRUFBRSxDQUFDLElBQUksSUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFFLEVBQUUsQUFBQyxFQUFDLEdBQUcsRUFBRSxFQUFFLEFBQUMsRUFBQyxLQUFLLEVBQUMsS0FBSyxHQUFHO2dCQUN0RSxvQkFBQyxFQUFFLENBQUMsSUFBSSxJQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsY0FBYyxHQUFHO2dCQUMvRCxvQkFBQyxFQUFFLENBQUMsSUFBSSxJQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLE9BQU8sR0FBRzthQUMvRTtTQUNGLENBQ2Q7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsVUFBTSxFQUFDLGtCQUFHO0FBQ04sZUFDSTtBQUFDLGNBQUUsQ0FBQyxNQUFNO2NBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsTUFBTTs7U0FFbEMsQ0FDZDtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILEdBQUcsQ0FBQyxLQUFLLENBQ0w7QUFBQyxTQUFLOztJQUNGLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztJQUNuQyxvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUUsSUFBSSxBQUFDLEdBQUc7Q0FDbkMsQ0FDWCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IHtSb3V0ZX0gPSBSZWFjdFJvdXRlcjtcclxuLy8gbGV0IHtSYWlzZWRCdXR0b24sIFNjcmVlbn0gPSBVSTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnbGlnaHR0ZWFsJywgaGVpZ2h0OiAnMTAwJSd9fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj47XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gY29uc3QgdXJsID0gXCJodHRwOi8vYXNzZXRzMS5pZ25pbWdzLmNvbS90aHVtYnMvdXNlclVwbG9hZGVkLzIwMTQvMTAvMTIvQmF5b25ldHRhMl8xMjgwLTE0MTMxNDI0NTExMDAuanBnXCI7XHJcblxyXG5jb25zdCBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjaGVjazogdHJ1ZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogMCxcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogNTBcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVNldHRpbmcgKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nOicsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgc2F2ZSAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS83MzZ4Lzg5L2FhLzM1Lzg5YWEzNWRiZjQyZTJhYmQ1YTliODA4MmViYzRhM2MzLmpwZ1wiO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxVSS5TY3JlZW4gdGl0bGU9XCJUZXN0aW5nXCIgc3VidGV4dD1cIldPQUhcIj5cclxuICAgICAgICAgICAgICAgIDxVSS5Gb3JtIHN1Ym1pdFRleHQ9XCJMb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVSS5JdGVtIG5hbWU9XCJ1c2VybmFtZVwiIGlucHV0VHlwZT1cInRleHRcIiBsYWJlbD1cIlVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VUkuSXRlbSBuYW1lPVwicGFzc3dvcmRcIiBpbnB1dFR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJQYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVJLkl0ZW0gbmFtZT1cImFnZVwiIGlucHV0VHlwZT1cInJhbmdlXCIgbWluPXsxMH0gbWF4PXs1MH0gbGFiZWw9XCJBZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVSS5JdGVtIG5hbWU9XCJzaGlhXCIgaW5wdXRUeXBlPVwic3dpdGNoXCIgbGFiZWw9XCJTaGlhIExlQm91ZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVSS5JdGVtIG5hbWU9XCJ0cmFwXCIgaW5wdXRUeXBlPVwiY2hlY2tib3hcIiBsYWJlbD1cIkhhdmUgQmVhciBUcmFwXCIgY2hlY2tTaWRlPVwicmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9VSS5Gb3JtPlxyXG4gICAgICAgICAgICA8L1VJLlNjcmVlbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IFRlc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxVSS5TY3JlZW4gdGl0bGU9XCJUZXN0IFNjcmVlblwiIGJhY2tUZXh0PVwiQmFja1wiPlxyXG4gICAgICAgICAgICAgICAgTm9wZVxyXG4gICAgICAgICAgICA8L1VJLlNjcmVlbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbkFwcC5zdGFydChcclxuICAgIDxSb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01haW59IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvdGVzdFwiIGNvbXBvbmVudD17VGVzdH0gLz5cclxuICAgIDwvUm91dGU+XHJcbik7XHJcbiJdfQ==

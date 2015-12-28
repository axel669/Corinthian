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
            { title: 'Testing', subtext: 'WOAH', scrollable: true },
            React.createElement(UI.TextInput, { label: 'Email' }),
            React.createElement(
                UI.Combobox,
                { selectedIndex: 0, onChange: console.log.bind(console), label: 'Bayonetta Sexy?' },
                React.createElement(
                    UI.Option,
                    { text: 'yes', value: 100 },
                    React.createElement(UI.Image, { height: '100%', source: url })
                ),
                React.createElement(UI.Option, { text: 'always', value: 200 })
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FnQixXQUFXO0lBQXBCLEtBQUssZ0JBQUwsS0FBSzs7OztBQUdaLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM5QixVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUFPOztjQUFLLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxBQUFDO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQU8sQ0FBQztLQUNsRztDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsbUJBQWUsRUFBQywyQkFBRztBQUNmLGVBQU87QUFDSCxpQkFBSyxFQUFFLElBQUk7QUFDWCx5QkFBYSxFQUFFLENBQUM7QUFDaEIsc0JBQVUsRUFBRSxFQUFFO1NBQ2pCLENBQUM7S0FDTDtBQUNELGlCQUFhLEVBQUMsdUJBQUMsSUFBSSxFQUFFOzs7QUFDakIsZUFBTyxVQUFBLEtBQUssRUFBSTs7O0FBQ1osbUJBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxrQkFBSyxRQUFRLDRCQUFHLElBQUksSUFBRyxLQUFLLGFBQUUsQ0FBQztTQUNsQyxDQUFDO0tBQ0w7QUFDRCxRQUFJLEVBQUMsZ0JBQUc7QUFDSixlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjtBQUNELFVBQU0sRUFBQyxrQkFBRztBQUNOLFlBQU0sR0FBRyxHQUFHLHlGQUF5RixDQUFDOztBQUV0RyxlQUNJO0FBQUMsY0FBRSxDQUFDLE1BQU07Y0FBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFFLElBQUksQUFBQztZQUN2RCxvQkFBQyxFQUFFLENBQUMsU0FBUyxJQUFDLEtBQUssRUFBQyxPQUFPLEdBQUc7WUFDOUI7QUFBQyxrQkFBRSxDQUFDLFFBQVE7a0JBQUMsYUFBYSxFQUFFLENBQUMsQUFBQyxFQUFDLFFBQVEsRUFBSSxPQUFPLENBQUMsR0FBRyxNQUFYLE9BQU8sQ0FBSyxFQUFDLEtBQUssRUFBQyxpQkFBaUI7Z0JBQzNFO0FBQUMsc0JBQUUsQ0FBQyxNQUFNO3NCQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLEdBQUcsQUFBQztvQkFDN0Isb0JBQUMsRUFBRSxDQUFDLEtBQUssSUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRSxHQUFHLEFBQUMsR0FBRztpQkFDL0I7Z0JBQ1osb0JBQUMsRUFBRSxDQUFDLE1BQU0sSUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBRSxHQUFHLEFBQUMsR0FBRzthQUM3QjtTQUNOLENBQ2Q7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxHQUFHLENBQUMsS0FBSyxDQUNMO0FBQUMsU0FBSzs7SUFDRixvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsSUFBSSxBQUFDLEdBQUc7Q0FDL0IsQ0FDWCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IHtSb3V0ZX0gPSBSZWFjdFJvdXRlcjtcclxuLy8gbGV0IHtSYWlzZWRCdXR0b24sIFNjcmVlbn0gPSBVSTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnbGlnaHR0ZWFsJywgaGVpZ2h0OiAnMTAwJSd9fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj47XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY2hlY2s6IHRydWUsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IDUwXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVTZXR0aW5nIChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmluZzonLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9KTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHNhdmUgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNzM2eC84OS9hYS8zNS84OWFhMzVkYmY0MmUyYWJkNWE5YjgwODJlYmM0YTNjMy5qcGdcIjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VUkuU2NyZWVuIHRpdGxlPVwiVGVzdGluZ1wiIHN1YnRleHQ9XCJXT0FIXCIgc2Nyb2xsYWJsZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8VUkuVGV4dElucHV0IGxhYmVsPVwiRW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFVJLkNvbWJvYm94IHNlbGVjdGVkSW5kZXg9ezB9IG9uQ2hhbmdlPXs6OmNvbnNvbGUubG9nfSBsYWJlbD1cIkJheW9uZXR0YSBTZXh5P1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVSS5PcHRpb24gdGV4dD1cInllc1wiIHZhbHVlPXsxMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VUkuSW1hZ2UgaGVpZ2h0PVwiMTAwJVwiIHNvdXJjZT17dXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVUkuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVSS5PcHRpb24gdGV4dD1cImFsd2F5c1wiIHZhbHVlPXsyMDB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1VJLkNvbWJvYm94PlxyXG4gICAgICAgICAgICA8L1VJLlNjcmVlbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbkFwcC5zdGFydChcclxuICAgIDxSb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01haW59IC8+XHJcbiAgICA8L1JvdXRlPlxyXG4pO1xyXG4iXX0=

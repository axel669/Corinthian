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

var CenterContent = React.createClass({
    displayName: 'CenterContent',

    render: function render() {
        var _props = this.props;
        var _props$vertical = _props.vertical;
        var vertical = _props$vertical === undefined ? 'center' : _props$vertical;
        var _props$horizontal = _props.horizontal;
        var horizontal = _props$horizontal === undefined ? 'center' : _props$horizontal;
        var _props$width = _props.width;
        var width = _props$width === undefined ? '100%' : _props$width;
        var _props$height = _props.height;
        var height = _props$height === undefined ? '100%' : _props$height;

        if (vertical === 'center') {
            vertical = 'middle';
        }

        return React.createElement(
            'div',
            { style: { width: width, height: height, display: 'table' } },
            React.createElement(
                'div',
                { style: { display: 'table-cell', textAlign: horizontal, verticalAlign: vertical } },
                this.props.children
            )
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
            React.createElement(
                CenterContent,
                { height: 100 },
                React.createElement(
                    'div',
                    null,
                    'Test content?'
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FjLFdBQVc7SUFBcEIsS0FBSyxnQkFBTCxLQUFLO1VBQ21CLEVBQUU7SUFBMUIsWUFBWSxPQUFaLFlBQVk7SUFBRSxNQUFNLE9BQU4sTUFBTTs7QUFFekIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzVCLFVBQU0sRUFBQyxrQkFBRztBQUNOLGVBQU87O2NBQUssS0FBSyxFQUFFLEVBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLEFBQUM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FBTyxDQUFDO0tBQ2xHO0NBQ0osQ0FBQyxDQUFDOztBQUVILElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUNsQyxVQUFNLEVBQUMsa0JBQUc7cUJBQzhFLElBQUksQ0FBQyxLQUFLO3FDQUF6RixRQUFRO1lBQVIsUUFBUSxtQ0FBRyxRQUFRO3VDQUFFLFVBQVU7WUFBVixVQUFVLHFDQUFHLFFBQVE7a0NBQUUsS0FBSztZQUFMLEtBQUssZ0NBQUcsTUFBTTttQ0FBRSxNQUFNO1lBQU4sTUFBTSxpQ0FBRyxNQUFNOztBQUVoRixZQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUU7QUFDdkIsb0JBQVEsR0FBRyxRQUFRLENBQUM7U0FDdkI7O0FBRUQsZUFDSTs7Y0FBSyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUwsS0FBSyxFQUFFLE1BQU0sRUFBTixNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxBQUFDO1lBQzFDOztrQkFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBQyxBQUFDO2dCQUMvRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDbEI7U0FDSixDQUNSO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzNCLG1CQUFlLEVBQUMsMkJBQUc7QUFDZixlQUFPLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO0tBQ3pCO0FBQ0QsaUJBQWEsRUFBQyx1QkFBQyxJQUFJLEVBQUU7OztBQUNqQixlQUFPLFVBQUEsS0FBSyxFQUFJOzs7QUFDWixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLGtCQUFLLFFBQVEsNEJBQUcsSUFBSSxJQUFHLEtBQUssYUFBRSxDQUFDO1NBQ2xDLENBQUM7S0FDTDtBQUNELFFBQUksRUFBQyxnQkFBRztBQUNKLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNCO0FBQ0QsVUFBTSxFQUFDLGtCQUFHO0FBQ04sZUFDSTtBQUFDLGtCQUFNO2NBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBRSxJQUFJLEFBQUM7WUFDcEQ7QUFBQyw2QkFBYTtrQkFBQyxNQUFNLEVBQUUsR0FBRyxBQUFDO2dCQUN2Qjs7OztpQkFBd0I7YUFDWjtTQUNYLENBQ1g7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxHQUFHLENBQUMsS0FBSyxDQUNMO0FBQUMsU0FBSzs7SUFDRixvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsSUFBSSxBQUFDLEdBQUc7Q0FDL0IsQ0FDWCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCB7Um91dGV9ID0gUmVhY3RSb3V0ZXI7XHJcbmxldCB7UmFpc2VkQnV0dG9uLCBTY3JlZW59ID0gVUk7XHJcblxyXG5sZXQgV3JhcHBlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodHRlYWwnLCBoZWlnaHQ6ICcxMDAlJ319Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcclxuICAgIH1cclxufSk7XHJcblxyXG5sZXQgQ2VudGVyQ29udGVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgbGV0IHt2ZXJ0aWNhbCA9ICdjZW50ZXInLCBob3Jpem9udGFsID0gJ2NlbnRlcicsIHdpZHRoID0gJzEwMCUnLCBoZWlnaHQgPSAnMTAwJSd9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKHZlcnRpY2FsID09PSAnY2VudGVyJykge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbCA9ICdtaWRkbGUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoLCBoZWlnaHQsIGRpc3BsYXk6ICd0YWJsZSd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAndGFibGUtY2VsbCcsIHRleHRBbGlnbjogaG9yaXpvbnRhbCwgdmVydGljYWxBbGlnbjogdmVydGljYWx9fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB7YWN0aXZlOiB0cnVlfTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVTZXR0aW5nIChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmluZzonLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9KTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHNhdmUgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNjcmVlbiB0aXRsZT1cIlRlc3RpbmdcIiBzdWJ0ZXh0PVwiV09BSFwiIHNjcm9sbGFibGU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPENlbnRlckNvbnRlbnQgaGVpZ2h0PXsxMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGVzdCBjb250ZW50PzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DZW50ZXJDb250ZW50PlxyXG4gICAgICAgICAgICA8L1NjcmVlbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbkFwcC5zdGFydChcclxuICAgIDxSb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01haW59IC8+XHJcbiAgICA8L1JvdXRlPlxyXG4pO1xyXG4iXX0=

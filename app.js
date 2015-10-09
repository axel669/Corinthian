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

var horizontalMap = {
    left: null,
    center: '0 auto',
    right: '0 0 0 auto'
};
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
        // horizontal = horizontalMap[horizontal];

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
), { webApp: true });

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FjLFdBQVc7SUFBcEIsS0FBSyxnQkFBTCxLQUFLO1VBQ21CLEVBQUU7SUFBMUIsWUFBWSxPQUFaLFlBQVk7SUFBRSxNQUFNLE9BQU4sTUFBTTs7QUFFekIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzVCLFVBQU0sRUFBQyxrQkFBRztBQUNOLGVBQU87O2NBQUssS0FBSyxFQUFFLEVBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLEFBQUM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FBTyxDQUFDO0tBQ2xHO0NBQ0osQ0FBQyxDQUFDOztBQUVILElBQUksYUFBYSxHQUFHO0FBQ2hCLFFBQUksRUFBRSxJQUFJO0FBQ1YsVUFBTSxFQUFFLFFBQVE7QUFDaEIsU0FBSyxFQUFFLFlBQVk7Q0FDdEIsQ0FBQztBQUNGLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUNsQyxVQUFNLEVBQUMsa0JBQUc7cUJBQzhFLElBQUksQ0FBQyxLQUFLO3FDQUF6RixRQUFRO1lBQVIsUUFBUSxtQ0FBRyxRQUFRO3VDQUFFLFVBQVU7WUFBVixVQUFVLHFDQUFHLFFBQVE7a0NBQUUsS0FBSztZQUFMLEtBQUssZ0NBQUcsTUFBTTttQ0FBRSxNQUFNO1lBQU4sTUFBTSxpQ0FBRyxNQUFNOztBQUVoRixZQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUU7QUFDdkIsb0JBQVEsR0FBRyxRQUFRLENBQUM7U0FDdkI7OztBQUdELGVBQ0k7O2NBQUssS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFMLEtBQUssRUFBRSxNQUFNLEVBQU4sTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQUFBQztZQUMxQzs7a0JBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUMsQUFBQztnQkFDL0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2FBQ2xCO1NBQ0osQ0FDUjtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixtQkFBZSxFQUFDLDJCQUFHO0FBQ2YsZUFBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztLQUN6QjtBQUNELGlCQUFhLEVBQUMsdUJBQUMsSUFBSSxFQUFFOzs7QUFDakIsZUFBTyxVQUFBLEtBQUssRUFBSTs7O0FBQ1osbUJBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxrQkFBSyxRQUFRLDRCQUFHLElBQUksSUFBRyxLQUFLLGFBQUUsQ0FBQztTQUNsQyxDQUFDO0tBQ0w7QUFDRCxRQUFJLEVBQUMsZ0JBQUc7QUFDSixlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjtBQUNELFVBQU0sRUFBQyxrQkFBRztBQUNOLGVBQ0k7QUFBQyxrQkFBTTtjQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUUsSUFBSSxBQUFDO1lBQ3BEO0FBQUMsNkJBQWE7a0JBQUMsTUFBTSxFQUFFLEdBQUcsQUFBQztnQkFDdkI7Ozs7aUJBQXdCO2FBQ1o7U0FDWCxDQUNYO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsR0FBRyxDQUFDLEtBQUssQ0FDTDtBQUFDLFNBQUs7O0lBQ0Ysb0JBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksQUFBQyxHQUFHO0NBQy9CLEVBQ1IsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQ2pCLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IHtSb3V0ZX0gPSBSZWFjdFJvdXRlcjtcclxubGV0IHtSYWlzZWRCdXR0b24sIFNjcmVlbn0gPSBVSTtcclxuXHJcbmxldCBXcmFwcGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ2xpZ2h0dGVhbCcsIGhlaWdodDogJzEwMCUnfX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmxldCBob3Jpem9udGFsTWFwID0ge1xyXG4gICAgbGVmdDogbnVsbCxcclxuICAgIGNlbnRlcjogJzAgYXV0bycsXHJcbiAgICByaWdodDogJzAgMCAwIGF1dG8nXHJcbn07XHJcbmxldCBDZW50ZXJDb250ZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBsZXQge3ZlcnRpY2FsID0gJ2NlbnRlcicsIGhvcml6b250YWwgPSAnY2VudGVyJywgd2lkdGggPSAnMTAwJScsIGhlaWdodCA9ICcxMDAlJ30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAodmVydGljYWwgPT09ICdjZW50ZXInKSB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsID0gJ21pZGRsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGhvcml6b250YWwgPSBob3Jpem9udGFsTWFwW2hvcml6b250YWxdO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGgsIGhlaWdodCwgZGlzcGxheTogJ3RhYmxlJ319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICd0YWJsZS1jZWxsJywgdGV4dEFsaWduOiBob3Jpem9udGFsLCB2ZXJ0aWNhbEFsaWduOiB2ZXJ0aWNhbH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHthY3RpdmU6IHRydWV9O1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVNldHRpbmcgKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nOicsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgc2F2ZSAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2NyZWVuIHRpdGxlPVwiVGVzdGluZ1wiIHN1YnRleHQ9XCJXT0FIXCIgc2Nyb2xsYWJsZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8Q2VudGVyQ29udGVudCBoZWlnaHQ9ezEwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UZXN0IGNvbnRlbnQ/PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NlbnRlckNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQXBwLnN0YXJ0KFxyXG4gICAgPFJvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0gLz5cclxuICAgIDwvUm91dGU+LFxyXG4gICAge3dlYkFwcDogdHJ1ZX1cclxuKTtcclxuIl19

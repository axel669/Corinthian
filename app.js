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
            { title: 'Testing', subtext: 'WOAH', scrollable: false },
            React.createElement(
                UI.ScrollContainer,
                null,
                React.createElement(UI.Button, { onTap: function () {
                        return App.transitionTo("/test");
                    }, text: 'Test' }),
                factotum.range(40, function (n) {
                    return React.createElement(
                        'div',
                        null,
                        n
                    );
                })
            )
        );
    }
});

var Test = React.createClass({
    displayName: 'Test',

    render: function render() {
        return React.createElement(
            'div',
            null,
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FnQixXQUFXO0lBQXBCLEtBQUssZ0JBQUwsS0FBSzs7OztBQUdaLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM5QixVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUFPOztjQUFLLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxBQUFDO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQU8sQ0FBQztLQUNsRztDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsbUJBQWUsRUFBQywyQkFBRztBQUNmLGVBQU87QUFDSCxpQkFBSyxFQUFFLElBQUk7QUFDWCx5QkFBYSxFQUFFLENBQUM7QUFDaEIsc0JBQVUsRUFBRSxFQUFFO1NBQ2pCLENBQUM7S0FDTDtBQUNELGlCQUFhLEVBQUMsdUJBQUMsSUFBSSxFQUFFOzs7QUFDakIsZUFBTyxVQUFBLEtBQUssRUFBSTs7O0FBQ1osbUJBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxrQkFBSyxRQUFRLDRCQUFHLElBQUksSUFBRyxLQUFLLGFBQUUsQ0FBQztTQUNsQyxDQUFDO0tBQ0w7QUFDRCxRQUFJLEVBQUMsZ0JBQUc7QUFDSixlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjtBQUNELFVBQU0sRUFBQyxrQkFBRztBQUNOLFlBQU0sR0FBRyxHQUFHLHlGQUF5RixDQUFDOztBQUV0RyxlQUNJO0FBQUMsY0FBRSxDQUFDLE1BQU07Y0FBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFFLEtBQUssQUFBQztZQUN4RDtBQUFDLGtCQUFFLENBQUMsZUFBZTs7Z0JBQ2Ysb0JBQUMsRUFBRSxDQUFDLE1BQU0sSUFBQyxLQUFLLEVBQUU7K0JBQU0sR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7cUJBQUEsQUFBQyxFQUFDLElBQUksRUFBQyxNQUFNLEdBQUc7Z0JBQ2hFLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFVBQUEsQ0FBQzsyQkFBSTs7O3dCQUFNLENBQUM7cUJBQU87aUJBQUEsQ0FBQzthQUN2QjtTQUNiLENBQ2Q7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsVUFBTSxFQUFDLGtCQUFHO0FBQ04sZUFBTzs7OztTQUFlLENBQUM7S0FDMUI7Q0FDSixDQUFDLENBQUM7O0FBRUgsR0FBRyxDQUFDLEtBQUssQ0FDTDtBQUFDLFNBQUs7O0lBQ0Ysb0JBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksQUFBQyxHQUFHO0lBQ25DLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztDQUNuQyxDQUNYLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3Qge1JvdXRlfSA9IFJlYWN0Um91dGVyO1xyXG4vLyBsZXQge1JhaXNlZEJ1dHRvbiwgU2NyZWVufSA9IFVJO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodHRlYWwnLCBoZWlnaHQ6ICcxMDAlJ319Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjaGVjazogdHJ1ZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogMCxcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogNTBcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVNldHRpbmcgKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nOicsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgc2F2ZSAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS83MzZ4Lzg5L2FhLzM1Lzg5YWEzNWRiZjQyZTJhYmQ1YTliODA4MmViYzRhM2MzLmpwZ1wiO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxVSS5TY3JlZW4gdGl0bGU9XCJUZXN0aW5nXCIgc3VidGV4dD1cIldPQUhcIiBzY3JvbGxhYmxlPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICA8VUkuU2Nyb2xsQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVSS5CdXR0b24gb25UYXA9eygpID0+IEFwcC50cmFuc2l0aW9uVG8oXCIvdGVzdFwiKX0gdGV4dD1cIlRlc3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmYWN0b3R1bS5yYW5nZSg0MCwgbiA9PiA8ZGl2PntufTwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICA8L1VJLlNjcm9sbENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9VSS5TY3JlZW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBUZXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5Ob3BlPC9kaXY+O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbkFwcC5zdGFydChcclxuICAgIDxSb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01haW59IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvdGVzdFwiIGNvbXBvbmVudD17VGVzdH0gLz5cclxuICAgIDwvUm91dGU+XHJcbik7XHJcbiJdfQ==

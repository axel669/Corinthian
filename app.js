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
            { title: 'Testing', subtext: 'WOAH', width: 300 },
            React.createElement(
                UI.Card,
                null,
                React.createElement(
                    UI.Form,
                    { submitText: 'Login', onSubmit: console.log.bind(console) },
                    React.createElement(UI.Item, { name: 'username', inputType: 'text', label: 'Username' }),
                    React.createElement(UI.Item, { name: 'password', inputType: 'text', label: 'Password', type: 'password' }),
                    React.createElement(UI.Item, { name: 'age', inputType: 'range', min: 10, max: 50, label: 'Age', showValue: true, icon: 'ion-person' }),
                    React.createElement(UI.Item, { name: 'shia', inputType: 'switch', label: 'Shia LeBouff' }),
                    React.createElement(UI.Item, { name: 'trap', inputType: 'checkbox', label: 'Have Bear Trap', checkSide: 'right' }),
                    React.createElement(
                        UI.Item,
                        { name: 'loginType', inputType: 'combobox', label: 'Jui Jitsu Level' },
                        React.createElement(UI.Option, { label: 'Beginner' }),
                        React.createElement(UI.Option, { label: 'Awesome' })
                    ),
                    React.createElement(
                        UI.Item,
                        { name: 'raidoTest', inputType: 'radio', label: 'Radio Test' },
                        React.createElement(
                            UI.Option,
                            null,
                            'First'
                        ),
                        React.createElement(
                            UI.Option,
                            null,
                            'Second'
                        ),
                        React.createElement(
                            UI.Option,
                            { height: 150 },
                            React.createElement(UI.Image, { source: url, height: '100%' })
                        )
                    )
                )
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FnQixXQUFXO0lBQXBCLEtBQUssZ0JBQUwsS0FBSzs7OztBQUdaLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM5QixVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUFPOztjQUFLLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxBQUFDO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQU8sQ0FBQztLQUNsRztDQUNKLENBQUMsQ0FBQzs7OztBQUlILElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixtQkFBZSxFQUFDLDJCQUFHO0FBQ2YsZUFBTztBQUNILGlCQUFLLEVBQUUsSUFBSTtBQUNYLHlCQUFhLEVBQUUsQ0FBQztBQUNoQixzQkFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQztLQUNMO0FBQ0QsaUJBQWEsRUFBQyx1QkFBQyxJQUFJLEVBQUU7OztBQUNqQixlQUFPLFVBQUEsS0FBSyxFQUFJOzs7QUFDWixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLGtCQUFLLFFBQVEsNEJBQUcsSUFBSSxJQUFHLEtBQUssYUFBRSxDQUFDO1NBQ2xDLENBQUM7S0FDTDtBQUNELFFBQUksRUFBQyxnQkFBRztBQUNKLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNCO0FBQ0QsVUFBTSxFQUFDLGtCQUFHO0FBQ04sWUFBTSxHQUFHLEdBQUcseUZBQXlGLENBQUM7O0FBRXRHLGVBQ0k7QUFBQyxjQUFFLENBQUMsTUFBTTtjQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsR0FBRyxBQUFDO1lBQ2pEO0FBQUMsa0JBQUUsQ0FBQyxJQUFJOztnQkFDSjtBQUFDLHNCQUFFLENBQUMsSUFBSTtzQkFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBSSxPQUFPLENBQUMsR0FBRyxNQUFYLE9BQU8sQ0FBSztvQkFDaEQsb0JBQUMsRUFBRSxDQUFDLElBQUksSUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLFVBQVUsR0FBRztvQkFDN0Qsb0JBQUMsRUFBRSxDQUFDLElBQUksSUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsVUFBVSxHQUFHO29CQUM3RSxvQkFBQyxFQUFFLENBQUMsSUFBSSxJQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUUsRUFBRSxBQUFDLEVBQUMsR0FBRyxFQUFFLEVBQUUsQUFBQyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFFLElBQUksQUFBQyxFQUFDLElBQUksRUFBQyxZQUFZLEdBQUc7b0JBQ3pHLG9CQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxjQUFjLEdBQUc7b0JBQy9ELG9CQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsT0FBTyxHQUFHO29CQUNyRjtBQUFDLDBCQUFFLENBQUMsSUFBSTswQkFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLGlCQUFpQjt3QkFDbEUsb0JBQUMsRUFBRSxDQUFDLE1BQU0sSUFBQyxLQUFLLEVBQUMsVUFBVSxHQUFHO3dCQUM5QixvQkFBQyxFQUFFLENBQUMsTUFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEdBQUc7cUJBQ3ZCO29CQUNWO0FBQUMsMEJBQUUsQ0FBQyxJQUFJOzBCQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsWUFBWTt3QkFDMUQ7QUFBQyw4QkFBRSxDQUFDLE1BQU07Ozt5QkFBa0I7d0JBQzVCO0FBQUMsOEJBQUUsQ0FBQyxNQUFNOzs7eUJBQW1CO3dCQUM3QjtBQUFDLDhCQUFFLENBQUMsTUFBTTs4QkFBQyxNQUFNLEVBQUUsR0FBRyxBQUFDOzRCQUNuQixvQkFBQyxFQUFFLENBQUMsS0FBSyxJQUFDLE1BQU0sRUFBRSxHQUFHLEFBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxHQUFHO3lCQUMvQjtxQkFDTjtpQkFDSjthQUNKO1NBQ0YsQ0FDZDtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMzQixVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUNJO0FBQUMsY0FBRSxDQUFDLE1BQU07Y0FBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxNQUFNOztTQUVsQyxDQUNkO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsR0FBRyxDQUFDLEtBQUssQ0FDTDtBQUFDLFNBQUs7O0lBQ0Ysb0JBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksQUFBQyxHQUFHO0lBQ25DLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztDQUNuQyxDQUNYLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3Qge1JvdXRlfSA9IFJlYWN0Um91dGVyO1xyXG4vLyBsZXQge1JhaXNlZEJ1dHRvbiwgU2NyZWVufSA9IFVJO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodHRlYWwnLCBoZWlnaHQ6ICcxMDAlJ319Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBjb25zdCB1cmwgPSBcImh0dHA6Ly9hc3NldHMxLmlnbmltZ3MuY29tL3RodW1icy91c2VyVXBsb2FkZWQvMjAxNC8xMC8xMi9CYXlvbmV0dGEyXzEyODAtMTQxMzE0MjQ1MTEwMC5qcGdcIjtcclxuXHJcbmNvbnN0IE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNoZWNrOiB0cnVlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiA1MFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlU2V0dGluZyAobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZpbmc6JywgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBzYXZlICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzczNngvODkvYWEvMzUvODlhYTM1ZGJmNDJlMmFiZDVhOWI4MDgyZWJjNGEzYzMuanBnXCI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFVJLlNjcmVlbiB0aXRsZT1cIlRlc3RpbmdcIiBzdWJ0ZXh0PVwiV09BSFwiIHdpZHRoPXszMDB9PlxyXG4gICAgICAgICAgICAgICAgPFVJLkNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVJLkZvcm0gc3VibWl0VGV4dD1cIkxvZ2luXCIgb25TdWJtaXQ9ezo6Y29uc29sZS5sb2d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VUkuSXRlbSBuYW1lPVwidXNlcm5hbWVcIiBpbnB1dFR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJVc2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVSS5JdGVtIG5hbWU9XCJwYXNzd29yZFwiIGlucHV0VHlwZT1cInRleHRcIiBsYWJlbD1cIlBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVJLkl0ZW0gbmFtZT1cImFnZVwiIGlucHV0VHlwZT1cInJhbmdlXCIgbWluPXsxMH0gbWF4PXs1MH0gbGFiZWw9XCJBZ2VcIiBzaG93VmFsdWU9e3RydWV9IGljb249XCJpb24tcGVyc29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVJLkl0ZW0gbmFtZT1cInNoaWFcIiBpbnB1dFR5cGU9XCJzd2l0Y2hcIiBsYWJlbD1cIlNoaWEgTGVCb3VmZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVSS5JdGVtIG5hbWU9XCJ0cmFwXCIgaW5wdXRUeXBlPVwiY2hlY2tib3hcIiBsYWJlbD1cIkhhdmUgQmVhciBUcmFwXCIgY2hlY2tTaWRlPVwicmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VUkuSXRlbSBuYW1lPVwibG9naW5UeXBlXCIgaW5wdXRUeXBlPVwiY29tYm9ib3hcIiBsYWJlbD1cIkp1aSBKaXRzdSBMZXZlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVJLk9wdGlvbiBsYWJlbD1cIkJlZ2lubmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVSS5PcHRpb24gbGFiZWw9XCJBd2Vzb21lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9VSS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VUkuSXRlbSBuYW1lPVwicmFpZG9UZXN0XCIgaW5wdXRUeXBlPVwicmFkaW9cIiBsYWJlbD1cIlJhZGlvIFRlc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVSS5PcHRpb24+Rmlyc3Q8L1VJLk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVSS5PcHRpb24+U2Vjb25kPC9VSS5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VUkuT3B0aW9uIGhlaWdodD17MTUwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VUkuSW1hZ2Ugc291cmNlPXt1cmx9IGhlaWdodD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9VSS5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVUkuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L1VJLkZvcm0+XHJcbiAgICAgICAgICAgICAgICA8L1VJLkNhcmQ+XHJcbiAgICAgICAgICAgIDwvVUkuU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgVGVzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFVJLlNjcmVlbiB0aXRsZT1cIlRlc3QgU2NyZWVuXCIgYmFja1RleHQ9XCJCYWNrXCI+XHJcbiAgICAgICAgICAgICAgICBOb3BlXHJcbiAgICAgICAgICAgIDwvVUkuU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQXBwLnN0YXJ0KFxyXG4gICAgPFJvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi90ZXN0XCIgY29tcG9uZW50PXtUZXN0fSAvPlxyXG4gICAgPC9Sb3V0ZT5cclxuKTtcclxuIl19

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
        // console.log(this.state);
        return React.createElement(
            UI.Screen,
            { title: 'Testing', subtext: 'WOAH', scrollable: true },
            React.createElement(UI.Checkbox, { checked: this.state.check, label: 'Checkbox?', onChange: this.updateSetting('check') }),
            React.createElement(UI.Checkbox, { checked: this.state.check, label: 'Checkbox?', onChange: this.updateSetting('check'), checkSide: 'right' }),
            React.createElement(UI.Checkbox, { checked: this.state.check, label: 'Favourite', onChange: this.updateSetting('check'), onIcon: 'ion-android-star', offIcon: 'ion-android-star-outline' })
        );
    }
});

App.start(React.createElement(
    Route,
    null,
    React.createElement(Route, { path: '/', component: Main })
));
/*<UI.Button text="Plain Button" />
<UI.Button text="Raised Button" raised={true} />
<UI.IconButton icon="ion-home" />
<UI.IconButton icon="ion-home" raised={true} />
<UI.Card>
   Spaced content?
</UI.Card>
<UI.RangeInput min={0} max={100} value={this.state.inputValue} onChange={inputValue => this.setState({inputValue})} />
<UI.RadioGroup selectedIndex={this.state.selectedIndex} onChange={this.updateSetting('selectedIndex')}>
   <UI.Item value={100} height={150}>
       <UI.Image source="https://s-media-cache-ak0.pinimg.com/736x/89/aa/35/89aa35dbf42e2abd5a9b8082ebc4a3c3.jpg" height={150} />
   </UI.Item>
   <UI.Item value={200} height={40}>Some Text</UI.Item>
</UI.RadioGroup>*/

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jbW9yZ2FuMi9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FnQixXQUFXO0lBQXBCLEtBQUssZ0JBQUwsS0FBSzs7OztBQUdaLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM5QixVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUFPOztjQUFLLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxBQUFDO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQU8sQ0FBQztLQUNsRztDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsbUJBQWUsRUFBQywyQkFBRztBQUNmLGVBQU87QUFDSCxpQkFBSyxFQUFFLElBQUk7QUFDWCx5QkFBYSxFQUFFLENBQUM7QUFDaEIsc0JBQVUsRUFBRSxFQUFFO1NBQ2pCLENBQUM7S0FDTDtBQUNELGlCQUFhLEVBQUMsdUJBQUMsSUFBSSxFQUFFOzs7QUFDakIsZUFBTyxVQUFBLEtBQUssRUFBSTs7O0FBQ1osbUJBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxrQkFBSyxRQUFRLDRCQUFHLElBQUksSUFBRyxLQUFLLGFBQUUsQ0FBQztTQUNsQyxDQUFDO0tBQ0w7QUFDRCxRQUFJLEVBQUMsZ0JBQUc7QUFDSixlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjtBQUNELFVBQU0sRUFBQyxrQkFBRzs7QUFFTixlQUNJO0FBQUMsY0FBRSxDQUFDLE1BQU07Y0FBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFFLElBQUksQUFBQztZQWV2RCxvQkFBQyxFQUFFLENBQUMsUUFBUSxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQUFBQyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEFBQUMsR0FBRztZQUNuRyxvQkFBQyxFQUFFLENBQUMsUUFBUSxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQUFBQyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEFBQUMsRUFBQyxTQUFTLEVBQUMsT0FBTyxHQUFHO1lBQ3JILG9CQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxBQUFDLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQUFBQyxFQUFDLE1BQU0sRUFBQyxrQkFBa0IsRUFBQyxPQUFPLEVBQUMsMEJBQTBCLEdBQUc7U0FDeEosQ0FDZDtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILEdBQUcsQ0FBQyxLQUFLLENBQ0w7QUFBQyxTQUFLOztJQUNGLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztDQUMvQixDQUNYLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3Qge1JvdXRlfSA9IFJlYWN0Um91dGVyO1xyXG4vLyBsZXQge1JhaXNlZEJ1dHRvbiwgU2NyZWVufSA9IFVJO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodHRlYWwnLCBoZWlnaHQ6ICcxMDAlJ319Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjaGVjazogdHJ1ZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogMCxcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogNTBcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVNldHRpbmcgKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nOicsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgc2F2ZSAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VUkuU2NyZWVuIHRpdGxlPVwiVGVzdGluZ1wiIHN1YnRleHQ9XCJXT0FIXCIgc2Nyb2xsYWJsZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICB7Lyo8VUkuQnV0dG9uIHRleHQ9XCJQbGFpbiBCdXR0b25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPFVJLkJ1dHRvbiB0ZXh0PVwiUmFpc2VkIEJ1dHRvblwiIHJhaXNlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxVSS5JY29uQnV0dG9uIGljb249XCJpb24taG9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VUkuSWNvbkJ1dHRvbiBpY29uPVwiaW9uLWhvbWVcIiByYWlzZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8VUkuQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICBTcGFjZWQgY29udGVudD9cclxuICAgICAgICAgICAgICAgIDwvVUkuQ2FyZD5cclxuICAgICAgICAgICAgICAgIDxVSS5SYW5nZUlucHV0IG1pbj17MH0gbWF4PXsxMDB9IHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9IG9uQ2hhbmdlPXtpbnB1dFZhbHVlID0+IHRoaXMuc2V0U3RhdGUoe2lucHV0VmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgICAgIDxVSS5SYWRpb0dyb3VwIHNlbGVjdGVkSW5kZXg9e3RoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleH0gb25DaGFuZ2U9e3RoaXMudXBkYXRlU2V0dGluZygnc2VsZWN0ZWRJbmRleCcpfT5cclxuICAgICAgICAgICAgICAgICAgICA8VUkuSXRlbSB2YWx1ZT17MTAwfSBoZWlnaHQ9ezE1MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVSS5JbWFnZSBzb3VyY2U9XCJodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNzM2eC84OS9hYS8zNS84OWFhMzVkYmY0MmUyYWJkNWE5YjgwODJlYmM0YTNjMy5qcGdcIiBoZWlnaHQ9ezE1MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1VJLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVJLkl0ZW0gdmFsdWU9ezIwMH0gaGVpZ2h0PXs0MH0+U29tZSBUZXh0PC9VSS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9VSS5SYWRpb0dyb3VwPiovfVxyXG4gICAgICAgICAgICAgICAgPFVJLkNoZWNrYm94IGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2t9IGxhYmVsPVwiQ2hlY2tib3g/XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlU2V0dGluZygnY2hlY2snKX0gLz5cclxuICAgICAgICAgICAgICAgIDxVSS5DaGVja2JveCBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrfSBsYWJlbD1cIkNoZWNrYm94P1wiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVNldHRpbmcoJ2NoZWNrJyl9IGNoZWNrU2lkZT1cInJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxVSS5DaGVja2JveCBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrfSBsYWJlbD1cIkZhdm91cml0ZVwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVNldHRpbmcoJ2NoZWNrJyl9IG9uSWNvbj1cImlvbi1hbmRyb2lkLXN0YXJcIiBvZmZJY29uPVwiaW9uLWFuZHJvaWQtc3Rhci1vdXRsaW5lXCIgLz5cclxuICAgICAgICAgICAgPC9VSS5TY3JlZW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5BcHAuc3RhcnQoXHJcbiAgICA8Um91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtNYWlufSAvPlxyXG4gICAgPC9Sb3V0ZT5cclxuKTtcclxuIl19

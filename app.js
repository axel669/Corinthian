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
            React.createElement(UI.TextInput, { value: '123456789012345678901234567890123456789012345678901234567890', label: 'Email', icon: 'ion-home' })
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
</UI.RadioGroup>
<UI.Checkbox checked={this.state.check} label="Checkbox?" onChange={this.updateSetting('check')} />
<UI.Checkbox checked={this.state.check} label="Checkbox?" onChange={this.updateSetting('check')} checkSide="right" />
<UI.Checkbox checked={this.state.check} label="Favourite" onChange={this.updateSetting('check')} onIcon="ion-android-star" offIcon="ion-android-star-outline" />*/

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL0NvcmludGhpYW4vdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21CQ0FnQixXQUFXO0lBQXBCLEtBQUssZ0JBQUwsS0FBSzs7OztBQUdaLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM5QixVQUFNLEVBQUMsa0JBQUc7QUFDTixlQUFPOztjQUFLLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxBQUFDO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQU8sQ0FBQztLQUNsRztDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsbUJBQWUsRUFBQywyQkFBRztBQUNmLGVBQU87QUFDSCxpQkFBSyxFQUFFLElBQUk7QUFDWCx5QkFBYSxFQUFFLENBQUM7QUFDaEIsc0JBQVUsRUFBRSxFQUFFO1NBQ2pCLENBQUM7S0FDTDtBQUNELGlCQUFhLEVBQUMsdUJBQUMsSUFBSSxFQUFFOzs7QUFDakIsZUFBTyxVQUFBLEtBQUssRUFBSTs7O0FBQ1osbUJBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxrQkFBSyxRQUFRLDRCQUFHLElBQUksSUFBRyxLQUFLLGFBQUUsQ0FBQztTQUNsQyxDQUFDO0tBQ0w7QUFDRCxRQUFJLEVBQUMsZ0JBQUc7QUFDSixlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjtBQUNELFVBQU0sRUFBQyxrQkFBRzs7QUFFTixlQUNJO0FBQUMsY0FBRSxDQUFDLE1BQU07Y0FBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFFLElBQUksQUFBQztZQWtCdkQsb0JBQUMsRUFBRSxDQUFDLFNBQVMsSUFBQyxLQUFLLEVBQUMsOERBQThELEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsVUFBVSxHQUFHO1NBQzNHLENBQ2Q7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxHQUFHLENBQUMsS0FBSyxDQUNMO0FBQUMsU0FBSzs7SUFDRixvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsSUFBSSxBQUFDLEdBQUc7Q0FDL0IsQ0FDWCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IHtSb3V0ZX0gPSBSZWFjdFJvdXRlcjtcclxuLy8gbGV0IHtSYWlzZWRCdXR0b24sIFNjcmVlbn0gPSBVSTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnbGlnaHR0ZWFsJywgaGVpZ2h0OiAnMTAwJSd9fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj47XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY2hlY2s6IHRydWUsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IDUwXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVTZXR0aW5nIChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmluZzonLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9KTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHNhdmUgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFVJLlNjcmVlbiB0aXRsZT1cIlRlc3RpbmdcIiBzdWJ0ZXh0PVwiV09BSFwiIHNjcm9sbGFibGU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgey8qPFVJLkJ1dHRvbiB0ZXh0PVwiUGxhaW4gQnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxVSS5CdXR0b24gdGV4dD1cIlJhaXNlZCBCdXR0b25cIiByYWlzZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8VUkuSWNvbkJ1dHRvbiBpY29uPVwiaW9uLWhvbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFVJLkljb25CdXR0b24gaWNvbj1cImlvbi1ob21lXCIgcmFpc2VkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFVJLkNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgU3BhY2VkIGNvbnRlbnQ/XHJcbiAgICAgICAgICAgICAgICA8L1VJLkNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8VUkuUmFuZ2VJbnB1dCBtaW49ezB9IG1heD17MTAwfSB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBvbkNoYW5nZT17aW5wdXRWYWx1ZSA9PiB0aGlzLnNldFN0YXRlKHtpbnB1dFZhbHVlfSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VUkuUmFkaW9Hcm91cCBzZWxlY3RlZEluZGV4PXt0aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXh9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVNldHRpbmcoJ3NlbGVjdGVkSW5kZXgnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVJLkl0ZW0gdmFsdWU9ezEwMH0gaGVpZ2h0PXsxNTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VUkuSW1hZ2Ugc291cmNlPVwiaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzczNngvODkvYWEvMzUvODlhYTM1ZGJmNDJlMmFiZDVhOWI4MDgyZWJjNGEzYzMuanBnXCIgaGVpZ2h0PXsxNTB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9VSS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVSS5JdGVtIHZhbHVlPXsyMDB9IGhlaWdodD17NDB9PlNvbWUgVGV4dDwvVUkuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvVUkuUmFkaW9Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxVSS5DaGVja2JveCBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrfSBsYWJlbD1cIkNoZWNrYm94P1wiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVNldHRpbmcoJ2NoZWNrJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VUkuQ2hlY2tib3ggY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja30gbGFiZWw9XCJDaGVja2JveD9cIiBvbkNoYW5nZT17dGhpcy51cGRhdGVTZXR0aW5nKCdjaGVjaycpfSBjaGVja1NpZGU9XCJyaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VUkuQ2hlY2tib3ggY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja30gbGFiZWw9XCJGYXZvdXJpdGVcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVTZXR0aW5nKCdjaGVjaycpfSBvbkljb249XCJpb24tYW5kcm9pZC1zdGFyXCIgb2ZmSWNvbj1cImlvbi1hbmRyb2lkLXN0YXItb3V0bGluZVwiIC8+Ki99XHJcbiAgICAgICAgICAgICAgICA8VUkuVGV4dElucHV0IHZhbHVlPVwiMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwXCIgbGFiZWw9XCJFbWFpbFwiIGljb249XCJpb24taG9tZVwiIC8+XHJcbiAgICAgICAgICAgIDwvVUkuU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQXBwLnN0YXJ0KFxyXG4gICAgPFJvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0gLz5cclxuICAgIDwvUm91dGU+XHJcbik7XHJcbiJdfQ==

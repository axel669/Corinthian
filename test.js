const {Route} = ReactRouter;
// let {RaisedButton, Screen} = UI;

const Wrapper = React.createClass({
    render () {
        return <div style={{backgroundColor: 'lightteal', height: '100%'}}>{this.props.children}</div>;
    }
});

const Main = React.createClass({
    getInitialState () {
        return {
            check: true,
            selectedIndex: 0
        };
    },
    updateSetting (name) {
        return value => {
            console.log('saving:', name, value);
            this.setState({[name]: value});
        };
    },
    save () {
        console.log(this.state);
    },
    render () {
        return (
            <UI.Screen title="Testing" subtext="WOAH" scrollable={true}>
                <UI.RadioGroup selectedIndex={0} onChange={::console.log}>
                    <UI.Item value={100}>
                        <UI.Image source="https://s-media-cache-ak0.pinimg.com/736x/89/aa/35/89aa35dbf42e2abd5a9b8082ebc4a3c3.jpg" height={200} />
                    </UI.Item>
                    <UI.Item value={200}>Test</UI.Item>
                </UI.RadioGroup>
                <UI.Button text="test" />
                <UI.Button text="Raised?" raised={true} height={60} />
            </UI.Screen>
        );
    }
});

App.start(
    <Route>
        <Route path="/" component={Main} />
    </Route>
);

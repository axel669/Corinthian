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
            selectedIndex: 0,
            inputValue: 50
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
        const url = "https://s-media-cache-ak0.pinimg.com/736x/89/aa/35/89aa35dbf42e2abd5a9b8082ebc4a3c3.jpg";
        // console.log(this.state);
        return (
            <UI.Screen title="Testing" subtext="WOAH" scrollable={false}>
                <UI.ScrollContainer>
                    <UI.Button onTap={() => App.transitionTo("/test")} text="Test" />
                    {factotum.range(40, n => <div>{n}</div>)}
                </UI.ScrollContainer>
            </UI.Screen>
        );
    }
});

const Test = React.createClass({
    render () {
        return <div>Nope</div>;
    }
});

App.start(
    <Route>
        <Route path="/" component={Main} />
        <Route path="/test" component={Test} />
    </Route>
);

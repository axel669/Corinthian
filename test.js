const {Route} = ReactRouter;
// let {RaisedButton, Screen} = UI;

const Wrapper = React.createClass({
    render () {
        return <div style={{backgroundColor: 'lightteal', height: '100%'}}>{this.props.children}</div>;
    }
});

// const url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";

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
            <UI.Screen title="Testing" subtext="WOAH" width={300}>
                <UI.Card>
                    <UI.Form submitText="Login" onSubmit={::console.log}>
                        <UI.Item name="username" inputType="text" label="Username" />
                        <UI.Item name="password" inputType="text" label="Password" type="password" />
                        <UI.Item name="age" inputType="range" min={10} max={50} label="Age" showValue={true} icon="ion-person" />
                        <UI.Item name="shia" inputType="switch" label="Shia LeBouff" />
                        <UI.Item name="trap" inputType="checkbox" label="Have Bear Trap" checkSide="right" />
                        <UI.Item name="loginType" inputType="combobox" label="Jui Jitsu Level">
                            <UI.Option label="Beginner" />
                            <UI.Option label="Awesome" />
                        </UI.Item>
                        <UI.Item name="raidoTest" inputType="radio" label="Radio Test">
                            <UI.Option>First</UI.Option>
                            <UI.Option>Second</UI.Option>
                            <UI.Option height={150}>
                                <UI.Image source={url} height="100%" />
                            </UI.Option>
                        </UI.Item>
                    </UI.Form>
                </UI.Card>
            </UI.Screen>
        );
    }
});

const Test = React.createClass({
    render () {
        return (
            <UI.Screen title="Test Screen" backText="Back">
                Nope
            </UI.Screen>
        );
    }
});

App.start(
    <Route>
        <Route path="/" component={Main} />
        <Route path="/test" component={Test} />
    </Route>
);

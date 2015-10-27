let {Route} = ReactRouter;
let {RaisedButton, Screen} = UI;

let Wrapper = React.createClass({
    render () {
        return <div style={{backgroundColor: 'lightteal', height: '100%'}}>{this.props.children}</div>;
    }
});

const Main = React.createClass({
    getInitialState () {
        return {active: true};
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
            <Screen title="Testing" subtext="WOAH" scrollable={true}>
                <UI.CenterContent height={100} width="70%" style={{backgroundColor: 'cyan'}}>
                    <div>Test content?</div>
                </UI.CenterContent>
            </Screen>
        );
    }
});

App.start(
    <Route>
        <Route path="/" component={Main} />
    </Route>
);

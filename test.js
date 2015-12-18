let {Route} = ReactRouter;
let {RaisedButton, Screen} = UI;

let Wrapper = React.createClass({
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
            <Screen title="Testing" subtext="WOAH" scrollable={true}>
                {factotum.range(40, n => <div>{n}</div>)}
            </Screen>
        );
    }
});

App.start(
    <Route>
        <Route path="/" component={Main} />
    </Route>
);

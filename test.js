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
            <Screen title="Flashcards">
                <RaisedButton text="Create Flashcards" />
                <RaisedButton text="Use Flashcards" />
                <UI.Checkbox checked={this.state.active} onChange={this.updateSetting('active')} text="Woah" />
                <UI.Button text="Save" onTap={this.save} />
            </Screen>
        );
    }
});

App.start(
    <Route>
        <Route path="/" component={Main} />
    </Route>
);

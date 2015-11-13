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
                <UI.CenterContent height={100} width={500}>
                    <div>Test content?</div>
                    <UI.Button text="Working?" onTap={::console.log} />
                    <UI.Card>
                        Testing
                    </UI.Card>
                    <UI.Checkbox text="Checkbox" checked={this.state.check} onChange={check => this.setState({check})} />

                    <UI.Combobox selectedIndex={this.state.selectedIndex} onChange={selectedIndex => this.setState({selectedIndex})}>
                        <UI.Option text="Test" />
                        <UI.Option text="Testing" />
                    </UI.Combobox>
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

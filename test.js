let {Route} = ReactRouter;
let {RaisedButton, Screen} = UI;

let Wrapper = React.createClass({
    render () {
        return <div style={{backgroundColor: 'lightteal', height: '100%'}}>{this.props.children}</div>;
    }
});

let CenterContent = React.createClass({
    render () {
        let {vertical = 'center', horizontal = 'center', width = '100%', height = '100%'} = this.props;

        if (vertical === 'center') {
            vertical = 'middle';
        }

        return (
            <div style={{width, height, display: 'table'}}>
                <div style={{display: 'table-cell', textAlign: horizontal, verticalAlign: vertical}}>
                    {this.props.children}
                </div>
            </div>
        );
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
                <CenterContent height={100}>
                    <div>Test content?</div>
                </CenterContent>
            </Screen>
        );
    }
});

App.start(
    <Route>
        <Route path="/" component={Main} />
    </Route>,
    {webApp: true}
);

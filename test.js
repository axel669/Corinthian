let {Route} = ReactRouter;
let {RaisedButton, Screen} = UI;

let Wrapper = React.createClass({
    render () {
        return <div style={{backgroundColor: 'lightteal', height: '100%'}}>{this.props.children}</div>;
    }
});

const Main = React.createClass({
    render () {
        return (
            <Screen title="Flashcards">
                <RaisedButton text="Create Flashcards" />
                <RaisedButton text="Use Flashcards" />
                <UI.Checkbox checked={true} text="Woah" />
            </Screen>
        );
    }
});

App.start(
    <Route>
        <Route path="/" component={Main} />
    </Route>
);

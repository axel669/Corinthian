let {Route} = ReactRouter;

let Wrapper = React.createClass({
    render () {
        return <div style={{backgroundColor: 'lightteal', height: '100%'}}>{this.props.children}</div>;
    }
});

let Demo = React.createClass({
    getInitialState () {
        return {time: Date.now()};
    },
    render () {
        console.log(this);
        return <UI.Screen scrollable={true}>
            <UI.Card>
                Blah: {this.state.time}
            </UI.Card>
        </UI.Screen>
    }
});

App.start(
    <Route component={Wrapper}>
        <Route path="/" component={Demo} />
        <Route path="/test" component={Demo} />
    </Route>
);

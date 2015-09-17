let {Route} = ReactRouter;

class Wrapper {
    render () {
        return <div style={{backgroundColor: 'lightteal', height: '100%'}}>{this.props.children}</div>;
    }
}

class Demo {
    render () {
        console.log(this);
        return <UI.Screen scrollable={true}>
            <UI.Card>
                Blah
            </UI.Card>
        </UI.Screen>
    }
}

App.start(
    <Route component={Wrapper}>
        <Route path="/" component={Demo} />
        <Route path="/test" component={Demo} />
    </Route>
);

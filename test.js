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
    async testAlert () {
        console.log(await Dialog.prompt(<div>{factotum.range(4, n => <div>{n}</div>)}</div>));
    },
    render () {
        const url = "https://s-media-cache-ak0.pinimg.com/736x/89/aa/35/89aa35dbf42e2abd5a9b8082ebc4a3c3.jpg";
        // console.log(this.state);
        return (
            <UI.Screen title="Testing" subtext="WOAH" width={700}>
                <UI.Button block={true} text="Dialog" onTap={this.testAlert} raised={true} />

                <UI.RadioGroup selectedIndex={0}>
                    <UI.Option>First</UI.Option>
                    <UI.Option>Second</UI.Option>
                    <UI.Option>Third</UI.Option>
                </UI.RadioGroup>

                <UI.RadioGroup selectedIndex={this.state.selectedIndex} onChange={selectedIndex => this.setState({selectedIndex})} layout="grid" height={40} rowCount={1} colCount={4} label="Horizontal Test">
                    <UI.Option>First</UI.Option>
                    <UI.Option>Second</UI.Option>
                    <UI.Option>Third</UI.Option>
                </UI.RadioGroup>
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

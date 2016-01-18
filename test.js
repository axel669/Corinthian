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
            selectedIndex: -1,
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
        console.log(await Dialog.prompt("Input?", {placeholder: 'woah'}));
    },
    render () {
        const {selectedIndex} = this.state;
        const url = "https://s-media-cache-ak0.pinimg.com/736x/89/aa/35/89aa35dbf42e2abd5a9b8082ebc4a3c3.jpg";
        // console.log(this.state);
        return (
            <UI.Screen title="Testing" subtext="WOAH" width={700}>
                <UI.Button block raised text="Dialog" onTap={this.testAlert} />

                <UI.RadioGroup selectedIndex={0}>
                    <UI.Option>First</UI.Option>
                    <UI.Option>Second</UI.Option>
                    <UI.Option>Third</UI.Option>
                </UI.RadioGroup>

                <UI.RadioGroup selectedIndex={selectedIndex} onChange={this.updateSetting('selectedIndex')} layout="grid" height={40} rowCount={1} colCount={3} label="Horizontal Test">
                    <UI.Option>First</UI.Option>
                    <UI.Option>Second</UI.Option>
                    <UI.Option>Third</UI.Option>
                </UI.RadioGroup>

                <UI.Card>
                    <UI.Form onSubmit={::console.log}>
                        <UI.Item inputType="text" name="blah" />
                        <UI.Item inputType="text" name="woah" />
                        <UI.Item name="radio" inputType="radio" layout="grid" height={40} rowCount={1} colCount={3} label="Horizontal Test" defaultIndex={-1}>
                            <UI.Option value={100}>First</UI.Option>
                            <UI.Option value={110}>Second</UI.Option>
                            <UI.Option value={120}>Third</UI.Option>
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

// (async () => {
//     let rootDir = await fs.appFileSystem;
//     console.log(rootDir);
//     rootDir.getFile("app-base/", null, ::console.log, ::console.error);
//     rootDir.getDirectory("app-base/", null, ::console.log, ::console.error);
// })();

App.start(
    <Route>
        <Route path="/" component={Main} />
        <Route path="/test" component={Test} />
    </Route>
);

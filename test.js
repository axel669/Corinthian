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
                <UI.Image source={"file:///data/data/com.centerforautism.libtest/files/files/test.jpg"} height={400} />
                <UI.Image source={"content://media/external/images/media/130"} height={400} />
                {/*<UI.Image source="http://www.eonline.com/eol_images/Entire_Site/2015030/rs_560x415-150130085841-1024.Charlotte2-jmd-013015_copy.jpg" height={400} />*/}
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

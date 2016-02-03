const {Route} = ReactRouter;

// const Wrapper = React.createClass({
//     render () {
//         return <div style={{backgroundColor: 'lightteal', height: '100%'}}>{this.props.children}</div>;
//     }
// });

// // const url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";

Theme.define({
    app: {
        backgroundColor: 'white',
        textColor: '#747474'
    },
    button: {
        color: '#2FB1DF',
        textColor: 'white',
        hoverColor: 'rgba(0, 0, 0, 0.11)',
        activeColor: 'rgba(0, 0, 0, 0.2)',
        raised: {
            color: '#2FB1DF',
            textColor: 'white'
        }
    },
    title: {
        backgroundColor: '#2FB1DF',
        textColor: 'white'
    },
    rangeInput: {
        track: {
            color: "#2FB1DF"
        }
    },
    switch: {
        track: {
            color: '#2FB1DF'
        }
    },
    userInput: {
        activeColor: '#2FB1DF',
        textColor: 'black'
    }
});

App.init();
// App.start(
//     <Route>
//         <Route path="/" component={Main} />
//         <Route path="/test" component={Test} />
//     </Route>
// );

const Main = React.createClass({
    getInitialState() {
        return {
            progress: 0,
            fileProgress: null
        };
    },
    async componentDidMount() {
        const zip = await Zip.download(
            "https://axel669.ngrok.io/app-base.zip",
            evt => this.setState({progress: evt.loaded / evt.total})
        );

        await fs.dirCreate("app::/app_files_temp/");
        await zip.extractTo(
            "app::/app_files_temp/",
            evt => this.setState({fileProgress: [evt.extracted, evt.total]})
        );
        console.log(await fs.dirTree("app::/"));
        if (await fs.dirExists("app::/app_files/") === true) {
            await fs.dirRemove("app::/app_files/", true);
        }
        await fs.dirMove("app::/app_files_temp/", "app::/app_files/");
        console.log(await fs.dirTree("app::/"));
        // console.log(zip);
    },
    render() {
        const {progress, fileProgress} = this.state;
        let progressText;

        if (fileProgress === null) {
            progressText = "Downloading Additional Files";
        } else {
            progressText = `Extracting (${fileProgress[0]}/${fileProgress[1]})`;
        }

        return (
            <UI.Screen>
                <UI.CenterContent width="100%" height="70%">
                    <UI.Card style={{width: '80%', display: 'inline-block'}}>
                        {progressText}
                        <UI.ProgressBar progress={progress} />
                    </UI.Card>
                </UI.CenterContent>
            </UI.Screen>
        );
    }
});

// App.init();

ReactDOM.render(
    <Main />,
    document.querySelector("div")
);

const {Route} = ReactRouter;

// const url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";

const baseURL = "https://axel669.ngrok.io/";
const appDirectory = "app::/app_files/";
const tempAppDirectory = "app::/app_files_temp/";

const states = {
    versionCheck: React.createClass({
        componentDidMount() {
            schedule(
                3000,
                () => this.props.transition("update")
            );
        },
        render() {
            return <div>Checking Version...</div>;
        }
    }),
    update: React.createClass({
        getInitialState() {
            return {
                progress: 0,
                fileProgress: null
            };
        },
        async componentDidMount() {
            const {transition} = this.props;
            const zip = await Zip.download(
                "https://axel669.ngrok.io/app-base.zip",
                evt => this.setState({progress: evt.loaded / evt.total})
            );

            await fs.dirCreate("app::/app_files_temp/");
            await zip.extractTo(
                "app::/app_files_temp/",
                evt => this.setState({fileProgress: [evt.extracted, evt.total]})
            );
            if (await fs.dirExists("app::/app_files/") === true) {
                await fs.dirRemove("app::/app_files/", true);
            }
            await fs.dirMove("app::/app_files_temp/", "app::/app_files/");
            transition("start");
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
                <div>
                    {progressText}
                    <UI.ProgressBar progress={progress} />
                </div>
            );
        }
    }),
    start: React.createClass({
        async componentDidMount() {
            const appCode = await fs.fileRead("app::/app_files/app.js");
            (new Function(appCode))();
        },
        render() {
            return <div>Starting Application</div>
        }
    })
};

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

const Main = React.createClass({
    getInitialState() {
        return {
            step: "versionCheck"
        };
    },
    transition(step) {
        this.setState({step});
    },
    render() {
        const {step} = this.state;
        const Element = states[step];

        return (
            <UI.Screen>
                <UI.CenterContent width="100%" height="70%">
                    <UI.Card style={{width: '80%', display: 'inline-block'}}>
                        <Element transition={this.transition} />
                    </UI.Card>
                </UI.CenterContent>
            </UI.Screen>
        );
    }
});

// ReactDOM.render(
//     <Main />,
//     document.querySelector("div")
// );

const DialogTest = React.createClass({
    render() {
        return (
            <UI.Screen title="Dialog Test">
                <UI.Button raised block text="Alert" onTap={() => Dialog.alert("Test")} />
            </UI.Screen>
        );
    }
});

App.start(<Route path="/" component={DialogTest} />);

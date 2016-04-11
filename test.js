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

// App.init();

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

// const Calendar = ({selectedDate, month, year}) => {
//     return (
//     );
// };

const DialogTest = React.createClass({
    dialogTest(type) {
        return async () => {
            console.log(
                await (() => {
                    switch (type) {
                        case 'alert': return Dialog.alert(factotum.range(100, n => <div>{n}</div>));
                        case 'confirm': return Dialog.confirm("Confirm Test?");
                        case 'prompt': return Dialog.prompt("Enter your hogwarts house");
                    }
                })()
            );
        }
    },
    spinnerTest() {
        const spinner = Dialog.spinner("Loading");
        schedule(2000, () => spinner.dismiss());
    },
    async customTest() {
        const value = await Dialog.__custom(
            close => {
                return {
                    content: "This is a test",
                    buttons: [
                        {text: "Test", width: '50%'},
                        {text: "Nope", value: 100, width: '50%'}
                    ],
                    title: "Wat"
                };
            }
        );
        console.log(value);
    },
    render() {
        // console.log(this.context.router);
        return (
            <UI.Screen title="Dialog Test">
                <UI.Button text="Fuck" onTap={() => App.navigation.push("/test")} />
                <UI.Form submitText="Test" itemContainer={UI.Card} onSubmit={({wat}) => cblog(wat)}>
                    <UI.Item inputType="multiline" name="wat" placeholder="Testing" label="Wat" height="4l" />
                </UI.Form>
                {/*<UI.Button raised block text="Alert" onTap={this.dialogTest('alert')} />
                <UI.Button raised block text="Confirm" onTap={this.dialogTest('confirm')} />
                <UI.Button raised block text="Prompt" onTap={this.dialogTest('prompt')} />
                <UI.Button raised block text="Loading" onTap={this.spinnerTest} />
                <UI.Button raised block text="Custom" onTap={this.customTest} />

                <hr />
                {factotum.range(100, n => <div>{n}</div>)}
                <UI.Button onTap={() => App.navigation.push("/test")} text="Wat" />
                <UI.Divider.Horizontal height={200}>
                    <UI.Item size={10}>
                        <div style={{width: '100%', height: '100%', backgroundColor: 'cyan'}} />
                    </UI.Item>

                    <UI.Item size={40}>
                        <div style={{width: '100%', height: '100%', backgroundColor: 'green'}} />
                    </UI.Item>
                </UI.Divider.Horizontal>
                <UI.PinBoard height={200}>
                    <UI.Pin detail={{width: 50, height: '100%'}}>
                        <div style={{width: '100%', height: '100%', backgroundColor: 'cyan'}} />
                    </UI.Pin>

                    <UI.Pin detail={{left: 50, right: 50, height: '80%'}}>
                        <div style={{width: '100%', height: '100%', backgroundColor: 'green'}} />
                    </UI.Pin>
                </UI.PinBoard>*/}
            </UI.Screen>
        );
    }
});

const Test = ({children}) => {
    // console.log(History.state);
    return (
        <UI.Screen title="Test Screen">
            Hey there
            <div>{Date.now()}</div>
            <UI.Button text="test" onTap={() => App.navigation.push("/test")} />
            {children}
        </UI.Screen>
    );
};
const Wat = ({children}) => <div>Hey What</div>;

// const test = (...args) => {
//     console.log(args);
// };
let called = false;
const waitComponent = async (location, cb) => {
    console.log('load c');
    if (called === false) {
        await chrono.wait(1000);
    }
    called = true;
    cb(null, Test);
};
const waitIndex = async (location, cb) => {
    console.log('load r', Date.now());
    await chrono.wait(1000);
    cb(null, [
        <Route path="/" component={Test} />,
        <Route path="/test" component={Wat} />
    ]);
};

App.start(
    <Route>
        <Route path="/blah" component={DialogTest} />
        <Route getChildRoutes={waitIndex} />
    </Route>
);

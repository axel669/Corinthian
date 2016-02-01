const {Route} = ReactRouter;

const Wrapper = React.createClass({
    render () {
        return <div style={{backgroundColor: 'lightteal', height: '100%'}}>{this.props.children}</div>;
    }
});

// const url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";

const bips = {
    0: {
        id: 0,
        name: "Rate Thing",
        type: "rate",
        occurances: []
    },
    1: {
        id: 1,
        name: "Frequency Thing",
        type: "frequency",
        occurances: []
    },
    2: {
        id: 2,
        name: "Duration Thing",
        type: "duration",
        occurances: []
    },
    3: {
        id: 3,
        name: "Oppurtunity Thing",
        type: "oppurtunity",
        occurances: []
    }
};

const padTime = n => {
    n = n.toString();
    if (n.length === 1) {
        return `0${n}`;
    }
    return n;
};
const formatDif = duration => {
    const seconds = Math.floor(duration / 1000) % 60;
    const minutes = Math.floor(duration / 60000) % 60;
    const hours = Math.floor(duration / 360000);

    return `${hours}:${padTime(minutes)}:${padTime(seconds)}`;
};

const BIP = {
    Rate: React.createClass({
        getInitialState() {
            return {
                count: 0
            };
        },
        happened() {
            this.setState({
                count: bips[this.props.id].occurances.push(new Date())
            });
        },
        render() {
            const {count} = this.state;
            const info = bips[this.props.id];

            return (
                <UI.Card>
                    {info.name}
                    <div>Measurement: Rate</div>
                    <UI.Button raised block text={count} onTap={this.happened} />
                </UI.Card>
            );
        }
    }),
    Frequency: React.createClass({
        getInitialState() {
            return {
                count: 0
            };
        },
        happened() {
            this.setState({
                count: bips[this.props.id].occurances.push(new Date())
            });
        },
        render() {
            const {count} = this.state;
            const info = bips[this.props.id];

            return (
                <UI.Card>
                    {info.name}
                    <div>Measurement: Frequency</div>
                    <UI.Button raised block text={count} onTap={this.happened} />
                </UI.Card>
            );
        }
    }),
    Duration: React.createClass({
        getInitialState() {
            return {
                start: null,
                now: null,
                timer: null
            };
        },
        toggle() {
            if (this.state.timer === null) {
                this.setState({
                    start: Date.now(),
                    now: Date.now(),
                    timer: setInterval(
                        () => {
                            this.setState({now: Date.now()});
                        },
                        500
                    )
                });
            } else {
                const {start, timer} = this.state;
                const now = Date.now();

                bips[this.props.id].occurances.push({
                    duration: now - start,
                    start
                });

                clearInterval(timer);
                this.setState(this.getInitialState());
            }
        },
        render() {
            const {start, now} = this.state;
            const info = bips[this.props.id];

            let statusText;
            let timeDisplay;
            let buttonColor;

            if (start === null) {
                statusText = "Start";
                timeDisplay = "0:00:00";
                buttonColor = null;
            } else {
                timeDisplay = formatDif(now - start);
                statusText = "End";
                buttonColor = 'red';
            }

            return (
                <UI.Card>
                    {info.name}
                    <div>Measurement: Duration</div>
                    <UI.Button raised block color={buttonColor} text={timeDisplay} onTap={this.toggle} />
                    <div style={{textAlign: 'center'}}>{statusText}</div>
                </UI.Card>
            );
        }
    }),
    Oppurtunity: React.createClass({
        getInitialState() {
            return {
                start: null,
                now: null,
                chance: 0,
                did: 0,
                timer: null
            };
        },
        toggle() {
            if (this.state.timer === null) {
                this.setState({
                    start: Date.now(),
                    now: Date.now(),
                    timer: setInterval(
                        () => {
                            this.setState({now: Date.now()});
                        },
                        500
                    ),
                    chance: 0,
                    did: 0
                });
            } else {
                const {start, timer, chance, did} = this.state;
                const now = Date.now();

                bips[this.props.id].occurances.push({
                    duration: now - start,
                    start,
                    chance,
                    did
                });

                clearInterval(timer);
                this.setState(this.getInitialState());
            }
        },
        oppurtunity() {
            if (this.state.start === null) {
                return;
            }
            const {chance} = this.state;

            this.setState({chance: chance + 1});
        },
        did() {
            if (this.state.start === null) {
                return;
            }
            const {chance, did} = this.state;

            this.setState({
                chance: chance + 1,
                did: did + 1
            });
        },
        render() {
            const {start, now, chance, did} = this.state;
            const info = bips[this.props.id];

            let statusText;
            let timeDisplay;
            let buttonColor;

            if (start === null) {
                statusText = "Start";
                timeDisplay = "0:00:00";
                buttonColor = null;
            } else {
                timeDisplay = formatDif(now - start);
                statusText = "End";
                buttonColor = 'red';
            }

            return (
                <UI.Card>
                    {info.name}
                    <div>Measurement: Oppurtunity</div>
                    <UI.Flexbox colCount={3}>
                        <div>
                            <UI.Button raised block color={buttonColor} text={timeDisplay} onTap={this.toggle} />
                            <div style={{textAlign: 'center'}}>{statusText}</div>
                        </div>

                        <div>
                            <UI.Button raised block text={did} onTap={this.did} />
                            <div>Did</div>
                        </div>

                        <div>
                            <UI.Button raised block text={chance} onTap={this.oppurtunity} />
                            <div>Chances</div>
                        </div>
                    </UI.Flexbox>
                </UI.Card>
            );
        }
    })
};

const Main = React.createClass({
    getInitialState () {
        return {
            check: true,
            selectedIndex: -1,
            inputValue: 50,
            textValue: 'test'
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
    loadFile(evt) {
        // console.log(evt, evt.target.files);
        const reader = new FileReader();

        reader.addEventListener(
            "load",
            () => {
                console.log(reader.result);
            }
        );

        reader.readAsDataURL(evt.target.files[0]);
    },
    render () {
        const {selectedIndex} = this.state;
        const url = "https://s-media-cache-ak0.pinimg.com/736x/89/aa/35/89aa35dbf42e2abd5a9b8082ebc4a3c3.jpg";
        // console.log(this.state);
        return (
            <UI.Screen title="BIP" subtext="Johnny" width={700} backText="Testing?" expansion="what">
                <UI.RadioGroup selectedIndex={0}>
                    {factotum.range(20, n => <UI.Option>Option #{n}</UI.Option>)}
                </UI.RadioGroup>

                <UI.RadioGroup selectedIndex={0} layout="grid" height={30} rowCount={1} colCount={2}>
                    <UI.Option>Test</UI.Option>
                    <UI.Option>Another Test</UI.Option>
                </UI.RadioGroup>

                <UI.RangeInput label="Testing" min={0} max={100} value={this.state.inputValue} onChange={inputValue => this.setState({inputValue})} />
                <UI.Switch label="Test Switch" on={this.state.check} onChange={check => this.setState({check})} />

                <UI.TextInput label="Test Text Input" value={this.state.textValue} onChange={textValue => this.setState({textValue})} />
                <UI.TextInput label="Test Text Input" value={this.state.textValue} />
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

App.start(
    <Route>
        <Route path="/" component={Main} />
        <Route path="/test" component={Test} />
    </Route>
);

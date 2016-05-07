// import CSSTransition from 'react-addons-css-transition-group';

const {Route} = ReactRouter;

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

const url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";

const App1 = (() => {
    const Main = () => {
        console.log("main!");
        const test = async () => {
            if (await Dialog.confirm("Really exit?", {confirmText: "Yes", cancelText: "No"}) === true) {
                App.start(App2.routes);
            }
        };
        return (
            <UI.Screen title="App 1 Main" backText="test" onBack={test}>
                <UI.Button block text="Test" onTap={() => App.navigation.push("/test")} />
                <UI.Button block raised text="App 2" onTap={() => App.start(App2.routes)} />
            </UI.Screen>
        );
    };
    const Test = () => (
        <UI.Screen title="App 1 Test" backText="Back" onBack={() => App.navigation.replace("/")}>
            LOL HEY
        </UI.Screen>
    );
    return {
        get routes() {
            return (
                <Route>
                    <Route path="/" component={Main} />
                    <Route path="/test" component={Test} />
                </Route>
            );
        }
    };
})();

const App2 = (() => {
    const Main = () => (
        <UI.Screen title="App 2 Main">
            <UI.Button block text="Test" onTap={() => App.navigation.push("/test")} />
            <UI.Button block raised text="App 1" onTap={() => App.start(App1.routes)} />
        </UI.Screen>
    );
    const Test = () => (
        <UI.Screen title="App 2 Test" backText="Back">
            LOL HEY
        </UI.Screen>
    );
    return {
        get routes() {
            return (
                <Route>
                    <Route path="/" component={Main} />
                    <Route path="/test" component={Test} />
                </Route>
            );
        }
    };
})();

// const Test = ({children}) => {
//     // console.log(History.state);
//     return (
//         <UI.Screen title="Test Screen">
//             Hey there
//             <div>{Date.now()}</div>
//             <UI.Button text="test" block raised onTap={() => App.navigation.push("/test")} />
//             <UI.Button text="test" block raised onTap={() => App.navigation.reset()} />
//             {children}
//         </UI.Screen>
//     );
// };
// const Wat = ({children}) => <UI.Screen title="Hey" backText="what">Hey What</UI.Screen>;

// const test = (...args) => {
//     console.log(args);
// };
// let called = false;
// const waitComponent = async (location, cb) => {
//     console.log('load c');
//     if (called === false) {
//         await chrono.wait(500);
//     }
//     called = true;
//     cb(null, Test);
// };
// const waitIndex = async (location, cb) => {
//     console.log('load r', Date.now());
//     await chrono.wait(1000);
//     cb(null, [
//         <Route path="/" component={Test} />,
//         <Route path="/test" component={Wat} />
//     ]);
// };

// App.start(App1.routes, {initialPath: "/test"});

// App.start(
//     <Route>
//         <Route getChildRoutes={DataCenter.loadRoutes} />
//     </Route>
// );

const ScreenTransition = React.createClass({
    render() {
        return <div style={{position: 'absolute', width: '100%', height: '100%'}}>{this.props.children}</div>
    }
});

Style.__rawCSS(
    "test",
    {
        selector: ".test-enter",
        rules: {
            'transition': 'left 250ms ease-out',
            left: '100%'
        }
    },
    {
        selector: ".test-enter.test-enter-active",
        rules: {
            left: 0
        }
    },
    {
        selector: ".test-leave",
        rules: {
            'transition': 'left 250ms ease-out',
            left: 0
        }
    },
    {
        selector: ".test-leave.test-leave-active",
        rules: {
            left: '-100%'
        }
    },
    {
        selector: ".test-appear",
        rules: {
            'transition': 'top 250ms ease-out',
            top: '100%',
        }
    },
    {
        selector: ".test-appear.test-appear-active",
        rules: {
            top: 0
        }
    }
);

const Wrapper = React.createClass({
    render() {
        return (
            <CSSTransition component="div" transitionName="test" transitionAppear transitionEnterTimeout={250} transitionLeaveTimeout={250}>
                <ScreenTransition key={Date.now()}>
                    {this.props.children}
                </ScreenTransition>
            </CSSTransition>
        );
    }
});

// const Wrapper = ({children}) => {
//     children = React.Children.toArray(children);

//     children.forEach((child, i) => {
//         if (child.hasOwnProperty('key') === false) {
//             child.key = Date.now();
//         }
//         console.log(i, child.key);
//     });

//     return <div>{children}</div>;
// };

const Filler = ({color}) => <div style={{width: '100%', height: '100%', backgroundColor: color}} />;

const Main = React.createClass({
    render() {
        return (
            <UI.Screen title="Test" backText={"test"}>
                <UI.Button text="test" onTap={() => App.navigation.push("/test")} />
                <UI.Pinboard height="80%">
                    <Filler color="cyan" pinInfo={{top: '10%', left: '10%', width: 100, height: '50%'}} />
                </UI.Pinboard>
            </UI.Screen>
        );
    }
});

App.start(
    <Route component={Wrapper}>
        <Route path="/" component={Main} />
        <Route path="/test" component={Main} />
    </Route>
);

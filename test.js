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

const DataCenter = (() => {
    const cache = {
        routes: null
    };
    return {
        loadRoutes(loc, cb) {
            cb(null, cache.routes);
        },
        updateRoutes(routes) {
            cache.routes = routes;
        }
    };
})();

const App1 = (() => {
    const Main = () => (
        <UI.Screen title="App 1 Main" backText="test">
            <UI.Button block text="Test" onTap={() => App.navigation.push("/test")} />
            <UI.Button block raised text="App 2" onTap={() => App.start(App2.routes)} />
        </UI.Screen>
    );
    const Test = () => (
        <UI.Screen title="App 1 Test" backText="Back">
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

App.start(App1.routes);

// App.start(
//     <Route>
//         <Route getChildRoutes={DataCenter.loadRoutes} />
//     </Route>
// );

let {
    ScrollContainer,
    Combobox,
    Option,
    Button,
    Image,
    Spinner,
    RaisedButton,
    ImageButton,
    Checkbox,
    RadioGroup,
    RadioItem,
    Flexbox,
    Screen,
    RangeInput,
    Card,
    TextInput,
    Grid,
    VSplit,
    HSplit
} = UI;
let {Route, RouteHandler} = ReactRouter;
let Demo;
let Demo2;
let imgSource;

imgSource = "http://7-themes.com/data_images/out/76/7031783-vivi-ornitier-final-fantasy.jpg";
imgSource = "https://coedbc.files.wordpress.com/2014/09/screen-shot-2014-09-25-at-1-34-30-pm.png?w=640";

Demo = React.createClass({
    mixins: [
        ReactRouter.Navigation,
        ReactRouter.State
    ],
    getInitialState () {
        return {
            index: 0,
            now: Date.now()
        };
    },
    render () {
        return (
            <Screen title="Test">
                <RaisedButton text="test" onTap={() => this.transitionTo("/test/1-1-1970")} />
                <Image height={350} source={imgSource} />
            </Screen>
        );
    }
});

Demo2 = React.createClass({
    mixins: [
        ReactRouter.Navigation,
        ReactRouter.State
    ],
    getInitialState () {
        return {
            index: 0,
            now: Date.now()
        };
    },
    render () {
        return (
            <Screen title="Test 2">
                <Screen title="Nested">
                    <RaisedButton text="test" onTap={() => this.transitionTo("/test/1-1-1970")} />
                    <Image height={350} source={imgSource} />
                </Screen>
            </Screen>
        );
    }
});

let Wrap = React.createClass({
    mixins: [ReactRouter.State],
    getInitialState () {
        return {title: null};
    },
    render () {
        let {id} = this.getParams();

        return (
            <VSplit bounds={[-50]}>
                <App.ScreenTransition action={this.props.action}>
                    <RouteHandler />
                </App.ScreenTransition>
                <RaisedButton text="Still" />
            </VSplit>
        );
    }
});

App.start(
    <Route handler={Wrap}>
        <Route path="/" handler={Demo} />
        <Route path="/test/:id" handler={Demo2} />
    </Route>
);

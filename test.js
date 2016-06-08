// import CSSTransition from 'react-addons-css-transition-group';

const {Route} = ReactRouter;

const coolBlue = "#2FB1DF";

Theme.define({
    app: {
        backgroundColor: 'white',
        textColor: '#747474'
    },
    button: {
        hoverColor: 'rgba(0, 0, 0, 0.11)',
        activeColor: 'rgba(0, 0, 0, 0.2)',
        raised: {
            color: coolBlue,
            textColor: 'white'
        }
    },
    card: {
        backgroundColor: 'white'
    },
    progressbar: {
        backgroundColor: '#B3CEED',
        color: '#3B8AF3'
    },
    radio: {
        grid: {
            selectedColor: coolBlue
        }
    },
    rangeInput: {
        track: {
            color: coolBlue
        }
    },
    switch: {
        track: {
            color: coolBlue
        }
    },
    title: {
        backgroundColor: coolBlue,
        textColor: 'white'
    },
    userInput: {
        activeColor: '#2FB1DF',
        textColor: 'black'
    }
});

const url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";

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
            <CSSTransition component="div" transitionName="test" transitionEnterTimeout={250} transitionLeaveTimeout={250}>
                <ScreenTransition key={Date.now()}>
                    {this.props.children}
                </ScreenTransition>
            </CSSTransition>
        );
    }
});

const Filler = ({color}) => <div style={{width: '100%', height: '100%', backgroundColor: color}} />;
const test = n => (
    <UI.Card title="Test Item">{n}</UI.Card>
);

const Test = ({children}) => {
    children = React.Children.toArray(children);
    for (const child of children) {
        console.log(child, child.type.valueName);
    }
    return <div>{children}</div>
};

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);

        this.child = React.cloneElement(props.children, {onChange: this.change});
    }

    change = evt => {
        console.log(evt);
    }

    render = () => {
        return <div>{this.child}</div>;
    }
}
class BetterForm extends React.Component {
    constructor(props) {
        super(props);

        const {itemContainer = 'div', layout = null} = props;
        const children = React.Children.toArray(props.children);

        if (layout === null) {
            this.childList = children.map(
                child => {
                    return <ItemContainer valueName={child.type.valueName} valueFunction={child.type.valueFunction}>{child}</ItemContainer>;
                }
            );
        }
    }

    submit = evt => {
        evt.preventDefault();
        evt.stopPropagation();
    }

    render = () => {
        return (
            <form onSubmit={this.submit} ref="form">
                {this.childList}
                <UI.Button text="Submit" onTap={this.submit} raised block />
            </form>
        );
    }
}

const Main = React.createClass({
    async demo() {
        if (await Dialog.confirm("Really?") === true) {
            console.log("Nope!");
        }
    },
    render() {
        return (
            <UI.Screen title="Test" backText={"test"} scrollable onBack={this.demo}>
                <BetterForm>
                    <UI.TextInput />
                </BetterForm>
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

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

        this.state = {value: props.childInfo.initialValue};
    }

    change = (...args) => {
        const {updateForm, childInfo: {valueFunction, name}} = this.props;
        this.setState({value: args[0]});
        updateForm(name, valueFunction(...args));
    }

    render = () => {
        const {Renderer, valueProp, children, props} = this.props.childInfo;
        const {value} = this.state;
        const valueObj = {
            [valueProp]: value
        };

        return (
            <div>
                <Renderer {...props} onChange={this.change} {...valueObj}>
                {children}
                </Renderer>
            </div>
        );
    }
}
class BetterForm extends React.Component {
    constructor(props) {
        super(props);

        const {itemContainer = 'div', layout = null} = props;
        const children = React.Children.toArray(props.children);
        let ElemContainer;

        this.internalState = {};

        if (layout === null) {
            this.Container = 'div';
            ElemContainer = itemContainer;
        } else {
            this.Container = layout;
            ElemContainer = layout.FormContainer || (({children}) => children);
            this.containerProps = Object.entries(props).reduce(
                (props, [key, value]) => {
                    if (key.startsWith('layout-') === true) {
                        props[key.substr(7)] = value;
                    }
                    return props;
                },
                {}
            );
        }

        this.childList = children.map(
            (child, index) => {
                const childInfo = {
                    Renderer: child.type,
                    props: child.props,
                    children: child.props.children,
                    valueProp: child.type.valueProp,
                    valueFunction: child.type.valueFunction,
                    initialValue: child.props.defaultPropValue || child.type.defaultPropValue,
                    name: child.props.formName || index
                };
                const containerProps = Object.entries(child.props).reduce(
                    (props, [key, value]) => {
                        if (key.startsWith('layout-') === true) {
                            props[key.substr(7)] = value;
                        }
                        return props;
                    },
                    {}
                );
                this.internalState[childInfo.name] = childInfo.valueFunction(childInfo.initialValue);
                return (
                    <ElemContainer {...containerProps} key={index}>
                        <ItemContainer childInfo={childInfo} updateForm={this.updateInternalState} />
                    </ElemContainer>
                );
            }
        );
    }

    updateInternalState = (name, value) => {
        this.internalState[name] = value;
    }

    submit = evt => {
        evt.preventDefault();
        evt.stopPropagation();

        console.log(this.internalState);
    }

    render = () => {
        const {Container, childList, containerProps} = this;

        return (
            <form onSubmit={this.submit} ref="form">
                <Container {...containerProps}>
                    {childList}
                </Container>
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
                <UI.Form itemContainer={UI.Card}>
                    {factotum.range(3,
                        n => <UI.TextInput formName={`input${n}`} label={n} />
                    )}
                </UI.Form>
                {/*<UI.Touchable component="div" tabIndex="-1" id="wat" onTap={evt => evt.target.focus()}>Test</UI.Touchable>*/}
                <div tabIndex={-1}>Test</div>
            </UI.Screen>
        );
    }
});

Style.__rawCSS(
    "wat",
    {
        selector: "div:focus",
        rules: {
            border: '1px solid black',
            outline: 'none'
        }
    }
);

App.start(
    <Route component={Wrapper}>
        <Route path="/" component={Main} />
        <Route path="/test" component={Main} />
    </Route>
);

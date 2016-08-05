// import CSSTransition from 'react-addons-css-transition-group';
import Icon from 'lib-source/uiv2/icon';
import Ripple from 'lib-source/uiv2/ripple';
import Button from 'lib-source/uiv2/button';
import IconButton from 'lib-source/uiv2/iconbutton';
import Card from 'lib-source/uiv2/Card';
import Image from 'lib-source/uiv2/Image';
import CenterContent from 'lib-source/uiv2/CenterContent';
import Checkbox from 'lib-source/uiv2/Checkbox';
import Toggle from 'lib-source/uiv2/Toggle';
import Touchable from 'lib-source/uiv2/Touchable';
import {defineComponentStyle, Theme as _Theme, __setup as createStyles} from "lib-source/v2/style";

const range = function* (args) {
  let {start = 0, end = null, count = null, step = 1, map = i => i} = args;

  if (end === null) {
    if (count === null) {
      throw new Error("Must give the size of the range")
    }
    end = start + count;
  }

  while (true) {
    if (start >= end) {
      break;
    }
    yield map(start);
    start += step;
  }
};

window.frange = function* (count) {
    let current = 0;
    while (true) {
        if (current === count) {
            break;
        }
        yield current;
        current += 1;
    }
};

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

class FormattedInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
    }

    change = (evt) => {
        let {value} = evt.target;
        value = value + value;
        this.setState({value});
    }

    render = () => <input type="text" value={this.state.value} onChange={this.change} />
}

// const Horiz = ({children}) => (
//     <div>
//         {React.Children.toArray(children).map(child => )}
//     </div>
// );

Style.__rawCSS(
    "demo",
    {
        selector: ".normal",
        rules: {
            backgroundColor: 'cyan'
        }
    }
);

// const Button = ({...buttonProps, text}) => <button style={{whiteSpace: 'pre'}} {...buttonProps}>{text}</button>;
// const StyledButton = styleName => {
//     styleName = `${styleName.charAt(0).toUpperCase()}${styleName.slice(1)}`;
//     Button[styleName] = props => <Button className={styleName} {...props} />;
// };
//
// StyledButton("normal");


_Theme.define({
    core: {
        button: {
            textColor: "black"
        }
    }
});

// window.benchmark = (iterations, first, second) => {
//     const r = [];
//     for (const testNum of range({count: 30})) {
//         let a = performance.now();
//         for (let i = 0; i < iterations; i += 1) {
//             first();
//         }
//         a = performance.now() - a;
//
//         let b = performance.now();
//         for (let i = 0; i < iterations; i += 1) {
//             second();
//         }
//         b = performance.now() - b;
//         r.push([a.toFixed(3), b.toFixed(3)]);
//     }
//     return r;
// };
//
// const checkProp = (obj, prop, value) => obj.hasOwnProperty(prop) === true && obj[prop] === value;
// const x = {a: 10, b: 12};
// const res = benchmark(1e6, () => typeof x.c === 'undefined', () => x.c === undefined);
// console.log(res.map(i => i.join('\t')).join('\n'));

/*
const url = "http://vignette1.wikia.nocookie.net/bayonetta/images/e/e3/Cereza_Bayonetta_2_render.png/revision/latest?cb=20140615210025";
*/
const url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";

const animationTime = 250;
defineComponentStyle(
    'dialog',
    'core',
    {
        "overlay": {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            zIndex: '+100',
            display: 'none',
            WebkitOverflowScrolling: 'auto',
            opacity: 0,
            transition: `opacity ${animationTime}ms linear`
            // display: 'none'
        },

        "window": {
            position: 'absolute',
            backgroundColor: 'white',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',
            borderRadius: 5,
            width: '75%',
            maxWidth: 480
        },
        "window-top": {
            top: '15%',
            left: '50%',
            transform: 'translateX(-50%)'
        },
        "window-center": {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        },

        "content": {
            maxHeight: '40vh',
            WebkitOverflowScrolling: 'touch',
            overflow: 'auto',
            padding: 10
        }

        // ".window": {
        //     position: 'absolute',
        //     top: '15%',
        //     left: '50%',
        //     transform: 'translateX(-50%)',
        //     backgroundColor: 'white',
        //     boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.6)',
        //     width: '70%',
        //     maxWidth: 480,
        //     opacity: 0,
        //     transition: 'opacity 0.5s',
        //     borderRadius: 3
        // },
        // '.content': {
        //     maxHeight: '40vh',
        //     WebkitOverflowScrolling: 'touch',
        //     overflow: 'auto',
        //     padding: 15,
        //     transform: 'translateZ(0)'
        // },
        // ".title": {
        //     lineHeight: '30px',
        //     padding: 15,
        //     paddingTop: 10,
        //     paddingBottom: 0,
        //     fontSize: 18,
        //     fontWeight: 900,
        //     color: 'black'
        // },
        // ".buttons": {
        //     textAlign: 'right',
        //     width: '100%',
        //     height: 35
        // },
        //
        // ".loadSpinner": {
        //     position: 'absolute',
        //     top: '50%',
        //     left: '50%',
        //     transform: 'translate(-50%, -50%)',
        //     padding: 5,
        //     backgroundColor: 'white',
        //     borderRadius: 3,
        //     minWidth: 54
        // }
    }
);

let currentDialog = null;
window.dialog = {
    get current() {
        return currentDialog;
    }
};
class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: null,
            opacity: null,
            name: null,
            pos: 'top',
            content: null,
            response: cblog,
            closable: !true
        };
        this.animating = false;
    }

    show = async (style) => {
        if (this.animating === true) {
            return;
        }
        this.animating = true;
        this.setState({display: 'block'});
        await chrono.wait(50);
        this.setState({opacity: 1});
        await chrono.wait(animationTime);
        this.animating = false;
    }
    hide = async (value) => {
        // console.log(this.animating, this.animating === true);
        if (this.animating === true) {
            return;
        }
        this.animating = true;
        this.setState({opacity: null});
        await chrono.wait(animationTime);
        this.setState({display: null});
        requestAnimationFrame(() => this.state.response(value));
        this.animating = false;
    }

    close = () => {
        if (this.state.closable === false) {
            return;
        }
        this.hide(undefined);
    }
    stopper = (evt) => {
        evt.stopPropagation();
    }

    componentDidMount = () => {
        currentDialog = this;
    }
    componentWillUnmount = () => {
        currentDialog = null;
    }

    render = () => {
        const {display, opacity, pos, content} = this.state;

        return (
            <Touchable component="div" onTap={this.close} className="dialog-core-overlay" style={{display, opacity}}>
                <Touchable component="div" className={`dialog-core-window dialog-core-window-${pos}`} onTap={this.stopper}>
                    <div className="dialog-core-content">
                        <Button text="demo" block onTap={() => this.hide('test')} />
                    </div>
                </Touchable>
            </Touchable>
        );
    }
}

class Combobox extends React.Component {
    constructor(props) {
        super(props);
    }

    openOptions = async () => {
        const {title = "Combobox!"} = this.props;
        console.log(await Dialog.__custom(
            closeDialog => ({
                content: (
                    <div>
                        {Array.from(range({
                            count: 10,
                            map: n => <Button text={n} key={n} block onTap={() => closeDialog(n)} />
                        }))}
                    </div>
                ),
                title,
                buttons: [{text: 'cancel'}]
            })
        ));
    }

    render = () => {
        return (
            <Touchable component="div" onTap={this.openOptions}>
                Test?
            </Touchable>
        );
        // return <div>Edit Me</div>;
    }
}

const Option = () => {
    throw new Error("Option is intended as a filler element and should not be rendered on its own");
};


import SpinnerDataURL from "lib-source/data-uri/load-spinner.gif.source";
const Spinner = ({size}) => <Image width={size} height={size} source={SpinnerDataURL} />;


const Main = React.createClass({
    async demo() {
        if (await Dialog.confirm("Really?") === true) {
            console.log("Nope!");
        }
    },
    getInitialState() {
        return {checked: false, on: false};
    },
    render() {
        return (
            <UI.Screen title="Test" backText={"test"} width={600} onBack={this.demo}>
                {/*<Image source={url} height={150} color="cyan" />*/}
                <Checkbox checked={this.state.checked} onChange={checked => this.setState({checked})} label={"Test"} subTitle="more text?" />
                <Toggle on={this.state.on} onChange={on => this.setState({on})} label={"Test"} subTitle="more text?" />
                <Button text={<span><Spinner size={20} />Button Text</span>} onTap={() => dialog.current.show()} />
                <Combobox selectedIndex={0}>
                    <Option value={0}>Test</Option>
                </Combobox>
                <Dialog />
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
createStyles();

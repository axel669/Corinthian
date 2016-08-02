// import CSSTransition from 'react-addons-css-transition-group';
import Icon from 'lib-source/uiv2/icon';
import Ripple from 'lib-source/uiv2/ripple';
import Button from 'lib-source/uiv2/button';
import IconButton from 'lib-source/uiv2/iconbutton';
import Card from 'lib-source/uiv2/Card';
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
// const res = benchmark(1e6, () => x.c || false, () => x.c === undefined);
// console.log(res.map(i => i.join('\t')).join('\n'));

const Main = React.createClass({
    async demo() {
        if (await Dialog.confirm("Really?") === true) {
            console.log("Nope!");
        }
    },
    render() {
        return (
            <UI.Screen title="Test" backText={"test"} scrollable onBack={this.demo}>
                <img src="http://axel669.ngrok.io/bayonetta.jpg" />
                {/*<Button text="test" iconName="ion-refresh" block />
                <Button text="test" iconName="ion-loop" />
                <Button text="test" disabled iconName="ion-close-round" />
                <div style={{height: 100}}>
                    <Button text="filled" fill />
                </div>
                <Icon name="ion-alert" />
                <IconButton name="ion-alert" iconSize={20} />*/}
                {/*<UI.Button cornerRadius={10} text="test" />*/}
                {/*<UI.Form itemContainer={UI.Card} submitText="Woah">
                    {factotum.range(3,
                        n => <UI.TextInput formName={`input${n}`} label={`input ${n}`} />
                    )}
                </UI.Form>*/}

                {/*<UI.Touchable component="div" tabIndex="-1" id="wat" onTap={evt => evt.target.focus()}>Test</UI.Touchable>*/}
                {/*<FormattedInput />*/}
                {/*<UI.ProgressBar progress={0.35} height={30} />*/}
                {/*<button style={{whiteSpace: 'pre'}} onTouchStart={evt => dispatchEvent(evt.target, 'DOMActivate', 1)}>{"test\n12"}</button>*/}
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

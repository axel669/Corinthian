// import CSSTransition from 'react-addons-css-transition-group';
import chrono from "lib-source/v2/chrono";

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
import Combobox from 'lib-source/uiv2/Combobox';
import Option from 'lib-source/uiv2/Option';
import Spinner from 'lib-source/uiv2/Spinner';
import Radio from 'lib-source/uiv2/Radio';
import Calendar from 'lib-source/uiv2/Calendar';

import RangeInput from 'lib-source/uiv2/input/RangeInput';

import DialogComponent from "lib-source/uiv2/dialog";
import {defineComponentStyle, Theme as _Theme, __setup as createStyles} from "lib-source/v2/style";

window.chrono = chrono;

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

// window.benchmark = (iterations, first, second) => {
//     const r = [];
//     for (const testNum of range({count: 30})) {
//         let a = performance.now();
//         for (let i = 0; i < iterations; i += 1) {
//             first(i);
//         }
//         a = performance.now() - a;
//
//         let b = performance.now();
//         for (let i = 0; i < iterations; i += 1) {
//             second(i);
//         }
//         b = performance.now() - b;
//         r.push([a.toFixed(3), b.toFixed(3)]);
//     }
//     return r;
// };
//
// const checkProp = (obj, prop, value) => obj.hasOwnProperty(prop) === true && obj[prop] === value;
// const x = {a: 10, b: 12};
//
// const res = benchmark(1e6, (i) => (i % 2 === 0) ? i >> 1 : 0, (i) => (i % 2 === 0) ? i / 2 : 0);
// console.log(res.map(i => i.join('\t')).join('\n'));

/*
const url = "http://vignette1.wikia.nocookie.net/bayonetta/images/e/e3/Cereza_Bayonetta_2_render.png/revision/latest?cb=20140615210025";
*/
const url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";

// const InputBase = ({label, textFormatter, valueParser, onChange = () => {}, ...props}) => {
//     const handler = evt => {
//         const raw = evt.target.value;
//         onChange(
//             textFormatter(raw),
//             valueParser(raw),
//             raw
//         );
//     };
//     return (
//         <div>
//             <div>{label}</div>
//             <input {...props} onChange={handler} />
//         </div>
//     );
// };
defineComponentStyle(
    'input',
    'core',
    {
        "$body": {
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
        },
        "wrapper": {
            position: 'relative',
            backgroundColor: 'white',
            height: 32
            // margin: 3
        },
        "field": {
            width: '100%',
            borderWidth: 0,
            borderBottom: '2px solid lightgray',
            borderRadius: 0,
            backgroundColor: 'transparent',
            margin: 0,
            height: '100%',
            position: 'relative',
            zIndex: '+1'
            // WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
        },
        "field:focus": {
            outline: 'none'
        },
        "icon": {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: 30
        },
        "highlight-border": {
            position: 'absolute',
            bottom: 0,
            borderBottom: `2px solid ${coolBlue}`,
            left: '50%',
            transform: 'translateX(-50%) scaleX(0)',
            width: '100%',
            zIndex: '+2'
        },
        "field:focus + highlight-border": {
            // width: '100%',
            WebkitTransition: '-webkit-transform 250ms linear',
            transition: 'transform 150ms linear',
            transform: 'translateX(-50%) scaleX(1)'
        }
    }
);
class InputWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    focus = () => {
        this.refs.field.focus();
    }

    render = () => {
        const {parser = i => i, onChange = () => {}, iconName = null, style = {}, ...props} = this.props;
        const handler = evt => {
            // const raw = evt.target.value;
            onChange(parser(evt.target.value));
        };
        let realStyle = {...style};
        let iconDisplay = null;

        if (iconName !== null) {
            iconDisplay = <CenterContent className="input-core-icon" height="100%"><Icon name={iconName} size={18} /></CenterContent>;
            realStyle.paddingLeft = 30;
        }

        return (
            <div className="input-core-wrapper">
                <input {...props} style={realStyle} onChange={handler} className="input-core-field" ref="field" />
                <div className="input-core-highlight-border" />
                {iconDisplay}
            </div>
        );
    }
}
// const IconInput = ({iconName, style = {},
class LabeledInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const {label, Wrapper = InputWrapper, ...props} = this.props;

        return (
            <div style={{position: 'relative', margin: 3}}>
                <Touchable component="div" onTap={() => this.refs.wrapped.focus()}>{label}</Touchable>
                <Wrapper ref="wrapped" {...props} />
            </div>
        );
    }
}

const Input = {
    Text: props => <LabeledInput {...props} type="text" />,
    Password: props => <LabeledInput {...props} type="password" />
};
// const registerTextType = (type, textType, textFormatter, valueParser) => {
//     Input[type] = props => <InputBase {...props} type={textType} {...{valueParser, textFormatter}} />;
// };
// registerTextType('Text', 'text', i => i, i => i);
// registerTextType(
//     'Numeric',
//     'number',
//     text => {
//         return text.trim().replace(/\-{2,}/g, '-').replace(/[^\-0-9eE\.\,]/g, '');
//     },
//     text => parseFloat(text)
// );

const DateInput = ({date = new Date(), format = "{month}/{day}/{year}", onChange = () => {}, iconName}) => {
    const changeDate = async () => {
        const handler = date => {
            dialog.hide(dialog.success(date));
        };
        const result = await dialog.show({
            content: <Calendar selectedDate={date} onDateSelected={handler} key={Date.now()} />,
            buttons: [{text: "Cancel"}],
            title: "Select Date"
        });

        if (result.value !== null) {
            onChange(result.value);
        }
    };
    return (
        <div style={{height: 30}}>
            <Button text={chrono(date).format(format)} onTap={changeDate} flush fill iconName={iconName} />
        </div>
    );
};

// class TimeInput extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     test = () => {
//         console.log(this.refs.lol);
//         this.refs.lol.click();
//     }
//
//     render = () => {
//         return <div><Button text="Test" block onTap={this.test} /><input type="time" style={{display: 'none'}} ref="lol" onChange={cblog} /></div>;
//     }
// }

/*
defineStyleForComponent(
    Button,
    'special',
    {
    }
);
...
<Button.Special />
*/

const Main = React.createClass({
    async demo() {
        if (await Dialog.confirm("Really?") === true) {
            console.log("Nope!");
        }
    },
    getInitialState() {
        return {
            checked: false,
            on: false,
            disabled: false,
            button: {
                image: false
            },
            index: -1,
            text: "",
            password: "",
            value: null,
            date: chrono(),
            rangeValue: 100
        };
    },
    render() {
        const {disabled} = this.state;
        const textHandler = (text, value) => {
            // console.log('value', value);
            this.setState({text, value});
        }

        return (
            <UI.Screen title="Test" backText={"test"} width={600} onBack={this.demo}>
                {/*<Image source={url} height={150} color="cyan" />*/}
                {/*<Checkbox checked={this.state.checked} onChange={checked => this.setState({checked})} label={"Test"} subTitle="more text?" />
                <Toggle on={this.state.on} onChange={on => this.setState({on})} label={"Test"} subTitle="more text?" />
                <Button text={<span>{disabled ? <Spinner size={20} /> : null}Button Text</span>} disabled={disabled} onTap={() => this.setState({disabled: true})} />
                <Combobox selectedIndex={this.state.index} onChange={index => this.setState({index})} scrollToSelected>
                    {Array.from(range({
                        count: 20,
                        map: i => <Option value={i ** i}><Spinner size={14} />Test {i}</Option>
                    }))}
                    <Option value={'lol'}><Image source={url} height={50} width="50%" /></Option>
                </Combobox>
                <Icon name="ion-calendar" size={20} />*/}
                {/*<Radio selectedIndex={this.state.index} onChange={index => this.setState({index})} title="Test">
                    {Array.from(range({
                        count: 10,
                        map: n => <Option value={n ** n}>{n}</Option>
                    }))}
                    <Option><Image source={url} height={30} /></Option>
                </Radio>
                <Button text="Test" />*/}
                {/*<div style={{width: '75%', maxWidth: 480}}>
                    <Calendar selectedDate={new Date()} />
                </div>*/}
                {/*<DateInput onChange={date => this.setState({date})} date={this.state.date} label="My Birthday?" iconName="ion-calendar" format={"Demo: {month}/{day}/{year}"} />*/}
                {/*<Button text="Wat" onTap={() => dialog.show({content: <Calendar selectedDate={new Date()} onDateSelected={cblog} />, title: "Select Date", buttons: [{text: "Cancel"}]})} />*/}
                {/*<input type="datetime" />*/}
                {/*<input type="time" onChange={evt => cblog(evt.target.value)} ref="test" />*/}
                {/*<TimeInput />*/}
                <Card>
                    <RangeInput value={this.state.rangeValue} max={255} onChange={rangeValue => this.setState({rangeValue})} />
                    <input type="range" value={this.state.rangeValue} max={255} onChange={evt => this.setState({rangeValue: evt.target.value})} />
                </Card>
                <Input.Text label="Text" iconName="ion-email" value={this.state.text} onChange={text => this.setState({text})} />
                <Input.Password label="Password" value={this.state.password} onChange={password => this.setState({password})} />
                <DialogComponent />
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
window.qsel = (...args) => document.querySelector(...args);

// const isPow2 = n => (n & -n) === n;
// window.collatz = n => (n % 2 === 0) ? n / 2 : 3 * n + 1;
// window.check = start => {
//     while (true) {
//         if (start === 1) {
//             break;
//         }
//         console.log(start);
//         start = collatz(start);
//     }
// };
//
// const f = n => (n & -n);
// for (const i of frange(100)) {
//     console.log(i, f(i));
// }

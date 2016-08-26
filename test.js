// import "babel-polyfill";
//
// import {XRegExp} from "xregexp";
// import PubSub from "pubsub-js";
// import React from "react";
// import ReactDOM from "react-dom";
// import CSSTransition from "react-addons-css-transition-group";
// import * as ReactRouter from "react-router";
// import {createHashHistory} from "history";


// import "lib-source/v2/gesture";
import chrono from "lib-source/v2/chrono";
import ajax from "lib-source/v2/ajax";

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
import Input from 'lib-source/uiv2/Input';

import Flexbox from 'lib-source/uiv2/layout/Flexbox';
import Grid from 'lib-source/uiv2/layout/Grid';
import Pinboard from 'lib-source/uiv2/layout/Pinboard';

import Form from 'lib-source/uiv2/Form';

import DialogComponent from "lib-source/uiv2/dialog";
import {defineComponentStyle, Theme as _Theme, __setup as createStyles, defineStyleForComponent, genFontCSS} from "lib-source/v2/style";

import {warningFunc} from "lib-source/v2/utils";
import {sharedReference, SharedObjectDisplay} from "lib-source/v2/shared";

import secure from 'lib-source/v2/crypto';
import zip from 'lib-source/v2/zip';
import Environment from 'lib-source/v2/Environment';

import RobotoURI from "lib-source/data-uri/roboto-light.woff.source";
import IonicURI from "lib-source/data-uri/ionicons.woff.source";

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

window.frange = function* (count, map = i => i) {
    let current = 0;
    while (true) {
        if (current === count) {
            break;
        }
        yield map(current);
        current += 1;
    }
};
window.arange = (count, map) => Array.from(frange(count, map));

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

defineStyleForComponent(
    Checkbox, 'awesome',
    {
        normal: {
            iconColor: 'cyan'
        },
        checked: {
            iconColor: 'blue'
        }
    }
);
defineStyleForComponent(
    Toggle, 'awesome',
    {
        on: {
            thumbColor: 'blue',
            trackColor: 'cyan'
        }
    }
);

defineComponentStyle(
    'final',
    'fantasy',
    {
        "$*": {
            boxSizing: 'border-box'
        },
        "$body": {
            fontFamily: "Roboto",
            backgroundColor: '#f1f1f1',
        },
        "$html, $body": {
            padding: 0,
            margin: 0,
            width: '100%',
            height: '100%'
        }
    }
);
if (Environment.app === false) {
    defineComponentStyle(
        'global',
        'elite',
        {
            "$html, $body": {
                WebkitOverflowScrolling: 'touch'
            }
        }
    );
} else {
    defineComponentStyle(
        'global',
        'elite',
        {
            "$body": {
                overflow: 'hidden'
            }
        }
    );
}

defineComponentStyle(
    'app',
    'core',
    {
    }
);
defineComponentStyle(
    'roboto',
    'font',
    {"$@font-face": genFontCSS("Roboto", RobotoURI)}
);
defineComponentStyle(
    'ionic',
    'font',
    {"$@font-face": genFontCSS("Ionic", IonicURI)}
);

const titleHeight = 40;
const titleCommonStyle = {
    top: 0,
    left: 0,
    right: 0,
    height: titleHeight,
    backgroundColor: coolBlue,
    zIndex: '+10',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)',
    color: 'white',
    fontSize: 20
};
defineComponentStyle(
    'app-screen',
    'core',
    {
        "content": {
            position: 'absolute',
            top: titleHeight,
            bottom: 0,
            left: 0,
            right: 0,
            overflow: 'auto'
        },
        "title": {
            position: 'absolute',
            ...titleCommonStyle
        }
    }
);
defineComponentStyle(
    'web-screen',
    'core',
    {
        "content": {
            marginTop: titleHeight
        },
        "title": {
            position: 'fixed',
            ...titleCommonStyle
        }
    }
);

const titleClassName = Environment.app === true ? "app-screen-core-title" : "web-screen-core-title";
const contentClassName = Environment.app === true ? "app-screen-core-content" : "web-screen-core-content";
class Screen extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const {
            backText = null,
            onBack = () => true,
            leftMenu = null,
            rightMenu = null
        } = this.props;

        return (
            <div>
                <div className={contentClassName}>{this.props.children}</div>
                <div className={titleClassName}>
                    <CenterContent height="100%">
                        {this.props.title}
                    </CenterContent>
                </div>
                <DialogComponent />
            </div>
        );
    }
}

const App = {
};

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
            <Screen title="Test" backText={"test"} width={600} onBack={this.demo}>
                <Input.Text />
                <Input.Date />
                <Combobox selectedIndex={0}>
                    {arange(30, n => <Option key={n}>{n}</Option>)}
                </Combobox>
                {arange(60, n => <div key={n}>{n}</div>)}
                {/*<Image source={url} height={150} color="cyan" />*/}
                {/*<Toggle.Awesome on={this.state.on} onChange={on => this.setState({on})} label={"Test"} subTitle="more text?" />*/}
                {/*<Button text={<span>{disabled ? <Spinner size={20} /> : null}Button Text</span>} disabled={disabled} onTap={() => this.setState({disabled: true})} />*/}
                {/*<Icon name="ion-calendar" size={20} />*/}
                {/*<Radio selectedIndex={this.state.index} onChange={index => this.setState({index})} title="Test">
                    {Array.from(range({
                        count: 10,
                        map: n => <Option value={n ** n}>{n}</Option>
                    }))}
                    <Option><Image source={url} height={30} /></Option>
                </Radio>*/}
                {/*<Button text="Test" />*/}
                {/*<div style={{width: '75%', maxWidth: 480}}>
                    <Calendar selectedDate={new Date()} />
                </div>*/}
                {/*<Input.Date onChange={date => this.setState({date})} date={this.state.date} label="My Birthday?" iconName="ion-calendar" format={"Expiration Date: {month}/{day}/{year}"} />*/}
                {/*<Button text="Wat" onTap={() => dialog.show({content: <Calendar selectedDate={new Date()} onDateSelected={cblog} />, title: "Select Date", buttons: [{text: "Cancel"}]})} />*/}
                {/*<input type="datetime" />*/}
                {/*<input type="time" onChange={evt => cblog(evt.target.value)} ref="test" />*/}
                {/*<TimeInput />*/}
                {/*<Card>
                    <RangeInput value={this.state.rangeValue} max={255} onChange={rangeValue => this.setState({rangeValue})} />
                    <input type="range" value={this.state.rangeValue} max={255} onChange={evt => this.setState({rangeValue: evt.target.value})} />
                </Card>*/}
                {/*<Input.URL label="URL" value={this.state.text} onChange={(text, valid) => {console.log(text, valid); this.setState({text});}} />
                <Input.Email label="Email" value={this.state.text} onChange={(text, valid) => {console.log(text, valid); this.setState({text});}} />
                <Input.Password label="Password" value={this.state.password} onChange={password => this.setState({password})} />
                <Input.Range value={this.state.rangeValue} max={255} onChange={rangeValue => this.setState({rangeValue})} />
                <FileInput text="Test" onChange={files => console.log(files)} multiple />*/}
                {/*<TimeSelector value={this.state.date} onChange={date => this.setState({date})} />*/}
                {/*<Input.Time value={this.state.date} onChange={date => this.setState({date})} />
                <Input.Date value={this.state.date} onChange={date => this.setState({date})} />*/}
                {/*<Input.File onChange={cblog} text="Select File" />*/}
                {/*<Flexbox colCount={3} padEnd maxItemWidth={100} align="space-around">
                    {arange(11, n => <Button text={n} block flush />)}
                </Flexbox>*/}
                {/*<Grid colCount={3} rowCount={4}>
                    {arange(11, n => <Button text={n} flush fill />)}
                </Grid>*/}
                {/*<Pinboard height={200}>
                    {arange(12,
                        n => {
                            const angle = (n / 6) * Math.PI;
                            const x = Math.cos(angle) * 70 + 145;
                            const y = Math.sin(angle) * 70 + 85;
                            const pos = {top: y, left: x, width: 30, height: 30};

                            return <div pinInfo={pos} style={{width: '100%', height: '100%', backgroundColor: 'cyan'}}>{n}</div>;
                        }
                    )}
                </Pinboard>*/}
                {/*<Input.Search iconName="ion-search" placeholder="Search Stuffs" />*/}
                {/*<Checkbox.Awesome checked={this.state.checked} onChange={checked => this.setState({checked})} label={"Test"} subTitle="more text?" />*/}
                {/*<Button text="Normal" />
                <Button text="Disabled" disabled />
                <Button.Cancel text="Cancel" />
                <Button.Confirm text="Confirm" />
                <Input.Range value={this.state.rangeValue} max={255} onChange={rangeValue => this.setState({rangeValue})} />*/}
                {/*<Form label="Form">*/}
                    {/*<Radio layout={Pinboard} layout-height={200}>
                        {arange(12,
                            n => {
                                const angle = (n / 6) * Math.PI;
                                const x = Math.cos(angle) * 70 + 145;
                                const y = Math.sin(angle) * 70 + 85;
                                const pos = {top: y, left: x, width: 30, height: 30};

                                return <div pinInfo={pos} style={{width: '100%', height: '100%'}}>{n}</div>;
                            }
                        )}
                    </Radio>*/}
                    {/*<Radio title="Test">
                        {Array.from(range({
                            count: 10,
                            map: n => <Option value={n ** n}>{n}</Option>
                        }))}
                        <Option><Image source={url} height={30} /></Option>
                    </Radio>*/}
                    {/*<Input.Text formName="Text" placeholder="Text" />
                    <Input.Password formName="Password" placeholder="Password" />
                    <Input.Search formName="Search" placeholder="Search" />
                    <Input.URL formName="URL" placeholder="URL" />
                    <Input.Email formName="Email" placeholder="Email" />

                    <Input.Date formName="date" />
                    <Input.Time formName="time" />
                    <Input.File formName="file" multiple valueFormat={list => `Files Selected: ${list.length}`} />
                    <Input.Range formName="range" min={0} max={255} />*/}
                {/*</Form>*/}
                {/*<div style={{position: 'absolute', bottom: 0, height: 50, width: 50, backgroundColor: 'cyan'}} />*/}
                {/*<Input.File*/}
                {/*<Card>
                    <Pinboard height={50}>
                        <Icon name="ion-happy" size={40} pinInfo={{top: 0, left: 10, width: 40, height: 50}} />
                        <div pinInfo={{top: 0, left: 55}}>User Name Thing?</div>
                        <div pinInfo={{top: 30, left: 55, fontSize: 11}}>User information about positiond and stuff</div>
                        <div pinInfo={{top: 5, left: 5, width: 10, height: 10, backgroundColor: 'cyan'}} />
                    </Pinboard>
                </Card>*/}
            </Screen>
        );
    }
});

// App.start(
//     <Route component={Wrapper}>
//         <Route path="/" component={Main} />
//         <Route path="/test" component={Main} />
//     </Route>
// );
window.qsel = (...args) => document.querySelector(...args);
createStyles();
(async () => {
    await deviceReady;
    ReactDOM.render(
        <Main />,
        qsel("#app-container")
    );
})();

window.testFunc = () => {
    console.time('style gen');
    const head = document.querySelector("head");
    const styles = head.querySelectorAll("style");
    for (const tag of styles) {
        head.removeChild(tag);
    }
    createStyles();
    console.timeEnd('style gen');
};

// const token = ajax.cancelToken();
// (async () => {
//     console.log(await ajax("http://axel669.net/echo/index2.php", {post: [1, 2, 3, 4], token}));
// })();
// chrono.trigger(2000, token.cancel);

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

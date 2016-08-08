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
import Combobox from 'lib-source/uiv2/Combobox';
import Option from 'lib-source/uiv2/Option';
import Spinner from 'lib-source/uiv2/Spinner';
import Radio from 'lib-source/uiv2/Radio';

import DialogComponent from "lib-source/uiv2/dialog";
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
const url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";
*/

const InputBase = ({label, ...props}) => (
    <div>
        <div>{label}</div>
        <input {...props} />
    </div>
);

const Input = {
    Text: props => {
        return <InputBase {...props} />;
    }
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
            index: -1
        };
    },
    render() {
        const {disabled} = this.state;

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
                </Combobox>*/}
                {/*<Radio selectedIndex={this.state.index} onChange={index => this.setState({index})} title="Test">
                    {Array.from(range({
                        count: 10,
                        map: n => <Option value={n ** n}>{n}</Option>
                    }))}
                    <Option><Image source={url} height={30} /></Option>
                </Radio>
                <Button text="Test" />*/}
                <Input.Text label="test" value="wat" onChange={cblog} />
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

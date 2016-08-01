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

const cssNoMeasurement = new Set([
    "animationIterationCount",
    "boxFlex",
    "boxFlexGroup",
    "boxOrdinalGroup",
    "columnCount",
    "fillOpacity",
    "flex",
    "flexGrow",
    "flexPositive",
    "flexShrink",
    "flexNegative",
    "flexOrder",
    "fontWeight",
    "lineClamp",
    "lineHeight",
    "opacity",
    "order",
    "orphans",
    "stopOpacity",
    "strokeDashoffset",
    "strokeOpacity",
    "strokeWidth",
    "tabSize",
    "widows",
    "zIndex",
    "zoom"
]);
const cssPrefixNames = new Set([
    'transform',
    'box-shadow',
    'transition'
]);
const cssPrefixes = ['-webkit-', '-moz-', '-ms-', '-o-', ''];

const getCSSValue = (prop, value) => {
    if (typeof value === 'function') {
        value = value();
    }
    if (Array.isArray(value) === true) {
        return value.map(getCSSValue);
    }
    if (typeof value === 'number' && cssNoMeasurement.has(prop) === false) {
        value += "px";
    }
    return [value];
};
const processSelector = (componentName, styleName, selector) => {
    const parts = selector.split(/\s+/);
    const realParts = parts.map(part => {
        part = part.replace(":active", ".cor-touch-active");
        return part.split('/').map(part => {
            switch (true) {
                case part.charAt(0) === "$":
                    return part.slice(1);
                case /^[a-z]/i.test(part) === true:
                    return `.${componentName}-${styleName}-${part}`;
                default:
                    return part;
            }
        }).join('.');
    });
    return realParts.join(' ');
};
const processDef = (cssLines, selector, defs) => {
    cssLines = [...cssLines, `${selector} {`];
    for (const [cssProp, cssValue] of Object.entries(defs)) {
        const value = getCSSValue(cssProp, cssValue);
        const prop = cssProp.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        if (cssPrefixNames.has(cssProp) === true) {
            cssLines = [
                ...cssLines,
                ...cssPrefixes.map(prefix => `\t${prefix}${prop}: ${value[0]};`)
            ];
        } else {
            cssLines = [
                ...cssLines,
                ...value.map(value => `\t${prop}: ${value};`)
            ];
        }
    }
    cssLines = [...cssLines, "}"];
    return cssLines;
    // cssLines.push("}");
};

const componentStyles = {};
const createProp = (object, propName, defaultValue) => {
    if (object.hasOwnProperty(propName) === false) {
        object[propName] = defaultValue;
    }
    return object[propName];
};
const defineComponentStyle = (component, styleName, styles) =>
    createProp(
        createProp(componentStyles, component, {}),
        styleName,
        styles
    );

let themeValues;
const _Theme = {
    define(theme) {
        themeValues = theme;
    },
    get variable() {
        return themeValues;
    }
};


_Theme.define({
    core: {
        button: {
            textColor: "black"
        }
    }
});
defineComponentStyle(
    'button',
    'core',
    {
        "wrapper": {
            position: 'relative',
            textAlign: 'center',
            fontSize: 18,
            margin: 4,
            overflow: 'hidden',
            zIndex: "+0",
            backgroundColor: 'transparent',
            color: () => _Theme.variable.core.button.textColor,
            fontWeight: 'bold',
            whiteSpace: 'pre',
            display: 'inline-block',
            borderRadius: 3
        },
        "wrapper:focus": {
            outline: 'none',
        },
        "wrapper > text": {
            width: '100%',
            padding: 5,
            paddingLeft: 15,
            paddingRight: 15
        },
        "wrapper > overlay": {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transition: 'background-color 100ms linear'
        },
        ".core-desktop overlay:hover": {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        },
        "wrapper:active > overlay": {
            backgroundColor: 'rgba(0, 0, 0, 0.15)'
        }
    }
);
defineComponentStyle(
    'ripple',
    'core',
    {
        "wrapper": {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
        "dot": {
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            animationName: 'animation',
            animationDuration: '700ms',
            borderRadius: '50%',
            paddingBottom: '100%'
        },
        "!animate:dot": {
            "0%": {
                width: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)'
            },
            "70%": {
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
            },
            "100%": {
                width: '250%',
                backgroundColor: 'rgba(0, 0, 0, 0.0)'
            }
        }
    }
);

const createStyles = () => {
    const head = document.querySelector("head");

    //  Iterate over the components that have styles defined
    for (const [componentName, styles] of Object.entries(componentStyles)) {
        //  Iterate over the various named styles for the given component
        for (const [styleName, styleDefs] of Object.entries(styles)) {
            let cssLines = [];
            //  Grab all the individual groups of styles defined in the named style
            for (const [descriptor, defs] of Object.entries(styleDefs)) {
                if (descriptor.startsWith("!") === true) {
                    // console.log("animation?", descriptor, defs);
                    // continue;
                    cssLines.push("@keyframes animation {");
                    for (const [selector, def] of Object.entries(defs)) {
                        cssLines = processDef(cssLines, selector, def);
                    }
                    // cssLines = processDef(cssLines, "from", defs.from);
                    // cssLines = processDef(cssLines, "to", defs.to);
                    cssLines.push("}");
                } else {
                    const selector = processSelector(componentName, styleName, descriptor);
                    cssLines = processDef(cssLines, selector, defs);
                }
            }
            const styleTag = document.createElement("style");
            styleTag.setAttribute("type", "text/css");
            styleTag.setAttribute("data-name", `${componentName}/${styleName}`);
            styleTag.innerHTML = cssLines.join('\n');
            head.appendChild(styleTag);
            // console.log(styleTag);
        }
    }
};

class Ripple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: []};
    }

    touch = (evt) => {
        const touch = evt.changedTouches[0];
        const {top, left, bottom, right} = this.refs.wrapper.getBoundingClientRect();
        let {list} = this.state;

        chrono.trigger(1000, () => this.setState({list: this.state.list.slice(1)}));
        list = [...list, {x: touch.clientX - left, y: touch.clientY - top, id: Date.now()}];
        // console.log(list);
        this.setState({list});
    }

    render = () => {
        const {list} = this.state;

        return (
            <div className="ripple-core-wrapper" onTouchStart={this.touch} ref="wrapper">
                {list.map(({id, x, y}) => <div key={id} style={{top: y, left: x}} className="ripple-core-dot" />)}
            </div>
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
                {/*<UI.Form itemContainer={UI.Card} submitText="Woah">
                    {factotum.range(3,
                        n => <UI.TextInput formName={`input${n}`} label={`input ${n}`} />
                    )}
                </UI.Form>*/}
                <UI.Touchable component="div" tabIndex={-1} className="button-core-wrapper" style={{display: 'block'}}>
                    {/*<div className="button-core-overlay" />*/}
                    <Ripple />
                    <div className="button-core-text">Testing</div>
                    {/*<CenterContent className={Style.getClassName("core/button:text")} style={textStyle} height={height}>{text}</CenterContent>*/}
                </UI.Touchable>
                {/*<UI.Touchable component="div" tabIndex="-1" id="wat" onTap={evt => evt.target.focus()}>Test</UI.Touchable>*/}
                {/*<FormattedInput />*/}
                <UI.ProgressBar progress={0.35} height={30} />
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

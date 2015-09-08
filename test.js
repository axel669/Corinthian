import {parser} from "calc-lang.js";
import "complex.js";

window.parser = parser;

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
    HSplit,
    Touchable
} = UI;
let {Route, RouteHandler} = ReactRouter;
let Demo;
let Demo2;
let imgSource;

imgSource = "http://7-themes.com/data_images/out/76/7031783-vivi-ornitier-final-fantasy.jpg";
// imgSource = "https://coedbc.files.wordpress.com/2014/09/screen-shot-2014-09-25-at-1-34-30-pm.png?w=640";
// imgSource = "adriana.jpg";

let functions = {
    trig: {
        sin: complex.sin,
        cos: complex.cos,
        tan: complex.tan,
        sinh: complex.sinh,
        cosh: complex.cosh,
        tanh: complex.tanh
    },
    general: {
        round: complex.round,
        floor: complex.floor,
        ceil: complex.ceil,
        exp: complex.exp,
        ln: complex.ln,
        log: complex.log
    }
};

functions.call = {
    ...functions.trig,
    ...functions.general
};

let operator = op => {
    return (node, vars) => {
        let {left, right} = node;

        if (left === null) {
            if (typeof right !== 'number') {
                right = maths.eval(right, vars);
            }
            return operator.unary[op](right);
        }

        if (typeof left !== 'number') {
            left = maths.eval(left, vars);
        }

        if (typeof right !== 'number') {
            right = maths.eval(right, vars);
        }

        return operator.binary[op](left, right);
    };
};
operator.binary = {
    "+": (l, r) => complex.add(l, r),
    "-": (l, r) => complex.sub(l, r),
    "/": (l, r) => complex.div(l, r),
    "*": (l, r) => complex.mul(l, r),
    "%": (l, r) => complex.mod(l, r),
    "^": (l, r) => complex.pow(l, r),
    "<": (l, r) => l.real < r.real,
    ">": (l, r) => l.real > r.real
};
operator.unary = {
    "-": operand => complex.neg(operand)
};
let maths = {
    op: {
        "+": operator("+"),
        '-': operator('-'),
        "*": operator("*"),
        '/': operator('/'),
        "%": operator("%"),
        "^": operator("^"),
        "<": operator("<"),
        ">": operator(">")
    },
    eval (tree, vars) {
        if (tree.hasOwnProperty('isComplex') === true) {
            return tree;
        }

        if (tree.hasOwnProperty('op') === true) {
            if (tree.op === 'function') {
            }
            if (tree.op === ":=") {
                let value;

                if (tree.right.op === "piece") {
                    value = tree.right;
                } else {
                    vars[tree.left] = maths.eval(tree.right);
                }
                return `${tree.left} has been set.`;
            }
            return maths.op[tree.op](tree, vars);
        }

        if (tree.hasOwnProperty('call') === true) {
            let args = tree.args.map(arg => maths.eval(arg, vars));
            args = args.concat([vars]);
            return functions.call[tree.call].apply(null, args);
        }

        if (tree.hasOwnProperty("variable") === true) {
            return vars[tree.variable];
        }
    }
};

const inputManager = (source = "") => {
    let lines = source.split("\n");
    let pos = [0, 0];

    return {
        exec (cmd) {
            let {command, value} = cmd;
            let [lineNum, col] = pos;
            let line;
            switch (command) {
                case "insert":
                    if (value === '\n') {
                        let newLine;
                        line = lines[lineNum];
                        newLine = line.slice(col);
                        line = line.slice(0, col);
                        lines = [
                            ...lines.slice(0, lineNum),
                            line,
                            newLine,
                            ...lines.slice(lineNum + 1)
                        ];
                        pos = [lineNum + 1, 0];
                        return;
                    }
                    line = lines[lineNum];
                    line = line.slice(0, col) + value + line.slice(col);
                    pos = [lineNum, col + value.length];
                    lines[lineNum] = line;
                    break;
                case 'backspace':
                    if (col === 0) {
                        if (lineNum === 0) {
                            return;
                        }
                        let prev;

                        line = lines[lineNum];
                        prev = lines[lineNum - 1];
                        lines = [
                            ...lines.slice(0, lineNum - 1),
                            prev + line,
                            ...lines.slice(lineNum + 1)
                        ];
                        pos = [lineNum - 1, prev.length];
                    } else {
                        line = lines[lineNum];
                        line = line.slice(0, col - 1) + line.slice(col);
                        lines[lineNum] = line;
                        pos = [lineNum, col - 1];
                    }
                    break;
            }
        },
        get value () {
            return lines;
        },
        get cursor () {
            return pos;
        },
        set cursor (newPos) {
            pos = newPos;
        }
    };
};

const Textarea = React.createClass({
    moveCursor (line, col, evt) {
        this.props.moveCursor(line, col);
        evt.cancelBubble = true;
        evt.stopPropagation();
    },
    render () {
        let {lines, cursor} = this.props;
        let [lineNum, col] = cursor;
        return (
            <div style={{fontFamily: "monospace", width: '100%', height: '100%', overflow: 'auto', fontSize: 22}}>
                {lines.map(
                    (line, _line) => {
                        return <Touchable component="div" onTap={this.moveCursor.bind(this, _line, line.length)}>
                            {line.split('').concat('\u00a0').map(
                                (ch, _col) => {
                                    let style;

                                    style = null;
                                    if (_line === lineNum && _col === col) {
                                        style = {
                                            backgroundColor: 'lightgray'
                                        };
                                    }
                                    if (ch === ' ') {
                                        ch = '\u00a0';
                                    }
                                    return <Touchable component="span" onTap={this.moveCursor.bind(this, _line, _col)} style={style}>{ch}</Touchable>;
                                }
                            )}
                        </Touchable>;
                    }
                )}
            </div>
        );
    }
});

const Keyboard = React.createClass({
    getInitialState () {
        this.kb = {
            text: [
                ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
                [":=", ',', "_", "\u03c0", '[', ']']
            ],
            number: [
                ["<", ">", '1', '2', '3', '-', "+"],
                ['≤', '≥', '4', '5', '6', '/', "*"],
                ['(', ')', '7', '8', '9', '^', '%'],
                [":=", "|", ',', '0', '.', '[', ']']
            ],
            symbols: [
                ['\u2308', '\u2309'],
                [null],
                [null],
                [null]
            ]
        };
        return {kb: 'text'};
    },
    onKeyDown (key) {
        this.props.onInput({command: 'insert', value: key});
    },
    render () {
        let {kb: kbName} = this.state;
        let style;
        let kb;
        let kbNames;

        kb = this.kb[kbName];
        kbNames = Object.keys(this.kb);

        style = {
            width: 'calc(100% - 2px)',
            height: 'calc(100% - 2px)',
            lineHeight: '38px',
            minHeight: 0,
            borderRadius: 2,
            border: '1px solid black',
            margin: 1
        };

        return (
            <div style={{height: 248}}>
                <Flexbox height={40} cols={kbNames.length}>
                    {kbNames.map(name => <Button text={name} color={name === kbName ? 'cyan' : null} onTap={() => this.setState({kb: name})} />)}
                </Flexbox>
                {kb.map(
                    (kbRow, index) => {
                        return (
                            <Grid key={index} rows={1} cols={kbRow.length} height={40}>
                                {kbRow.map((ch, index) => {
                                    if (ch === null) {
                                        return <span />;
                                    }
                                    return <Button key={index} text={ch} style={style} onTap={this.onKeyDown.bind(this, ch)} />
                                })}
                            </Grid>
                        );
                    }
                )}
                <HSplit bounds={[75, -75]} height={40}>
                    <Button style={style} text={"\u21b5"} onTap={() => this.onKeyDown('\n')} />
                    <Button style={style} text="Space" onTap={() => this.onKeyDown(" ")} />
                    <Button style={{...style, fontFamily: "Ionicons"}} text={ionic["ion-backspace-outline"]} onTap={() => this.props.onInput({command: 'backspace'})} />
                </HSplit>
            </div>
        );
    }
});

Demo = React.createClass({
    mixins: [
        ReactRouter.Navigation,
        ReactRouter.State
    ],
    getInitialState () {
        this.input = inputManager();
        return {
            lines: this.input.value,
            cursor: this.input.cursor,
            result: null,
            vars: {}
        };
    },
    maths () {
        let {vars} = this.state;
        let input;
        let tree;
        let value;

        input = this.input.value.join('\n');
        tree = parser.parse(input);
        value = maths.eval(tree, vars);

        if (value.isComplex === true) {
            let {real, imag} = value;
            real = parseFloat(real.toPrecision(14));
            imag = parseFloat(imag.toPrecision(14));

            switch (true) {
                case (imag === 0):
                    value = real;
                    break;

                case (real === 0 && imag !== 0):
                    if (imag === 1) {
                        imag = '';
                    }
                    value = `${imag}i`;
                    break;

                case (real !== 0 && imag !== 0):
                    if (imag === 1) {
                        imag = '';
                    }
                    value = `${real} + ${imag}i`;
                    break;
            }
        }

        value = value.toString();

        this.input = new inputManager();

        this.setState({
            lines: this.input.value,
            cursor: this.input.cursor,
            result: value
        });
    },
    textCommand (cmd) {
        this.input.exec(cmd);
        this.setState({
            lines: this.input.value,
            cursor: this.input.cursor
        });
    },
    moveCursor (line, col) {
        this.input.cursor = [line, col];
        this.setState({cursor: this.input.cursor});
    },
    render () {
        return (
            <Screen title="Test">
                <VSplit bounds={[-340, -290, -248]}>
                    <Textarea lines={this.state.lines} cursor={this.state.cursor} moveCursor={this.moveCursor} />
                    <div style={{width: '100%', height: '100%', backgroundColor: '#EEE', color: 'black', fontSize: 20, fontFamily: 'monospace'}}>{this.state.result}</div>
                    <RaisedButton onTap={this.maths} text="Calculate" />
                    <Keyboard onInput={this.textCommand} />
                </VSplit>
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
    <Route>
        <Route path="/" handler={Demo} />
        <Route path="/test/:id" handler={Demo2} />
    </Route>
);

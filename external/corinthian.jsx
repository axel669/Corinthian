var App;
var Cor;
var CorUtil;
var Settings;

React.initializeTouchEvents(true);

CorUtil = (function () {
    'use strict';

    return Object.freeze({
        assign: function (base, ...sources) {
            sources.forEach(source => {
                Object.keys(source).forEach(key => {
                    base[key] = source[key];
                });
            });

            return base;
        }
    });
})();

App = (function () {
    "use strict";

    //  variables
    var appOptions;
    var componentStack;
    var currentElem;
    var destroyInfo;
    var initInfo;
    var mainComponent;
    var screenOnBack;
    var screens;

    //  Components
    var AppContainer;
    var MainView;
    var ScreenHolder;

    componentStack = [];
    currentElem = null;
    mainComponent = null;
    screens = {};
    appOptions = {
        showStatusBar: false
    };
    screenOnBack = function () { return false; };

    AppContainer = React.createClass({
        getInitialState: function () {
            var rect = {width: screen.width, height: screen.height};

            return {
                width: rect.width,
                height: rect.height,
                CurrentScreen: null,
                currentKey: 0,
                direction: 'forward'
            };
        },
        render: function () {
            var {width, height, CurrentScreen, currentKey} = this.state;
            var {direction} = this.state;

            // var tw = width, th = height;
            // width = Math.max(tw, th);
            // height = Math.min(tw, th);

            var ReactTransitionGroup;

            ReactTransitionGroup = React.addons.CSSTransitionGroup;

            // if (CurrentScreen !== null && currentElem === null) {
            //     currentElem = <ScreenHolder key={currentKey} CurrentScreen={CurrentScreen} />;
            // }
            currentElem = CurrentScreen === null ? null : <ScreenHolder key={currentKey} stateKey={currentKey} width={width} height={height} CurrentScreen={CurrentScreen} />;

            if (direction === 'forward' && componentStack.length === 0) {
                direction = 'initial';
            }

            return (
                <div style={{position: "absolute", top: 0, left: 0, width, height}}>
                    <ReactTransitionGroup transitionName={"screen-" + direction} component="div" style={{width: "100%", height: "100%"}}>
                        {currentElem}
                    </ReactTransitionGroup>
                </div>
            );
        }
    });
    ScreenHolder = React.createClass({
        render: function () {
            var {CurrentScreen, width, height, stateKey} = this.props;

            return <div style={{width, height}}><CurrentScreen ref="currentScreen" stateKey={stateKey} /></div>;
        }
    });

    MainView = null;
    document.addEventListener(
        "deviceready",
        function () {
            MainView = React.render(<AppContainer />, document.querySelector("#AppContainer"));
            setTimeout(
                () => {
                    if (appOptions.showStatusBar === false) {
                        StatusBar.hide();
                    }
                    App.switchScreen(mainComponent);
                },
                5
            );
        }
    );
    document.addEventListener(
        "backbutton",
        function () {
            if (screenOnBack() === true) {
                return;
            }
            if (componentStack.length > 1) {
                App.switchBack();
            } else {
                navigator.app.exitApp();
            }
        }
    );

    fc.util.setImmediate(
        function () {
            MainView = React.render(<AppContainer />, document.querySelector("#AppContainer"));
            setTimeout(
                () => {
                    if (appOptions.showStatusBar === false) {
                        StatusBar.hide();
                    }
                    App.switchScreen(mainComponent);
                },
                5
            );
        }
    );

    window.addEventListener(
        "orientationchange",
        function () {
            if (MainView === null) {
                return;
            }
            setTimeout(
                () => {
                    var rect = {width: screen.width, height: screen.height};
                    MainView.setState({
                        width: rect.width,
                        height: rect.height
                    });
                },
                5
            );
        }
    );

    var appData = {};
    var savedState = {};

    return {
        switchScreen: function (NextScreen, info) {
            if (currentElem !== null) {
                componentStack.push([currentElem, MainView.state.CurrentScreen, MainView.state.currentKey, currentElem.state]);
                currentElem = null;
                initInfo = info;
                destroyInfo = undefined;
            }
            MainView.setState({
                CurrentScreen: NextScreen,
                currentKey: Date.now(),
                direction: 'forward'
            });
        },
        switchBack: function (info) {
            var [elem, scr, key] = componentStack.pop();
            currentElem = elem;
            destroyInfo = info;
            initInfo = undefined;
            MainView.setState({
                direction: 'backward',
                currentKey: key,
                CurrentScreen: scr
            });
        },
        get data() {return appData;},
        get initInfo() {return initInfo;},
        get destroyInfo() {return destroyInfo;},
        // privateData: function (key) {
        //     return {};
        // },
        updateScreen: function () {
            MainView.setState({});
        },
        debug: function () {
            console.log('stack:', componentStack);
            console.log('current:', currentElem);
        },
        createScreen: function (name, options) {
            var {componentDidMount, componentWillUnmount, system} = options;
            system = system || {};
            var {onDestroy, onBackButton} = system;

            componentDidMount = componentDidMount || function () {};
            componentWillUnmount = componentWillUnmount || function () {};
            onDestroy = onDestroy || function () {};
            onBackButton = onBackButton || function () { return false; };

            options.componentDidMount = function () {
                var state = savedState[this.props.stateKey];

                if (state !== undefined) {
                    this.setState(state);
                    delete savedState[this.props.stateKey];
                }
                screenOnBack = onBackButton.bind(this);

                componentDidMount.call(this);
            };
            options.componentWillUnmount = function () {
                savedState[this.props.stateKey] = this.state;

                componentWillUnmount.call(this);
                onDestroy.call(this);
            };

            screens[name] = React.createClass(options);
        },
        main: function (comp) {
            if (mainComponent === null) {
                mainComponent = comp;
            }
        },
        get screen() {
            return screens;
        },
        setOption: function (option, value) {
            appOptions[option] = value;
        }
    };
})();

Settings = (function () {
    "use strict";

    return Object.freeze({
        get: function (setting, defaultValue) {
            if (localStorage.hasOwnProperty(setting) === true) {
                return JSON.parse(localStorage[setting]);
            }
            return defaultValue;
        },
        set: function (setting, value) {
            localStorage[setting] = JSON.stringify(value);
        }
    });
})();

Cor = (function () {
    "use strict";

    //  variables
    var loadedTime;

    //  Components
    var AbsContainer;
    var Button;
    var Checkbox;
    var Card;
    var Flexbox;
    var FlexboxItem;
    var Grid;
    var GridItem;
    var Overlay;
    var RadioGroup;
    var RadioItem;
    var Range;
    var Screen;
    var ScrollContainer;
    var Select;
    var SelectOption;
    var SelectPopup;
    var Switch;
    var Tappable;
    var TextInput;

    loadedTime = Date.now();

    // var hammerTime = new Hammer(document.body, {domEvents: true});

    Tappable = React.createClass({
        getDefaultProps: function () {
            return {
                onTap: () => {},
                onTouchStart: () => {},
                onTouchEnd: () => {}
            };
        },
        touchStart: function (evt) {
            this.getDOMNode().classList.add("material-touch-active");

            this.props.onTouchStart(evt);
        },
        touchEnd: function (evt) {
            this.getDOMNode().classList.remove("material-touch-active");

            this.props.onTouchEnd(evt);
        },
        componentDidMount: function () {
            var node;

            node = this.getDOMNode();

            node.addEventListener(
                "tap",
                evt => {
                    this.props.onTap.call(this, evt);
                }
            );
        },
        render: function () {
            var Component = this.props.component;

            return <Component {...this.props} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd} onTouchCancel={this.touchEnd}>{this.props.children}</Component>;
        }
    });

    Button = React.createClass({
        getDefaultProps: function () {
            return {
                color: "#2FB1DF",
                textColor: 'white',
                hasShadow: true,
                onTap: () => {}
            };
        },
        render: function () {
            var className;
            var style;

            className = ("material-button " + (this.props.className || "")).trim();
            style = Object.keys(this.props.style || {}).reduce((newStyle, name) => {newStyle[name] = this.props.style[name]; return newStyle;}, {});
            style.backgroundColor = this.props.color;
            style.color = this.props.textColor;
            style.WebkitBoxShadow = this.props.hasShadow === true ? "0px 1px 3px rgba(0, 0, 0, 0.35)" : null;

            return <Tappable component="div" className={className} style={style} onTap={this.props.onTap}><div className="material-button-overlay" />{this.props.text}</Tappable>;
        }
    });

    Checkbox = React.createClass({
        getInitialState: function () {
            return {checked: this.props.checked || false};
        },
        getDefaultProps: function () {
            return {
                onChange: () => {},
                checkColor: 'black'
            };
        },
        toggleChecked: function () {
            var {checked} = this.props;
            checked = !checked;
            this.props.onChange(checked);
        },
        render: function () {
            return (
                <Tappable component="div" onTap={this.toggleChecked} className="material-checkbox" style={this.props.style || {}}>
                    <div className="material-icon-area" style={{color: this.props.checkColor}}>{this.props.checked === true ? "\uf374" : "\uf372"}</div>
                    {this.props.text}
                </Tappable>
            );
        }
    });

    RadioGroup = React.createClass({
        getInitialState: function () {
            return {selectedIndex: this.props.defaultIndex || 0};
        },
        getDefaultProps: function () {
            return {onChange: () => {}};
        },
        toggleChecked: function (index, value) {
            var selectedIndex;

            if (this.props.selectedIndex === index) {
                return;
            }

            selectedIndex = index;
            // this.setState({selectedIndex});
            this.props.onChange(value, selectedIndex);
        },
        render: function () {
            var children;

            children = React.Children.map(
                this.props.children,
                (child, i) => {
                    return React.addons.cloneWithProps(
                        child,
                        {
                            select: this.toggleChecked.bind(this, i, child.props.value || i),
                            checked: i === this.props.selectedIndex,
                            radioColor: this.props.radioColor || "black"
                        }
                    );
                }
            );

            return (
                <div>
                    {children}
                </div>
            );
        }
    });

    RadioItem = React.createClass({
        getInitialState: function () {
            return {
                checked: false
            };
        },
        render: function () {
            return (
                <Tappable component="div" onTap={this.props.select} className="material-radio-item" style={this.props.style || {}}>
                    <div className="material-icon-area" style={{color: this.props.radioColor}}>{this.props.checked === true ? "\uf3a7" : "\uf3a6"}</div>
                    {this.props.children}
                </Tappable>
            );
        }
    });

    Card = React.createClass({
        render: function () {
            return (
                <div className="material-card" style={this.props.style || {}}>
                    {this.props.children}
                </div>
            );
        }
    });

    Range = React.createClass({
        getDefaultProps: function () {
            return {
                min: 0,
                max: 100,
                step: 1,
                onChange: () => {}
            };
        },
        updateValue: function (evt) {
            var value = parseInt(evt.target.value);
            if (this.props.value !== value) {
                this.props.onChange(value);
            }
        },
        render: function () {
            var {value} = this.props;
            var {min, max, step, color} = this.props;
            var range;

            range = this.props.max - this.props.min;

            if (color === undefined) {
                color = '#2FB1DF';
            }

            return (
                <div className="material-range">
                    <div className="material-range-container">
                        <div style={{width: '100%', backgroundColor: "#ccc"}}
                            className="material-range-background" />
                        <div
                            style={{
                                width: (((value - min) / range) * 100) + '%',
                                backgroundColor: color
                            }}
                            className="material-range-background" />
                        <div
                            style={{left: (((value - min) / range) * 100) + '%'}}
                            className="material-range-slider" />
                        <input
                            type="range"
                            min={min}
                            max={max}
                            step={step}
                            className="material-range-input"
                            onChange={this.updateValue}
                            value={this.props.value} />
                    </div>
                </div>
            );
        }
    });

    Switch = React.createClass({
        getDefaultProps: function () {
            return {
                defaultState: false,
                onChange: () => {},
                color: '#239FCB',
                textColor: 'white'
            };
        },
        toggle: function () {
            var {on} = this.props;

            on = !on;
            this.props.onChange(on);
        },
        render: function () {
            var displayStyle;
            var statusText;
            var styleName;

            if (this.props.on === true) {
                statusText = "ON";
                styleName = "material-switch-on";
                displayStyle = {
                    backgroundColor: this.props.color,
                    color: this.props.textColor
                };
            } else {
                statusText = "OFF";
                styleName = "material-switch-off";
                displayStyle = {
                    backgroundColor: 'gray',
                    color: 'white'
                };
            }
            return (
                <div className="material-switch">
                    <div style={{marginRight: 100}}>{this.props.text}</div>
                    <Tappable component="div" className="material-switch-toggle" onTap={this.toggle}>
                        <div className={styleName} style={displayStyle}>
                            {statusText}
                        </div>
                    </Tappable>
                </div>
            );
        }
    });

    var scrollContainers = {};
    ScrollContainer = React.createClass({
        componentDidMount: function () {
            var node;
            var scrollInfo;

            node = this.getDOMNode();
            scrollInfo = (scrollContainers.hasOwnProperty(this._rootNodeID) === true) ? scrollContainers[this._rootNodeID] : {scrollX: 0, scrollY: 0};

            node.scrollLeft = scrollInfo.scrollX;
            node.scrollTop = scrollInfo.scrollY;

            delete scrollContainers[this._rootNodeID];
            // console.log(this.state, node);
        },
        componentWillUnmount: function () {
            var node = this.getDOMNode();

            scrollContainers[this._rootNodeID] = {
                scrollX: node.scrollLeft,
                scrollY: node.scrollTop
            };
        },
        render: function () {
            return (
                <div className="material-scrollable material-container" style={this.props.style || {}}>
                    {this.props.children}
                </div>
            );
        }
    });

    TextInput = React.createClass({
        getDefaultProps: function () {
            return {
                label: null,
                onChange: () => {},
                defaultValue: ""
            };
        },
        update: function (evt) {
            var {value} = evt.target;
            // this.setState({value});
            this.props.onChange(value);
        },
        focus: function () {
            this.refs.input.getDOMNode().focus();
        },
        render: function () {
            var label = null;

            if (this.props.label !== null) {
                label = <div>{this.props.label}</div>;
            }

            return (
                <Tappable component="div" onTap={this.focus} className="material-input">
                    {label}
                    <input type="text" ref="input" placeholder={this.props.placeholder} className="material-input-elem" value={this.props.value} onChange={this.update} />
                </Tappable>
            );
        }
    });

    Select = React.createClass({
        getDefaultProps: function () {
            return {
                title: "",
                onChange: () => {}
            };
        },
        popup: function () {
            if (this.props.active === false) {
                return;
            }
            Overlay.show(
                <SelectPopup onChange={this.update} title={this.props.title}>{this.props.children}</SelectPopup>,
                "bottom"
            );
        },
        update: function (index) {
            var values;

            values = [];
            React.Children.forEach(
                this.props.children,
                child => values.push(child.props.value)
            );

            // this.setState({selectedIndex: index});
            this.props.onChange(values[index], index);
        },
        render: function () {
            var children;
            var style;

            children = [];
            React.Children.forEach(
                this.props.children,
                child => {
                    if (child.props.display !== null) {
                        children.push(<SelectOption>{child.props.display}</SelectOption>);
                        return;
                    }
                    children.push(child);
                }
            );
            style = this.props.style || {};
            style.backgroundImage = `url("assets/component-svg/select-arrow.svg?time=${loadedTime}")`;

            return (
                <Tappable component="div" onTap={this.popup} className="material-select" style={style}>
                    {children[this.props.selectedIndex]}
                </Tappable>
            );
        }
    });

    SelectOption = React.createClass({
        getDefaultProps: function () {
            return {display: null};
        },
        render: function () {
            return (
                <Tappable component="div" className="material-select-option" onTap={this.props.onTap}>
                    {this.props.children}
                </Tappable>
            );
        }
    });

    SelectPopup = React.createClass({
        optionSelected: function (index, evt) {
            this.props.closeOverlay(evt);
            this.props.onChange(index);
        },
        render: function () {
            var children;

            children = React.Children.map(
                this.props.children,
                (child, index) => {
                    var newChild;

                    newChild = React.addons.cloneWithProps(
                        child,
                        {
                            onTap: this.optionSelected.bind(this, index)
                        }
                    );

                    return (
                        <div style={{borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', marginTop: -1}}>
                            {newChild}
                        </div>
                    );
                }
            );

            return (
                <div>
                    <div style={{height: 50, borderBottom: "2px solid gray", position: 'absolute', top: 0, left: 0, right: 0}}>
                        <div style={{lineHeight: '50px', paddingLeft: 5, fontWeight: 'bold'}}>
                            {this.props.title}
                        </div>
                        <AbsContainer top={0} right={0} width={100}>
                            <Button text="Cancel" onTap={this.props.closeOverlay} color="transparent" textColor="black" hasShadow={false} />
                        </AbsContainer>
                    </div>
                    <div style={{position: 'absolute', top: 50, bottom: 0, left: 0, right: 0}} className="material-scrollable">
                        {children}
                    </div>
                </div>
            );
        }
    });

    var overlayStack = [];
    Overlay = React.createClass({
        statics: {
            show: function (child, style) {
                var called;
                var overlay;
                var wrapper;

                wrapper = document.createElement("div");
                called = false;
                child.props.closeOverlay = function (evt) {
                    if (called === true) {
                        return;
                    }
                    called = true;
                    overlay.close(evt);
                };

                document.body.appendChild(wrapper);
                overlayStack.push(
                    React.render(<Overlay style={style || "normal"} wrapper={wrapper} child={child} />, wrapper)
                );
                overlay = overlayStack[overlayStack.length - 1];
            }
        },
        getInitialState: function () {
            return {mounted: false};
        },
        stopTap: function (evt) {
            evt.stopPropagation();
        },
        close: function (evt) {
            evt.preventDefault();
            overlayStack = fc.remove(overlayStack, overlayStack.indexOf(this));
            document.body.removeChild(this.props.wrapper);
        },
        componentDidMount: function () {
            this.setState({mounted: true});
        },
        render: function () {
            var animated;
            var ReactTransitionGroup;

            ReactTransitionGroup = React.addons.CSSTransitionGroup;
            animated = null;
            if (this.state.mounted === true) {
                animated = (
                    <Tappable component="div" key={Date.now()} className={"material-scrollable material-overlay-content material-overlay-content-" + this.props.style} onTap={this.stopTap}>
                        {this.props.child}
                    </Tappable>
                );
            }

            return (
                <Tappable component="div" className="material-overlay" onTap={this.close}>
                    <ReactTransitionGroup transitionName={`overlay-${this.props.style}`} component="div">
                        {animated}
                    </ReactTransitionGroup>
                </Tappable>
            );
        }
    });

    AbsContainer = React.createClass({
        render: function () {
            var style;

            style = {
                ...this.props,
                position: 'absolute'
            };
            // Object.keys(this.props).forEach(key => style[key] = this.props[key]);

            return (
                <div style={style}>
                    {this.props.children}
                </div>
            );
        }
    });

    Grid = React.createClass({
        render: function () {
            var cellHeight;
            var cellWidth;
            var children;
            var colNum;
            var rowNum;
            var rows;

            children = [];
            React.Children.forEach(
                this.props.children,
                child => children.push(child)
            );
            rowNum = this.props.rows;
            colNum = this.props.cols;
            cellWidth = 100 / colNum;
            cellHeight = 100 / rowNum;
            rows = fc.range(
                rowNum,
                rown => {
                    var rowChildren = children.slice(rown * colNum, rown * colNum + colNum);
                    return rowChildren.map((child, col) => <GridItem key={`${rown}:${col}`} row={rown} col={col} width={cellWidth} height={cellHeight}>{child}</GridItem>);
                }
            );

            return (
                <div className="material-grid" style={this.props.style || {}}>
                    {rows.reduce((kidz, row) => {kidz = kidz.concat(row); return kidz;}, [])}
                </div>
            );
        }
    });
    GridItem = React.createClass({
        render: function () {
            var {row, col, width, height} = this.props;
            var style;

            style = {
                left: (col * width) + "%",
                top: (row * height) + "%",
                width: width + "%",
                height: height + "%"
            };

            return (
                <div className="material-grid-item" style={style}>
                    {this.props.children}
                </div>
            );
        }
    });

    Flexbox = React.createClass({
        render: function () {
            var {cols} = this.props;
            var width;

            width = 100 / cols;
            if (isNaN(width) === true) {
                throw new Error("Invalid column value: " + cols);
            }
            width += "%";

            return (
                <div style={this.props.style || {}} className="material-flexbox">
                    {
                        React.Children.map(this.props.children, child => <FlexboxItem width={width}>{child}</FlexboxItem>)
                    }
                </div>
            );
        }
    });
    FlexboxItem = React.createClass({
        render: function () {
            return (
                <div style={{WebkitFlex:`1 0 ${this.props.width}`, position: 'relative'}}>
                    {this.props.children}
                </div>
            );
        }
    });

    Screen = React.createClass({
        getDefaultProps: function () {
            return {
                title: null,
                titleStyle: {},
                footer: null,
                back: false,
                contentStyle: {}
            };
        },
        render: function () {
            var {title, footer, back} = this.props;
            var contentStyle;

            // contentStyle = CorUtil.assign(
            //     {},
            //     this.props.contentStyle,
            //     {
            //         position: 'absolute',
            //         top: (title !== null) ? 50 : 0,
            //         bottom: (footer !== null) ? 30 : 0,
            //         left: 0,
            //         right: 0
            //     }
            // );
            contentStyle = {
                ...this.props.contentStyle,
                position: 'absolute',
                top: (title !== null) ? 50 : 0,
                bottom: (footer !== null) ? 30 : 0,
                left: 0,
                right: 0
            };

            if (back !== false) {
                back = <Tappable component="div" onTap={() => App.switchBack()} className="material-title-back">{"\uf124"}</Tappable>;
            }
            if (title !== null) {
                title = <div className="material-title" style={this.props.titleStyle}>{back}{title}</div>;
            }

            return (
                <div>
                    {title}
                    <div style={contentStyle} name="screen-content">
                        {this.props.children}
                    </div>
                </div>
            );
        }
    });

    return Object.freeze({
        Button,
        Checkbox,
        Card,
        RadioGroup,
        RadioItem,
        Range,
        Switch,
        ScrollContainer,
        TextInput,
        Select,
        SelectOption,
        Overlay,
        Grid,
        Flexbox,
        Screen
    });
})();

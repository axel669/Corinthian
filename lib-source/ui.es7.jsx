import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

React.initializeTouchEvents(true);

let Touchable;

let Button;
let RaisedButton;
let ImageButton;
let cachedImages;
let Image;
let Spinner;

let Checkbox;
let RadioGroup;
let RadioItem;
let TextInput;
let Switch;
let RangeInput;
let Combobox;
let Option;

let Card;
let Screen;

let scrollContainers;
let ScrollContainer;

let Grid;
let GridItem;
let Flexbox;
let FlexboxItem;
let sum;
let VSplit;
let HSplit;

Touchable = React.createClass({
    getDefaultProps () {
        return {
            onTap () {},
            onTouchStart () {},
            onTouchEnd () {}
        };
    },
    touchStart (evt) {
        this.getDOMNode().classList.add("material-touch-active");
        this.props.onTouchStart(evt);
    },
    touchEnd (evt) {
        this.getDOMNode().classList.remove("material-touch-active");
        this.props.onTouchEnd(evt);
    },
    componentDidMount () {
        this.getDOMNode().addEventListener(
            'tap',
            evt => {
                ::this.props.onTap(evt);
            }
        );
    },
    render () {
        let Component;
        let props;

        Component = this.props.component;
        props = {
            ...this.props,
            onTouchStart: this.touchStart,
            onTouchEnd: this.touchEnd,
            onTouchCancel: this.touchEnd
        };
        props.children = null;
        props.component = null;

        return <Component {...props}>{this.props.children}</Component>;
    }
});

Button = React.createClass({
    getDefaultProps () {
        return {
            onTap () {},
            color: 'transparent',
            textColor: 'black',
            shadow: false,
            style: {},
            className: ""
        };
    },
    render () {
        let {className, color, textColor, shadow, style, onTap, text} = this.props;

        if (shadow === true) {
            shadow = "0px 1px 3px rgba(0, 0, 0, 0.35)";
        } else {
            shadow = null;
        }

        className = `material-button ${className}`.trim();
        style = {
            ...style,
            backgroundColor: color,
            color: textColor,
            WebkitBoxShadow: shadow
        };

        return (
            <Touchable component="div" className={className} style={style} onTap={onTap}>
                <div className="material-button-overlay" />
                {text}
            </Touchable>
        );
    }
});
RaisedButton = React.createClass({
    statics: {
        propValues: {
            shadow: true,
            color: "#2FB1DF",
            textColor: 'white'
        }
    },
    render () {
        let props;

        props = {
            ...this.props,
            ...RaisedButton.propValues
        };

        return <Button {...props} />;
    }
});
ImageButton = React.createClass({
    getDefaultProps () {
        return {imageSize: "90%"};
    },
    render () {
        let {source, imageSize} = this.props;
        let newProps;
        let style;

        imageSize = parseFloat(imageSize);
        style = {
            position: 'absolute',
            top: `${(100 - imageSize) / 2}%`,
            left: `${(100 - imageSize) / 2}%`,
            width: `${imageSize}%`,
            height: `${imageSize}%`,
            backgroundImage: `url("${source}")`,
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
        };

        newProps = {
            ...this.props,
            text: <div style={style} />
        };

        return <Button {...newProps} />;
    }
});

cachedImages = new Set();
Image = React.createClass({
    getInitialState () {
        return {
            loaded: cachedImages.has(this.props.source)
        };
    },
    getDefaultProps () {
        return {
            width: null,
            height: null,
            maintainAR: true,
            displayType: "fit",
            fillWidth: null,
            fillHeight: null
        };
    },
    imageLoaded (evt) {
        // setTimeout(() => this.setState({loaded: true}), 1000);
        cachedImages.add(this.props.source);
        this.setState({loaded: true});
    },
    render () {
        let {loaded} = this.state;
        let {width, height, maintainAR, displayType, fillHeight, fillWidth, source} = this.props;
        let content;
        let style;

        style = {
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            position: 'relative',
            width,
            height
        };
        if (loaded === false) {
            content = (
                <div style={{position: 'absolute', top: '50%', left: '50%', WebkitTransform: "translate(-50%, -50%)"}}>
                    Loading
                    <img style={{display: "none"}} src={source} onLoad={this.imageLoaded} />
                </div>
            );
        } else {
            content = null;
            style.backgroundImage = `url("${source}")`;
        }

        if (maintainAR === true) {
            if (displayType === 'fit') {
                style.backgroundSize = 'contain';
            }
            if (displayType === 'clip') {
                style.backgroundSize = 'cover';
            }
        } else {
            style.backgroundSize = `${fillWidth} ${fillHeight}`;
        }

        return (
            <div style={style}>
                {content}
            </div>
        );
    }
});

Spinner = React.createClass({
    getDefaultProps () {
        return {
            size: 40,
            color: 'black'
        };
    },
    render () {
        let {size, color} = this.props;
        let style;

        style = {
            width: size,
            height: size,
            lineHeight: `${size}px`,
            fontSize: size * 0.7,
            color
        };

        return <div style={style} className="material-spinner">{icons["ion-load-c"]}</div>;
    }
});

Checkbox = React.createClass({
    getDefaultProps () {
        return {
            onChange () {},
            checkColor: 'black'
        };
    },
    toggle () {
        this.props.onChange(!this.props.checked);
    },
    render () {
        let {checked, style, text, checkColor} = this.props;
        let checkString;

        if (checked === true) {
            checkString = icons["ion-android-checkbox"];
        } else {
            checkString = icons["ion-android-checkbox-outline-blank"];
        }
        // checkString = (checked === true) ? icons["ion-android-checkbox"] : icons["ion-android-checkbox-outline-blank"];
        style = style || null;

        return (
            <Touchable component="div" onTap={this.toggle} className="material-checkbox" style={style}>
                <div className="material-icon-area" style={{color: checkColor}}>{checkString}</div>
                {text}
            </Touchable>
        );
    }
});

RadioGroup = React.createClass({
    getDefaultProps () {
        return {
            onChange () {},
            selectedIndex: 0,
            radioColor: 'black',
            style: {}
        };
    },
    selectItem (index, value) {
        if (index !== this.props.selectedIndex) {
            this.props.onChange(index, value);
        }
    },
    render () {
        let {radioColor, selectedIndex, style} = this.props;
        let children;

        children = React.Children.map(
            this.props.children,
            (child, index) => React.cloneElement(
                child,
                {
                    itemTapped: this.selectItem.bind(this, index, child.props.value),
                    checked: index === selectedIndex,
                    radioColor
                }
            )
        );

        return <div style={style}>{children}</div>;
    }
});
RadioItem = React.createClass({
    render () {
        let {checked, itemTapped, radioColor} = this.props;
        let checkString;

        if (checked === true) {
            checkString = icons["ion-android-radio-button-on"];
        } else {
            checkString = icons["ion-android-radio-button-off"];
        }

        return (
            <Touchable component="div" onTap={itemTapped} className="material-radio-item">
                <div className="material-icon-area" style={{color: radioColor}}>{checkString}</div>
                {this.props.children}
            </Touchable>
        );
    }
});

TextInput = React.createClass({
    getDefaultProps () {
        return {
            label: null,
            value: "",
            icon: null,
            iconStyle: null,
            onChange () {},
        };
    },
    update (evt) {
        this.props.onChange(evt.target.value);
    },
    focus () {
        this.refs.input.getDOMNode().focus();
    },
    render () {
        let {label, placeholder, value, icon, iconStyle} = this.props;
        let style;

        if (label !== null) {
            label = <div>{label}</div>;
        }

        if (icon === null) {
            style = null;
        } else {
            icon = <div className="material-input-icon" style={iconStyle}>{icons[icon]}</div>;
            style = {paddingLeft: 35};
        }

        return (
            <Touchable component="div" onTap={this.focus} className="material-input">
                {label}
                {icon}
                <input type="text" ref="input" style={style} placeholder={placeholder} className="material-input-elem" value={value} onChange={this.update} />
            </Touchable>
        );
    }
});

RangeInput = React.createClass({
    getDefaultProps () {
        return {
            min: 0,
            max: 100,
            step: 1,
            color: '#2FB1DF',
            value: 0,
            onChange () {}
        };
    },
    updateValue (evt) {
        let value;

        value = parseInt(evt.target.value);
        if (this.props.value !== value) {
            this.props.onChange(value);
        }
    },
    render () {
        let {value} = this.props;
        let {min, max, step, color} = this.props;
        let range;

        range = max - min;

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

Combobox = React.createClass({
    getDefaultProps () {
        return {
            selectedIndex: 0,
            onChange () {}
        };
    },
    change (evt) {
        let index;
        let value;

        index = evt.target.selectedIndex;
        value = this.childProps[index].value;

        this.props.onChange(index, value);
    },
    render () {
        let {style, selectedIndex} = this.props;
        let selectChildren;
        let displayedChild;

        selectChildren = [];
        this.childProps = [];
        displayedChild = null;
        React.Children.forEach(
            this.props.children,
            (child, index) => {
                let {props} = child;
                let childText;

                childText = props.text;
                if (typeof childText === 'undefined') {
                    childText = props.value;
                }

                if (index === selectedIndex) {
                    displayedChild = props.children || childText;
                }

                this.childProps.push(props);
                selectChildren.push(<option value={index} key={index}>{childText}</option>);
            }
        );

        return (
            <div className="material-combobox" style={style || null}>
                <div className="material-combobox-display">
                    {displayedChild}
                </div>
                <select className="material-combobox-internal" value={selectedIndex} onChange={this.change}>
                    {selectChildren}
                </select>
            </div>
        );
    }
});
Option = React.createClass({
    render () {
        return null;
    }
});

Switch = React.createClass({
    getDefaultProps () {
        return {
            defaultState: false,
            color: '#239FCB',
            textColor: 'white',
            on: false,
            onChange () {}
        };
    },
    toggle () {
        this.props.onChange(!this.props.on);
    },
    render () {
        let {on, text, textColor, color} = this.props;
        let displayStyle;
        let statusText;
        let styleName;

        if (on === true) {
            statusText = "ON";
            styleName = "material-switch-on";
            displayStyle = {
                backgroundColor: color,
                color: textColor
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
                <div style={{marginRight: 100}}>{text}</div>
                <Touchable component="div" className="material-switch-toggle" onTap={this.toggle}>
                    <div className={styleName} style={displayStyle}>
                        {statusText}
                    </div>
                </Touchable>
            </div>
        );
    }
});


Card = React.createClass({
    render () {
        return <div className="material-card" style={this.props.style || null}>{this.props.children}</div>;
    }
});

scrollContainers = {};
ScrollContainer = React.createClass({
    componentDidMount () {
        let node;
        let scrollInfo;

        node = this.getDOMNode();
        scrollInfo = (scrollContainers.hasOwnProperty(this._rootNodeID) === true) ? scrollContainers[this._rootNodeID] : {scrollX: 0, scrollY: 0};

        node.scrollLeft = scrollInfo.scrollX;
        node.scrollTop = scrollInfo.scrollY;

        delete scrollContainers[this._rootNodeID];
        // console.log(this.state, node);
    },
    componentWillUnmount () {
        let node;

        node = this.getDOMNode();
        scrollContainers[this._rootNodeID] = {
            scrollX: node.scrollLeft,
            scrollY: node.scrollTop
        };
    },
    render () {
        return (
            <div className="material-scrollable material-container" style={this.props.style || {}}>
                {this.props.children}
            </div>
        );
    }
});

Screen = React.createClass({
    getDefaultProps () {
        return {
            title: null,
            titleStyle: {},
            footer: null,
            back: false,
            contentStyle: {},
            scrollable: false
        };
    },
    render () {
        let {title, footer, back, contentStyle, scrollable} = this.props;
        let content;

        contentStyle = {
            ...contentStyle,
            position: 'absolute',
            top: (title !== null) ? 50 : 0,
            bottom: (footer !== null) ? 30 : 0,
            left: 0,
            right: 0
        };

        if (scrollable === false) {
            content = this.props.children;
        } else {
            content = <ScrollContainer>{this.props.children}</ScrollContainer>
        }

        // if (back !== false) {
        //     back = <Touchable component="div" onTap={() => App.switchBack()} className="material-title-back">{"\uf124"}</Touchable>;
        // }
        if (title !== null) {
            title = <div className="material-title" style={this.props.titleStyle}>{back}{title}</div>;
        }

        return (
            <div style={{WebkitTransform: "translateZ(0)", position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
                {title}
                <div style={contentStyle} name="screen-content">
                    {content}
                </div>
            </div>
        );
    }
});

Grid = React.createClass({
    render () {
        let cellHeight;
        let cellWidth;
        let children;
        let colNum;
        let rowNum;
        let rows;
        let style;

        let gridWidth;
        let gridHeight;

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
                let rowChildren;

                rowChildren = children.slice(rown * colNum, rown * colNum + colNum);
                return rowChildren.map((child, col) => <GridItem key={`${rown}:${col}`} row={rown} col={col} width={cellWidth} height={cellHeight}>{child}</GridItem>);
            }
        );

        gridWidth = this.props.width || '100%';
        gridHeight = this.props.height || '100%';

        style = {
            ...(this.props.style || {}),
            width: gridWidth,
            height: gridHeight
        };

        return (
            <div className="material-grid" style={style}>
                {rows.reduce(
                    (kidz, row) => {
                        kidz = kidz.concat(row);
                        return kidz;
                    },
                    []
                )}
            </div>
        );
    }
});
GridItem = React.createClass({
    render () {
        let {row, col, width, height} = this.props;
        let style;

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
    render () {
        let {cols} = this.props;
        let width;

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
    render () {
        return (
            <div style={{WebkitFlex: `1 0 ${this.props.width}`, position: 'relative'}}>
                {this.props.children}
            </div>
        );
    }
});

sum = (args) => {
    return args.reduce((total, n) => total + n, 0);
};
VSplit = React.createClass({
    getDefaultProps () {
        return {
            width: '100%',
            height: '100%',
            splits: null,
            position: null,
            percent: false,
            bounds: null
        }
    },
    render () {
        let {width, height, splits, position, percent, bounds} = this.props;
        let style;
        let children;

        if (position === null) {
            style = {
                position: 'relative',
                width,
                height
            };
        } else {
            if (position.hasOwnProperty('left') === true && position.hasOwnProperty('right') === true) {
                width = null;
            }
            if (position.hasOwnProperty('top') === true && position.hasOwnProperty('bottom') === true) {
                height = null;
            }
            style = {
                position: 'absolute',
                ...position,
                width,
                height
            }
        }

        if (bounds !== null) {
            bounds = bounds.map(
                bound => {
                    let value;

                    value = bound;

                    if (typeof value !== 'string') {
                        value = `${value}px`;
                    }

                    return value;
                }
            );
            bounds.unshift('0px');
            bounds.push('100%');
        }

        children = React.Children.map(
            this.props.children,
            (child, index) => {
                let top;
                let bottom;

                if (bounds === null) {
                    top = sum(splits.slice(0, index));
                    bottom = sum(splits.slice(index + 1));

                    if (percent === true) {
                        top += "%";
                        bottom += "%";
                    }
                } else {
                    [top, bottom] = bounds.slice(index);

                    if (top.charAt(0) === '-') {
                        top = `calc(100% - ${top.slice(1)})`;
                    }
                    if (bottom.charAt(0) !== '-') {
                        bottom = `calc(100% - ${bottom})`;
                    } else {
                        bottom = bottom.slice(1);
                    }
                }

                return <div style={{position: 'absolute', left: 0, right: 0, top, bottom}}>{child}</div>;
            }
        );

        return <div style={style}>{children}</div>;
    }
});

HSplit = React.createClass({
    getDefaultProps () {
        return {
            width: '100%',
            height: '100%',
            splits: null,
            position: null,
            percent: false,
            bounds: null
        }
    },
    render () {
        let {width, height, splits, position, percent, bounds} = this.props;
        let style;
        let children;

        if (position === null) {
            style = {
                position: 'relative',
                width,
                height
            };
        } else {
            if (position.hasOwnProperty('left') === true && position.hasOwnProperty('right') === true) {
                width = null;
            }
            if (position.hasOwnProperty('top') === true && position.hasOwnProperty('bottom') === true) {
                height = null;
            }
            style = {
                position: 'absolute',
                ...position,
                width,
                height
            }
        }

        if (bounds !== null) {
            bounds = bounds.map(
                bound => {
                    let value;

                    value = bound;

                    if (typeof value !== 'string') {
                        value = `${value}px`;
                    }

                    return value;
                }
            );
            bounds.unshift('0px');
            bounds.push('100%');
        }

        children = React.Children.map(
            this.props.children,
            (child, index) => {
                let left;
                let right;

                if (bounds === null) {
                    left = sum(splits.slice(0, index));
                    right = sum(splits.slice(index + 1));

                    if (percent === true) {
                        left += "%";
                        right += "%";
                    }
                } else {
                    [left, right] = bounds.slice(index);

                    if (left.charAt(0) === '-') {
                        left = `calc(100% - ${left.slice(1)})`;
                    }
                    if (right.charAt(0) !== '-') {
                        right = `calc(100% - ${right})`;
                    } else {
                        right = right.slice(1);
                    }
                }

                return <div style={{position: 'absolute', top: 0, bottom: 0, left, right}}>{child}</div>;
            }
        );

        return <div style={style}>{children}</div>;
    }
});

export default {
    Touchable,
    Button,
    RaisedButton,
    ImageButton,

    Image,
    Spinner,

    Checkbox,
    RadioGroup,
    RadioItem,
    TextInput,
    Switch,
    RangeInput,
    Combobox,
    Option,

    Card,
    ScrollContainer,

    Screen,
    Grid,
    Flexbox,
    VSplit,
    HSplit
};

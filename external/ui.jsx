import React from "react";

var UI;

UI = (function () {
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
    var RadioGroup;
    var RadioItem;
    var Range;
    var Screen;
    var ScrollContainer;
    var Select;
    var SelectOption;
    var Switch;
    var TextInput;

    loadedTime = Date.now();

    Button = React.createClass({
        getDefaultProps: function () {
            return {
                color: "#2FB1DF",
                textColor: 'white',
                hasShadow: true,
                onTap: () => {},
                style: {}
            };
        },
        render: function () {
            var className;
            var style;

            className = ("material-button " + (this.props.className || "")).trim();
            style = {
                ...this.props.style,
                backgroundColor: this.props.color,
                color: this.props.textColor,
                WebkitBoxShadow: this.props.hasShadow === true ? "0px 1px 3px rgba(0, 0, 0, 0.35)" : null
            };

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
            this.props.onChange(selectedIndex, value);
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
            style.backgroundImage = `url("assets/style/component-svg/select-arrow.svg?time=${loadedTime}")`;

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
            var style;

            var gridWidth;
            var gridHeight;

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

            gridWidth = this.props.width || '100%';
            gridHeight = this.props.height || '100%';

            style = {
                ...(this.props.style || {}),
                width: gridWidth,
                height: gridHeight
            };

            return (
                <div className="material-grid" style={style}>
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

            contentStyle = {
                ...this.props.contentStyle,
                position: 'absolute',
                top: (title !== null) ? 50 : 0,
                bottom: (footer !== null) ? 30 : 0,
                left: 0,
                right: 0
            };

            // if (back !== false) {
            //     back = <Tappable component="div" onTap={() => App.switchBack()} className="material-title-back">{"\uf124"}</Tappable>;
            // }
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
        Grid,
        Flexbox,
        Screen
    });
})();

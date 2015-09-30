import React from "react";

let VSplit;
let HSplit;
let sum;

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

        style = {
            ...this.props.style,
            ...style
        };

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

        style = {
            ...this.props.style,
            ...style
        };

        return <div style={style}>{children}</div>;
    }
});

export default {
    VSplit,
    HSplit
};

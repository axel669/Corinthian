import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

const sum = (bounds) => {
    let totals;
    let runningTotal;

    totals = [];
    runningTotal = {
        pixel: 0,
        percent: 0
    };

    bounds.forEach(dim => {
        totals.push({...runningTotal});

        if (typeof dim === 'string') {
            runningTotal.percent += parseFloat(dim);
        } else {
            runningTotal.pixel += dim;
        }
    });

    return totals;
};

const Split = ({width, height = null, boundaries = null, dimensions = null, anchor = null}) => {
    if (height === null) {
        throw new Error("Cannot create split without defined height");
    }
    if (boundaries === null && dimensions === null) {
        throw new Error("Must specify either 'dimensions' or 'boundaries'");
    }
    let style;
    let positions;

    style = {
        width,
        height
    };
    if (anchor === null) {
        style = {
            ...style,
            position: 'relative'
        };
    } else {
        style = {
            ...style,
            position: 'absolute',
            ...anchor
        };
    }

    if (boundaries === null) {
        positions = sum(dimensions);
        // console.log(sum(dimensions));
    } else {
        positions = [
            {
                pixel: 0,
                percent: 0
            },
            ...boundaries.map(
                boundary => {
                    if (typeof boundary === 'string') {
                        return {
                            pixel: 0,
                            percent: parseFloat(boundary)
                        };
                    } else {
                        return {
                            pixel: boundary,
                            percent: 0
                        };
                    }
                }
            ),
            {
                pixel: 0,
                percent: 100
            }
        ];
        dimensions = null;
        // dimensions = sum(boundaries.reverse()).reverse();
    }

    // console.log(positions, dimensions);

    return [style, positions, dimensions];
};

Split.Vertical = ({children, ...props}) => {
    const [style, positions, dimensions] = Split(props);

    children = React.Children.toArray(children);
    children = children.map((child, index) => {
        const position = positions[index];
        const nextPosition = positions[index + 1];
        const size = (dimensions === null) ? null : dimensions[index];
        let childStyle;

        if (size !== null) {
            childStyle = {
                top: `${position.percent}%`,
                height: size
            };
        } else {
            let top;
            let bottom;

            if (position.pixel < 0) {
                top = `calc(100% - ${-position.pixel}px)`;
            } else {
                top = `calc(${position.percent}% + ${position.pixel}px)`;
            }

            if (nextPosition.pixel < 0) {
                bottom = -nextPosition.pixel;
            } else {
                bottom = `calc(${100 + nextPosition.percent}% - ${nextPosition.pixel}px)`;
            }
            childStyle = {top, bottom};
        }

        return <div className="cor-split-vertical-child" style={childStyle} key={index}>{child}</div>;
    });

    return <div style={style}>{children}</div>;
};

Split.Horizontal = ({children, ...props}) => {
    const [style, positions, dimensions] = Split(props);

    children = React.Children.toArray(children);
    children = children.map((child, index) => {
        const position = positions[index];
        const nextPosition = positions[index + 1];
        const size = (dimensions === null) ? null : dimensions[index];
        let childStyle;

        if (size !== null) {
            childStyle = {
                left: `${position.percent}%`,
                width: size
            };
        } else {
            let left;
            let right;

            if (position.pixel < 0) {
                left = `calc(100% - ${-position.pixel}px)`;
            } else {
                left = `calc(${position.percent}% + ${position.pixel}px)`;
            }

            if (nextPosition.pixel < 0) {
                right = -nextPosition.pixel;
            } else {
                right = `calc(${100 + nextPosition.percent}% - ${nextPosition.pixel}px)`;
            }
            childStyle = {left, right};
        }

        return <div className="cor-split-horizontal-child" style={childStyle} key={index}>{child}</div>;
    });

    return <div style={style}>{children}</div>;
};

export default Split;

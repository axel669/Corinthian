import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import Touchable from "lib-source/ui/touchable.js";
import CenterContent from "lib-source/ui/centercontent.js";
import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/button",
    {
        '.wrapper': {
            position: 'relative',
            textAlign: 'center',
            fontSize: 18,
            margin: 4,
            overflow: 'hidden',
            zIndex: "+0",
            backgroundColor: 'transparent',
            color: Theme.get("button/color"),
            fontWeight: 'bold',
            whiteSpace: 'pre',
            display: 'inline-block'
        },
        ".wrapper + .raised": {
            backgroundColor: Theme.get("button/color"),
            color: Theme.get("button/textColor")
        },
        '.text': {
            width: '100%',
            padding: 5,
            paddingLeft: 15,
            paddingRight: 15
        },
        '.overlay': {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
        "$ core:desktop": {
            '.overlay': {
                ": hover": {
                    backgroundColor: Theme.get("button/hoverColor")
                }
            },
            "~ .cor-touch-active": {
                "> .overlay": {
                    backgroundColor: Theme.get("button/activeColor")
                }
            }
        },
        "~ .cor-touch-active": {
            "> .overlay": {
                backgroundColor: Theme.get("button/activeColor")
            }
        }
    }
);

/**
    @module UI
*/

/**
    Displays a button on screen.
    @element Button
*/
/**
    The function to call when the button is tapped (mobile) or pressed (desktop).
    @attribute onTap
    @optional
    @type Function
    @default () => {}
*/
/**
    The color of the button.
    @attribute color
    @optional
    @type String
    @default "transparent"
*/
/**
    The color of the text inside the button.
    @attribute textColor
    @optional
    @type String
    @default Theme.button.color
*/
/**
    The width of the button.
    @attribute width
    @optional
    @type Number|CSS String
    @default null (wraps button content)
*/
/**
    The height of the button.
    @attribute height
    @optional
    @type Number|CSS String
    @default null (wraps button content)
*/
/**
    Makes the button flish with the elements around it (removes the margin).
    @attribute flush
    @optional
    @type Boolean
    @default false
*/
/**
    Makes the button display as a block element.
    @attribute block
    @optional
    @type Boolean
    @default false
*/
/**
    Makes the button take the width and height of its container. Overwrites `width` and `height`.
    @attribute fill
    @optional
    @type Boolean
    @default false
*/
/**
    Changes the button style to a "raised" style. Changes color to `Theme.button.color` and textColor to `Theme.button.textColor` and adds a box-shadow.
    @attribute raised
    @optional
    @type Boolean
    @default false
*/
/**
    Adjusts the padding around the button text.
    @attribute padding
    @optional
    @type Number|CSS String
    @default "5px"
*/
/**
    Adjust the rounding of the button's corners.
    @attribute cornerRadius
    @optional
    @type Number|CSS String
    @default 0
*/
/**
    Sets the css class to control property animations on the button.
    @attribute animation
    @optional
    @type String
    @default null
*/
/**
    The button text.
    @attribute text
    @required
    @type String
*/

const Button = ({onTap = () => {}, color = null, textColor = null, width = null, height = null, flush = false, block = false, fill = false, raised = false, padding = null, cornerRadius = null, text, animation = null} = {}) => {
    let style;
    let textStyle;
    let className;
    let shadow;

    if (raised === true) {
        shadow = "1px 2px 5px rgba(0, 0, 0, 0.6)";
    } else {
        shadow = null;
    }

    className = Style.getClassNames({
        "core/button:wrapper": true,
        "core/button:raised": raised
    });
    if (fill === true) {
        width = '100%';
        height = '100%';
    }

    style = {
        backgroundColor: color,
        color: textColor,
        WebkitBoxShadow: shadow,
        MozBoxShadow: shadow,
        boxShadow: shadow,
        borderRadius: cornerRadius,
        width,
        ...(animation || {})
    };

    if (block === true) {
        style.display = 'block';
    }
    if (flush === true) {
        style = {
            ...style,
            margin: 0
        };
    }
    textStyle = {padding};

    if (typeof height === 'string' && height.slice(-1) === "%") {
        style.height = '100%';
        height = '100%';
    }

    return (
        <Touchable component="div" className={className} style={style} onTap={onTap}>
            <div className={Style.getClassName("core/button:overlay")} />
            <CenterContent className={Style.getClassName("core/button:text")} style={textStyle} height={height}>{text}</CenterContent>
        </Touchable>
    );
};

export default Button;

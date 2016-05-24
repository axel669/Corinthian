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
            backgroundColor: Theme.get("button/raised/color"),
            color: Theme.get("button/raised/textColor")
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

/* -AxelDoc-
module UI {
    element Button {
        @desc Displays a button on screen.
        @prop onTap {
            @desc The function to call when the button is tapped (mobile) or pressed (desktop).
            @type function
            @optional
            @default `() => {}`
            @args {
                @arg evt [Event] The tap event that occured.
            }
        }

        @prop color {
            @desc The color of the button.
            @type CSS String
            @optional
            @default `"transparent"`
        }

        @prop textColor {
            @desc The color of the text inside the button.
            @type CSS String
            @optional
            @default $Theme.button.color
        }

        @prop width {
            @desc The width of the button.
            @type Number
            @type CSS String
            @optional
            @default `null` (wraps button content)
        }

        @prop height {
            @desc The height of the button.
            @type Number
            @type CSS String
            @optional
            @default `null` (wraps button content)
        }

        @prop flush {
            @desc Makes the button flish with the elements around it (removes the margin).
            @type boolean
            @optional
            @default `false`
        }

        @prop block {
            @desc Makes the button display as a block element.
            @type boolean
            @optional
            @default `false`
        }

        @prop fill {
            @desc Makes the button take the width and height of its container. Overwrites `width` and `height`.
            @type boolean
            @optional
            @default `false`
        }

        @prop raised {
            @desc Changes the button style to a "raised" style. Changes `color` to `Theme.button.color` and `textColor` to `Theme.button.textColor` and adds a box-shadow.
            @type boolean
            @optional
            @default false
        }

        @prop padding {
            @desc Adjusts the padding around the button text.
            @type Number
            @type CSS String
            @optional
            @default `"5px"`
        }

        @prop cornerRadius {
            @desc Adjust the rounding of the button's corners.
            @type Number
            @type CSS String
            @optional
            @default 0
        }

        @prop animation {
            @desc Sets the css class to control property animations on the button.
            @type string
            @optional
            @default null
        }

        @prop text {
            @desc The button text.
            @type string
            @required
        }

        @example
            ```
            <UI.Button text="text" />
            ```
    }
}
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

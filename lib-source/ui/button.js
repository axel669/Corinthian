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

const Button = ({onTap = () => {}, color = null, textColor = null, width = null, height = null, flush = false, block = false, fill = false, raised = false, padding = null, cornerRadius = null, text} = {}) => {
    let style;
    let textStyle;
    let className;
    let shadow;

    if (raised === true) {
        shadow = "1px 2px 5px rgba(0, 0, 0, 0.6)";
    } else {
        shadow = null;
    }

    // className = "cor-button";
    // if (raised === true) {
    //     className += " raised";
    // }
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
        width
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

    if (fill === true) {
        style.height = '100%';
    }

    return (
        <Touchable component="div" className={className} style={style} onTap={onTap}>
            <div className={Style.getClassName("core/button:overlay")} />
            <CenterContent className={Style.getClassName("core/button:text")} style={textStyle} height={height}>{text}</CenterContent>
        </Touchable>
    );
};

export default Button;

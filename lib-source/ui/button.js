import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import Touchable from "lib-source/ui/touchable.js";
import CenterContent from "lib-source/ui/centercontent.js";

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

    className = "cor-button";
    if (raised === true) {
        className += " raised";
    }
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
            <div className="cor-button-overlay" />
            <CenterContent className="cor-button-text" style={textStyle} height={height}>{text}</CenterContent>
        </Touchable>
    );
};

export default Button;

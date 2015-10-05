import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import Touchable from "lib-source/ui/touchable.js";

let TextInput;

TextInput = React.createClass({
    getDefaultProps () {
        return {
            label: null,
            value: "",
            icon: null,
            iconStyle: null,
            type: "text",
            fillWidth: null,
            onChange () {}
        };
    },
    update (evt) {
        this.props.onChange(evt.target.value);
    },
    focus () {
        this.refs.input.getDOMNode().focus();
    },
    render () {
        let {label, placeholder, value, icon, iconStyle, type, fillWidth} = this.props;
        let inputStyle;

        if (label !== null) {
            label = <div>{label}</div>;
        }

        inputStyle = {
            width: fillWidth
        };

        if (icon !== null) {
            icon = <div className="material-input-icon" style={iconStyle}>{icons[icon]}</div>;
            inputStyle = {
                paddingLeft: 35
            };
        }

        return (
            <Touchable component="div" onTap={this.focus} className="material-input">
                {label}
                <div style={{position: 'relative', width: fillWidth, margin: 'auto'}}>
                    {icon}
                    <input type={type} ref="input" style={inputStyle} placeholder={placeholder} className="material-input-elem" value={value} onChange={this.update} />
                </div>
            </Touchable>
        );
    }
});

export default TextInput;

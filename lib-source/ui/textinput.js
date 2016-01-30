import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import Touchable from "lib-source/ui/touchable.js";
import CenterContent from "lib-source/ui/centercontent.js";

import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/userInput",
    {
        ".textField": {
            height: 40,
            fontSize: 15,
            borderWidth: 0,
            width: '100%',
            padding: 5,
            color: Theme.get("userInput/textColor"),
            borderBottom: '1px solid #DDD',
            marginBottom: 1,
            ": focus": {
                borderBottom: Theme.format('2px solid $userInput/activeColor')
            }
        }
    }
);

const TextInput = React.createClass({
    focus() {
        this.refs.input.focus();
    },
    render() {
        const {icon = null, type = 'text', onChange = () => {}, placeholder, value, label} = this.props;
        let iconArea;
        let inputStyle;
        let labelOffset;

        inputStyle = {
        };
        labelOffset = {
            position: 'absolute',
            bottom: '100%',
            width: '100%'
        };

        if (icon === null) {
            iconArea = null;
        } else {
            iconArea = <CenterContent style={{position: 'absolute', top: 0}} width={40} height={40} className="cor-icon">{icons[icon]}</CenterContent>;
            inputStyle = {
                marginLeft: 40,
                width: "calc(100% - 40px)"
            };
            labelOffset = {
                ...labelOffset,
                ...inputStyle
            };
        }

        return (
            <div style={{position: 'relative'}}>
                <div className={Style.getClassName("core:componentLabel")} style={{color: 'transparent'}}>{label}</div>
                <div style={{position: 'relative'}}>
                    <input
                        type={type} value={value} style={inputStyle}
                        onChange={evt => onChange(evt.target.value)}
                        className={Style.getClassName("core/userInput:textField")}
                        placeholder={placeholder} ref="input" />
                    {iconArea}
                    <Touchable component="div" className={Style.getClassName("core:componentLabel")} style={labelOffset} onTap={this.focus}>
                        {label}
                    </Touchable>
                </div>
            </div>
        );
    }
});

export default TextInput;

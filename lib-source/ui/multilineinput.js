import React from "react";
// import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import Touchable from "lib-source/ui/touchable.js";
// import CenterContent from "lib-source/ui/centercontent.js";

import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/multilineInput",
    {
        ".textField": {
            fontSize: 15,
            borderWidth: 0,
            width: '100%',
            padding: 5,
            color: Theme.get("userInput/textColor"),
            borderBottom: '1px solid #DDD',
            marginBottom: 1,
            ": focus": {
                borderBottom: Theme.format('2px solid $userInput/activeColor'),
                outline: 'rgba(120, 120, 120, 0.2) solid 1px'
            }
        }
    }
);

const MultilineInput = React.createClass({
    focus() {
        this.refs.input.focus();
    },
    render() {
        const {type = 'text', onChange = () => {}, placeholder, value, label, autoCapitalize = false, autoComplete = true, height = '4l'} = this.props;
        let extra;

        if (height.slice(-1) === 'l') {
            extra = {rows: parseInt(height)};
        } else {
            extra = {style: {height}};
        }

        // if (icon === null) {
        //     iconArea = null;
        // } else {
        //     iconArea = <CenterContent style={{position: 'absolute', top: 0}} width={40} height={40} className={Style.getClassName("core:icon")}>{icons[icon]}</CenterContent>;
        //     inputStyle = {
        //         marginLeft: 40,
        //         width: "calc(100% - 40px)"
        //     };
        //     labelOffset = {
        //         ...labelOffset,
        //         ...inputStyle
        //     };
        // }

        return (
            <div style={{position: 'relative'}}>
                <div className={Style.getClassName("core:componentLabel")} style={{color: 'transparent'}}>{label}</div>
                <div style={{position: 'relative'}}>
                    <textarea
                        value={value} {...extra}
                        onChange={evt => onChange(evt.target.value)}
                        className={Style.getClassName("core/multilineInput:textField")}
                        placeholder={placeholder} ref="input"
                        autoComplete={autoComplete}
                        autoCapitalize={autoCapitalize} />
                    <Touchable component="div" className={Style.getClassName("core:componentLabel")} style={{position: 'absolute', bottom: '100%', width: '100%'}} onTap={this.focus}>
                        {label}
                    </Touchable>
                </div>
            </div>
        );
    }
});

export default MultilineInput;

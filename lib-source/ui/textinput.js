import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import Touchable from "lib-source/ui/touchable.js";
import CenterContent from "lib-source/ui/centercontent.js";

// let TextInput;

// TextInput = React.createClass({
//     getDefaultProps () {
//         return {
//             label: null,
//             value: "",
//             icon: null,
//             iconStyle: null,
//             type: "text",
//             fillWidth: null,
//             onChange () {}
//         };
//     },
//     update (evt) {
//         this.props.onChange(evt.target.value);
//     },
//     focus () {
//         this.refs.input.focus();
//     },
//     render () {
//         let {label, placeholder, value, icon, iconStyle, type, fillWidth, align = 'left'} = this.props;
//         let inputStyle;

//         if (label !== null) {
//             label = <div>{label}</div>;
//         }

//         inputStyle = {
//             width: fillWidth,
//             textAlign: align
//         };

//         if (icon !== null) {
//             icon = <div className="material-input-icon" style={iconStyle}>{icons[icon]}</div>;
//             inputStyle = {
//                 paddingLeft: 35
//             };
//         }

//         return (
//             <Touchable component="div" onTap={this.focus} className="material-input">
//                 {label}
//                 <div style={{position: 'relative', width: fillWidth, margin: 'auto'}}>
//                     {icon}
//                     <input type={type} ref="input" style={inputStyle} placeholder={placeholder} className="material-input-elem" value={value} onChange={this.update} />
//                 </div>
//             </Touchable>
//         );
//     }
// });

const TextInput = ({icon = null, type = 'text', onChange = () => {}, placeholder, value, label}) => {
    let iconArea;
    let inputStyle;

    inputStyle = {
    };

    if (icon === null) {
        iconArea = null;
    } else {
        iconArea = <CenterContent style={{position: 'absolute'}} width={40} height={40} className="cor-icon">{icons[icon]}</CenterContent>;
        inputStyle = {
            marginLeft: 40,
            width: "calc(100% - 40px)"
        };
    }

    return (
        <div style={{position: 'relative'}}>
            <div className="cor-component-label" style={inputStyle}>{label}</div>
            <div stlye={{position: 'relative'}}>
                {iconArea}
                <input type={type} value={value} style={inputStyle} onChange={evt => onChange(evt.target.value)} className="cor-textinput-input" placeholder={placeholder} />
            </div>
        </div>
    );
};

export default TextInput;

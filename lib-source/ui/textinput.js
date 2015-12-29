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
    let labelOffset;

    inputStyle = {
    };
    labelOffset = {
        position: 'absolute',
        bottom: '100%'
    };

    if (icon === null) {
        iconArea = null;
        // content = (
        //     <div style={{position: 'relative'}}>
        //         <div className="cor-component-label" style={{color: 'transparent'}}>{label}</div>
        //         <input type={type} value={value} onChange={evt => onChange(evt.target.value)} className="cor-textinput-input" placeholder={placeholder} />
        //         <div className="cor-component-label" style={{position: 'absolute'}}>{label}</div>
        //     </div>
        // );
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

        // content = (
        //     <div style={{position: 'relative'}}>
        //         <input type={type} value={value} style={inputStyle} onChange={evt => onChange(evt.target.value)} className="cor-textinput-input" placeholder={placeholder} />
        //         {iconArea}
        //     </div>
        // );
    }

    return (
        <div style={{position: 'relative'}}>
            <div className="cor-component-label" style={{color: 'transparent'}}>{label}</div>
            <div style={{position: 'relative'}}>
                <input type={type} value={value} style={inputStyle} onChange={evt => onChange(evt.target.value)} className="cor-textinput-input" placeholder={placeholder} />
                {iconArea}
                <div className="cor-component-label" style={labelOffset}>{label}</div>
            </div>
        </div>
    );
};

export default TextInput;

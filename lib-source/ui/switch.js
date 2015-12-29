import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import Touchable from "lib-source/ui/touchable.js";
import CenterContent from "lib-source/ui/centercontent.js";

// let Switch;

// Switch = React.createClass({
//     getDefaultProps () {
//         return {
//             defaultState: false,
//             color: null,
//             textColor: null,
//             colorOff: null,
//             textColorOff: null,
//             on: false,
//             onChange () {}
//         };
//     },
//     toggle () {
//         this.props.onChange(!this.props.on);
//     },
//     render () {
//         let {on, text, textColor, color, textColorOff, colorOff} = this.props;
//         let displayStyle;
//         let statusText;
//         let styleName;

//         if (on === true) {
//             statusText = "ON";
//             styleName = "material-switch-on";
//             displayStyle = {
//                 backgroundColor: color,
//                 color: textColor
//             };
//         } else {
//             statusText = "OFF";
//             styleName = "material-switch-off";
//             displayStyle = {
//                 backgroundColor: colorOff,
//                 color: textColorOff
//             };
//         }
//         return (
//             <div className="material-switch">
//                 <div style={{marginRight: 100}}>{text}</div>
//                 <Touchable component="div" className="material-switch-toggle" onTap={this.toggle}>
//                     <div className={styleName} style={displayStyle}>
//                         {statusText}
//                     </div>
//                 </Touchable>
//             </div>
//         );
//     }
// });

const Switch = ({on, onChange = () => {}, color = null, label}) => (
    <Touchable component="div" className="cor-switch" onTap={() => onChange(on !== true)}>
        <CenterContent style={{textAlign: 'left', padding: 5}} height={40} className="cor-switch-label">
            {label}
        </CenterContent>
        <div className={`cor-switch-${(on === true) ? 'on' : 'off'} cor-switch-visual`}>
            <div className="cor-switch-track" />
            <div className="cor-switch-thumb" />
        </div>
    </Touchable>
);

export default Switch;

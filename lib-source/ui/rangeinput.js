import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import CenterContent from "lib-source/ui/centercontent.js";

// let RangeInput;

// RangeInput = React.createClass({
//     getDefaultProps () {
//         return {
//             min: 0,
//             max: 100,
//             step: 1,
//             color: '#2FB1DF',
//             value: 0,
//             onChange () {}
//         };
//     },
//     updateValue (evt) {
//         let value;

//         value = parseInt(evt.target.value);
//         if (this.props.value !== value) {
//             this.props.onChange(value);
//         }
//     },
//     render () {
//         let {value} = this.props;
//         let {min, max, step, color} = this.props;
//         let range;

//         range = max - min;

//         return (
//             <div className="material-range">
//                 <div className="material-range-container">
//                     <div style={{width: '100%', backgroundColor: "#ccc"}}
//                         className="material-range-background" />
//                     <div
//                         style={{
//                             width: (((value - min) / range) * 100) + '%',
//                             backgroundColor: color
//                         }}
//                         className="material-range-background" />
//                     <div
//                         style={{left: (((value - min) / range) * 100) + '%'}}
//                         className="material-range-slider" />
//                     <input
//                         type="range"
//                         min={min}
//                         max={max}
//                         step={step}
//                         className="material-range-input"
//                         onChange={this.updateValue}
//                         value={this.props.value} />
//                 </div>
//             </div>
//         );
//     }
// });

const RangeInput = ({value = 0, min = 0, max = 10, step = 1, trackColor = null, onChange = () => {}, label = null, showValue = false, icon = null}) => {
    const range = max - min;
    const position = ((value - min) / range) * 100;
    const changeHandler = evt => {
        const newValue = parseFloat(evt.target.value);
        if (newValue !== value) {
            onChange(newValue);
        }
    };
    let rangeStyle;
    let displayValue;
    let iconDisplay;

    rangeStyle = {};
    if (showValue === true) {
        rangeStyle.right = 60;
        displayValue = value;
    }
    if (icon !== null) {
        rangeStyle.left = 40;
        iconDisplay = <CenterContent className="cor-icon" style={{position: 'absolute', left: 0, top: 0}} width={25} height="100%">{icons[icon]}</CenterContent>
    }

    return (
        <div>
            <div className="cor-component-label">{label}</div>
            <div className="cor-rangeinput">
                {iconDisplay}
                <CenterContent style={{position: 'absolute', right: 0, top: 0, textAlign: 'left', cursor: 'default'}} width={45} height="100%">{displayValue}</CenterContent>
                <div className="cor-rangeinput-content" style={rangeStyle}>
                    <div className="cor-rangeinput-track" />
                    <div className="cor-rangeinput-valuetrack" style={{width: `${position}%`, backgroundColor: trackColor}} />
                    <div className="cor-rangeinput-thumb" style={{left: `${position}%`}} />
                    <input type="range" value={value} min={min} max={max} step={step} onChange={changeHandler} />
                </div>
            </div>
        </div>
    );
};

export default RangeInput;

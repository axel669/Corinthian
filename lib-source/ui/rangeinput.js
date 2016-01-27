import icons from "lib-source/ionic-icons.js";

import CenterContent from "lib-source/ui/centercontent.js";
import {Style, Theme} from "lib-source/style.js";

const wat = `
=cor-rangeinput-thumb-size
    width: 18px
    height: 18px

.cor-rangeinput input[type=range]
    -webkit-appearance: none
    position: absolute;
    width: 100%
    height: 100%
    margin: 0px
    opacity: 0
.cor-rangeinput input[type=range]:active
    -webkit-tap-highlight-color: rgba(0,0,0,0);

.cor-rangeinput input[type=range]::-webkit-slider-thumb
    +cor-rangeinput-thumb-size
    -webkit-appearance: none
    border: none
    border-radius: 50%
    margin-top: -11px

.cor-rangeinput
    position: relative
    height: 32px
.cor-rangeinput-content
    position: absolute
    top: 0px
    left: 15px
    bottom: 0px
    right: 15px

.cor-rangeinput-thumb
    +cor-rangeinput-thumb-size
    position: absolute
    top: 50%
    border-radius: 50%
    background-color: white
    border: 1px solid #ccc
    @include prefix(box-shadow, 1px 1px 1px rgba(0, 0, 0, 0.45))
    @include prefix(transform, translate(-50%, -50%))

=cor-rangeinput-track-base
    position: absolute
    top: 15px
    height: 2px
.cor-rangeinput-track
    +cor-rangeinput-track-base
    background-color: #ccc
    width: 100%
.cor-rangeinput-valuetrack
    +cor-rangeinput-track-base
    background-color: $buttonColor
`;

Style.rawCSS(
    "core/rangeInput",
    wat
);

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

import icons from "lib-source/ionic-icons.js";

import CenterContent from "lib-source/ui/centercontent.js";
import {Style, Theme} from "lib-source/style.js";

const wrapperName = Style.getClassName("core/rangeInput:wrapper");
const thumbSize = {
    width: 18,
    height: 18
};
const trackBase = {
    position: 'absolute',
    top: 15,
    height: 2
};

Style.create(
    "core/rangeInput",
    {
        ".wrapper": {
            position: 'relative',
            height: 32
        },
        ".sliderWrapper": {
            position: 'absolute',
            top: 0,
            left: 15,
            right: 15,
            bottom: 0
        },
        ".thumb": {
            ...thumbSize,
            position: 'absolute',
            top: '50%',
            borderRadius: '50%',
            backgroundColor: 'white',
            boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.45)',
            transform: 'translate(-50%, -50%)'
        },

        ".trackBackground": {
            ...trackBase,
            backgroundColor: '#CCC',
            width: '100%'
        },
        ".track": {
            ...trackBase,
            backgroundColor: Theme.get("rangeInput/track/color")
        }
    }
);
Style.__rawCSS(
    "core/rangeInput",
    {
        selector: `.${wrapperName} input[type="range"]`,
        rules: {
            WebkitAppearance: 'none',
            position: 'absolute',
            width: '100%',
            height: '100%',
            margin: 0,
            opacity: 0
        }
    },
    {
        selector: `.${wrapperName} input[type="range"]:active`,
        rules: {
            WebkitTapHighlightcolor: 'rgba(0, 0, 0, 0)'
        }
    },
    {
        selector: `.${wrapperName} input[type="range"]::-webkit-slider-thumb`,
        rules: {
            ...thumbSize,
            WebkitAppearance: 'none',
            border: 'none',
            borderRadius: '50%',
            marginTop: -11
        }
    }
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
            <div className={Style.getClassName("core:componentLabel")}>{label}</div>
            <div className={Style.getClassName("core/rangeInput:wrapper")}>
                {iconDisplay}
                <CenterContent style={{position: 'absolute', right: 0, top: 0, textAlign: 'left', cursor: 'default'}} width={45} height="100%">{displayValue}</CenterContent>
                <div className={Style.getClassName("core/rangeInput:sliderWrapper")} style={rangeStyle}>
                    <div className={Style.getClassName("core/rangeInput:trackBackground")} />
                    <div className={Style.getClassName("core/rangeInput:track")} style={{width: `${position}%`, backgroundColor: trackColor}} />
                    <div className={Style.getClassName("core/rangeInput:thumb")} style={{left: `${position}%`}} />
                    <input type="range" value={value} min={min} max={max} step={step} onChange={changeHandler} />
                </div>
            </div>
        </div>
    );
};

export default RangeInput;

import {defineComponentStyle} from "lib-source/v2/style";

const coolBlue = "#2FB1DF";
const clampValue = (value, min, max) => Math.min(Math.max(value, min), max);
const thumbSize = {
    width: 24,
    height: 24
};
const trackBase = {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    height: 4,
    borderRadius: 2
};
defineComponentStyle(
    'range-input',
    'core',
    {
        "wrapper": {
            height: 30,
            position: 'relative'
        },
        "focus-background": {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0
        },
        "track-container": {
            position: 'absolute',
            top: 0,
            left: 12,
            right: 12,
            bottom: 0
        },
        "track-background": {
            ...trackBase,
            right: 0,
            backgroundColor: 'lightgray'
        },
        "track": {
            ...trackBase,
            backgroundColor: coolBlue
        },
        "track::after": {
            ...thumbSize,
            boxSizing: 'border-box',
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translate(50%, -50%)',
            backgroundColor: 'white',
            border: `3px solid ${coolBlue}`,
            borderRadius: '50%',
            content: "''"
        },
        "wrapper > $input[type='range']": {
            WebkitAppearance: 'none',
            width: '100%',
            height: '100%',
            margin: 0,
            zIndex: '+10',
            position: 'relative',
            opacity: 0
        },
        "wrapper > $input[type='range']::-webkit-slider-thumb": {
            ...thumbSize,
            borderRadius: '50%',
            WebkitAppearance: 'none',
            backgroundColor: 'green'
        },
        "wrapper > $input[type='range']:focus + focus-background": {
            opacity: 1
        }
    }
);
const RangeInput = props => {
    const {
        min = 0,
        max = 10,
        step = 1,
        onChange = () => {},
        focusStyle = null,
        label
    } = props;
    const range = max - min;
    const changeHandler = evt => {
        // evt.target.focus();
        onChange(evt.target.value);
    };
    let {value = null} = props;
    let adjusted;

    if (value === null) {
        value = min;
    }

    adjusted = value - min;
    if (adjusted % step !== 0) {
        adjusted -= adjusted % step;
    }
    adjusted = clampValue(adjusted, min, max);

    return (
        <div>
            <div className="input-core-label">{label}</div>
            <div className="range-input-core-wrapper">
                <input type="range" min={min} max={max} step={step} value={adjusted} onChange={changeHandler} onTouchStart={evt => evt.target.focus()} />
                <div className="range-input-core-focus-background" style={focusStyle} />
                <div className="range-input-core-track-container">
                    <div className="range-input-core-track-background" />
                    <div className="range-input-core-track" style={{width: `${(adjusted / range) * 100}%`}} />
                </div>
            </div>
        </div>
    );
};

export default RangeInput;

import {defineComponentStyle} from "lib-source/v2/style";
import RangeInput from 'lib-source/uiv2/input/RangeInput';

defineComponentStyle(
    'time-selector',
    'core',
    {
        "time-display": {
            textAlign: 'center',
            fontSize: 24,
            color: 'black'
        }
    }
);
class TimeSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    change = prop =>
        (newValue) => {
            const {value, onChange = warningFunc("onChange not given to TimeSelector")} = this.props;
            const changed = {[prop]: newValue};

            onChange(value.set(changed));
        }

    render = () => {
        const {
            value = null,
            format = "{hour/12padded}:{minute/padded} {tod}"
        } = this.props;
        if (value === null) {
            throw new Error("Must provide a value to TimeSelector");
        }
        const {hours, minutes} = value;

        return (
            <div>
                <div className="time-selector-core-time-display">{value.format(format)}</div>
                <RangeInput key="0" value={hours} min={0} max={23} label="Hour" onChange={this.change('hours')} showArrows />
                <RangeInput key="1" value={minutes} min={0} max={59} label="Minute" onChange={this.change('minutes')} showArrows />
            </div>
        );
    }
}

export default TimeSelector;

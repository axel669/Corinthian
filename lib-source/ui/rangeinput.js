import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

let RangeInput;

RangeInput = React.createClass({
    getDefaultProps () {
        return {
            min: 0,
            max: 100,
            step: 1,
            color: '#2FB1DF',
            value: 0,
            onChange () {}
        };
    },
    updateValue (evt) {
        let value;

        value = parseInt(evt.target.value);
        if (this.props.value !== value) {
            this.props.onChange(value);
        }
    },
    render () {
        let {value} = this.props;
        let {min, max, step, color} = this.props;
        let range;

        range = max - min;

        return (
            <div className="material-range">
                <div className="material-range-container">
                    <div style={{width: '100%', backgroundColor: "#ccc"}}
                        className="material-range-background" />
                    <div
                        style={{
                            width: (((value - min) / range) * 100) + '%',
                            backgroundColor: color
                        }}
                        className="material-range-background" />
                    <div
                        style={{left: (((value - min) / range) * 100) + '%'}}
                        className="material-range-slider" />
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        className="material-range-input"
                        onChange={this.updateValue}
                        value={this.props.value} />
                </div>
            </div>
        );
    }
});

export default RangeInput;

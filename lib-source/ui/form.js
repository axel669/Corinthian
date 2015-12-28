import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import TextInput from "lib-source/ui/textinput.js";
import RangeInput from "lib-source/ui/rangeinput.js";
import Switch from "lib-source/ui/switch.js";
import Checkbox from "lib-source/ui/checkbox.js";

const defaultValueFunc = {
    text: () => '',
    number: () => 0,
    range: ({min = 0}) => min,
    switch: () => false,
    checkbox: () => false
};

const Form = React.createClass({
    getInitialState () {
        const {children} = this.props;

        return children.reduce(
            (state, {props}) => {
                let {name, inputType, defaultValue = null} = props;

                if (defaultValue === null) {
                    defaultValue = defaultValueFunc[inputType](props);
                }

                state[name] = defaultValue;

                return state;
            },
            {}
        );
    },
    updateValue (name, format = i => i) {
        return (index, value = null) => {
            if (value === null) {
                value = index;
            }

            value = format(value);

            this.setState({[name]: value});
        };
    },
    submit () {
        console.log(this.state);
    },
    render () {
        const {submitText, children} = this.props;
        const state = this.state;
        let content;

        content = children.map(
            ({props}, index) => {
                const update = this.updateValue(props.name, props.format);
                const value = state[props.name];

                switch (props.inputType) {
                    case 'text':
                        return <TextInput {...props} value={value} key={index} onChange={update} />;

                    case 'range':
                        return <RangeInput {...props} value={value} key={index} onChange={update} />;

                    case 'switch':
                        return <Switch {...props} on={value} onChange={update} key={index} />;

                    case 'checkbox':
                        return <Checkbox {...props} checked={value} onChange={update} key={index} />;
                }

                return <div key={index} />;
            }
        );

        return (
            <div style={{padding: 5}}>
                {content}
                <UI.Button raised={true} text={submitText} onTap={this.submit} />
            </div>
        );
    }
});

export default Form;
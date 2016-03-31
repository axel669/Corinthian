import React from "react";

import TextInput from "lib-source/ui/textinput.js";
import MultilineInput from "lib-source/ui/multilineinput.js";
import RangeInput from "lib-source/ui/rangeinput.js";
import Switch from "lib-source/ui/switch.js";
import Checkbox from "lib-source/ui/checkbox.js";
import Combobox from "lib-source/ui/combobox.js";
import RadioGroup from "lib-source/ui/radio.js";

const defaultValueFunc = {
    text: () => '',
    multiline: () => '',
    number: () => 0,
    range: ({min = 0}) => min,
    switch: () => false,
    checkbox: () => false,
    combobox: ({defaultIndex = 0, defaultValue = null, children}) => {
        if (defaultIndex >= 0) {
            children = React.Children.toArray(children);
            defaultValue = children[defaultIndex].props.value;
        }
        return {index: defaultIndex, value: defaultValue};
    },
    radio: ({defaultIndex = 0, defaultValue = null, children}) => {
        if (defaultIndex >= 0) {
            children = React.Children.toArray(children);
            defaultValue = children[defaultIndex].props.value;
        }
        return {index: defaultIndex, value: defaultValue};
    }
};

const sharedCode = {
    inputInitialState() {
        return {value: this.props.initialValue};
    },
    inputUpdate(value) {
        const {format = i => i, update} = this.props;

        value = format(value);
        this.setState({value});
        update(value);
    },
    indexedInitialState() {
        return this.props.initialValue;
    },
    indexedUpdate(index, value) {
        const {format = (a, b) => [a, b], update} = this.props;

        [index, value] = format(index, value);
        this.setState({index, value});
        update({index, value});
    }
};
const IsolatedComponents = {
    text: React.createClass({
        getInitialState: sharedCode.inputInitialState,
        update: sharedCode.inputUpdate,
        render() {
            const {format, initialValue, update, ...inputProps} = this.props;
            const {value} = this.state;
            return <TextInput value={value} onChange={this.update} {...inputProps} />;
        }
    }),
    multiline: React.createClass({
        getInitialState: sharedCode.inputInitialState,
        update: sharedCode.inputUpdate,
        render() {
            const {format, initialValue, update, ...inputProps} = this.props;
            const {value} = this.state;
            return <MultilineInput value={value} onChange={this.update} {...inputProps} />;
        }
    }),
    range: React.createClass({
        getInitialState: sharedCode.inputInitialState,
        update: sharedCode.inputUpdate,
        render() {
            const {format, initialValue, update, ...inputProps} = this.props;
            const {value} = this.state;
            return <RangeInput value={value} onChange={this.update} {...inputProps} />;
        }
    }),
    switch: React.createClass({
        getInitialState() {
            return {on: this.props.initialValue};
        },
        update(on) {
            const {format = i => i, update} = this.props;

            on = format(on);
            this.setState({on});
            update(on);
        },
        render() {
            const {format, initialValue, update, ...switchProps} = this.props;
            const {on} = this.state;
            return <Switch on={on} onChange={this.update} {...switchProps} />;
        }
    }),
    checkbox: React.createClass({
        getInitialState() {
            return {checked: this.props.initialValue};
        },
        update(checked) {
            const {format = i => i, update} = this.props;

            checked = format(checked);
            this.setState({checked});
            update(checked);
        },
        render() {
            const {format, initialValue, update, ...switchProps} = this.props;
            const {checked} = this.state;
            return <Checkbox checked={checked} onChange={this.update} {...switchProps} />;
        }
    }),
    combobox: React.createClass({
        getInitialState: sharedCode.indexedInitialState,
        update: sharedCode.indexedUpdate,
        render() {
            const {format, initialValue, update, children, ...comboboxProps} = this.props;
            const {index} = this.state;
            return <Combobox selectedIndex={index} onChange={this.update} {...comboboxProps}>{children}</Combobox>
        }
    }),
    radio: React.createClass({
        getInitialState: sharedCode.indexedInitialState,
        update: sharedCode.indexedUpdate,
        render() {
            const {format, initialValue, update, children, ...comboboxProps} = this.props;
            const {index} = this.state;
            return <RadioGroup selectedIndex={index} onChange={this.update} {...comboboxProps}>{children}</RadioGroup>
        }
    })
};

/* -AxelDoc-
module UI {
    element Form {
        @desc A container that will manage components to create a form that does not rely on a state
            that is managed by the programmer.
        @note
        @blockElement
        @hasChildren
    }
}
*/
const Form = React.createClass({
    getInitialState () {
        const children = React.Children.toArray(this.props.children);

        this.values = children.reduce(
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

        return null;
    },
    updateValue(name) {
        return updatedValue => {
            this.values[name] = updatedValue;
        };
    },
    submit () {
        this.props.onSubmit(this.values);
    },
    reset () {
        for (const item of Object.values(this.refs)) {
            item.setState(item.getInitialState());
        }
    },
    render () {
        const {submitText = "Submit", itemContainer = "div"} = this.props;
        const children = React.Children.toArray(this.props.children);
        const Container = itemContainer;
        let content;

        content = children.map(
            ({props: {name, format, inputType, ...itemProps}}, index) => {
                const initialValue = this.values[name];
                const updateFunction = this.updateValue(name);
                const Isolated = IsolatedComponents[inputType];

                if (Isolated === undefined) {
                    return null;
                }

                return (
                    <Container key={index}>
                        <Isolated ref={index} initialValue={initialValue} update={updateFunction} {...itemProps} />
                    </Container>
                );
            }
        );

        return (
            <div style={{padding: 5}}>
                {content}
                <UI.Button raised={true} text={submitText} onTap={this.submit} block={true} />
            </div>
        );
    }
});

export default Form;

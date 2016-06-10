import React from "react";

// import TextInput from "lib-source/ui/textinput.js";
// import MultilineInput from "lib-source/ui/multilineinput.js";
// import RangeInput from "lib-source/ui/rangeinput.js";
// import Switch from "lib-source/ui/switch.js";
// import Checkbox from "lib-source/ui/checkbox.js";
// import Combobox from "lib-source/ui/combobox.js";
// import RadioGroup from "lib-source/ui/radio.js";
//
// const defaultValueFunc = {
//     text: () => '',
//     multiline: () => '',
//     number: () => 0,
//     range: ({min = 0}) => min,
//     switch: () => false,
//     checkbox: () => false,
//     combobox: ({defaultIndex = 0, defaultValue = null, children}) => {
//         if (defaultIndex >= 0) {
//             children = React.Children.toArray(children);
//             defaultValue = children[defaultIndex].props.value;
//         }
//         return {index: defaultIndex, value: defaultValue};
//     },
//     radio: ({defaultIndex = 0, defaultValue = null, children}) => {
//         if (defaultIndex >= 0) {
//             children = React.Children.toArray(children);
//             defaultValue = children[defaultIndex].props.value;
//         }
//         return {index: defaultIndex, value: defaultValue};
//     }
// };
//
// const sharedCode = {
//     inputInitialState() {
//         return {value: this.props.initialValue};
//     },
//     inputUpdate(value) {
//         const {format = i => i, update} = this.props;
//
//         value = format(value);
//         this.setState({value});
//         update(value);
//     },
//     indexedInitialState() {
//         return this.props.initialValue;
//     },
//     indexedUpdate(index, value) {
//         const {format = (a, b) => [a, b], update} = this.props;
//
//         [index, value] = format(index, value);
//         this.setState({index, value});
//         update({index, value});
//     }
// };
// const IsolatedComponents = {
//     text: React.createClass({
//         getInitialState: sharedCode.inputInitialState,
//         update: sharedCode.inputUpdate,
//         render() {
//             const {format, initialValue, update, ...inputProps} = this.props;
//             const {value} = this.state;
//             return <TextInput value={value} onChange={this.update} {...inputProps} />;
//         }
//     }),
//     multiline: React.createClass({
//         getInitialState: sharedCode.inputInitialState,
//         update: sharedCode.inputUpdate,
//         render() {
//             const {format, initialValue, update, ...inputProps} = this.props;
//             const {value} = this.state;
//             return <MultilineInput value={value} onChange={this.update} {...inputProps} />;
//         }
//     }),
//     range: React.createClass({
//         getInitialState: sharedCode.inputInitialState,
//         update: sharedCode.inputUpdate,
//         render() {
//             const {format, initialValue, update, ...inputProps} = this.props;
//             const {value} = this.state;
//             return <RangeInput value={value} onChange={this.update} {...inputProps} />;
//         }
//     }),
//     switch: React.createClass({
//         getInitialState() {
//             return {on: this.props.initialValue};
//         },
//         update(on) {
//             const {format = i => i, update} = this.props;
//
//             on = format(on);
//             this.setState({on});
//             update(on);
//         },
//         render() {
//             const {format, initialValue, update, ...switchProps} = this.props;
//             const {on} = this.state;
//             return <Switch on={on} onChange={this.update} {...switchProps} />;
//         }
//     }),
//     checkbox: React.createClass({
//         getInitialState() {
//             return {checked: this.props.initialValue};
//         },
//         update(checked) {
//             const {format = i => i, update} = this.props;
//
//             checked = format(checked);
//             this.setState({checked});
//             update(checked);
//         },
//         render() {
//             const {format, initialValue, update, ...switchProps} = this.props;
//             const {checked} = this.state;
//             return <Checkbox checked={checked} onChange={this.update} {...switchProps} />;
//         }
//     }),
//     combobox: React.createClass({
//         getInitialState: sharedCode.indexedInitialState,
//         update: sharedCode.indexedUpdate,
//         render() {
//             const {format, initialValue, update, children, ...comboboxProps} = this.props;
//             const {index} = this.state;
//             return <Combobox selectedIndex={index} onChange={this.update} {...comboboxProps}>{children}</Combobox>
//         }
//     }),
//     radio: React.createClass({
//         getInitialState: sharedCode.indexedInitialState,
//         update: sharedCode.indexedUpdate,
//         render() {
//             const {format, initialValue, update, children, ...comboboxProps} = this.props;
//             const {index} = this.state;
//             return <RadioGroup selectedIndex={index} onChange={this.update} {...comboboxProps}>{children}</RadioGroup>
//         }
//     })
// };

/* -AxelDoc-
module UI {
    element Form {
        @desc A container that will manage components to create a form that does not rely on a state
            that is managed by the programmer.
        @note The inputType on each Item corresponds to a specific element.
        @blockElement
        @hasChildren

        @function reset {
            @desc Resets the values of each of the children to the default values.
            @args {}
        }

        @prop onSubmit {
            @desc The function that gets called when the form is submitted.
            @type function
            @required
            @args {
                @arg formInfo [object] The values of all the for items.
            }
        }
        @prop submitText {
            @desc The text on the submit button.
            @type string
            @optional
            @default `"Submit"`
        }
        @prop itemContainer {
            @desc The container to wrap each item in.
            @type string
            @type element
            @optional
            @default `"div"`
        }
    }
}
*/
// const Form = React.createClass({
//     getInitialState () {
//         const children = React.Children.toArray(this.props.children);
//
//         this.values = children.reduce(
//             (state, {props}) => {
//                 let {name, inputType, defaultValue = null} = props;
//
//                 if (defaultValue === null) {
//                     defaultValue = defaultValueFunc[inputType](props);
//                 }
//
//                 state[name] = defaultValue;
//
//                 return state;
//             },
//             {}
//         );
//
//         return null;
//     },
//     updateValue(name) {
//         return updatedValue => {
//             this.values[name] = updatedValue;
//         };
//     },
//     submit () {
//         this.props.onSubmit(this.values);
//     },
//     reset () {
//         for (const item of Object.values(this.refs)) {
//             item.setState(item.getInitialState());
//         }
//     },
//     render () {
//         const {submitText = "Submit", itemContainer = "div"} = this.props;
//         const children = React.Children.toArray(this.props.children);
//         const Container = itemContainer;
//         let content;
//
//         content = children.map(
//             ({props: {name, format, inputType, ...itemProps}}, index) => {
//                 const initialValue = this.values[name];
//                 const updateFunction = this.updateValue(name);
//                 const Isolated = IsolatedComponents[inputType];
//
//                 if (Isolated === undefined) {
//                     return null;
//                 }
//
//                 return (
//                     <Container key={index}>
//                         <Isolated ref={index} initialValue={initialValue} update={updateFunction} {...itemProps} />
//                     </Container>
//                 );
//             }
//         );
//
//         return (
//             <div style={{padding: 5}}>
//                 {content}
//                 <UI.Button raised={true} text={submitText} onTap={this.submit} block={true} />
//             </div>
//         );
//     }
// });

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: props.childInfo.initialValue};
    }

    change = (...args) => {
        const {updateForm, childInfo: {valueFunction, name}} = this.props;
        this.setState({value: args[0]});
        updateForm(name, valueFunction(...args));
    }

    render = () => {
        const {Renderer, valueProp, children, props} = this.props.childInfo;
        const {value} = this.state;
        const valueObj = {
            [valueProp]: value
        };

        return (
            <div>
                <Renderer {...props} onChange={this.change} {...valueObj}>
                {children}
                </Renderer>
            </div>
        );
    }
}
class Form extends React.Component {
    constructor(props) {
        super(props);

        const {itemContainer = 'div', layout = null} = props;
        const children = React.Children.toArray(props.children);
        let ElemContainer;

        this.internalState = {};

        if (layout === null) {
            this.Container = 'div';
            ElemContainer = itemContainer;
        } else {
            this.Container = layout;
            ElemContainer = layout.FormContainer || (({children}) => children);
            this.containerProps = Object.entries(props).reduce(
                (props, [key, value]) => {
                    if (key.startsWith('layout-') === true) {
                        props[key.substr(7)] = value;
                    }
                    return props;
                },
                {}
            );
        }

        this.childList = children.map(
            (child, index) => {
                const childInfo = {
                    Renderer: child.type,
                    props: child.props,
                    children: child.props.children,
                    valueProp: child.type.valueProp,
                    valueFunction: child.type.valueFunction,
                    initialValue: child.props.defaultPropValue || child.type.defaultPropValue,
                    name: child.props.formName || index
                };
                const containerProps = Object.entries(child.props).reduce(
                    (props, [key, value]) => {
                        if (key.startsWith('layout-') === true) {
                            props[key.substr(7)] = value;
                        }
                        return props;
                    },
                    {}
                );
                this.internalState[childInfo.name] = childInfo.valueFunction(childInfo.initialValue);
                return (
                    <ElemContainer {...containerProps} key={index}>
                        <ItemContainer childInfo={childInfo} updateForm={this.updateInternalState} />
                    </ElemContainer>
                );
            }
        );
    }

    updateInternalState = (name, value) => {
        this.internalState[name] = value;
    }

    submit = evt => {
        evt.preventDefault();
        evt.stopPropagation();

        const {onSubmit = state => console.log(state)} = this.props;
        onSubmit(this.internalState);

        // console.log(this.internalState);
    }

    render = () => {
        const {Container, childList, containerProps} = this;

        return (
            <form onSubmit={this.submit} ref="form">
                <Container {...containerProps}>
                    {childList}
                </Container>
                <UI.Button text="Submit" onTap={this.submit} raised block />
            </form>
        );
    }
}

export default Form;

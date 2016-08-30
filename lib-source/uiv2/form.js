import React from "react";

import Button from "lib-source/uiv2/Button";

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
                const elemType = (child.type.parentInfo !== undefined) ? child.type.parentInfo : child.type;
                const initValue = child.props.defaultPropValue || elemType.defaultPropValue;
                const {formName = index, chidren, ...childProps} = child.props;
                const childInfo = {
                    Renderer: child.type,
                    props: childProps,
                    children: child.props.children,
                    valueProp: elemType.valueProp,
                    valueFunction: elemType.valueFunction,
                    initialValue: typeof initValue === 'function' ? initValue() : initValue,
                    name: formName
                };
                const containerProps = Object.entries(childProps).reduce(
                    (props, [key, value]) => {
                        if (key.startsWith('layout-') === true) {
                            props[key.substr(7)] = value;
                        }
                        return props;
                    },
                    {}
                );
                // console.log(child, child.type, child.type === Checkbox);
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
    }

    render = () => {
        const {Container, childList, containerProps} = this;
        const {submitText = "Submit"} = this.props;

        return (
            <form onSubmit={this.submit} ref="form">
                <Container {...containerProps}>
                    {childList}
                </Container>
                <Button text={submitText} onTap={this.submit} block />
            </form>
        );
    }
}

export default Form;

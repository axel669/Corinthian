import React from "react";

import {defineComponentStyle} from "lib-source/v2/style";
import CenterContent from "lib-source/uiv2/CenterContent";
import Touchable from "lib-source/uiv2/Touchable";
import Icon from "lib-source/uiv2/Icon";

defineComponentStyle(
    'radio',
    'core',
    {
        "title": {
            fontSize: 22,
            padding: 3
        }
    }
);
defineComponentStyle(
    "radio-item",
    "core",
    {
        "default-item": {
            color: 'black',
            position: 'relative',
            paddingLeft: 30,
            transition: 'background-color 500ms linear'
        },
        // ".radio-item-container:active > default-item": {
        "default-item:active": {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            transition: 'none'
        },
        "icon": {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: 30
        }
    }
);
const RadioItem = ({checked, iconColor, children, onTap}) => {
    const iconName = `ion-android-radio-button-${checked === true ? 'on' : 'off'}`;
    return (
        <Touchable component="div" onTap={onTap} className="radio-item-core-default-item" data-checked={checked}>
            <div className={`radio-item-core-icon`} data-checked={checked}>
                <CenterContent height="100%">
                    <Icon size={18} name={iconName} />
                </CenterContent>
            </div>
            {children}
        </Touchable>
    );
};
class Radio extends React.Component {
    constructor(props) {
        super(props);
    }

    select = (index, value) => {
        if (index !== this.props.selectedIndex) {
            this.props.onChange(index, value);
        }
    }

    render = () => {
        const {
            layout = 'div',
            selectedIndex,
            onChange = () => {},
            styleName = 'core',
            title
        } = this.props;
        const Container = layout;

        let {
            children,
            ...layoutProps
        } = this.props;
        let Item;

        if (Container === 'div') {
            Item = RadioItem;
        } else {
            Item = Container.RadioItem;
        }

        children = React.Children.toArray(children);
        layoutProps = Object.entries(layoutProps).reduce(
            (newProps, [key, value]) => {
                if (key.startsWith("layout-") === true) {
                    newProps[key.slice(7)] = value;
                }
                return newProps;
            },
            {}
        );

        return (
            <div>
                <div className="radio-core-title">{title}</div>
                <Container {...layoutProps}>
                {children.map((child, index) => {
                    const value = child.props.value;
                    return (
                        // <Touchable component="div" className="radio-item-container" key={index} onTap={() => this.select(index, value)}>
                            <Item key={index} checked={selectedIndex === index} {...child.props} onTap={() => this.select(index, value)} />
                        // {/*</Touchable>*/}
                    );
                })}
                </Container>
            </div>
        );
    }
}

Radio.valueProp = 'selectedIndex';
Radio.valueFunction = (index, value) => ({index, value});
Radio.defaultPropValue = 0;

export default Radio;

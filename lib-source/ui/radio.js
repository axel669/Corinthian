import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import Touchable from "lib-source/ui/touchable.js";

let RadioGroup;
let RadioItem;

RadioGroup = React.createClass({
    getDefaultProps () {
        return {
            onChange () {},
            selectedIndex: 0,
            radioColor: null,
            style: {}
        };
    },
    selectItem (index, value) {
        if (index !== this.props.selectedIndex) {
            this.props.onChange(index, value);
        }
    },
    render () {
        let {radioColor, selectedIndex, style} = this.props;
        let children;

        children = React.Children.map(
            this.props.children,
            (child, index) => React.cloneElement(
                child,
                {
                    itemTapped: this.selectItem.bind(this, index, child.props.value),
                    checked: index === selectedIndex,
                    radioColor
                }
            )
        );

        return <div style={style}>{children}</div>;
    }
});
RadioItem = React.createClass({
    render () {
        let {checked, itemTapped, radioColor} = this.props;
        let checkString;

        if (checked === true) {
            checkString = icons["ion-android-radio-button-on"];
        } else {
            checkString = icons["ion-android-radio-button-off"];
        }

        return (
            <Touchable component="div" onTap={itemTapped} className="material-radio-item">
                <div className="material-icon-area radio-item-check" style={{color: radioColor}}>{checkString}</div>
                {this.props.children}
            </Touchable>
        );
    }
});

export default {
    RadioGroup,
    RadioItem
};

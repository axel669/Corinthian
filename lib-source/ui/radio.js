import React from "react";
import clone from "react-addons-clone-with-props";
import icons from "lib-source/ionic-icons.js";

import Touchable from "lib-source/ui/touchable.js";

// let RadioGroup;
// let RadioItem;

// RadioGroup = React.createClass({
//     getDefaultProps () {
//         return {
//             onChange () {},
//             selectedIndex: 0,
//             radioColor: null,
//             style: {}
//         };
//     },
//     selectItem (index, value) {
//         if (index !== this.props.selectedIndex) {
//             this.props.onChange(index, value);
//         }
//     },
//     render () {
//         let {radioColor, selectedIndex, style} = this.props;
//         let children;

//         children = React.Children.map(
//             this.props.children,
//             (child, index) => React.cloneElement(
//                 child,
//                 {
//                     itemTapped: this.selectItem.bind(this, index, child.props.value),
//                     checked: index === selectedIndex,
//                     radioColor
//                 }
//             )
//         );

//         return <div style={style}>{children}</div>;
//     }
// });
// RadioItem = React.createClass({
//     render () {
//         let {checked, itemTapped, radioColor} = this.props;
//         let checkString;

//         if (checked === true) {
//             checkString = icons["ion-android-radio-button-on"];
//         } else {
//             checkString = icons["ion-android-radio-button-off"];
//         }

//         return (
//             <Touchable component="div" onTap={itemTapped} className="material-radio-item">
//                 <div className="material-icon-area radio-item-check" style={{color: radioColor}}>{checkString}</div>
//                 {this.props.children}
//             </Touchable>
//         );
//     }
// });

const RadioGroup = ({selectedIndex = null, onChange = () => {}, iconColor, children}) => {
    if (selectedIndex === null || selectedIndex < 0) {
        throw new Error(`selectedIndex not valid (given ${selectedIndex})`);
    }
    const selectItem = (index, value) => {
        if (index !== selectedIndex) {
            onChange(index, value);
        }
    };

    children = React.Children.toArray(children);
    children = children.map(
        (child, index) => {
            let {props} = child;

            props = {
                ...props,
                parentIconColor: iconColor,
                onTap: () => selectItem(index, props.value),
                checked: index === selectedIndex
            };

            return <RadioItem key={index} {...props} />;
        }
    );

    return <div>{children}</div>;
};

const RadioItem = ({checked, children, iconColor = null, parentIconColor}) => {
    return <div>Hi</div>;
};

export default {
    RadioGroup
};

import React from "react";
// import clone from "react-addons-clone-with-props";
import icons from "lib-source/ionic-icons.js";

import Grid from "lib-source/ui/grid.js";
import Button from "lib-source/ui/button.js";
import Touchable from "lib-source/ui/touchable.js";
import CenterContent from "lib-source/ui/centercontent.js";

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

const RadioGroup = ({selectedIndex = null, onChange = () => {}, iconColor, children, label = null, layout = "radio", ...gridProps}) => {
    if (selectedIndex === null || selectedIndex < -1) {
        throw new Error(`selectedIndex not valid (given ${selectedIndex})`);
    }
    const selectItem = (index, value) => {
        if (index !== selectedIndex) {
            onChange(index, value);
        }
    };
    let Container;
    let ChildComponent;
    let title;

    children = React.Children.toArray(children);

    if (layout === 'radio') {
        Container = 'div';
        ChildComponent = RadioItem;
    } else {
        Container = Grid;
        ChildComponent = GridRadioItem;
    }

    if (label !== null) {
        title = <div className="cor-component-label">{label}</div>;
    }

    children = children.map(
        ({props}, index) => {
            const {value = index} = props;
            props = {
                ...props,
                parentIconColor: iconColor,
                onTap: () => selectItem(index, value),
                checked: index === selectedIndex
            };

            return <ChildComponent key={index} {...props} />;
        }
    );

    return (
        <div>
            {title}
            <Container {...gridProps}>
                {children}
            </Container>
        </div>
    );
};

const RadioItem = ({checked, children, iconColor = null, parentIconColor, height = 40, onTap}) => {
    const iconText = checked === true ? icons["ion-android-radio-button-on"] : icons["ion-android-radio-button-off"];

    return (
        <Touchable component="div" className="cor-radio-item" style={{height}} onTap={onTap}>
            <CenterContent style={{position: 'absolute', top: 0, left: 0, color: iconColor}} width={30} height="100%" className="cor-icon">
                <div className="cor-radio-icon">{iconText}</div>
            </CenterContent>
            <CenterContent className="cor-radio-item-content" height="100%" width="100%" style={{textAlign: 'left'}}>
                {children}
            </CenterContent>
        </Touchable>
    );
};
const GridRadioItem = ({checked, children, onTap}) => {
    const className = `cor-grid-radio-item cor-grid-radio-item-${checked}`;

    return (
        <Touchable component="div" style={{width: '100%', height: '100%'}} onTap={onTap} className={className}>
            <CenterContent width="100%" height="100%" className="cor-radio-inner">
                {children}
            </CenterContent>
        </Touchable>
    );
    // return <UI.Button flush fill color={checked === true ? 'blue' : ''} text={children} onTap={onTap} />;
};

export default RadioGroup;

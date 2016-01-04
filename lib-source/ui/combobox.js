import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import CenterContent from "lib-source/ui/centercontent.js";

// let Combobox;
// let Option;

// Combobox = ({style = null, selectedIndex = 0, children, onChange = () => {}}) => {
//     let selectChildren;
//     let displayedChild;
//     let childProps;
//     let change;

//     selectChildren = [];
//     childProps = [];
//     displayedChild = null;

//     change = evt => {
//         let index;
//         let value;

//         index = evt.target.selectedIndex;
//         value = childProps[index].value;

//         onChange(index, value);
//     };

//     React.Children.forEach(
//         children,
//         (child, index) => {
//             let {props} = child;
//             let childText;

//             childText = props.text;
//             if (typeof childText === 'undefined') {
//                 childText = props.value;
//             }

//             if (index === selectedIndex) {
//                 displayedChild = props.children || childText;
//             }

//             childProps.push(props);
//             selectChildren.push(<option value={index} key={index}>{childText}</option>);
//         }
//     );

//     return (
//         <div className="material-combobox" style={style}>
//             <div className="material-combobox-display">
//                 {displayedChild}
//             </div>
//             <select className="material-combobox-internal" value={selectedIndex} onChange={change}>
//                 {selectChildren}
//             </select>
//         </div>
//     );
// };
// Option = props => null;

const Combobox = ({width, height = 40, children, onChange = () => {}, selectedIndex = null, label = null}) => {
    if (selectedIndex === null) {
        throw new Error("Need to provide selectedIndex to Combobox");
    }
    const changeHandler = evt => {
        const newIndex = evt.target.selectedIndex;
        let value;

        value = children[newIndex].props.value;
        if (value === undefined) {
            value = children[newIndex].props.label;
        }

        onChange(newIndex, value);
    };
    const style = {
        position: 'relative',
        border: "1px solid #e2e2e2",
        width,
        height
    };
    let selectChildren;
    let displayedChild;

    children = React.Children.toArray(children);
    if (selectedIndex < 0 || selectedIndex >= children.length) {
        throw new Error("selectedIndex is out of valid range");
    }

    displayedChild = children[selectedIndex].props.children;
    if (displayedChild === undefined || displayedChild.length === 0) {
        displayedChild = children[selectedIndex].props.label;
    }
    selectChildren = children.map(
        ({props: {label = null, children, hidden = false}}, index) => {
            const style = (hidden === true) ? {display: 'none'} : null;
            return <option value={index} key={index} style={style}>{label}</option>;
        }
    );
    if (label !== null) {
        label = (
            <div className="cor-component-label">
                {label}
            </div>
        );
    }

    return (
        <div>
            {label}
            <div style={style}>
                <CenterContent width="100%" height="100%">
                    {displayedChild}
                </CenterContent>
                <CenterContent style={{position: 'absolute', top: 0, right: 0}} width={40} height="100%" className="cor-icon">
                    {icons["ion-arrow-down-b"]}
                </CenterContent>
                <select value={selectedIndex} className="cor-combobox-select" onChange={changeHandler}>
                    {selectChildren}
                </select>
            </div>
        </div>
    );
};

export default Combobox;

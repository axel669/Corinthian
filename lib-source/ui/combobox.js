import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

let Combobox;
let Option;

Combobox = ({style = null, selectedIndex = 0, children, onChange = () => {}}) => {
    let selectChildren;
    let displayedChild;
    let childProps;
    let change;

    selectChildren = [];
    childProps = [];
    displayedChild = null;

    change = evt => {
        let index;
        let value;

        index = evt.target.selectedIndex;
        value = childProps[index].value;

        onChange(index, value);
    };

    React.Children.forEach(
        children,
        (child, index) => {
            let {props} = child;
            let childText;

            childText = props.text;
            if (typeof childText === 'undefined') {
                childText = props.value;
            }

            if (index === selectedIndex) {
                displayedChild = props.children || childText;
            }

            childProps.push(props);
            selectChildren.push(<option value={index} key={index}>{childText}</option>);
        }
    );

    return (
        <div className="material-combobox" style={style}>
            <div className="material-combobox-display">
                {displayedChild}
            </div>
            <select className="material-combobox-internal" value={selectedIndex} onChange={change}>
                {selectChildren}
            </select>
        </div>
    );
};
Option = props => null;

export default {
    Combobox,
    Option
};

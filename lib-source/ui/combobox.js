import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

let Combobox;
let Option;

Combobox = React.createClass({
    getDefaultProps () {
        return {
            selectedIndex: 0,
            onChange () {}
        };
    },
    change (evt) {
        let index;
        let value;

        index = evt.target.selectedIndex;
        value = this.childProps[index].value;

        this.props.onChange(index, value);
    },
    render () {
        let {style, selectedIndex} = this.props;
        let selectChildren;
        let displayedChild;

        selectChildren = [];
        this.childProps = [];
        displayedChild = null;
        React.Children.forEach(
            this.props.children,
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

                this.childProps.push(props);
                selectChildren.push(<option value={index} key={index}>{childText}</option>);
            }
        );

        return (
            <div className="material-combobox" style={style || null}>
                <div className="material-combobox-display">
                    {displayedChild}
                </div>
                <select className="material-combobox-internal" value={selectedIndex} onChange={this.change}>
                    {selectChildren}
                </select>
            </div>
        );
    }
});
Option = React.createClass({
    render () {
        return null;
    }
});

export default {
    Combobox,
    Option
};

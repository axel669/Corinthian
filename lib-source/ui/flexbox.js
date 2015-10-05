import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

let Flexbox;
let FlexboxItem;

Flexbox = React.createClass({
    render () {
        let {cols} = this.props;
        let width;

        width = 100 / cols;
        if (isNaN(width) === true) {
            throw new Error("Invalid column value: " + cols);
        }
        width += "%";

        return (
            <div style={this.props.style || {}} className="material-flexbox">
                {
                    React.Children.map(this.props.children, child => <FlexboxItem width={width}>{child}</FlexboxItem>)
                }
            </div>
        );
    }
});
FlexboxItem = React.createClass({
    render () {
        return (
            <div style={{WebkitFlex: `1 0 ${this.props.width}`, position: 'relative'}}>
                {this.props.children}
            </div>
        );
    }
});

export default Flexbox;

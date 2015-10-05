import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

let Card;

Card = React.createClass({
    render () {
        return <div className="material-card" style={this.props.style || null}>{this.props.children}</div>;
    }
});

export default Card;

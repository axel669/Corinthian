import React from "react";

import Button from "lib-source/ui/button.js";

let RaisedButton;

RaisedButton = React.createClass({
    statics: {
        propValues: {
            shadow: true,
            color: null,
            textColor: null
        }
    },
    render () {
        let props;

        props = {
            ...this.props,
            shadow: true,
            className: `${this.props.className || ""} raised`
        };

        return <Button {...props} />;
    }
});

export default RaisedButton;

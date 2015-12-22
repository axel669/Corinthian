import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import Button from "lib-source/ui/button.js";

// let RaisedButton;

// RaisedButton = React.createClass({
//     statics: {
//         propValues: {
//             shadow: true,
//             color: null,
//             textColor: null
//         }
//     },
//     render () {
//         let props;

//         props = {
//             ...this.props,
//             shadow: true,
//             className: `${this.props.className || ""} raised`
//         };

//         return <Button {...props} />;
//     }
// });

const RaisedButton = (props = {}) => {
    props = {
        ...props,
        shadow: true
    };

    return <Button {...props} />;
};

export default RaisedButton;

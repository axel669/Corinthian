import React from "react";
import icons from "lib-source/ionic-icons.js";

let Spinner;

Spinner = React.createClass({
    getDefaultProps () {
        return {
            size: 40,
            color: 'black'
        };
    },
    render () {
        let {size, color} = this.props;
        let style;

        style = {
            width: size,
            height: size,
            lineHeight: `${size}px`,
            fontSize: size * 0.7,
            color
        };

        return <div style={style} className="material-spinner">{icons["ion-load-c"]}</div>;
    }
});

export default Spinner;

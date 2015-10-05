import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import Touchable from "lib-source/ui/touchable.js";

let Checkbox;

Checkbox = React.createClass({
    getDefaultProps () {
        return {
            onChange () {},
            checkColor: null
        };
    },
    toggle () {
        this.props.onChange(!this.props.checked);
    },
    render () {
        let {checked, style, text, checkColor} = this.props;
        let checkString;

        if (checked === true) {
            checkString = icons["ion-android-checkbox"];
        } else {
            checkString = icons["ion-android-checkbox-outline-blank"];
        }
        // checkString = (checked === true) ? icons["ion-android-checkbox"] : icons["ion-android-checkbox-outline-blank"];
        style = style || null;

        return (
            <Touchable component="div" onTap={this.toggle} className="material-checkbox" style={style}>
                <div className="material-icon-area checkbox-check" style={{color: checkColor}}>{checkString}</div>
                {text}
            </Touchable>
        );
    }
});

export default Checkbox;

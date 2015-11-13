import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import Touchable from "lib-source/ui/touchable.js";

let Checkbox;

Checkbox = props => {
    let {
        onChange = () => {},
        style = null,
        checkColor = null,
        text = "",
        onIcon = "ion-android-checkbox",
        offIcon = "ion-android-checkbox-outline-blank",
        checked = false
    } = props;
    let checkString;

    if (checked === true) {
        checkString = icons[onIcon];
    } else {
        checkString = icons[offIcon];
    }

    return (
        <Touchable component="div" onTap={() => onChange(checked !== true)} className="material-checkbox" style={style}>
            <div className="material-icon-area checkbox-check" style={{color: checkColor}}>{checkString}</div>
            {text}
        </Touchable>
    );
};

export default Checkbox;

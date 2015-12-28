import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import Touchable from "lib-source/ui/touchable.js";
import CenterContent from "lib-source/ui/centercontent.js";

// let Checkbox;

// Checkbox = props => {
//     let {
//         onChange = () => {},
//         style = null,
//         checkColor = null,
//         text = "",
//         onIcon = "ion-android-checkbox",
//         offIcon = "ion-android-checkbox-outline-blank",
//         checked = false
//     } = props;
//     let checkString;

//     if (checked === true) {
//         checkString = icons[onIcon];
//     } else {
//         checkString = icons[offIcon];
//     }

//     return (
//         <Touchable component="div" onTap={() => onChange(checked !== true)} className="material-checkbox" style={style}>
//             <div className="material-icon-area checkbox-check" style={{color: checkColor}}>{checkString}</div>
//             {text}
//         </Touchable>
//     );
// };
const capitalize = str => `${str.charAt(0).toUpperCase()}${str.substr(1)}`;
const ionOnIcon = "ion-android-checkbox";
const ionOffIcon = "ion-android-checkbox-outline-blank";

const Checkbox = ({height = 40, onChange = () => {}, checkColor = 'black', onIcon = ionOnIcon, checkSide = 'left', offIcon = ionOffIcon, checked, label}) => {
    const checkString = (checked === true) ? icons[onIcon] : icons[offIcon];

    // return (
    //     <Touchable component="div" onTap={() => onChange(checked !== true)} className="material-checkbox" style={style}>
    //         <div className="material-icon-area checkbox-check" style={{color: checkColor}}>{checkString}</div>
    //         {text}
    //     </Touchable>
    // );
    return (
        <Touchable component="div" className="cor-checkbox" style={{height}} onTap={() => onChange(checked !== true)}>
            <CenterContent style={{position: 'absolute', top: 0, [checkSide]: 0, color: checkColor, fontSize: 22}} width={45} height="100%" className="cor-icon">
                {checkString}
            </CenterContent>
            <CenterContent className="cor-checkbox-label" height="100%" width="100%" style={{textAlign: 'left', [`padding${capitalize(checkSide)}`]: 45}}>
                {label}
            </CenterContent>
        </Touchable>
    );
};

export default Checkbox;

import icons from "lib-source/ionic-icons.js";

import Touchable from "lib-source/ui/touchable.js";
import CenterContent from "lib-source/ui/centercontent.js";

import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/checkbox",
    {
        ".wrapper": {
            position: 'relative'
        },
        ".label": {
            padding: 3,
            color: 'black',
            cursor: 'default'
        },
        ".check": {
            width: 35,
            height: 35,
            borderRadius: '50%',
            lineHeight: '35px'
        },
        ".wrapper + ~.cor-touch-active": {
            ".check": {
                backgroundColor: Theme.get("button/activeColor")
            }
        }
    }
);

const capitalize = str => `${str.charAt(0).toUpperCase()}${str.substr(1)}`;
const ionOnIcon = "ion-android-checkbox";
const ionOffIcon = "ion-android-checkbox-outline-blank";

const Checkbox = ({height = 40, onChange = () => {}, checkColor = 'black', onIcon = ionOnIcon, checkSide = 'left', offIcon = ionOffIcon, checked, label}) => {
    const checkString = (checked === true) ? icons[onIcon] : icons[offIcon];
    const iconStyle = {
        position: 'absolute',
        top: 0,
        [checkSide]: 0,
        color: checkColor,
        fontSize: 22
    };

    return (
        <Touchable component="div" className={Style.getClassName("core/checkbox:wrapper")} style={{height}} onTap={() => onChange(checked !== true)}>
            <CenterContent style={iconStyle} width={45} height="100%" className={Style.getClassName("core:icon")}>
                <div className={Style.getClassName("core/checkbox:check")}>{checkString}</div>
            </CenterContent>
            <CenterContent className={Style.getClassName("core/checkbox:label")} height="100%" width="100%" style={{textAlign: 'left', [`padding${capitalize(checkSide)}`]: 45}}>
                {label}
            </CenterContent>
        </Touchable>
    );
};

export default Checkbox;

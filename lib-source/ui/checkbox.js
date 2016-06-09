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

/* -AxelDoc-
module UI {
    element Checkbox {
        @desc Displays a checkbox on screen.
        @managed
        @blockElement
        @prop height {
            @desc The height of the element.
            @type number
            @type CSS string
            @optional
            @default `40`
        }
        @prop onChange {
            @desc The function to call when the checkbox value changes.
            @type function
            @optional
            @default `() => {}`
            @args {
                @arg checked [boolean] The new checked state of the checkbox.
            }
        }
        @prop checkColor {
            @desc The color of the check.
            @type CSS string
            @optional
            @default `"black"`
        }
        @prop onIcon {
            @desc The icon to display when the checkbox is checked.
            @type string
            @optional
            @default `"ion-android-checkbox"`
        }
        @prop onffIcon {
            @desc The icon to display when the checkbox is not checked.
            @type string
            @optional
            @default `"ion-android-checkbox-outline-blank"`
        }
        @prop checkSide {
            @desc The side of the label the checkbox is on.
            @type string
            @optional
            @default `"left"`
        }
        @prop checked {
            @desc Whether or not the checkbox is checked.
            @type boolean
            @required
        }
        @prop label {
            @desc The text to display next to the checbox.
            @type string
            @required
        }
        @example
            ```
            <UI.Checkbox label="Checkbox??" checked={this.state.checked} />
            ```
    }
}
*/
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
Checkbox.valueProp = "checked";
Checkbox.valueFunction = checked => checked;
Checkbox.defaultPropValue = false;

export default Checkbox;

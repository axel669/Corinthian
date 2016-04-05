import icons from "lib-source/ionic-icons.js";

import Button from "lib-source/ui/button.js";

/* -AxelDoc-
module UI {
    element IconButton {
        @desc Displays a button with an icon next to the text.
        @notes The IconButton takes all of the Button props in addition to the ones listed here.

        @prop icon {
            @desc The name of the icon to display.
            @type string
            @required
        }
        @prop iconSize {
            @desc The font-size of the icon.
            @type number
            @type css string
            @optional
            @default `12`
        }
    }
}
*/
const IconButton = ({icon, text, iconSize = 12, ...props} = {}) => {
    const content = <span><span style={{fontFamily: "Ionic", fontSize: iconSize}}>{icons[icon]}</span>{text}</span>;

    return <Button text={content} {...props} />;
};

export default IconButton;

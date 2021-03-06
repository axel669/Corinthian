import {defineComponentStyle} from "lib-source/v2/style.js";
import ionic from "lib-source/v2/ionic-icons";

defineComponentStyle(
    'icon',
    'core',
    {
        "content": {
            fontFamily: "Ionic",
            marginLeft: 2,
            marginRight: 2
        }
    }
);
const Icon = ({name, styleName = 'core', size}) =>
    <span className={`icon-${styleName}-content`} style={{fontSize: size}}>{ionic[name]}</span>;

export default Icon;

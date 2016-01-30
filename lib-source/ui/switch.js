import Touchable from "lib-source/ui/touchable.js";
import CenterContent from "lib-source/ui/centercontent.js";

import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/switch",
    {
        ".wrapper": {
            position: 'relative'
        },
        ".label": {
            color: 'black',
            padding: 3,
            cursor: 'default'
        },
        ".visual": {
            position: 'absolute',
            top: 0,
            right: 0,
            height: 40,
            width: 55
        },
        ".track": {
            position: 'absolute',
            top: 18,
            left: 15,
            right: 15,
            height: 4,
            borderRadius: 2
        },
        ".thumb": {
            position: 'absolute',
            top: '50%',
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: 'white',
            border: '1px solid #CCC',
            boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.45)',
            transform: 'translate(-50%, -50%)'
        }
    }
);

const Switch = ({on, onChange = () => {}, color = null, label}) => {
    const thumbPosition = {
        left: (on === true) ? 40 : 15
    };
    const trackColor = {
        backgroundColor: (on === true) ? Theme.runtime.switch.track.color : "#CCC"
    };
    return (
        <Touchable component="div" className={Style.getClassName("core/switch:wrapper")} onTap={() => onChange(on !== true)}>
            <CenterContent style={{textAlign: 'left', padding: 5}} height={40} className={Style.getClassName("core/switch:label")}>
                {label}
            </CenterContent>
            <div className={Style.getClassName("core/switch:visual")}>
                <div className={Style.getClassName("core/switch:track")} style={trackColor} />
                <div className={Style.getClassName("core/switch:thumb")} style={thumbPosition} />
            </div>
        </Touchable>
    );
};

export default Switch;

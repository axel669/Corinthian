import {defineComponentStyle} from "lib-source/v2/style";
import CenterContent from "lib-source/uiv2/CenterContent";
// import Ripple from "lib-source/uiv2/Ripple";
import Icon from "lib-source/uiv2/Icon";

defineComponentStyle(
    'checkbox',
    'core',
    {
        "container": {
            position: 'relative',
            transition: 'background-color 500ms linear',
            fontSize: 20,
            overflow: 'hidden'
        },
        "container:active": {
            backgroundColor: 'rgba(0, 0, 0, 0.075)',
            transition: 'none'
        },
        "icon": {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: 30,
            color: 'black',
            fontSize: 24,
            transition: 'color 250ms linear'
        },
        "icon[data-checked='true']": {
            color: '#24b324'
        },
        "label": {
            padding: 3,
            paddingRight: 30,
            whiteSpace: 'pre',
            color: 'black'
        },
        "subtitle": {
            color: 'gray',
            fontSize: 14
        }
    }
);
const ionOnIcon = "ion-android-checkbox";
const ionOffIcon = "ion-android-checkbox-outline-blank";

const Checkbox = props => {
    const {
        checked = false,
        onIconName = ionOnIcon,
        offIconName = ionOffIcon,
        label,
        subTitle = null,
        onChange = () => console.warn("No onChange given to checkbox")
    } = props;
    const iconName = (checked === true) ? onIconName : offIconName;
    let content = label;

    if (subTitle !== null) {
        content = (
            <div>
                {label}
                <div className="checkbox-core-subtitle">{subTitle}</div>
            </div>
        );
    }

    return (
        <UI.Touchable component="div" className="checkbox-core-container" onTap={() => onChange(!checked)}>
            <div className="checkbox-core-icon" data-checked={checked}>
                <CenterContent height="100%">
                    <Icon name={iconName} />
                </CenterContent>
            </div>
            <div className="checkbox-core-label">{content}</div>
            {/*<Ripple />*/}
        </UI.Touchable>
    );
};

export default Checkbox;

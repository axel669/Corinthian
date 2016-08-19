import {defineComponentStyle, defineCustomBase} from "lib-source/v2/style";
import CenterContent from "lib-source/uiv2/CenterContent";
// import Ripple from "lib-source/uiv2/Ripple";
import Icon from "lib-source/uiv2/Icon";
import vars from 'lib-source/uiv2/vars';
import {transferProps} from 'lib-source/v2/utils';

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
        onChange = () => console.warn("No onChange given to checkbox"),
        styleName = "core"
    } = props;
    const iconName = (checked === true) ? onIconName : offIconName;
    const iconClassName = `checkbox-core-icon checkbox-${styleName}-icon-custom`;
    const labelClassName = `checkbox-core-label checkbox-${styleName}-label-custom`;
    let content = label;

    if (subTitle !== null) {
        const subtitleClassName = `checkbox-core-subtitle checkbox-${styleName}-subtitle-custom`;
        content = (
            <div>
                {label}
                <div className={subtitleClassName}>{subTitle}</div>
            </div>
        );
    }

    return (
        <UI.Touchable component="div" className="checkbox-core-container" onTap={() => onChange(!checked)}>
            <div className={iconClassName} data-checked={checked}>
                <CenterContent height="100%">
                    <Icon name={iconName} />
                </CenterContent>
            </div>
            <div className={labelClassName}>{content}</div>
            {/*<Ripple />*/}
        </UI.Touchable>
    );
};
Checkbox.componentName = "checkbox";

defineCustomBase(
    Checkbox,
    ({normal = null, checked = null, label = null, subtitle = null}) => transferProps({
        ".checkbox-core-icon/icon-custom": [
            normal,
            {iconColor: 'color'}
        ],
        ".checkbox-core-icon/icon-custom[data-checked='true']": [
            checked,
            {iconColor: 'color'}
        ],
        ".checkbox-core-label/label-custom": [
            label,
            {
                textColor: 'color',
                color: 'backgroundColor'
            }
        ],
        ".checkbox-core-subtitle/subtitle-custom": [
            subtitle,
            {
                textColor: 'color',
                color: 'backgroundColor'
            }
        ]
    })
);

export default Checkbox;

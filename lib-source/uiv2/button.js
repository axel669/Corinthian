import {defineComponentStyle, defineStyleForComponent, defineCustomBase} from "lib-source/v2/style.js";
import Ripple from "lib-source/uiv2/ripple.js";
import Icon from 'lib-source/uiv2/icon.js';
import Touchable from 'lib-source/uiv2/Touchable';
import vars from 'lib-source/uiv2/vars';
import {transferProps} from 'lib-source/v2/utils';

const coolBlue = "#2FB1DF";

defineComponentStyle(
    'button',
    'core',
    {
        "wrapper": {
            position: 'relative',
            textAlign: 'center',
            margin: 4,
            overflow: 'hidden',
            zIndex: "+0",
            whiteSpace: 'pre',
            display: 'inline-block',
            backgroundColor: 'transparent',
            color: 'black',
            borderRadius: 3
        },
        "wrapper:focus": {
            outline: 'none'
        },
        "wrapper[disabled]": {
            backgroundColor: '#eaeaea',
            color: '#a0a0a0'
        },
        "text-wrapper": {
            display: 'table',
            width: '100%'
        },
        "text": {
            height: '100%',
            width: '100%',
            padding: 5,
            paddingLeft: 15,
            paddingRight: 15,
            textAlign: 'center',
            verticalAlign: 'middle',
            whiteSpace: 'pre',
            display: 'table-cell'
        },
        "wrapper > overlay": {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transition: 'background-color 500ms linear'
        },
        ".core-desktop overlay:hover": {
            backgroundColor: vars.hoverColor
        },
        "wrapper:active > overlay": {
            backgroundColor: vars.activeColor,
            transition: 'none'
        }
    }
);

const Button = props => {
    let {
        text,
        onTap = () => console.warn("No onTap given to Button"),
        styleName = "core",
        buttonColor = null,
        textColor = null,
        flush,
        block,
        fill,
        fillHeight,
        padding,
        disabled,
        iconName = null,
        iconSize = null
    } = props;

    const wrapperName = `button-core-wrapper button-${styleName}-wrapper-custom`;

    const wrapperStyle = {backgroundColor: buttonColor};
    const textWrapperStyle = {};
    const textStyle = {color: textColor};
    let rippleElement;
    let onTapHandler;

    if (disabled !== true) {
        // rippleElement = <Ripple />;
        onTapHandler = onTap;
    }
    if (block === true) {
        wrapperStyle.display = 'block';
    }
    if (fill === true) {
        flush = true;
        wrapperStyle.width = '100%';
        wrapperStyle.height = '100%';
        textWrapperStyle.height = '100%';
        textStyle.padding = 0;
    }
    if (flush === true) {
        wrapperStyle.margin = 0;
    }
    if (iconName !== null) {
        text = <span><Icon name={iconName} size={iconSize} />{text}</span>;
    }
    if (fillHeight === true) {
        wrapperStyle.height = '100%';
        textWrapperStyle.height = '100%';
    }

    return (
        <Touchable component="div" tabIndex={-1} className={wrapperName} onTap={onTapHandler} disabled={disabled} style={wrapperStyle}>
            <div className="button-core-text-wrapper" style={textWrapperStyle}>
                <div className="button-core-text" style={textStyle}>{text}</div>
            </div>
            <div className="button-core-overlay" />
            {rippleElement}
        </Touchable>
    );
};
Button.componentName = 'button';

defineCustomBase(
    Button,
    ({normal = null, focus = null, disabled = null}) => transferProps({
        ".button-core-wrapper/wrapper-custom": [
            normal,
            {
                textColor: 'color',
                color: 'backgroundColor',
                borderRadius: 'borderRadius',
                shadow: 'boxShadow'
            }
        ],
        ".button-core-wrapper/wrapper-custom:focus": [
            focus,
            {
                textColor: 'color',
                color: 'backgroundColor',
                borderRadius: 'borderRadius',
                shadow: 'boxShadow'
            }
        ],
        ".button-core-wrapper/wrapper-custom[disabled]": [
            disabled,
            {
                textColor: 'color',
                color: 'backgroundColor',
                borderRadius: 'borderRadius',
                shadow: 'boxShadow'
            }
        ]
    })
);

defineStyleForComponent(
    Button, "cancel",
    {
        normal: {
            color: "#b5263e",
            textColor: 'white'
        }
    }
);
defineStyleForComponent(
    Button, "confirm",
    {
        normal: {
            color: "#30d5a7"
        }
    }
);
defineStyleForComponent(
    Button, "raised",
    {
        normal: {
            color: coolBlue,
            textColor: 'white',
            shadow: '0px 2px 2px rgba(0, 0, 0, 0.2)'
        }
    }
);

export default Button;

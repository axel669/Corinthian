import {defineComponentStyle, Theme} from "lib-source/v2/style.js";
import Ripple from "lib-source/uiv2/ripple.js";
import Icon from 'lib-source/uiv2/icon.js';
import Touchable from 'lib-source/uiv2/Touchable';

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
            backgroundColor: 'transparent',
            color: () => Theme.variable.core.button.textColor,
            textTransform: 'uppercase',
            whiteSpace: 'pre',
            display: 'inline-block',
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
            backgroundColor: 'rgba(0, 0, 0, 0.05)'
        },
        "wrapper:active > overlay": {
            backgroundColor: 'rgba(0, 0, 0, 0.075)',
            transition: 'none'
        }
    }
);
/*
    text
    onTap
    styleName
*/
const Button = props => {
    let {
        text,
        onTap = () => console.warn("No onTap given to Button"),
        styleName = "core",
        buttonColor,
        textColor,
        flush,
        block,
        fill,
        padding,
        disabled,
        iconName = null
    } = props;

    const wrapperName = `button-${styleName}-wrapper`;
    const textWrapperName = `button-${styleName}-text-wrapper`;
    const textName = `button-${styleName}-text`;
    const overlayName = `button-${styleName}-overlay`;

    const wrapperStyle = {};
    const textWrapperStyle = {};
    let rippleElement;
    let onTapHandler;

    if (disabled !== true) {
        rippleElement = <Ripple />;
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
    }
    if (flush === true) {
        wrapperStyle.margin = 0;
    }
    if (iconName !== null) {
        text = <span><Icon name={iconName} />{text}</span>;
    }

    return (
        <Touchable component="div" tabIndex={-1} className={wrapperName} onTap={onTapHandler} disabled={disabled} style={wrapperStyle}>
            <div className={textWrapperName} style={textWrapperStyle}>
                <div className={textName}>{text}</div>
            </div>
            <div className={overlayName} />
            {rippleElement}
        </Touchable>
    );
};

export default Button;

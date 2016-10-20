import {defineComponentStyle, defineStyleForComponent, defineCustomBase} from "lib-source/v2/style";
import {TapEffect} from "lib-source/uiv2/ripple";
import Icon from 'lib-source/uiv2/icon';
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
        }
    }
);

/**
    @type Element
    @name Button
    @parent UI
    @desc Displays a button on screen.
    @property {String} text
        The text to display in the button.
    @property {Function} [optional] onTap
        The function to call when the button is tapped (or clicked on desktop).
        @param {Event}
            The event object for the tap.
    @property {String} [optional] styleName
    @property {CSSValue} [optional] buttonColor
    @property {CSSValue} [optional] textColor
    @property {Boolean} [optional] flush
    @property {Boolean} [optional] fill
    @property {fillHeight} [optional] fillHeight
    @property {CSSValue} [optional] padding
    @property {String} [optional] iconName
    @property {CSSValue} [optional] iconSize
*/
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

    const wrapperName = `button-core-wrapper${App.rippleElement === true ? '' : " button-core-wrapper-noripple"} button-${styleName}-wrapper-custom`;

    const wrapperStyle = {backgroundColor: buttonColor};
    const textWrapperStyle = {};
    const textStyle = {color: textColor};
    let rippleElement;
    let onTapHandler;

    if (disabled !== true) {
        // if (App.rippleEnabled === true) {
        //     rippleElement = <Ripple />;
        // } else {
        //     rippleElement = <Highlight />;
        // }
        rippleElement = <TapEffect />;
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
            {/*<div className="button-core-overlay" />*/}
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

import {defineComponentStyle, Theme} from "lib-source/v2/style.js";
import Ripple from "lib-source/uiv2/ripple.js";
import Icon from 'lib-source/uiv2/icon.js';

defineComponentStyle(
    'icon-button',
    'core',
    {
        "wrapper": {
            position: 'relative',
            textAlign: 'center',
            margin: 4,
            overflow: 'hidden',
            zIndex: "+0",
            backgroundColor: 'transparent',
            color: 'black',
            display: 'inline-block',
            borderRadius: '50%'
        }
    }
);
const IconButton = props => {
    const {
        size = 42,
        name,
        iconSize,
        styleName = 'core'
    } = props;

    const wrapperName = `icon-button-${styleName}-wrapper`;

    return (
        <UI.Touchable component="div" className={wrapperName} style={{width: size, height: size}}>
            <Ripple />
            <div className="button-core-text-wrapper" style={{height: '100%'}}>
                <div className="button-core-text" style={{padding: 0}}><Icon name={name} size={iconSize} /></div>
            </div>
        </UI.Touchable>
    );
};

export default IconButton;

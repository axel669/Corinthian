import {defineComponentStyle} from "lib-source/v2/style";
// import Ripple from "lib-source/uiv2/Ripple";

defineComponentStyle(
    'toggle',
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
        "toggle-container": {
            position: 'absolute',
            right: 13,
            width: 30,
            top: '50%',
            transform: "translateY(-50%)",
            height: 8,
            fontSize: 11,
            borderRadius: 15,
            backgroundColor: 'lightgray',
            lineHeight: '22px'
        },
        "toggle-container[data-on='true']": {
            backgroundColor: '#bed0bd'
        },
        "toggle": {
            WebkitTransition: 'background-color 150ms linear, -webkit-transform 150ms linear',
            transition: 'background-color 150ms linear, transform 150ms linear',
            position: 'absolute',
            left: -11,
            top: -7,
            // top: '50%',
            // transform: "translate(-50%, -50%)",
            height: 22,
            width: 22,
            borderRadius: 15,
            textAlign: 'center',
            border: '1px solid lightgray',
            boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)'
        },
        "toggle[data-on='false']": {
            // left: 0,
            transform: 'translateX(0)',
            backgroundColor: 'white'
        },
        "toggle[data-on='true']": {
            // right: 0,
            // left: 30,
            transform: 'translateX(30px)',
            backgroundColor: '#24b324'
        },
        "label": {
            padding: 3,
            paddingRight: 70,
            whiteSpace: 'pre',
            color: 'black'
        },
        "subtitle": {
            color: 'gray',
            fontSize: 14
        }
    }
);

const Toggle = props => {
    const {
        on = false,
        label,
        subTitle = null,
        onChange = () => console.warn("No onChange given to checkbox")
    } = props;
    let content = label;
    let toggleStyle;

    if (subTitle !== null) {
        content = (
            <div>
                {label}
                <div className="checkbox-core-subtitle">{subTitle}</div>
            </div>
        );
    }

    return (
        <UI.Touchable component="div" className="toggle-core-container" onTap={() => onChange(!on)}>
            <div className="toggle-core-label">{content}</div>
            <div className="toggle-core-toggle-container" data-on={on}>
                <div className="toggle-core-toggle" data-on={on} />
            </div>
            {/*<Ripple />*/}
        </UI.Touchable>
    );
};

export default Toggle;

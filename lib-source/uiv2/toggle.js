import {defineComponentStyle} from "lib-source/v2/style";

const animationTime = 100;
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
            WebkitTransition: `background-color ${animationTime}ms linear, -webkit-transform ${animationTime}ms linear`,
            transition: `background-color ${animationTime}ms linear, transform ${animationTime}ms linear`,
            position: 'absolute',
            left: -11,
            top: -7,
            height: 22,
            width: 22,
            borderRadius: 15,
            textAlign: 'center',
            border: '1px solid lightgray',
            boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)'
        },
        "toggle[data-on='false']": {
            transform: 'translateX(0)',
            backgroundColor: 'white'
        },
        "toggle[data-on='true']": {
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

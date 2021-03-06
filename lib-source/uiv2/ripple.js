import React from "react";

import {defineComponentStyle} from "lib-source/v2/style";
import vars from 'lib-source/uiv2/vars';

const animationDuration = 600;
defineComponentStyle(
    'ripple',
    'core',
    {
        "wrapper": {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: '+5',
            overflow: 'hidden'
            // transform: 'translate3d(0, 0, 0)'
        },
        "dot": {
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            animation: `ripple-core-animation-ripple-effect ${animationDuration}ms linear`,
            borderRadius: '50%',
            display: 'inline-block',
            width: '250%'
        },
        "dot:before": {
            paddingTop: '100%',
            content: `""`,
            float: 'left'
        },
        "!ripple-effect": {
            "0%": {
                transform: 'translate(-50%, -50%) scale(0, 0)',
                // width: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)'
            },
            "70%": {
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
            },
            "100%": {
                transform: 'translate(-50%, -50%) scale(1, 1)',
                // width: '150%',
                backgroundColor: 'rgba(0, 0, 0, 0.0)'
            }
        }
    }
);

class Ripple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: []};
    }

    touch = (evt) => {
        // const {position} = evt.touch;
        const {top, left} = this.refs.wrapper.getBoundingClientRect();
        evt.changedTouches::Array.prototype.forEach(touch => {
            const position = {x: touch.clientX, y: touch.clientY};
            this.triggerRipple(position.x - left, position.y - top);
        });
    }
    triggerRipple = (x = null, y) => {
        let {list} = this.state;

        if (x === null) {
            const {width, height} = this.refs.wrapper.getBoundingClientRect();
            x = width / 2;
            y = height / 2;
        }

        chrono.trigger(
            animationDuration,
            () => {
                if (this.active === false) {
                    return;
                }
                this.setState({
                    list: this.state.list.slice(1)
                });
            }
        );
        list = [...list, {x, y, id: Date.now()}];

        this.setState({list});
    }

    componentDidMount = () => {
        this.active = true;
    }
    componentWillUnmount = () => {
        this.active = false;
        // console.log('removing');
    }

    render = () => {
        const {list} = this.state;

        return (
            <UI.Touchable component="div" className="ripple-core-wrapper" onTouchStart={this.touch} ref="wrapper">
                {list.map(({id, x, y}) => <div key={id} style={{top: y, left: x}} className="ripple-core-dot" />)}
            </UI.Touchable>
        );
    }
}

defineComponentStyle(
    'highlight',
    'core',
    {
        "overlay": {
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
        "*:active > overlay": {
            backgroundColor: vars.activeColor,
            transition: 'none'
        }
    }
);
export const Highlight = () => <div className="highlight-core-overlay" />;

export default Ripple;

export const TapEffect = () => (App.rippleEnabled === true) ? <Ripple /> : <Highlight />;
// export Highlight;

import React from "react";
import ReactDOM from "react-dom";

const forEach = Array.prototype.forEach;
const {sqrt} = Math;

let Touchable;

Touchable = React.createClass({
    getDefaultProps() {
        return {
            onTap() {},
            onHold() {},
            onTouchStart() {},
            onTouchMove() {},
            onTouchEnd() {}
        };
    },
    touchStart(evt) {
        const [touch] = evt.changedTouches;

        ReactDOM.findDOMNode(this).classList.add("cor-touch-active");
        this.props.onTouchStart(evt);

        this.info = {
            id: touch.identifier,
            x: touch.pageX,
            y: touch.pageY
        };
    },
    touchMove(evt) {
        this.props.onTouchMove(evt);

        evt.changedTouches::forEach(touch => {
            if (touch.identifier !== this.info.id) {
                return;
            }

            if (sqrt((touch.pageX - this.info.x) ** 2 + (touch.pageY - this.info.y) ** 2) > 25) {
                ReactDOM.findDOMNode(this).classList.remove("cor-touch-active");
            }
        });
    },
    touchEnd(evt) {
        evt.changedTouches::forEach(touch => {
            if (touch.identifier !== this.info.id) {
                return;
            }

            ReactDOM.findDOMNode(this).classList.remove("cor-touch-active");
        });
        this.props.onTouchEnd(evt);
    },
    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener(
            'tap',
            evt => {
                ::this.props.onTap(evt);
            }
        );
        ReactDOM.findDOMNode(this).addEventListener(
            'hold',
            evt => {
                ::this.props.onHold(evt);
            }
        );
    },
    render() {
        const {component, children, onTap, onHold, ...props} = this.props;
        const Component = component;
        const passedProps = {
            ...props,
            onTouchStart: this.touchStart,
            onTouchMove: this.touchMove,
            onTouchEnd: this.touchEnd,
            onTouchCancel: this.touchEnd
        };
        // let Component;
        // let props;
        //
        // Component = this.props.component;
        // props = {
        //     ...this.props,
        //     onTouchStart: this.touchStart,
        //     onTouchMove: this.touchMove,
        //     onTouchEnd: this.touchEnd,
        //     onTouchCancel: this.touchEnd
        // };
        // props.children = null;
        // props.component = null;
        //
        // console.log(props);

        return <Component {...passedProps}>{children}</Component>;
    }
});

export default Touchable;

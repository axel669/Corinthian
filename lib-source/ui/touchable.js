import React from "react";
import ReactDOM from "react-dom";

const forEach = Array.prototype.forEach;
const {sqrt} = Math;

let Touchable;

Touchable = React.createClass({
    getDefaultProps() {
        return {
            onTap() {},
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
    },
    render() {
        let Component;
        let props;

        Component = this.props.component;
        props = {
            ...this.props,
            onTouchStart: this.touchStart,
            onTouchMove: this.touchMove,
            onTouchEnd: this.touchEnd,
            onTouchCancel: this.touchEnd
        };
        props.children = null;
        props.component = null;

        return <Component {...props}>{this.props.children}</Component>;
    }
});

export default Touchable;

// import React from "react";
// import ReactDOM from "react-dom";

const forEach = Array.prototype.forEach;
const {sqrt} = Math;

let Touchable;

Touchable = React.createClass({
    touchStart(evt) {
        const {onTouchStart} = this.props;
        const [touch] = evt.changedTouches;

        ReactDOM.findDOMNode(this).classList.add("cor-touch-active");
        if (onTouchStart !== undefined) {
            onTouchStart(evt);
        }

        this.info = {
            id: touch.identifier,
            x: touch.pageX,
            y: touch.pageY
        };
    },
    touchMove(evt) {
        const {onTouchMove} = this.props;
        if (onTouchMove !== undefined) {
            onTouchMove(evt);
        }

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
        const {onTouchEnd} = this.props;
        if (onTouchEnd !== undefined) {
            onTouchEnd(evt);
        }
        evt.changedTouches::forEach(touch => {
            if (touch.identifier !== this.info.id) {
                return;
            }

            ReactDOM.findDOMNode(this).classList.remove("cor-touch-active");
        });
        // this.props.onTouchEnd(evt);
    },
    getBoundingClientRect() {
        return this.refs.node.getBoundingClientRect();
    },
    componentDidMount() {
        const {node} = this.refs;
        node.addEventListener(
            'tap',
            evt => {
                const {onTap} = this.props;
                node.focus();
                if (onTap !== undefined) {
                    this::onTap(evt);
                }
                // ::this.props.onTap(evt);
            }
        );
        node.addEventListener(
            'hold',
            evt => {
                const {onHold} = this.props;
                node.focus();
                if (onHold !== undefined) {
                    this::onHold(evt);
                }
                // ::this.props.onHold(evt);
            }
        );
    },
    render() {
        const {component = null, children, onTap, onHold, ...props} = this.props;
        const Component = component;
        const componentProps = {
            ...props,
            onTouchStart: this.touchStart,
            onTouchMove: this.touchMove,
            onTouchEnd: this.touchEnd,
            onTouchCancel: this.touchEnd
        };

        if (Component === null) {
            throw new Error("Must pass a component into Touchable");
        }

        return <Component ref="node" {...componentProps}>{children}</Component>;
    }
});

export default Touchable;

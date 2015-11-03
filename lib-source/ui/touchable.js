import React from "react";
import ReactDOM from "react-dom";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

let Touchable;

Touchable = React.createClass({
    getDefaultProps () {
        return {
            onTap () {},
            onTouchStart () {},
            onTouchEnd () {}
        };
    },
    touchStart (evt) {
        ReactDOM.findDOMNode(this).classList.add("material-touch-active");
        this.props.onTouchStart(evt);
    },
    touchEnd (evt) {
        ReactDOM.findDOMNode(this).classList.remove("material-touch-active");
        this.props.onTouchEnd(evt);
    },
    componentDidMount () {
        ReactDOM.findDOMNode(this).addEventListener(
            'tap',
            evt => {
                ::this.props.onTap(evt);
            }
        );
    },
    render () {
        let Component;
        let props;

        Component = this.props.component;
        props = {
            ...this.props,
            onTouchStart: this.touchStart,
            onTouchEnd: this.touchEnd,
            onTouchCancel: this.touchEnd
        };
        props.children = null;
        props.component = null;

        return <Component {...props}>{this.props.children}</Component>;
    }
});

export default Touchable;

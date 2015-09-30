import React from "react";

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
        this.getDOMNode().classList.add("material-touch-active");
        this.props.onTouchStart(evt);
    },
    touchEnd (evt) {
        this.getDOMNode().classList.remove("material-touch-active");
        this.props.onTouchEnd(evt);
    },
    componentDidMount () {
        this.getDOMNode().addEventListener(
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

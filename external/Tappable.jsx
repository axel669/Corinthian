var Tappable;

Tappable = React.createClass({
    getDefaultProps: function () {
        return {
            onTap: () => {},
            onTouchStart: () => {},
            onTouchEnd: () => {}
        };
    },
    touchStart: function (evt) {
        this.getDOMNode().classList.add("material-touch-active");

        this.props.onTouchStart(evt);
    },
    touchEnd: function (evt) {
        this.getDOMNode().classList.remove("material-touch-active");

        this.props.onTouchEnd(evt);
    },
    componentDidMount: function () {
        var node;

        node = this.getDOMNode();

        node.addEventListener(
            "tap",
            evt => {
                this.props.onTap.call(this, evt);
            }
        );
    },
    render: function () {
        var Component = this.props.component;

        return <Component {...this.props} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd} onTouchCancel={this.touchEnd}>{this.props.children}</Component>;
    }
});

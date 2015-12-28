import React from "react";
// import ReactDOM from "react-dom";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

const ScrollContainer = React.createClass({
    componentDidMount () {
        const node = this.refs.scroller;
        let scrollInfo;

        scrollInfo = (scrollContainers.hasOwnProperty(this._rootNodeID) === true) ? scrollContainers[this._rootNodeID] : {scrollX: 0, scrollY: 0};

        node.scrollLeft = scrollInfo.scrollX;
        node.scrollTop = scrollInfo.scrollY;

        // delete scrollContainers[this._rootNodeID];
    },
    componentWillUnmount () {
        const node = this.refs.scroller;

        scrollContainers[this._rootNodeID] = {
            scrollX: node.scrollLeft,
            scrollY: node.scrollTop
        };
    },
    render () {
        const {style = {}, children} = this.props;

        return (
            <div className="cor-scrollcontainer" style={style} ref="scroller">
                {children}
            </div>
        );
    }
});
let scrollContainers;

scrollContainers = {};

export default ScrollContainer;

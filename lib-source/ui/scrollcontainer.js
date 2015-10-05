import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

let ScrollContainer;
let scrollContainers;

scrollContainers = {};
ScrollContainer = React.createClass({
    componentDidMount () {
        let node;
        let scrollInfo;

        node = this.getDOMNode();
        scrollInfo = (scrollContainers.hasOwnProperty(this._rootNodeID) === true) ? scrollContainers[this._rootNodeID] : {scrollX: 0, scrollY: 0};

        node.scrollLeft = scrollInfo.scrollX;
        node.scrollTop = scrollInfo.scrollY;

        delete scrollContainers[this._rootNodeID];
        // console.log(this.state, node);
    },
    componentWillUnmount () {
        let node;

        node = this.getDOMNode();
        scrollContainers[this._rootNodeID] = {
            scrollX: node.scrollLeft,
            scrollY: node.scrollTop
        };
    },
    render () {
        return (
            <div className="material-scrollable material-container" style={this.props.style || {}}>
                {this.props.children}
            </div>
        );
    }
});

export default ScrollContainer;

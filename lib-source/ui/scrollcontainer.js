import React from "react";

import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/scrollContainer",
    {
        ".container": {
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            width: '100%',
            height: '100%',
            padding: 0,
            margin: 0
        }
    }
);

const ScrollContainer = React.createClass({
    componentDidMount() {
        const node = this.refs.scroller;
        let scrollInfo;

        scrollInfo = (scrollContainers.hasOwnProperty(this._rootNodeID) === true) ? scrollContainers[this._rootNodeID] : {scrollX: 0, scrollY: 0};

        node.scrollLeft = scrollInfo.scrollX;
        node.scrollTop = scrollInfo.scrollY;
    },
    componentWillUnmount() {
        const node = this.refs.scroller;

        scrollContainers[this._rootNodeID] = {
            scrollX: node.scrollLeft,
            scrollY: node.scrollTop
        };
    },
    render() {
        const {style = {}, children} = this.props;

        return (
            <div className={Style.getClassName("core/scrollContainer:container")} style={style} ref="scroller">
                {children}
            </div>
        );
    }
});
let scrollContainers;

scrollContainers = {};

export default ScrollContainer;

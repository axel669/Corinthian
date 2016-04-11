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

// const ScrollContainer = React.createClass({
//     componentDidMount() {
//         const node = this.refs.scroller;
//         const id = this._reactInternalInstance._rootNodeID;
//         const vars = App.navigation.vars;
//         let scrollInfo;

//         if (vars.hasOwnProperty(id) === true) {
//             scrollInfo = App.navigation.vars[id];
//         } else {
//             scrollInfo = {scrollX: 0, scrollY: 0};
//         }

//         node.scrollLeft = scrollInfo.scrollX;
//         node.scrollTop = scrollInfo.scrollY;
//         this.vars = vars;
//     },
//     componentWillUnmount() {
//         const node = this.refs.scroller;
//         const id = this._reactInternalInstance._rootNodeID;

//         this.vars[id] = {
//             scrollX: node.scrollLeft,
//             scrollY: node.scrollTop
//         };
//     },
//     render() {
//         const {style = {}, children} = this.props;

//         return (
//             <div className={Style.getClassName("core/scrollContainer:container")} style={style} ref="scroller">
//                 {children}
//             </div>
//         );
//     }
// });

// export default ScrollContainer;

export default ({style = null, children}) => (
    <div className={Style.getClassName("core/scrollContainer:container")} style={style}>
        {children}
    </div>
);

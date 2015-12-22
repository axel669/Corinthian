import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

// const Flexbox = React.createClass({
//     render () {
//         let {cols} = this.props;
//         let width;

//         width = 100 / cols;
//         if (isNaN(width) === true) {
//             throw new Error("Invalid column value: " + cols);
//         }
//         width += "%";

//         return (
//             <div style={this.props.style || {}} className="cor-flexbox">
//                 {
//                     React.Children.map(this.props.children, child => <FlexboxItem width={width}>{child}</FlexboxItem>)
//                 }
//             </div>
//         );
//     }
// });
// const FlexboxItem = React.createClass({
//     render () {
//         return (
//             <div style={{WebkitFlex: `1 0 ${this.props.width}`, flex: `1 0 ${this.props.width}`, position: 'relative'}}>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

const Flexbox = ({colCount, width = null, children}) => {
    const flexWidth = 100 / colCount;

    if (isNaN(flexWidth) === true) {
        throw new Error("Invalid column property");
    }

    children = React.Children.toArray(children);

    return (
        <div style={{width}} className="cor-flexbox">
            {children.map(child => <FlexboxItem width={flexWidth} key={child.key} content={child} />)}
        </div>
    );
};
const FlexboxItem = ({content, width}) => {
    const flexCSS = `1 0 ${width}%`;
    const itemStyle = {
        WebkitFlex: flexCSS,
        flex: flexCSS,
        position: 'relative'
    };

    return <div style={itemStyle}>{content}</div>;
};

export default Flexbox;

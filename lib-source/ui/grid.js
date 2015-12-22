import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

// const Grid = React.createClass({
//     render () {
//         let cellHeight;
//         let cellWidth;
//         let children;
//         let colNum;
//         let rowNum;
//         let rows;
//         let style;

//         let gridWidth;
//         let gridHeight;

//         children = [];
//         React.Children.forEach(
//             this.props.children,
//             child => children.push(child)
//         );
//         rowNum = this.props.rows;
//         colNum = this.props.cols;
//         cellWidth = 100 / colNum;
//         cellHeight = 100 / rowNum;
//         rows = fc.range(
//             rowNum,
//             rown => {
//                 let rowChildren;

//                 rowChildren = children.slice(rown * colNum, rown * colNum + colNum);
//                 return rowChildren.map((child, col) => <GridItem key={`${rown}:${col}`} row={rown} col={col} width={cellWidth} height={cellHeight}>{child}</GridItem>);
//             }
//         );

//         gridWidth = this.props.width || '100%';
//         gridHeight = this.props.height || '100%';

//         style = {
//             ...(this.props.style || {}),
//             width: gridWidth,
//             height: gridHeight
//         };

//         return (
//             <div className="material-grid" style={style}>
//                 {rows.reduce(
//                     (kidz, row) => {
//                         kidz = kidz.concat(row);
//                         return kidz;
//                     },
//                     []
//                 )}
//             </div>
//         );
//     }
// });
// const GridItem = React.createClass({
//     render () {
//         let {row, col, width, height} = this.props;
//         let style;

//         style = {
//             left: (col * width) + "%",
//             top: (row * height) + "%",
//             width: width + "%",
//             height: height + "%"
//         };

//         return (
//             <div className="material-grid-item" style={style}>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

const Grid = ({children, colCount, rowCount, width = null, height = null}) => {
    if (height === null) {
        throw new Error("Height needs to be given to the grid");
    }
    const itemWidth = 100 / colCount;
    const itemHeight = 100 / rowCount;
    const gridStyle = {width, height};

    children = React.Children.toArray(children);

    return (
        <div style={gridStyle} className="cor-grid">
            {children.map((child, index) => <GridItem key={index} width={itemWidth} height={itemHeight} x={index % colCount} y={Math.floor(index / colCount)} content={child} />)}
        </div>
    );
};
const GridItem = ({width, height, x, y, content}) => {
    const style = {
        width: `${width}%`,
        height: `${height}%`,
        left: `${x * width}%`,
        top: `${y * height}%`
    };

    return <div className="cor-grid-item" style={style}>{content}</div>;
};

export default Grid;

import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

// let CenterContent;

// CenterContent = React.createClass({
//     render () {
//         let {vertical = 'center', horizontal = 'center', width = '100%', height = '100%', style = {}} = this.props;

//         if (vertical === 'center') {
//             vertical = 'middle';
//         }

//         return (
//             <div style={{...style, width: '100%', maxWidth: width, margin: 'auto', height, display: 'table'}}>
//                 <div style={{display: 'table-cell', textAlign: horizontal, verticalAlign: vertical}}>
//                     {this.props.children}
//                 </div>
//             </div>
//         );
//     }
// });

// CenterContent = ({vertical = 'center', horizontal = 'center', width = '100%', height = '100%', style = {}, children} = {}) => {
//     if (vertical === 'center') {
//             vertical = 'middle';
//     }

//     return (
//         <div style={{...style, width: '100%', maxWidth: width, margin: 'auto', height, display: 'table'}}>
//             <div style={{display: 'table-cell', textAlign: horizontal, verticalAlign: vertical, maxWidth: width}}>
//                 {children}
//             </div>
//         </div>
//     );
// };
const CenterContent = ({width, height, children, style = {}, className = ""}) => (
    <div style={{...style, width, height}} className={`cor-center-content ${className}`}>
        <div>{children}</div>
    </div>
);

export default CenterContent;

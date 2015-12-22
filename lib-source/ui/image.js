import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

// let Image;
// let cachedImages;

// cachedImages = new Set();
// Image = React.createClass({
//     getInitialState () {
//         return {
//             loaded: cachedImages.has(this.props.source)
//         };
//     },
//     getDefaultProps () {
//         return {
//             width: null,
//             height: null,
//             maintainAR: true,
//             displayType: "fit",
//             fillWidth: null,
//             fillHeight: null
//         };
//     },
//     imageLoaded (evt) {
//         // setTimeout(() => this.setState({loaded: true}), 1000);
//         cachedImages.add(this.props.source);
//         this.setState({loaded: true});
//     },
//     render () {
//         let {loaded} = this.state;
//         let {width, height, maintainAR, displayType, fillHeight, fillWidth, source} = this.props;
//         let content;
//         let style;

//         style = {
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center center',
//             position: 'relative',
//             width,
//             height
//         };
//         if (loaded === false) {
//             content = (
//                 <div style={{position: 'absolute', top: '50%', left: '50%', WebkitTransform: "translate(-50%, -50%)"}}>
//                     Loading
//                     <img style={{display: "none"}} src={source} onLoad={this.imageLoaded} />
//                 </div>
//             );
//         } else {
//             content = null;
//             style.backgroundImage = `url("${source}")`;
//         }

//         if (maintainAR === true) {
//             if (displayType === 'fit') {
//                 style.backgroundSize = 'contain';
//             }
//             if (displayType === 'clip') {
//                 style.backgroundSize = 'cover';
//             }
//         } else {
//             style.backgroundSize = `${fillWidth} ${fillHeight}`;
//         }

//         return (
//             <div style={style}>
//                 {content}
//             </div>
//         );
//     }
// });

const Image = ({source, width, height = null, display = {type: "fit"}, slice = null}) => {
    let style;

    if (slice === null) {
        style = {
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundImage: `url("${source}")`,
            position: 'relative',
            width,
            height
        };

        switch (display.type) {
            case 'fit':
                style.backgroundSize = 'contain';
                break;

            case 'clip':
                style.backgroundSize = 'cover';
                break;

            default:
                style.backgroundSize = `${display.fill.width} ${display.fill.height}`;
        }
    } else {
        const borderImageCSS = `url("${source}") ${slice.left} ${slice.right} ${slice.top} ${slice.bottom} stretch`;
        style = {
            WebkitBorderImage: borderImageCSS,
            MozBorderImage: borderImageCSS,
            borderWidth: `${slice.top} ${slice.left} ${slice.bottom} ${slice.right}`,
            width,
            height
        };
    }

    return <div style={style} />;
};

export default Image;

import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import Button from "lib-source/ui/button.js";
import Image from "lib-source/ui/Image.js";

// let ImageButton;

// ImageButton = React.createClass({
//     getDefaultProps () {
//         return {imageSize: "90%"};
//     },
//     render () {
//         let {source, imageSize} = this.props;
//         let newProps;
//         let style;

//         imageSize = parseFloat(imageSize);
//         style = {
//             position: 'absolute',
//             top: `${(100 - imageSize) / 2}%`,
//             left: `${(100 - imageSize) / 2}%`,
//             width: `${imageSize}%`,
//             height: `${imageSize}%`,
//             backgroundImage: `url("${source}")`,
//             backgroundSize: 'contain',
//             backgroundPosition: 'center center',
//             backgroundRepeat: 'no-repeat'
//         };

//         newProps = {
//             ...this.props,
//             text: <div style={style} />
//         };

//         return <Button {...newProps} />;
//     }
// });

const ImageButton = ({source, width, display = {type: "fit"}, slice = null, text, ...buttonProps}) => {
    const imageProps = {
        height: '100%',
        source,
        width,
        display,
        slice
    };
    const content = (
        <div style={{position: 'relative', height: '100%'}}>
            <Image {...imageProps} />
            <div style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}} className="cor-center-content">
                <div>{text}</div>
            </div>
        </div>
    );

    return <Button {...buttonProps} text={content} />;
};

export default ImageButton;

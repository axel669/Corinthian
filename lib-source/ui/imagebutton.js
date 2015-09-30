import React from "react";

import Button from "lib-source/ui/button.js";

let ImageButton;

ImageButton = React.createClass({
    getDefaultProps () {
        return {imageSize: "90%"};
    },
    render () {
        let {source, imageSize} = this.props;
        let newProps;
        let style;

        imageSize = parseFloat(imageSize);
        style = {
            position: 'absolute',
            top: `${(100 - imageSize) / 2}%`,
            left: `${(100 - imageSize) / 2}%`,
            width: `${imageSize}%`,
            height: `${imageSize}%`,
            backgroundImage: `url("${source}")`,
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
        };

        newProps = {
            ...this.props,
            text: <div style={style} />
        };

        return <Button {...newProps} />;
    }
});

export default ImageButton;

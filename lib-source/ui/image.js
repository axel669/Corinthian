import React from "react";

let Image;
let cachedImages;

cachedImages = new Set();
Image = React.createClass({
    getInitialState () {
        return {
            loaded: cachedImages.has(this.props.source)
        };
    },
    getDefaultProps () {
        return {
            width: null,
            height: null,
            maintainAR: true,
            displayType: "fit",
            fillWidth: null,
            fillHeight: null
        };
    },
    imageLoaded (evt) {
        // setTimeout(() => this.setState({loaded: true}), 1000);
        cachedImages.add(this.props.source);
        this.setState({loaded: true});
    },
    render () {
        let {loaded} = this.state;
        let {width, height, maintainAR, displayType, fillHeight, fillWidth, source} = this.props;
        let content;
        let style;

        style = {
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            position: 'relative',
            width,
            height
        };
        if (loaded === false) {
            content = (
                <div style={{position: 'absolute', top: '50%', left: '50%', WebkitTransform: "translate(-50%, -50%)"}}>
                    Loading
                    <img style={{display: "none"}} src={source} onLoad={this.imageLoaded} />
                </div>
            );
        } else {
            content = null;
            style.backgroundImage = `url("${source}")`;
        }

        if (maintainAR === true) {
            if (displayType === 'fit') {
                style.backgroundSize = 'contain';
            }
            if (displayType === 'clip') {
                style.backgroundSize = 'cover';
            }
        } else {
            style.backgroundSize = `${fillWidth} ${fillHeight}`;
        }

        return (
            <div style={style}>
                {content}
            </div>
        );
    }
});

export default Image;

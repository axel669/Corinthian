const Image = ({source, width = '100%', height = null, imageSize = 'fit', color, block = false}) => {
    if (height === null) {
        throw new Error("Need to give image height");
    }

    const style = {
        display: block === true ? "block" : "inline-block",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: `url("${source}")`,
        position: 'relative',
        backgroundColor: color,
        width,
        height
    };

    switch (imageSize) {
        case 'fit':
            style.backgroundSize = 'contain';
            break;

        case 'clip':
            style.backgroundSize = 'cover';
            break;

        default:
            style.backgroundSize = imageSize;
    }

    return <div style={style} />;
};

export default Image;

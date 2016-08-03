const Image = ({source, width, height = null, imageSize = 'fit', color}) => {
    if (height === null) {
        throw new Error("Need to give image height");
    }

    const style = {
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

/* -AxelDoc-
module UI {
    element Image {
    }
}
*/
const Image = ({source, width, height = null, display = {type: "fit"}, slice = null}) => {
    if (height === null) {
        throw new Error("Need to give image height");
    }
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

import Button from "lib-source/ui/button.js";
import Image from "lib-source/ui/Image.js";

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
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} className="cor-center-content">
                <div>{text}</div>
            </div>
        </div>
    );

    return <Button {...buttonProps} text={content} />;
};

export default ImageButton;

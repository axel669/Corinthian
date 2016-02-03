import icons from "lib-source/ionic-icons.js";

import Button from "lib-source/ui/button.js";

const IconButton = ({icon, text, iconSize = 12, ...props} = {}) => {
    const content = <span><span style={{fontFamily: "Ionic", fontSize: iconSize}}>{icons[icon]}</span>{text}</span>;

    return <Button text={content} {...props} />;
};

export default IconButton;

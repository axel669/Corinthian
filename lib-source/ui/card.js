import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/card",
    {
        ".card": {
            margin: 10,
            padding: 7,
            WebkitBoxShadow: '1px 2px 4px rgba(0, 0, 0, 0.25)',
            border: '1px solid #e9e9e9',
            backgroundColor: Theme.get("app/backgroundColor")
        }
    }
);

const Card = ({style = null, children}) => <div className={Style.getClassName("core/card:card")} style={style}>{children}</div>;

export default Card;

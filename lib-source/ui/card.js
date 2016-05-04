import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/card",
    {
        ".card": {
            margin: 10,
            padding: 7,
            boxShadow: '1px 2px 2px rgba(120, 120, 120, 0.15)',
            border: '1px solid #e9e9e9',
            backgroundColor: 'white'
        }
    }
);

/* -AxelDoc-
module UI {
    element Card {
        @desc A simple separator for content to break up longer streams of content.
        @blockElement
        @hasChildren
        @prop style {
            @desc Style to apply to the container. See React inline styles for information.
            @type object
            @optional
            @default `null`
        }
        @prop title {
            @desc The title to display on the card.
            @type string
            @optional
            @default `null`
        }
        @example
            ```
            <UI.Card>
                Look, content!
            </UI.Card>
            ```
    }
}
*/
const Card = ({style = null, children, title = null}) => {
    let content;

    if (title !== null) {
        content = (
            <div>
                <div style={{fontSize: 20, padding: 3, color: 'black'}}>{title}</div>
                {children}
            </div>
        );
    } else {
        content = children;
    }
    return <div className={Style.getClassName("core/card:card")} style={style}>{content}</div>;
}

export default Card;

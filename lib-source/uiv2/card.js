import {defineComponentStyle} from "lib-source/v2/style";

defineComponentStyle(
    'card',
    'core',
    {
        "container": {
            margin: 5,
            padding: 5,
            boxShadow: '1px 2px 2px rgba(120, 120, 120, 0.15)',
            border: '1px solid #e0e0e0',
            backgroundColor: 'white',
            borderRadius: 3,
            overflow: 'hidden'
        },
        "title": {
            fontSize: 20,
            padding: 5,
            color: 'black',
            margin: -5,
            marginBottom: 0
        }
    }
);
const Card = ({children, title = null, titleColor = null, titleTextColor = null}) => {
    let content;

    if (title === null) {
        content = children;
    } else {
        content = (
            <div>
                <div className="card-core-title" style={{color: titleTextColor, backgroundColor: titleColor}}>{title}</div>
                {children}
            </div>
        );
    }

    return (
        <div className="card-core-container">
            {content}
        </div>
    );
};
Card.componentStyleName = 'card'

export default Card;

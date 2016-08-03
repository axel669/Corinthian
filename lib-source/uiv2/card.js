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
            borderRadius: 3
        },
        "title": {
            fontSize: 20,
            padding: 3,
            color: 'black'
        }
    }
);
const Card = ({children, title = null}) => {
    let content;

    if (title === null) {
        content = children;
    } else {
        content = (
            <div>
                <div className="card-core-title">{title}</div>
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

export default Card;
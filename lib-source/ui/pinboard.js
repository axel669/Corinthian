import React from 'react';

const PinBoard = ({children, width, height = null}) => {
    if (height === null) {
        throw new Error("PinBoard requires a height");
    }
    children = React.Children.toArray(children);

    children = children.map(
        ({props: {children, detail}}, index) => {
            return <div key={index} style={{...detail, position: 'absolute'}}>{children}</div>;
        }
    );

    return <div style={{position: 'relative', top: 0, left: 0, width, height}}>{children}</div>;
};

export default PinBoard;

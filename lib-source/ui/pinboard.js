import React from 'react';

const Pinboard = ({children, width, height = null}) => {
    if (height === null) {
        throw new Error("Pinboard requires a height");
    }
    children = React.Children.toArray(children);

    children = children.map(
        ({props: {children, detail}}, index) => {
            return <div key={index} style={{...detail, position: 'absolute'}}>{children}</div>;
        }
    );

    return <div style={{position: 'relative', top: 0, left: 0, width, height}}>{children}</div>;
};

export default Pinboard;

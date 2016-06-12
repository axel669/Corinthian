import React from 'react';
import Touchable from "lib-source/ui/touchable";
import CenterContent from "lib-source/ui/centercontent";

const Pinboard = ({children, width, height = null}) => {
    if (height === null) {
        throw new Error("Pinboard requires a height");
    }
    children = React.Children.toArray(children);

    children = children.map(
        (child, index) => {
            const {props: {pinInfo}} = child;

            return <div key={index} style={{...pinInfo, position: 'absolute'}}>{child}</div>;
        }
    );

    return <div style={{position: 'relative', top: 0, left: 0, width, height}}>{children}</div>;
};
Pinboard.RadioItem = ({checked, children, onTap}) => {
    // const className = `cor-grid-radio-item cor-grid-radio-item-${checked}`;
    const gridClassName = Style.getClassNames({
        "core/radio:gridItemChecked": checked
    });

    return (
        <Touchable component="div" style={{width: '100%', height: '100%'}} onTap={onTap} className={gridClassName}>
            <CenterContent width="100%" height="100%" className={Style.getClassName("core/radio:gridOverlay")}>
                {children}
            </CenterContent>
        </Touchable>
    );
};

export default Pinboard;

import {defineComponentStyle} from "lib-source/v2/style";
import Touchable from "lib-source/uiv2/Touchable";

const coolBlue = "#2FB1DF";

defineComponentStyle(
    "pinboard",
    'core',
    {
        'container': {
            position: 'relative'
        }
    }
);
const Pinboard = ({children, width = '100%', height = '100%'}) => {
    children = React.Children.toArray(children);

    children = children.map(
        (child, index) => {
            const {pinInfo, ...props} = child.props;
            // const {props: {pinInfo}} = child;
            const displayedChild = <child.type {...props} />;
            // child = React.clone
            // console.log(child.type);

            return <div key={index} style={{...pinInfo, position: 'absolute'}}>{displayedChild}</div>;
        }
    );

    return <div style={{position: 'relative', width, height}}>{children}</div>;
};
defineComponentStyle(
    "pinboard-radio",
    'core',
    {
        'item': {
            width: '100%',
            height: '100%',
            transition: 'background-color 500ms linear'
        },
        "item:active": {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            transition: 'none'
        },
        "item[data-checked='true']": {
            backgroundColor: coolBlue,
            color: 'white',
            transition: 'none'
        }
    }
);
Pinboard.RadioItem = ({children, checked, onTap}) => (
    <Touchable component="div" className="pinboard-radio-core-item" data-checked={checked} onTap={onTap}>
        {children}
    </Touchable>
);

export default Pinboard;

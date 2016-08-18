import {defineComponentStyle} from "lib-source/v2/style";

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

export default Pinboard;

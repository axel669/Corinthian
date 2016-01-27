import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/flexbox",
    {
        ".container": {
            display: ['-webkit-flex', 'flex'],
            WebkitFlexWrap: 'wrap',
            flexWrap: 'wrap'
        }
    }
);

const Flexbox = ({colCount, width = null, children}) => {
    const flexWidth = 100 / colCount;

    if (isNaN(flexWidth) === true) {
        throw new Error("Invalid column property");
    }

    children = React.Children.toArray(children);

    return (
        <div style={{width}} className={Style.getClassName("core/flexbox:container")}>
            {children.map(child => <FlexboxItem width={flexWidth} key={child.key} content={child} />)}
        </div>
    );
};
const FlexboxItem = ({content, width}) => {
    const flexCSS = `1 0 ${width}%`;
    const itemStyle = {
        WebkitFlex: flexCSS,
        flex: flexCSS,
        position: 'relative'
    };

    return <div style={itemStyle}>{content}</div>;
};

export default Flexbox;

import {defineComponentStyle} from "lib-source/v2/style";

defineComponentStyle(
    'flexbox',
    'core',
    {
        "container": {
            display: ['-webkit-flex', 'flex'],
            WebkitFlexWrap: 'wrap',
            flexWrap: 'wrap'
        }
    }
);
const Flexbox = props => {
    const {
        colCount,
        width = '100%',
        padEnd = false,
        minItemWidth = null,
        maxItemWidth = null
    } = props;
    const flexWidth = 100 / colCount;
    let {children} = props;

    if (isNaN(flexWidth) === true || flexWidth <= 0) {
        throw new Error("Invalid width property for Flexbox");
    }

    children = React.Children.toArray(children);
    if (padEnd === true && minItemWidth === null && maxItemWidth === null) {
        const filler = new Array(colCount - children.length % colCount)
                        .fill(null)
                        .map(() => <div />);
        children = [...children, ...filler];
    }

    children = children.map(
        (child, index) =>
            <FlexboxItem key={index} width={flexWidth} content={child} minWidth={minItemWidth} maxWidth={maxItemWidth} />
    )

    return (
        <div style={{width}} className="flexbox-core-container">
            {children}
        </div>
    );
};
const FlexboxItem = ({content, width, maxWidth, minWidth}) => {
    const flexCSS = `1 0 ${width}%`;
    const itemStyle = {
        WebkitFlex: flexCSS,
        flex: flexCSS,
        maxWidth,
        minWidth
    };

    return <div style={itemStyle}>{content}</div>;
};

export default Flexbox;

import {defineComponentStyle} from "lib-source/v2/style";
import Touchable from "lib-source/uiv2/Touchable";

const coolBlue = "#2FB1DF";

defineComponentStyle(
    'flexbox',
    'core',
    {
        "container": {
            display: ['-webkit-flex', 'flex'],
            WebkitFlexWrap: 'wrap',
            flexWrap: 'wrap',
            // alignItems: 'center',
            // justifyContent: 'center'
        }
    }
);
const Flexbox = props => {
    const {
        colCount,
        width = '100%',
        padEnd = false,
        minItemWidth = null,
        maxItemWidth = null,
        align = 'center'
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

    // console.trace();

    return (
        <div style={{width, justifyContent: align, WebkitJustifyContent: align}} className="flexbox-core-container">
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

defineComponentStyle(
    "flexbox-radio",
    'core',
    {
        'item': {
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
Flexbox.RadioItem = ({children, checked, onTap}) => (
    <Touchable component="div" className="flexbox-radio-core-item" data-checked={checked} onTap={onTap}>
        {children}
    </Touchable>
);

export default Flexbox;

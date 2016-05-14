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

/* -AxelDoc-
module UI {
    element Flexbox {
        @desc A container that will apply the CSS Flexbox layout to its children.
        @blockElement
        @hasChildren
        @prop width {
            @desc The width of the element.
            @type number
            @type CSS string
            @optional
            @default `null` (width of the container)
        }
        @prop colCount {
            @desc The number of columns to split content into.
            @type number
            @required
        }
        @example
            ```
            <UI.Flexbox colCount={3}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 5</div>
                <div>Item 6</div>
                <div>Item 7</div>
            </UI.Flexbox>
            ```
    }
}
*/
const Flexbox = ({colCount, width = null, children, maxItemWidth, autopad = false, minWidth}) => {
    const flexWidth = 100 / colCount;

    if (isNaN(flexWidth) === true) {
        throw new Error("Invalid column property");
    }

    children = React.Children.toArray(children);
    if (autopad === true) {
        const extra = factotum.range(children.length % colCount, () => <div />);
        children = [...children, ...extra];
    }

    return (
        <div style={{width}} className={Style.getClassName("core/flexbox:container")}>
            {children.map((child, index) => <FlexboxItem width={flexWidth} minWidth={minWidth} maxWidth={maxItemWidth} key={index} content={child} />)}
        </div>
    );
};
const FlexboxItem = ({content, width, maxWidth, minWidth}) => {
    const flexCSS = `1 0 ${width}%`;
    const itemStyle = {
        WebkitFlex: flexCSS,
        flex: flexCSS,
        position: 'relative',
        maxWidth,
        minWidth
    };

    return <div style={itemStyle}>{content}</div>;
};

export default Flexbox;

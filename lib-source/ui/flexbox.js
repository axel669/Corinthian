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

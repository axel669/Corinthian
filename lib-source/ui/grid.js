/* -AxelDoc-
module UI {
    element Grid {
        @desc Displays items in a grid that is evenly split into rows and columns.
        @blockElement
        @hasChildren

        @prop width {
            @desc The width of the container.
            @type number
            @type css string
            @optional
            @default `null`
        }
        @prop height {
            @desc The height of the container.
            @type number
            @type css string
            @required
        }
        @prop colCount {
            @desc The number of columns.
            @type number
            @required
        }
        @prop rowCount {
            @desc The number of rows.
            @type number
            @required
        }
    }
}
*/
import Touchable from "lib-source/ui/touchable";
import CenterContent from "lib-source/ui/centercontent";

const Grid = ({children, colCount, rowCount, width = null, height = null}) => {
    if (height === null) {
        throw new Error("Height needs to be given to the grid");
    }
    const itemWidth = 100 / colCount;
    const itemHeight = 100 / rowCount;
    const gridStyle = {
        position: 'relative',
        width,
        height
    };

    children = React.Children.toArray(children);

    return (
        <div style={gridStyle}>
            {children.map((child, index) => <GridItem key={index} width={itemWidth} height={itemHeight} x={index % colCount} y={Math.floor(index / colCount)} content={child} />)}
        </div>
    );
};
const GridItem = ({width, height, x, y, content}) => {
    const style = {
        position: 'absolute',
        width: `${width}%`,
        height: `${height}%`,
        left: `${x * width}%`,
        top: `${y * height}%`
    };

    return <div className="cor-grid-item" style={style}>{content}</div>;
};

Grid.RadioItem = ({checked, children, onTap}) => {
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

export default Grid;

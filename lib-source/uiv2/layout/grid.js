import {defineComponentStyle} from "lib-source/v2/style";
import Touchable from "lib-source/uiv2/Touchable";

const coolBlue = "#2FB1DF";

defineComponentStyle(
    'grid',
    'core',
    {
        "item": {
            position: "absolute"
        }
    }
);

const Grid = ({children, colCount, rowCount, width = '100%', height = '100%'}) => {
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
        width: `${width}%`,
        height: `${height}%`,
        left: `${x * width}%`,
        top: `${y * height}%`
    };

    return <div className="grid-core-item" style={style}>{content}</div>;
};

defineComponentStyle(
    "grid-radio",
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
Grid.RadioItem = ({children, checked, onTap}) => (
    <Touchable component="div" className="grid-radio-core-item" data-checked={checked} onTap={onTap}>
        {children}
    </Touchable>
);

export default Grid;

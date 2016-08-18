import {defineComponentStyle} from "lib-source/v2/style";

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

export default Grid;

const validate = (children, height) => {
    if (height === null) {
        throw new Error("Divider needs to specify a height");
    }
    return React.Children.toArray(children);
};
const horizGenerator = (size, offset) => ({width: `${size}%`, height: '100%', position: 'absolute', left: `${offset}%`});
const vertGenerator = (size, offset) => ({height: `${size}%`, width: '100%', position: 'absolute', top: `${offset}%`});

const createBuilder = generator => {
    return ({children, width, height}) => {
        let items;

        children = validate(children, height);

        ({items} = children.reduce(
            ({offset, items}, child) => {
                const {size, children} = child.props;

                items = [
                    ...items,
                    <div key={items.length} style={generator(size, offset)}>{children}</div>
                ];
                offset += size;

                return {offset, items};
            },
            {offset: 0, items: []}
        ));

        return <div style={{position: 'relative', top: 0, left: 0, width, height}}>{items}</div>;
    };
};

export default {
    Horizontal: createBuilder(horizGenerator),
    Vertical: createBuilder(vertGenerator)
};

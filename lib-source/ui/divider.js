const validate = (children, height) => {
    if (height === null) {
        throw new Error("Divider needs to specify a height");
    }
    return React.Children.toArray(children);
};
const horizGenerator = (size, offset) => ({width: `${size}%`, height: '100%', position: 'absolute', left: `${offset}%`});
const vertGenerator = (size, offset) => ({height: `${size}%`, width: '100%', position: 'absolute', top: `${offset}%`});

/* -AxelDoc-
module UI {
    element Divider {
        @desc A container that will divide content into a spcific portions by percentage.
        @notes The direction of the divider is determined by using Divider.Horizontal and Divider.Vertical.
        @blockElement
        @hasChildren
        @prop width {
            @desc The width of the element.
            @type number
            @type CSS string
            @optional
            @default `null`
        }
        @prop height {
            @desc The height of the element.
            @type number
            @type CSS string
            @required
        }
        @example
            ```
            <UI.Divider.Horizontal height="100%">
                <UI.Item size={30}>
                    Content!
                </UI.Item>
                <UI.Item size={70}>
                    More Content!
                </UI.Item>
            </UI.Divider.Horizontal>
            ```
    }
}
*/
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

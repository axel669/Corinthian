import {defineComponentStyle} from "lib-source/v2/style";
import Button from "lib-source/uiv2/Button";
import Icon from "lib-source/uiv2/Icon";
import Option from "lib-source/uiv2/Option";
import Touchable from "lib-source/uiv2/Touchable";

defineComponentStyle(
    'combobox',
    'core',
    {
        'container': {
            border: '1px solid lightgray',
            borderRadius: 3,
            // padding: 3,
            position: 'relative',
            color: 'black',
            height: 30
        },
        "icon": {
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: 'translateY(-50%)',
            pointerEvents: 'none'
        }
    }
);

// const comboboxSelect = (index, value) => dialog.success([index, value]);
class Combobox extends React.Component {
    constructor(props) {
        super(props);
    }

    openOptions = async () => {
        const {title = "Combobox!", scrollToSelected = false, selectedIndex} = this.props;
        const children = React.Children.toArray(this.props.children);

        const response = await dialog.show({
            title,
            content: children.map(
                ({props: {value = null, children, style = null, className = null}}, index) => {
                    const onTap = () => dialog.hide(dialog.success([index, value]));
                    return (
                        <div {...{style, className}} key={index}>
                            <Button text={children} block flush onTap={onTap} />
                        </div>
                    );
                }
            ),
            buttons: [
                {text: "Cancel", cancels: true}
            ],
            setup(container) {
                if (scrollToSelected === true && selectedIndex !== -1) {
                    container.scrollTop = container.children[selectedIndex].offsetTop - container.offsetTop;
                }
            }
        });

        if (response.status === "success") {
            this.props.onChange(...response.value);
        }
    }

    render = () => {
        const {selectedIndex, children, height, ...buttonProps} = this.props;
        const flattenedChildren = React.Children.toArray(children);
        let currentChild = "Please select an option";

        if (selectedIndex !== -1) {
            currentChild = flattenedChildren[selectedIndex].props.children;
        }

        return (
            <div className="combobox-core-container" style={{height}}>
                <Button {...buttonProps} text={currentChild} block flush fill onTap={this.openOptions} />
                <div className="combobox-core-icon">
                    <Icon name="ion-arrow-down-b" size={24} />
                </div>
            </div>
        );
    }
}

Combobox.valueProp = "selectedIndex";
Combobox.valueFunction = (index, value) => ({index, value});
Combobox.defaultPropValue = 0;

export default Combobox;

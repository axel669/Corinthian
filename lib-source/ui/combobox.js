import icons from "lib-source/ionic-icons.js";
import CenterContent from "lib-source/ui/centercontent.js";
import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/combobox",
    {
        ".selectElement": {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            margin: 0,
            opacity: 0
        }
    }
);

const Combobox = ({width, height = 40, children, onChange = () => {}, selectedIndex = null, label = null}) => {
    if (selectedIndex === null) {
        throw new Error("Need to provide selectedIndex to Combobox");
    }
    const changeHandler = evt => {
        const newIndex = evt.target.selectedIndex;
        let value;

        value = children[newIndex].props.value;
        if (value === undefined) {
            value = children[newIndex].props.label;
        }

        onChange(newIndex, value);
    };
    const containerStyle = {
        position: 'relative',
        border: "1px solid #e2e2e2",
        width,
        height
    };
    let selectChildren;
    let displayedChild;

    children = React.Children.toArray(children);
    if (selectedIndex < 0 || selectedIndex >= children.length) {
        throw new Error("selectedIndex is out of valid range");
    }

    displayedChild = children[selectedIndex].props.children;
    if (displayedChild === undefined || displayedChild.length === 0) {
        displayedChild = children[selectedIndex].props.label;
    }
    selectChildren = children.map(
        ({props: {label = null, children, hidden = false}}, index) => {
            const selectChildStyle = (hidden === true) ? {display: 'none'} : null;

            return <option value={index} key={index} style={selectChildStyle}>{label}</option>;
        }
    );
    if (label !== null) {
        label = (
            <div className={Style.getClassName("core:componentLabel")}>
                {label}
            </div>
        );
    }

    return (
        <div>
            {label}
            <div style={containerStyle}>
                <CenterContent width="100%" height="100%">
                    {displayedChild}
                </CenterContent>
                <CenterContent style={{position: 'absolute', top: 0, right: 0}} width={40} height="100%" className={Style.getClassName("core:icon")}>
                    {icons["ion-arrow-down-b"]}
                </CenterContent>
                <select value={selectedIndex} className={Style.getClassName("core/combobox:selectElement")} onChange={changeHandler}>
                    {selectChildren}
                </select>
            </div>
        </div>
    );
};

export default Combobox;

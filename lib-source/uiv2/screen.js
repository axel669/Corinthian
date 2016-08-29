import {defineComponentStyle} from "lib-source/v2/style";
import CenterContent from "lib-source/uiv2/CenterContent";
import DialogComponent from "lib-source/uiv2/dialog";
import Environment from 'lib-source/v2/Environment';

const coolBlue = "#2FB1DF";
const titleHeight = 40;
const titleCommonStyle = {
    top: 0,
    left: 0,
    right: 0,
    height: titleHeight,
    backgroundColor: coolBlue,
    zIndex: '+10',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)',
    color: 'white',
    fontSize: 20
};
defineComponentStyle(
    'app-screen',
    'core',
    {
        "content": {
            position: 'absolute',
            top: titleHeight,
            bottom: 0,
            left: 0,
            right: 0,
            overflow: 'auto'
        },
        "title": {
            position: 'absolute',
            ...titleCommonStyle
        }
    }
);
defineComponentStyle(
    'web-screen',
    'core',
    {
        "content": {
            marginTop: titleHeight
        },
        "title": {
            position: 'fixed',
            ...titleCommonStyle
        }
    }
);

const titleClassName = Environment.app === true ? "app-screen-core-title" : "web-screen-core-title";
const contentClassName = Environment.app === true ? "app-screen-core-content" : "web-screen-core-content";
class Screen extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const {
            backText = null,
            onBack = () => true,
            leftMenu = null,
            rightMenu = null
        } = this.props;

        return (
            <div>
                <div className={contentClassName}>{this.props.children}</div>
                <div className={titleClassName}>
                    <CenterContent height="100%">
                        {this.props.title}
                    </CenterContent>
                </div>
                <DialogComponent />
            </div>
        );
    }
}

export default Screen;

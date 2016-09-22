import React from "react";

import {defineComponentStyle} from "lib-source/v2/style";
import Button from "lib-source/uiv2/Button";
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
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch'
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
            margin: 'auto',
            marginTop: titleHeight
        },
        "title": {
            position: 'fixed',
            ...titleCommonStyle
        }
    }
);

defineComponentStyle(
    'screen',
    'core',
    {
        "left-panel": {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            fontSize: 14
        }
    }
);

class ExtensionMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return <Button iconName="ion-navicon-round" textColor="white" />;
    }
}

const titleClassName = Environment.app === true ? "app-screen-core-title" : "web-screen-core-title";
const contentClassName = Environment.app === true ? "app-screen-core-content" : "web-screen-core-content";
class Screen extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const {
            backText = null,
            onBack = () => App.navigation.pop(),
            // leftMenu = null,
            // rightMenu = null
            menu = null,
            width = 800,
            scrollable = false,
            title = null
        } = this.props;
        let backButton = null;
        let contentStyle = null;
        let titleDisplay = null;

        if (backText !== null) {
            backButton = (
                <div className="screen-core-left-panel">
                    <Button text={backText} iconName="ion-arrow-left-b" textColor="white" onTap={onBack} fillHeight flush />
                </div>
            );
        }
        // let menuDisplay = null;
        //
        // if (menu !== null) {
        //     const {type = 'list', items} = menu;
        //     menuDisplay = <ExtensionMenu>{items.map(i => <Button block text={i} />)}</ExtensionMenu>;
        // }
        // let leftPanel = leftMenu;
        // let rightPanel = rightMenu;

        // if (leftPanel === null && backText !== null) {
        //     leftPanel = [{text: backText}];
        // }
        //
        // if (leftPanel !== null) {
        //     leftPanel = <ExpandingMenu iconName="ion-navicon-round">{leftPanel.map(({text}) => <Button text={text} textColor="white" />)}</ExpandingMenu>;
        // }
        if (Environment.app === false) {
            contentStyle = {
                width: '100%',
                maxWidth: width
            };
        }
        if (Environment.app === true && scrollable === false) {
            contentStyle = {
                overflow: 'hidden'
            };
        }
        // console.log('title', title);
        if (title !== null) {
            titleDisplay = (
                <div className={titleClassName}>
                <CenterContent height="100%">
                {title}
                </CenterContent>
                {backButton}
                {/*{menuDisplay}*/}
                {/*{leftPanel}*/}
                {/*{rightPanel}*/}
                </div>
            );
        } else {
            contentStyle = {
                ...(contentStyle || {}),
                top: 0
            };
        }

        return (
            <div>
                <div className={contentClassName} style={contentStyle}>{this.props.children}</div>
                {titleDisplay}
                <DialogComponent />
            </div>
        );
    }
}

export default Screen;

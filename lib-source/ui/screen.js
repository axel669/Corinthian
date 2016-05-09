import React from "react";

import Button from "lib-source/ui/button.js";
import IconButton from "lib-source/ui/iconbutton.js";
import ScrollContainer from "lib-source/ui/scrollcontainer.js";
import CenterContent from "lib-source/ui/centercontent.js";

import Environment from "lib-source/environment.js";

import {Style, Theme} from "lib-source/style.js";

const titleBase = {
    top: 0,
    left: 0,
    width: '100%',
    height: 50,
    overflow: 'visible',
    fontSize: 20,
    color: Theme.get("title/textColor"),
    backgroundColor: Theme.get("title/backgroundColor"),
    zIndex: '+10',
    boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.45)'
};
Style.create(
    "core/screen",
    {
        ".backButton": {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%'
        },
        ".expander": {
            height: 0
        }
    }
);
Style.create(
    "core/screen/web",
    {
        ".contentInner": {
            position: 'relative',
            top: 0,
            left: '50%',
            width: '100%',
            transform: 'translateX(-50%)'
        }
    }
);
Style.create(
    "core/screen/app",
    {
        ".title": {
            position: 'absolute',
            ...titleBase
        },
        ".titleExtended": {
            position: 'absolute',
            top: 50
        },
        ".content": {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }
    }
);

Style.addAnimations(
    {
        name: "screen_expansion",
        from: {
            height: 0
        },
        to: {
            height: 200
        }
    }
);

const AppScreen = React.createClass({
    getInitialState() {
        return {
            expanded: false
        };
    },
    render() {
        const {
            children,
            title = null,
            subtext = null,
            scrollable = false,
            backText = null,
            expansion = null,
            width = 800,
            onBack = () => App.navigation.pop()
        } = this.props;
        const {expanded} = this.state;
        const styleTest = {
            position: 'absolute',
            top: 50,
            width: '100%',
            left: 0,
            height: 200,
            backgroundColor: Theme.runtime.button.raised.color,
            boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.45)',
            transition: 'height 0.5s',
            overflow: 'hidden'
        };
        const contentStyle = {};

        let backButtonText;
        let backButton;
        let contentName;
        let content;
        let titleElement;
        let expansionContainer;
        let expansionButton;

        titleElement = null;
        backButton = null;
        content = children;

        // if (Environment.app === true) {
        //     contentName = "core/screen/app:content";
        // } else {
        //     contentName = "core/screen/web:content";
        //     contentStyle.maxWidth = width;
        // }

        if (title !== null) {
            if (backText !== null) {
                backButtonText = <span style={{fontSize: 12, padding: 3}}>{backText}</span>;
                backButton = (
                    <div className={Style.getClassName("core/screen:backButton")}>
                        <IconButton flush text={backButtonText} icon="ion-chevron-left" onTap={onBack} height="100%" textColor="white" cornerRadius={5} />
                    </div>
                );
            }

            if (expansion !== null) {
                expansionButton = (
                    <div style={{position: 'absolute', top: 0, right: 0}}>
                        <IconButton flush textColor="white" cornerRadius={5} height={50} icon="ion-navicon-round" iconSize={24} onTap={() => this.setState({expanded: !expanded})} />
                    </div>
                );

                if (expanded === false) {
                    styleTest.height = 0;
                }

                expansionContainer = (
                    <div style={styleTest}>
                        <div style={{width: '100%', height: 200, position: 'absolute'}}>
                            {expansion}
                        </div>
                    </div>
                );
            }

            contentStyle.top = 50;
            titleElement = (
                <CenterContent className={Style.getClassName("core/screen/app:title")}>
                    {title}
                    <div style={{fontSize: 14}}>
                        {subtext}
                    </div>
                    {backButton}

                    {expansionButton}
                    {expansionContainer}
                </CenterContent>
            );
        }

        if (Environment.app === false) {
            content = <div style={{maxWidth: width}} className={Style.getClassName("core/screen/web:contentInner")}>{content}</div>;
        }

        if (scrollable === true) {
            content = <ScrollContainer>{content}</ScrollContainer>;
        }

        return (
            <div dataName="UIScreen-wrapper">
                {titleElement}
                <div style={contentStyle} className={Style.getClassName("core/screen/app:content")}>
                    {content}
                </div>
            </div>
        );
    }
});
// const WebScreen = (props) => {
//     const {
//         children,
//         title = null,
//         subtext = null,
//         backText = null,
//         width = 800,
//         onBack = () => App.navigation.pop()
//     } = props;

//     let backButton;
//     let contentStyle;
//     let titleElement;

//     contentStyle = {
//         width: '100%',
//         maxWidth: width,
//         margin: 'auto'
//     };
//     titleElement = null;
//     backButton = null;

//     if (title !== null) {
//         if (backText !== null) {
//             backText = <span style={{fontSize: 14, padding: 5}}>{backText}</span>;
//             backButton = (
//                 <div className="cor-screen-back-button">
//                     <IconButton text={backText} icon="ion-chevron-left" onTap={onBack} height="100%" fill={true} textColor="white" cornerRadius={5} />
//                 </div>
//             );
//         }

//         contentStyle.paddingTop = 50;
//         titleElement = (
//             <div className="cor-screen-title-web">
//                 <CenterContent height={50} width="100%" style={{position: 'relative'}}>
//                     {title}
//                     <div className="cor-screen-title-subtext">
//                         {subtext}
//                     </div>
//                     <div style={{position: 'absolute', top: 0, left: '50%', width: '100%', maxWidth: width, height: 50, WebkitTransform: 'translateX(-50%)', transform: 'translateX(-50%)'}}>
//                         {backButton}
//                     </div>
//                 </CenterContent>
//             </div>
//         );
//     }

//     return (
//         <div style={{position: 'relative'}}>
//             <div style={contentStyle}>
//                 {children}
//             </div>
//             {titleElement}
//         </div>
//     );
// };

// let Screen;

// if (Environment.app === true) {
//     Screen = AppScreen;
// } else {
//     Screen = WebScreen;
// }

// export default Screen;

export default AppScreen;

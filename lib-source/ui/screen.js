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
        const {children, title = null, subtext = null, scrollable = true, backText = null, expansion = null} = this.props;
        const {expanded} = this.state;
        const styleTest = {
            position: 'absolute',
            top: 50,
            width: '100%',
            left: 0,
            height: 200,
            backgroundColor: Theme.runtime.button.raised.color,
            boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.45)',
            WebkitTransition: 'height 0.5s'
            // animationName: 'screen_expansion',
            // animationDuration: '0.5s'
        };
        let backButtonText;
        let backButton;
        let contentStyle;
        let content;
        let titleElement;
        let expansionContainer;
        let expansionButton;

        contentStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        titleElement = null;
        backButton = null;
        content = children;

        if (title !== null) {
            if (backText !== null) {
                backButtonText = <span style={{fontSize: 12, padding: 3}}>{backText}</span>;
                backButton = (
                    <div className={Style.getClassName("core/screen:backButton")}>
                        <IconButton flush text={backButtonText} icon="ion-chevron-left" onTap={() => App.goBack()} height="100%" textColor="white" cornerRadius={5} />
                    </div>
                );
            }

            if (expansion !== null) {
                expansionButton = (
                    <div style={{position: 'absolute', top: 0, right: 0}}>
                        <IconButton flush raised cornerRadius={5} height={50} icon="ion-navicon-round" onTap={() => this.setState({expanded: !expanded})} />
                    </div>
                );

                if (expanded === false) {
                    styleTest.height = 0;
                }
            }
            expansionContainer = (
                <div style={styleTest}>
                    Woah
                </div>
            );

            contentStyle.top = 50;
            titleElement = (
                <CenterContent height={50} width="100%">
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

        if (scrollable === true) {
            content = <ScrollContainer style={{paddingTop: 5}}>{children}</ScrollContainer>;
        } else {
            contentStyle.paddingTop = 5;
        }

        return (
            <div>
                <div className={Style.getClassName("core/screen/app:title")}>
                    {titleElement}
                </div>
                <div style={contentStyle}>
                    {content}
                </div>
            </div>
        );
    }
});
const WebScreen = ({children, title = null, subtext = null, backText = null, width = 800}) => {
    let backButton;
    let contentStyle;
    let titleElement;

    contentStyle = {
        width: '100%',
        maxWidth: width,
        margin: 'auto'
    };
    titleElement = null;
    backButton = null;

    if (title !== null) {
        if (backText !== null) {
            backText = <span style={{fontSize: 14, padding: 5}}>{backText}</span>;
            backButton = (
                <div className="cor-screen-back-button">
                    <IconButton text={backText} icon="ion-chevron-left" onTap={() => App.goBack()} height="100%" fill={true} textColor="white" cornerRadius={5} />
                </div>
            );
        }

        contentStyle.paddingTop = 50;
        titleElement = (
            <div className="cor-screen-title-web">
                <CenterContent height={50} width="100%" style={{position: 'relative'}}>
                    {title}
                    <div className="cor-screen-title-subtext">
                        {subtext}
                    </div>
                    <div style={{position: 'absolute', top: 0, left: '50%', width: '100%', maxWidth: width, height: 50, WebkitTransform: 'translateX(-50%)', transform: 'translateX(-50%)'}}>
                        {backButton}
                    </div>
                </CenterContent>
            </div>
        );
    }

    return (
        <div style={{position: 'relative'}}>
            <div style={contentStyle}>
                {children}
            </div>
            {titleElement}
        </div>
    );
};

let Screen;

if (Environment.app === true) {
    Screen = AppScreen;
} else {
    Screen = WebScreen;
}

export default Screen;

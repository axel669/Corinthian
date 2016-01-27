import React from "react";

import IconButton from "lib-source/ui/iconbutton.js";
import ScrollContainer from "lib-source/ui/scrollcontainer.js";
import CenterContent from "lib-source/ui/centercontent.js";

import Environment from "lib-source/environment.js";

import {Style, Theme} from "lib-source/style.js";

Style.create(
    "core/screen/web",
    {
    }
);

const AppScreen = ({children, title = null, subtext = null, scrollable = true, backText = null}) => {
    let backButton;
    let contentStyle;
    let content;
    let titleElement;

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
            backText = <span style={{fontSize: 14, padding: 5}}>{backText}</span>;
            backButton = (
                <div className="cor-screen-back-button">
                    <IconButton text={backText} icon="ion-chevron-left" onTap={() => App.goBack()} height="100%" fill={true} textColor="white" cornerRadius={5} />
                </div>
            );
        }

        contentStyle.top = 50;
        titleElement = (
            <CenterContent className="cor-screen-title">
                {title}
                <div className="cor-screen-title-subtext">
                    {subtext}
                </div>
                {backButton}
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
            {titleElement}
            <div style={contentStyle}>
                {content}
            </div>
        </div>
    );
};
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

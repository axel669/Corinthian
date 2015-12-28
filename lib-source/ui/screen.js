import React from "react";
import fc from "lib-source/factotum.es7.js";
import icons from "lib-source/ionic-icons.js";

import IconButton from "lib-source/ui/iconbutton.js";
import ScrollContainer from "lib-source/ui/scrollcontainer.js";
import CenterContent from "lib-source/ui/centercontent.js";

// let Screen;

// Screen = React.createClass({
//     getDefaultProps () {
//         return {
//             title: null,
//             titleStyle: {},
//             footer: null,
//             back: false,
//             contentStyle: {},
//             scrollable: false,
//             subtext: null
//         };
//     },
//     render () {
//         let {title, footer, back, contentStyle, scrollable, subtext} = this.props;
//         let content;

//         contentStyle = {
//             ...contentStyle,
//             position: 'absolute',
//             top: (title !== null) ? 50 : 0,
//             bottom: (footer !== null) ? 30 : 0,
//             left: 0,
//             right: 0,
//             overflowY: 'auto'
//         };

//         if (/iP(hone|ad|od)/.test(navigator.platform.toString()) === true) {
//             contentStyle = {
//                 ...contentStyle,
//                 overflowY: 'scroll',
//                 WebkitOverflowScrolling: 'touch'
//             };
//         }

//         if (scrollable === false) {
//             content = this.props.children;
//         } else {
//             content = <ScrollContainer>{this.props.children}</ScrollContainer>
//         }

//         if (back !== false) {
//             back = <Button style={{position: 'absolute', top: 0, left: 0, height: '100%', fontSize: 16, paddingLeft: 5, paddingRight: 5}} textColor="white" text={"< " + back} onTap={() => App.goBack()} />;
//         }

//         // if (back !== false) {
//         //     back = <Touchable component="div" onTap={() => App.switchBack()} className="material-title-back">{"\uf124"}</Touchable>;
//         // }
//         if (title !== null) {
//             if (typeof title === 'string') {
//                 title = title.split(/\r?\n/).map((line, index) => <div key={index}>{line}</div>);
//             }
//             if (subtext !== null) {
//                 subtext = <span className="material-title-subtext">{subtext}</span>;
//             }
//             title = (
//                 <div className="material-title" style={this.props.titleStyle}>
//                     {back}
//                     <div style={{display: 'table-cell', verticalAlign: 'middle', width: '100%', height: '100%', textAlign: 'center'}}>
//                         {title}
//                         {subtext}
//                     </div>
//                 </div>
//             );
//         }

//         return (
//             <div style={{WebkitTransform: "translateZ(0)", position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
//                 {title}
//                 <div style={contentStyle} name="screen-content">
//                     {content}
//                 </div>
//             </div>
//         );
//     }
// });

// const Screen = ({chidren, title = null}) => {
//     return (
//     );
// };

const Screen = ({children, title = null, subtext = null, scrollable = true, backText = null}) => {
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
        content = <ScrollContainer>{children}</ScrollContainer>;
    }

    return (
        <div style={{}}>
            {titleElement}
            <div style={contentStyle}>
                {content}
            </div>
        </div>
    );
};

export default Screen;

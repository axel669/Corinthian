import React from 'react';
import ReactDOM from 'react-dom';

import CenterContent from "lib-source/ui/centercontent.js";

const dialogContainer = document.createElement("div");

const AlertDialog = ({message, title = "Alert"}) => {
        // <CenterContent style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
    const alertStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        WebkitTransform: 'translate(-50%, -65%)',
        transform: 'translate(-50%, -65%)',
        backgroundColor: 'white',
        width: '70%',
        maxWidth: 360,
        maxHeight: '70%',
        WebkitBoxShadow: '0px 0px 35px rgba(0, 0, 0, 0.6)',
        overflow: 'auto'
    };
    return (
        <div style={alertStyle}>
            <div>
                {title}
            </div>
             <div>
                {message}
            </div>
        </div>
    );
        // </CenterContent>
};

dialogContainer.style.position = 'fixed';
dialogContainer.style.top = 0;
dialogContainer.style.left = 0;
dialogContainer.style.bottom = 0;
dialogContainer.style.right = 0;
dialogContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
dialogContainer.style.display = 'none';
dialogContainer.style.zIndex = '+100';
// dialogContainer.addEventListener(
//     "touchstart",
//     evt => {
//         if (evt.target === dialogContainer) {
//             evt.preventDefault();
//         }
//     }
// );

export default {
    get container () {
        return dialogContainer;
    },
    alert (message, {title} = {}) {
        // document.body.style.overflow = 'hidden';
        // document.body.style.WebkitOverflowScrolling = 'auto';
        ReactDOM.render(<AlertDialog message={message} title={title} />, dialogContainer);
        dialogContainer.style.display = '';
    },
    close () {
        // document.body.style.overflow = '';
        // document.body.style.WebkitOverflowScrolling = '';
        dialogContainer.style.display = 'none';
    }
};

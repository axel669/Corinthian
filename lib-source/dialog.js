import React from 'react';
import ReactDOM from 'react-dom';
import Environment from "lib-source/environment.js";

import CenterContent from "lib-source/ui/centercontent.js";

const dialogContainer = document.createElement("div");
dialogContainer.className = "cor-dialog-overlay";

const canScroll = node => {
    while (true) {
        if (node === dialogContainer) {
            return false;
        }
        if (node.className.indexOf("cor-scrollfree") !== -1) {
            return true;
        }
        node = node.parentNode;
    }
};

const AlertDialog = ({message, title = "Alert"}) => (
    <div className="cor-dialog-wrapper">
        <div style={{height: 35, width: '100%', backgroundColor: 'cyan'}}>
            {title}
        </div>
        <div style={{overflow: 'auto', maxHeight: '40vh', WebkitOverflowScrolling: 'touch'}} className="cor-dialog-content cor-scrollfree">
            {message}
        </div>
        <div style={{height: 35, width: '100%', backgroundColor: 'cyan'}}>
            {title}
        </div>
    </div>
);

dialogContainer.addEventListener(
    "touchmove",
    evt => {
        if (canScroll(evt.target) === false) {
            evt.preventDefault();
            evt.stopPropagation();
        }
    }
);
dialogContainer.addEventListener(
    "tap",
    evt => {
        if (evt.target === dialogContainer) {
            Dialog.close();
        }
    }
);
// console.log({a: () => Environment});
if (Environment.mobile === false) {
    console.log('adding key event');
    window.addEventListener(
        "keydown",
        evt => {
            if (evt.keyCode === 27) {
                Dialog.close();
            }
        }
    );
}

export default {
    get container () {
        return dialogContainer;
    },
    alert (message, {title} = {}) {
        ReactDOM.render(<AlertDialog message={message} title={title} />, dialogContainer);
        dialogContainer.style.display = 'block';
    },
    close () {
        dialogContainer.style.display = '';
    }
};

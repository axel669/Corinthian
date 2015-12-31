import React from 'react';
import ReactDOM from 'react-dom';
import Environment from "lib-source/environment.js";

import Button from "lib-source/ui/button.js";

const dialogContainer = document.createElement("div");
dialogContainer.className = "cor-dialog-overlay";

const canScroll = node => {
    while (true) {
        if (node === dialogContainer) {
            return false;
        }
        if (node.className.indexOf("cor-scrollfree") !== -1) {
            return node.offsetHeight !== node.scrollHeight;
        }
        node = node.parentNode;
    }
};

const AlertDialog = ({message, title = "Alert", resolve}) => {
    const close = () => {
        closeDialog(null);
    };
    return (
        <div className="cor-dialog-wrapper">
            <div className="cor-dialog-title">
                {title}
            </div>
            <div className="cor-dialog-content cor-scrollfree">
                {message}
            </div>
            <div className="cor-dialog-buttons">
                <Button flush={true} height="100%" text="OK" width={75} onTap={close} />
            </div>
        </div>
    );
};

const showDialog = (DialogComponent, options) => new Promise(resolve => {
    dialogResolve = resolve;
    ReactDOM.render(<DialogComponent {...options} resolve={resolve} />, dialogContainer);
    dialogContainer.style.display = 'block';
});
const closeDialog = (resolveValue = undefined) => {
    dialogContainer.style.display = '';
    // if (resolve === true) {
    dialogResolve(resolveValue);
    dialogResolve = null;
    // }
};

let dialogResolve;

dialogContainer.addEventListener(
    "touchmove",
    evt => {
        if (canScroll(evt.target) === false) {
            evt.preventDefault();
            // evt.stopPropagation();
        }
    }
);
dialogContainer.addEventListener(
    "tap",
    evt => {
        if (evt.target === dialogContainer) {
            closeDialog();
        }
    }
);
// console.log({a: () => Environment});
if (Environment.mobile === false) {
    window.addEventListener(
        "keydown",
        evt => {
            if (evt.keyCode === 27) {
                closeDialog();
            }
        }
    );
}

export default {
    get container () {
        return dialogContainer;
    },
    alert (message, options = {}) {
        return showDialog(AlertDialog, {message, ...options});
    },
    close () {
        dialogContainer.style.display = '';
    }
};

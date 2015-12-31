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
            return true;
        }
        node = node.parentNode;
    }
};

const AlertDialog = ({message, title = "Alert", resolve}) => {
    const close = () => {
        closeDialog();
        resolve(100);
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
const closeDialog = () => {
    dialogContainer.style.display = '';
};

let dialogResolve;

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
            closeDialog();
            dialogResolve(undefined);
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
                dialogResolve(undefined);
            }
        }
    );
}

export default {
    get container () {
        return dialogContainer;
    },
    async alert (message, options = {}) {
        return await showDialog(AlertDialog, options);
    },
    close () {
        dialogContainer.style.display = '';
    }
};

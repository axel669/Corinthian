import React from 'react';
import ReactDOM from 'react-dom';
import Environment from "lib-source/environment.js";

import Button from "lib-source/ui/button.js";
import TextInput from "lib-source/ui/textinput.js";

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

const AlertDialog = ({message, title = "Alert", resolve, buttonText = "OK"}) => {
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
                <Button flush={true} height="100%" text={buttonText} width={75} onTap={close} />
            </div>
        </div>
    );
};
const ConfirmDialog = ({message, title = "Confirm", resolve, confirmText = "Confirm", cancelText = "Cancel"}) => {
    return (
        <div className="cor-dialog-wrapper">
            <div className="cor-dialog-title">
                {title}
            </div>
            <div className="cor-dialog-content cor-scrollfree">
                {message}
            </div>
            <div className="cor-dialog-buttons">
                <Button flush={true} height="100%" text={cancelText} onTap={() => closeDialog(false)} />
                <Button flush={true} height="100%" text={confirmText} onTap={() => closeDialog(true)} />
            </div>
        </div>
    );
};
const PromptDialog = React.createClass({
    getInitialState() {
        return {value: ""};
    },
    componentDidMount() {
        schedule(
            1,
            () => this.refs.input.focus()
        );
    },
    finish(evt) {
        evt.preventDefault();
        closeDialog(this.state.value);
    },
    render() {
        const {message, title = "Prompt", resolve, confirmText = "Confirm", cancelText = "Cancel", placeholder = ""} = this.props;
        const {value} = this.state;
        return (
            <div className="cor-dialog-wrapper">
                <div className="cor-dialog-title">
                    {title}
                </div>
                <div className="cor-dialog-content cor-scrollfree">
                    {message}
                    <form onSubmit={this.finish}>
                        <TextInput ref="input" placeholder={placeholder} value={value} onChange={value => this.setState({value})} />
                    </form>
                </div>
                <div className="cor-dialog-buttons">
                    <Button flush height="100%" text={cancelText} onTap={() => closeDialog(null)} />
                    <Button flush height="100%" text={confirmText} onTap={() => closeDialog(value)} />
                </div>
            </div>
        );
    }
});

const showDialog = (DialogComponent, options) => new Promise(resolve => {
    dialogResolve = resolve;
    ReactDOM.render(<DialogComponent {...options} resolve={resolve} />, dialogContainer);
    dialogContainer.style.display = 'block';
});
const closeDialog = (resolveValue = undefined) => {
    dialogContainer.style.display = '';
    ReactDOM.unmountComponentAtNode(dialogContainer);
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
    get container() {
        return dialogContainer;
    },
    alert(message, options = {}) {
        return showDialog(AlertDialog, {message, ...options});
    },
    confirm(message, options = {}) {
        return showDialog(ConfirmDialog, {message, ...options});
    },
    prompt(message, options = {}) {
        return showDialog(PromptDialog, {message, ...options});
    },
    close() {
        closeDialog();
    }
};

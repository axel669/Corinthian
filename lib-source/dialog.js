import React from 'react';
import ReactDOM from 'react-dom';
import Environment from "lib-source/environment.js";

import Button from "lib-source/ui/button.js";
import Image from "lib-source/ui/image.js";
import TextInput from "lib-source/ui/textinput.js";
import CenterContent from "lib-source/ui/centercontent.js";

import {Style, Theme} from "lib-source/style.js";

import SpinnerDataURL from "lib-source/data-uri/load-spinner.gif.source";

Style.create(
    "core/dialog",
    {
        ".overlay": {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            zIndex: '+100',
            display: 'none',
            WebkitOverflowScrolling: 'auto'
        },

        ".window": {
            position: 'absolute',
            top: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.6)',
            width: '70%',
            maxWidth: 480,
            opacity: 0,
            transition: 'opacity 0.5s',
            borderRadius: 3
        },
        '.content': {
            maxHeight: '40vh',
            WebkitOverflowScrolling: 'touch',
            overflow: 'auto',
            padding: 15,
            transform: 'translateZ(0)'
        },
        ".title": {
            lineHeight: '30px',
            padding: 15,
            paddingTop: 10,
            paddingBottom: 0,
            fontSize: 18,
            fontWeight: 900,
            color: 'black'
        },
        ".buttons": {
            textAlign: 'right',
            width: '100%',
            height: 35
        },

        ".loadSpinner": {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: 5,
            backgroundColor: 'white',
            borderRadius: 3,
            minWidth: 54
        }
    }
);

const smallText = text => <span style={{fontSize: 14}}>{text}</span>;

const dialogContainer = document.createElement("div");
dialogContainer.className = Style.getClassName("core/dialog:overlay");

const contentName = Style.getClassName("core/dialog:content");
const canScroll = node => {
    while (true) {
        if (node === dialogContainer) {
            return false;
        }
        if (node.className.indexOf(contentName) !== -1) {
            return true;
            // const {scrollHeight, scrollTop} = node;

            // return node.offsetHeight !== node.scrollHeight;
        }
        node = node.parentNode;
    }
};

const AlertDialog = ({message, title = "Alert", resolve, buttonText = "OK"}) => {
    const close = () => {
        closeDialog(null);
    };
    return (
        <div className={Style.getClassName("core/dialog:window")}>
            <div className={Style.getClassName("core/dialog:title")}>
                {title}
            </div>
            <div className={Style.getClassName("core/dialog:content")}>
                {message}
            </div>
            <div className={Style.getClassName("core/dialog:buttons")}>
                <Button flush height="100%" text={smallText(buttonText)} width={75} onTap={close} />
            </div>
        </div>
    );
};
const ConfirmDialog = ({message, title = "Confirm", resolve, confirmText = "Confirm", cancelText = "Cancel"}) => {
    const confirm = () => closeDialog(true);
    const cancel = () => closeDialog(false);
    return (
        <div className={Style.getClassName("core/dialog:window")}>
            <div className={Style.getClassName("core/dialog:title")}>
                {title}
            </div>
            <div className={Style.getClassName("core/dialog:content")}>
                {message}
            </div>
            <div className={Style.getClassName("core/dialog:buttons")}>
                <Button flush height="100%" text={smallText(cancelText)} width={75} onTap={cancel} />
                <Button flush height="100%" text={smallText(confirmText)} width={75} onTap={confirm} />
            </div>
        </div>
    );
};
const PromptDialog = React.createClass({
    getInitialState() {
        return {value: this.props.startValue};
    },
    componentDidMount() {
        chrono.trigger(
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
            <div className={Style.getClassName("core/dialog:window")}>
                <div className={Style.getClassName("core/dialog:title")}>
                    {title}
                </div>
                <div className={Style.getClassName("core/dialog:content")}>
                    {message}
                    <form onSubmit={this.finish}>
                        <TextInput ref="input" placeholder={placeholder} value={value} onChange={value => this.setState({value})} />
                    </form>
                </div>
                <div className={Style.getClassName("core/dialog:buttons")}>
                    <Button flush height="100%" text={smallText(cancelText)} width={75} onTap={() => closeDialog(null)} />
                    <Button flush height="100%" text={smallText(confirmText)} width={75} onTap={() => closeDialog(value)} />
                </div>
            </div>
        );
    }
});
const SpinnerDialog = ({message}) => (
    <div className={Style.getClassName("core/dialog:loadSpinner")}>
        {message}
        <Image width="100%" height={48} source={SpinnerDataURL} />
    </div>
);
const CustomDialog = ({content, buttons = [{text: "Display", value: null}], title}) => {
    return (
        <div className={Style.getClassName("core/dialog:window")}>
            <div className={Style.getClassName("core/dialog:title")}>
                {title}
            </div>
            <div className={Style.getClassName("core/dialog:content")}>
                {content}
            </div>
            <div className={Style.getClassName("core/dialog:buttons")}>
                {buttons.map(
                    ({text, value = undefined, width = 75}, index) => {
                        if (typeof value !== 'function') {
                            const wrapped = value;
                            value = () => wrapped;
                        }
                        return <Button flush height="100%" width={width} text={smallText(text)} onTap={() => closeDialog(value())} key={index} />;
                    }
                )}
            </div>
        </div>
    );
};

const showDialog = (DialogComponent, options, canCancel = true) => {
    const p = new Promise(
        resolve => {
            dialogResolve = resolve;
            cancelable = canCancel;
            ReactDOM.render(<DialogComponent {...options} resolve={resolve} />, dialogContainer);
            dialogContainer.style.display = 'block';
            chrono.trigger(1, () => dialogContainer.querySelector("div").style.opacity = 1);
        }
    );
    if (canCancel === false) {
        p.dismiss = () => closeDialog();
    }

    return p;
};
const closeDialog = (resolveValue = undefined) => {
    dialogContainer.style.display = '';
    ReactDOM.unmountComponentAtNode(dialogContainer);
    dialogResolve(resolveValue);
    dialogResolve = null;
};

let dialogResolve;
let cancelable;


cancelable = true;
dialogContainer.addEventListener(
    "touchmove",
    evt => {
        // if (canScroll(evt.target) === false) {
        //     evt.stopPropagation();
        //     evt.preventDefault();
        // }
        if (cancelable === false) {
            evt.stopPropagation();
            evt.preventDefault();
        }
    }
);
dialogContainer.addEventListener(
    "tap",
    evt => {
        if (evt.target === dialogContainer && cancelable === true) {
            closeDialog();
        }
    }
);

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
    spinner(message) {
        return showDialog(SpinnerDialog, {message}, false);
    },
    __custom(generator) {
        if (typeof generator !== 'function') {
            const value = generator;
            generator = () => value;
        }
        return showDialog(CustomDialog, generator(closeDialog));
    },
    dismiss() {
        closeDialog();
    }
};

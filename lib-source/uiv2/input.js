import React from "react";

import {defineComponentStyle} from "lib-source/v2/style";
import RangeInput from 'lib-source/uiv2/input/RangeInput';
import DateInput from 'lib-source/uiv2/input/DateInput';
import TimeInput from 'lib-source/uiv2/input/TimeInput';
import FileInput from 'lib-source/uiv2/input/FileInput';
import CenterContent from 'lib-source/uiv2/CenterContent';
import Icon from 'lib-source/uiv2/Icon';
import Touchable from 'lib-source/uiv2/Touchable';

const coolBlue = "#2FB1DF";

defineComponentStyle(
    'input',
    'core',
    {
        "$body": {
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
        },
        "wrapper": {
            position: 'relative',
            backgroundColor: 'white',
            height: 32,
            margin: 3
        },
        "field": {
            width: '100%',
            borderWidth: 0,
            borderBottom: '2px solid lightgray',
            WebkitBorderRadius: 0,
            WebkitAppearance: 'none',
            borderRadius: 0,
            backgroundColor: 'transparent',
            margin: 0,
            height: '100%',
            position: 'relative',
            zIndex: '+1'
        },
        "field:focus": {
            outline: 'none'
        },
        "icon": {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: 30
        },
        "highlight-border": {
            position: 'absolute',
            bottom: 0,
            borderBottom: `2px solid ${coolBlue}`,
            left: '50%',
            transform: 'translateX(-50%) scaleX(0)',
            width: '100%',
            zIndex: '+2'
        },
        "field:focus + highlight-border": {
            // width: '100%',
            WebkitTransition: '-webkit-transform 250ms linear',
            transition: 'transform 150ms linear',
            transform: 'translateX(-50%) scaleX(1)'
        },
        "label": {
            color: "black",
            fontSize: 16,
            padding: 3
        }
    }
);
class InputWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    focus = () => {
        this.refs.field.focus();
    }

    render = () => {
        const {parser = i => i, onChange = () => {}, iconName = null, style = {}, borderRadius = null, ...props} = this.props;
        const handler = evt => {
            // const raw = evt.target.value;
            onChange(parser(evt.target.value));
        };
        let realStyle = {...style};
        let borderStyle = {};
        let iconDisplay = null;

        if (iconName !== null) {
            iconDisplay = <CenterContent className="input-core-icon" height="100%"><Icon name={iconName} size={18} /></CenterContent>;
            realStyle.paddingLeft = 30;
        }
        if (borderRadius !== null) {
            realStyle.borderRadius = borderRadius;
            borderStyle.borderRadius = borderRadius;
        }

        return (
            <div className="input-core-wrapper">
                <input {...props} style={realStyle} onChange={handler} className="input-core-field" ref="field" />
                <div className="input-core-highlight-border" style={borderStyle} />
                {iconDisplay}
            </div>
        );
    }
}
class LabeledInput extends React.Component {
    constructor(props) {
        super(props);
    }

    focus = () => {
        this.refs.wrapped.focus();
    }

    render = () => {
        const {label, Wrapper = InputWrapper, ...props} = this.props;

        return (
            <div style={{position: 'relative'}}>
                <Touchable component="div" className="input-core-label" onTap={() => this.refs.wrapped.focus()}>{label}</Touchable>
                <Wrapper ref="wrapped" {...props} />
            </div>
        );
    }
}
class ValidatedInput extends React.Component {
    constructor(props) {
        super(props);
    }

    focus = () => {
        this.refs.input.focus();
    }

    render = () => {
        const {validator, onChange = () => {}, ...props} = this.props;
        const changeHandler = value => onChange(value, validator(value));
        return <LabeledInput {...props} onChange={changeHandler} />;
    }
}

const Input = {
    Text: props => <LabeledInput {...props} type="text" />,
    Password: props => <LabeledInput {...props} type="password" />,
    Search: props => <LabeledInput {...props} type="search" iconName="ion-search" />,
    Date: DateInput,
    Range: RangeInput,
    Time: TimeInput,
    File: FileInput,
    URL: ({validator = url => /^(https?:\/\/)?(\w+(\.\w+)+|localhost)(\/[\w\#\-\%]+)*\/?$/.test(url), ...props}) => <ValidatedInput validator={validator} {...props} type="url" />,
    Email: ({validator = email => /^([a-zA-Z]\w*)(\.([a-zA-Z]\w*))*\@([a-zA-Z]\w*)(\.([a-zA-Z]\w*))+$/.test(email), ...props}) => <ValidatedInput validator={validator} {...props} type="email" />
};

Input.Text.valueProp = 'value';
Input.Text.valueFunction = text => text;
Input.Text.defaultPropValue = "";

Input.Password.valueProp = 'value';
Input.Password.valueFunction = text => text;
Input.Password.defaultPropValue = "";

Input.Search.valueProp = 'value';
Input.Search.valueFunction = text => text;
Input.Search.defaultPropValue = "";

Input.URL.valueProp = 'value';
Input.URL.valueFunction = (text, valid) => ({text, valid});
Input.URL.defaultPropValue = "";

Input.Email.valueProp = 'value';
Input.Email.valueFunction = (text, valid) => ({text, valid});
Input.Email.defaultPropValue = "";

export default Input;

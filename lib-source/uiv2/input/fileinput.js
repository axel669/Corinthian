import {defineComponentStyle} from "lib-source/v2/style";
import Button from 'lib-source/uiv2/Button';

class FileInput extends React.Component {
    constructor(props) {
        super(props);
    }

    trigger = () => {
        this.refs.file.click();
    }
    upload = (evt) => {
        this.props.onChange(Array.from(evt.target.files));
    }

    render = () => {
        const {value, valueFormat = fileList => fileList[0].name, nullText = "Select a file", ...props} = this.props;
        let buttonText;

        if (typeof value === 'string') {
            buttonText = value;
        }
        if (Array.isArray(value) === true) {
            buttonText = valueFormat(value);
        }

        if (value === null) {
            buttonText = nullText;
        }

        return (
            <div>
                <input {...props} type="file" ref="file" style={{display: 'none'}} value="" onChange={this.upload} />
                <Button text={buttonText} onTap={this.trigger} block />
            </div>
        );
    }
}

FileInput.valueProp = "value";
FileInput.valueFunction = fileList => fileList;
FileInput.defaultPropValue = null;

export default FileInput;

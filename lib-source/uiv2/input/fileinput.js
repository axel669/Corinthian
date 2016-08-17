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
        const {text, value, ...props} = this.props;
        return (
            <div>
                <input {...props} type="file" ref="file" style={{display: 'none'}} value="" onChange={this.upload} />
                <Button text={text} onTap={this.trigger} block />
            </div>
        );
    }
}

export default FileInput;

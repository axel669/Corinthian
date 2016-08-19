import {defineComponentStyle} from "lib-source/v2/style";
import Button from 'lib-source/uiv2/Button';
import TimeSelector from 'lib-source/uiv2/TimeSelector';
import {sharedReference, SharedObjectDisplay} from "lib-source/v2/shared";

class TimeInput extends React.Component {
    constructor(props) {
        super(props);
    }

    select = async () => {
        const {
            onChange = warningFunc("onChange not given to TimeInput"),
            timeFormat
        } = this.props;
        const currentDate = sharedReference(this.props.value);
        const result = await dialog.show({
            // content: <div style={{padding: 3}}><TimeSelector value={currentDate} onChange={date => currentDate = date} /></div>,
            content: <SharedObjectDisplay key={Date.now()} reference={currentDate} component={TimeSelector} valueProp="value" format={timeFormat} />,
            buttons: [
                {text: "Cancel", cancels: true},
                {text: "Set", value: () => currentDate.value}
            ]
        });

        if (result.status === 'success') {
            onChange(result.value);
        }
    }

    render = () => {
        const {format = "{hour}:{minute/padded}", value, ...buttonProps} = this.props;
        return <Button {...buttonProps} text={value.format(format)} onTap={this.select} block />;
    }
}

TimeInput.valueProp = 'value';
TimeInput.valueFunction = date => date;
TimeInput.defaultPropValue = () => chrono();

export default TimeInput;

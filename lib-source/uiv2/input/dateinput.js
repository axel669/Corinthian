import {defineComponentStyle} from "lib-source/v2/style";
import Button from "lib-source/uiv2/Button";
import Calendar from "lib-source/uiv2/Calendar";

const DateInput = ({value = chrono(), format = "{month}/{day}/{year}", onChange = () => {}, iconName}) => {
    const changeDate = async () => {
        const handler = date => {
            dialog.hide(dialog.success(date));
        };
        const result = await dialog.show({
            content: <Calendar selectedDate={value} onDateSelected={handler} key={Date.now()} />,
            buttons: [{text: "Cancel"}],
            title: "Select Date"
        });

        if (result.value !== null) {
            onChange(result.value);
        }
    };
    return (
        <div style={{height: 30}}>
            <Button text={value.format(format)} onTap={changeDate} flush fill iconName={iconName} />
        </div>
    );
};

export default DateInput;

import React from "react";

import {defineComponentStyle, Theme} from "lib-source/v2/style";
import Button from "lib-source/uiv2/Button";
import CenterContent from 'lib-source/uiv2/CenterContent';

const coolBlue = "#2FB1DF";
defineComponentStyle(
    'calendar',
    'core',
    {
        'day': {
            height: '100%',
            fontSize: 14,
            textAlign: 'center',
        },
        "day[data-inactive]": {
            color: 'lightgray',
            paddingTop: 4
        }
    }
);
/*bgcolor textcolor all 3*/
// const Calendar = ({selectedDate}) =>
class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: props.selectedDate.month,
            year: props.selectedDate.year
        };
    }

    prevMonth = () => {
        let {month, year} = this.state;

        month -= 1;

        if (month === -1) {
            month = 11;
            year -= 1;
        }

        this.setState({month, year});
    }
    nextMonth = () => {
        let {month, year} = this.state;

        month += 1;

        if (month === 12) {
            month = 0;
            year += 1;
        }

        this.setState({month, year});
    }

    select = (date) => {
        const {onChange = () => {}} = this.props;
        // console.log(date.toString());
        onChange(date);
    }

    render = () => {
        const {selectedDate} = this.props;
        const {month, year} = this.state;
        const baseDate = chrono({month, year}).startOf('week');

        const current = chrono(selectedDate);

        return (
            <div style={{color: 'black'}}>
                <UI.Pinboard height={30}>
                    <div pinInfo={{backgroundColor: coolBlue, top: 0, left: 0, bottom: 0, right: 0}} />
                    <Button pinInfo={{top: 0, left: 0, height: '100%', width: 30}} iconName="ion-arrow-left-b" fill flush onTap={this.prevMonth} textColor="white" />
                    <CenterContent pinInfo={{top: 0, left: 30, right: 30, bottom: 0, color: 'white'}} height="100%">
                        {month + 1}/{year}
                    </CenterContent>
                    <Button pinInfo={{top: 0, right: 0, height: '100%', width: 30}} iconName="ion-arrow-right-b" fill flush onTap={this.nextMonth} textColor="white" />
                </UI.Pinboard>
                <UI.Grid colCount={7} rowCount={7} height={195}>
                    {['s', 'm', 't', 'w', 't', 'f', 's'].map(
                        letter => {
                            return <CenterContent key={letter}>{letter.toUpperCase()}</CenterContent>;
                        }
                    )}
                    {range(
                        42,
                        n => {
                            const date = baseDate.shift(n, 'days');
                            const dateValue = selectedDate.set({month: date.month, year: date.year, date: date.date});

                            if (date.month === month) {
                                let buttonStyle = {};

                                if (date.year === current.year && date.month === current.month && date.date === current.date) {
                                    buttonStyle = {
                                        buttonColor: coolBlue,
                                        textColor: 'white'
                                    };
                                }

                                return (
                                    <div className="calendar-core-day" key={n}>
                                        <Button text={date.date + 1} flush fill onTap={() => this.select(dateValue)} {...buttonStyle} />
                                    </div>
                                );
                            } else {
                                return <div key={n} className="calendar-core-day" data-inactive>{date.date + 1}</div>;
                            }
                        }
                    )}
                </UI.Grid>
            </div>
        );
    }
}
Calendar.componentStyleName = 'calendar';

Calendar.valueProp = "selectedDate";
Calendar.valueFunction = date => date;
Calendar.defaultPropValue = () => chrono();

export default Calendar;

import {XRegExp as regex} from "xregexp";

const chronoSpecial = {
    'yesterday'(date) {
        date.setDate(date.getDate() - 1);
        return date;
    },
    '1 week ago'(date) {
        date.setDate(date.getDate() - 7);
        return date;
    }
};
const chronoUnitRegex = regex("(?<offset>(\\+|\\-)\\d+) (?<unit>\\w+)");
const unitFunction = {
    millisecond(date, milliseconds) {
        date.setMilliseconds(date.getMilliseconds() + milliseconds);
        return date;
    },
    second(date, seconds) {
        date.setSeconds(date.getSeconds() + seconds);
        return date;
    },
    minute(date, minutes) {
        date.setMinutes(date.getMinutes() + minutes);
        return date;
    },
    hour(date, hours) {
        date.setHours(date.getHours() + hours);
        return date;
    },
    day(date, days) {
        date.setDate(date.getDate() + days);
        return date;
    },
    week(date, weeks) {
        date.setDate(date.getDate() + weeks * 7);
        return date;
    },
    month(date, months) {
        const expected = date.getMonth() + months;
        date.setMonth(expected);
        if (date.getMonth() !== expected) {
            date.setDate(0);
        }
        return date;
    },
    year(date, years) {
        date.setFullYear(date.getFullYear() + years);
        return date;
    },
    decade(date, decades) {
        date.setFullYear(date.getFullYear() + decades * 10);
        return date;
    }
};
const startOf = {
    second(date) {
        date.setMilliseconds(0);
    },
    minute(date) {
        startOf.second(date);
        date.setSeconds(0);
    },
    hour(date) {
        startOf.minute(date);
        date.setMinutes(0);
    },
    day(date) {
        startOf.hour(date);
        date.setHours(0);
    },
    week(date) {
        startOf.day(date);
        date.setDay(0);
    },
    month(date) {
        startOf.day(date);
        date.setDate(1);
    },
    year(date) {
        startOf.month(date);
        date.setMonth(0);
    }
};
const unitConversion = {
    'millisecond': 'millisecond',
    'milliseconds': 'millisecond',
    'ms': 'millisecond',

    'second': 'second',
    'seconds': 'second',
    's': 'second',

    'minute': 'minute',
    'minutes': 'minute',
    'min': 'minute',

    'hour': 'hour',
    'hours': 'hour',
    'hr': 'hour',

    'day': 'day',
    'days': 'day',
    'ni': 'day',
    'hi': 'day',
    '日': 'day',

    'week': 'week',
    'weeks': 'week',
    'shuu': 'week',
    'しゅう': 'week',
    '週': 'week',

    'month': 'month',
    'months': 'month',

    'year': 'year',
    'years': 'year',

    'decade': 'decade',
    'decades': 'decade'
};
const chronoInfo = {
    days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
};
const chronoFormat = {
    ms: {
        base: date => date.getMilliseconds(),
        padded: date => `00${date.getMilliseconds}`.slice(-3)
    },
    second: {
        base: date => date.getSeconds(),
        padded: date => `00${date.getSeconds}`.slice(-3)
    },
    minute: {
        base: date => date.getMinutes(),
        padded: date => `00${date.getMinutes}`.slice(-3)
    },
    hour: {
        base: date => date.getHours(),
        padded: date => `00${date.getHours}`.slice(-3)
    },
    weekday: {
        base: date => date.getDay(),
        short: date => chronoInfo.days[date.getDay()].slice(0, 3),
        full: date => chronoInfo.days[date.getDay()]
    },
    date: {
        base: date => date.getDate(),
        padded: date => `0${date.getDate()}`.slice(-2)
    },
    month: {
        base: date => date.getMonth(),
        short: date => chronoInfo.months[date.getDate()].slice(0, 3),
        full: date => chronoInfo.months[date.getDate()]
    },
    year: {
        base: date => date.getFullYear() % 100,
        full: date => date.getFullYear()
    }
};
const chronoCheckUnit = unit => {
    if (unitConversion.hasOwnProperty(unit) === false) {
        throw new Error(`Unrecognized unit: ${unit}`);
    }
};
const chrono = (arg = null) => {
    const internalDate = (() => {
        if (arg === null) {
            return new Date();
        }

        if (Date.prototype.isPrototypeOf(arg) === true || (typeof arg === 'number')) {
            return new Date(arg);
        }

        if (arg.hasOwnProperty('__chrono') === true && arg.__chrono === true) {
            return arg.dateObject;
        }

        if (typeof arg === 'string') {
            arg = arg.toLowerCase();
            if (chronoSpecial.hasOwnProperty(arg) === true) {
                return chronoSpecial[arg](new Date());
            }

            const match = regex.exec(arg, chronoUnitRegex);
            if (match !== null) {
                const {offset, unit} = match;

                chronoCheckUnit(unit);

                return unitFunction[unitConversion[unit]](new Date(), parseInt(offset));
            }

            return new Date(arg);
        }

        const {year = 1970, month = 0, day = 0, hour = 0, minute = 0, second = 0, millisecond = 0} = arg;
        return new Date(year, month, day + 1, hour, minute, second, millisecond);
    })();

    return {
        __chrono: true,
        get dateObject() {
            return new Date(internalDate);
        },
        get unixTimestamp() {
            return internalDate.getTime();
        },

        get milliseconds() {
            return internalDate.getMilliseconds();
        },
        get seconds() {
            return internalDate.getSeconds();
        },
        get minutes() {
            return internalDate.getMinutes();
        },
        get hours() {
            return internalDate.getHours();
        },
        get weekday() {
            return internalDate.getDay();
        },
        get date() {
            return internalDate.getDate() - 1;
        },
        get month() {
            return internalDate.getMonth();
        },
        get year() {
            return internalDate.getFullYear();
        },

        shift(offset, unit) {
            let newDate;
            newDate = new Date(internalDate);

            if (typeof offset === 'object') {
                if (offset.hasOwnProperty('__chrono_duration') && offset.__chrono_duration === true) {
                    offset = offset.asObject();
                }

                for (const [unit, value] of Object.entries(offset)) {
                    chronoCheckUnit(unit);
                    newDate = unitFunction[unitConversion[unit]](newDate, value);
                }

                return chrono(newDate);
            }
            else {
                if (typeof offset === 'string') {
                    const match = regex.exec(offset, chronoUnitRegex);

                    ({offset, unit} = match);
                    chronoCheckUnit(unit);
                    offset = parseInt(offset);
                }

                return chrono(unitFunction[unitConversion[unit]](newDate, offset));
            }
        },
        startOf(unit) {
            const adjustedDate = new Date(internalDate);

            startOf[unit](adjustedDate);

            return chrono(adjustedDate);
        },
        format(formatString = null) {
            if (formatString === null) {
                return internalDate.toString();
            }

            if (formatString === 'utc') {
                return internalDate.toUTCString();
            }
            if (formatString === 'locale') {
                return internalDate.toLocaleString();
            }

            console.log(formatString.replace(
                /\{(\w+)(\/(\w+))?\}/,
                (full, prop, skip, type = 'base') => {
                    console.log(prop, type);
                    return chronoFormat[prop][type](internalDate);
                }
            ));

            return null;
        },
        toString() {
            return internalDate.toString();
        },
        toJSON() {
            return internalDate.toJSON();
        }
    };
};
chrono.diff = (first, second) => {
    const internalDate = new Date(first.unixTimestamp - second.unixTimestamp);

    return {
        milliseconds: internalDate.getMilliseconds(),
        seconds: internalDate.getSeconds(),
        minutes: internalDate.getMinutes(),
        hours: internalDate.getHours(),
        days: internalDate.getDate() - 2,
        months: internalDate.getMonth(),
        years: internalDate.getFullYear() - 1970
    };
};
chrono.now = () => chrono(Date.now());
chrono.trigger = (delay, func, ...args) => {
    const id = setTimeout(
        () => {
            status = 'fired';
            func(...args);
        },
        delay
    );
    let status;

    status = 'waiting';

    return {
        cancel() {
            status = 'cancelled';
            clearTimeout(id);
        },
        get status() {
            return status;
        }
    };
};

export default chrono;

import dayjs from "dayjs";

export const createCalendar = month => {
    // adding first day of this month
    const firstDay = getMonth(month);
    // const firstDay = dayjs().startOf("month");

    // getting days of week of the first day index
    const firstDayIndex = firstDay.day();
    // const firstDayIndex = firstDay.day();

    return Array(35)
    .fill(0) // If I don't put this, then there's nothing in the array so I can't see anything on the browser
    .map((_, i) => {
        const diffFromFirstDay = i - firstDayIndex;
        const day = firstDay.add(diffFromFirstDay, "day");
        console.log(day);
        return day;
    });
}

export const getMonth = ({ year, month }) => {
    return dayjs(`${year}-${month}`);
}

export const isSameDay = (d1, d2) => {
    const format = "YYYYMMDD";
    return d1.format(format) === d2.format(format);
}

export const isSameMonth = (m1, m2) => {
    const format = "YYYYMM";
    return m1.format(format) === m2.format(format);
}

// format of string
export const isFirstDay = day => day.date() === 1;
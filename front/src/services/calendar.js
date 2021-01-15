import dayjs from "dayjs";

export const createCalendar = () => {
    // adding first day of this month
    const firstDay = dayjs().startOf("month");

    // getting days of week of the first day index
    const firstDayIndex = firstDay.day();

    return Array(35)
    .fill(0) // If I don't put this, then there's nothing in the array so I can't see anything on the browser
    .map((_, i) => {
        const diffFromFirstDay = i - firstDayIndex;
        const day = firstDay.add(diffFromFirstDay, "day");
        console.log(day);
        return day;
    });
}
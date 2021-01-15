import React from "react";

import * as styles from "./style.css";

import { Typography } from "@material-ui/core";
import { isSameDay, isSameMonth, isFirstDay } from "../../services/calendar";

import  dayjs from "dayjs";

const CalendarElement = ({ day }) => {

    
    // const isFirstDay = day.date() === 1;
    

    // Today
    const today = dayjs();
    // const compareFormat = "YYYYMMDD";
    // const isToday = day.format(compareFormat) === today.format(compareFormat);

    // greydown for the other months
    // const isCurrentMonth = day.month() === today.month();
    const isCurrentMonth = isSameMonth(day, today);
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

    // setting the month info for the first day of the month
    const format = isFirstDay(day) ? "MMM DD" : "DD";

    // today or not
    const isToday = isSameDay(day, today);

    return(
        <div className={styles.element}>
            <Typography 
            className={styles.date}
            color={textColor}
            align="center"
            variant="caption"
            component="div"
            >
                <span className={isToday ? styles.today : ""}>
                    {day.format(format)}
                </span>
            </Typography>
        </div>
    )
}

export default CalendarElement;
import React from "react";

import * as styles from "./style.css";

import { Typography } from "@material-ui/core";

const CalendarElement = ({ day }) => {

    // format of string
    const isFirstDay = day.date() === 1;
    // setting the month info for the first day of the month
    const format = isFirstDay ? "MMM DD" : "DD";

    return(
        <div className={styles.element}>
            <Typography 
            className={styles.date}
            align="center"
            variant="caption"
            component="div"
            >
                {day.format(format)}
            </Typography>
        </div>
    )
}

export default CalendarElement;
import React from 'react';
import { GridList, Typography } from "@material-ui/core";

import CalendarElement from "../CalendarElements";
// import { createCalendar } from "../../services/calendar";

// import dayjs from "dayjs";
// import "dayjs/locale/ja";
// dayjs.locale("ja");

import * as styles from "./style.css";
import dayjs from 'dayjs';

// const calendar = [
//     "29",
//     "30",
//     "10月1日",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
//     "18",
//     "19",
//     "20",
//     "21",
//     "22",
//     "23",
//     "24",
//     "25",
//     "26",
//     "27",
//     "28",
//     "29",
//     "30",
//     "31",
//     "11月1日",
//     "2"
// ];

// const calendar = createCalendar();

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarBoard = ({ calendar }) => {
    console.log(calendar);
    return (
        <div className={styles.container}>
            <GridList 
            className={styles.grid}
            cols={7}
            spacing={0}
            cellHeight="auto"
            >
                {days.map(d => (
                    <li key={d}>
                        <Typography
                        className={styles.days}
                        color="textSecondary"
                        align="center"
                        variant="caption"
                        component="div"
                        >
                        {d}
                        </Typography>
                    </li>
                ))}
                {calendar.map(c => (
                    <li key={c.toISOString()}>
                        <CalendarElement day={c} />
                    </li>
                ))}
            {/* {calendar.map(c => (
                <li>{c}</li>
            ))} */}
            </GridList>
        </div>
    )
}


export default CalendarBoard;
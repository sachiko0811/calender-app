import React from "react";

import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";

import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { DatePicker } from '@material-ui/pickers';

const StyledToolbar =  withStyles({
    root: { margin: "0" }
})(Toolbar);

const StyledTypography = withStyles({
    root: { margin: "0 30px 0 10px" }
})(Typography);

const StyledDatePicker = withStyles({
    root:  { marginLeft: 30 }
})(DatePicker);

const Navigation = ({ setNextMonth, setPreviousMonth, setMonth, month }) => {
    // const [selectedDate, handleDateChange ] = useState(new Date());
    return (
        <StyledToolbar>
            <IconButton>
                <DehazeIcon />
            </IconButton>
            <img
            src="/images/calendar_icon.png"
            width="40"
            height="40"
            />
            <Typography
            color="textSecondary"
            variant="h5"
            component="h1"
            >
                Calendar
            </Typography>
            <IconButton 
            size="small"
            onClick={setPreviousMonth}
            >
                <ArrowBackIos />
            </IconButton>
            <IconButton 
            size="small"
            onClick={setNextMonth}
            >
                <ArrowForwardIos />
            </IconButton>
            <StyledDatePicker  
            value={month}
            onChange={setMonth}
            variant="inline"
            format="YYYY MM"
            animateYearScrolling
            disableToolbar
            />
        </StyledToolbar>
    );
};

export default Navigation;
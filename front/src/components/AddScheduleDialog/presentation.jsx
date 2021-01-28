import React from 'react';
import { 
    Dialog, 
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Input,
    Grid
} from "@material-ui/core";

import { LocationOnOutlined, NotesOutlined, AccessTime } from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";
import { withStyles } from "@material-ui/styles";

const spacer = { margin: "4px 0" };

const Title = withStyles({
    root: { marginBottom: 32, fontSize: 22 }
})(Input);

const AddScheduleDialog = ({ 
    schedule: {
        form: { title, location, description, date },
         isDialogOpen 
        }, 
        closeDialog,
        setSchedule
     }) => {
    return (
        <Dialog
        open={isDialogOpen}
        onClose={closeDialog}
        maxWidth="xs"
        fullWidth
        >
            <DialogContent>
                <Title  
                autoFocus 
                fullWidth 
                value={title}
                placeholder="Add title and date" 
                onChange={e => setSchedule({ title: e.target.value })}
                />
                <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                >
                    <Grid item>
                        <AccessTime />
                    </Grid>
                    <Grid item xs={10}>
                        <DatePicker 
                        value={date}
                        onChange={d => setSchedule({ date: d })}
                        variant="inline"
                        format="YYYY MM"
                        animateYearScrolling
                        disableToolbar
                        fullWidth
                        style={spacer}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                <Grid item>
                    <LocationOnOutlined />
                </Grid>
                <Grid item xs={10}>
                    <TextField style={spacer} fullWidth placeholder="Add a place" />
                </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <NotesOutlined />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField 
                        style={spacer} 
                        fullWidth 
                        placeholder="Add a description"
                        value={description}
                        onChange={e => setSchedule({ description: e.target.value })}
                         />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="outlined">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddScheduleDialog;
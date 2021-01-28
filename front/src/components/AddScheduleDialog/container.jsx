import AddScheduleDialog from  "./presentation";
import { connect } from "react-redux";
import { addScheduleCloseDialog, addScheduleOpenDialog } from "../../redux/addSchedule/actions";

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(addScheduleOpenDialog());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);
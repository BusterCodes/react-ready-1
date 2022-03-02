import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//
import { useDispatch } from "react-redux";
// import { removeStudent } from "./rosterSlice.js";
import {
  darkModeOn,
  darkModeOff,
} from "../../app/features/darkMode/darkModeSlice.js";

const DeleteStudentModal = ({ studentID }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(darkModeOn());
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(darkModeOff());
  };

  const handleDeleteStudent = () => {
    // dispatch(removeStudent(studentId));
    axios
      .delete("http://localhost:4000/students/delete-student/" + studentID)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
    setOpen(false);
    dispatch(darkModeOff());
  };

  return (
    <Box sx={{ float: "right", ml: 1 }}>
      <Button onClick={handleClickOpen}>Delete</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ textAlign: "center" }}
      >
        <DialogTitle id="alert-dialog-title" sx={{}}>
          {"Confirm - Delete Student"}
        </DialogTitle>
        <DialogContent sx={{}}>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete the student (ID: {studentID})?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ m: "auto" }}>
          <Button onClick={handleDeleteStudent}>Yes</Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default DeleteStudentModal;

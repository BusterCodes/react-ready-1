import React from "react";
//
import Typography from "@mui/material/Typography";
//
import AddStudentForm from "../components/Form/AddStudentForm";

const AddStudentPage = () => {
  return (
    <>
      <Typography variant="h4" align="center" sx={{ m: 5 }}>
        Add Student
      </Typography>
      <AddStudentForm />
    </>
  );
};

export default AddStudentPage;

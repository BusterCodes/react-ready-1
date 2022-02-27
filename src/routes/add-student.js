import React from "react";
//
import Typography from "@mui/material/Typography";
//
import AddStudentForm from "../components/Form/AddStudentForm";

const AddStudentPage = () => {
  return (
    <>
      <Typography variant="h4" align="center" sx={{ m: 5 }}>
        AddStudent
      </Typography>
      <AddStudentForm />
    </>
  );
};

export default AddStudentPage;

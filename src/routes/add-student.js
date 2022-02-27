import React from "react";
// components - MUI
import Typography from "@mui/material/Typography";
// HOCs
import AddStudent from "../app/features/roster/AddStudent";

const AddStudentPage = () => {
  return (
    <>
      <Typography variant="h4" align="center" sx={{ m: 5 }}>
        Add Student
      </Typography>
      <AddStudent />
    </>
  );
};

export default AddStudentPage;

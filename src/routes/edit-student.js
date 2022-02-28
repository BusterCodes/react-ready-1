import React from "react";
//
import Typography from "@mui/material/Typography";
//
import EditStudentForm from "../app/features/roster/EditStudent";

const EditStudentPage = () => {
  return (
    <>
      <Typography variant="h4" align="center" sx={{ m: 5 }}>
        Edit Student
      </Typography>
      <EditStudentForm />
    </>
  );
};

export default EditStudentPage;

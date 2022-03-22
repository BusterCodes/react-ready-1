import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//
import { withFormik } from "formik";
import { studentValidationSchema } from "../utils/formHelpers";
import StudentForm from "../components/Student/StudentForm";
//
import Typography from "@mui/material/Typography";

const AddStudentPage = () => {
  const navigate = useNavigate();

  // Enhance Student Form for Edit/Post to API
  const AddStudentForm = withFormik({
    validationSchema: studentValidationSchema,
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        // alert(JSON.stringify(values, null, 2));
        axios
          .post("http://localhost:4000/students/create-student", values)
          .then((res) => {
            if (res.status === 200) {
              alert("Student successfully created");
              navigate("/");
            } else Promise.reject();
          })
          .catch((err) => alert("Something went wrong"));

        setSubmitting(false);
      }, 1000);
    },

    displayName: "AddStudentForm",
  })(StudentForm);

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

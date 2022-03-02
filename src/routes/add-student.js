import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
//
import { withFormik } from "formik";
//
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//
import StudentForm from "../components/Student/StudentForm";

const AddStudentPage = () => {
  const navigate = useNavigate();

  const EnhancedStudentForm = withFormik({
    mapPropsToValues: () => ({
      name: "",
      dateOfBirth: "",
      geoCity: "",
      geoState: "",
      geoZip: "",
    }),

    // Custom sync validation
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Required";
      }

      return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        // axios
        //   .post("http://localhost:4000/students/create-student", values)
        //   .then((res) => {
        //     if (res.status === 200) alert("Student successfully created");
        //     else Promise.reject();
        //   })
        //   .catch((err) => alert("Something went wrong"));

        // navigate("/");
        setSubmitting(false);
      }, 1000);
    },

    displayName: "BasicForm",
  })(StudentForm);

  return (
    <>
      <Typography variant="h4" align="center" sx={{ m: 5 }}>
        Add Student
      </Typography>
      <Container>
        <EnhancedStudentForm />
      </Container>
    </>
  );
};

export default AddStudentPage;

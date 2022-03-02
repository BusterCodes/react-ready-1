import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
//
import { withFormik } from "formik";
//
import Typography from "@mui/material/Typography";

//
import StudentForm from "../components/Student/StudentForm";

const EditStudentPage = () => {
  const [student, setStudent] = useState({});
  let { id } = useParams();
  const navigate = useNavigate();

  // Fetch Student by ID
  useEffect(async () => {
    const url = "http://localhost:4000/students/update-student/" + id;
    const data = await axios
      .get(url)
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
    return data;
  }, []);

  // Enhance Student Form for Edit/Post to API
  const EditStudentForm = withFormik({
    mapPropsToValues: () => ({ ...student }),

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
        axios
          .put(
            "http://localhost:4000/students/update-student/" + student._id,
            values
          )
          .then((res) => {
            if (res.status === 200) {
              alert("Student successfully updated");
              navigate("/");
              //   props.history.push("/student-list");
            } else Promise.reject();
          })
          .catch((err) => alert("Something went wrong"));
        setSubmitting(false);
      }, 1000);
    },

    displayName: "BasicForm",
  })(StudentForm);

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

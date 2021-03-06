import { useState } from "react";
import { useNavigate } from "react-router-dom";
//
import { useDispatch } from "react-redux";
import { addStudent } from "./rosterSlice";
//
import { useFormik } from "formik";
import {
  validationSchema,
  isFormValid,
  initialValues,
  statesArray,
} from "../../../utils/formHelpers";
import { nanoid } from "nanoid";
//
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
//
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Grid } from "@mui/material";

const AddStudentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [geoState, setGeoState] = useState("");
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addStudent({ ...values, id: nanoid() }));
      navigate("/");
    },
  });

  const isFormValid =
    Object.values(formik.values).every((value) => value !== "") &&
    Object.values(formik.errors).every((error) => error === "");

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Name */}
          <Grid item xs={12}>
            <TextField
              autoFocus
              required
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              // error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={
                <Box sx={{ textAlign: "right" }}>
                  {formik.errors.name && formik.errors.name}
                </Box>
              }
              // helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          {/* DOB */}
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={dateOfBirth}
                onChange={(newValue) => {
                  setDateOfBirth(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    required
                    name="dateOfBirth"
                    label="DOB"
                    value={dateOfBirth}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dateOfBirth &&
                      Boolean(formik.errors.dateOfBirth)
                    }
                    helperText={
                      <Box sx={{ textAlign: "right" }}>
                        {formik.errors.dateOfBirth && formik.errors.dateOfBirth}
                      </Box>
                    }
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          {/* City */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="city"
              name="city"
              label="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              // error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={
                <Box sx={{ textAlign: "right" }}>
                  {formik.errors.city && formik.errors.city}
                </Box>
              }
            />
          </Grid>
          {/* State */}
          <Grid item xs={12}>
            <Box>
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  placeholder="State"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="geoState"
                  value={formik.values.geoState}
                  label="State"
                  onChange={(e) => {
                    formik.handleChange(e);
                    setGeoState(e.target.value);
                  }}
                  // error={
                  //   formik.touched.geoState && Boolean(formik.errors.geoState)
                  // }
                >
                  {statesArray.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  <Box sx={{ textAlign: "right" }}>
                    {formik.errors.geoState && formik.errors.geoState}
                  </Box>
                </FormHelperText>
              </FormControl>
            </Box>
          </Grid>
          {/* Zip */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="zip"
              name="zip"
              label="Zip"
              value={formik.values.zip}
              onChange={formik.handleChange}
              // error={formik.touched.zip && Boolean(formik.errors.zip)}
              helperText={
                <Box sx={{ textAlign: "right" }}>{formik.errors.zip}</Box>
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              disabled={!isFormValid}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button href="/" color="primary" variant="outlined" fullWidth>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddStudentForm;

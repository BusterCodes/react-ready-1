import { useState } from "react";
import { useNavigate } from "react-router-dom";
//
import { useDispatch } from "react-redux";
import { addStudent } from "./rosterSlice";
//
import { useFormik } from "formik";
import {
  validationSchema,
  initialValues,
  statesArray,
} from "../../../utils/formHelpers";
import { nanoid } from "nanoid";
//
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
//
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

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

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          {/* Name */}
          <TextField
            autoFocus
            required
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          {/* DOB */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={dateOfBirth}
              onChange={(newValue) => {
                setDateOfBirth(newValue);
              }}
              renderInput={(params) => (
                <TextField
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
                    formik.touched.dateOfBirth && formik.errors.dateOfBirth
                  }
                />
              )}
            />
          </LocalizationProvider>

          {/* City */}
          <TextField
            required
            fullWidth
            id="city"
            name="city"
            label="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
          {/* State */}
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
                error={
                  formik.touched.geoState && Boolean(formik.errors.geoState)
                }
                // helperText={formik.touched.geoState}
              >
                {statesArray.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          {/* Zip */}
          <TextField
            required
            fullWidth
            id="zip"
            name="zip"
            label="Zip"
            value={formik.values.zip}
            onChange={formik.handleChange}
            error={formik.touched.zip && Boolean(formik.errors.zip)}
            helperText={formik.touched.zip && formik.errors.zip}
          />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default AddStudentForm;

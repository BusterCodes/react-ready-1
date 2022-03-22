import { useState } from "react";
//
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// Select
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// Datepicker
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";
//
import { statesArray, isFormValid } from "../../utils/formHelpers";

const StudentForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  // const [dateOfBirth, setDateOfBirth] = useState({
  //   values: { dateOfBirth: "" },
  // });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container sx={{ maxWidth: 600, m: "auto" }}>
        {/* NAME */}
        <Grid item xs={12} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            // helperText={`This is helper text`}
          />
        </Grid>

        {/* DOB */}
        {/* <Grid item xs={12} sx={{ mb: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              id="dateOfBirth"
              name="dateOfBirth"
              label="DOB"
              value={values.dateOfBirth}
              onChange={(newValue) => {
                setDateOfBirth(newValue);
                handleChange;
              }}
              onBlur={handleBlur}
              error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
              helperText={touched.dateOfBirth && errors.dateOfBirth}
              renderInput={(params) => (
                <TextField {...params} value={values.dateOfBirth} />
              )}
            />
          </LocalizationProvider>
        </Grid> */}

        <Grid item xs={12} sx={{ mb: 2 }}>
          <TextField
            // required
            fullWidth
            id="dateOfBirth"
            name="dateOfBirth"
            label="DOB"
            value={values.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
            helperText={touched.dateOfBirth && errors.dateOfBirth}
          />
        </Grid>

        {/* CITY */}
        <Grid item xs={12} sx={{ mb: 2 }}>
          <TextField
            // required
            fullWidth
            id="geoCity"
            name="geoCity"
            label="City"
            value={values.geoCity}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.geoCity && Boolean(errors.geoCity)}
            helperText={touched.geoCity && errors.geoCity}
          />
        </Grid>

        {/* STATE */}
        <Grid item xs={12} sx={{ mb: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              id="geoState"
              name="geoState"
              label="State"
              value={values.geoState}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.geoState && Boolean(errors.geoState)}
              helperText={touched.geoState && errors.geoState}
            >
              {statesArray.map((state) => (
                <MenuItem value={state}>{state}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* ZIP */}
        <Grid item xs={12} sx={{ mb: 2 }}>
          <TextField
            // required
            fullWidth
            id="geoZip"
            name="geoZip"
            label="Zip"
            value={values.geoZip}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.geoZip && Boolean(errors.geoZip)}
            helperText={touched.geoZip && errors.geoZip}
          />
        </Grid>

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={!isFormValid(values, errors)}
        >
          Submit
        </Button>
        {JSON.stringify(values, null)}
      </Grid>
    </form>
  );
};

export default StudentForm;

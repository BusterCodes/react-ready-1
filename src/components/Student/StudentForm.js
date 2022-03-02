import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// import { statesArray } from "../../utils/formHelpers";

const StudentForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

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
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
        </Grid>

        {/* DOB */}
        <Grid item xs={12} sx={{ mb: 2 }}>
          <TextField
            required
            fullWidth
            id="dateOfBirth"
            name="dateOfBirth"
            label="DOB"
            value={values.dateOfBirth}
            onChange={handleChange}
            error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
            helperText={touched.dateOfBirth && errors.dateOfBirth}
          />
        </Grid>

        {/* CITY */}
        <Grid item xs={12} sx={{ mb: 2 }}>
          <TextField
            required
            fullWidth
            id="geoCity"
            name="geoCity"
            label="City"
            value={values.geoCity}
            onChange={handleChange}
            error={touched.geoCity && Boolean(errors.geoCity)}
            helperText={touched.geoCity && errors.geoCity}
          />
        </Grid>

        {/* STATE */}
        <Grid item xs={12} sx={{ mb: 2 }}>
          <TextField
            required
            fullWidth
            id="geoState"
            name="geoState"
            label="State"
            value={values.geoState}
            onChange={handleChange}
            error={touched.geoState && Boolean(errors.geoState)}
            helperText={touched.geoState && errors.geoState}
          />
        </Grid>

        {/* ZIP */}
        <Grid item xs={12} sx={{ mb: 2 }}>
          <TextField
            required
            fullWidth
            id="geoZip"
            name="geoZip"
            label="Zip"
            value={values.geoZip}
            onChange={handleChange}
            error={touched.geoZip && Boolean(errors.geoZip)}
            helperText={touched.geoZip && errors.geoZip}
          />
        </Grid>

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default StudentForm;

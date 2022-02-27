import React from "react";
import { useFormik } from "formik";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const DatePickerForm = () => {
  // A custom validation function. This must return an object
  // which keys are symmetrical to our values/initialValues
  const validate = (values) => {
    const errors = {};

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      departureDate: Date.now(),
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <form>
        <div className="form-group row">
          <label for="departureDate" className="col-sm-7 col-form-label">
            Departure Date
          </label>
          <div className="col-sm-5">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Departure Date"
                id="departureDate"
                name="departureDate"
                value={formik.values.departureDate}
                onChange={(val) => {
                  console.log(val);
                  //val is the variable which contain the selected date
                  //You can set it anywhere
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {formik.errors.departureDate ? (
              <div>{formik.errors.departureDate}</div>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DatePickerForm;

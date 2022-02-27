// import { useState } from "react";
// import { useFormik, Field } from "formik";
// import * as yup from "yup";
// //
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// //
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";
// //
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// //
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addStudent,
//   selectRoster,
// } from "../../app/features/roster/rosterSlice.js";

// const validationSchema = yup.object({
//   name: yup
//     .string("Enter your name")
//     .max(32, "Too many characters")
//     .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
//     .required("Name is required"),
//   city: yup
//     .string("Enter your city")
//     .max(32, "Too many characters")
//     .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
//     .required("City is required"),
//   zip: yup
//     .string("Enter your zip code")
//     .max(5, "Too many characters")
//     .matches(/^\d+$/, "Only numbers are allowed for this field ")
//     .required("Zip code is required"),
// });

// const AddStudentForm = () => {
//   const dispatch = useDispatch();
//   const [dateOfBirth, setDateOfBirth] = useState(null);
//   const [geoState, setGeoState] = useState("");
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       city: "",
//       zip: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//       dispatch(
//         addStudent({
//           name: name || "TestName",
//           dateOfBirth: "TestDateOfBirth",
//           city: "TestCity",
//           state: "TestState",
//           zip: "TestZip",
//         })
//       );
//     },
//   });

//   const handleGeoStateChange = (event) => {
//     setGeoState(event.target.value);
//   };

//   return (
//     <Container>
//       <form onSubmit={formik.handleSubmit}>
//         <Stack spacing={2}>
//           {/* Name */}
//           <TextField
//             autoFocus
//             fullWidth
//             id="name"
//             name="name"
//             label="Name"
//             // value={formik.values.name}
//             onChange={formik.handleChange}
//             error={formik.touched.name && Boolean(formik.errors.name)}
//             helperText={formik.touched.name && formik.errors.name}
//           />
//           {/* DOB */}

//           <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <DatePicker
//               value={dateOfBirth}
//               onChange={(newValue) => {
//                 setDateOfBirth(newValue);
//               }}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   required
//                   name="dateOfBirth"
//                   label="DOB"
//                   value={dateOfBirth}
//                   onChange={formik.handleChange}
//                   error={
//                     formik.touched.dateOfBirth &&
//                     Boolean(formik.errors.dateOfBirth)
//                   }
//                   helperText={
//                     formik.touched.dateOfBirth && formik.errors.dateOfBirth
//                   }
//                 />
//               )}
//             />
//           </LocalizationProvider>

//           {/* City */}
//           <TextField
//             fullWidth
//             id="city"
//             name="city"
//             label="City"
//             value={formik.values.city}
//             onChange={formik.handleChange}
//             error={formik.touched.city && Boolean(formik.errors.city)}
//             helperText={formik.touched.city && formik.errors.city}
//           />
//           {/* State */}
//           <Box>
//             <FormControl fullWidth required>
//               <InputLabel id="demo-simple-select-label">State</InputLabel>
//               <Select
//                 placeholder="State"
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 name="geoState"
//                 value={formik.values.geoState}
//                 label="State"
//                 // onChange={handleGeoStateChange}
//                 onChange={(e) => {
//                   formik.handleChange(e);
//                   handleGeoStateChange(e);
//                 }}
//                 error={
//                   formik.touched.geoState && Boolean(formik.errors.geoState)
//                 }
//                 helperText={formik.touched.geoState}
//               >
//                 {statesArray.map((state) => (
//                   <MenuItem key={state} value={state}>
//                     {state}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Box>
//           {/* Zip */}
//           <TextField
//             fullWidth
//             id="zip"
//             name="zip"
//             label="Zip"
//             value={formik.values.zip}
//             onChange={formik.handleChange}
//             error={formik.touched.zip && Boolean(formik.errors.zip)}
//             helperText={formik.touched.zip && formik.errors.zip}
//           />

//           <Button color="primary" variant="contained" fullWidth type="submit">
//             Submit
//           </Button>
//         </Stack>
//       </form>
//     </Container>
//   );
// };

// export default AddStudentForm;

// const statesArray = [
//   "Alabama",
//   "Alaska",
//   "American Samoa",
//   "Arizona",
//   "Arkansas",
//   "California",
//   "Colorado",
//   "Connecticut",
//   "Delaware",
//   "District of Columbia",
//   "Federated States of Micronesia",
//   "Florida",
//   "Georgia",
//   "Guam",
//   "Hawaii",
//   "Idaho",
//   "Illinois",
//   "Indiana",
//   "Iowa",
//   "Kansas",
//   "Kentucky",
//   "Louisiana",
//   "Maine",
//   "Marshall Islands",
//   "Maryland",
//   "Massachusetts",
//   "Michigan",
//   "Minnesota",
//   "Mississippi",
//   "Missouri",
//   "Montana",
//   "Nebraska",
//   "Nevada",
//   "New Hampshire",
//   "New Jersey",
//   "New Mexico",
//   "New York",
//   "North Carolina",
//   "North Dakota",
//   "Northern Mariana Islands",
//   "Ohio",
//   "Oklahoma",
//   "Oregon",
//   "Palau",
//   "Pennsylvania",
//   "Puerto Rico",
//   "Rhode Island",
//   "South Carolina",
//   "South Dakota",
//   "Tennessee",
//   "Texas",
//   "Utah",
//   "Vermont",
//   "Virgin Island",
//   "Virginia",
//   "Washington",
//   "West Virginia",
//   "Wisconsin",
//   "Wyoming",
// ];

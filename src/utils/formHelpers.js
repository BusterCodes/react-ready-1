import * as yup from "yup";

export const initialValues = {
  name: "",
  dateOfBirth: "",
  city: "",
  geoState: "",
  zip: "",
};

export const studentValidationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .max(32, "Too many characters")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("Name is required"),
  dateOfBirth: yup.date().nullable().required("Date of Birth is required"),
  geoCity: yup
    .string("Enter your city")
    .max(32, "Too many characters")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("City is required"),
  geoState: yup.string().required("State is required"),
  geoZip: yup
    .string("Enter your zip code")
    .matches(/^\d+$/, "Only numbers are allowed for this field ")
    .min(5, "Too few characters")
    .max(5, "Too many characters")
    .required("Zip code is required"),
});

export const isFormValid = (fValues, fErrors) => {
  return (
    Object.values(fValues).length !== 0 &&
    Object.values(fValues).every((value) => value !== "") &&
    Object.values(fErrors).every((error) => error === "")
  );
};

export const statesArray = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

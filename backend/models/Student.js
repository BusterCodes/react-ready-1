const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    studentID: {
      type: String,
    },
    name: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    geoCity: {
      type: String,
    },
    geoState: {
      type: String,
    },
    geoZip: {
      type: String,
    },
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("Student", studentSchema);

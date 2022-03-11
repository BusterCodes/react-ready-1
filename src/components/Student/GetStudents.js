import { useState, useEffect, useCallback } from "react";
import axios from "axios";
//
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
//
import MuiLink from "../Link/MuiLink";
import DeleteStudent from "./DeleteStudent";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/students/")
      .then(({ data }) => {
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Zip</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!!students &&
            students.map((student) => (
              <TableRow
                key={student._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {student.name}
                </TableCell>
                <TableCell align="right">{student.dateOfBirth}</TableCell>
                <TableCell align="right">{student.geoCity}</TableCell>
                <TableCell align="right">{student.geoState}</TableCell>
                <TableCell align="right">{student.geoZip}</TableCell>
                <TableCell align="right">
                  <MuiLink href={`edit-student/${student._id}`}>
                    <Button variant="text">Edit</Button>
                  </MuiLink>
                  |<DeleteStudent studentID={student._id} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default StudentDetails;

import { useState, useEffect } from "react";
import axios from "axios";
//
import { useSelector, useDispatch } from "react-redux";
import { selectRoster } from "./rosterSlice";
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
import MuiLink from "../../../components/Link/MuiLink";
import DeleteStudent from "./DeleteStudent";

const StudentDetails = () => {
  const roster = useSelector(selectRoster);
  // const [students, setStudents] = useState([]);

  // useEffect(async () => {
  //   const url = "./students.json";
  //   const data = await axios
  //     .get(url)
  //     .then((res) => setStudents(res.data))
  //     .catch((err) => console.log(err));
  //   return data;
  // }, []);

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
          {roster.map((student) => (
            <TableRow
              key={student.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              <TableCell align="right">{student.dateOfBirth}</TableCell>
              <TableCell align="right">{student.city}</TableCell>
              <TableCell align="right">{student.geoState}</TableCell>
              <TableCell align="right">{student.zip}</TableCell>
              <TableCell align="right">
                <MuiLink href={`edit-student/${student.id}`}>
                  <Button variant="text">Edit</Button>
                </MuiLink>
                |<DeleteStudent studentId={student.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default StudentDetails;

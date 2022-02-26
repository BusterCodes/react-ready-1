import * as React from "react";
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
import MuiLink from "../Nav/MuiLink";
import DeleteStudent from "../Modal/DeleteStudent";

function createData(name, dob, city, state, zip) {
  return { name, dob, city, state, zip };
}

const rows = [
  createData("Student 1", "01/01/1999", "Riverwoods", "Illinois", "60001"),
  createData("Student 2", "01/11/1989", "Riverwoods", "Illinois", "60001"),
];

export default function BasicTable() {
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dob}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.zip}</TableCell>
              <TableCell align="right">
                <MuiLink href="edit-student">
                  <Button variant="text">Edit</Button>
                </MuiLink>
                |<DeleteStudent />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

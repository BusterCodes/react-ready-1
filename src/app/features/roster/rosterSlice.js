import { createSlice } from "@reduxjs/toolkit";

export const rosterSlice = createSlice({
  name: "roster",
  initialState: {
    students: [],
  },
  reducers: {
    addStudent: (state, action) => {
      const student = action.payload;
      state.students = [...state.students, student];
    },
    removeStudent: (state, action) => {
      const existingStudentIndex = state.students.findIndex(
        (existingStudent) => existingStudent.id === action.payload
      );
      const existingStudent = state.students[existingStudentIndex];
      let updatedRoster;

      if (existingStudent) {
        updatedRoster = state.students.filter(
          (student) => student.id !== action.payload
        );
      } else {
        return;
      }
      state.students = updatedRoster;
    },
  },
});

export const { addStudent, removeStudent } = rosterSlice.actions;

export const selectRoster = (state) => state.roster.students;

export default rosterSlice.reducer;

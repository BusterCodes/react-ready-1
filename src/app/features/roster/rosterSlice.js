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
    updateStudent: (state, action) => {
      const newRoster = state.students.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          ...action.payload,
        };
      });
      state.students = newRoster;
    },
  },
});

export const { addStudent, removeStudent, updateStudent } = rosterSlice.actions;

export const selectRoster = (state) => state.roster.students;

export default rosterSlice.reducer;

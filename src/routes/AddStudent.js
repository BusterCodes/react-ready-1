import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../app/features/counter/counterSlice.js";

function AddStudent() {
  const count = useSelector(selectCount);
  return (
    <>
      <div>AddStudent</div>
      <div>{count}</div>
    </>
  );
}

export default AddStudent;

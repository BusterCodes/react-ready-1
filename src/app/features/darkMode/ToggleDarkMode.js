import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode, selectDarkMode } from "./darkModeSlice";

export function ToggleDarkMode() {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Toggle Dark Mode"
          onClick={() => dispatch(toggleDarkMode())}
        >
          Toggle Dark/Light
        </button>
        <span>{darkMode}</span>
      </div>
    </div>
  );
}

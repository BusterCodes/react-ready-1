import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNav from "./components/Layout/TopNav";

import { Home, About, AddStudent, EditStudent } from "./routes";

const App = () => {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/add-student" element={<AddStudent />} />
        <Route exact path="/edit-student" element={<EditStudent />} />
      </Routes>
    </Router>
  );
};

export default App;

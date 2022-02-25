// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authActions";
// import { Provider } from "react-redux";
// import store from "./store";
//
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import '../styles/global.css'

import Home from "./routes/Home";
// import Login from '../containers/Login'
// import RecoveryPassword from '../containers/RecoveryPassword'
// import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;

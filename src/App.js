import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
//
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, AddStudent, EditStudent } from "./routes";
//
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./app/features/darkMode/darkModeSlice";

const App = () => {
  return (
    <ThemeProvider theme={useSelector(selectDarkMode) ? lightTheme : darkTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/add-student" element={<AddStudent />} />
            <Route exact path="/edit-student" element={<EditStudent />} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, AddStudentPage, EditStudentPage } from "./routes";
//
import Layout from "./components/Layout";
import { lightTheme, darkTheme } from "./theme";
//
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
//
import { useSelector } from "react-redux";
import { selectDarkMode } from "./app/features/darkMode/darkModeSlice";

const App = () => {
  return (
    <ThemeProvider theme={useSelector(selectDarkMode) ? darkTheme : lightTheme}>
      <CssBaseline />
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/add-student" element={<AddStudentPage />} />
            <Route exact path="/edit-student" element={<EditStudentPage />} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

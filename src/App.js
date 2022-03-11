import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  AddStudentPage,
  EditStudentPage,
  TestPage,
  NoMatch,
} from "./pages";
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
            <Route
              exact
              path="/edit-student/:id"
              element={<EditStudentPage />}
            />
            <Route exact path="/test" element={<TestPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

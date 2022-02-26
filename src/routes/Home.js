import Button from "@mui/material/Button";
// import { Counter } from "../app/features/counter/Counter";
//
import Hero from "../components/Hero/Hero";
import MuiLink from "../components/Nav/MuiLink";
import StudentDetails from "../components/Table/StudentDetails";
//
import { useSelector } from "react-redux";
import { selectDarkMode } from "../app/features/darkMode/darkModeSlice.js";

const heroContent = {
  title: "The Annual Conference",
  description: "Grand Space. Portland. 21-26 Sept 2014",
  image: "https://source.unsplash.com/random",
  imageText: "hero image",
  // linkText: "Continue reading…",
};

const Home = () => {
  return (
    <>
      <Hero hero={heroContent} />
      {/* <Counter /> */}
      {JSON.stringify(useSelector(selectDarkMode))}
      <StudentDetails />
      <MuiLink href="/add-student">
        <Button variant="contained" sx={{ float: "right", right: 25, top: 25 }}>
          Add New Student
        </Button>
      </MuiLink>
    </>
  );
};

export default Home;

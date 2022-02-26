import Button from "@mui/material/Button";
import { Counter } from "../app/features/counter/Counter";
//
import Footer from "../components/Layout/Footer";
import Hero from "../components/Layout/Hero";
import MuiLink from "../components/Nav/MuiLink";
import StudentDetails from "../components/Table/StudentDetails";

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
      <Counter />
      <StudentDetails />
      <MuiLink href="/add-student">
        <Button variant="contained" sx={{ float: "right", right: 25, top: 25 }}>
          Add New Student
        </Button>
      </MuiLink>
      <Footer />
    </>
  );
};

export default Home;

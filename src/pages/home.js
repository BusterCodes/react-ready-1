import Button from "@mui/material/Button";
//
import Hero from "../components/Hero/Hero";
import MuiLink from "../components/Link/MuiLink";
import StudentDetails from "../components/Student/GetStudents";

const heroContent = {
  title: "The Annual Conference",
  description: "Grand Space. Portland. 21-26 Sept 2014",
  image: "https://source.unsplash.com/random",
  imageText: "hero image",
  // linkText: "Continue reading…",
};

const HomePage = () => {
  return (
    <>
      <Hero hero={heroContent} />
      <StudentDetails />
      <MuiLink href="/add-student">
        <Button
          variant="contained"
          sx={{ float: "right", right: 25, top: 25, mb: 5 }}
        >
          Add New Student
        </Button>
      </MuiLink>
    </>
  );
};

export default HomePage;

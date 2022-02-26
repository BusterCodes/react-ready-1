import * as React from "react";
//
import Footer from "../components/Layout/Footer";
import Hero from "../components/Layout/Hero";
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
    <React.Fragment>
      <Hero hero={heroContent} />
      <StudentDetails />
      <Footer />
    </React.Fragment>
  );
};

export default Home;

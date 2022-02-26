import * as React from "react";
//
import TopNav from "../components/Layout/TopNav";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Layout/Hero";
import StudentDetails from "../components/Table/StudentDetails";
//
// import PricingContent from "../page-components/PricingContent";

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
      <TopNav />
      <Hero hero={heroContent} />
      <StudentDetails />
      <Footer />
    </React.Fragment>
  );
};

export default Home;

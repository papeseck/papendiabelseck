import React from "react";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";
import WorkCard from "../components/WorkCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="PROJECTS" text="Some of my most recent work" />
      <WorkCard />
      <Footer />
    </div>
  );
};

export default Project;

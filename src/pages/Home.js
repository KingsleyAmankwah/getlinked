import React from "react";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Rewards from "../components/Rewards";
import Timeline from "../components/Timeline";
import Navbar from "../components/Nav";

function Home() {
  return (
    <div className="w-full h-full bg-color">
      <Navbar />
      <Hero />
      <Overview />
      <Faqs />
      <Timeline />
      <Rewards />
      <Footer />
    </div>
  );
}

export default Home;

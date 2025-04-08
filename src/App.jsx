import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/Video Player/VideoPlayer";
import { useState } from "react";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title
          title="Our PROGRAMS"
          subtitle="We Provide One of The Best Programs"
        />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title title="Gallery" subtitle="Campus photos" />
        <Campus />
        <Title title="Testimonials" subtitle="What our Alumini have to say" />
        <Testimonials />
        <Title title="Contact Us" subtitle="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;

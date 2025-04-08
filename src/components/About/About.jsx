import React from "react";
import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} className="about-image" alt="about-image" />
        <img
          src={play_icon}
          className="play-icon"
          alt="play-icon"
          onClick={() => setPlayState(true)}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT THE UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>
          Our university is committed to providing a transformative education
          that empowers students to excel in their chosen fields. With a focus
          on innovation, research, and community engagement, we prepare our
          students to become leaders and change-makers in a rapidly evolving
          world.
        </p>
        <p>
          With our focus in innovation, hands-on learning , and personalized
          mentorship. Our dedicated faculty, state-of-the-art facilities, and
          vibrant campus community create an environment where students can
          thrive academically and personally. We offer a wide range of programs
          and opportunities that cater to diverse interests and career
          aspirations.
        </p>
        <p>
          Not only do we provide a good student-to faculty ratio, but we also
          prioritize the strong academic excellence of our students. Whether you
          want to be an engineer, a doctor, or an artist, we have the resources
          and support to help you succeed. Our commitment to research and
          innovation ensures that our students are at the forefront of their
          fields, equipped with the skills and knowledge needed to tackle
          real-world challenges. We believe in fostering a culture of
          collaboration and creativity, where students can explore their
          passions and make a positive impact on society.
        </p>
      </div>
    </div>
  );
};

export default About;

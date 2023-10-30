import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Hello, I'm Tejas More, a passionate IT enthusiast ready to embark on an exciting journey in the world of technology. I believe that IT isn't just about coding and computers; it's about solving real-world problems and making a positive impact on society.
          I have graduated with a Bsc.IT from Mumbai University. Throughout my academic journey, I developed a strong foundation in programming languages like HTML, CSS, Javascript, C#, Python, Django, Php, Java, ReactJs, etc. My goal is to leverage my technical skills to contribute to innovative projects that have a meaningful impact. I'm eager to join a dynamic team where I can learn, grow, and make a difference. I'm always open to networking and exploring new opportunities. Thank you for visiting my portfolio. I'm excited to connect with like-minded professionals and explore how we can shape the future through technology.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      {/* <div className="right">
      </div> */}
    </div>
  );
}

export default AboutContent;
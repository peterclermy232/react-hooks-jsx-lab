import React from "react";
import { image } from "../data/data";

function About() {
  return (
     <div >
      <h2>About Me</h2>
      <p>This is About me</p>
      <img src={image} alt="I made this" />
     </div>
  );
}

export default About;

import React from "react";
import Header from "./Header";
import resume from "../images/Resume image.png";

export default function Resume() {
  return (
    <div className="resume">
      <Header />
      <h1>Please Find my Professional Resume Below:</h1>
      <img src={resume} alt="My Professional Resume" id="resume-img" />
    </div>
  );
}

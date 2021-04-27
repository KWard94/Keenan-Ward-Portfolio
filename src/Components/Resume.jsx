import React from "react";
import Header from "./Header";
import resume from "../images/Resume image.png";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="resume">
      <Header />
      <h1 id="resume-intro">Please Find my Professional Resume Below:</h1>

      <Link to="/pdf" target="_blank">
        <img src={resume} alt="My Professional Resume" id="resume-img" />
      </Link>

      {/* <iframe src={resumePDF} width="100%" height="700px" title="resume-pdf" /> */}

      {/* <embed src={resumePDF} width="70%" height="900rem" /> */}
    </div>
  );
}

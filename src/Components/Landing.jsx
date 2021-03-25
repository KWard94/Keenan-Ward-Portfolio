import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-img"></div>
      <div className="landing-intro">
        <h1 id="name">Keenan Ward</h1>
        <h2>~</h2>
        <h1>Full Stack Software Engineer</h1>
        <Link to="/home" id="intro-link">
          Enter Here
        </Link>
      </div>
    </div>
  );
}

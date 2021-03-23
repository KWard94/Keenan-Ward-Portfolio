import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-intro">
        <h1>Keenan Ward</h1>
        <h2>-</h2>
        <h1>Full Stack Software Engineer</h1>
      </div>
      <div className="intro-link">
        <Link to="/home">Enter Here</Link>
      </div>
    </div>
  );
}

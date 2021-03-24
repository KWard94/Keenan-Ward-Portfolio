import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <h1>NAVIGATION LINKS HERE</h1>
      <Link to="/home">Home</Link>
      <Link to="/about">About Me</Link>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <Link to="/home" id="link">
        Home
      </Link>
      <Link to="/about" id="link">
        About Me
      </Link>
      <Link to="/contact" id="link">
        Contact Me
      </Link>
    </div>
  );
}

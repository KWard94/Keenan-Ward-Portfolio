import React from "react";
import Header from "./Header";

export default function About() {
  return (
    // i would like to render the header on each page without needing to import it on every component, but i do not want to render the header on app.js because it will change my landing page
    <div className="about">
      <Header />

      <h1>ABOUT ME HERE</h1>
    </div>
  );
}

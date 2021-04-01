import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="header">
      <h1 className="header-name" id="my-name">
        Keenan Ward{" "}
      </h1>
      <h1 className="header-name"> ~ </h1>
      <h1 className="header-name"> Software Engineer</h1>
      <Navigation />
    </div>
  );
}

import React from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      <div className="home-text">
        <h1>Thank you for taking the time to visit my portfolio!</h1>
        <h4>
          This website hosts a breif description of who I am as a person and as
          a developer. I welcome the opportunity to share some of myself with
          you! Please contact me if you have any questions, or if I can help
          with any of your professional needs!
        </h4>
        <p id="site-info">
          This site is programmed in Javascript with the help of my favorite
          Front-End/UI library; React.js
        </p>
      </div>
    </div>
  );
}

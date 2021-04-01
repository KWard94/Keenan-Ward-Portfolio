import React from "react";
import Header from "./Header";

export default function About() {
  return (
    // i would like to render the header on each page without needing to import it on every component, but i do not want to render the header on app.js because it will change my landing page
    <div className="about">
      <Header />
      <div className="about-text">
        <h1>I Am:</h1>
        <p>
          A determined and driven full-stack software engineer based in Salt
          Lake City, UT. I strive to find efficient and effective solutions to
          the problems I encounter. I am fully capable as a member of a team or
          as an individual programmer, and more than competent in the world of
          software development. I thrive while breaking down a problem into
          achievable steps, and will push for excellence in each step of my
          programming to develop a product that is accessible and practical for
          as many users as possible.
        </p>
        <h1>About Me:</h1>
        <p>
          I have recently joined the field of software development and I enjoy
          every step of the process. Writing functional and elegent solutions to
          the issues that arise in development is a passion of mine, and I am
          hungry to continue to experience all that programming has to offer. ​
          My relatively short tenure as a developer is vastly overshadowed by my
          desire to learn and expand my abilities, as well as by the tenacity
          that I approach a difficult task. I look forward to helping you
          realize your software visions. ​{" "}
        </p>
        <h1>My Skills:</h1>
        <p>
          Skills: Full Stack development, JavaScript, React.js, Node.js, Python,
          SQL, HTML, CSS, Git, MongoDB, Mongoose, Express, Handlebars,
          PostgresDB, Django, Object Oriented Programming, Analytical Problem
          Solving, Interpersonal Communication, Effective Team Member,
          Leadership, Decision Making, Ability to Operate Under Pressure, Time
          Management, Proficient in Spanish
        </p>
      </div>
    </div>
  );
}

import React from "react";
import Header from "./Header";
import github_logo from "../images/GitHub-Mark-120px-plus.png";
import linkedIn_logo from "../images/LI-In-Bug.png";

export default function Contact() {
  return (
    <div className="contact">
      <Header />
      <div className="contact-info">
        <h1 id="contact-title">Get In Touch:</h1>
        <p>
          I am currently looking for a full time position as a Software
          Engineer. At this time I am also available for contract and freelance
          work. Please contact me if you have any professional needs for my
          skills in software development!
        </p>
        <h5 id="contact-tagline">I look forward to working with you!</h5>
        <p>
          I am based in Salt Lake City, Utah. I am also available for remote
          work!
        </p>
        <p>Email me: pcward.k@gmail.com</p>
        <div className="contact-links">
          <h6>
            Visit my Github{" "}
            <a
              href="https://github.com/KWard94"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github_logo} alt="Github Logo" id="link-img" />
            </a>
          </h6>
          <h6>
            Visit my LinkedIn{" "}
            <a
              href="https://www.linkedin.com/in/keenan-k-ward/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedIn_logo} alt="LinkedIn Logo" id="link-img" />
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

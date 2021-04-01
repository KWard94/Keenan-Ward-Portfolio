import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import gifter from "../images/gifter homepage.png";
import publicInformant from "../images/pub informant homepage.png";
import trivia from "../images/trivia modal.png";

export default function Projects() {
  return (
    <div className="projects">
      <Header />
      <h1>Professional Projects:</h1>
      <Card className="project-card" border="light" bg="dark" text="light">
        <Card.Img
          variant="top"
          alt="Gift Suggestion App Homepage"
          src={gifter}
        />
        <Card.Title>Gifter - The Gift Suggestion App</Card.Title>
        <Card.Body>
          This Full Stack app was created as a way to suggest gifts for someone
          in your life. It was programmed in Javascript using React for the
          front end and Express and MongoDB for the back end. The app is hosted
          on Heroku for both the server and the client side view.
        </Card.Body>
        <Card.Subtitle id="project-button">
          See the full code and more information on Github{" "}
          <a
            href="https://github.com/KWard94/gifter"
            rel="noreferrer"
            target="_blank"
          >
            <Button variant="outline-dark" size="sm" id="link-button">
              Here
            </Button>
          </a>
        </Card.Subtitle>
        <Card.Subtitle id="project-button">
          See the full code for the API and more information on Github{" "}
          <a
            href="https://github.com/KWard94/gifter_api"
            rel="noreferrer"
            target="_blank"
          >
            <Button variant="outline-dark" size="sm" id="link-button">
              Here
            </Button>
          </a>
        </Card.Subtitle>
      </Card>

      <Card className="project-card" border="light" bg="dark" text="light">
        <Card.Img
          variant="top"
          alt="Stock App Homepage"
          src={publicInformant}
        />
        <Card.Title>The Public Informant - A Stock Information App</Card.Title>
        <Card.Body>
          This app was created as a way to view succinct stock information from
          companies who are publicly traded on the New York Stock Exchange. It
          was programmed in Javascript using React for the front end. All of the
          stock data is served from a third party API. The app is hosted on
          Heroku.
        </Card.Body>
        <Card.Subtitle id="project-button">
          See the full code and more information on Github{" "}
          <a
            href="https://github.com/KWard94/Stock-Data-Display-App"
            rel="noreferrer"
            target="_blank"
          >
            <Button variant="outline-dark" size="sm" id="link-button">
              Here
            </Button>
          </a>
        </Card.Subtitle>
      </Card>

      <Card className="project-card" border="light" bg="dark" text="light">
        <Card.Img variant="top" alt="Stock App Homepage" src={trivia} />
        <Card.Title>Javascript Trivia Game</Card.Title>
        <Card.Body>
          This app was created as a Trivia game for Holiday movies. It is a fun
          and simple web app that includes an incrementing and decrementing
          score function, a scoreboard, an instructions modal, and a winning
          condition. It was programmed in vanilla Javascript. The app is hosted
          on Github Pages.
        </Card.Body>
        <Card.Subtitle id="project-button">
          See the full code and more information on Github{" "}
          <a
            href="https://github.com/KWard94/Trivia-Game"
            rel="noreferrer"
            target="_blank"
          >
            <Button variant="outline-dark" size="sm" id="link-button">
              Here
            </Button>
          </a>
        </Card.Subtitle>
      </Card>
    </div>
  );
}

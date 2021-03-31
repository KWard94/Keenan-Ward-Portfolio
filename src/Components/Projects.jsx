import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import gifter from "../images/gifter homepage.png";

export default function Projects() {
  return (
    <div className="projects">
      <Header />
      <h1>Please find a collection of my projects below:</h1>
      <Card className="project-card" border="dark" bg="secondary" text="light">
        <Card.Img
          variant="top"
          alt="Gift Suggestion App Homepage"
          src={gifter}
        />
        <Card.Title>Gifter - The Gift Suggestion App</Card.Title>
        <Card.Body>
          This full stack app was created as a way to suggest gifts for someone
          in your life. It was programmed in Javascript using React for the
          front end and Express and MongoDB for the back end. The app is hosted
          by Heroku for both the server and the client side view.
        </Card.Body>
        <Card.Subtitle id="project-button">
          See the full code for the app and more information{" "}
          <a
            href="https://github.com/KWard94/gifter"
            rel="noreferrer"
            target="_blank"
          >
            <Button variant="danger" size="sm">
              Here
            </Button>
          </a>
        </Card.Subtitle>
        <Card.Subtitle id="project-button">
          See the full code for the API and more information{" "}
          <a
            href="https://github.com/KWard94/gifter_api"
            rel="noreferrer"
            target="_blank"
          >
            <Button variant="danger" size="sm">
              Here
            </Button>
          </a>
        </Card.Subtitle>
      </Card>
    </div>
  );
}

import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./LandingPage.css";
import Button from "react-bootstrap/esm/Button";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title">
              Welcome to <br />
              NoteHub
            </h1>
            <p className="subtitle">One safe place for all your notes.</p>

            <div>
              <div className="buttonContainer">
                <a href="./login">
                  <Button size="lg" className="landingButton">
                    Login
                  </Button>
                </a>
                <a href="./register">
                  <Button
                    size="lg"
                    className="landingButton"
                    variant="outline-primary"
                  >
                    Register
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;

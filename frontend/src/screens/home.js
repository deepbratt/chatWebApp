import React, { Fragment } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { LoginForm, SignupForm } from "../components";
function Home() {
  return (
    <Fragment>
      <div
        style={{ alignContent: "center", flex: 1, justifyContent: "center" }}
      >
        <Jumbotron>
          <h1>Welcome to MangoChat</h1>
          <p>
            Chat seemlessly without any boudaries
          </p>
        </Jumbotron>
      </div>

      <Container padder={10} style={{ marginBottom: 10 }}>
        <Row>
          <Col sm={12} md={6}>
            <LoginForm />
          </Col>

          <Col md={6} sm={12}>
            <SignupForm />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Home;

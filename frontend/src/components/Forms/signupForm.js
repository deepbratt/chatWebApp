import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Container, Form, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import allActions from "../../actions";
import { API_URL } from "../../utils/gen.utils";
function SignupForm() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setLoader(true);
    await axios
      .post(`${API_URL}/users/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((res) => {
        setLoader(false);
        dispatch(allActions.userActions.Login(res.data));
      });
  };
  return (
    <Container padder={10}>
      <Card>
        <Card.Header>Signup</Card.Header>
        {loader ? (
          <Card.Body>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Card.Body>
        ) : (
          <Card.Body>
            <Form onSubmitCapture={(e) => submitForm(e)} key="signupForm">
              <Form.Group controlId="firstName">
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  defaultValue={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  defaultValue={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="semail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="spassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Signup
              </Button>
            </Form>
          </Card.Body>
        )}
      </Card>
    </Container>
  );
}

export default SignupForm;

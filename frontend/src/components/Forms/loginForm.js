import axios from "axios";
import React, { useState } from "react"; 
import { Alert, Button, Card, Container, Form, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import allActions from "../../actions";
import { API_URL } from "../../utils/gen.utils";
function LoginForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setLoader(true);
    await axios
      .post(`${API_URL}/users/login`, { email: email, password: password })
      .then((res) => {
        if (res.data !== "invalid") {
          setLoader(false);
          dispatch(allActions.userActions.Login(res.data));
        } else {
          setError("invalid credentials");
          setLoader(false);
        }
      });
  };
  return (
    <Container padder={10}>
      <Card>
        <Card.Header>Login</Card.Header>
        {loader ? (
          <Card.Body>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Card.Body>
        ) : (
          <Card.Body>
            {error != null && error !== undefined ? (
              <Alert key={1} variant="danger">
                {error}
              </Alert>
            ) : (
              <></>
            )}
            <Form onSubmitCapture={(e) => submitForm(e)} key="loginForm">
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
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
                Login
              </Button>
            </Form>
          </Card.Body>
        )}
      </Card>
    </Container>
  );
}

export default LoginForm;

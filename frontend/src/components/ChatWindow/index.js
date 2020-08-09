import React from "react";
import { Button, Card, Form, FormControl, ListGroup } from "react-bootstrap";
import { BsCheck, BsCheckAll } from "react-icons/bs";
const ChatWindow = (props) => {
  console.log(props.selectedChat);
  return (
    <Card>
      {props.selectedChat === null ? (
        <>
          <Card.Header>No Chat selected</Card.Header>
          <Card.Body>
            <Card.Title>Select a user to start chat</Card.Title>
            <Card.Text>
              You will get the same chat feeling like whatsapp even more
              lightweight.
            </Card.Text>
          </Card.Body>
        </>
      ) : (
        <>
          <Card.Header>
            {props.selectedChat.firstName} {props.selectedChat.lastName}
          </Card.Header>
          <ListGroup style={{ minHeight: 634 }}>
            <ListGroup.Item style={{ textAlign: "left" }}>
              No style
              <div style={{ float: "right" }}>
                1 hr ago <BsCheckAll color={"green"} /> <BsCheck />
              </div>
            </ListGroup.Item>

            <ListGroup.Item variant="success" style={{ textAlign: "left" }}>
              Primary
              <div style={{ float: "right" }}>
                1 hr ago <BsCheckAll color={"green"} /> <BsCheck />
              </div>
            </ListGroup.Item>
          </ListGroup>

          <Card.Footer>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Enter your message.."
                className="col-md-10"
              />
              <div className="col-md-2">
                <Button variant="outline-success"> Submit </Button>
              </div>
            </Form>
          </Card.Footer>
        </>
      )}
    </Card>
  );
};
export default ChatWindow;

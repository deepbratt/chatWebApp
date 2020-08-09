import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import io from "socket.io-client";
import { ChatWindow, LeftSidebar } from "./../components";
const socket = io("http://localhost:4000/api/");
const Timeline = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const [response, setResponse] = useState("");

  useEffect(() => {
    socket.on("messages", (data) => {
      setResponse(data);
    });
  }, []);

  console.log("mesg res:", response);
  return (
    <Container
      fluid
      style={{
        marginTop: 10,
        marginBottom: 10,
        height: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <Row>
        <Col md={4}>
          <LeftSidebar setSelectedChat={setSelectedChat} />
        </Col>

        <Col md={8}>
          <ChatWindow selectedChat={selectedChat} />
        </Col>
      </Row>
    </Container>
  );
};
export default Timeline;

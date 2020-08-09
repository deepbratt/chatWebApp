import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ChatWindow, LeftSidebar } from "./../components";
const Timeline = () => {
  const [selectedChat, setSelectedChat] = useState(null);
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

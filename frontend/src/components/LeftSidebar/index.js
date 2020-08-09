import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../actions";
import { API_URL } from "../../utils/gen.utils";
const LeftSidebar = (props) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState(null);
  const [loader, setLoader] = useState(false);
  const reduxStateChange = useSelector((state) => state);
  const user = reduxStateChange.userReducer.user;
  const logout = async () => {
    await dispatch(allActions.userActions.Logout());
  };

  useEffect(() => {
    setLoader(true);
    axios.get(`${API_URL}/users`).then((res) => {
      setUsers(res.data);
      setLoader(false);
    });
  }, []);

  const selectChat = (selecteduser) => {
    props.setSelectedChat(selecteduser);
  };
  return (
    <Card>
      <Card.Body style={{ background: "#fafafa" }}>
        <h5>Currently Loggedin As</h5>
        <Card.Title>
          {user.firstName} {user.lastName}
        </Card.Title>
        <Card.Text>{user.email}</Card.Text>
      </Card.Body>
      {loader ? (
        <ListGroup
          className="list-group-flush"
          style={{ minHeight: 550, maxHeight: 550, overflow: "scroll" }}
        >
          <ListGroupItem>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </ListGroupItem>
        </ListGroup>
      ) : (
        <ListGroup
          className="list-group-flush"
          style={{ minHeight: 550, maxHeight: 550, overflow: "scroll" }}
        >
          {users !== null &&
            users
              .filter((data) => data.email !== user.email)
              .map((data, index) => {
                return (
                  <ListGroupItem
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => selectChat(data)}
                  >
                    {data.firstName} {data.lastName}
                  </ListGroupItem>
                );
              })}
        </ListGroup>
      )}

      <Card.Body
        style={{ background: "#fafafa", cursor: "pointer" }}
        onClick={logout}
      >
        <Card.Link>Logout</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default LeftSidebar;

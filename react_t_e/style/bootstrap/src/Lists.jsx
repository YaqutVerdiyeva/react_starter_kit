import ListGroup from "react-bootstrap/ListGroup";

import React from "react";
import { Badge } from "react-bootstrap";

const Lists = () => {
  return (
    <div>
      <ListGroup numbered variant="flush">
        <ListGroup.Item>
          Cras justo odio{" "}
          <Badge bg="danger" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item disabled>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item active>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item variant="info">Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Lists;

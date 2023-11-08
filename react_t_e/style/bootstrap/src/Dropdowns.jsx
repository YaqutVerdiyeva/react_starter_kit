import Dropdown from "react-bootstrap/Dropdown";

import React from "react";

const Dropdowns = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu className="super-colors">
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Dropdowns;

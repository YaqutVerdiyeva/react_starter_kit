import Spinner from "react-bootstrap/Spinner";

import React from "react";

const Spinners = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        justifyContent: "center",
      }}
    >
      <Spinner
        style={{ height: "100px", width: "100px" }}
        animation="border"
        variant="danger"
      />
      <br />
      <Spinner
        style={{ height: "150px", width: "150px" }}
        animation="grow"
        variant="danger"
      />
    </div>
  );
};

export default Spinners;

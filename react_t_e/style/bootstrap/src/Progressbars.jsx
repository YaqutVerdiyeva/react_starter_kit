import ProgressBar from "react-bootstrap/ProgressBar";

import React from "react";

const Progressbars = () => {
  const now = 60;
  return (
    <div>
      <ProgressBar now={now} label={`${now}%`} visuallyHidden />{" "}
    </div>
  );
};

export default Progressbars;

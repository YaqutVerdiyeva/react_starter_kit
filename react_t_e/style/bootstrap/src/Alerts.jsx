import React from "react";
import Alert from "react-bootstrap/Alert";

const Alerts = () => {
  return (
    <div>
      {["danger", "info", "dark"].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check
          <Alert.Link href="#"> link</Alert.Link>. Give it a click if
          it out!
        </Alert>
      ))}


      <hr />



      <Alert variant="success" dismissible>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
    </div>
  );
};

export default Alerts;

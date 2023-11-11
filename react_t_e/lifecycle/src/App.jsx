import { useState } from "react";
import Test from "./Test";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(show => !show)}>
        {show ? "gizle" : "goster"}
      </button>
      {show && <Test />}
    </>
  );
}

export default App;

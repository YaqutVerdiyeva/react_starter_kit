import { useState } from "react";
import Test from "./Test";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(show => !show)}>
        {show ? "Gizle" : "Goster"}
      </button>
      {show && <Test />}
    </>
  );
}

export default App;

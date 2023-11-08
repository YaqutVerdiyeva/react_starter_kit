import { useEffect } from "react";
import styles from "./App.module.css";
import Components from "./Components";
function App() {
  useEffect(() => {
    console.log(styles);
  }, []);
  return (
    <div className={styles.App}>
      <h1>First page</h1>
      <Components className="App" />
    </div>
  );
}

export default App;

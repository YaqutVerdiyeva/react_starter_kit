import logo from "./logo.svg";
import { useEffect } from "react";
import Test from "./Test";
import styles from "./App.module.css";
import { Title } from "./Components";
import Bootstrap from "./Bootstrap";
import "./tailwind.css";
import Tailwind from "./Tailwind";
function App() {
  useEffect(() => {
    console.log(styles);
  }, []);
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <p>{process.env.REACT_APP_API_URL}</p>
      <Test className="App" />
      {process.env.NODE_ENV === "production" && (
        <>
          <img src="/logo192.png" />
          <img src={logo} />
        </>
      )}
      <Bootstrap />
      <Tailwind />
    </div>
  );
}

export default App;

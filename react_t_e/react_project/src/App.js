import "./tailwind.css";
import { createElement, Fragment, useState } from "react";
import Button from "./components/Button";
import Tab from "./components/Tab";
function Profile(){
  return(
    <div>
      Burasi Profile tabi
    </div>
  )
}
function App() {
  const todos = ["todo1", "todo2", "todo3"];
  const [activeTab, setActiveTab] = useState(1);
  // const name = "Yaqut";
  // const h1 = createElement("h1", null, "react.js");
  // const ul = createElement(
  //   "ul",
  //   null,
  //   todos.map((todo) => createElement("li", null, todo))
  // );
  // const button = createElement(
  //   Button,
  //   {
  //     text: "Button texti",
  //   },
  //   null
  // );
  // return createElement(
  //   "main",
  //   {
  //     className: "test",
  //     id: "main",
  //   },
  //   h1,
  //   ul,
  //   button
  // );
  const searchFunction = () => {
    alert("hello!");
  };
  return (
    <Fragment>
      <div style={{ padding: 20 }}>
        <button onClick={() => setActiveTab(2)}>Aktif tabi degistir</button>
        <Tab
          activeTab={activeTab}
          onChange={(tabIndex) => setActiveTab(tabIndex)}
          setActiveTab={setActiveTab}
        >
          <Tab.Panel title="Profil"><Profile/></Tab.Panel>
          <Tab.Panel title="Hakkinda">2. tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
        </Tab>
        {activeTab === 2 && <div>burasi da ekstra bir alan!</div>}
      </div>
      <div style={{ padding: 20 }}>
        <Button>Example</Button>
        <Button variant="success">Example</Button>
        <Button variant="danger">Example</Button>
        <Button variant="warning">Example</Button>
      </div>
      <h1 tabIndex="3" style={{ color: "red", backgroundColor: "yellow" }}>
        Hello World!
      </h1>
      <label htmlFor="search" tabIndex="2" onClick={searchFunction}>
        Arama
      </label>
      <input type="text" id="search" tabIndex="1" />

      <ul>
        {todos.map(function (todo, index) {
          return <li key={index}> {todo}</li>;
        })}
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;

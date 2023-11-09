import "./style.scss";
import { createElement, Fragment } from "react";
function Button(props) {
  return <button>{props.text}</button>;
}

function App() {
  const todos = ["todo1", "todo2", "todo3"];
  const name = "Yaqut";
  const h1 = createElement("h1", null, "react.js");
  const ul = createElement(
    "ul",
    null,
    todos.map((todo) => createElement("li", null, todo))
  );
  const button = createElement(
    Button,
    {
      text: "Button texti",
    },
    null
  );
  return createElement(
    "main",
    {
      className: "test",
      id: "main",
    },
    h1,
    ul,
    button
  );
  const searchFunction = () => {
    alert("hello!");
  };
  return (
    <Fragment>
      <Button text="hello button" />
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

import "./style.scss";
import { createElement } from "react";
// const Button = (props) => {
//   return <button>{props.text}</button>;
// };
function App() {
  // const todos = ["todo1", "todo2", "todo3"];
  // const p = createElement("p", null, "practice createElement");
  // const ul = createElement(
  //   "ul",
  //   null,
  //   todos.map((todo) => <li>{todo}</li>)
  // );
  // const button = createElement(Button, { text: "Click" }, null);
  // return createElement(
  //   "h2",
  //   {
  //     className: "test",
  //     id: "25",
  //   },
  //   p,
  //   button,
  //   ul
  // );
  const links = ["Home", "About", "Products", "Contact", "Projects"];
  const ul = createElement(
    "ul",
    { className: "links" },
    links.map((link) => <li className="link">{link}</li>)
  );
  return createElement(
    "nav",
    {
      className: "navbar",
      id: "nav",
    },
    ul
  );
  return (
    <div className="content">
      <h1 className="text">
        <span>Hello world!</span>
      </h1>
    </div>
  );
}

export default App;

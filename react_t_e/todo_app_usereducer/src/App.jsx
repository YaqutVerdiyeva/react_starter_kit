import { useReducer } from "react";
import reducer from "./store/reducer";
function App() {
  const [state, dispatch] = useReducer(reducer, {
    todo: "",
    todos: [],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      todo: state.todo,
      type: "ADD_VALUE",
    });
  };
  const onChange = (e) => {
    dispatch({
      value: e.target.value,
      type: "SET_VALUE",
    });
  };
  return (
    <>
      <h1>React</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.todo} onChange={onChange} />
        <button disabled={!state.todo}>Add</button>
      </form>
      <hr />
      <ul>
        {state.todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

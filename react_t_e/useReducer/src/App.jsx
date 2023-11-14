import { useReducer, useState } from "react";
import todoReducer from "./reducers/todoReducer";
function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: "",
  });

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
  };
  const onChange = (e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  };
  return (
    <>
      <h1>React</h1>
      <form onSubmit={submitHandle}>
        <input type="text" value={state.todo} onChange={onChange} />
        <button disabled={!state.todo} type="submit">
          Add
        </button>
      </form>
      <ul>
        {state.todos.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

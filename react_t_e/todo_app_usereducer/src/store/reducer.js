function reducer(state, action) {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_VALUE":
      return {
        ...state,
        todos: [...state.todos, action.todo],
        todo: "",
      };
  }
}

export default reducer;

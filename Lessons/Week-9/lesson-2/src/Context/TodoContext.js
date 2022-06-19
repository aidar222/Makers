import axios from "axios";
import React, { createContext, useReducer } from "react";

export const TodoContext = createContext();

const INIT_STATE = {
  todos: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getTodos = async () => {
    const { data } = await axios("http://localhost:8000/todos");
    dispatch({
      type: "GET_TODOS",
      payload: data,
    });
  };

  const addTask = async (newTask) => {
    await axios.post("http://localhost:8000/todos", newTask);
    getTodos();
  };

  const changeStatus = async (id) => {
    let { data } = await axios.patch(`http://localhost:8000/todos/${id}`);
    await axios.patch(`http://localhost:8000/todos/${id}`, {
      status: !data.status,
    });
    getTodos();
  };

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTask, getTodos, changeStatus }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

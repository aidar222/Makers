import React from "react";
import AddTodo from "../AddTODO/AddTodo";
import TodoList from "../TODOList/TodoList";

const HomePage = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default HomePage;

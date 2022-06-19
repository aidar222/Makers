import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { TodoContext } from "../../Context/TodoContext";

const TodoList = () => {
  const { todos, getTodos, changeStatus } = useContext(TodoContext);
  console.log(todos);

  useEffect(() => {
    getTodos();
  }, []);

  //   useEffect(() => {
  //     getTodos();
  //   }, [todos]);

  return (
    <div>
      {todos.map((item) => (
        <Card border="primary" style={{ width: "18rem" }} key={item.id}>
          <Card.Header>
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => changeStatus(item.id)}
            />
            <span className={item.status ? "completed" : ""}>{item.task}</span>
          </Card.Header>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;

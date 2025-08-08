import { useEffect, useState } from "react";
import getTodos from "./getTodos.js";
import Todo from "./Todo.jsx";
import TodoInsert from "./TodoInsert.jsx";

const TodoContainer = () => {

  const [todos, setTodos] = useState([]);
  const [handlerTodos, setHandlerTodos] = useState(false);

  useEffect(() => {
    getTodos("http://localhost:4000/todo")
      .then(setTodos)
      .catch(console.error);
  },[handlerTodos])

  const props = {
    handlerTodos:{handlerTodos},
    setHandlerTodos:{setHandlerTodos}
  }

  const todoList = todos.map((todo,i) => <Todo key={i} todo={todo} {...props}/>)

  return (
    <div>
      <TodoInsert todos={todos} {...props}/>
      <ul>
        {todoList}
      </ul>
    </div>
  );
};

export default TodoContainer;
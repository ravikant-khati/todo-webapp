import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  // const handleEdit = ({ id }) => {
  //   const findTodo = todos.find((todo) => todo.id === id);

  //   setEditTodo(findTodo);
  // };
  const handleEdit = (todo) => {
    setEditTodo(todo);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed && "complete"}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete"
              onClick={() => handleComplete(todo)}
            >
              <i>CP</i>
            </button>
            <button className="button-edit" onClick={() => handleEdit(todo)}>
              <i>ED</i>
            </button>
            <button
              className="button-delete"
              onClick={() => handleDelete(todo)}
            >
              <i>De</i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;

// react me map method use karte hai tab is method ke sath { } bracket ka use nhi karte hai yaad rakhna

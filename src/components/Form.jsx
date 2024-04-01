import React, { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const onInputChnage = (e) => {
    setInput(e.target.value);
  };
  const updateTodo = (title, id, completed) => {
    console.log(title, id, completed);
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidV4(), title: input, completed: false }]);

      setInput(" ");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="enter a todo here.."
        className="task-input"
        value={input}
        required
        onChange={onInputChnage}
      />
      <button className="button-add" type="submit">
        {editTodo ? "ok" : "add"}
      </button>
    </form>
  );
};

export default Form;

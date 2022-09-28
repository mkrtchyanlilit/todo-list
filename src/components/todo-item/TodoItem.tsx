import React, { useState } from "react";
import "./style.scss";
interface ITodoItem {
  todo: Todo;
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
}
const TodoItem = ({ todo, toggleComplete, deleteTodo }: ITodoItem) => {
  const [todoEditing, setTodoEditing] = useState(0);
  const [inputText, setInputText] = useState(todo.text);

  const onEdit = (id: any) => {
    if (todo.id === id) {
      todo.text = inputText;
      setTodoEditing(0);
      setInputText(todo.text);
    }
  };

  return (
    <div className="todo-item">
      <label htmlFor="">
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
          name={todo.text}
        />
        {todoEditing === todo.id ? (
          <input
            className="update-input"
            type="text"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            value={inputText}
          />
        ) : (
          <div
            style={{ textDecoration: todo.complete ? "line-through" : "none" }}
          >
            {todo.text}
          </div>
        )}

        <div>
          {todoEditing === todo.id ? (
            <span onClick={() => onEdit(todo.id)}>Submit</span>
          ) : (
            <span onClick={() => setTodoEditing(todo.id)}>Edit</span>
          )}
          /
          <span
            onClick={() => {
              deleteTodo(todo);
            }}
          >
            X
          </span>
        </div>
      </label>
    </div>
  );
};

export default TodoItem;

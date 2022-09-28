import React, { useState } from "react";
import "./style.scss";
interface ITodoForm {
  addTodo: AddTodo;
  toggleComplete: ToggleComplete;
}

const TodoForm = ({ addTodo, toggleComplete }: ITodoForm) => {
  const [text, setText] = useState("");

  const handleTextLength = (e: any) => {
    if (e.target.value.length === 100) {
      window.alert("Todo text shouldn't exceed 100 characters");
    }
    setText(e.target.value);
  };

  return (
    <div className="todo-form">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setText("");
          addTodo(text);
        }}
      >
        <input
          className="add-input"
          type="text"
          value={text}
          onChange={handleTextLength}
          // style={{ borderColor: setText("") ? "red" : "none" }}
        />
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;

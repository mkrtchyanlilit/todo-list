import React, { useState } from "react";
import "./style.scss";
import TodoItem from "../todo-item/TodoItem";
interface ITodoList {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
}
const TodoList = ({ todos, deleteTodo, toggleComplete }: ITodoList) => {

  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;

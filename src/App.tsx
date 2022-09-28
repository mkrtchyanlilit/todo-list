import React, { useEffect, useState } from "react";
import "./App.scss";
import TodoForm from "./components/todo-form/TodoForm";
import TodoList from "./components/todo-list/TodoList";


const getLocalItems = () => {
    const temp = localStorage.getItem("lists");
  if (temp) {
    return JSON.parse(temp);
  } else {
    return []
  }
}
function App() {
  const [todos, setTodos] = useState<Array<Todo>>(getLocalItems());
//   window.onload = function() {
//     const initialItems = [...todos]

//     for (let i = 0; i < localStorage.length; i++) {
//         initialItems.push(JSON.parse(localStorage.getItem("todos") || ""));
//     }

//     setTodos(todos);
// };

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([
        ...todos,
        { id: Math.random(), text: newTodo, complete: false },
      ]);

      // const storageNewItems = JSON.stringify(newTodo);
    // const temp = JSON.stringify(newTodo);
    // localStorage.setItem("todos", temp);
        // localStorage.setItem(todos.id, storageNewItems);
    }
  };

  const toggleComplete: ToggleComplete = (selectedComplete) => {
    const newTodo = todos.map((todo) => {
      if (todo === selectedComplete) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  const handleSelectAll = (e: any) => {
    const { name, checked } = e.target;
    if (name === "SelectAll") {
      let temp = todos.map((todo) => {
        return { ...todo, complete: checked };
      });
      setTodos(temp);
    } else {
      let temp = todos.map((todo) =>
        todo.text === name ? { ...todo, complete: checked } : todo
      );
      setTodos(temp);
    }
  };


  // useEffect(() => {
  //   const temp = localStorage.getItem("todos") || "";
  //   const loadedTodos = JSON.parse(temp);

  //   if (loadedTodos) {
  //     setTodos(loadedTodos);
  //   }
  // }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("lists", temp);
  }, [todos]);



  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="todo">
        <TodoForm addTodo={addTodo} toggleComplete={toggleComplete} />
        <form className="select-form">
        <input
          className="checkbox"
          type="checkbox"
          onChange={handleSelectAll}
          name="SelectAll"
          checked={todos.filter((todo) => todo?.complete !== true).length < 1}
        />
          <label htmlFor="SelectAll">Select All</label>
        </form>
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={(todo) => {
            setTodos(todos.filter((t) => t.id !== todo.id));
          }}
        />
      </div>
    </div>
  );
}

export default App;

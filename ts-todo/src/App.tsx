import "./App.css";
import "./components/style.css";
import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

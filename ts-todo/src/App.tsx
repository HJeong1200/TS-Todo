import "./App.css";
import "./components/style.css";
import React from "react";
import InputField from "./components/InputField";

function App() {
  return (
    <div className="App">
      <span className="heading">Taskify</span>

      <InputField />
    </div>
  );
}

export default App;

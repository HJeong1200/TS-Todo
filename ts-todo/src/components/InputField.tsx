import { useState } from "react";
import { Todo } from "./model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function InputField({ todos, setTodos }: Props) {
  const [content, setContent] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    const todo: Todo = {
      id: Number(new Date()),
      content,
      isDone: false,
    };

    setTodos([...todos, todo]);
  };

  return (
    <form className="input" onSubmit={handleAddTodo}>
      <input
        type="input"
        placeholder="Enter a task"
        className="input__box"
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="input__submit">Go</button>
    </form>
  );
}

export default InputField;

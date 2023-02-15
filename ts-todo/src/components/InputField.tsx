import { useRef, useState } from "react";
import { Props, Todo } from "./model";

function InputField({ todos, setTodos }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (!content) return;

    const todo: Todo = {
      id: Date.now(),
      content,
      isDone: false,
    };

    setTodos([...todos, todo]);
    setContent(() => "");
    inputRef.current?.blur();
  };

  return (
    <form className="input" onSubmit={handleAddTodo}>
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="input__submit">Go</button>
    </form>
  );
}

export default InputField;

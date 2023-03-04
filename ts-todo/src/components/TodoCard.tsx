import { useEffect, useRef, useState } from "react";
import { Props, Todo } from "./model";

interface CardProps extends Props {
  todo: Todo;
}

const TodoCard = ({ todo, todos, setTodos }: CardProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editContent, setEditContent] = useState<string>(todo.content);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, content: editContent } : todo
      )
    );

    setEdit(!edit);
  };

  return (
    <form className="todo__card" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
      ) : (
        <span className={`todo__card--text ${todo.isDone ? "done" : ""}`}>
          {todo.content}
        </span>
      )}
      <div className="todo__card--icons">
        <span className="icon" onClick={() => setEdit(!edit)}>
          🖊
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          ❌
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          ✅
        </span>
      </div>
    </form>
  );
};

export default TodoCard;

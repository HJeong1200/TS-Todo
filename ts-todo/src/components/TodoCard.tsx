import { Props, Todo } from "./model";

interface CardProps extends Props {
  todo: Todo;
}

const TodoCard = ({ todo, todos, setTodos }: CardProps) => {
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

  return (
    <form className="todo__card">
      <span className={`todo__card--text ${todo.isDone ? "done" : ""}`}>
        {todo.content}
      </span>
      <div className="todo__card--icons">
        <span className="icon">🖊</span>
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

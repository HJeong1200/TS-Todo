import { Props, Todo } from "./model";

interface CardProps extends Props {
  todo: Todo;
}

const TodoCard = ({ todo, todos, setTodos }: CardProps) => {
  const { content, isDone } = todo;

  return (
    <form className="todo__card">
      <span className="todo__card--text">{content}</span>
      <div className="todo__card--icons">
        <span className="icon">🖊</span>
        <span className="icon">❌</span>
        <span className="icon">✅</span>
      </div>
    </form>
  );
};

export default TodoCard;

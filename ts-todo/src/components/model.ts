export interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}

export interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

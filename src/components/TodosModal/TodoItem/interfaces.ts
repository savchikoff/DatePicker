import { Todo } from "../TodoList/interfaces";

export interface TodoItemProps {
    todo: Todo;
    deleteTodo: (index: number) => void;
    toggleCompletion: (index: number) => void;
}
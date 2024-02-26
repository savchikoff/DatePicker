import React from 'react';
import { TodoListItem, TodoCheckbox, TodoText, DeleteButton } from './styled';
import { TodoItemProps } from './interfaces';
import withTheme from '@/decorators/withTheme';

function TodoItem({ todo, deleteTodo, toggleCompletion }: TodoItemProps) {

    const handleComplete = (index: number) => () => {
        toggleCompletion(index);
    }

    const handleDelete = (index: number) => () => {
        deleteTodo(index);
    }

    return (
        <TodoListItem key={todo.id}>
            <TodoCheckbox
                type="checkbox"
                checked={todo.completed}
                onChange={handleComplete(todo.id)}
            />
            <TodoText $isCompleted={todo.completed}>
                {todo.text}
            </TodoText>
            <DeleteButton onClick={handleDelete(todo.id)} type="button">Delete</DeleteButton>
        </TodoListItem>
    )
}

export default withTheme(TodoItem);
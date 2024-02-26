import React from 'react';

import withTheme from '@/decorators/withTheme';

import { TodoItemProps } from './interfaces';
import { DeleteButton,TodoCheckbox, TodoListItem, TodoText } from './styled';

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
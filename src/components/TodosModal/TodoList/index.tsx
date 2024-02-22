import React, { ChangeEvent,useEffect, useState } from 'react';

import withTheme from '@/decorators/withTheme';
import { readFromCache, writeToCache } from '@/helpers/cache';

import { Todo,TodoListProps } from './interfaces';
import { AddTodoButton, DeleteButton, ListOfTodos, TodoAddField, TodoCheckbox, TodoInput, TodoItem, TodosContainer, TodosHeader, TodoText } from './styled';

function TodoList({ selectedDate }: TodoListProps) {
    const [todos, setTodos] = useState<Todo[]>(() => readFromCache(selectedDate?.toLocaleDateString()) || []);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        writeToCache(selectedDate?.toLocaleDateString(), todos);
    }, [todos]);

    const handleNewTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value);

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const deleteTodo = (index: number) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const toggleCompletion = (index: number) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    return (
        <TodosContainer>
            <TodosHeader>Todo List for {selectedDate?.toLocaleDateString()}</TodosHeader>
            <TodoAddField>
                <TodoInput
                    type="text"
                    value={newTodo}
                    onChange={handleNewTodoInputChange}
                />
                <AddTodoButton onClick={addTodo}>Add Todo</AddTodoButton>
            </TodoAddField>
            <ListOfTodos>
                {todos.map((todo, index) => (
                    <TodoItem key={index}>
                        <TodoCheckbox
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleCompletion(index)}
                        />
                        <TodoText isCompleted={todo.completed}>
                            {todo.text}
                        </TodoText>
                        <DeleteButton onClick={() => deleteTodo(index)} type="button">Delete</DeleteButton>
                    </TodoItem>
                ))}
            </ListOfTodos>
        </TodosContainer>
    );
}

export default withTheme(TodoList);

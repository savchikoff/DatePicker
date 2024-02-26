import React, { ChangeEvent, useEffect, useState } from 'react';

import TodoItem from '../TodoItem';

import withTheme from '@/decorators/withTheme';
import { readFromCache, writeToCache } from '@/helpers/cache';

import { Todo, TodoListProps } from './interfaces';
import { AddTodoButton, ListOfTodos, TodoAddField, TodoInput, TodosContainer, TodosHeader } from './styled';

function TodoList({ selectedDate }: TodoListProps) {
    const [todos, setTodos] = useState<Todo[]>(() => readFromCache(selectedDate?.toLocaleDateString()) || []);
    const [newTodo, setNewTodo] = useState('');
    const [idCounter, setIdCounter] = useState(0);

    useEffect(() => {
        writeToCache(selectedDate?.toLocaleDateString(), todos);
    }, [todos]);

    const handleNewTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value);

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            const newTodoItem: Todo = { id: idCounter, text: newTodo, completed: false };
            setIdCounter(idCounter + 1);
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
        }
    };

    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const toggleCompletion = (id: number) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
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
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={() => deleteTodo(todo.id)}
                        toggleCompletion={() => toggleCompletion(todo.id)}
                    />
                ))}
            </ListOfTodos>
        </TodosContainer>
    );
}

export default withTheme(TodoList);

import React, { useEffect, useState } from 'react';
import { TodosContainer, TodosHeader, TodoItem, TodoInput, ListOfTodos, TodoAddField, AddTodoButton, TodoCheckbox, TodoText, DeleteButton } from './styled';
import { TodoListProps } from './types';
import { readFromCache, writeToCache } from '../../../helpers/cache';

function TodoList({ selectedDate }: TodoListProps) {
    const [todos, setTodos] = useState(() => {
        return readFromCache(selectedDate?.toLocaleDateString());
    });
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        writeToCache(selectedDate?.toLocaleDateString(), todos);
    }, [todos]);

    const handleNewTodoInputChange = (e) => setNewTodo(e.target.value);

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const toggleCompletion = (index) => {
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

export default TodoList;

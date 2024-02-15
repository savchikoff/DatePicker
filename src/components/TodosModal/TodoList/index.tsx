import React, { useState } from 'react';
import { TodosContainer, TodosHeader, TodoItem, TodoInput, ListOfTodos, TodoAddField, AddTodoButton, TodoCheckbox, TodoText } from './styled';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

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
            <TodosHeader>Todo List for the day</TodosHeader>
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
                        <button onClick={() => deleteTodo(index)} type="button">Delete</button>
                    </TodoItem>
                ))}
            </ListOfTodos>
        </TodosContainer>
    );
}

export default TodoList;

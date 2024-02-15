import styled from 'styled-components';

export const TodosContainer = styled.div``;

export const TodoInput = styled.input``

export const TodoItem = styled.li`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const AddTodoButton = styled.button``;

export const TodosHeader = styled.h2`

`;

export const TodoAddField = styled.div``

export const ListOfTodos = styled.ul`
    padding: 0;
    list-style: none;
`

export const TodoCheckbox = styled.input``

export const TodoText = styled.span<{ isCompleted: boolean }>`
    text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
`
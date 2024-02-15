import styled from 'styled-components';

export const TodosContainer = styled.div``;

export const TodoInput = styled.input``

export const TodoItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`

export const AddTodoButton = styled.button`
    color: #FFFFFF;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background-color: #2F80ED;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: #5A9EFA;
    }
`;

export const TodosHeader = styled.h2`

`;

export const TodoAddField = styled.div`
    display: flex;
    gap: 8px;
`

export const ListOfTodos = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
    list-style: none;
`

export const TodoCheckbox = styled.input``

export const TodoText = styled.span<{ isCompleted: boolean }>`
    width: 100%;
    text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
    word-break: break-word;
`

export const DeleteButton = styled.button`
    color: #FFFFFF;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background-color: #FD1E1E;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: #FF4444;
    }
`;
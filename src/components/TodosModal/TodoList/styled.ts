import styled from 'styled-components';

const s8 = ({ theme }) => theme.sizes.s8;
const s16 = ({ theme }) => theme.sizes.s16;
const white = ({ theme }) => theme.colors.white;
const red = ({ theme }) => theme.colors.red;
const azure = ({ theme }) => theme.colors.azure;

export const TodosContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const TodoInput = styled.input``

export const TodoItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${s8};
`

export const AddTodoButton = styled.button`
    color: ${white};
    padding: ${s8} ${s16};
    border-radius: ${s8};
    border: none;
    background-color: ${azure};
    transition: background-color 0.3s ease;

    &:hover{
        opacity: 0.9;
    }
`;

export const TodosHeader = styled.h2`

`;

export const TodoAddField = styled.div`
    display: flex;
    gap: ${s8};
`

export const ListOfTodos = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${s8};
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
    color: ${white};
    padding: ${s8} ${s16};
    border-radius: ${s8};
    border: none;
    background-color: ${red};
    transition: background-color 0.3s ease;

    &:hover{
        opacity: 0.9;
    }
`;
import styled from "styled-components";

const s8 = ({ theme }) => theme.sizes.s8;
const s16 = ({ theme }) => theme.sizes.s16;
const white = ({ theme }) => theme.colors.white;
const red = ({ theme }) => theme.colors.red;

export const TodoListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${s8};
`;

export const TodoCheckbox = styled.input``;

export const TodoText = styled.span<{ $isCompleted: boolean }>`
    width: 100%;
    text-decoration: ${({ $isCompleted }) => ($isCompleted ? 'line-through' : 'none')};
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
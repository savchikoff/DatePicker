import styled from "styled-components";

export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const DateSelectorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    padding: 14px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #AAAAAA;
`

export const DateSelectorLabel = styled.label`
    font-family: inherit;
    font-size: 15;
    font-weight: 600;
`

export const DateSelectorInputWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

export const DateSelectorInput = styled.input<{ isValid: boolean }>`
    width: 172px;
    height: 20px;
    font-size: 15px;
    border: none;
    outline: none;
    color: ${(props) => (props.isValid ? 'inherit' : '#FB3A3A')};
`;



export const ClearInputButton = styled.div`
`
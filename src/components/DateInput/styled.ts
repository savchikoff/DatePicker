import styled from "styled-components";

const s1 = ({ theme }) => theme.sizes.s1;
const s8 = ({ theme }) => theme.sizes.s8;
const s20 = ({ theme }) => theme.sizes.s20;
const darkGrey = ({ theme }) => theme.colors.darkGrey;
const coralRed = ({ theme }) => theme.colors.coralRed;
const semiBold = ({ theme }) => theme.fontWeights.semiBold;

export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: ${s8};
`

export const DateSelectorContainer = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    padding: 14px;
    box-sizing: border-box;
    border-radius: ${s8};
    border: ${s1} solid ${darkGrey};
`

export const DateSelectorLabel = styled.label`
    font-family: inherit;
    font-size: 15px;
    font-weight: ${semiBold};
`

export const DateSelectorInputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${s8};
`

export const DateSelectorInput = styled.input<{ $isValid: boolean }>`
    width: 172px;
    height: ${s20};
    font-size: 15px;
    border: none;
    outline: none;
    color: ${({ $isValid }) => ($isValid ? 'inherit' : coralRed)};
`;



export const ClearInputButton = styled.div`
`
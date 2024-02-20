import styled from "styled-components";

const s1 = ({ theme }) => theme.sizes.s1;
const s8 = ({ theme }) => theme.sizes.s8;
const s12 = ({ theme }) => theme.sizes.s12;
const s36 = ({ theme }) => theme.sizes.s36;
const white = ({ theme }) => theme.colors.white;
const chineseWhite = ({ theme }) => theme.colors.chineseWhite;
const darkWhite = ({ theme }) => theme.colors.darkWhite;
const semiBold = ({ theme }) => theme.fontWeights.semiBold;

export const DefaultButton = styled.button`
    width: 250px;
    height: ${s36};
    padding: 10px 0;
    font-weight: ${semiBold};
    font-size: ${s12};
    background-color: ${white};
    border: ${s1} solid ${chineseWhite};
    border-radius: 0px 0px ${s8} ${s8};
    transition: background-color 0.3s ease;
    &:hover{
        background-color: ${darkWhite};
    }
`
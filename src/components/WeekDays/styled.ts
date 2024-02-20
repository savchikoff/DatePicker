import styled from "styled-components"

const s8 = ({ theme }) => theme.sizes.s8;
const bold = ({ theme }) => theme.fontWeights.bold;

export const WeekDay = styled.div`
    font-size: 14px;
    text-align: center;
    font-weight: ${bold};
    padding: ${s8} 0;
`
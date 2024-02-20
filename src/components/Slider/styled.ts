import styled from "styled-components";

const s4 = ({ theme }) => theme.sizes.s4;
const bold = ({ theme }) => theme.fontWeights.bold;

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  font-size: 14px;
  font-weight: ${bold};
`;

export const Label = styled.div``

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${s4}; 
`;
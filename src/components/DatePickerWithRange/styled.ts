import styled from "styled-components";

const s16 = ({ theme }) => theme.sizes.s16;

export const RangeInputsWrapper = styled.div`
  display: flex;
  gap: ${s16};
`

export const DatePickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const CalendarContainer = styled.div<{ $show: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: ${({ $show }) => ($show ? 'block' : 'none')};
`;
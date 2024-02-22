import styled from "styled-components";

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
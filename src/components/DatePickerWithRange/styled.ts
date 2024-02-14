import styled from "styled-components";

export const RangeInputsWrapper = styled.div`
  display: flex;
  gap: 16px;
`

export const DatePickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const CalendarContainer = styled.div<{ show: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;
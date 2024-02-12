import styled from "styled-components";

export const CalendarWrapper = styled.div`
    width: 250px;
    box-sizing: border-box;
    height: 240px;
    padding: 10px;
    border: 1px solid #E1E1E1;
    border-radius: 8px;
`

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  font-size: 14px;
  font-weight: 700;
`;

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const WeekDay = styled.div`
    font-size: 14px;
    text-align: center;
    font-weight: 700;
    padding: 8px 0;
`

export const CalendarDay = styled.div<{ isSelected: boolean }>`
  text-align: center;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  border-radius: 4px;
  padding: 8px;
  background-color: ${(props) => (props.isSelected ? '#007bff' : 'transparent')};
  color: ${(props) => (props.isSelected ? '#fff' : 'inherit')};
`;
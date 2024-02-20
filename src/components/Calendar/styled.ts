import styled from "styled-components";

export const CalendarWrapper = styled.div<{ isWithTodos: boolean }>`
    width: 250px;
    box-sizing: border-box;
    min-height: 240px;
    padding: 10px;
    border: 1px solid #E1E1E1;
    border-radius: ${(props) => (props.isWithTodos ? '8px 8px 0 0' : '8px')};
`

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const CalendarDay = styled.div<{ isSelected: boolean, isNextMonth: boolean, isPreviousMonth: boolean, isWeekend: boolean, isHoliday: boolean }>`
  text-align: center;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  border-radius: 4px;
  padding: 8px;
  background-color: ${(props) => (props.isSelected ? '#007bff' : 'transparent')};
  color: ${(props) => (props.isSelected ? '#fff' : props.isNextMonth || props.isPreviousMonth ? "#AAAAAA" : props.isWeekend || props.isHoliday ? "#FD1E1E" : "inherit")};
  transition: background-color 0.3s ease;
  &:hover{
    background-color: #F1F1F1;
  }
`;
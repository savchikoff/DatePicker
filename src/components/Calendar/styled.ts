import styled from "styled-components";
import { CalendarDayProps } from "./interfaces";

const s1 = ({ theme }) => theme.sizes.s1;
const s4 = ({ theme }) => theme.sizes.s4;
const s8 = ({ theme }) => theme.sizes.s8;
const chineseWhite = ({ theme }) => theme.colors.chineseWhite;
const azure = ({ theme }) => theme.colors.azure;
const white = ({ theme }) => theme.colors.white;
const darkGrey = ({ theme }) => theme.colors.darkGrey;
const red = ({ theme }) => theme.colors.red;
const darkWhite = ({ theme }) => theme.colors.darkWhite;
const royalBlue = ({ theme }) => theme.colors.royalBlue;
const jordyBlue = ({ theme }) => theme.colors.jordyBlue;
const solitude = ({ theme }) => theme.colors.solitude;
const semiBold = ({ theme }) => theme.fontWeights.semiBold;

export const CalendarWrapper = styled.div<{ $isWithTodos: boolean }>`
    width: 250px;
    min-height: 240px;
    padding: 10px;
    border: ${s1} solid ${chineseWhite};
    border-radius: ${({ $isWithTodos, theme }) => ($isWithTodos ? `${theme.sizes.s8} ${theme.sizes.s8} 0 0` : s8)};
`

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const CalendarDay = styled.div <CalendarDayProps> `
  text-align: center;
  cursor: pointer;
  font-size: 13px;
  font-weight:  ${semiBold};
  border-radius:  ${({ $isStartDate, $isEndDate, theme, $isInRange }) => ($isStartDate ? `${theme.sizes.s4} 0 0 ${theme.sizes.s4}` : $isEndDate ? `0 ${theme.sizes.s4} ${theme.sizes.s4} 0` : $isInRange ? '0' : s4)};
  padding: ${s8};
  background-color: ${({ $isSelected, $isStartDate, $isEndDate, $isInRange }) => ($isSelected || $isEndDate ? azure : $isStartDate ? jordyBlue : $isInRange ? solitude : 'transparent')};
  color: ${({ $isSelected, $isDisabled, $isWeekend, $isHoliday, $isStartDate, $isEndDate, $isInRange }) =>
  ($isSelected ||
    $isStartDate ||
    $isEndDate ? white : $isDisabled ? darkGrey : $isWeekend ||
      $isHoliday ? red : $isInRange ? royalBlue : "inherit")
  };
  transition: background-color 0.3s ease;
  &:hover{
    background-color: ${darkWhite};
  }
`;
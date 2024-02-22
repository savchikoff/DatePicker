import styled from "styled-components";

const s1 = ({ theme }) => theme.sizes.s1;
const s4 = ({ theme }) => theme.sizes.s4;
const s8 = ({ theme }) => theme.sizes.s8;
const chineseWhite = ({ theme }) => theme.colors.chineseWhite;
const azure = ({ theme }) => theme.colors.azure;
const white = ({ theme }) => theme.colors.white;
const darkGrey = ({ theme }) => theme.colors.darkGrey;
const red = ({ theme }) => theme.colors.red;
const darkWhite = ({ theme }) => theme.colors.darkWhite;
const semiBold = ({ theme }) => theme.fontWeights.semiBold;

export const CalendarWrapper = styled.div<{ isWithTodos: boolean }>`
    width: 250px;
    min-height: 240px;
    padding: 10px;
    border: ${s1} solid ${chineseWhite};
    border-radius: ${({ isWithTodos, theme }) => (isWithTodos ? `${theme.sizes.s8} ${theme.sizes.s8} 0 0` : s8)};
`

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const CalendarDay = styled.div<{ isSelected: boolean, isDisabled?: boolean, isWeekend: boolean, isHoliday: boolean }>`
  text-align: center;
  cursor: pointer;
  font-size: 13px;
  font-weight:  ${semiBold};
  border-radius: ${s4};
  padding: ${s8};
  background-color: ${({ isSelected }) => (isSelected ? azure : 'transparent')};
  color: ${({ isSelected, isDisabled, isWeekend, isHoliday }) => (isSelected ? white : isDisabled ? darkGrey : isWeekend || isHoliday ? red : "inherit")};
  transition: background-color 0.3s ease;
  &:hover{
    background-color: ${darkWhite};
  }
`;
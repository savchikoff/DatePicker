import { IHolidays } from '../constants/holidays';

export const isWeekend = (day: number, selectedYear: number, selectedMonth: number) => {
    const weekDay = new Date(selectedYear, selectedMonth, day).getDay();
    return weekDay === 0 || weekDay === 6;
};

export const isHoliday = (day: number, month: number, year: number, holidays: IHolidays[]): boolean => holidays.some(holiday => {
        const { date: holidayDate } = holiday;
        return (
            holidayDate.getFullYear() === year &&
            holidayDate.getMonth() === month &&
            holidayDate.getDate() === day
        );
    })

export const isDatesEqual = (day: number, selectedMonth: number, selectedYear: number, selectedDate: Date) => {
    if (selectedDate.getFullYear() !== selectedYear) return false;
    if (selectedDate.getMonth() !== selectedMonth) return false;
    if (selectedDate.getDate() !== day) return false;
    return true;
};
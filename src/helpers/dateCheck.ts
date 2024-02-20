import { IHolidays } from '../constants/holidays';

export const isWeekend = (day: number, currentDate: Date) => {
    const weekDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).getDay();
    return weekDay === 0 || weekDay === 6;
};

export const isHoliday = (day: number, month: number, year: number, holidays: IHolidays[]): boolean => holidays.some(holiday => {
        const { date: holidayDate } = holiday;
        return (
            holidayDate.getFullYear() === year &&
            holidayDate.getMonth() === month &&
            holidayDate.getDate() === day
        );
    });
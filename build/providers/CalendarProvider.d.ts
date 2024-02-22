import React, { ReactNode } from "react";
interface ICalendarContext {
    today: Date;
    selectedDate?: Date;
    selectedMonth: number;
    selectedYear: number;
    setSelectedDate: (date: Date) => void;
    setSelectedMonth: (month: number) => void;
    setSelectedYear: (year: number) => void;
}
interface ICalendarProviderProps {
    children: ReactNode;
}
export declare const useCalendar: () => ICalendarContext;
declare function CalendarProvider({ children }: ICalendarProviderProps): React.JSX.Element;
export default CalendarProvider;

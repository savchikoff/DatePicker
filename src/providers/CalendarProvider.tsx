import React, { createContext, FC, ReactNode, useContext, useMemo, useState } from "react";

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

const now = new Date();

const CalendarContext = createContext<ICalendarContext>({
    today: now,
    selectedDate: undefined,
    selectedMonth: now.getMonth(),
    selectedYear: now.getFullYear(),
    setSelectedDate: () => undefined,
    setSelectedMonth: () => undefined,
    setSelectedYear: () => undefined
});

export const useCalendar = () => {
    return useContext(CalendarContext);
};

const CalendarProvider: FC<ICalendarProviderProps> = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(undefined);
    const [selectedMonth, setSelectedMonth] = useState(now.getMonth());
    const [selectedYear, setSelectedYear] = useState(now.getFullYear());

    const calendarValues: ICalendarContext = useMemo(
        () => ({
            today: now,
            selectedDate,
            selectedMonth,
            selectedYear,
            setSelectedDate,
            setSelectedMonth,
            setSelectedYear,
        }),
        [selectedDate, selectedMonth, selectedYear],
    );
    return <CalendarContext.Provider value={calendarValues}>{children}</CalendarContext.Provider>;
};

export default CalendarProvider;
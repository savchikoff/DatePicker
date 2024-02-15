import React, { createContext, useState, useContext, ReactNode, FC, useMemo } from "react";

interface ICalendarContext {
    today: Date;
    selectedDate?: Date;
    setSelectedDate: (date: Date) => void;
}

interface CalendarProviderProps {
    children: ReactNode;
}

const date = new Date();

export const CalendarContext = createContext<ICalendarContext>({
    today: date,
    selectedDate: null,
    setSelectedDate: () => undefined,
});

export const useCalendar = () => useContext(CalendarContext)

function CalendarProvider({ children }: CalendarProviderProps) {
    const [selectedDate, setSelectedDate] = useState(date);

    const values: ICalendarContext = useMemo(() => ({
        today: date,
        selectedDate,
        setSelectedDate
    }), [date, selectedDate]);

    return (
        <CalendarContext.Provider value={values}>
            {children}
        </CalendarContext.Provider>
    )
};

export default CalendarProvider;
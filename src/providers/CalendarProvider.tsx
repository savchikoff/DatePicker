import React, { createContext, useState, useContext, ReactNode, FC, useMemo } from "react";

interface ICalendarContext {
    selectedDate?: Date;
    setSelectedDate: (date: Date) => void;
}

interface CalendarProviderProps {
    children: ReactNode;
}

const date = new Date();

export const CalendarContext = createContext<ICalendarContext>({
    selectedDate: undefined,
    setSelectedDate: () => undefined,
});

export const useCalendar = () => useContext(CalendarContext)

function CalendarProvider({ children }: CalendarProviderProps) {
    const [selectedDate, setSelectedDate] = useState<Date>(date);
    console.log(selectedDate);

    const values: ICalendarContext = useMemo(() => ({
        selectedDate,
        setSelectedDate
    }), [selectedDate]);

    return (
        <CalendarContext.Provider value={values}>
            {children}
        </CalendarContext.Provider>
    )
};

export default CalendarProvider;
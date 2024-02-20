import React, { createContext, useState, useContext, ReactNode, useMemo } from "react";

interface ICalendarContext {
    selectedDate?: Date;
    setSelectedDate: (date: Date) => void;
}

export const CalendarContext = createContext<ICalendarContext>({
    selectedDate: undefined,
    setSelectedDate: () => undefined,
});

export const useCalendar = () => useContext(CalendarContext);
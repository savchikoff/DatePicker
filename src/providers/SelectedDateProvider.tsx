import React, { createContext, useState, useContext, ReactNode, useMemo } from "react";

interface ISelectedDateContext {
    selectedDate?: Date;
    setSelectedDate: (date: Date) => void;
}

export const SelectedDateContext = createContext<ISelectedDateContext>({
    selectedDate: undefined,
    setSelectedDate: () => undefined,
});

export const useSelectedDate = () => useContext(SelectedDateContext);
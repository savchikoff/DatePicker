import React, { createContext, useContext } from "react";

interface IDateContext {
    minDate: Date;
    maxDate: Date;
}

export const DateContext = createContext<IDateContext>({
    minDate: undefined,
    maxDate: undefined
});

export const useDate = () => useContext(DateContext)

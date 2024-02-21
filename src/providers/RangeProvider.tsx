import React, {
    createContext,
    useContext
} from "react";

export interface IRangeContext {
    startDate: Date;
    endDate: Date;
    setStartDate: (date: Date) => void;
    setEndDate: (date: Date) => void;
    setRangeOnClick: (date: Date) => void;
    clearRange: () => void;
}

export const RangeContext = createContext<IRangeContext>({
    startDate: undefined,
    endDate: undefined,
    setStartDate: undefined,
    setEndDate: undefined,
    setRangeOnClick: undefined,
    clearRange: undefined
});

export const useRange = () => useContext(RangeContext);
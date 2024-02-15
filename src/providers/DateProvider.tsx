import React, { createContext, useState, useContext, useMemo } from "react";

import {
    DateProviderProps,
    RangeValues,
    DispatchDate,
    DispatchRangeValues
} from './types';

interface IDateContext {
    minDate: Date;
    maxDate: Date;
    range: RangeValues;
    setMinDate: DispatchDate;
    setMaxDate: DispatchDate;
    setRange: DispatchRangeValues;
}

const baseMinDate = new Date(Date.parse("01 Jan 1970"));
const baseMaxDate = new Date(Date.parse("01 Jan 2025"));

export const DateContext = createContext<IDateContext>({
    minDate: baseMinDate,
    maxDate: baseMaxDate,
    range: undefined,
    setMinDate: () => undefined,
    setMaxDate: () => undefined,
    setRange: () => undefined
});

export function DateProvider({ children }: DateProviderProps) {
    const [minDate, setMinDate] = useState(baseMinDate);
    const [maxDate, setMaxDate] = useState(baseMaxDate);
    const [range, setRange] = useState<RangeValues>({ rangeStart: undefined, rangeEnd: undefined });

    const values = useMemo(() => ({
        minDate,
        maxDate,
        range,
        setMinDate,
        setMaxDate,
        setRange
    }), [minDate, maxDate]);

    return (
        <DateContext.Provider value={values}>
            {children}
        </DateContext.Provider>
    )
}

export const useDate = () => useContext(DateContext)

import React, {
    createContext,
    FC,
    ReactNode,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

export interface IRangeContext {
    startDate: Date;
    endDate: Date;
    setStartDate: (date: Date) => void;
    setEndDate: (date: Date) => void;
    setRangeOnClick: (date: Date) => void;
}

interface IRangeProviderProps {
    children: ReactNode;
}

export const RangeContext = createContext<IRangeContext>({
    startDate: undefined,
    endDate: undefined,
    setStartDate: undefined,
    setEndDate: undefined,
    setRangeOnClick: undefined
});

export const useRange = () => {
    return useContext(RangeContext);
};

function RangeProvider({ children }: IRangeProviderProps) {
    const [startDate, setStartDate] = useState<Date>(undefined);
    const [endDate, setEndDate] = useState<Date>(undefined);

    const setRangeOnClick = useCallback((clickedDate: Date) => {
        if (!startDate) {
            setStartDate(clickedDate);
            return;
        }
        if (!endDate) {
            setEndDate(clickedDate);
            return;
        }
        if (clickedDate.getTime() < (startDate.getTime() + endDate.getTime()) / 2) {
            setStartDate(clickedDate);
            return;
        }
        setEndDate(clickedDate);
    }, [startDate, endDate]);

    const rangeValues: IRangeContext = useMemo(() => ({
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        setRangeOnClick
    }), [startDate, endDate, setRangeOnClick])

    return <RangeContext.Provider value={rangeValues}>{children}</RangeContext.Provider>
}
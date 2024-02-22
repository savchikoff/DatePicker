import React from "react";
export interface IRangeContext {
    startDate: Date;
    endDate: Date;
    setStartDate: (date: Date) => void;
    setEndDate: (date: Date) => void;
    setRangeOnClick: (date: Date) => void;
    clearRange: () => void;
}
export declare const RangeContext: React.Context<IRangeContext>;
export declare const useRange: () => IRangeContext;

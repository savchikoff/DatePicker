import { Dispatch, ReactNode, SetStateAction } from "react";

export interface DateProviderProps {
    children: ReactNode;
}

export interface Range {
    rangeStart?: Date;
    rangeEnd?: Date;
}

export type RangeValues = Range | undefined;

export type DispatchDate = Dispatch<SetStateAction<Date>>;

export type DispatchRangeValues = Dispatch<React.SetStateAction<RangeValues>>;

export type DispatchNumber = Dispatch<SetStateAction<number>>;
import { ComponentType } from "react";

export interface DatePickerWithRangeProps {
    CalendarType: ComponentType;
    minDate: Date;
    maxDate: Date;
}
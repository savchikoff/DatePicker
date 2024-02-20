import { ComponentType } from "react";

export interface DatePickerProps {
    CalendarType: ComponentType;
    minDate: Date;
    maxDate: Date;
}
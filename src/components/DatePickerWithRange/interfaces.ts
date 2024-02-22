import { ComponentType } from "react";

export interface CalendarTypeProps {
    isWithRange?: boolean;
}

export interface DatePickerWithRangeProps {
    CalendarType: ComponentType<CalendarTypeProps>;
    minDate?: Date;
    maxDate?: Date;
}

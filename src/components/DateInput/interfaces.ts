export interface DateInputProps {
    maxDate?: Date;
    minDate?: Date;
    value: Date;
    handleCalendarClick?: () => void;
    handleInputReset?: () => void;
    setSelectedDate: (date: Date) => void;
    label?: string;
}
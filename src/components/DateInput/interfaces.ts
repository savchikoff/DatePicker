export interface DateInputProps {
    handleCalendarClick?: () => void;
    handleInputReset?: () => void;
    label?: string;
    selectedDate?: Date;
    setSelectedDate?: (date: Date) => void;
}
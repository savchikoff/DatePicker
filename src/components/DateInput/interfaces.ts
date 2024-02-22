export interface DateInputProps {
    handleCalendarClick?: () => void;
    label?: string;
    selectedDate?: Date;
    setSelectedDate?: (date: Date) => void;
}
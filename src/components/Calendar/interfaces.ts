export interface CalendarProps {
    maxDate?: Date;
    minDate?: Date;
    selectedDate: Date;
    onSelect: (date: Date) => void;
    isMondayFirst?: boolean;
    isWeekDaysHighlighted?: boolean;
    isWithTodos?: boolean;
    setCalendarVisible: (state: boolean) => void;
}
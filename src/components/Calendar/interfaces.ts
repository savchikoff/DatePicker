export interface CalendarProps {
    isMondayFirst?: boolean;
    isWeekDaysHighlighted?: boolean;
    isWithTodos?: boolean;
    setCalendarVisible: (state: boolean) => void;
}
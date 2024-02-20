export interface CalendarProps {
    isMondayFirst?: boolean;
    isWeekDaysHighlighted?: boolean;
    isWithTodos?: boolean;
    isHolidaysHighlighted?: boolean;
    setCalendarVisible: (state: boolean) => void;
    isByWeeks?: boolean;
}
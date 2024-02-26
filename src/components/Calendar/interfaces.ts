export interface CalendarProps {
    isMondayFirst?: boolean;
    isWeekDaysHighlighted?: boolean;
    isWithTodos?: boolean;
    isWithRange?: boolean;
    isHolidaysHighlighted?: boolean;
}

export interface CalendarDayProps {
    $isSelected: boolean;
    $isDisabled?: boolean;
    $isWeekend: boolean;
    $isHoliday: boolean;
    $isStartDate: boolean;
    $isEndDate: boolean;
    $isInRange: boolean;
    $isDateWithTodos: boolean;
}
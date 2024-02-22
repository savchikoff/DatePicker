/// <reference types="react" />
export declare const CalendarWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isWithTodos: boolean;
}>>;
export declare const CalendarDays: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const CalendarDay: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isSelected: boolean;
    $isDisabled?: boolean;
    $isWeekend: boolean;
    $isHoliday: boolean;
    $isStartDate: boolean;
    $isEndDate: boolean;
    $isInRange: boolean;
}>>;

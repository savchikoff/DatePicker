import { FC } from "react";
import { CalendarProps } from "../components/Calendar/interfaces";
declare class CalendarService {
    private calendar;
    constructor();
    addDecorator(decorator: (calendar: FC<CalendarProps>) => FC<CalendarProps>): void;
    getCalendar(): FC<CalendarProps>;
}
export default CalendarService;

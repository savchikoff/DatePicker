import { FC } from "react";

import Calendar from "../components/Calendar";
import { CalendarProps } from "../components/Calendar/interfaces";

class CalendarService {
    private calendar: FC<CalendarProps>;

    constructor() {
        this.calendar = Calendar;
    }

    public addDecorator(
        decorator: (calendar: FC<CalendarProps>) => FC<CalendarProps>,
    ): void {
        this.calendar = decorator(this.calendar);
    }

    public getCalendar(): FC<CalendarProps> {
        return this.calendar;
    }
}

export default CalendarService;
import { ComponentType } from "react";

import DatePickerWithRange from ".";
import CalendarService from "../../decorators/CalendarService";
import withWeekends from "../../decorators/withWeekends";
import withHolidays from "../../decorators/withHolidays";
import withMondayFirst from "../../decorators/withMondayFirst";

const calendarService = new CalendarService();
calendarService.addDecorator(withWeekends);
calendarService.addDecorator(withHolidays);
calendarService.addDecorator(withMondayFirst);
const Calendar = calendarService.getCalendar() as ComponentType;

export default {
    title: 'Calendar/DatePickerWithRange',
    component: DatePickerWithRange,
};

export const BasicInput = {
    args: {
        CalendarType: Calendar,
        minDate: new Date(2024, 1, 10),
        maxDate: new Date(2024, 2, 30)
    }
};
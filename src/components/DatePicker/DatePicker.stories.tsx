import { ComponentType } from "react";

import CalendarService from "../../decorators/CalendarService";
import withTodos from "../../decorators/withTodos";
import withWeekends from "../../decorators/withWeekends"
import withHolidays from "../../decorators/withHolidays"
import DatePicker from ".";

const calendarService = new CalendarService();
calendarService.addDecorator(withTodos);
calendarService.addDecorator(withWeekends);
calendarService.addDecorator(withHolidays);
const CalendarWithTodos = calendarService.getCalendar() as ComponentType;


export default {
    title: 'Calendar/DatePicker',
    component: DatePicker,
};

export const BasicDatePicker = {
    args: {
        CalendarType: CalendarWithTodos,
        minDate: new Date(2024, 1, 10),
        maxDate: new Date(2024, 1, 20)
    }
};
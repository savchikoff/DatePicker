import { ComponentType } from "react";

import DatePicker from ".";
import CalendarService from "../../decorators/CalendarService";
import withWeekends from "../../decorators/withWeekends";
import withHolidays from "../../decorators/withHolidays";
import withTodos from "../../decorators/withTodos";
import withMondayFirst from "../../decorators/withMondayFirst";

// const calendarService = new CalendarService();
// const DefaultCalendar = calendarService.getCalendar() as ComponentType;
// calendarService.addDecorator(withTodos);

// const CalendarWithTodos = calendarService.getCalendar() as ComponentType;


export default {
    title: 'Calendar/DatePicker',
    component: DatePicker,
};

export const BasicDatePicker = {};
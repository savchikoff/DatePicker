import { ComponentType } from "react";

import DatePicker from ".";
import Calendar from "../Calendar";
import CalendarService from "../../decorators/CalendarService";
import withTodos from "../../decorators/withTodos";

// const calendarService = new CalendarService();
// calendarService.addDecorator(withTodos);
// const CalendarWithTodos = calendarService.getCalendar() as ComponentType;


export default {
    title: 'Calendar/DatePicker',
    component: DatePicker,
};

export const BasicDatePicker = {
    args: {
        CalendarType: Calendar
    }
};
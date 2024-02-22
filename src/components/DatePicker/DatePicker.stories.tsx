import { ComponentType } from "react";

import CalendarService from "../../decorators/CalendarService";
import withTodos from "../../decorators/withTodos";
import withWeekends from "../../decorators/withWeekends"
import Calendar from "../Calendar";
import DatePicker from ".";

const calendarService = new CalendarService();
calendarService.addDecorator(withTodos);
const CalendarWithTodos = calendarService.getCalendar() as ComponentType;


export default {
    title: 'Calendar/DatePicker',
    component: DatePicker,
};

export const BasicDatePicker = {
    args: {
        CalendarType: Calendar,
        withRange: false
    }
};
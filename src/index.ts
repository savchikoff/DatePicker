import CalendarService from "./decorators/CalendarService";

export const calendar = new CalendarService();

export { default as DatePicker } from "./components/DatePicker";
export { default as DatePickerWithRange } from "./components/DatePickerWithRange";
export { default as CalendarService } from "./decorators/CalendarService";
export { default as withHolidays } from "./decorators/withHolidays";
export { default as withMondayFirst } from "./decorators/withMondayFirst";
export { default as withWeekends } from "./decorators/withWeekends";

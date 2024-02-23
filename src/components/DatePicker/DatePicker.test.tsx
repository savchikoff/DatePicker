import React, { ComponentType } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import DatePicker from '.';
import DatePickerWithRange from '../DatePickerWithRange';
import Calendar from '../Calendar';
import CalendarService from '@/decorators/CalendarService';
import withTodos from '@/decorators/withTodos';
import withWeekends from '@/decorators/withWeekends';
import withHolidays from '@/decorators/withHolidays';
import withMondayFirst from '@/decorators/withMondayFirst';
const calendarService = new CalendarService();
calendarService.addDecorator(withTodos);
const CalendarWithTodos = calendarService.getCalendar() as ComponentType;
calendarService.addDecorator(withWeekends);
const CalendarWithWeekends = calendarService.getCalendar() as ComponentType;
calendarService.addDecorator(withHolidays);
const CalendarWithHolidays = calendarService.getCalendar() as ComponentType;
calendarService.addDecorator(withMondayFirst);
const CalendarWithMondayFirst = calendarService.getCalendar() as ComponentType;

describe("DatePicker component", () => {
    it("Render date-picker", () => {
        render(<DatePicker CalendarType={Calendar} />);
        const testingEl = screen.getByTestId("date-picker");
        expect(testingEl).toBeInTheDocument();
    });
    it("Render range-picker", () => {
        render(<DatePickerWithRange CalendarType={Calendar} />);
        const testingEl = screen.getByTestId("range-picker");
        expect(testingEl).toBeInTheDocument();
    });
    it("Render date-picker with Todos", () => {
        render(<DatePicker CalendarType={CalendarWithTodos} />);
        const testingEl = screen.getByTestId("date-picker");
        expect(testingEl).toBeInTheDocument();
        const todoButton = screen.getByTestId("button");
        expect(todoButton).toBeInTheDocument();
        expect(todoButton).toHaveTextContent('Add todo');
    });
    it("Render date-picker with Weekends", () => {
        render(<DatePicker CalendarType={CalendarWithWeekends} />);
        const calendarIcon = screen.getByTestId('calendar-icon');
        fireEvent.click(calendarIcon);
        const calendarDay10 = screen.getByTestId('calendar-day-10');
        expect(calendarDay10).toHaveStyle('color: #FD1E1E');
    });
    it("Render date-picker with Holidays", () => {
        render(<DatePicker CalendarType={CalendarWithHolidays} />);
        const calendarIcon = screen.getByTestId('calendar-icon');
        fireEvent.click(calendarIcon);
        const prevMonthButton = screen.getByTestId('prev-month');
        fireEvent.click(prevMonthButton);
        const calendarDay2 = screen.getByTestId('calendar-day-2');
        expect(calendarDay2).toHaveStyle('color: #FD1E1E');
    });
    it("Render date-picker with Monday First", () => {
        render(<DatePicker CalendarType={CalendarWithMondayFirst} />);
        const calendarIcon = screen.getByTestId('calendar-icon');
        fireEvent.click(calendarIcon);
        const firstWeekDay = screen.getByTestId('week-day-0');
        expect(firstWeekDay).toHaveTextContent('Mo');
    });
    it('Toggles the calendar visibility on button click', () => {
        render(<DatePicker CalendarType={Calendar} />);
        const calendarIcon = screen.getByTestId('calendar-icon');
        fireEvent.click(calendarIcon);
        const calendarContainer = screen.getByTestId('calendar-container');
        expect(calendarContainer).toHaveStyle({ display: 'block' });
        fireEvent.click(calendarIcon);
        expect(calendarContainer).toHaveStyle({ display: 'none' });
    });
    it('Should choose date', () => {
        render(<DatePicker CalendarType={Calendar} />);
        const calendarIcon = screen.getByTestId('calendar-icon');
        fireEvent.click(calendarIcon);
        const calendarDay22 = screen.getByTestId('calendar-day-22');
        fireEvent.click(calendarDay22);
        const DateInput = screen.getByTestId('date-input');
        expect(DateInput).toHaveValue('22.02.2024');
    });
});
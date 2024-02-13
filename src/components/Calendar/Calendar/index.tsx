import React, { useRef } from 'react';
import MonthSlider from '../MonthSlider';
import useClickOutside from '../../../hooks/useClickOutside';
import {
    CalendarWrapper,
    WeekDay,
    CalendarDays,
    CalendarDay
} from './styled';

interface CalendarProps {
    maxDate?: Date;
    minDate?: Date;
    selectedDate: Date;
    onSelect: (date: Date) => void;
    firstDayOfWeek?: 'Sunday' | 'Monday';
    isWeekDayHighlighted?: boolean;
    handleCalendarVisibility: () => void;
}

const WEEK_DAYS = {
    'Sunday': ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    'Monday': ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
};

function Calendar({ maxDate, minDate, selectedDate, onSelect, firstDayOfWeek = 'Sunday', isWeekDayHighlighted = true, handleCalendarVisibility }: CalendarProps) {
    const calendarRef = useRef();
    useClickOutside(calendarRef, handleCalendarVisibility);

    const currentDate = selectedDate || new Date();
    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();
    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const daysFromPrevMonth = Array.from({ length: firstDayOfMonth }, (_, i) => {
        const prevMonthDays = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).getDate();
        return prevMonthDays - i;
    }).reverse();

    const daysFromNextMonth = Array.from({ length: 7 - ((daysArray.length + daysFromPrevMonth.length) % 7) }, (_, i) => i + 1);

    const isWeekend = (day: number) => {
        const weekDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).getDay();
        return weekDay === 0 || weekDay === 6; // Sunday or Saturday
    };

    const handleDayClick = (day: number, isPreviousMonth: boolean, isNextMonth: boolean) => () => {
        const clickedMonth = isPreviousMonth
            ? currentDate.getMonth() - 1
            : isNextMonth
                ? currentDate.getMonth() + 1
                : currentDate.getMonth();

        const newDate = new Date(currentDate.getFullYear(), clickedMonth, day);

        if (newDate >= minDate && newDate <= maxDate) {
            onSelect(newDate);
        }
    };

    const handlePreviousMonthOpen = () => {
        const newMonth = new Date(currentDate);
        newMonth.setMonth(currentDate.getMonth() - 1);

        if (newMonth >= minDate) {
            onSelect(newMonth);
        }
    };

    const handleNextMonthOpen = () => {
        const newMonth = new Date(currentDate);
        newMonth.setMonth(currentDate.getMonth() + 1);

        if (newMonth <= maxDate) {
            onSelect(newMonth);
        }
    };

    return (
        <CalendarWrapper ref={calendarRef}>
            <MonthSlider handleNextMonthOpen={handleNextMonthOpen} handlePreviousMonthOpen={handlePreviousMonthOpen} currentDate={currentDate} />
            <CalendarDays>
                {WEEK_DAYS[firstDayOfWeek].map((day) => (
                    <WeekDay key={day}>{day}</WeekDay>
                ))}
                {daysFromPrevMonth.map((day) => (
                    <CalendarDay
                        key={`prev-${day}`}
                        onClick={handleDayClick(day, true, false)}
                        isSelected={selectedDate &&
                            selectedDate >= minDate &&
                            selectedDate.getFullYear() === currentDate.getFullYear() &&
                            selectedDate.getMonth() === currentDate.getMonth() - 1 &&
                            day === selectedDate.getDate()}
                        isPreviousMonth
                        isNextMonth={false}
                        isWeekend={isWeekDayHighlighted && isWeekend(day)}
                    >
                        {day}
                    </CalendarDay>
                ))}
                {daysArray.map((day) => (
                    <CalendarDay
                        key={day}
                        isSelected={selectedDate &&
                            selectedDate >= minDate &&
                            selectedDate <= maxDate &&
                            selectedDate.getFullYear() === currentDate.getFullYear() &&
                            selectedDate.getMonth() === currentDate.getMonth() &&
                            day === selectedDate.getDate()}
                        onClick={handleDayClick(day, false, false)}
                        isPreviousMonth={false}
                        isNextMonth={false}
                        isWeekend={isWeekDayHighlighted && isWeekend(day)}
                    >
                        {day}
                    </CalendarDay>
                ))}
                {daysFromNextMonth.map((day) => (
                    <CalendarDay
                        key={`next-${day}`}
                        onClick={handleDayClick(day, false, true)}
                        isSelected={selectedDate &&
                            selectedDate <= maxDate &&
                            selectedDate.getFullYear() === currentDate.getFullYear() &&
                            selectedDate.getMonth() === currentDate.getMonth() + 1 &&
                            day === selectedDate.getDate()}
                        isNextMonth
                        isPreviousMonth={false}
                        isWeekend={isWeekDayHighlighted && isWeekend(day)}
                    >
                        {day}
                    </CalendarDay>
                ))}
            </CalendarDays>
        </CalendarWrapper>
    );
}

export default Calendar;

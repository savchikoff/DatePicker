import React from 'react';

import {
    CalendarHeader,
    CalendarWrapper,
    WeekDay,
    CalendarDays,
    CalendarDay
} from './styled';

import NextIcon from '../../Icons/NextIcon';
import PreviousIcon from '../../Icons/PreviousIcon';

interface CalendarProps {
    selectedDate: Date;
    onSelect: (date: Date) => void;
}

const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];


function Calendar({ selectedDate, onSelect }: CalendarProps) {
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
    const blanksArray = Array.from({ length: firstDayOfMonth }, (_, i) => '');

    const handleDayClick = (day: number) => {
        const newDate = new Date(currentDate);
        newDate.setDate(day);
        onSelect(newDate);
    };

    return (
        <CalendarWrapper>
            <CalendarHeader>
                <PreviousIcon onClick={() => onSelect(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))} />
                <div>
                    {currentDate.toLocaleString('default', { month: 'long' })}, {currentDate.getFullYear()}
                </div>
                <NextIcon onClick={() => onSelect(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))} />
            </CalendarHeader>
            <CalendarDays>
                {WEEK_DAYS.map((day) => (
                    <WeekDay key={day}>{day}</WeekDay>
                ))}
                {blanksArray.map((_, index) => (
                    <div key={index} />
                ))}
                {daysArray.map((day) => (
                    <CalendarDay
                        key={day}
                        isSelected={day === currentDate.getDate()}
                        onClick={() => handleDayClick(day)}
                    >
                        {day}
                    </CalendarDay>
                ))}
            </CalendarDays>
        </CalendarWrapper >
    );
};

export default Calendar;
import React, { memo } from 'react';
import WeekDays from '../WeekDays';
import Slider from '../Slider';
import { useCalendar } from '@/providers/CalendarProvider';
import { useDate } from '@/providers/DateProvider';
import { isHoliday, isWeekend } from '@/helpers/dateCheck';
import withTheme from '@/decorators/withTheme';
import {
    CalendarWrapper,
    CalendarDays,
    CalendarDay
} from './styled';
import { CalendarProps } from './interfaces';
import { HOLIDAYS } from '@/constants/holidays';
import { useRange } from '@/providers/RangeProvider';

function Calendar({ isWithRange, isWithTodos, isMondayFirst, isWeekDaysHighlighted, isHolidaysHighlighted }: CalendarProps) {
    const { selectedDate, setSelectedDate } = useCalendar();
    const { startDate, setStartDate, endDate, setEndDate, setRangeOnClick, clearRange } = useRange();
    const { minDate, maxDate } = useDate();

    const currentDate = selectedDate || startDate || new Date();



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

    const daysFromPrevMonth = Array.from({ length: firstDayOfMonth === 0 && isMondayFirst ? 6 : firstDayOfMonth - (isMondayFirst ? 1 : 0) }, (_, i) => {
        const prevMonthLastDay = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).getDate();

        const day = isMondayFirst ? prevMonthLastDay - firstDayOfMonth + i + 2 : prevMonthLastDay - firstDayOfMonth + i + 1;

        return day > prevMonthLastDay ? day - prevMonthLastDay : day;
    });

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const daysFromNextMonth = Array.from({ length: 7 - ((daysArray.length + daysFromPrevMonth.length) % 7) }, (_, i) => i + 1);

    const handleDayClick = (day: number, isPreviousMonth: boolean, isNextMonth: boolean) => () => {
        const clickedMonth = isPreviousMonth
            ? currentDate.getMonth() - 1
            : isNextMonth
                ? currentDate.getMonth() + 1
                : currentDate.getMonth();

        const newDate = new Date(currentDate.getFullYear(), clickedMonth, day);

        if (minDate && maxDate) {
            if (newDate > minDate && newDate < maxDate) {
                // setRangeOnClick ? () => setRangeOnClick(newDate) : () => setSelectedDate(newDate);
                // console.log("1");
                setSelectedDate(newDate)
            }
        } else {
            // setRangeOnClick ? () => setRangeOnClick(newDate) : () => setSelectedDate(newDate);
            // console.log("2");
            setSelectedDate(newDate)
        }
    };

    const handlePreviousDateOpen = (isByYear: boolean = false, isByWeek: boolean = false) => {
        const newDate = new Date(currentDate);
        if (isByYear) {
            newDate.setFullYear(currentDate.getFullYear() - 1);
        } else if (isByWeek) {
            newDate.setFullYear(currentDate.getFullYear() - 1);
        } else {
            newDate.setMonth(currentDate.getMonth() - 1);
        }

        if (minDate) {
            if (newDate > minDate) {
                setSelectedDate(newDate);
            }
        } else {
            setSelectedDate(newDate);
        }
    };

    const handleNextDateOpen = (isByYear: boolean = false, isByWeek: boolean = false) => {
        const newDate = new Date(currentDate);
        if (isByYear) {
            newDate.setFullYear(currentDate.getFullYear() + 1);
        } else if (isByWeek) {
            newDate.setFullYear(currentDate.getFullYear() + 1);
        } else {
            newDate.setMonth(currentDate.getMonth() + 1);
        }

        if (maxDate) {
            if (newDate < maxDate) {
                setSelectedDate(newDate);
            }
        } else {
            setSelectedDate(newDate);
        }
    };

    return (
        <CalendarWrapper isWithTodos={isWithTodos || isWithRange}>
            <Slider isByYear={false} isByWeek={false} handlePreviousDateOpen={handlePreviousDateOpen} handleNextDateOpen={handleNextDateOpen} currentDate={currentDate} />
            <CalendarDays>
                <WeekDays isMondayFirst={isMondayFirst} />
                {daysFromPrevMonth.map((day) => (
                    <CalendarDay
                        key={`prev-${day}`}
                        onClick={handleDayClick(day, true, false)}
                        isSelected={selectedDate &&
                            selectedDate >= minDate &&
                            selectedDate.getFullYear() === currentDate.getFullYear() &&
                            selectedDate.getMonth() === currentDate.getMonth() - 1 &&
                            day === selectedDate.getDate()}
                        isDisabled
                        isWeekend={isWeekDaysHighlighted && isWeekend(day, currentDate)}
                        isHoliday={isHolidaysHighlighted && isHoliday(day, currentDate.getMonth(), currentDate.getFullYear(), HOLIDAYS)}
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
                        isWeekend={isWeekDaysHighlighted && isWeekend(day, currentDate)}
                        isHoliday={isHolidaysHighlighted && isHoliday(day, currentDate.getMonth(), currentDate.getFullYear(), HOLIDAYS)}
                    >
                        {day}
                    </CalendarDay>
                ))}
                {daysFromNextMonth.length < 7 && daysFromNextMonth.map((day) => (
                    <CalendarDay
                        key={`next-${day}`}
                        onClick={handleDayClick(day, false, true)}
                        isSelected={selectedDate &&
                            selectedDate <= maxDate &&
                            selectedDate.getFullYear() === currentDate.getFullYear() &&
                            selectedDate.getMonth() === currentDate.getMonth() + 1 &&
                            day === selectedDate.getDate()}
                        isDisabled
                        isWeekend={isWeekDaysHighlighted && isWeekend(day, currentDate)}
                        isHoliday={isHolidaysHighlighted && isHoliday(day, currentDate.getMonth(), currentDate.getFullYear(), HOLIDAYS)}
                    >
                        {day}
                    </CalendarDay>
                ))}
            </CalendarDays>
        </CalendarWrapper>
    );
}

export default memo(withTheme(Calendar));

import React, { memo } from 'react';

import { HOLIDAYS } from '@/constants/holidays';
import withTheme from '@/decorators/withTheme';
import { isDatesEqual, isHoliday, isOutOfRange, isWeekend } from '@/helpers/dateCheck';
import { firstDayOfTheMonth, monthDays, prevMonthDays } from '@/helpers/daysCounter';
import { isEndDate, isInRange, isStartDate } from '@/helpers/rangeCounter';
import { useCalendar } from '@/providers/CalendarProvider';
import { useDate } from '@/providers/DateProvider';
import { useRange } from '@/providers/RangeProvider';
import { useSelectedDate } from '@/providers/SelectedDateProvider';

import Slider from '../Slider';
import WeekDays from '../WeekDays';
import { CalendarProps } from './interfaces';
import {
    CalendarDay,
    CalendarDays,
    CalendarWrapper
} from './styled';

function Calendar({ isWithRange, isWithTodos, isMondayFirst, isWeekDaysHighlighted, isHolidaysHighlighted }: CalendarProps) {
    const { selectedDate, setSelectedDate } = useSelectedDate();
    const { selectedYear, selectedMonth } = useCalendar();
    const { startDate, endDate, setRangeOnClick } = useRange();
    const { minDate, maxDate } = useDate();

    const daysInMonth = monthDays(selectedYear, selectedMonth);

    const firstDayOfMonth = firstDayOfTheMonth(selectedYear, selectedMonth);

    const daysFromPrevMonth = prevMonthDays(selectedYear, selectedMonth, firstDayOfMonth, isMondayFirst);

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const daysFromNextMonth = Array.from({ length: 7 - ((daysArray.length + daysFromPrevMonth.length) % 7) }, (_, i) => i + 1);

    const handleDayClick = (day: number, isPreviousMonth: boolean, isNextMonth: boolean) => () => {
        const clickedMonth = isPreviousMonth
            ? selectedMonth - 1
            : isNextMonth
                ? selectedMonth + 1
                : selectedMonth;

        const newDate = new Date(selectedYear, clickedMonth, day);

        if (minDate && maxDate) {
            if (newDate >= minDate && newDate <= maxDate) {
                if (isWithRange) {
                    setRangeOnClick(newDate);
                } else {
                    setSelectedDate(newDate);
                }
            }
        } else if (isWithRange) {
            setRangeOnClick(newDate)
        } else {
            setSelectedDate(newDate);
        }
    };


    return (
        <CalendarWrapper $isWithTodos={isWithTodos || isWithRange}>
            <Slider />
            <CalendarDays>
                <WeekDays isMondayFirst={isMondayFirst} />
                {daysFromPrevMonth.map((day) => (
                    <CalendarDay
                        key={`prev-${day}`}
                        onClick={handleDayClick(day, true, false)}
                        $isSelected={selectedDate && isDatesEqual(day, selectedMonth - 1, selectedYear, selectedDate)}
                        $isDisabled
                        $isWeekend={isWeekDaysHighlighted && isWeekend(day, selectedYear, selectedMonth)}
                        $isHoliday={isHolidaysHighlighted && isHoliday(day, selectedMonth, selectedYear, HOLIDAYS)}
                        $isStartDate={isStartDate(startDate, day, selectedYear, selectedMonth - 1)}
                        $isEndDate={isEndDate(endDate, day, selectedYear, selectedMonth - 1)}
                        $isInRange={isInRange(startDate, endDate, day, selectedYear, selectedMonth - 1)}
                    >
                        {day}
                    </CalendarDay>
                ))}
                {daysArray.map((day) => (
                    <CalendarDay
                        key={day}
                        $isSelected={selectedDate && isDatesEqual(day, selectedMonth, selectedYear, selectedDate)}
                        onClick={handleDayClick(day, false, false)}
                        $isWeekend={isWeekDaysHighlighted && isWeekend(day, selectedYear, selectedMonth)}
                        $isDisabled={isOutOfRange(day, selectedMonth, selectedYear, minDate, maxDate)}
                        $isHoliday={isHolidaysHighlighted && isHoliday(day, selectedMonth, selectedYear, HOLIDAYS)}
                        $isStartDate={isStartDate(startDate, day, selectedYear, selectedMonth)}
                        $isEndDate={isEndDate(endDate, day, selectedYear, selectedMonth)}
                        $isInRange={isInRange(startDate, endDate, day, selectedYear, selectedMonth)}
                    >
                        {day}
                    </CalendarDay>
                ))}
                {daysFromNextMonth.length < 7 && daysFromNextMonth.map((day) => (
                    <CalendarDay
                        key={`next-${day}`}
                        onClick={handleDayClick(day, false, true)}
                        $isSelected={selectedDate && isDatesEqual(day, selectedMonth + 1, selectedYear, selectedDate)}
                        $isDisabled
                        $isWeekend={isWeekDaysHighlighted && isWeekend(day, selectedYear, selectedMonth)}
                        $isHoliday={isHolidaysHighlighted && isHoliday(day, selectedMonth, selectedYear, HOLIDAYS)}
                        $isStartDate={isStartDate(startDate, day, selectedYear, selectedMonth + 1)}
                        $isEndDate={isEndDate(endDate, day, selectedYear, selectedMonth + 1)}
                        $isInRange={isInRange(startDate, endDate, day, selectedYear, selectedMonth + 1)}
                    >
                        {day}
                    </CalendarDay>
                ))}
            </CalendarDays>
        </CalendarWrapper >
    );
}

export default memo(withTheme(Calendar));

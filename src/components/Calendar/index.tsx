import React, { memo } from 'react';
import WeekDays from '../WeekDays';
import Slider from '../Slider';
import { monthDays, firstDayOfTheMonth, prevMonthDays } from '@/helpers/daysCounter';
import { useSelectedDate } from '@/providers/SelectedDateProvider';
import { useDate } from '@/providers/DateProvider';
import { useCalendar } from '@/providers/CalendarProvider';
import { isHoliday, isWeekend } from '@/helpers/dateCheck';
import { isStartDate, isEndDate, isInRange } from '@/helpers/rangeCounter';
import { isDatesEqual } from '@/helpers/dateCheck';
import withTheme from '@/decorators/withTheme';
import {
    CalendarWrapper,
    CalendarDays,
    CalendarDay
} from './styled';
import { CalendarProps } from './interfaces';
import { HOLIDAYS } from '@/constants/holidays';
import { useRange } from '@/providers/RangeProvider';

function Calendar({ isWithRange = false, isWithTodos, isMondayFirst, isWeekDaysHighlighted, isHolidaysHighlighted }: CalendarProps) {
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
        const clickedMonth = isPreviousMonth ? selectedMonth - 1 : isNextMonth ? selectedMonth + 1 : selectedMonth;
        const newDate = new Date(selectedYear, clickedMonth, day);

        if (isWithRange) {
            if (minDate !== undefined && maxDate !== undefined) {
                if (newDate >= minDate && newDate <= maxDate) {
                    if (startDate && newDate > startDate) {
                        setRangeOnClick(newDate);
                    } else if (!startDate) {
                        setRangeOnClick(newDate);
                    }
                }
            } else {
                if (startDate && newDate > startDate) {
                    setRangeOnClick(newDate);
                } else if (!startDate) {
                    setRangeOnClick(newDate);
                }
            }
        } else {
            if ((minDate !== undefined && maxDate !== undefined) && newDate >= minDate && newDate <= maxDate) {
                if (startDate && newDate > startDate) {
                    setSelectedDate(newDate);
                } else if (!startDate) {
                    setSelectedDate(newDate);
                }
            }
        }
    };

    return (
        <CalendarWrapper isWithTodos={isWithTodos || isWithRange}>
            <Slider />
            <CalendarDays>
                <WeekDays isMondayFirst={isMondayFirst} />
                {daysFromPrevMonth.map((day) => (
                    <CalendarDay
                        key={`prev-${day}`}
                        onClick={handleDayClick(day, true, false)}
                        isSelected={selectedDate && isDatesEqual(day, selectedMonth - 1, selectedYear, selectedDate)}
                        isDisabled
                        isWeekend={isWeekDaysHighlighted && isWeekend(day, selectedYear, selectedMonth)}
                        isHoliday={isHolidaysHighlighted && isHoliday(day, selectedMonth, selectedYear, HOLIDAYS)}
                        isStartDate={isStartDate(startDate, day, selectedYear, selectedMonth - 1)}
                        isEndDate={isEndDate(endDate, day, selectedYear, selectedMonth - 1)}
                        isInRange={isInRange(startDate, endDate, day, selectedYear, selectedMonth - 1)}
                    >
                        {day}
                    </CalendarDay>
                ))}
                {daysArray.map((day) => (
                    <CalendarDay
                        key={day}
                        isSelected={selectedDate && isDatesEqual(day, selectedMonth, selectedYear, selectedDate)}
                        onClick={handleDayClick(day, false, false)}
                        isWeekend={isWeekDaysHighlighted && isWeekend(day, selectedYear, selectedMonth)}
                        isHoliday={isHolidaysHighlighted && isHoliday(day, selectedMonth, selectedYear, HOLIDAYS)}
                        isStartDate={isStartDate(startDate, day, selectedYear, selectedMonth)}
                        isEndDate={isEndDate(endDate, day, selectedYear, selectedMonth)}
                        isInRange={isInRange(startDate, endDate, day, selectedYear, selectedMonth)}
                    >
                        {day}
                    </CalendarDay>
                ))}
                {daysFromNextMonth.length < 7 && daysFromNextMonth.map((day) => (
                    <CalendarDay
                        key={`next-${day}`}
                        onClick={handleDayClick(day, false, true)}
                        isSelected={selectedDate && isDatesEqual(day, selectedMonth + 1, selectedYear, selectedDate)}
                        isDisabled
                        isWeekend={isWeekDaysHighlighted && isWeekend(day, selectedYear, selectedMonth)}
                        isHoliday={isHolidaysHighlighted && isHoliday(day, selectedMonth, selectedYear, HOLIDAYS)}
                        isStartDate={isStartDate(startDate, day, selectedYear, selectedMonth + 1)}
                        isEndDate={isEndDate(endDate, day, selectedYear, selectedMonth + 1)}
                        isInRange={isInRange(startDate, endDate, day, selectedYear, selectedMonth + 1)}
                    >
                        {day}
                    </CalendarDay>
                ))}
            </CalendarDays>
        </CalendarWrapper >
    );
}

export default memo(withTheme(Calendar));

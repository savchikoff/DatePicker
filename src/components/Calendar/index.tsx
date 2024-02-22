import React, { memo } from 'react';
import WeekDays from '../WeekDays';
import Slider from '../Slider';
import { monthDays, firstDayOfTheMonth, prevMonthDays } from '@/helpers/daysCounter';
import { useSelectedDate } from '@/providers/SelectedDateProvider';
import { useDate } from '@/providers/DateProvider';
import { useCalendar } from '@/providers/CalendarProvider';
import { isHoliday, isWeekend } from '@/helpers/dateCheck';
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
    const { selectedYear, setSelectedYear, selectedMonth, setSelectedMonth } = useCalendar();
    const { startDate, endDate, setRangeOnClick } = useRange();
    const { minDate, maxDate } = useDate();

    const selectedRange = isWithRange ? { startDate, endDate } : null;

    const daysInMonth = monthDays(selectedYear, selectedMonth);

    const firstDayOfMonth = firstDayOfTheMonth(selectedYear, selectedMonth);

    const daysFromPrevMonth = prevMonthDays(selectedYear, selectedMonth, firstDayOfMonth, isMondayFirst);

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const daysFromNextMonth = Array.from({ length: 7 - ((daysArray.length + daysFromPrevMonth.length) % 7) }, (_, i) => i + 1);

    const isInRange = (day: number): boolean => {
        if (selectedRange) {
            const dayTimestamp = new Date(selectedYear, selectedMonth, day).getTime();
            const startTimestamp = selectedRange.startDate?.getTime() || 0;
            const endTimestamp = selectedRange.endDate?.getTime() || 0;
            return dayTimestamp >= startTimestamp && dayTimestamp <= endTimestamp;
        }
        return false;
    };

    const handleDayClick = (day: number, isPreviousMonth: boolean, isNextMonth: boolean) => () => {
        const clickedMonth = isPreviousMonth
            ? selectedMonth - 1
            : isNextMonth
                ? selectedMonth + 1
                : selectedMonth;

        const newDate = new Date(selectedYear, clickedMonth, day);

        if (isWithRange) {
            if (minDate !== undefined && maxDate !== undefined) {
                if (newDate >= minDate && newDate <= maxDate) {
                    setRangeOnClick(newDate);
                }
            } else {
                setRangeOnClick(newDate);
            }
        } else {
            if (newDate >= minDate && newDate <= maxDate) {
                setSelectedDate(newDate);
            }
        }
    };


    const handlePreviousDateOpen = (isByYear?: boolean) => {
        if (isByYear) {
            setSelectedYear(selectedYear - 1);
        } else {
            setSelectedYear(selectedMonth === 0 ? selectedYear - 1 : selectedYear);
            setSelectedMonth(selectedMonth > 0 ? selectedMonth - 1 : 11);
        }
    };

    const handleNextDateOpen = (isByYear?: boolean) => {
        if (isByYear) {
            setSelectedYear(selectedYear + 1);
        } else {
            setSelectedYear(selectedMonth === 11 ? selectedYear + 1 : selectedYear);
            setSelectedMonth(selectedMonth < 11 ? selectedMonth + 1 : 0);
        }
    };


    return (
        <CalendarWrapper isWithTodos={isWithTodos || isWithRange}>
            <Slider isByYear handlePreviousDateOpen={handlePreviousDateOpen} handleNextDateOpen={handleNextDateOpen} />
            <CalendarDays>
                <WeekDays isMondayFirst={isMondayFirst} />
                {daysFromPrevMonth.map((day) => (
                    <CalendarDay
                        key={`prev-${day}`}
                        onClick={handleDayClick(day, true, false)}
                        isSelected={isWithRange ? isInRange(day) : (selectedDate && isDatesEqual(day, selectedMonth - 1, selectedYear, selectedDate))}
                        isDisabled
                        isWeekend={isWeekDaysHighlighted && isWeekend(day, selectedYear, selectedMonth)}
                        isHoliday={isHolidaysHighlighted && isHoliday(day, selectedMonth, selectedYear, HOLIDAYS)}
                    >
                        {day}
                    </CalendarDay>
                ))}
                {daysArray.map((day) => (
                    <CalendarDay
                        key={day}
                        isSelected={isWithRange ? isInRange(day) : (selectedDate && isDatesEqual(day, selectedMonth, selectedYear, selectedDate))}
                        onClick={handleDayClick(day, false, false)}
                        isWeekend={isWeekDaysHighlighted && isWeekend(day, selectedYear, selectedMonth)}
                        isHoliday={isHolidaysHighlighted && isHoliday(day, selectedMonth, selectedYear, HOLIDAYS)}
                    >
                        {day}
                    </CalendarDay>
                ))}
                {daysFromNextMonth.length < 7 && daysFromNextMonth.map((day) => (
                    <CalendarDay
                        key={`next-${day}`}
                        onClick={handleDayClick(day, false, true)}
                        isSelected={isWithRange ? isInRange(day) : (selectedDate && isDatesEqual(day, selectedMonth + 1, selectedYear, selectedDate))}
                        isDisabled
                        isWeekend={isWeekDaysHighlighted && isWeekend(day, selectedYear, selectedMonth)}
                        isHoliday={isHolidaysHighlighted && isHoliday(day, selectedMonth, selectedYear, HOLIDAYS)}
                    >
                        {day}
                    </CalendarDay>
                ))}
            </CalendarDays>
        </CalendarWrapper>
    );
}

export default memo(withTheme(Calendar));

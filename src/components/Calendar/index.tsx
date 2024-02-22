import React, { memo } from 'react';
import WeekDays from '../WeekDays';
import Slider from '../Slider';
import { useSelectedDate } from '@/providers/SelectedDateProvider';
import { useDate } from '@/providers/DateProvider';
import { useCalendar } from '@/providers/CalendarProvider';
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

function Calendar({ isWithRange = true, isWithTodos, isMondayFirst, isWeekDaysHighlighted, isHolidaysHighlighted }: CalendarProps) {
    const { selectedDate, setSelectedDate } = useSelectedDate();
    const { today, selectedYear, setSelectedYear, selectedMonth, setSelectedMonth } = useCalendar();
    const { startDate, setStartDate, endDate, setEndDate, setRangeOnClick } = useRange();
    const { minDate, maxDate } = useDate();

    const currentDate = selectedDate || startDate || today;
    const selectedRange = isWithRange ? { startDate, endDate } : null;
    const currentMonthDate = new Date(selectedYear, selectedMonth - 1, 1);

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

    const isInRange = (day: number): boolean => {
        if (selectedRange) {
            const dayTimestamp = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).getTime();
            const startTimestamp = selectedRange.startDate?.getTime() || 0;
            const endTimestamp = selectedRange.endDate?.getTime() || 0;
            return dayTimestamp >= startTimestamp && dayTimestamp <= endTimestamp;
        }
        return false;
    };

    const handleDayClick = (day: number, isPreviousMonth: boolean, isNextMonth: boolean) => () => {
        const clickedMonth = isPreviousMonth
            ? currentDate.getMonth() - 1
            : isNextMonth
                ? currentDate.getMonth() + 1
                : currentDate.getMonth();

        const newDate = new Date(currentDate.getFullYear(), clickedMonth, day);

        if (isWithRange) {
            if (minDate !== undefined && maxDate !== undefined) {
                setRangeOnClick(newDate);
            } else {
                setRangeOnClick(newDate);
            }
        } else {
            if ((minDate !== undefined && maxDate !== undefined) || (minDate === undefined && maxDate === undefined)) {
                setSelectedDate(newDate);
            }
        }
    };

    const handlePreviousDateOpen = (isByYear: boolean = false, isByWeek: boolean = false) => {
        const newDate = new Date(currentDate);
        if (isByYear) {
            newDate.setFullYear(currentDate.getFullYear() - 1);
        } else if (isByWeek) {
            newDate.setDate(currentDate.getDate() - 7);
        } else {
            newDate.setMonth(currentDate.getMonth() - 1);
        }

        if (minDate) {
            if (newDate > minDate) {
                if (isWithRange) {
                    setStartDate(newDate);
                    setEndDate(null);
                } else {
                    setSelectedDate(newDate);
                }
            }
        } else {
            if (isWithRange) {
                setStartDate(newDate);
                setEndDate(null);
            } else {
                setSelectedDate(newDate);
            }
        }
    };

    const handleNextDateOpen = (isByYear: boolean = false, isByWeek: boolean = false) => {
        const newDate = new Date(currentDate);
        if (isByYear) {
            newDate.setFullYear(currentDate.getFullYear() + 1);
        } else if (isByWeek) {
            newDate.setDate(currentDate.getDate() + 7);
        } else {
            newDate.setMonth(currentDate.getMonth() + 1);
        }

        if (maxDate) {
            if (newDate < maxDate) {
                if (isWithRange) {
                    setStartDate(newDate);
                    setEndDate(null);
                } else {
                    setSelectedDate(newDate);
                }
            }
        } else {
            if (isWithRange) {
                setStartDate(newDate);
                setEndDate(null);
            } else {
                setSelectedDate(newDate);
            }
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
                        isSelected={isWithRange ? isInRange(day) : (selectedDate &&
                            selectedDate >= minDate &&
                            selectedDate.getFullYear() === currentDate.getFullYear() &&
                            selectedDate.getMonth() === currentDate.getMonth() - 1 &&
                            day === selectedDate.getDate())}
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
                        isSelected={isWithRange ? isInRange(day) : (selectedDate &&
                            selectedDate >= minDate &&
                            selectedDate <= maxDate &&
                            selectedDate.getFullYear() === currentDate.getFullYear() &&
                            selectedDate.getMonth() === currentDate.getMonth() &&
                            day === selectedDate.getDate())}
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
                        isSelected={isWithRange ? isInRange(day) : (selectedDate &&
                            selectedDate <= maxDate &&
                            selectedDate.getFullYear() === currentDate.getFullYear() &&
                            selectedDate.getMonth() === currentDate.getMonth() + 1 &&
                            day === selectedDate.getDate())}
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

import React, { useCallback, useMemo, useState } from 'react';

import withTheme from '@/decorators/withTheme';
import withWeekends from '@/decorators/withWeekends';
import GlobalStyle from '@/GlobalStyles/styled';
import CalendarProvider from '@/providers/CalendarProvider';
import { DateContext } from '@/providers/DateProvider';
import { IRangeContext, RangeContext } from '@/providers/RangeProvider';

import Button from '../Button';
import Calendar from '../Calendar';
import DateInput from '../DateInput';
import { ErrorBoundary } from '../ErrorBoundary';
import { DatePickerWithRangeProps } from './interfaces';
import {
    CalendarContainer,
    DatePickerContainer,
    RangeInputsWrapper
} from './styled';

function DatePickerWithRange({ CalendarType, minDate, maxDate }: DatePickerWithRangeProps) {
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();

    const minMaxLimits = useMemo(() => ({ minDate, maxDate }), [minDate, maxDate]);

    const handleCalendarVisibility = () => {
        setCalendarVisible((prevState) => !prevState);
    }

    const setRangeOnClick = useCallback((clickedDate: Date) => {
        if (!startDate) {
            setStartDate(clickedDate);
            return;
        }
        if (!endDate) {
            if (clickedDate.getTime() < startDate.getTime()) {
                setStartDate(clickedDate);
                return;
            }
            setEndDate(clickedDate);
            return;
        }
        if (clickedDate.getTime() < (startDate.getTime() + endDate.getTime()) / 2) {
            setStartDate(clickedDate);
            return;
        }
        setEndDate(clickedDate);
    }, [startDate, endDate]);

    const clearRange = () => {
        setStartDate(null);
        setEndDate(null);
    }

    const dateValue: IRangeContext = useMemo(
        () => ({
            startDate,
            endDate,
            setStartDate,
            setEndDate,
            setRangeOnClick,
            clearRange
        }),
        [startDate, endDate, setRangeOnClick],
    );

    const CalendarWithWeekends = withWeekends(Calendar);

    return (
        <ErrorBoundary>
            <CalendarProvider>
                <RangeContext.Provider value={dateValue}>
                    <DateContext.Provider value={minMaxLimits}>
                        <DatePickerContainer>
                            <GlobalStyle />
                            <RangeInputsWrapper>
                                <DateInput
                                    handleCalendarClick={handleCalendarVisibility}
                                    label="From"
                                    selectedDate={startDate}
                                    setSelectedDate={setStartDate}
                                />
                                <DateInput
                                    handleCalendarClick={handleCalendarVisibility}
                                    label="To"
                                    selectedDate={endDate}
                                    setSelectedDate={setEndDate}
                                />
                            </RangeInputsWrapper>
                            <CalendarContainer show={calendarVisible}>
                                <CalendarWithWeekends isWithRange />
                                <Button label="Clear interval" onClick={clearRange} />
                            </CalendarContainer>
                        </DatePickerContainer>
                    </DateContext.Provider>
                </RangeContext.Provider>
            </CalendarProvider>
        </ErrorBoundary>
    );
};

export default withTheme(DatePickerWithRange);

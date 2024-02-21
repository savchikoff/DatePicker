import React, { useCallback, useMemo, useState } from 'react';
import Calendar from '../Calendar';
import GlobalStyle from '@/GlobalStyles/styled';
import Button from '../Button';
import withTheme from '@/decorators/withTheme';
import { IRangeContext, RangeContext } from '@/providers/RangeProvider';
import { DatePickerWithRangeProps } from './interfaces';

import {
    DatePickerContainer,
    CalendarContainer,
    RangeInputsWrapper
} from './styled';

import DateInput from '../DateInput';

function DatePickerWithRange({ CalendarType, minDate, maxDate }: DatePickerWithRangeProps) {
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();

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

    console.log(startDate, endDate);

    return (
        <RangeContext.Provider value={dateValue}>
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
                    <Calendar
                        setCalendarVisible={setCalendarVisible} isWithRange />
                    <Button label="Clear interval" onClick={clearRange} />
                </CalendarContainer>
            </DatePickerContainer>
        </RangeContext.Provider>
    );
};

export default withTheme(DatePickerWithRange);

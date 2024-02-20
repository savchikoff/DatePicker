import React, { useCallback, useMemo, useState } from 'react';
import Calendar from '../Calendar';
import GlobalStyle from '@/GlobalStyles/styled';
import CalendarProvider from '@/providers/CalendarProvider';
import { IRangeContext, RangeContext } from '@/providers/RangeProvider';
import { DatePickerWithRangeProps } from './interfaces';

import {
    DatePickerContainer,
    CalendarContainer,
    RangeInputsWrapper
} from './styled';

import DateInput from '../DateInput';

function DatePickerWithRange({ CalendarType, minDate, maxDate }: DatePickerWithRangeProps) {
    const limitsValue = useMemo(() => ({ minDate, maxDate }), [minDate, maxDate]);
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());

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
        }),
        [startDate, endDate, setRangeOnClick],
    );

    return (
        <CalendarProvider>
            <RangeContext.Provider value={dateValue}>
                <DatePickerContainer>
                    <GlobalStyle />
                    <RangeInputsWrapper>
                        <DateInput
                            handleCalendarClick={handleCalendarVisibility}
                            label="From" />
                        <DateInput
                            handleCalendarClick={handleCalendarVisibility}
                            label="To" />
                    </RangeInputsWrapper>
                    <CalendarContainer show={calendarVisible}>
                        <Calendar
                            setCalendarVisible={setCalendarVisible} />
                    </CalendarContainer>
                </DatePickerContainer>
            </RangeContext.Provider>
        </CalendarProvider>
    );
};

export default DatePickerWithRange;

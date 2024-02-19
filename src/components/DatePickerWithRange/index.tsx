import React, { useCallback, useState } from 'react';
import Calendar from '../Calendar';
import GlobalStyle from '../../GlobalStyles/styled';
import withWeekends from '../../decorators/withWeekends';
import {
    DatePickerContainer,
    CalendarContainer,
    RangeInputsWrapper
} from './styled';

import DateInput from '../DateInput';

function DatePickerWithRange() {
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());

    const handleStartDateSelect = useCallback((date: Date) => {
        setStartDate(date);
    }, []);
    const handleEndDateSelect = useCallback((date: Date) => {
        setStartDate(date);
    }, []);

    const handleCalendarVisibility = useCallback(() => {
        setCalendarVisible(prevState => !prevState);
    }, []);

    const handleStartDateInputReset = useCallback(() => {
        setStartDate(null);
    }, []);
    const handleEndDateInputReset = useCallback(() => {
        setStartDate(null);
    }, []);

    return (
        <DatePickerContainer>
            <GlobalStyle />
            <RangeInputsWrapper>
                <DateInput
                    handleCalendarClick={handleCalendarVisibility}
                    handleInputReset={handleStartDateInputReset}
                    label="From" />
                <DateInput
                    handleInputReset={handleEndDateInputReset}
                    handleCalendarClick={handleCalendarVisibility}
                    label="To" />
            </RangeInputsWrapper>
            <CalendarContainer show={calendarVisible}>
                <Calendar
                    setCalendarVisible={setCalendarVisible} />
            </CalendarContainer>
        </DatePickerContainer>
    );
};

export default DatePickerWithRange;

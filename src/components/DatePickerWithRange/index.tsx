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
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [calendarVisible, setCalendarVisible] = useState(false);

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

    const minDate = new Date(Date.parse("01 Jan 1970"));
    const maxDate = new Date(Date.parse("01 Jan 2025"));

    const CalendarWithWeekends = withWeekends(Calendar);


    return (
        <DatePickerContainer>
            <GlobalStyle />
            <RangeInputsWrapper>
                < DateInput
                    maxDate={maxDate}
                    minDate={minDate}
                    value={startDate}
                    handleCalendarClick={handleCalendarVisibility}
                    handleInputReset={handleStartDateInputReset}
                    setSelectedDate={setStartDate}
                    label="From" />
                < DateInput
                    maxDate={maxDate}
                    minDate={minDate}
                    value={endDate}
                    handleInputReset={handleEndDateInputReset}
                    setSelectedDate={setEndDate}
                    label="To" />
            </RangeInputsWrapper>
            <CalendarContainer show={calendarVisible}>
                {/* <CalendarWithWeekends
                    maxDate={maxDate}
                    minDate={minDate}
                    selectedDate={selectedDate}
                    setCalendarVisible={setCalendarVisible}
                    onSelect={handleDateSelect} /> */}
            </CalendarContainer>
        </DatePickerContainer>
    );
};

export default DatePickerWithRange;

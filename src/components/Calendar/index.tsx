import React, { useState } from 'react';
import Calendar from './Calendar';
import GlobalStyle from '../../GlobalStyles/styled';
import {
    DatePickerContainer,
    CalendarContainer,
} from './styled';

import DateInput from './DateInput';

function CustomDatePicker() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [calendarVisible, setCalendarVisible] = useState(false);

    console.log(selectedDate);

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };

    const handleCalendarVisibility = () => setCalendarVisible(prevState => !prevState);

    const handleInputReset = () => {
        setSelectedDate(null);
    }

    const minDate = new Date(Date.parse("01 Jan 1970"));
    const maxDate = new Date(Date.parse("01 Jan 2025"));


    return (
        <DatePickerContainer>
            <GlobalStyle />
            <DateInput
                maxDate={maxDate}
                minDate={minDate}
                value={selectedDate}
                handleClick={handleCalendarVisibility}
                handleInputReset={handleInputReset}
                setSelectedDate={setSelectedDate} />
            <CalendarContainer show={calendarVisible}>
                <Calendar
                    maxDate={maxDate}
                    minDate={minDate}
                    selectedDate={selectedDate}
                    handleCalendarVisibility={handleCalendarVisibility}
                    onSelect={handleDateSelect} />
            </CalendarContainer>
        </DatePickerContainer>
    );
};

export default CustomDatePicker;

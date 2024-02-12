import React, { useState } from 'react';
import Calendar from './Calendar';
import GlobalStyle from '../../GlobalStyles/styled';
import {
    DatePickerContainer,
    CalendarContainer,
} from './styled';

import DateInput from './DateInput';

function CustomDatePicker() {
    const [selectedDate, setSelectedDate] = useState<Date>();
    const [calendarVisible, setCalendarVisible] = useState(false);

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };

    const handleCalendarVisibility = () => setCalendarVisible(prevState => !prevState);

    const handleInputReset = () => {
        setSelectedDate(null);
    }


    return (
        <DatePickerContainer>
            <GlobalStyle />
            <DateInput value={selectedDate}
                handleClick={handleCalendarVisibility}
                handleInputReset={handleInputReset}
                setSelectedDate={setSelectedDate} />
            <CalendarContainer show={calendarVisible}>
                <Calendar selectedDate={selectedDate} onSelect={handleDateSelect} />
            </CalendarContainer>
        </DatePickerContainer>
    );
};

export default CustomDatePicker;

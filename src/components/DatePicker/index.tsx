import React, { useCallback, useState } from 'react';
import Calendar from '../Calendar';
import GlobalStyle from '../../GlobalStyles/styled';
import withWeekends from '../../decorators/withWeekends';
import withMondayFirst from '../../decorators/withMondayFirst';
import withTodos from '../../decorators/withTodos';
import {
    DatePickerContainer,
    CalendarContainer,
} from './styled';

import DateInput from '../DateInput';

function CustomDatePicker() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [calendarVisible, setCalendarVisible] = useState(false);

    const handleDateSelect = useCallback((date: Date) => {
        setSelectedDate(date);
    }, []);

    const handleCalendarVisibility = useCallback(() => {
        setCalendarVisible(prevState => !prevState);
    }, []);

    const handleInputReset = useCallback(() => {
        setSelectedDate(null);
    }, []);

    const minDate = new Date(Date.parse("01 Jan 1970"));
    const maxDate = new Date(Date.parse("01 Jan 2025"));

    const CalendarWithWeekends = withWeekends(Calendar);
    const CalendarWithMondayFirst = withMondayFirst(CalendarWithWeekends);
    const CalendarWithTodos = withTodos(CalendarWithMondayFirst);


    return (
        <DatePickerContainer>
            <GlobalStyle />
            <DateInput
                maxDate={maxDate}
                minDate={minDate}
                value={selectedDate}
                handleCalendarClick={handleCalendarVisibility}
                handleInputReset={handleInputReset}
                setSelectedDate={setSelectedDate} />
            <CalendarContainer show={calendarVisible}>
                <CalendarWithTodos
                    maxDate={maxDate}
                    minDate={minDate}
                    selectedDate={selectedDate}
                    setCalendarVisible={setCalendarVisible}
                    onSelect={handleDateSelect} />
            </CalendarContainer>
        </DatePickerContainer>
    );
};

export default CustomDatePicker;

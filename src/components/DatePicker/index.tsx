import React, { useCallback, useMemo, useState } from 'react';
import Calendar from '../Calendar';
import withTodos from '../../decorators/withTodos';
import { DateContext } from '../../providers/DateProvider';
import { DatePickerProps } from './types';
import CalendarProvider from '../../providers/CalendarProvider';
import GlobalStyle from '../../GlobalStyles/styled';
import {
    DatePickerContainer,
    CalendarContainer,
} from './styled';

import DateInput from '../DateInput';



function DatePicker({ minDate = new Date(), maxDate = new Date(2026, 0, 1) }: DatePickerProps) {
    const [calendarVisible, setCalendarVisible] = useState(false);
    const minMaxLimits = useMemo(() => ({ minDate, maxDate }), [minDate, maxDate]);

    const CalendarWithTodos = withTodos(Calendar);

    const handleCalendarVisibility = useCallback(() => {
        setCalendarVisible(prevState => !prevState);
    }, []);

    return (
        <CalendarProvider>
            <DateContext.Provider value={minMaxLimits}>
                <DatePickerContainer>
                    <GlobalStyle />
                    <DateInput
                        handleCalendarClick={handleCalendarVisibility} />
                    <CalendarContainer show={calendarVisible}>
                        <CalendarWithTodos
                            setCalendarVisible={setCalendarVisible} />
                    </CalendarContainer>
                </DatePickerContainer>
            </DateContext.Provider>
        </CalendarProvider>
    );
};

export default DatePicker;

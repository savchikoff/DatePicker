import React, { useCallback, useMemo, useState } from 'react';
import { useCalendar } from '@/providers/CalendarProvider';
import { DateContext } from '@/providers/DateProvider';
import { DatePickerProps } from './interfaces';
import CalendarProvider from '@/providers/CalendarProvider';
import GlobalStyle from '@/GlobalStyles/styled';
import {
    DatePickerContainer,
    CalendarContainer,
} from './styled';

import DateInput from '../DateInput';



function DatePicker({ CalendarType, minDate = new Date(2023, 1, 2), maxDate = new Date(2026, 0, 1) }: DatePickerProps) {
    const [calendarVisible, setCalendarVisible] = useState(false);
    const minMaxLimits = useMemo(() => ({ minDate, maxDate }), [minDate, maxDate]);
    const [selectedDate, setSelectedDate] = useState<Date>();

    const handleCalendarVisibility = useCallback(() => {
        setCalendarVisible(prevState => !prevState);
    }, []);

    return (
        <CalendarProvider>
            <DateContext.Provider value={minMaxLimits}>
                <DatePickerContainer>
                    <GlobalStyle />
                    <DateInput
                        handleCalendarClick={handleCalendarVisibility}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate} />
                    <CalendarContainer show={calendarVisible}>
                        <CalendarType />
                    </CalendarContainer>
                </DatePickerContainer>
            </DateContext.Provider>
        </CalendarProvider>
    );
};

export default DatePicker;

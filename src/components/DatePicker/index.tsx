import React, { useCallback, useMemo, useState } from 'react';
import { DateContext } from '@/providers/DateProvider';
import { SelectedDateContext } from '@/providers/SelectedDateProvider';
import CalendarProvider from '@/providers/CalendarProvider';
import withTheme from '@/decorators/withTheme';
import { DatePickerProps } from './interfaces';

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

    const dateValue = useMemo(() => ({ selectedDate, setSelectedDate }), [selectedDate, setSelectedDate]);


    const handleCalendarVisibility = useCallback(() => {
        setCalendarVisible(prevState => !prevState);
    }, []);

    return (
        <CalendarProvider>
            <SelectedDateContext.Provider value={dateValue}>
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
            </SelectedDateContext.Provider>
        </CalendarProvider>
    );
};

export default withTheme(DatePicker);

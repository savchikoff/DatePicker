import React, { useCallback, useMemo, useState } from 'react';

import withTheme from '@/decorators/withTheme';
import GlobalStyle from '@/GlobalStyles/styled';
import CalendarProvider from '@/providers/CalendarProvider';
import { DateContext } from '@/providers/DateProvider';
import { SelectedDateContext } from '@/providers/SelectedDateProvider';

import DateInput from '../DateInput';
import { ErrorBoundary } from '../ErrorBoundary';
import { DatePickerProps } from './interfaces';
import {
    CalendarContainer,
    DatePickerContainer,
} from './styled';



function DatePicker({ CalendarType, minDate, maxDate }: DatePickerProps) {
    const [calendarVisible, setCalendarVisible] = useState(false);
    const minMaxLimits = useMemo(() => ({ minDate, maxDate }), [minDate, maxDate]);
    const [selectedDate, setSelectedDate] = useState<Date>();

    const dateValue = useMemo(() => ({ selectedDate, setSelectedDate }), [selectedDate, setSelectedDate]);

    const handleCalendarVisibility = useCallback(() => {
        setCalendarVisible(prevState => !prevState);
    }, []);

    return (
        <ErrorBoundary>
            <CalendarProvider>
                <SelectedDateContext.Provider value={dateValue}>
                    <DateContext.Provider value={minMaxLimits}>
                        <DatePickerContainer data-testid="date-picker">
                            <GlobalStyle />
                            <DateInput
                                handleCalendarClick={handleCalendarVisibility}
                                selectedDate={selectedDate}
                                setSelectedDate={setSelectedDate} />
                            <CalendarContainer $show={calendarVisible} data-testid="calendar-container">
                                <CalendarType />
                            </CalendarContainer>
                        </DatePickerContainer>
                    </DateContext.Provider>
                </SelectedDateContext.Provider>
            </CalendarProvider>
        </ErrorBoundary>
    );
};

export default withTheme(DatePicker);

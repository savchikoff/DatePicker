import React, { useCallback, useMemo, useState } from 'react';


import withHolidays from '@/decorators/withHolidays';
import withTheme from '@/decorators/withTheme';
import withTodos from '@/decorators/withTodos';
import withWeekends from '@/decorators/withWeekends';
import GlobalStyle from '@/GlobalStyles/styled';
import CalendarProvider from '@/providers/CalendarProvider';
import { DateContext } from '@/providers/DateProvider';
import { SelectedDateContext } from '@/providers/SelectedDateProvider';

import { ErrorBoundary } from '../ErrorBoundary';
import Calendar from '../Calendar';
import DateInput from '../DateInput';
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

    const CalendarWithHolidays = withHolidays(Calendar);
    const CalendarWithWeekends = withWeekends(CalendarWithHolidays);
    const CalendarWithTodos = withTodos(CalendarWithWeekends);



    const handleCalendarVisibility = useCallback(() => {
        setCalendarVisible(prevState => !prevState);
    }, []);

    return (
        <ErrorBoundary>
            <CalendarProvider>
                <SelectedDateContext.Provider value={dateValue}>
                    <DateContext.Provider value={minMaxLimits}>
                        <DatePickerContainer>
                            <GlobalStyle />
                            <DateInput
                                handleCalendarClick={handleCalendarVisibility}
                                selectedDate={selectedDate}
                                setSelectedDate={setSelectedDate} />
                            <CalendarContainer $show={calendarVisible}>
                                <CalendarWithTodos />
                            </CalendarContainer>
                        </DatePickerContainer>
                    </DateContext.Provider>
                </SelectedDateContext.Provider>
            </CalendarProvider>
        </ErrorBoundary>
    );
};

export default withTheme(DatePicker);

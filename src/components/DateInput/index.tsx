import React, { memo, useEffect, useState } from 'react';

import withTheme from '@/decorators/withTheme';
import { isValidDate } from '@/helpers/isValidDate';
import { useDate } from '@/providers/DateProvider';

import CalendarIcon from '@/assets/calendar.svg';
import ClearIcon from '@/assets/clear.svg';
import { regex } from './config';
import { DateInputProps } from './interfaces';
import { DateContainer, DateSelectorContainer, DateSelectorInput, DateSelectorInputWrapper, DateSelectorLabel } from './styled';

function DateInput({ selectedDate, setSelectedDate, handleCalendarClick, label = "Date" }: DateInputProps) {
    const [enteredDate, setEnteredDate] = useState("");
    const [isInputValid, setIsInputValid] = useState(true);

    const { minDate, maxDate } = useDate();

    useEffect(() => {
        setIsInputValid(true);
        setEnteredDate(selectedDate?.toLocaleDateString());
    }, [selectedDate]);

    useEffect(() => {
        if (!selectedDate) {
            setEnteredDate("");
        }
    }, [selectedDate]);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = inputValue
            .replace(/\D/g, "")
            .replace(/^(\d{2})/, "$1.")
            .replace(/^(\d{2}\.\d{2})/, "$1.");

        setIsInputValid(false);
        setEnteredDate(formattedValue);

        if (regex.test(formattedValue)) {
            const dateParts = formattedValue.split('.');
            const day = parseInt(dateParts[0], 10);
            const month = parseInt(dateParts[1], 10) - 1;
            const year = parseInt(dateParts[2], 10);

            if (isValidDate(year, month, day, minDate, maxDate)) {
                const dateObject = new Date(year, month, day);
                setSelectedDate(dateObject);
            }
        }
    };

    const handleInputReset = () => {
        setSelectedDate(null);
        setEnteredDate("");
    };

    return (
        <>
            <DateContainer>
                <DateSelectorLabel>{label}</DateSelectorLabel>
                <DateSelectorContainer>
                    <DateSelectorInputWrapper>
                        <CalendarIcon data-testid="calendar-icon" onClick={handleCalendarClick} />
                        <DateSelectorInput
                            data-testid="date-input"
                            placeholder='DD.MM.YYYY'
                            value={enteredDate}
                            onChange={handleInputChange}
                            maxLength={10}
                            $isValid={!!isInputValid}
                        />
                    </DateSelectorInputWrapper>
                    {enteredDate && <ClearIcon onClick={handleInputReset} />}
                </DateSelectorContainer>
            </DateContainer>
        </>
    );
}

export default memo(withTheme(DateInput));
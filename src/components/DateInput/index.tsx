import React, { memo,useEffect, useState } from 'react';

import withTheme from '@/decorators/withTheme';
import GlobalStyle from '@/GlobalStyles/styled';
import { isValidDate } from '@/helpers/isValidDate';
import { useDate } from '@/providers/DateProvider';
import { useRange } from '@/providers/RangeProvider';

import CalendarIcon from '../Icons/CalendarIcon';
import ClearIcon from '../Icons/ClearIcon';
import { DateInputProps } from './interfaces';
import { DateContainer, DateSelectorContainer, DateSelectorInput, DateSelectorInputWrapper,DateSelectorLabel } from './styled';

function DateInput({ selectedDate, setSelectedDate, handleCalendarClick, label = "Date" }: DateInputProps) {
    const [enteredDate, setEnteredDate] = useState("");
    const [isInputValid, setIsInputValid] = useState(true);

    const { minDate, maxDate } = useDate();

    useEffect(() => {
        setEnteredDate(selectedDate?.toLocaleDateString());
        setIsInputValid(true);
    }, [selectedDate]);

    useEffect(() => {
        if (!selectedDate) {
            setEnteredDate("");
        }
    }, [selectedDate])

    const handleInputChange = (e) => {
        const regex = /^\d{2}\.\d{2}\.\d{4}$/;
        const newValue = e.target.value;
        setIsInputValid(false);
        setEnteredDate(newValue);
        if (regex.test(newValue)) {
            const dateParts = newValue.split('.');
            const day = parseInt(dateParts[0], 10);
            const month = parseInt(dateParts[1], 10) - 1;
            const year = parseInt(dateParts[2], 10);
            if (isValidDate(year, month, day, minDate, maxDate)) {
                const dateObject = new Date(year, month, day);
                setSelectedDate(dateObject);
            }
        }
    }

    const handleInputReset = () => {
        setSelectedDate(null);
        setEnteredDate("");
    };

    return (
        <>
            <GlobalStyle />
            <DateContainer>
                <DateSelectorLabel>{label}</DateSelectorLabel>
                <DateSelectorContainer>
                    <DateSelectorInputWrapper>
                        <CalendarIcon onClick={handleCalendarClick} />
                        <DateSelectorInput placeholder='DD.MM.YYYY' value={enteredDate} onChange={handleInputChange} maxLength={10} isValid={isInputValid} />
                    </DateSelectorInputWrapper>
                    {enteredDate && <ClearIcon onClick={handleInputReset} />}
                </DateSelectorContainer >
            </DateContainer>
        </>
    )
}

export default memo(withTheme(DateInput)); 
import React, { useEffect, useState, memo } from 'react';
import GlobalStyle from '../../GlobalStyles/styled';
import { DateContainer, DateSelectorInput, DateSelectorContainer, DateSelectorLabel, DateSelectorInputWrapper } from './styled';
import { DateInputProps } from './interfaces';
import { isValidDate } from '../../helpers/isValidDate';
import CalendarIcon from '../Icons/CalendarIcon';
import ClearIcon from '../Icons/ClearIcon';

function DateInput({ maxDate, minDate, value, handleCalendarClick, handleInputReset, setSelectedDate, label = "Date" }: DateInputProps) {
    const [enteredDate, setEnteredDate] = useState("");
    const [isInputValid, setIsInputValid] = useState(true);

    useEffect(() => {
        setEnteredDate(value?.toLocaleDateString());
    }, [value]);

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
                setIsInputValid(prevState => !prevState);
                setSelectedDate(dateObject);
            }
        }
    }


    const handleInputClear = () => {
        setEnteredDate("");
        handleInputReset();
    }

    return (
        <>
            <GlobalStyle />
            <DateContainer>
                <DateSelectorLabel>{label}</DateSelectorLabel>
                <DateSelectorContainer>
                    <DateSelectorInputWrapper>
                        <CalendarIcon onClick={handleCalendarClick} />
                        <DateSelectorInput placeholder='Choose date' value={enteredDate} onChange={handleInputChange} maxLength={10} isValid={isInputValid} />
                    </DateSelectorInputWrapper>
                    {enteredDate && <ClearIcon onClick={handleInputClear} />}
                </DateSelectorContainer >
            </DateContainer>
        </>
    )
}

export default memo(DateInput); 
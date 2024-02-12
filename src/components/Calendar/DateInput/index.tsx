import React, { useState } from 'react';
import { DateSelectorInput, DateSelectorContainer, DateSelectorInputWrapper } from './styled';
import CalendarIcon from '../../Icons/CalendarIcon';
import ClearIcon from '../../Icons/ClearIcon';

interface DateInputProps {
    value: Date | string;
    handleClick: () => void;
    handleInputReset: () => void;
    setSelectedDate: (date: Date) => void;
}

function DateInput({ value, handleClick, handleInputReset, setSelectedDate }: DateInputProps) {
    const [enteredDate, setEnteredDate] = useState(value instanceof Date ? value.toLocaleDateString() : "");

    const handleInputChange = (e) => {
        const regex = /^\d{2}\.\d{2}\.\d{4}$/;
        const newValue = e.target.value;
        setEnteredDate(newValue);
        if (regex.test(newValue)) {
            const dateParts = newValue.split('.');
            const day = parseInt(dateParts[0], 10);
            const month = parseInt(dateParts[1], 10) - 1;
            const year = parseInt(dateParts[2], 10);
            const dateObject = new Date(year, month, day);
            setSelectedDate(dateObject);
        }

    }

    return (
        <DateSelectorContainer>
            <DateSelectorInputWrapper>
                <CalendarIcon onClick={handleClick} />
                <DateSelectorInput placeholder='Enter date' value={enteredDate} onChange={handleInputChange} maxLength={10} />
            </DateSelectorInputWrapper>
            {enteredDate && <ClearIcon onClick={handleInputReset} />}
        </DateSelectorContainer >
    )
}

export default DateInput; 
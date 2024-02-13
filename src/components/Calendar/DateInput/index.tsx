import React, { useEffect, useState } from 'react';
import { DateSelectorInput, DateSelectorContainer, DateSelectorInputWrapper } from './styled';
import CalendarIcon from '../../Icons/CalendarIcon';
import ClearIcon from '../../Icons/ClearIcon';

interface DateInputProps {
    maxDate: Date;
    minDate: Date;
    value: Date;
    handleClick: () => void;
    handleInputReset: () => void;
    setSelectedDate: (date: Date) => void;
}

function DateInput({ maxDate, minDate, value, handleClick, handleInputReset, setSelectedDate }: DateInputProps) {
    const [enteredDate, setEnteredDate] = useState("");
    const [isInputValid, setIsInputValid] = useState(true);
    console.log(value);

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
            if (isValidDate(minDate, maxDate, year, month, day)) {
                const dateObject = new Date(year, month, day);
                setSelectedDate(dateObject);
                setIsInputValid(prevState => !prevState);
            }
        }
    }

    const isValidDate = (minDate: Date, maxDate: Date, year: number, month: number, day: number) => {
        const currentDate = new Date(year, month, day);

        return (
            currentDate >= minDate &&
            currentDate <= maxDate
        );
    };


    const handleInputClear = () => {
        handleInputReset();
        setEnteredDate("");
    }

    return (
        <DateSelectorContainer>
            <DateSelectorInputWrapper>
                <CalendarIcon onClick={handleClick} />
                <DateSelectorInput placeholder='Enter date' value={enteredDate} onChange={handleInputChange} maxLength={10} isValid={isInputValid} />
            </DateSelectorInputWrapper>
            {enteredDate && <ClearIcon onClick={handleInputClear} />}
        </DateSelectorContainer >
    )
}

export default DateInput; 
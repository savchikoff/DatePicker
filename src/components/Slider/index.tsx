import React from 'react';
import { SliderWrapper, DateContainer, Label } from './styled';
import NextIcon from '../Icons/NextIcon';
import PreviousIcon from '../Icons/PreviousIcon';

interface MonthSliderProps {
    handleNextDateOpen: (isByYear?: boolean, isByWeek?: boolean) => void;
    handlePreviousDateOpen: (isByYear?: boolean, isByWeek?: boolean) => void;
    currentDate: Date;
    isByYear: boolean;
    isByWeek: boolean;
}

function Slider({ handleNextDateOpen, handlePreviousDateOpen, currentDate, isByYear, isByWeek }: MonthSliderProps) {

    const handleNextMonthOpen = () => {
        if (isByWeek) {
            handleNextDateOpen(false, true);
        } else {
            handleNextDateOpen();
        }
    }

    const handlePreviousMonthOpen = () => {
        if (isByWeek) {
            handlePreviousDateOpen(false, true);
        } else {
            handlePreviousDateOpen();
        }
    }

    const handleNextYearOpen = () => {
        handleNextDateOpen(true);
    }

    const handlePreviousYearOpen = () => {
        handlePreviousDateOpen(true);
    }

    return (
        <SliderWrapper>
            <PreviousIcon onClick={handlePreviousMonthOpen} />
            <DateContainer>
                {isByYear && <PreviousIcon onClick={handlePreviousYearOpen} />}
                <Label>
                    {currentDate.toLocaleString('en-US', { month: 'long' })} {currentDate.getFullYear()}
                </Label>
                {isByYear && <NextIcon onClick={handleNextYearOpen} />}
            </DateContainer>
            <NextIcon onClick={handleNextMonthOpen} />
        </SliderWrapper>
    )
}

export default Slider;
import React from 'react';
import { SliderWrapper } from './styled';
import NextIcon from '../Icons/NextIcon';
import PreviousIcon from '../Icons/PreviousIcon';

interface MonthSliderProps {
    handlePreviousMonthOpen: () => void;
    handleNextMonthOpen: () => void;
    currentDate: Date;
}

function MonthSlider({ handlePreviousMonthOpen, handleNextMonthOpen, currentDate }: MonthSliderProps) {
    return (
        <SliderWrapper>
            <PreviousIcon onClick={handlePreviousMonthOpen} />
            <div>
                {currentDate.toLocaleString('en-US', { month: 'long' })} {currentDate.getFullYear()}
            </div>
            <NextIcon onClick={handleNextMonthOpen} />
        </SliderWrapper>
    )
}

export default MonthSlider;
import React from 'react';
import { SliderWrapper } from './styled';
import NextIcon from '../../Icons/NextIcon';
import PreviousIcon from '../../Icons/PreviousIcon';

interface MonthSlider {
    handlePreviousMonthOpen: () => void;
    handleNextMonthOpen: () => void;
    currentDate: Date;
}

function MonthSlider({ handlePreviousMonthOpen, handleNextMonthOpen, currentDate }) {
    return (
        <SliderWrapper>
            <PreviousIcon onClick={handlePreviousMonthOpen} />
            <div>
                {currentDate.toLocaleString('default', { month: 'long' })}, {currentDate.getFullYear()}
            </div>
            <NextIcon onClick={handleNextMonthOpen} />
        </SliderWrapper>
    )
}

export default MonthSlider;
import React from 'react';
import { SliderWrapper, DateContainer, Label } from './styled';
import { useCalendar } from '@/providers/CalendarProvider';
import withTheme from '@/decorators/withTheme';
import NextIcon from '../Icons/NextIcon';
import PreviousIcon from '../Icons/PreviousIcon';

interface MonthSliderProps {
    handleNextDateOpen: (isByYear?: boolean, isByWeek?: boolean) => void;
    handlePreviousDateOpen: (isByYear?: boolean, isByWeek?: boolean) => void;
    isByYear: boolean;
}

function Slider({ handleNextDateOpen, handlePreviousDateOpen, isByYear }: MonthSliderProps) {

    const { selectedYear, selectedMonth } = useCalendar();
    const currentMonthDate = new Date(selectedYear, selectedMonth + 1, 0);

    const handleNextMonthOpen = () => {
        handleNextDateOpen();
    }

    const handlePreviousMonthOpen = () => {
        handlePreviousDateOpen();
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
                    {currentMonthDate.toLocaleString('en-US', { month: 'long' })} {currentMonthDate.getFullYear()}
                </Label>
                {isByYear && <NextIcon onClick={handleNextYearOpen} />}
            </DateContainer>
            <NextIcon onClick={handleNextMonthOpen} />
        </SliderWrapper>
    )
}

export default withTheme(Slider);
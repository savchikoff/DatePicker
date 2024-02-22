import React, { useEffect } from 'react';
import { SliderWrapper, DateContainer, Label } from './styled';
import { useCalendar } from '@/providers/CalendarProvider';
import withTheme from '@/decorators/withTheme';
import NextIcon from '../Icons/NextIcon';
import PreviousIcon from '../Icons/PreviousIcon';

interface MonthSliderProps {
    isByYear?: boolean;
}

function Slider({ isByYear }: MonthSliderProps) {

    const { setSelectedYear, setSelectedMonth, selectedYear, selectedMonth } = useCalendar();
    const currentMonthDate = new Date(selectedYear, selectedMonth + 1, 0);

    useEffect(() => {
        console.log('fire');
    }, [selectedMonth, selectedYear]);

    const handlePreviousDateOpen = (isByYear?: boolean) => {
        if (isByYear) {
            setSelectedYear(selectedYear - 1);
        } else {
            setSelectedYear(selectedMonth === 0 ? selectedYear - 1 : selectedYear);
            setSelectedMonth(selectedMonth > 0 ? selectedMonth - 1 : 11);
        }
    };

    const handleNextDateOpen = (isByYear?: boolean) => {
        if (isByYear) {
            setSelectedYear(selectedYear + 1);
        } else {
            setSelectedYear(selectedMonth === 11 ? selectedYear + 1 : selectedYear);
            setSelectedMonth(selectedMonth < 11 ? selectedMonth + 1 : 0);
        }
    };

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
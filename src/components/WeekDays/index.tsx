import React from 'react';
import { WeekDay } from './styled';
import { WeekDaysProps } from './interfaces';
import { WEEK_DAYS } from '@/constants/weekDays';

function WeekDays({ isMondayFirst }: WeekDaysProps) {
    return (
        WEEK_DAYS[isMondayFirst ? 'Monday' : 'Sunday'].map((day) => (
            <WeekDay key={day}>{day}</WeekDay>
        ))
    )
}

export default WeekDays;
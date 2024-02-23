import React from 'react';

import { WEEK_DAYS } from '@/constants/weekDays';
import withTheme from '@/decorators/withTheme';

import { WeekDaysProps } from './interfaces';
import { WeekDay } from './styled';

function WeekDays({ isMondayFirst }: WeekDaysProps) {
    return (
        WEEK_DAYS[isMondayFirst ? 'Monday' : 'Sunday'].map((day, index) => (
            <WeekDay key={day} data-testid={`week-day-${index}`}>{day}</WeekDay>
        ))
    )
}

export default withTheme(WeekDays);
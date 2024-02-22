import React from 'react';

import { WEEK_DAYS } from '@/constants/weekDays';
import withTheme from '@/decorators/withTheme';

import { WeekDaysProps } from './interfaces';
import { WeekDay } from './styled';

function WeekDays({ isMondayFirst }: WeekDaysProps) {
    return (
        WEEK_DAYS[isMondayFirst ? 'Monday' : 'Sunday'].map((day) => (
            <WeekDay key={day}>{day}</WeekDay>
        ))
    )
}

export default withTheme(WeekDays);
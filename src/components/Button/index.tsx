import React from 'react'

import withTheme from '@/decorators/withTheme';

import { ButtonProps } from './interfaces';
import { DefaultButton } from './styled';

function Button({ label, onClick }: ButtonProps) {
    return (
        <DefaultButton onClick={onClick}>{label}</DefaultButton>

    )
}

export default withTheme(Button);
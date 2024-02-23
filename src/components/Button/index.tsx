import React, { memo } from 'react'

import withTheme from '@/decorators/withTheme';

import { ButtonProps } from './interfaces';
import { DefaultButton } from './styled';

function Button({ label, onClick }: ButtonProps) {
    return (
        <DefaultButton onClick={onClick} data-testid="button" >{label}</DefaultButton>

    )
}

export default memo(withTheme(Button));
import React from 'react'
import { DefaultButton } from './styled';
import { ButtonProps } from './interfaces';
import withTheme from '@/decorators/withTheme';

function Button({ label, onClick }: ButtonProps) {
    return (
        <>
            <DefaultButton onClick={onClick}>{label}</DefaultButton>
        </>

    )
}

export default withTheme(Button);
import React from 'react'
import { DefaultButton } from './styled';
import { ButtonProps } from './interfaces';
import GlobalStyle from '@/GlobalStyles/styled';
import { withTheme } from 'styled-components';

function Button({ label, onClick }: ButtonProps) {
    return (
        <>
            <DefaultButton onClick={onClick}>{label}</DefaultButton>
        </>

    )
}

export default withTheme(Button);
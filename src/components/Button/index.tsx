import React from 'react'
import { DefaultButton } from './styled';
import { ButtonProps } from './interfaces';
import GlobalStyle from '@/GlobalStyles/styled';

export default function Button({ label, onClick }: ButtonProps) {
    return (
        <>
            <GlobalStyle />
            <DefaultButton onClick={onClick}>{label}</DefaultButton>
        </>

    )
}
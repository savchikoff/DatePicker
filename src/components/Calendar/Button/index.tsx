import React from 'react'
import { DefaultButton } from './styled';
import GlobalStyle from '../../../GlobalStyles/styled';

export default function Button({ children, onClick }) {
    return (
        <>
            <GlobalStyle />
            <DefaultButton onClick={onClick}>{children}</DefaultButton>
        </>

    )
}
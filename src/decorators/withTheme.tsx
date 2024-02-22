import React, { ComponentType, FC } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@/GlobalStyles/styled";
import theme from "@/theme/theme";

const withTheme = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
    function ComponentWithTheme(props: P) {
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <WrappedComponent {...props} />
            </ThemeProvider>
        );
    }

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithTheme.displayName = `withTheme(${displayName})`;

    return ComponentWithTheme;
};

export default withTheme;

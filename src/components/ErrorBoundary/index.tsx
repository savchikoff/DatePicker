import React, { Component } from "react";

import { ErrorContainer, ErrorMessage } from "./styled";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./interfaces";

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState>{
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: undefined
        }
    }

    static getDerivedStateFromError(error: Error) {
        return {
            hasError: true,
            error
        }
    }

    render() {
        const { hasError, error } = this.state;
        const { children } = this.props;

        if (hasError || error) {
            return (
                <ErrorContainer>
                    <ErrorMessage>Something went wrong with the layout</ErrorMessage>
                </ErrorContainer>
            )
        }

        return children;
    }
}
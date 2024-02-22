import React, { Component } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./interfaces";
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
        error: Error;
    };
    render(): string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element;
}

import React, { ComponentType, FC } from "react";
interface WithTodosProps {
    isWithTodos: boolean;
}
declare const withTodos: <P extends object>(WrappedComponent: React.ComponentType<P & WithTodosProps>) => React.FC<P>;
export default withTodos;

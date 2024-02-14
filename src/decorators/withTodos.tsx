import React, { ComponentType, FC, useState } from "react";
import Button from "../components/Button";

interface WithTodosProps {
    isWithTodos: boolean;
}

const withTodos = <P extends object>(WrappedComponent: ComponentType<P & WithTodosProps>): FC<P> => {
    const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);
    const ComponentWithWeekends = (props: P) => {
        return (
            <>
                <WrappedComponent {...props} isWithTodos />
                <Button label="Add todo" />
            </>)
    }

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithWeekends.displayName = `withTodos(${displayName})`;

    return ComponentWithWeekends;
};

export default withTodos;
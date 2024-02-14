import React, { ComponentType, FC } from "react";

const withWeekends = <P extends object>(WrappedComponent): FC<P> => {
    const ComponentWithWeekends = (props: P) => {
        return <WrappedComponent {...props} isWeekDaysHighlighted />
    }

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithWeekends.displayName = `withWeekends(${displayName})`;

    return ComponentWithWeekends;
};

export default withWeekends;
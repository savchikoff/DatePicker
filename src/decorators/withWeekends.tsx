import React, { ComponentType, FC } from "react";

const withWeekends = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
    function ComponentWithWeekends(props: P) {
        return <WrappedComponent {...props} isWeekDaysHighlighted />
    }

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithWeekends.displayName = `withWeekends(${displayName})`;

    return ComponentWithWeekends;
};

export default withWeekends;
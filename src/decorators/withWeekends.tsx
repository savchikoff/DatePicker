import React, { ComponentType, FC } from "react";

interface WithWeekendsProps {
    isWeekDaysHighlighted: boolean;
}

const withWeekends = <P extends object>(WrappedComponent: ComponentType<P & WithWeekendsProps>): FC<P> => {
    function ComponentWithWeekends(props: P) {
        return <WrappedComponent {...props} isWeekDaysHighlighted />
    }

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithWeekends.displayName = `withWeekends(${displayName})`;

    return ComponentWithWeekends;
};

export default withWeekends;
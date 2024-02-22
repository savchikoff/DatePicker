import React, { ComponentType, FC } from "react";

const withHolidays = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
    function ComponentWithHolidays(props: P) {
        return <WrappedComponent {...props} isHolidaysHighlighted />
    }

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithHolidays.displayName = `withHolidays(${displayName})`;

    return ComponentWithHolidays;
};

export default withHolidays;
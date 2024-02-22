import React, { ComponentType, FC } from "react";

interface WithHolidaysProps {
    isHolidaysHighlighted: boolean;
}

const withHolidays = <P extends object>(WrappedComponent: ComponentType<P & WithHolidaysProps>): FC<P> => {
    function ComponentWithHolidays(props: P) {
        return <WrappedComponent {...props} isHolidaysHighlighted />
    }

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithHolidays.displayName = `withHolidays(${displayName})`;

    return ComponentWithHolidays;
};

export default withHolidays;
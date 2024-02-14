import React, { ComponentType, FC } from "react";

interface WithMondayFirstProps {
    isMondayFirst: boolean;
}

const withMondayFirst = <P extends object>(WrappedComponent: ComponentType<P & WithMondayFirstProps>): FC<P> => {
    function ComponentWithWeekends(props: P) {
        return <WrappedComponent {...props} isMondayFirst />
    }

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithWeekends.displayName = `withMondayFirst(${displayName})`;

    return ComponentWithWeekends;
};

export default withMondayFirst;
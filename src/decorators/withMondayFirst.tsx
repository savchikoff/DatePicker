import React, { ComponentType, FC } from "react";

const withMondayFirst = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
    function ComponentWithMondayFirst(props: P) {
        return <WrappedComponent {...props} isMondayFirst />
    }

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithMondayFirst.displayName = `withMondayFirst(${displayName})`;

    return ComponentWithMondayFirst;
};

export default withMondayFirst;
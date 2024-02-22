import React, { ComponentType, FC } from "react";

interface WithMondayFirstProps {
    isMondayFirst: boolean;
}

const withMondayFirst = <P extends object>(WrappedComponent: ComponentType<P & WithMondayFirstProps>): FC<P> => {
    function ComponentWithMondayFirst(props: P) {
        return <WrappedComponent {...props} isMondayFirst />
    }

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithMondayFirst.displayName = `withMondayFirst(${displayName})`;

    return ComponentWithMondayFirst;
};

export default withMondayFirst;
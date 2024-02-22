import React, { ComponentType, FC } from "react";
interface WithMondayFirstProps {
    isMondayFirst: boolean;
}
declare const withMondayFirst: <P extends object>(WrappedComponent: React.ComponentType<P & WithMondayFirstProps>) => React.FC<P>;
export default withMondayFirst;

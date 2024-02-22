import React, { ComponentType, FC } from "react";
interface WithWeekendsProps {
    isWeekDaysHighlighted: boolean;
}
declare const withWeekends: <P extends object>(WrappedComponent: React.ComponentType<P & WithWeekendsProps>) => React.FC<P>;
export default withWeekends;

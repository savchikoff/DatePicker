import React, { ComponentType, FC } from "react";
interface WithHolidaysProps {
    isHolidaysHighlighted: boolean;
}
declare const withHolidays: <P extends object>(WrappedComponent: React.ComponentType<P & WithHolidaysProps>) => React.FC<P>;
export default withHolidays;

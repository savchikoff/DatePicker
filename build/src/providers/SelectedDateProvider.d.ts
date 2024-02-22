import React from "react";
interface ISelectedDateContext {
    selectedDate?: Date;
    setSelectedDate: (date: Date) => void;
}
export declare const SelectedDateContext: React.Context<ISelectedDateContext>;
export declare const useSelectedDate: () => ISelectedDateContext;
export {};

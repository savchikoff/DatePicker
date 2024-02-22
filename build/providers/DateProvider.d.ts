import React from "react";
interface IDateContext {
    minDate: Date;
    maxDate: Date;
}
export declare const DateContext: React.Context<IDateContext>;
export declare const useDate: () => IDateContext;
export {};

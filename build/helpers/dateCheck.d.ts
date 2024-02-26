import { IHolidays } from '../constants/holidays';
export declare const isWeekend: (day: number, selectedYear: number, selectedMonth: number) => boolean;
export declare const isHoliday: (day: number, month: number, year: number, holidays: IHolidays[]) => boolean;
export declare const isDatesEqual: (day: number, selectedMonth: number, selectedYear: number, selectedDate: Date) => boolean;
export declare const isOutOfRange: (day: number, selectedMonth: number, selectedYear: number, minDate: Date, maxDate: Date) => boolean;

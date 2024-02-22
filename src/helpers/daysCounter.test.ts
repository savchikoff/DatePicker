import { firstDayOfTheMonth, monthDays, prevMonthDays } from "./daysCounter";

describe('monthDays', () => {
    it('should return the number of days in a month', () => {
        expect(monthDays(2024, 1)).toBe(29);
    });

});

describe('firstDayOfTheMonth', () => {
    it('should return the first day of the month', () => {
        expect(firstDayOfTheMonth(2024, 1)).toBe(4);
    });
});

describe('prevMonthDays', () => {
    it('should return an array of previous month days', () => {
        expect(prevMonthDays(2024, 1, 4, false)).toEqual([28, 29, 30, 31]);
        expect(prevMonthDays(2024, 1, 4, true)).toEqual([29, 30, 31]);
        expect(prevMonthDays(2024, 0, 0, false)).toEqual([]);
    });
});
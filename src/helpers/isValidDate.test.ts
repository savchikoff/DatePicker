import { isValidDate } from "./isValidDate";

describe('isValidDate', () => {
    it('should return true for a valid date within the range in 2024', () => {
        const minDate = new Date(2024, 0, 1);
        const maxDate = new Date(2024, 11, 31);

        expect(isValidDate(2024, 5, 15, minDate, maxDate)).toBe(true);
    });

    it('should return true for a date before the minDate because maxDate isn`t specified', () => {
        const minDate = new Date(2024, 2, 1);

        expect(isValidDate(2024, 1, 15, minDate)).toBe(true);
    });

    it('should return true for a date after the maxDate because minDate is undefined', () => {
        const maxDate = new Date(2024, 9, 31);

        expect(isValidDate(2024, 11, 15, undefined, maxDate)).toBe(true);
    });

    it('should return true for a valid date without a range specified in 2024', () => {
        expect(isValidDate(2024, 7, 25)).toBe(true);
    });
});

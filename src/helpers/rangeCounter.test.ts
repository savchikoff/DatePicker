import { isEndDate, isInRange,isStartDate } from "./rangeCounter";

describe('isStartDate', () => {
    it('should return true for a matching start date', () => {
        const startDate = new Date(2024, 3, 15);
        expect(isStartDate(startDate, 15, 2024, 3)).toBe(true);
    });

    it('should return false for a non-matching start date', () => {
        const startDate = new Date(2024, 5, 20);
        expect(isStartDate(startDate, 15, 2024, 3)).toBe(false);
    });

    it('should return false when startDate is undefined', () => {
        expect(isStartDate(undefined, 15, 2024, 3)).toBe(false);
    });
});

describe('isEndDate', () => {
    it('should return true for a matching end date', () => {
        const endDate = new Date(2024, 7, 25);
        expect(isEndDate(endDate, 25, 2024, 7)).toBe(true);
    });

    it('should return false for a non-matching end date', () => {
        const endDate = new Date(2024, 9, 10);
        expect(isEndDate(endDate, 15, 2024, 8)).toBe(false);
    });

    it('should return false when endDate is undefined', () => {
        expect(isEndDate(undefined, 15, 2024, 8)).toBe(false);
    });
});

describe('isInRange', () => {
    it('should return true for a date within the range', () => {
        const startDate = new Date(2024, 2, 1);
        const endDate = new Date(2024, 4, 31);
        const targetDate = new Date(2024, 3, 15);

        expect(isInRange(startDate, endDate, 15, 2024, 3)).toBe(true);
        expect(isInRange(startDate, endDate, 1, 2024, 2)).toBe(true);
        expect(isInRange(startDate, endDate, 31, 2024, 4)).toBe(true);
    });

    it('should return false for a date outside the range', () => {
        const startDate = new Date(2024, 2, 1);
        const endDate = new Date(2024, 4, 31);
        const targetDate = new Date(2024, 1, 15);

        expect(isInRange(startDate, endDate, 15, 2024, 1)).toBe(false);
        expect(isInRange(startDate, endDate, 1, 2024, 0)).toBe(false);
        expect(isInRange(startDate, endDate, 31, 2024, 5)).toBe(false);
    });

    it('should return false when startDate or endDate is undefined', () => {
        const endDate = new Date(2024, 4, 31);
        expect(isInRange(undefined, endDate, 15, 2024, 3)).toBe(false);
        expect(isInRange(new Date(2024, 2, 1), undefined, 15, 2024, 3)).toBe(false);
        expect(isInRange(undefined, undefined, 15, 2024, 3)).toBe(false);
    });
});

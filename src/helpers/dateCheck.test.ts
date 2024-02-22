import { HOLIDAYS } from "@/constants/holidays";

import { isDatesEqual,isHoliday, isWeekend } from "./dateCheck";

describe('isWeekend', () => {
    it('should return true for Sunday', () => {
        expect(isWeekend(3, 2024, 1)).toBe(true);
    });

    it('should return false for Monday', () => {
        expect(isWeekend(6, 2024, 1)).toBe(false);
    });
});

describe('isHoliday', () => {
    it('should return true for a holiday', () => {
        expect(isHoliday(1, 0, 2024, HOLIDAYS)).toBe(true);
    });

    it('should return false for a non-holiday', () => {
        expect(isHoliday(3, 0, 2024, HOLIDAYS)).toBe(false);
    });
});

describe('isDatesEqual', () => {
    it('should return true for equal dates', () => {
        const selectedDate = new Date(2024, 0, 1);
        expect(isDatesEqual(1, 0, 2024, selectedDate)).toBe(true);
    });

    it('should return false for different dates', () => {
        const selectedDate = new Date(2024, 0, 2);
        expect(isDatesEqual(1, 0, 2024, selectedDate)).toBe(false);
    });
});
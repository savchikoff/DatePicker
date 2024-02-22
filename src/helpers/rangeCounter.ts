export const isStartDate = (startDate: Date, day: number, year: number, month: number) => startDate &&
        startDate.getFullYear() === year &&
        startDate.getMonth() === month &&
        startDate.getDate() === day

export const isEndDate = (endDate: Date, day: number, year: number, month: number) => endDate && endDate.getFullYear() === year &&
        endDate.getMonth() === month &&
        endDate.getDate() === day

export const isInRange = (startDate: Date, endDate: Date, day: number, year: number, month: number) => {
    const targetDate = new Date(year, month, day);
    return startDate && endDate && targetDate >= startDate && targetDate <= endDate;
};
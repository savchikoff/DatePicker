export const isValidDate = (year: number, month: number, day: number, minDate?: Date, maxDate?: Date) => {
    const currentDate = new Date(year, month, day);
    if (minDate && maxDate) {
        return (
            currentDate >= minDate &&
            currentDate <= maxDate
        );
    }
    return true;
};
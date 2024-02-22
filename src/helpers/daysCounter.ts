export const monthDays = (selectedYear: number, selectedMonth: number) => new Date(
        selectedYear,
        selectedMonth + 1,
        0
    ).getDate();

export const firstDayOfTheMonth = (selectedYear: number, selectedMonth: number) => new Date(
        selectedYear,
        selectedMonth,
        1
    ).getDay()

export const prevMonthDays = (selectedYear: number, selectedMonth: number, firstDayOfMonth: number, isMondayFirst: boolean) => Array.from({ length: firstDayOfMonth === 0 && isMondayFirst ? 6 : firstDayOfMonth - (isMondayFirst ? 1 : 0) }, (_, i) => {
        const prevMonthLastDay = new Date(
            selectedYear,
            selectedMonth,
            0
        ).getDate();

        const day = isMondayFirst ? prevMonthLastDay - firstDayOfMonth + i + 2 : prevMonthLastDay - firstDayOfMonth + i + 1;

        return day > prevMonthLastDay ? day - prevMonthLastDay : day;
    })
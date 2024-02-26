import { readFromCache } from "./cache";

export const isDayWithTodos = (day: number, selectedYear: number, selectedMonth: number) => {
    const date = new Date(selectedYear, selectedMonth, day).toLocaleDateString();
    const todos = readFromCache(date);
    return todos && todos.length > 0;
};
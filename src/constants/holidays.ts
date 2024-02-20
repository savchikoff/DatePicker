export interface IHolidays {
    name: string;
    date: Date;
}

export const HOLIDAYS: IHolidays[] = [
    {
        name: "New Year's Day",
        date: new Date("2024-01-01")
    },
    {
        name: "New Year's Day",
        date: new Date("2024-01-02")
    },
    {
        name: "Christmas (Orthodox)",
        date: new Date("2024-01-07")
    },
    {
        name: "Women's Day",
        date: new Date("2024-03-08")
    },
    {
        name: "Labour Day",
        date: new Date("2024-05-01")
    },
    {
        name: "Victory Day",
        date: new Date("2024-05-09")
    },
    {
        name: "Radunitsa",
        date: new Date("2024-05-14")
    },
    {
        name: "Independence Day of the Republic of Belarus",
        date: new Date("2024-07-03")
    },
    {
        name: "October Revolution Day",
        date: new Date("2024-11-07")
    },
    {
        name: "Christmas (Catholic)",
        date: new Date("2024-12-25")
    }

]
import DatePickerWithRange from ".";

export default {
    title: 'Calendar/DatePickerWithRange',
    component: DatePickerWithRange,
    parameters: {
        layout: 'centered',
    }
};

export const BasicInput = {
    args: {
        minDate: new Date(2024, 1, 10),
        maxDate: new Date(2024, 2, 30)
    }
};
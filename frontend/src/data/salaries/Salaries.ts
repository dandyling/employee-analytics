import { LocationSalaries, SalaryData } from "./SalaryData";

export const calcSalariesByLocation = (
    data: SalaryData[]
): LocationSalaries => {
    const initialized = data.reduce((locations: LocationSalaries, d) => {
        const initSalaries = {
            current: 0,
            previous: 0,
            count: 0,
        };
        locations[d.location] = initSalaries;
        return locations;
    }, {});

    const locationSalaries = data.reduce((locations: LocationSalaries, d) => {
        const { location, currSalary, prevSalary } = d;
        const salaries = locations[location];
        salaries.current = salaries.current + parseSalary(currSalary);
        salaries.previous = salaries.previous + parseSalary(prevSalary);
        salaries.count++;
        locations[location] = salaries;
        return locations;
    }, initialized);

    return locationSalaries;
};

export const parseSalary = (salary: string): number => {
    const numericStr = salary.replace("$", "");
    const numeric = parseFloat(numericStr);
    return numeric;
};

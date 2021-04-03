
export interface SalaryData {
    firstName: string;
    lastName: string;
    location: string;
    prevSalary: string;
    currSalary: string;
    org: string;
}

interface Salaries {
    current: number;
    previous: number;
    count: number;
}

export interface LocationSalaries {
    [location: string]: Salaries;
}

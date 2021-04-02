import { atom, selector } from "recoil";
import * as data from "./EmployeeDataset.json";

export interface Data {
    firstName: string;
    lastName: string;
    location: string;
    prevSalary: string;
    currSalary: string;
    org: string;
}

interface AggregateSalaries {
    current: number;
    previous: number;
    count: number;
}

export interface Aggregates {
    [location: string]: AggregateSalaries;
}

export const getAggregates = (data: Data[]): Aggregates => {
    const initialized = data.reduce((locations: Aggregates, d) => {
        const initSalaries = {
            current: 0,
            previous: 0,
            count: 0,
        };
        locations[d.location] = initSalaries;
        return locations;
    }, {});

    const locationAggregates = data.reduce((locations: Aggregates, d) => {
        const salaries = locations[d.location];
        salaries.current = salaries.current + parseSalary(d.currSalary);
        salaries.previous = salaries.previous + parseSalary(d.prevSalary);
        salaries.count++;
        locations[d.location] = salaries;
        return locations;
    }, initialized);

    return locationAggregates;
};

export const parseSalary = (salary: string): number => {
    const numericStr = salary.replace("$", "");
    const numeric = parseFloat(numericStr);
    return numeric;
};

export const dataState = atom<Data[]>({
    key: "dataState",
    default: (data as any).default
})

export const aggregateState = selector({
    key: "aggregateState",
    get: ({ get }) => {
        const data = get(dataState)
        return getAggregates(data)
    }
})

export const initialFilterState = selector({
    key: "initialFilterState",
    get: ({ get }) => {
        const aggregate = get(aggregateState)
        const initial = Object.keys(aggregate).reduce((all: any, l) => {
            all[l] = true
            return all
        }, {})
        return initial
    }
})

export const filterState = atom<Record<string, boolean>>({
    key: "filterState",
    default: {}
})

export const aggregateFilteredState = selector({
    key: "aggregateFilteredState",
    get: ({ get }) => {
        const data = get(aggregateState)
        const filter = get(filterState)
        const filteredData: Aggregates = Object.keys(filter).reduce((all: Aggregates, l) => {
            const isEnabled = filter[l]
            if (isEnabled) {
                const locationData = data[l]
                all[l] = locationData
            }
            return all
        }, {})
        return filteredData
    }
})

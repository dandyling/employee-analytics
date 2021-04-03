import { atom, selector } from "recoil";
import { LocationSalaries, SalaryData } from "./Employee";
import * as data from "./EmployeeDataset.json";
import { filterState } from "./FilterState";
import { calcSalariesByLocation } from "./Salaries";

export const salaryDataState = atom<SalaryData[]>({
  key: "salaryDataState",
  default: (data as any).default,
});

export const salariesState = selector({
  key: "salariesState",
  get: ({ get }) => {
    const salaryData = get(salaryDataState);
    return calcSalariesByLocation(salaryData);
  },
});

export const salariesFilteredState = selector({
  key: "salariesFilteredState",
  get: ({ get }) => {
    const salaries = get(salariesState);
    const filter = get(filterState);
    const filteredLocations = Object.keys(filter).reduce(
      (all: LocationSalaries, l) => {
        const isEnabled = filter[l];
        if (isEnabled) {
          const data = salaries[l];
          all[l] = data;
        }
        return all;
      },
      {}
    );
    return filteredLocations;
  },
});



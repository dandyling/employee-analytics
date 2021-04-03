import { atom, selector } from "recoil";
import { LocationSalaries, SalaryData } from "./SalaryData";
import data from "./../../stubs/EmployeeDataset.json";
import { calcSalariesByLocation } from "./Salaries";
import { filterState } from "./../filter/FilterState";

export const salaryDataState = atom<SalaryData[]>({
  key: "salaryDataState",
  default: data,
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



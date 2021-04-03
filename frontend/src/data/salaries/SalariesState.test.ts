import { snapshot_UNSTABLE } from "recoil";
import { salariesFilteredState, salariesState, salaryDataState } from "./SalariesState";
import dummyData from "./../../stubs/SmallEmployeeDataset.json";
import { SalaryData } from "./SalaryData";
import { testResult } from "./Salaries.test";
import { filterState } from "./../filter/FilterState";

test('salariesState calculate salary by location correctly', () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) => set(salaryDataState, dummyData as SalaryData[]));
    expect(testSnapshot.getLoadable(salariesState).valueOrThrow()).toEqual(testResult);
})

test('salariesStateFiltered filters correctly', () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) => {
        set(salaryDataState, dummyData as SalaryData[])
        set(filterState, { China: true });
    });
    expect(testSnapshot.getLoadable(salariesFilteredState).valueOrThrow()).toEqual({
        "China": {
            "count": 2,
            "current": 12999.14,
            "previous": 21025.32
        }
    })
})

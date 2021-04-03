import { snapshot_UNSTABLE } from "recoil";
import { initialFilterState } from "./FilterState";
import dummyData from "../../stubs/SmallEmployeeDataset.json";
import { SalaryData } from "../salaries/SalaryData";
import { salaryDataState } from "../salaries/SalariesState";

test('the initial filter state is calculated correctly', () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) => {
        set(salaryDataState, dummyData as SalaryData[])
    });
    expect(testSnapshot.getLoadable(initialFilterState).valueOrThrow()).toEqual({
        "China": true,
        "Japan": true,
    })
})

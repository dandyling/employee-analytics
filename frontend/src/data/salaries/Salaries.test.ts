import { SalaryData } from "./SalaryData"
import { calcSalariesByLocation, parseSalary } from "./Salaries"
import dummyData from "../../stubs/SmallEmployeeDataset.json";

export const testResult = {
    China: {
        previous: 21025.32,
        current: 12999.14,
        count: 2
    },
    Japan: {
        previous: 10015.23,
        current: 6632.52,
        count: 1
    }
}

test("calculate salary by location correctly", () => {
    expect(calcSalariesByLocation(dummyData as SalaryData[])).toEqual(testResult)
})

test("calculate empty array correctly", () => {
    expect(calcSalariesByLocation([])).toEqual({})
})

test("parse salary correctly", () => {
    expect(parseSalary("$1234.56")).toEqual(1234.56)
})

test("parse non dollar sign correctly", () => {
    expect(parseSalary("1234.56")).toEqual(1234.56)
})

test("parse large numbers correctly", () => {
    expect(parseSalary("$123123123123123123123123123123123123.00")).toEqual(123123123123123123123123123123123123.00)
})
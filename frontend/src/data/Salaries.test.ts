import { SalaryData } from "./Employee"
import { calcSalariesByLocation, parseSalary } from "./Salaries"

const testEmployees: SalaryData[] = [{
    "firstName": "Nancee",
    "lastName": "Ramsdell",
    "location": "China",
    "prevSalary": "$11010.09",
    "currSalary": "$6366.62",
    "org": "IT Support"
},
{
    "firstName": "Karola",
    "lastName": "Rigardeau",
    "location": "China",
    "prevSalary": "$10015.23",
    "currSalary": "$6632.52",
    "org": "Technology"
}, {
    "firstName": "Karola",
    "lastName": "Rigardeau",
    "location": "Japan",
    "prevSalary": "$10015.23",
    "currSalary": "$6632.52",
    "org": "Technology"
},]

test("calculate salary by location correctly", () => {
    expect(calcSalariesByLocation(testEmployees)).toEqual({
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
    })
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
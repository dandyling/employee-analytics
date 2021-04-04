import React from "react";
import {
  calcTotalSalaries,
  getAllLocationRows,
  getSalaryStr,
  mapLocationRows,
  mapTableRows,
  SalaryTable,
} from "./SalaryTable";
import locationSalaries from "./../../stubs/LocationSalaries.json";
import locationRow from "./../../stubs/LocationRow.json";
import totalLocationRow from "./../../stubs/TotalLocationRow.json";

test("renders correctly", () => {
  const wrapper = <SalaryTable />;
  expect(wrapper).toMatchSnapshot();
});

test("map location rows correctly", () => {
  expect(mapLocationRows(locationSalaries)).toEqual(locationRow);
});

test("map empty location salaries correctly", () => {
  expect(mapLocationRows({})).toEqual([]);
});

test("calculate total correctly", () => {
  const total = {
    location: "Total",
    current: 52105.06184559034,
    previous: 52820.406048701305,
  };
  expect(calcTotalSalaries(locationRow)).toEqual(total);
});

test("map total rows correctly", () => {
  expect(getAllLocationRows(locationSalaries)).toEqual(totalLocationRow);
});

test("map total table rows correctly", () => {
  const locationRows = getAllLocationRows(locationSalaries);
  const wrapper = mapTableRows(locationRows);
  expect(wrapper).toMatchSnapshot();
});

test("get salary string format is correct", () => {
  expect(getSalaryStr(1000.23)).toEqual("$1,000");
});

test("get salary string format for 0 is correct", () => {
  expect(getSalaryStr(0)).toEqual("$0");
});

test("get salary string format for negative salary is correct", () => {
  expect(getSalaryStr(-1000.23)).toEqual("-$1,000");
});

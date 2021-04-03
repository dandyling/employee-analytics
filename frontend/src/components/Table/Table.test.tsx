import { render } from "@testing-library/react";
import React from "react";
import { Table } from "./Table";

const testColumns = ["Column 1", "Column 2", "Column 3"];
const testRows = [
  { "Column 1": 100, "Column 2": 101, "Column 3": 102 },
  { "Column 1": 200, "Column 2": 201, "Column 3": 202 },
];

test("renders number of rows and columns correctly", () => {
  const { container } = render(<Table columns={testColumns} rows={testRows} />);
  const tr = container.getElementsByTagName("tr");
  expect(tr.length).toEqual(3);
  const td = container.getElementsByTagName("td");
  expect(td.length).toEqual(9);
});

test("renders table header when no rows are passed", () => {
  const { container } = render(<Table columns={testColumns} rows={[]} />);
  const tr = container.getElementsByTagName("tr");
  expect(tr.length).toEqual(1);
  const td = container.getElementsByTagName("td");
  expect(td.length).toEqual(3);
});

test("does not render when columns are not passed", () => {
  const { container } = render(<Table columns={[]} rows={testRows} />);
  const tr = container.getElementsByTagName("tr");
  expect(tr.length).toEqual(0);
  const td = container.getElementsByTagName("td");
  expect(td.length).toEqual(0);
});

test("renders correctly", () => {
  const wrapper = <Table columns={testColumns} rows={testRows} />;
  expect(wrapper).toMatchSnapshot();
});

import { render, screen } from "@testing-library/react";
import React from "react";
import { DeltaChip, getDelta, getDeltaVariant } from "./DeltaChip";

test("renders correctly", () => {
  const wrapper = <DeltaChip previous={2} current={1} />;
  expect(wrapper).toMatchSnapshot();
});

test("if it calculate percentage correctly", () => {
  render(<DeltaChip previous={1} current={1.5} />);
  const childElement = screen.getByText(/50%/i);
  expect(childElement).toBeInTheDocument();
});

test("does not renders anything if passed 0", () => {
  const { container } = render(<DeltaChip previous={0} current={1} />);
  expect(container.firstChild).toBeNull();
});

test("getDelta returns null if dividy by zero", () => {
  expect(getDelta(0, 1)).toBeNull();
});

test("returns success color if delta > 0", () => {
  expect(getDeltaVariant(0.1)).toEqual("success");
});

test("returns normal color if delta === 0", () => {
  expect(getDeltaVariant(0)).toEqual("normal");
});

test("returns warning color if delta < 0", () => {
  expect(getDeltaVariant(-0.1)).toEqual("warning");
});

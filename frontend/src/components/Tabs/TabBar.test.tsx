import { render, screen } from "@testing-library/react";
import React from "react";
import { TabBar, TabHeader } from "./TabBar";

const testTabs: TabHeader[] = [{ tabName: "Tab 1" }, { tabName: "Tab 2" }];

test("renders label on tabs", () => {
  render(<TabBar tabs={testTabs} onChange={() => {}} selected={0} />);
  const tabElement1 = screen.getByText(/Tab 1/i);
  expect(tabElement1).toBeInTheDocument();
  const tabElement2 = screen.getByText(/Tab 2/i);
  expect(tabElement2).toBeInTheDocument();
});

test("does not render when tabs is an empty array", () => {
  const { container } = render(
    <TabBar tabs={[]} onChange={() => {}} selected={0} />
  );
  expect(container.firstChild).toBeEmptyDOMElement();
});

test("renders correctly", () => {
  const wrapper = <TabBar tabs={testTabs} onChange={() => {}} selected={0} />;
  expect(wrapper).toMatchSnapshot();
});

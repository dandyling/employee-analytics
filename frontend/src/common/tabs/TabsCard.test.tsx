import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Tab, TabsCard } from "./TabsCard";

const testTabs: Tab[] = [
  { tabName: "Tab 1", tabContent: <div>Tab Content 1</div> },
  { tabName: "Tab 2", tabContent: <div>Tab Content 2</div> },
];

test("renders tab headers and tab contents", () => {
  render(<TabsCard tabs={testTabs} />);
  const tab1 = screen.getByText(/Tab 1/i);
  expect(tab1).toBeInTheDocument();
  const tab2 = screen.getByText(/Tab 2/i);
  expect(tab2).toBeInTheDocument();
  const tabContent1 = screen.getByText(/Tab Content 1/i);
  expect(tabContent1).toBeInTheDocument();
});

test("changes tab when clicked", () => {
  render(<TabsCard tabs={testTabs} />);
  const tab1 = screen.getByText(/Tab 2/i);
  fireEvent.click(tab1);
  const tabContent2 = screen.getByText(/Tab Content 2/i);
  expect(tabContent2).toBeInTheDocument();
});

test("renders correctly", () => {
  const wrapper = <TabsCard tabs={testTabs} />;
  expect(wrapper).toMatchSnapshot();
});

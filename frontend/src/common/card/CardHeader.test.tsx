import { render, screen } from "@testing-library/react";
import React from "react";
import { CardHeader } from "./CardHeader";

test("renders string", () => {
  render(<CardHeader>String</CardHeader>);
  const childElement = screen.getByText(/String/i);
  expect(childElement).toBeInTheDocument();
});

test("renders number", () => {
  render(<CardHeader>1.23</CardHeader>);
  const childElement = screen.getByText(/1.23/i);
  expect(childElement).toBeInTheDocument();
});

test("renders empty child", () => {
  const { container } = render(<CardHeader></CardHeader>);
  expect(container.firstChild).toBeEmptyDOMElement();
});

test("renders empty child for null", () => {
  const { container } = render(<CardHeader>{null}</CardHeader>);
  expect(container.firstChild).toBeEmptyDOMElement();
});

test("renders empty child for undefined", () => {
  const { container } = render(<CardHeader>{undefined}</CardHeader>);
  expect(container.firstChild).toBeEmptyDOMElement();
});

test("renders react node", () => {
  render(
    <CardHeader>
      <div>node</div>
    </CardHeader>
  );
  const nodeElement = screen.getByText(/node/i);
  expect(nodeElement).toBeInTheDocument();
});

test("renders card header background color", () => {
  const { container } = render(<CardHeader>Test</CardHeader>);
  expect(container.firstChild).toHaveClass("bg-brand");
});

test("renders correctly", () => {
  const wrapper = (
    <CardHeader>
      <div>node</div>
    </CardHeader>
  );
  expect(wrapper).toMatchSnapshot();
});

import { render, screen } from "@testing-library/react";
import React from "react";
import { Card } from "./Card";

test("renders string", () => {
  render(<Card>String</Card>);
  const childElement = screen.getByText(/String/i);
  expect(childElement).toBeInTheDocument();
});

test("renders number", () => {
  render(<Card>1.23</Card>);
  const childElement = screen.getByText(/1.23/i);
  expect(childElement).toBeInTheDocument();
});

test("renders empty child", () => {
  const { container } = render(<Card></Card>);
  expect(container.firstChild).toBeEmptyDOMElement();
});

test("renders empty child for null", () => {
  const { container } = render(<Card>{null}</Card>);
  expect(container.firstChild).toBeEmptyDOMElement();
});

test("renders empty child for undefined", () => {
  const { container } = render(<Card>{undefined}</Card>);
  expect(container.firstChild).toBeEmptyDOMElement();
});

test("renders react node", () => {
  render(
    <Card>
      <div>node</div>
    </Card>
  );
  const nodeElement = screen.getByText(/node/i);
  expect(nodeElement).toBeInTheDocument();
});

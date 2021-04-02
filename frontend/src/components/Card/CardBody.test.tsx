import { render, screen } from "@testing-library/react";
import React from "react";
import { CardBody } from "./CardBody";

test("renders string", () => {
  render(<CardBody>String</CardBody>);
  const childElement = screen.getByText(/String/i);
  expect(childElement).toBeInTheDocument();
});

test("renders number", () => {
  render(<CardBody>1.23</CardBody>);
  const childElement = screen.getByText(/1.23/i);
  expect(childElement).toBeInTheDocument();
});

test("renders empty child", () => {
  const { container } = render(<CardBody></CardBody>);
  expect(container.firstChild).toBeEmptyDOMElement();
});

test("renders empty child for null", () => {
  const { container } = render(<CardBody>{null}</CardBody>);
  expect(container.firstChild).toBeEmptyDOMElement();
});

test("renders empty child for undefined", () => {
  const { container } = render(<CardBody>{undefined}</CardBody>);
  expect(container.firstChild).toBeEmptyDOMElement();
});

test("renders react node", () => {
  render(
    <CardBody>
      <div>node</div>
    </CardBody>
  );
  const nodeElement = screen.getByText(/node/i);
  expect(nodeElement).toBeInTheDocument();
});

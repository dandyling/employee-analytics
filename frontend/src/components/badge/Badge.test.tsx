import { render, screen } from "@testing-library/react";
import React from "react";
import { Badge, getVariantColor } from "./Badge";

test("renders string", () => {
  render(<Badge>String</Badge>);
  const childElement = screen.getByText(/String/i);
  expect(childElement).toBeInTheDocument();
});

test("renders number", () => {
  render(<Badge>1.23</Badge>);
  const childElement = screen.getByText(/1.23/i);
  expect(childElement).toBeInTheDocument();
});

test("renders empty child for null", () => {
  const { container } = render(<Badge>{null}</Badge>);
  expect(container.firstChild).toBeEmptyDOMElement();
});

test("renders empty child for undefined", () => {
  const { container } = render(<Badge>{undefined}</Badge>);
  expect(container.firstChild).toBeEmptyDOMElement();
});

test("renders react node", () => {
  render(
    <Badge>
      <div>node</div>
    </Badge>
  );
  const nodeElement = screen.getByText(/node/i);
  expect(nodeElement).toBeInTheDocument();
});

test("renders correctly", () => {
  const wrapper = (
    <Badge>
      <div>node</div>
    </Badge>
  );
  expect(wrapper).toMatchSnapshot();
});

test("returns bg-success variant class correctly", () => {
  expect(getVariantColor("success")).toEqual("bg-success");
});

test("returns bg-warning variant class correctly", () => {
  expect(getVariantColor("warning")).toEqual("bg-warning");
});

test("returns bg-normal variant class correctly", () => {
  expect(getVariantColor("normal")).toEqual("bg-normal");
});

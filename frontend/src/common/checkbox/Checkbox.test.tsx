import { render } from "@testing-library/react";
import React from "react";
import { Checkbox } from "./Checkbox";

test("checked is true when checked", () => {
  const { container } = render(<Checkbox checked={true} onChange={() => {}} />);
  expect((container.firstChild as any)?.checked).toEqual(true);
});

test("checked is false when checked", () => {
  const { container } = render(
    <Checkbox checked={false} onChange={() => {}} />
  );
  expect((container.firstChild as any)?.checked).toEqual(false);
});

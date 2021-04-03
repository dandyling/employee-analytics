import { render, screen } from "@testing-library/react";
import React from "react";
import { Layout } from "./Layout";

test("renders react node", () => {
  render(
    <Layout>
      <div>node</div>
    </Layout>
  );
  const nodeElement = screen.getByText(/node/i);
  expect(nodeElement).toBeInTheDocument();
});

test("renders correctly", () => {
  const wrapper = (
    <Layout>
      <div>node</div>
    </Layout>
  );
  expect(wrapper).toMatchSnapshot();
});

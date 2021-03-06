import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders employee data title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Employee Data/i);
  expect(titleElement).toBeInTheDocument();
});

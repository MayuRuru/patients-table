import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  render(<App />);
  const linkElement = screen.getByText(/patients table/i);
  expect(linkElement).toBeInTheDocument();
});

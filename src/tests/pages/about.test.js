import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AboutPage from "../../pages/about";

test("renders About Us title", () => {
  render(<AboutPage />);
  const linkElement = screen.getByText(/about us/i);
  expect(linkElement).toBeInTheDocument();
});

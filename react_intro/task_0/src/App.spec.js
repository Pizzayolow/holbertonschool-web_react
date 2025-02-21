import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders the correct elements with expected content", () => {
    render(<App />);

    // ✅ Check for <h1> and its text content (single query)
    const heading = screen.getByRole("heading", { level: 1, name: /school dashboard/i });
    expect(heading).toBeInTheDocument();

    // ✅ Check for the image using its alt attribute
    const logo = screen.getByRole("img", { name: /holberton logo/i });
    expect(logo).toBeInTheDocument();

    // ✅ Check for the correct text in app-body
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();

    // ✅ Check for the correct text in app-footer (handles dynamic year)
    expect(screen.getByText(/copyright \d{4} - holberton school/i)).toBeInTheDocument();
  });
});
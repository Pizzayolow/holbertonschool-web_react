import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders the correct elements with expected content", () => {
    render(<App />);

    // ✅ Check if <h1> with "School Dashboard" is present
    expect(screen.getByRole("heading", { level: 1, name: /school dashboard/i })).toBeInTheDocument();

    // ✅ Check if the image is present using the alt attribute
    expect(screen.getByRole("img", { name: /holberton logo/i })).toBeInTheDocument();

    // ✅ Check for the paragraph inside App-body
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();

    // ✅ Check for the paragraph inside App-footer
    expect(screen.getByText(/copyright \d{4} - holberton school/i)).toBeInTheDocument();
  });

  test("renders 2 input elements", () => {
    render(<App />);
    
    // ✅ Check if there are exactly 2 input fields
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(1); // Only email is "textbox", password needs special check
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument(); // Explicitly check password field
  });

  test("renders 2 label elements with correct text", () => {
    render(<App />);
    
    // ✅ Check for "Email" label
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

    // ✅ Check for "Password" label
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test("renders a button with the text 'OK'", () => {
    render(<App />);
    
    // ✅ Check for the button
    expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
  });
});
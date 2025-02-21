import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders h1 element with text 'School Dashboard'", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 1, name: /School Dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders correct text in app-body and app-footer", () => {
    render(<App />);
    
    const bodyText = screen.getByText(/some expected body text/i);
    const footerText = screen.getByText(/some expected footer text/i);

    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  test("renders an image element", () => {
    render(<App />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  });
});
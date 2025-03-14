import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { getFooterCopy } from "../utils"; // Assuming getFooterCopy is in utils.js

jest.mock("../utils", () => ({
  getFooterCopy: jest.fn(),
}));

test("renders Footer component correctly", () => {
  render(<Footer />);
  
  // Check if footer contains the word "Copyright"
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
});

test("renders the correct footer text when isIndex is true", () => {
  const currentYear = new Date().getFullYear();
  getFooterCopy.mockReturnValue(`Copyright ${currentYear} - Holberton School`);

  render(<Footer isIndex={true} />);

  // Check if the footer contains the expected text
  expect(screen.getByText(`Copyright ${currentYear} - Holberton School`)).toBeInTheDocument();
});
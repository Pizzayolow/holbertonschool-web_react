import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

test("renders Login component correctly", () => {
  render(<Login />);
  
  // Check if login message is present
  expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
});

test("Login includes 2 labels, 2 inputs, and 1 button", () => {
  render(<Login />);

  // Check for labels
  const labels = screen.getAllByLabelText(/email|password/i); // Assuming labels contain these words
  expect(labels.length).toBe(2);

  // Check for inputs
  const inputs = screen.getAllByRole("textbox"); // Inputs of type "text"
  const passwordInput = screen.getByLabelText(/password/i); // Check password input separately

  expect(inputs.length).toBe(1); // Assuming one input is of type "text"
  expect(passwordInput).toBeInTheDocument(); // Password input should exist too

  // Check for button
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Input gets focused when clicking its label", async () => {
  render(<Login />);
  const user = userEvent.setup();

  // Get email input and its label
  const emailLabel = screen.getByLabelText(/email/i);
  const emailInput = screen.getByRole("textbox");

  // Click the label
  await user.click(emailLabel);

  // Ensure the related input gets focused
  expect(emailInput).toHaveFocus();
});
// Login.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login/Login';

describe('Login component', () => {
  test('renders 2 labels, 2 inputs, and 1 button', () => {
    render(<Login />);
    expect(screen.getAllByLabelText(/email|password/i)).toHaveLength(2);
    expect(screen.getAllByRole('textbox')).toHaveLength(1); // Email input
    expect(screen.getAllByLabelText(/password/i)).toHaveLength(1); // Password input
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('focus moves to input when clicking its label', () => {
    render(<Login />);
    const emailLabel = screen.getByLabelText(/email/i);
    fireEvent.click(emailLabel);
    expect(document.activeElement).toBe(screen.getByRole('textbox'));
  });
});
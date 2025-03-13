// Footer.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer/Footer';
import { getFooterCopy } from '../utils';

describe('Footer component', () => {
  test('renders the correct copyright text', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`Copyright ${currentYear} - Holberton School`)).toBeInTheDocument();
  });
});

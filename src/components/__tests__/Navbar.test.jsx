// src/components/__tests__/Navbar.test.jsx
import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/utils';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  it('renders logo and brand name', () => {
    renderWithRouter(<Navbar />);

    expect(screen.getByText('FlavorPantry')).toBeInTheDocument();
  });

  it('has proper styling classes', () => {
    renderWithRouter(<Navbar />);

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('fixed', 'top-0', 'w-full');
  });
});

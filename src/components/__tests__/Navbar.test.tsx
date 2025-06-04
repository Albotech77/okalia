import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';

describe('Navbar', () => {
  it('renders Funzionalità link', () => {
    render(<Navbar />);
    expect(screen.getByText('Funzionalità')).toBeTruthy();
  });
});

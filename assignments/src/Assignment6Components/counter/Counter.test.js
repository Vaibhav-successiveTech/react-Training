
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './counter';

describe('Counter component', () => {
  it('render count', async () => {
    render(<Counter />);
    expect(screen.getByRole('heading')).toHaveTextContent('0');
  });

  it('increment count when Decrement button is clicked', async () => {
    render(<Counter />);
    const inc = screen.getByRole('button', { name: /Increment/i });
    await userEvent.click(inc);  // bring count to 1
    expect(screen.getByRole('heading')).toHaveTextContent('1');
  });

  it('decrements count when Decrement button is clicked', async () => {
    render(<Counter />);
    const dec = screen.getByRole('button', { name: /Decrement/i }); // bring count to 1
    await userEvent.click(dec);
    expect(screen.getByRole('heading')).toHaveTextContent('-1');
  });
});

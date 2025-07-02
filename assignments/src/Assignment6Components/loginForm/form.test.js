// LoginForm.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './form';

describe('LoginForm', () => {
  beforeEach(() => {
    // Mock console.log to verify it's called without clutter
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('renders two input fields and a submit button', () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('updates inputs when typing', async () => {
    render(<LoginForm />);
    const userInput = screen.getByPlaceholderText(/username/i);
    const passInput = screen.getByPlaceholderText(/password/i);

    await userEvent.type(userInput, 'helloUser');
    await userEvent.type(passInput, 'mySecret');

    expect(userInput).toHaveValue('helloUser');
    expect(passInput).toHaveValue('mySecret');
  });

  it('logs username and password and clears inputs on submit', async () => {
    render(<LoginForm />);
    const userInput = screen.getByPlaceholderText(/username/i);
    const passInput = screen.getByPlaceholderText(/password/i);
    const submitBtn = screen.getByRole('button', { name: /submit/i });

    await userEvent.type(userInput, 'testUser');
    await userEvent.type(passInput, 'testPass');
    await userEvent.click(submitBtn);

    // Check console output & input reset
    expect(console.log).toHaveBeenCalledWith('testUser', 'testPass');
    expect(userInput).toHaveValue('');
    expect(passInput).toHaveValue('');
  });
});

import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import App from './App';
// import { Flashcard } from './pages';

describe('App', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
    
    it('render the Login page by default', () => {
        const LoginPage = screen.getByText(/Login/i);
        expect(LoginPage).toBeInTheDocument();
    })

    it('navigates to the Login page when the link is clicked', async () => {
        const login = screen.getByRole('link', { name: /login/i });
        expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
        await userEvent.click(login);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
      });

      it('navigates to the Register page when the link is clicked', async () => {
        const register = screen.getByRole('link', { name: /register/i });
        expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
        await userEvent.click(register);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
      });

      it('navigates to the NotFound page when the link is clicked', async () => {
        const notFound = screen.getByText('link', { name: /random/i });
        expect(notFound).not.toBeInTheDocument();
      });

});

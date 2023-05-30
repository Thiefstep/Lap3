import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import App from './App';
import { Flashcard } from './pages';

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
    
    it('render the homepage by default', () => {
        const homepage = screen.getByText(/Welcome!/i);
        expect(homepage).toBeInTheDocument();
    })

    it('navigates to the FlashCard page when the link is clicked', async () => {
        const login = screen.getByRole('link', { name: /login/i });
        expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
        await userEvent.click(login);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
      });

});
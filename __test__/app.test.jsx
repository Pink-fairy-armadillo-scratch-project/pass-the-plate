import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/client/app.jsx';

describe('App tests', () => {
    it('should contains the heading Pass The Plate', () => {
    render(<App />);
        const heading = screen.getByText(/Pass the Plate/i);
        expect(heading).toBeInTheDocument();
    });
});
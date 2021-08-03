import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Project Nano/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders one question only', () => {
    render(<App />);
    const questionElements = screen.getAllByText(/Question:/i);
    expect(questionElements).toHaveLength(1);
});

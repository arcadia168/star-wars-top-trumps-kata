import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const topTrumpCardElement = screen.getByTestId('top-trump-card');
  expect(topTrumpCardElement).toBeInTheDocument();
});

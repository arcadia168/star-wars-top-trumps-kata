import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const topTrumpCardContainerElement = screen.getByTestId('top-trump-card-container');
  expect(topTrumpCardContainerElement).toBeInTheDocument();
});

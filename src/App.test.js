import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a navigation menu', () => {
  render(<App />);
  const topTrumpMenuElement = screen.getByTestId('top-trump-menu');
  expect(topTrumpMenuElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import Button from './Button';

test('should render the Button component', () => {
  render(<Button>content</Button>);
  const contentElement = screen.getByText(/content/i);

  expect(contentElement).toBeInTheDocument();
});

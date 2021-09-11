import React from 'react';
import { render, screen } from '@testing-library/react';
import AppWrapper from './AppWrapper';

test('should render the PageWrapper component', () => {
  render(
    <AppWrapper>
      <p>content</p>
    </AppWrapper>,
  );
  const titleElement = screen.getByText(/deck of cards/i);
  const contentElement = screen.getByText(/content/i);

  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});

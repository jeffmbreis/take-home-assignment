import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

test('should render the Table component', () => {
  render(
    <Table>
      <p>content</p>
    </Table>,
  );
  const contentElement = screen.getByText(/content/i);

  expect(contentElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('should render a Hearts Card', () => {
  render(<Card suit="H" value="10" />);
  const valueElement = screen.getAllByText('10');
  const symbolElement = screen.getAllByText('♥');

  expect(valueElement.length).toEqual(2);
  expect(symbolElement.length).toEqual(3);
});

test('should render a Diamonds Card', () => {
  render(<Card suit="D" value="10" />);
  const valueElement = screen.getAllByText('10');
  const symbolElement = screen.getAllByText('♦');

  expect(valueElement.length).toEqual(2);
  expect(symbolElement.length).toEqual(3);
});

test('should render a Clubs Card', () => {
  render(<Card suit="C" value="10" />);
  const valueElement = screen.getAllByText('10');
  const symbolElement = screen.getAllByText('♣');

  expect(valueElement.length).toEqual(2);
  expect(symbolElement.length).toEqual(3);
});

test('should render a Spades Card', () => {
  render(<Card suit="S" value="10" />);
  const valueElement = screen.getAllByText('10');
  const symbolElement = screen.getAllByText('♠');

  expect(valueElement.length).toEqual(2);
  expect(symbolElement.length).toEqual(3);
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import ExampleApp from './ExampleApp.jsx';

test('renders demo table header', () => {
  render(<ExampleApp />);
  expect(screen.getByText('First name')).toBeInTheDocument();
});

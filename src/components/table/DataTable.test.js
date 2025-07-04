import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTable from './DataTable';

const columns = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name' },
];

const data = [
  { id: 1, name: 'First' },
];

test('renders table with data', () => {
  render(<DataTable columnsDefinition={columns} data={data} />);
  expect(screen.getByText('First')).toBeInTheDocument();
});

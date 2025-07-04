import React from 'react';
import DataTable from '../table/DataTable';

const columns = [
  { accessorKey: 'id', header: 'ID', size: 50 },
  { accessorKey: 'firstName', header: 'First name', editable: true, inputType: 'text', filterable: true },
  { accessorKey: 'lastName', header: 'Last name', editable: true, inputType: 'text', filterable: true },
  {
    accessorKey: 'status',
    header: 'Status',
    editable: true,
    inputType: 'select',
    options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
    ],
  },
];

const data = [
  { id: 1, firstName: 'John', lastName: 'Doe', status: 'active' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', status: 'inactive' },
  { id: 3, firstName: 'Alice', lastName: 'Brown', status: 'active' },
];

const actions = [
  { label: 'Edit', onClick: row => alert('Edit ' + row.id) },
];

export default function DataTableDemo() {
  return <DataTable columnsDefinition={columns} data={data} enableRowSelection rowActions={actions} />;
}

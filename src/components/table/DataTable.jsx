import React, { useMemo, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  getExpandedRowModel,
} from '@tanstack/react-table';


function DefaultInput({ value: initialValue, row, column, updateData, type, options }) {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);
  const onBlur = () => updateData(row.index, column.id, value);

  if (type === 'select') {
    return (
      <select value={value} onChange={onChange} onBlur={onBlur}>
        {options && options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    );
  }

  if (type === 'multiselect') {
    return (
      <select multiple value={value} onChange={e => {
        const opts = Array.from(e.target.selectedOptions).map(o => o.value);
        setValue(opts);
      }} onBlur={onBlur}>
        {options && options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    );
  }

  return <input value={value} onChange={onChange} onBlur={onBlur} />;
}

function DataTable({ columnsDefinition, data, enableRowSelection = false, rowActions = [] }) {
  const [tableData, setTableData] = useState(data);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const updateData = (rowIndex, columnId, value) => {
    setTableData(old => old.map((row, index) => {
      if (index === rowIndex) {
        return { ...row, [columnId]: value };
      }
      return row;
    }));
  };

  const columns = useMemo(() => {
    return columnsDefinition.map(col => {
      return {
        accessorKey: col.accessorKey,
        header: col.header,
        size: col.size,
        enableColumnFilter: col.filterable,
        cell: col.render
          ? col.render
          : ({ getValue, row, column }) => {
              const initialValue = getValue();
              if (col.editable) {
                return (
                  <DefaultInput
                    value={initialValue}
                    row={row}
                    column={column}
                    updateData={updateData}
                    type={col.inputType}
                    options={col.options}
                  />
                );
              }
              return String(initialValue ?? '');
            },
      };
    });
  }, [columnsDefinition, updateData]);

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      columnVisibility,
      columnFilters,
      sorting,
      expanded,
      rowSelection,
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    enableRowSelection,
  });

  return (
    <div className="datatable-container">
      <table className="datatable">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {enableRowSelection && headerGroup.headers.length && (
                <th>
                  <input
                    type="checkbox"
                    {...{
                      checked: table.getIsAllRowsSelected(),
                      indeterminate: table.getIsSomeRowsSelected(),
                      onChange: table.getToggleAllRowsSelectedHandler(),
                    }}
                  />
                </th>
              )}
              {headerGroup.headers.map(header => (
                <th key={header.id} style={{ width: header.getSize() }}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  {header.column.getCanFilter() ? (
                    <div>
                      <input
                        type="text"
                        value={(header.column.getFilterValue() ?? '')}
                        onChange={e => header.column.setFilterValue(e.target.value)}
                        placeholder="Filter"
                      />
                    </div>
                  ) : null}
                </th>
              ))}
              {rowActions.length > 0 && <th>Actions</th>}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <React.Fragment key={row.id}>
              <tr>
                {enableRowSelection && (
                  <td>
                    <input
                      type="checkbox"
                      {...{
                        checked: row.getIsSelected(),
                        disabled: !row.getCanSelect(),
                        onChange: row.getToggleSelectedHandler(),
                      }}
                    />
                  </td>
                )}
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} style={{ width: cell.column.getSize() }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                {rowActions.length > 0 && (
                  <td>
                    {rowActions.map(action => (
                      <button key={action.label} onClick={() => action.onClick(row.original)}>
                        {action.label}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
              {row.getIsExpanded() && row.subRows && (
                <tr>
                  <td colSpan={row.getVisibleCells().length + (enableRowSelection ? 1 : 0) + (rowActions.length > 0 ? 1 : 0)}>
                    <table className="datatable nested">
                      <tbody>
                        {row.subRows.map(subRow => (
                          <tr key={subRow.id}>
                            {subRow.getVisibleCells().map(cell => (
                              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;

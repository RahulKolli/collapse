"use client"

import React from "react"
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table"
import { columns, ChatLog } from "./columns"

interface DataTableProps {
  data: ChatLog[]
}

export default function DataTable({ data }: DataTableProps) {
  const [columnFilters, setColumnFilters] = React.useState([])

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="bg-gray-100">
              {headerGroup.headers.map(header => (
                <th key={header.id} className="border border-gray-300 p-2 text-left">
                  <div>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </div>

                  {/* Filter UI based on column meta */}
                  {header.column.getCanFilter() &&
                    header.column.columnDef.meta?.filterComponent === "dropdown" && (
                      <select
                        className="mt-1 p-1 border rounded"
                        onChange={e => {
                          const val = e.target.value
                          header.column.setFilter(val || undefined)
                        }}
                        value={header.column.getFilterValue() || ""}
                      >
                        <option value="">All</option>
                        {header.column.columnDef.meta.filterOptions.map((option: string) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}

                  {header.column.getCanFilter() &&
                    header.column.columnDef.meta?.filterComponent === "date" && (
                      <input
                        type="date"
                        className="mt-1 p-1 border rounded"
                        onChange={e => {
                          const val = e.target.value
                          header.column.setFilter(val || undefined)
                        }}
                        value={header.column.getFilterValue() || ""}
                      />
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="text-center p-4">
                No data found
              </td>
            </tr>
          )}
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="p-2 border border-gray-300">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

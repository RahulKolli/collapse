"use client"

import { ColumnDef, FilterFn } from "@tanstack/react-table"
import { format } from "date-fns"

export interface ChatLog {
  id: string
  user: string
  message: string
  status: "sent" | "delivered" | "failed"
  timestamp: string // ISO date string
}

export const statusFilter: FilterFn<ChatLog> = (row, id, filterValue) => {
  if (!filterValue || filterValue.length === 0) return true
  return filterValue.includes(row.getValue(id))
}

export const columns: ColumnDef<ChatLog>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ getValue }) => <div className="font-mono text-xs">{getValue<string>().slice(0, 8)}</div>,
  },
  {
    accessorKey: "user",
    header: "User",
    filterFn: "fuzzy",
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ getValue }) => {
      const msg = getValue<string>()
      return <div title={msg}>{msg.length > 50 ? msg.slice(0, 47) + "..." : msg}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    filterFn: statusFilter,
    cell: ({ getValue }) => {
      const status = getValue<string>()
      const colors: Record<string, string> = {
        sent: "text-blue-600",
        delivered: "text-green-600",
        failed: "text-red-600",
      }
      return <span className={colors[status] || ""}>{status}</span>
    },
    meta: {
      filterComponent: "dropdown",
      filterOptions: ["sent", "delivered", "failed"],
    },
  },
  {
    accessorKey: "timestamp",
    header: "Date",
    cell: ({ getValue }) => {
      const date = new Date(getValue<string>())
      if (isNaN(date.getTime())) return <>Invalid Date</>
      return <time dateTime={date.toISOString()}>{format(date, "Pp")}</time>
    },
    filterFn: "equals",
    meta: {
      filterComponent: "date",
    },
  },
]

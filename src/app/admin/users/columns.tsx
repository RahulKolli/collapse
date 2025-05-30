// columns.tsx


"use client"
import { ColumnDef } from "@tanstack/react-table"

export type User = {
  id: string
  name: string
  email: string
  role: "client" | "talent"
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role")
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            role === "client" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
          }`}
        >
          {role as string}
        </span>
      )
    },
  },
]

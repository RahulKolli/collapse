import React from "react";
import { ColumnDef } from "@tanstack/react-table";

export type User = {
  id: string;
  client: string;
  talent: string;
  registeredAt: string; // ISO date string
  uniqueId: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "client",
    header: "Client",
    cell: info => info.getValue(),
    filterFn: 'includesString',
  },
  {
    accessorKey: "talent",
    header: "Talent",
    cell: info => info.getValue(),
    filterFn: 'includesString',
  },
  {
    accessorKey: "registeredAt",
    header: "Date Registered",
    cell: info => new Date(info.getValue() as string).toLocaleDateString(),
    filterFn: 'equals',
  },
  {
    accessorKey: "uniqueId",
    header: "Unique ID",
    cell: info => info.getValue(),
    filterFn: 'includesString',
  },
];

"use client"

import React, { useState } from "react"
import { MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock disputes data (30 items)
const disputesData = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  title: `Dispute #${i + 1}`,
  status: i % 3 === 0 ? "Open" : i % 3 === 1 ? "Resolved" : "Pending",
  amount: (Math.random() * 1000).toFixed(2),
  date: new Date(2023, i % 12, (i * 3) % 28 + 1).toLocaleDateString("en-US"),
}))

const ITEMS_PER_PAGE = 10

export default function DisputeTable() {
  const [page, setPage] = useState(1)

  const pageCount = Math.ceil(disputesData.length / ITEMS_PER_PAGE)

  const currentData = disputesData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  function goToPage(n: number) {
    if (n < 1 || n > pageCount) return
    setPage(n)
  }

  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle className="">Disputes</CardTitle>
        <CardDescription className="">Manage your disputes and view their current status.</CardDescription>
      </CardHeader>
      <CardContent className="">
        <Table className="">
          <TableHeader className="">
            <TableRow className="">
              <TableHead className="">Dispute Title</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className="hidden md:table-cell">Amount</TableHead>
              <TableHead className="hidden md:table-cell">Date Filed</TableHead>
              <TableHead className="">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {currentData.map(({ id, title, status, amount, date }) => (
              <TableRow key={id} className="">
                <TableCell className="font-medium">{title}</TableCell>
                <TableCell className="">
                  <Badge className="" variant={status === "Resolved" ? "secondary" : "outline"}>{status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">${amount}</TableCell>
                <TableCell className="hidden md:table-cell">{date}</TableCell>
                <TableCell className="">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="" aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="" align="end">
                      <DropdownMenuLabel className="" inset={false}>Actions</DropdownMenuLabel>
                      <DropdownMenuItem className="" inset={false}>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="" inset={false}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="">
        <div className="flex items-center justify-between w-full">
          <div className="text-xs text-muted-foreground">
            Showing <strong>{(page - 1) * ITEMS_PER_PAGE + 1}</strong> -{" "}
            <strong>{Math.min(page * ITEMS_PER_PAGE, disputesData.length)}</strong>{" "}
            of <strong>{disputesData.length}</strong> disputes
          </div>
          {/* Pagination controls */}
          <nav className="flex space-x-2">
            <Button className="" size="sm" variant="outline" onClick={() => goToPage(page - 1)} disabled={page === 1}>Prev</Button>
            {[...Array(pageCount)].map((_, i) => (
              <Button className="" key={i} size="sm" variant={page === i + 1 ? "default" : "outline"} onClick={() => goToPage(i + 1)}>{i + 1}</Button>
            ))}
            <Button className="" size="sm" variant="outline" onClick={() => goToPage(page + 1)} disabled={page === pageCount}>Next</Button>
          </nav>
        </div>
      </CardFooter>
    </Card>
  )
}

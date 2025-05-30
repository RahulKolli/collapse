"use client"

import DataTable from "./data-table"
import { ChatLog } from "./columns"

const chatLogs: ChatLog[] = [
  {
    id: "1a2b3c2d",
    user: "Alice",
    message: "Hello world!",
    status: "sent",
    timestamp: "2025-05-29T12:34:56Z",
  },
  {
    id: "5e1f7g8h",
    user: "Balu",
    message: "This is a test message to check long text rendering...",
    status: "delivered",
    timestamp: "2025-05-28T09:22:11Z",
  },
  {
    id: "1a2b3c4d",
    user: "Alice",
    message: "Hello world!",
    status: "sent",
    timestamp: "2025-05-29T12:34:56Z",
  },
  {
    id: "5e6f7g8h",
    user: "Bob",
    message: "This is a test message to check long text rendering...",
    status: "delivered",
    timestamp: "2025-05-28T09:22:11Z",
  },
  {
    id: "1a2b3c4d",
    user: "Alice",
    message: "Hello world!",
    status: "sent",
    timestamp: "2025-05-29T12:34:56Z",
  },
  {
    id: "5e6f7g8h",
    user: "Bob",
    message: "This is a test message to check long text rendering...",
    status: "delivered",
    timestamp: "2025-05-28T09:22:11Z",
  },
  // Add more logs here
]

export default function ChatLogsPage() {
  return <DataTable data={chatLogs} />
}

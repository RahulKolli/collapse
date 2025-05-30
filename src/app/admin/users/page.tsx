// page.tsx
import { columns, User } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<User[]> {
  // Mock user data
  return [
    {
      id: "1",
      name: "Rahul Sharma",
      email: "rahul@example.com",
      role: "client",
    },
    {
      id: "2",
      name: "Aisha Verma",
      email: "aisha@example.com",
      role: "talent",
    },
    {
      id: "3",
      name: "John Doe",
      email: "john@example.com",
      role: "client",
    },
  ]
}

export default async function UsersPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

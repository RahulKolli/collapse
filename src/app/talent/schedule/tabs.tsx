import { AppWindowIcon, CodeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
export function TabsDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-8 mx-auto mt-10">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="flex justify-center gap-2 bg-muted rounded-lg p-1 mb-6">
          <TabsTrigger value="account" className="px-4 py-2 rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-colors">Account</TabsTrigger>
          <TabsTrigger value="password" className="px-4 py-2 rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-colors">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="bg-card rounded-xl shadow p-6">
          <Card className="shadow-none border-0 p-0">
            <CardHeader className="mb-4 p-0">
              <CardTitle className="text-xl font-semibold mb-1">Account</CardTitle>
              <CardDescription className="text-muted-foreground mb-4">
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-5 p-0">
              <div className="grid gap-2">
                <Label htmlFor="tabs-demo-name" className="text-sm font-medium">Name</Label>
                <Input id="tabs-demo-name" type="text" defaultValue="Pedro Duarte" className="bg-input border border-border rounded-md px-3 py-2 text-sm" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tabs-demo-username" className="text-sm font-medium">Username</Label>
                <Input id="tabs-demo-username" type="text" defaultValue="@peduarte" className="bg-input border border-border rounded-md px-3 py-2 text-sm" />
              </div>
              {/* Add more fields here as needed, styled with tabs.tsx conventions */}
            </CardContent>
            <CardFooter className="flex justify-end p-0 mt-6">
              <Button className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-semibold hover:bg-primary/90 transition">Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password" className="bg-card rounded-xl shadow p-6">
          <Card className="shadow-none border-0 p-0">
            <CardHeader className="mb-4 p-0">
              <CardTitle className="text-xl font-semibold mb-1">Password</CardTitle>
              <CardDescription className="text-muted-foreground mb-4">
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-5 p-0">
              <div className="grid gap-2">
                <Label htmlFor="tabs-demo-current" className="text-sm font-medium">Current password</Label>
                <Input id="tabs-demo-current" type="password" className="bg-input border border-border rounded-md px-3 py-2 text-sm" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tabs-demo-new" className="text-sm font-medium">New password</Label>
                <Input id="tabs-demo-new" type="password" className="bg-input border border-border rounded-md px-3 py-2 text-sm" />
              </div>
              {/* Add more fields here as needed, styled with tabs.tsx conventions */}
            </CardContent>
            <CardFooter className="flex justify-end p-0 mt-6">
              <Button className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-semibold hover:bg-primary/90 transition">Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
"use client";

import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true);
  return (
    <SidebarProvider
      open={open}
      onOpenChange={setOpen}
      className=""
      style={{
        "--sidebar-width": "250px",
        "--header-height": "calc(var(--spacing) * 12)",
      }}
    >
      <AppSidebar variant="inset" />
      <SidebarInset className="">
        <SiteHeader />
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

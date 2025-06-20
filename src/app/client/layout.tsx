"use client";

import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebarclient } from "@/components/app-sidebar-client";
import { SiteHeader } from "@/components/site-header";

export default function DashboardLayout({ children }) {
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
      <div className="flex w-full min-h-screen overflow-x-hidden">
        <AppSidebarclient />
        <div className="flex flex-col flex-1">
          <SiteHeader />
          <main className="flex-1 overflow-y-auto p-4">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

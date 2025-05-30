"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "250px",
        "--header-height": "calc(var(--spacing) * 12)",
      }}
    >
      <div className="flex w-full min-h-screen overflow-x-hidden">
        <AppSidebar variant="inset" />
        <SidebarInset className={undefined}>
          <SiteHeader />
          <main className="flex-1 overflow-y-auto p-4">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

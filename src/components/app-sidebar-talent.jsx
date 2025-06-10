"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Talent",
    email: "m@example.com",

  },
  navMain: [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: IconDashboard,
  },
  {
    title: "KYC Upload",
    url: "/talent/kyc-upload",
    icon: IconUsers,
  },
  {
    title: "Profile",
    url: "/talent/profile",
    icon: IconListDetails,
  },
  {
    title: "Portfolio",
    url: "/talent/portfolio",
    icon: IconUsers,
  },
  {
    title: "Profile Availibility",
    url: "/talent/preferences",
    icon: IconChartBar,
  },
  {
    title: "Browse Projects",
    url: "/talent/browse-projects",
    icon: IconUsers,
  },

  {
    title: "Submit Proposal",
    url: "/talent/submit-proposal",
    icon: IconUsers,
  },
  {
    title: "Proposal Status",
    url: "/talent/proposals-status",
    icon: IconFolder,
  },
  {
    title: "Meeting Scheduling",
    url: "/talent/schedule",
    icon: IconUsers,
  },
    {
    title: "Project Overview",
    url: "/talent/project-overview",
    icon: IconUsers,
  },
  {
    title: "Earnings",
    url: "/talent/earnings",
    icon: IconUsers,
  },
],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
};

export function AppSidebartalent({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Talent </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* Removed NavDocuments */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

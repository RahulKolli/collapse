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
  IconCalendarEvent,
  IconBriefcase,
  IconUserCheck,
  IconWallet,
  IconId,
  IconClipboardText,
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
      icon: () => <IconDashboard title="Dashboard" />,
    },
    {
      title: "KYC Upload",
      url: "/talent/kyc-upload",
      icon: () => <IconId title="KYC Upload" />,
    },
    {
      title: "Profile",
      url: "/talent/profile",
      icon: () => <IconListDetails title="Profile" />,
    },
    {
      title: "Portfolio",
      url: "/talent/portfolio",
      icon: () => <IconCamera title="Portfolio" />,
    },
    {
      title: "Profile Availibility",
      url: "/talent/preferences",
      icon: () => <IconUserCheck title="Profile Availibility" />,
    },
    {
      title: "Browse Projects",
      url: "/talent/browse-projects",
      icon: () => <IconBriefcase title="Browse Projects" />,
    },
    {
      title: "Submit Proposal",
      url: "/talent/submit-proposal",
      icon: () => <IconClipboardText title="Submit Proposal" />,
    },
    {
      title: "Proposal Status",
      url: "/talent/proposals-status",
      icon: () => <IconFolder title="Proposal Status" />,
    },
    {
      title: "Meeting Scheduling",
      url: "/talent/schedule",
      icon: () => <IconCalendarEvent title="Meeting Scheduling" />,
    },
    {
      title: "Project Overview",
      url: "/talent/project-overview",
      icon: () => <IconFileDescription title="Project Overview" />,
    },
    {
      title: "Earnings",
      url: "/talent/earnings",
      icon: () => <IconWallet title="Earnings" />,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: () => <IconSettings title="Settings" />, 
    },
    {
      title: "Get Help",
      url: "#",
      icon: () => <IconHelp title="Get Help" />,
    },
    {
      title: "Search",
      url: "#",
      icon: () => <IconSearch title="Search" />,
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
                <IconInnerShadowTop className="!size-5" title="Talent Home" />
                <span className="text-base font-semibold">Talent</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

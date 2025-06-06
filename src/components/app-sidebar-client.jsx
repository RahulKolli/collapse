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
    name: "Client",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/client/",
      icon: IconDashboard,
    },
    {
  title: "register",
  url: "/client/register",
  icon: IconUsers,
},
{
  title: "kycupload",
  url: "/client/kycupload",
  icon: IconListDetails,
},
{
  title: "Profile",
  url: "/client/profile",
  icon: IconChartBar,
},
{
  title: "Talent discovery",
  url: "/client/talent-discovery",
  icon: IconFolder,
},
{
  title: "talent profile",
  url: "/client/talent-profile",
  icon: IconUsers,
},
{
  title: "posting project",
  url: "/client/posting-project",
  icon: IconUsers,
},
{
  title: "posted projects",
  url: "/client/posted-projects",
  icon: IconUsers,
},
{
  title: "project detail view",
  url: "/client/project-detail-view",
  icon: IconUsers,
},
{
  title: "proposals recieved",
  url: "/client/proposals-recieved",
  icon: IconUsers,
},
{
  title: "proposal review",
  url: "/client/proposal-review",
  icon: IconUsers,
},
{
  title: "Accept/Book",
  url: "/client/accept-book",
  icon: IconListDetails,
},
{
  title: "post review",
  url: "/client/post-review",
  icon: IconUsers,
},
{
  title: "Disputes",
  url: "/client/dispute",
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

export function AppSidebarclient({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">CLIENT </span>
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

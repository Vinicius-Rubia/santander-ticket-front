import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { IMAGES } from "@/constants/images";
import { LayoutGrid, Settings, Ticket } from "lucide-react";
import { NavLink } from "react-router-dom";

const data = {
  navMain: [
    {
      title: "Dashboard",
      isActive: true,
      icon: LayoutGrid,
      url: "/dashboard",
    },
    {
      title: "Tickets",
      icon: Ticket,
      url: "/tickets",
    },
    {
      title: "Configurações",
      icon: Settings,
      url: "/settings",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <img
          src={IMAGES.SantanderLogo}
          alt="Santander"
          className="my-4 w-50 mx-auto object-cover"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <NavLink to={item.url}>
                    {({ isActive }) => (
                      <SidebarMenuButton size="lg" isActive={isActive}>
                        <item.icon className="size-5" />
                        {item.title}
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

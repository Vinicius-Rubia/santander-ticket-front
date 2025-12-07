import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export function BaseLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <ScrollArea className="h-[calc(100vh-64px)]">
          <div className="flex flex-1 flex-col gap-4 p-4">
            <Outlet />
          </div>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}

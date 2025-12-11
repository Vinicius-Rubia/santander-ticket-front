import { BaseLayout } from "@/layouts/base-layout";
import { DashboardPage } from "@/pages/dashboard/page";
import { LoginPage } from "@/pages/login/page";
import { TicketPage } from "@/pages/ticket/page";
import { TicketsPage } from "@/pages/tickets/page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/tickets/:ticketId" element={<TicketPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

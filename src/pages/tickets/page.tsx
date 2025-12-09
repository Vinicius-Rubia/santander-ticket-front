import { SubHeader } from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { TICKETS_DATA } from "@/data";
import type { TicketStatusValue } from "@/enums/ticket-status";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Activity, useState } from "react";
import { CreateQuickTicket } from "./create-quick-ticket";
import { EmptyTicket } from "./empty-ticket";
import { FilterFields } from "./filter-fields";
import { TicketCard } from "./ticket-card";

export function TicketsPage() {
  const [openQuickTicket, setOpenQuickTicket] = useState(false);
  const [ticketQuery, setTicketQuery] = useState("");
  const [ticketTypeSelect, setTicketTypeSelect] = useState<
    TicketStatusValue | "all"
  >("all");

  const handleOpenQuickTicket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    if (openQuickTicket) return;
    setOpenQuickTicket(true);
  };

  const filteredTickets = () => {
    const query = ticketQuery.toLowerCase();

    return TICKETS_DATA.filter((ticket) => {
      const matchSearch =
        ticket.title.toLowerCase().includes(query) ||
        ticket.ticketId.toLowerCase().includes(query);

      const matchType =
        ticketTypeSelect === "all" ||
        ticket.status === Number(ticketTypeSelect);

      return matchSearch && matchType;
    });
  };

  return (
    <div>
      <SubHeader title="Tickets">
        <Button onClick={handleOpenQuickTicket}>
          <Plus /> Novo Ticket
        </Button>
      </SubHeader>

      <section className="flex items-start gap-6">
        <main className="flex-1 space-y-6 sm:bg-accent sm:dark:bg-accent/30 rounded sm:px-5 sm:py-6">
          <FilterFields
            setQuery={setTicketQuery}
            query={ticketQuery}
            setTypeSelect={setTicketTypeSelect}
            typeSelect={ticketTypeSelect}
          />
          <AnimatePresence mode="popLayout">
            {filteredTickets().length > 0 ? (
              filteredTickets().map((ticket) => (
                <motion.div
                  key={ticket.ticketId}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <TicketCard ticket={ticket} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <EmptyTicket onNewTicket={handleOpenQuickTicket} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Activity mode={openQuickTicket ? "visible" : "hidden"}>
          <AnimatePresence>
            {openQuickTicket && (
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="h-full"
              >
                <CreateQuickTicket
                  open={openQuickTicket}
                  setOpen={setOpenQuickTicket}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Activity>
      </section>
    </div>
  );
}

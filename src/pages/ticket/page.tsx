import { SubHeader } from "@/components/sub-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TicketStatus } from "@/components/ui/ticket-status";
import { TICKET_TYPE_SELECT } from "@/constants/ticket-config";
import { TICKETS_DATA } from "@/data";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { ReplyTicketForm } from "./reply-ticket-form";

export function TicketPage() {
  const navigate = useNavigate();
  const { ticketId } = useParams<{ ticketId: string }>();

  const ticket = TICKETS_DATA.find((t) => t.ticketId === ticketId);

  if (!ticketId || !ticket) {
    navigate("/tickets");
    toast("Ops. Não encontramos este ticket", {
      description: "Tente pesquisar pelo ticket para encontrá-lo.",
    });
    return null;
  }

  const handleOnBack = () => {
    navigate("/tickets");
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex items-center gap-4">
        <Button
          size="icon-sm"
          variant="outline"
          className="mb-4"
          onClick={handleOnBack}
        >
          <ChevronLeft />
        </Button>
        <SubHeader title="Ticket" />
      </div>
      <main className="bg-accent dark:bg-accent/30 rounded p-5 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center flex-wrap gap-2.5">
            <TicketStatus variant={ticket.status} />
            <h4 className="font-semibold">Ticket - {ticket.ticketId}</h4>
            <Badge variant="secondary">
              {TICKET_TYPE_SELECT[ticket.ticketType]}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="size-7">
              <AvatarImage src={ticket.userImageUrl} alt={ticket.username} />
              <AvatarFallback>{ticket.userInitials}</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground">{ticket.username}</span>
          </div>
        </div>

        <div className="space-y-1">
          <span className="font-medium text-xs text-muted-foreground">
            Postado às {format(ticket.publishedAt, "HH:mm")}
          </span>
          <h2 className="font-semibold text-lg">{ticket.title}</h2>
          <p className="text-sm text-muted-foreground whitespace-pre-line">
            {ticket.description}
          </p>
        </div>

        <ReplyTicketForm />
      </main>
    </motion.div>
  );
}

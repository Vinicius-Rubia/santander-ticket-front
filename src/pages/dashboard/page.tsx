import { SubHeader } from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function DashboardPage() {
  return (
    <div>
      <SubHeader title="Tickets">
        <Button>
          <Plus /> Novo Ticket
        </Button>
      </SubHeader>
    </div>
  );
}

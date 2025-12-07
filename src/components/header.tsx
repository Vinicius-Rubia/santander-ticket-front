import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BellDot,
  ChevronDown,
  LogOut,
  Settings,
  UserRoundPen,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <h2 className="text-lg text-[#2E2C34] hidden sm:block">
          Bem vindo! <span className="font-semibold">Vinicius Rubia</span>
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon-lg" className="rounded-full">
          <BellDot />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="lg"
              className="pr-2! bg-[#f1f1f1] rounded-full pl-1.5!"
            >
              <Avatar>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/81399576?v=4"
                  alt="Vinicius Rubia"
                />
                <AvatarFallback>VR</AvatarFallback>
              </Avatar>
              <span>Vinicius Rubia</span>
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Perfil
                <DropdownMenuShortcut>
                  <UserRoundPen />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Configurações
                <DropdownMenuShortcut>
                  <Settings />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Linkedin</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              Sair
              <DropdownMenuShortcut>
                <LogOut />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

import { ThemeProvider } from "./components/theme-provider";

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ticket-system-theme">
      <div>Hello World</div>
    </ThemeProvider>
  );
}

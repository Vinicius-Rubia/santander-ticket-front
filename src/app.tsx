import { AnimatePresence } from "framer-motion";
import { Activity, useState } from "react";
import { SplashScreenLoader } from "./components/splash-screen-loader";
import { ThemeProvider } from "./components/theme-provider";
import { AppRoutes } from "./routes/router";

export function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider defaultTheme="system" storageKey="ticket-system-theme">
      <AnimatePresence mode="wait">
        <Activity mode={loading ? "visible" : "hidden"}>
          <SplashScreenLoader onComplete={() => setLoading(false)} />
        </Activity>
      </AnimatePresence>

      <Activity mode={!loading ? "visible" : "hidden"}>
        <AppRoutes />
      </Activity>
    </ThemeProvider>
  );
}

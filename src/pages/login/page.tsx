import { IMAGES } from "@/constants/images";
import { motion } from "framer-motion";
import { LoginForm } from "./login-form";

export function LoginPage() {
  return (
    <section className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <img
          src={IMAGES.BackgroundLogin}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <main className="flex flex-col gap-4 p-6 md:p-10">
        <img
          src={IMAGES.SantanderLogo}
          alt="Santander"
          className="w-40 mx-auto md:mx-0"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-1 items-center justify-center"
        >
          <LoginForm />
        </motion.div>
      </main>
    </section>
  );
}

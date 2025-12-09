import { IMAGES } from "@/constants/images";
import { motion } from "framer-motion";

interface SplashScreenLoaderProps {
  onComplete: () => void;
}

export function SplashScreenLoader({ onComplete }: SplashScreenLoaderProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
      <motion.div
        className="absolute rounded-full bg-primary"
        initial={{ width: "100px", height: "100px", scale: 0 }}
        animate={{
          scale: [0, 0, 50],
        }}
        transition={{
          duration: 1.5,
          times: [0, 0.6, 1],
          ease: "easeInOut",
          delay: 2,
        }}
        onAnimationComplete={() => {
          setTimeout(() => {
            onComplete();
          }, 200);
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2.3, duration: 0.3 }}
      >
        <motion.div
          className="w-18 h-18 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={IMAGES.SantanderSampleLogo} alt="Santander" />
        </motion.div>
      </motion.div>
    </div>
  );
}

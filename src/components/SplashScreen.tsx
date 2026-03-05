import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-transparent.png";

interface Props {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] bg-[hsl(220,40%,15%)] flex items-center justify-center"
      style={{ overflow: 'hidden' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-8"
      >
        <img
          src={logo}
          alt="Domus Engenharia"
          className="h-40 md:h-56 w-auto"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-48 h-px bg-accent origin-center"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground"
        >
          Construindo o extraordinário
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;

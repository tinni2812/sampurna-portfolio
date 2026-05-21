import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-16 w-16"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-accent blur-xl opacity-70" />
              <div className="relative h-16 w-16 rounded-2xl bg-gradient-primary grid place-items-center font-display font-bold text-2xl text-primary-foreground shadow-glow">
                SD
              </div>
            </motion.div>
            <div className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase">Loading Portfolio</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

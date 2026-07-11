"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquare } from "lucide-react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 font-mono text-lg font-semibold text-text"
          >
            <TerminalSquare className="h-6 w-6 text-accent" />
            VL<span className="text-accent">.</span>
          </motion.div>
          <div className="h-1 w-40 overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
          <p className="section-eyebrow text-[11px] text-muted">
            initializing portfolio…
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

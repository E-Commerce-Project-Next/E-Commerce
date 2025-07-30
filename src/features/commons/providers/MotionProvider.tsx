"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={false} // Disable initial animation
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

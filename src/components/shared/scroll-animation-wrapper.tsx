"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollAnimationWrapper({
  children,
  className,
  delay = 0,
}: ScrollAnimationWrapperProps) {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={cn(className)}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

export function Logo({
  size = "md",
  animated = false,
  className = "",
}: LogoProps) {
  const sizes = {
    sm: "h-8 w-8 text-xl",
    md: "h-12 w-12 text-3xl",
    lg: "h-16 w-16 text-4xl",
  };

  const LogoContent = () => (
    <div
      className={`${sizes[size]} ${className} rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white shadow-lg`}
    >
      SS
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <LogoContent />
      </motion.div>
    );
  }

  return <LogoContent />;
}

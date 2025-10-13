"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProfileAvatarProps {
  size?: number;
  className?: string;
}

export function ProfileAvatar({
  size = 150,
  className = "",
}: ProfileAvatarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={`relative ${className}`}
    >
      {/* Glassmorphism Container */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Animated Gradient Border */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-chart-3 opacity-75 blur-md"
          style={{
            width: size + 20,
            height: size + 20,
            left: -10,
            top: -10,
          }}
        />

        {/* Glassmorphism Border */}
        <div
          className="relative rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-chart-3/20 backdrop-blur-sm p-1 shadow-2xl border border-primary/30 dark:border-accent/30"
          style={{ width: size + 10, height: size + 10 }}
        >
          {/* Inner Shadow Ring */}
          <div
            className="relative rounded-full bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-md p-1 shadow-inner"
            style={{ width: size + 8, height: size + 8 }}
          >
            {/* Image Container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-full ring-2 ring-background dark:ring-background/50"
              style={{ width: size, height: size }}
            >
              <Image
                src="/profile.jpg"
                alt="Sadman - Senior Software Engineer"
                width={size}
                height={size}
                className="object-cover"
                priority
                quality={95}
              />

              {/* Overlay Gradient on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-[1px]"
              />
            </motion.div>
          </div>
        </div>

        {/* Floating Particles Effect (Optional - can be toggled) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-xl -z-10"
          style={{
            width: size + 40,
            height: size + 40,
            left: -20,
            top: -20,
          }}
        />
      </motion.div>

      {/* Status Indicator (Optional - Available for Work) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background shadow-lg"
        title="Available for opportunities"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-green-400 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}

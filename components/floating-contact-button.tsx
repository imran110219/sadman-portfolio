"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { getProfile } from "@/lib/data";

export function FloatingContactButton() {
  const profile = getProfile();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Email me"
        asChild
      >
        <a href={`mailto:${profile.social.email}`}>
          <Mail className="h-6 w-6" />
        </a>
      </Button>
    </motion.div>
  );
}

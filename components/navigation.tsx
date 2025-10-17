"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { DownloadCVButton } from "@/components/download-cv-button";
import { Logo } from "@/components/logo";
import { Home, Briefcase, Code2, Mail, BookOpen } from "lucide-react";

interface NavigationProps {
  activeView: string | null;
  onNavigate?: (section: string) => void;
  onHomeClick: () => void;
}

export function Navigation({
  activeView,
  onNavigate,
  onHomeClick,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Home */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onHomeClick}
            className="font-bold text-lg hover:text-primary gap-2"
          >
            <Logo size="sm" />
            <span className="hidden md:inline">Sadman</span>
          </Button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {activeView && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection("experience")}
                  className="gap-2"
                >
                  <Briefcase className="h-4 w-4" />
                  Experience
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection("projects")}
                  className="gap-2"
                >
                  <Code2 className="h-4 w-4" />
                  Projects
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className="gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
              </>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <DownloadCVButton variant="ghost" size="sm" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

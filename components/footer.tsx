"use client";

import {
  Mail,
  Linkedin,
  Github,
  Calendar,
  BookOpen,
  Facebook,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactClick } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur sticky bottom-0 z-30">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Sadman. Building the future, one commit at a time.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="mailto:imran110219@gmail.com"
                aria-label="Email"
                onClick={() => trackContactClick("email")}
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/imran110219"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                onClick={() => trackContactClick("github")}
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://medium.com/@imran110219"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                onClick={() => trackContactClick("medium")}
              >
                <BookOpen className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.facebook.com/sadmansobhan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.hackerrank.com/profile/imran110219"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerRank"
              >
                <User className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.researchgate.net/profile/Sadman-Sobhan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ResearchGate"
              >
                <User className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://x.com/sadmansobhan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <span className="h-5 w-5 flex items-center justify-center text-sm font-bold">
                  𝕏
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

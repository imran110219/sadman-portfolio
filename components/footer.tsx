import {
  Mail,
  Github,
  Linkedin,
  BookOpen,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProfile } from "@/lib/data";

export function Footer() {
  const { social } = getProfile();
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sadman Sobhan. Backend engineering for systems that matter.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a
                href={"mailto:" + social.email}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href={social.medium}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <BookOpen className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/sadman-sobhan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
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

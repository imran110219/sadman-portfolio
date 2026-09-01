"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { DownloadCVButton } from "@/components/download-cv-button";
import { Button } from "@/components/ui/button";

const links = [
  ["Home", "/"], ["Experience", "/#experience"], ["Case Studies", "/#case-studies"],
  ["Architecture", "/#architecture"], ["Projects", "/#projects"], ["Writing", "/writing"],
  ["Resume", "/resume"], ["Contact", "/#contact"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-lg">
      <nav className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4" aria-label="Primary navigation">
        <Link href="/" className="font-bold tracking-tight hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onClick={() => setOpen(false)}>Sadman Sobhan</Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, href]) => <Link key={label} href={href} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{label}</Link>)}
        </div>
        <div className="flex items-center gap-2"><DownloadCVButton variant="ghost" size="sm" className="hidden sm:inline-flex" /><ThemeToggle /><Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</Button></div>
      </nav>
      {open && <div className="border-t border-border bg-background px-4 py-3 lg:hidden"><div className="container mx-auto grid max-w-6xl gap-1">{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{label}</Link>)}</div></div>}
    </header>
  );
}

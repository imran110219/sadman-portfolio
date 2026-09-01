import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import detailedProjectsData from "@/data/detailed-projects.json";
import { slugify } from "@/lib/slug";

export const metadata: Metadata = {
  title: "Engineering Case Studies",
  description: "Backend engineering case studies by Sadman Sobhan across election, education, healthcare, and government systems.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-24 text-foreground">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-primary hover:underline">← Back to portfolio</Link>
        <div className="mt-10 max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Professional engineering work</p><h1 className="mt-3 text-4xl font-bold md:text-5xl">Engineering case studies</h1><p className="mt-5 text-lg leading-8 text-muted-foreground">Selected systems, constraints, decisions, and outcomes from backend and platform delivery.</p></div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {detailedProjectsData.detailedProjects.map((project) => <article key={project.title} className="rounded-xl border border-border bg-card p-7"><p className="text-sm font-semibold text-primary">{project.title}</p><h2 className="mt-3 text-2xl font-bold">{project.tagline}</h2><p className="mt-4 leading-7 text-muted-foreground">{project.context}</p><div className="mt-5 flex flex-wrap gap-2">{project.tech.slice(0, 7).map((tech) => <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{tech}</span>)}</div><Link href={"/projects/" + slugify(project.title)} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Read full case study <ArrowRight className="h-4 w-4" /></Link></article>)}
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getExperience, getProfile } from "@/lib/data";
import resumeData from "@/data/resume.json";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Résumé and career timeline for Sadman Sobhan, Senior Backend Engineer.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  const profile = getProfile();
  const experience = getExperience();

  return (
    <main className="min-h-screen bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-4xl pt-8">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="/" className="mb-5 inline-block text-sm text-primary hover:underline">
              ← Back to portfolio
            </a>
            <h1 className="text-4xl font-bold md:text-5xl">{profile.name}</h1>
            <p className="mt-2 text-xl text-muted-foreground">{profile.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{profile.location}</p>
          </div>
          <Button asChild className="shrink-0 gap-2">
            <a href="/cv/Sadman_Sobhan_CV.pdf" download>
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <section aria-labelledby="summary-heading" className="mb-12">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 id="summary-heading" className="text-2xl font-bold">Professional Summary</h2>
            <p className="text-sm text-muted-foreground">Last updated: {resumeData.lastUpdated}</p>
          </div>
          <p className="leading-7 text-muted-foreground">{resumeData.summary}</p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {resumeData.highlights.map((highlight) => (
              <li key={highlight} className="rounded-lg border border-border bg-card p-4 text-sm">
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="mb-6 text-2xl font-bold">Career Timeline</h2>
          <div className="space-y-6">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="border-l-2 border-primary/40 pl-5">
                <p className="text-sm text-muted-foreground">{item.period}</p>
                <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                <p className="font-medium text-primary">{item.company}</p>
                <p className="mt-2 leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

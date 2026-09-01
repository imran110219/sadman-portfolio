import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, ExternalLink } from "lucide-react";
import { getProfile } from "@/lib/data";
import writingData from "@/data/writing.json";

export const metadata: Metadata = {
  title: "Writing & Publications",
  description: "Technical writing and peer-reviewed publications by Sadman Sobhan.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  const profile = getProfile();

  return (
    <main className="min-h-screen bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-5xl pt-8">
        <a href="/" className="mb-8 inline-block text-sm text-primary hover:underline">
          ← Back to portfolio
        </a>
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Writing</p>
          <h1 className="text-4xl font-bold md:text-5xl">Ideas, systems, and research</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            Notes on software architecture, backend engineering, and the systems behind reliable products.
          </p>
          <a
            href={profile.social.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Visit my Medium profile <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <section aria-labelledby="articles-heading" className="mb-14">
          <h2 id="articles-heading" className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <BookOpen className="h-5 w-5 text-primary" />
            Technical Articles
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {writingData.articles.map((article) => (
              <article key={article.url} className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{article.topic}</p>
                <h3 className="mt-3 text-xl font-semibold">{article.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  Read on Medium <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="publications-heading">
          <h2 id="publications-heading" className="mb-6 text-2xl font-bold">Peer-Reviewed Publications</h2>
          <div className="space-y-4">
            {writingData.publications.map((publication) => (
              <article key={publication.url} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold">{publication.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{publication.venue}</p>
                <a href={publication.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm text-primary hover:underline">
                  View DOI <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

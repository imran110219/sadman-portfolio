import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import detailedProjectsData from "@/data/detailed-projects.json";
import {
  ProjectCaseStudyCard,
  type ProjectCaseStudy,
} from "@/components/project-case-study";
import { slugify } from "@/lib/slug";

const projects = detailedProjectsData.detailedProjects as ProjectCaseStudy[];


export function generateStaticParams() {
  return projects.map((project) => ({ slug: slugify(project.title) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => slugify(item.title) === slug);

  return project
    ? {
        title: project.title + " — Engineering Case Study",
        description: project.tagline + " Sadman Sobhan's role, architecture, decisions, and outcomes.",
        alternates: { canonical: `/projects/${slug}` },
        openGraph: { title: project.title, description: project.tagline, type: "article" },
      }
    : {};
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => slugify(item.title) === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-5xl pt-8">
        <Link href="/" className="mb-8 inline-block text-sm text-primary hover:underline">
          ← Back to portfolio
        </Link>
        <ProjectCaseStudyCard project={project} />
      </div>
    </main>
  );
}

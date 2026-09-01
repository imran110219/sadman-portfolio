import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Rocket, Target } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ContactSection } from "@/components/contact-section";
import { DownloadCVButton } from "@/components/download-cv-button";
import { Footer } from "@/components/footer";
import { ProfileAvatar } from "@/components/profile-avatar";
import { Card } from "@/components/ui/card";
import { getExperience, getProfile, getProjects } from "@/lib/data";
import detailedProjectsData from "@/data/detailed-projects.json";
import writingData from "@/data/writing.json";
import { slugify } from "@/lib/slug";

const architecture = [
  ["High-volume transactional systems", "Spring Boot · PostgreSQL · Redis", "Designing dependable workflows where correctness and predictable performance matter."],
  ["Event-driven workflows", "RabbitMQ · Async processing · Idempotency", "Separating long-running work from request paths while keeping retries safe."],
  ["Identity & authorization", "OAuth2 · JWT · Keycloak · RBAC", "Protecting sensitive operations with explicit roles and server-side state validation."],
  ["Reliable external integrations", "Timeouts · Retry · Rate limiting", "Making integrations observable and resilient to slow or partial dependencies."],
  ["Data architecture", "PostgreSQL · Indexing · Caching", "Choosing schemas, indexes, and read/write patterns that fit the workload."],
  ["Production delivery", "Docker · Kubernetes · CI/CD · Nginx", "Supporting repeatable releases and practical operations in production environments."],
];

const impact = [
  ["9+ years", "Software engineering"],
  ["30-person team", "Backend leadership"],
  ["~100K / day", "Election-period requests"],
  ["30% faster", "Exam platform response time"],
];

const personaPaths = [
  { title: "Recruiter", text: "Experience, impact, and resume", href: "#experience", Icon: Target },
  { title: "Engineer", text: "Architecture and case studies", href: "#architecture", Icon: Code2 },
  { title: "Founder", text: "Products and delivery context", href: "#projects", Icon: Rocket },
];

export default function Home() {
  const profile = getProfile();
  const experience = getExperience();
  const productSummaries = getProjects();
  const projects = detailedProjectsData.detailedProjects.filter((project) => project.featured).slice(0, 3);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-4 py-24 md:py-32" aria-labelledby="hero-heading">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Backend engineering · Distributed systems · Technical leadership</p>
              <h1 id="hero-heading" className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">{profile.name}</h1>
              <p className="mt-5 text-2xl font-semibold md:text-3xl">{profile.title}</p>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">{profile.tagline}</p>
              <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{profile.valueProposition}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#case-studies" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">View Engineering Work <ArrowRight className="h-4 w-4" /></Link>
                <DownloadCVButton variant="outline" size="lg" />
              </div>
              <p className="mt-6 text-sm font-medium text-primary">{profile.availability}</p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground" aria-label="Primary technologies">Java · Spring Boot · PostgreSQL · Redis · RabbitMQ · Kubernetes · Distributed Systems</div>
            </div>
            <div className="flex justify-center lg:justify-end"><ProfileAvatar size={220} /></div>
          </div>
        </section>

        <section aria-label="Engineering impact" className="border-y border-border bg-card/40">
          <div className="container mx-auto grid max-w-6xl gap-px px-4 py-2 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map(([value, label]) => <div key={value} className="px-5 py-6"><p className="text-3xl font-bold text-primary">{value}</p><p className="mt-1 text-sm text-muted-foreground">{label}</p></div>)}
          </div>
        </section>

        <div className="container mx-auto max-w-6xl space-y-28 px-4 py-24">
          <section id="case-studies" aria-labelledby="case-studies-heading" className="scroll-mt-24">
            <SectionIntro eyebrow="Professional engineering work" title="Selected case studies" description="A closer look at systems where backend design, reliability, and delivery had real operational consequences." />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {projects.map((project) => <Card key={project.title} className="flex h-full flex-col p-6 transition-colors hover:border-primary/60">
                <p className="text-sm font-semibold text-primary">{project.title}</p><h3 className="mt-3 text-2xl font-bold">{project.tagline}</h3>
                <div className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground"><p><strong className="text-foreground">Problem:</strong> {project.problem}</p><p><strong className="text-foreground">My role:</strong> {project.role}</p><p><strong className="text-foreground">Outcome:</strong> {project.metrics.length ? project.metrics.map((m) => `${m.value} ${m.label.toLowerCase()}`).join(" · ") : "Production delivery and maintainable system foundations"}</p></div>
                <Link href={`/projects/${slugify(project.title)}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Read case study <ArrowRight className="h-4 w-4" /></Link>
              </Card>)}
            </div>
          </section>

          <section id="architecture" aria-labelledby="architecture-heading" className="scroll-mt-24"><SectionIntro eyebrow="Architecture" title="Systems I design" description="I approach architecture as a set of explicit decisions about failure modes, data, ownership, and operational constraints." /><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{architecture.map(([title, stack, detail]) => <Card key={title} className="p-6"><Code2 className="h-5 w-5 text-primary" /><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-2 text-xs font-semibold uppercase tracking-wide text-primary">{stack}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{detail}</p></Card>)}</div></section>

          <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-24"><SectionIntro eyebrow="Experience" title="Leading backend delivery" description="Nine-plus years across government, education, and enterprise systems, with increasing ownership of architecture and team execution." /><div className="mt-10 space-y-5">{experience.map((job, index) => <article key={`${job.company}-${job.period}`} className="grid gap-4 border-t border-border pt-6 md:grid-cols-[180px_1fr]"><div><p className="text-sm text-muted-foreground">{job.period}</p><p className="mt-1 font-semibold text-primary">{job.company}</p></div><div><h3 className="text-xl font-bold">{job.title}</h3><p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{job.description}</p>{index === 0 && <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2"><li>• Backend leadership within a 30-person team</li><li>• API contracts and nomination lifecycle ownership</li><li>• RabbitMQ and Keycloak integration</li><li>• Kubernetes deployment and CI/CD support</li></ul>}</div></article>)}</div></section>

          <section id="leadership" aria-labelledby="leadership-heading"><SectionIntro eyebrow="Engineering ownership" title="How I contribute beyond implementation" /><div className="mt-8 grid gap-4 md:grid-cols-3">{["Clarify boundaries and contracts before scaling complexity.", "Create shared engineering context through grooming, reviews, and implementation guidance.", "Treat reliability, authorization, and operability as part of feature delivery."].map((item) => <Card key={item} className="p-6"><CheckCircle2 className="h-5 w-5 text-primary" /><p className="mt-4 leading-7 text-muted-foreground">{item}</p></Card>)}</div></section>

          <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24"><SectionIntro eyebrow="Independent work" title="Products / independent projects" description="Selected product work where I have owned or contributed to backend and full-stack delivery." /><div className="mt-8 grid gap-6 md:grid-cols-2">{["Open-Care", "FactLens"].map((title) => { const project = detailedProjectsData.detailedProjects.find((item) => item.title === title); const summaryProject = productSummaries.find((item) => item.title === title); const summary = title === "Open-Care" ? "Open-source healthcare information platform with searchable provider and medical-resource data." : "Editorial platform for publishing and managing news and fact-focused content."; const tech = project?.tech ?? summaryProject?.tech ?? []; const live = project?.links?.live ?? summaryProject?.link ?? summaryProject?.demo; return <Card key={title} className="p-6"><div className="flex items-start justify-between gap-4"><div><h3 className="text-2xl font-bold">{title}</h3><p className="mt-2 leading-7 text-muted-foreground">{summary}</p></div><Rocket className="h-5 w-5 shrink-0 text-primary" /></div><p className="mt-5 text-sm text-muted-foreground"><strong className="text-foreground">Ownership:</strong> {project?.role ?? "Full-stack product delivery"}</p><div className="mt-5 flex flex-wrap gap-2">{tech.slice(0, 6).map((item) => <span key={item} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{item}</span>)}</div>{live && <a href={live} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline">Visit product <ArrowRight className="ml-2 h-4 w-4" /></a>}</Card>})}</div></section>

          <section id="writing" aria-labelledby="writing-heading" className="scroll-mt-24"><SectionIntro eyebrow="Engineering notes" title="Writing on systems and delivery" description="Short, practical notes on architecture, service boundaries, and the engineering practices around production systems." /><div className="mt-8 grid gap-5 md:grid-cols-3">{writingData.articles.map((article) => <article key={article.url} className="rounded-xl border border-border bg-card p-6"><p className="text-xs font-semibold uppercase tracking-wider text-primary">{article.topic}</p><h3 className="mt-3 text-xl font-bold">{article.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{article.description}</p><a href={article.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline">Read on Medium <ArrowRight className="ml-2 h-4 w-4" /></a></article>)}</div><Link href="/writing" className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline">View writing and publications <ArrowRight className="ml-2 h-4 w-4" /></Link></section>

          <section aria-labelledby="paths-heading"><SectionIntro eyebrow="Choose your path" title="Start where it is most useful" description="These shortcuts guide you to the same portfolio without hiding the rest of the work." /><div className="mt-8 grid gap-5 md:grid-cols-3">{personaPaths.map(({ title, text, href, Icon }) => <a key={title} href={href} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Icon className="h-6 w-6 text-primary" /><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p></a>)}</div></section>

          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>{description && <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p>}</div>;
}

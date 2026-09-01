import { BookOpen, Github, Linkedin, Mail } from "lucide-react";
import { getProfile } from "@/lib/data";

export function ContactSection() {
  const { social, availability } = getProfile();
  const methods = [
    { label: "LinkedIn", value: "Sadman Sobhan", href: social.linkedin!, Icon: Linkedin },
    { label: "GitHub", value: "Sadman Sobhan", href: social.github!, Icon: Github },
    { label: "Email", value: social.email, href: "mailto:" + social.email, Icon: Mail },
    { label: "Medium", value: "Engineering notes", href: social.medium!, Icon: BookOpen },
  ];

  return (
    <section id="contact" className="scroll-mt-24 rounded-2xl border border-border bg-card p-7 md:p-10" aria-labelledby="contact-heading">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact</p><h2 id="contact-heading" className="mt-3 text-3xl font-bold md:text-4xl">Let&apos;s build reliable systems.</h2><p className="mt-4 max-w-xl leading-7 text-muted-foreground">{availability}. Open to Senior Backend Engineer, Technical Lead, and backend architecture opportunities.</p></div>
        <a href={"mailto:" + social.email} className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Mail className="h-4 w-4" /> Email Sadman</a>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {methods.map(({ label, value, href, Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Icon className="h-5 w-5 text-primary" /><span><span className="block text-sm font-semibold">{label}</span><span className="block text-xs text-muted-foreground">{value}</span></span></a>)}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ExternalLink,
  Github,
  Target,
  Wrench,
  TrendingUp,
  Lightbulb,
  Code2,
  Users,
} from "lucide-react";
import Image from "next/image";

export interface ProjectCaseStudy {
  title: string;
  tagline: string;
  featured: boolean;

  // Problem & Context
  problem: string;
  context: string;

  // Role & Contributions
  role: string;
  contributions: string[];
  teamSize?: number;
  duration?: string;

  // Technical Architecture
  tech: string[];
  architecture?: string;
  architectureDiagram?: string;

  // Challenges & Solutions
  challenges: Array<{
    challenge: string;
    solution: string;
  }>;

  // Metrics & Outcomes
  metrics: Array<{
    label: string;
    value: string;
    description?: string;
  }>;

  // Lessons Learned
  lessons: string[];

  // Links & Resources
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };

  // Visual Assets
  screenshots?: string[];
}

interface ProjectCaseStudyCardProps {
  project: ProjectCaseStudy;
  index?: number;
}

export function ProjectCaseStudyCard({
  project,
  index = 0,
}: ProjectCaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      id={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <Card className="p-6 md:p-8 bg-card space-y-8">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-card-foreground">
                {project.title}
              </h3>
              <p className="text-lg text-muted-foreground">{project.tagline}</p>
            </div>
            {project.featured && (
              <Badge variant="default" className="ml-4">
                Featured
              </Badge>
            )}
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {project.role && (
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{project.role}</span>
              </div>
            )}
            {project.duration && (
              <div>
                <span className="font-semibold">Duration:</span>{" "}
                {project.duration}
              </div>
            )}
            {project.teamSize && (
              <div>
                <span className="font-semibold">Team:</span> {project.teamSize}{" "}
                members
              </div>
            )}
          </div>
        </div>

        <Separator />

        {/* Problem & Context */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-primary">
            <Target className="h-5 w-5" />
            <h4 className="text-xl font-bold">Problem & Context</h4>
          </div>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-sm text-muted-foreground mb-1">
                The Challenge
              </p>
              <p className="text-card-foreground">{project.problem}</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-muted-foreground mb-1">
                Context
              </p>
              <p className="text-card-foreground">{project.context}</p>
            </div>
          </div>
        </section>

        {/* My Role & Contributions */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-accent">
            <Code2 className="h-5 w-5" />
            <h4 className="text-xl font-bold">My Contributions</h4>
          </div>
          <ul className="space-y-2">
            {project.contributions.map((contribution, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-card-foreground">{contribution}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Architecture */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-chart-1">
            <Wrench className="h-5 w-5" />
            <h4 className="text-xl font-bold">Technical Architecture</h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {project.architecture && (
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-sm text-card-foreground">
                {project.architecture}
              </p>
            </div>
          )}

          {project.architectureDiagram && (
            <div className="relative w-full h-64 bg-muted rounded-lg overflow-hidden">
              <Image
                src={project.architectureDiagram}
                alt={`${project.title} architecture diagram`}
                fill
                className="object-contain p-4"
                loading="lazy"
              />
            </div>
          )}
        </section>

        {/* Challenges & Solutions */}
        {project.challenges.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-chart-2">
              <Lightbulb className="h-5 w-5" />
              <h4 className="text-xl font-bold">Challenges & Solutions</h4>
            </div>
            <div className="space-y-4">
              {project.challenges.map((item, idx) => (
                <Card key={idx} className="p-4 bg-muted/20">
                  <p className="font-semibold text-sm text-chart-2 mb-2">
                    Challenge #{idx + 1}
                  </p>
                  <p className="text-card-foreground mb-3">{item.challenge}</p>
                  <p className="font-semibold text-sm text-chart-3 mb-1">
                    Solution
                  </p>
                  <p className="text-card-foreground">{item.solution}</p>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Metrics & Outcomes */}
        {project.metrics.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-chart-3">
              <TrendingUp className="h-5 w-5" />
              <h4 className="text-xl font-bold">Impact & Outcomes</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {project.metrics.map((metric, idx) => (
                <Card
                  key={idx}
                  className="p-4 bg-gradient-to-br from-primary/5 to-transparent"
                >
                  <div className="text-3xl font-bold text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="font-semibold text-sm text-card-foreground mb-1">
                    {metric.label}
                  </div>
                  {metric.description && (
                    <div className="text-xs text-muted-foreground">
                      {metric.description}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Lessons Learned */}
        {project.lessons.length > 0 && (
          <section className="space-y-3">
            <h4 className="text-lg font-bold text-card-foreground">
              Key Takeaways
            </h4>
            <ul className="space-y-2">
              {project.lessons.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-muted-foreground text-sm">
                    {lesson}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Links & Actions */}
        {project.links && (
          <div className="flex flex-wrap gap-3 pt-4">
            {project.links.live && (
              <Button variant="default" asChild>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button variant="outline" asChild>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </Button>
            )}
            {project.links.demo && (
              <Button variant="outline" asChild>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        )}
      </Card>
    </motion.div>
  );
}

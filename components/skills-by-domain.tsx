"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Server,
  Monitor,
  Cloud,
  Wrench,
  Rocket,
  TrendingUp,
} from "lucide-react";

interface SkillItem {
  name: string;
  proficiency: number; // 0-100
  yearsOfExperience?: number;
}

interface SkillDomain {
  domain: string;
  icon: React.ElementType;
  skills: SkillItem[];
  color: string;
}

interface SkillsByDomainProps {
  domains: SkillDomain[];
  currentlyExploring?: string[];
}

export function SkillsByDomain({
  domains,
  currentlyExploring = [],
}: SkillsByDomainProps) {
  return (
    <div className="space-y-8">
      {/* Skills by Domain */}
      <div className="grid md:grid-cols-2 gap-6">
        {domains.map((domain, index) => {
          const IconComponent = domain.icon;
          return (
            <motion.div
              key={domain.domain}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card h-full">
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className={`h-6 w-6 ${domain.color}`} />
                  <h4 className="text-xl font-bold">{domain.domain}</h4>
                </div>
                <div className="space-y-4">
                  {domain.skills.map((skill, idx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">
                            {skill.name}
                          </span>
                          {skill.yearsOfExperience && (
                            <Badge variant="outline" className="text-xs">
                              {skill.yearsOfExperience}y
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Currently Exploring */}
      {currentlyExploring.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="h-6 w-6 text-primary" />
              <h4 className="text-xl font-bold">Currently Exploring</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Always learning and staying updated with the latest technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {currentlyExploring.map((tech) => (
                <Badge
                  key={tech}
                  variant="default"
                  className="text-sm animate-pulse"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

// Default skill domains data
export const defaultSkillDomains: SkillDomain[] = [
  {
    domain: "Backend Development",
    icon: Server,
    color: "text-primary",
    skills: [
      { name: "Java", proficiency: 95, yearsOfExperience: 9 },
      { name: "Spring Boot", proficiency: 95, yearsOfExperience: 8 },
      { name: "Node.js", proficiency: 80, yearsOfExperience: 4 },
      { name: "Microservices", proficiency: 90, yearsOfExperience: 6 },
      { name: "REST APIs", proficiency: 95, yearsOfExperience: 9 },
      { name: "GraphQL", proficiency: 75, yearsOfExperience: 2 },
    ],
  },
  {
    domain: "Frontend Development",
    icon: Monitor,
    color: "text-accent",
    skills: [
      { name: "React", proficiency: 85, yearsOfExperience: 5 },
      { name: "TypeScript", proficiency: 85, yearsOfExperience: 4 },
      { name: "Next.js", proficiency: 80, yearsOfExperience: 3 },
      { name: "JavaScript", proficiency: 90, yearsOfExperience: 7 },
      { name: "HTML/CSS", proficiency: 90, yearsOfExperience: 9 },
    ],
  },
  {
    domain: "Database & Storage",
    icon: Server,
    color: "text-chart-1",
    skills: [
      { name: "PostgreSQL", proficiency: 90, yearsOfExperience: 8 },
      { name: "MySQL", proficiency: 85, yearsOfExperience: 7 },
      { name: "Redis", proficiency: 85, yearsOfExperience: 5 },
      { name: "MongoDB", proficiency: 75, yearsOfExperience: 3 },
      { name: "Oracle", proficiency: 70, yearsOfExperience: 4 },
    ],
  },
  {
    domain: "DevOps & Cloud",
    icon: Cloud,
    color: "text-chart-2",
    skills: [
      { name: "Docker", proficiency: 85, yearsOfExperience: 5 },
      { name: "AWS", proficiency: 80, yearsOfExperience: 4 },
      { name: "CI/CD", proficiency: 80, yearsOfExperience: 5 },
      { name: "Kubernetes", proficiency: 70, yearsOfExperience: 2 },
      { name: "Git", proficiency: 95, yearsOfExperience: 9 },
    ],
  },
  {
    domain: "Tools & Frameworks",
    icon: Wrench,
    color: "text-chart-3",
    skills: [
      { name: "Maven/Gradle", proficiency: 90, yearsOfExperience: 8 },
      { name: "JUnit/Mockito", proficiency: 85, yearsOfExperience: 7 },
      { name: "Hibernate/JPA", proficiency: 90, yearsOfExperience: 8 },
      { name: "Keycloak", proficiency: 85, yearsOfExperience: 3 },
      { name: "RabbitMQ/Kafka", proficiency: 75, yearsOfExperience: 3 },
    ],
  },
  {
    domain: "Architecture & Design",
    icon: TrendingUp,
    color: "text-chart-4",
    skills: [
      { name: "System Design", proficiency: 90, yearsOfExperience: 7 },
      { name: "Design Patterns", proficiency: 90, yearsOfExperience: 8 },
      {
        name: "Microservices Architecture",
        proficiency: 90,
        yearsOfExperience: 6,
      },
      { name: "Event-Driven Design", proficiency: 80, yearsOfExperience: 4 },
      { name: "API Design", proficiency: 95, yearsOfExperience: 8 },
    ],
  },
];

export const defaultCurrentlyExploring = [
  "Go",
  "Rust",
  "GraphQL Federation",
  "gRPC",
  "Service Mesh",
  "Machine Learning",
];

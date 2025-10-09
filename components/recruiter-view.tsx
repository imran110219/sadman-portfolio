"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  Briefcase,
  Award,
  Code,
  Mail,
  Github,
  BookOpen,
  Facebook,
  User,
  ExternalLink,
} from "lucide-react";

const skills = [
  { name: "Java & Spring Boot", level: 95 },
  { name: "React & Next.js", level: 90 },
  { name: "PostgreSQL & MySQL", level: 88 },
  { name: "Docker & Kubernetes", level: 85 },
  { name: "REST APIs & Microservices", level: 92 },
  { name: "Redis & Caching", level: 82 },
];

const experience = [
  {
    title: "Senior Software Engineer",
    company: "Penta Global Ltd.",
    period: "2023 - Present",
    description:
      "Leading teams, architecting secure & scalable systems, and integrating Keycloak-based authentication solutions.",
  },
  {
    title: "Software Engineer",
    company: "Dynamic Solution Innovators Ltd.",
    period: "2022 - 2023",
    description:
      "Built an exam management system serving 30,000+ students, with real-time dashboards and optimized performance using Redis.",
  },
  {
    title: "Software Engineer",
    company: "Dohatec New Media",
    period: "2016 - 2021",
    description:
      "Contributed to the National Electronic Government Procurement System, improving user engagement and ensuring data integrity.",
  },
  {
    title: ".NET Developer",
    company: "Earlier Roles",
    period: "2014 - 2016",
    description:
      "Full-stack development with .NET, WordPress, and PHP, building strong foundation in web technologies.",
  },
];

export function RecruiterView() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Professional Overview
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          9+ years building enterprise systems & scalable solutions
        </p>
        <Button size="lg" className="gap-2">
          <Download className="h-5 w-5" />
          Download Resume
        </Button>
      </motion.div>

      {/* Core Skills Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Code className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">Core Skills</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-4 bg-card">
            <h4 className="font-semibold mb-3 text-primary">💻 Backend</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Java, Spring Boot</li>
              <li>Hibernate, Liquibase</li>
              <li>REST APIs</li>
            </ul>
          </Card>
          <Card className="p-4 bg-card">
            <h4 className="font-semibold mb-3 text-primary">🎨 Frontend</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>React.js, Next.js</li>
              <li>Redux, JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </Card>
          <Card className="p-4 bg-card">
            <h4 className="font-semibold mb-3 text-primary">🗄️ Databases</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>PostgreSQL, MySQL</li>
              <li>Redis</li>
              <li>Database Design</li>
            </ul>
          </Card>
          <Card className="p-4 bg-card">
            <h4 className="font-semibold mb-3 text-primary">🚀 DevOps</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Docker, Kubernetes</li>
              <li>GitHub Actions</li>
              <li>Linux/Unix</li>
            </ul>
          </Card>
        </div>
      </motion.section>

      {/* Skills Snapshot */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Code className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">Skills Snapshot</h3>
        </div>
        <Card className="p-6 bg-card">
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-card-foreground">
                    {skill.name}
                  </span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">Experience Timeline</h3>
        </div>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="p-6 bg-card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-bold text-card-foreground">
                    {job.title}
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="text-primary font-semibold mb-2">{job.company}</p>
                <p className="text-muted-foreground">{job.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Key Achievements */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">Key Achievements</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6 bg-card">
            <h4 className="font-bold mb-2 text-card-foreground">
              Open Care - Health-Tech Platform
            </h4>
            <p className="text-sm text-muted-foreground">
              Scalable health-tech platform connecting patients, doctors, and
              organizations across Bangladesh
            </p>
          </Card>
          <Card className="p-6 bg-card">
            <h4 className="font-bold mb-2 text-card-foreground">
              Exam Management System
            </h4>
            <p className="text-sm text-muted-foreground">
              Java-based system serving 30,000+ students with Crystal Reports,
              Flutter mobile app, and real-time dashboards
            </p>
          </Card>
          <Card className="p-6 bg-card">
            <h4 className="font-bold mb-2 text-card-foreground">
              National e-GP System
            </h4>
            <p className="text-sm text-muted-foreground">
              Electronic Government Procurement platform with secure file
              handling, data modeling, and integrity features
            </p>
          </Card>
          <Card className="p-6 bg-card">
            <h4 className="font-bold mb-2 text-card-foreground">
              Team Leadership & Architecture
            </h4>
            <p className="text-sm text-muted-foreground">
              Leading development teams and architecting secure, scalable
              enterprise solutions with Keycloak authentication
            </p>
          </Card>
        </div>
      </motion.section>

      {/* Contact & Connect */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Mail className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">Let's Connect</h3>
        </div>
        <Card className="p-6 bg-card">
          <div className="text-center mb-6">
            <p className="text-muted-foreground mb-4">
              Open to new opportunities and collaborations
            </p>
            <Button size="lg" className="gap-2 mb-4">
              <Mail className="h-5 w-5" />
              <a href="mailto:imran110219@gmail.com">Contact Me</a>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-background">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a
                    href="https://github.com/imran110219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                  >
                    @imran110219 <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-background">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-semibold">Medium</h4>
                  <a
                    href="https://medium.com/@imran110219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                  >
                    @imran110219 <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-background">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-semibold">HackerRank</h4>
                  <a
                    href="https://www.hackerrank.com/profile/imran110219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                  >
                    @imran110219 <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </motion.section>
    </div>
  );
}

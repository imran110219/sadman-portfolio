"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DownloadCVButton } from "@/components/download-cv-button";
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
import {
  getRecruiterSkills,
  getExperience,
  getAchievements,
  getCoreSkills,
  getProfile,
} from "@/lib/data";

export function RecruiterView() {
  const skills = getRecruiterSkills();
  const experience = getExperience();
  const { achievements } = getAchievements();
  const { categories: coreSkills } = getCoreSkills();
  const profile = getProfile();
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
        <DownloadCVButton size="lg" className="gap-2" />
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
          {coreSkills.map((category) => (
            <Card key={category.title} className="p-4 bg-card">
              <h4 className="font-semibold mb-3 text-primary">
                {category.emoji} {category.title}
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Card>
          ))}
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
          {achievements.map((achievement) => (
            <Card key={achievement.title} className="p-6 bg-card">
              <h4 className="font-bold mb-2 text-card-foreground">
                {achievement.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </Card>
          ))}
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
              <a href={`mailto:${profile.social.email}`}>Contact Me</a>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {profile.social.github && (
              <Card className="p-4 bg-background">
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <a
                      href={profile.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                    >
                      @{profile.social.github.split("/").pop()}{" "}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>
            )}
            {profile.social.medium && (
              <Card className="p-4 bg-background">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Medium</h4>
                    <a
                      href={profile.social.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                    >
                      @{profile.social.medium.split("@").pop()}{" "}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>
            )}
            {profile.social.hackerrank && (
              <Card className="p-4 bg-background">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">HackerRank</h4>
                    <a
                      href={profile.social.hackerrank}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                    >
                      @{profile.social.hackerrank.split("/").pop()}{" "}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </Card>
      </motion.section>
    </div>
  );
}

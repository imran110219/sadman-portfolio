"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, Award, Code } from "lucide-react"

const skills = [
  { name: "React & Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "System Design", level: 85 },
  { name: "AWS & Cloud", level: 82 },
  { name: "PostgreSQL", level: 80 },
]

const experience = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Leading development of scalable microservices architecture",
  },
  {
    title: "Software Engineer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description: "Built core product features serving 100k+ users",
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Developed client websites and web applications",
  },
]

export function RecruiterView() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Overview</h2>
        <p className="text-xl text-muted-foreground mb-8">6+ years building production systems at scale</p>
        <Button size="lg" className="gap-2">
          <Download className="h-5 w-5" />
          Download Resume
        </Button>
      </motion.div>

      {/* Skills Snapshot */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
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
                  <span className="font-medium text-card-foreground">{skill.name}</span>
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
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
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
                  <h4 className="text-xl font-bold text-card-foreground">{job.title}</h4>
                  <span className="text-sm text-muted-foreground">{job.period}</span>
                </div>
                <p className="text-primary font-semibold mb-2">{job.company}</p>
                <p className="text-muted-foreground">{job.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">Certifications</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6 bg-card">
            <h4 className="font-bold mb-2 text-card-foreground">AWS Solutions Architect</h4>
            <p className="text-sm text-muted-foreground">Amazon Web Services • 2023</p>
          </Card>
          <Card className="p-6 bg-card">
            <h4 className="font-bold mb-2 text-card-foreground">Google Cloud Professional</h4>
            <p className="text-sm text-muted-foreground">Google Cloud • 2022</p>
          </Card>
        </div>
      </motion.section>
    </div>
  )
}

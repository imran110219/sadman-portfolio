"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with real-time inventory and payment processing",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    stars: 234,
    link: "#",
  },
  {
    title: "DevOps Dashboard",
    description: "Real-time monitoring and deployment management for microservices",
    tech: ["React", "Node.js", "Docker", "Kubernetes"],
    stars: 189,
    link: "#",
  },
  {
    title: "AI Content Generator",
    description: "ML-powered content creation tool with custom fine-tuning",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    stars: 456,
    link: "#",
  },
  {
    title: "Real-time Chat App",
    description: "Scalable messaging platform with WebSocket support",
    tech: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    stars: 312,
    link: "#",
  },
]

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
  { category: "Tools", items: ["Git", "VS Code", "Figma", "Linear"] },
]

export function DeveloperView() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects & Code</h2>
        <p className="text-xl text-muted-foreground">Building with modern technologies and best practices</p>
      </motion.div>

      {/* Tech Stack Radar */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {techStack.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-6 bg-card">
                <h4 className="font-bold mb-4 text-accent text-card-foreground">{stack.category}</h4>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="p-6 h-full flex flex-col bg-card">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-card-foreground">{project.title}</h4>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Code Example */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <h3 className="text-2xl font-bold mb-6">Code Sample</h3>
        <Card className="p-6 bg-card">
          <pre className="text-sm overflow-x-auto">
            <code className="text-muted-foreground font-mono">
              {`// Custom React hook for data fetching with caching
import { useState, useEffect } from 'react'

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, loading, error }
}`}
            </code>
          </pre>
        </Card>
      </motion.section>
    </div>
  )
}

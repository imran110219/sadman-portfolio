"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Code,
  Cloud,
  Layers,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { getClientData } from "@/lib/data";

// Icon mapping for services
const iconMap = {
  TrendingUp: TrendingUp,
  Code: Code,
  Cloud: Cloud,
  Layers: Layers,
  Lightbulb: Lightbulb,
};

export function ClientView() {
  const { services, caseStudies, workProcess } = getClientData();
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's Build Together
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Turning complex business needs into scalable, secure, and intelligent
          digital products
        </p>
        <Button size="lg" className="gap-2">
          Schedule a Call
        </Button>
      </motion.div>

      {/* Services */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-2xl font-bold mb-6">Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-6 h-full bg-card">
                  <IconComponent className="h-10 w-10 mb-4 text-primary" />
                  <h4 className="text-xl font-bold mb-2 text-card-foreground">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    {service.price}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-6">Case Studies</h3>
        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="p-6 bg-card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-card-foreground">
                      {study.project}
                    </h4>
                    <p className="text-primary font-semibold">{study.client}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-chart-3 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{study.result}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-6">How We Work</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {workProcess.map((step, index) => (
            <Card key={step} className="p-6 text-center bg-card">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                {index + 1}
              </div>
              <h4 className="font-bold text-card-foreground">{step}</h4>
            </Card>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

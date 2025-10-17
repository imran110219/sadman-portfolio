"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { Mail, Github, Linkedin, MessageSquare, Calendar } from "lucide-react";
import { getProfile } from "@/lib/data";

export function ContactSection() {
  const profile = getProfile();

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: profile.social.email,
      href: `mailto:${profile.social.email}`,
      description: "Best for detailed inquiries",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@imran110219",
      href: profile.social.github,
      description: "Check out my code",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: profile.social.linkedin,
      description: "Professional networking",
    },
  ];

  return (
    <section id="contact" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Work Together
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <Card className="p-6 bg-card">
            <h3 className="text-xl font-bold mb-4">Other Ways to Connect</h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-4 px-4 hover:bg-muted"
                      asChild
                    >
                      <a
                        href={method.href}
                        target={
                          method.href?.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          method.href?.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        <div className="flex items-start gap-4 w-full">
                          <IconComponent className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                          <div className="flex-grow text-left">
                            <div className="font-semibold mb-1">
                              {method.label}
                            </div>
                            <div className="text-sm text-muted-foreground mb-1">
                              {method.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {method.description}
                            </div>
                          </div>
                        </div>
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </Card>

          {/* Availability Status */}
          <Card className="p-6 bg-gradient-to-br from-chart-3/10 to-primary/10">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-chart-3 mt-0.5" />
              <div>
                <h4 className="font-semibold mb-1">
                  {profile.availability || "Available for Opportunities"}
                </h4>
                <p className="text-sm text-muted-foreground">
                  I'm currently open to full-time roles, consulting projects,
                  and freelance opportunities. Response time: Within 24 hours.
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Response Time */}
          <Card className="p-6 bg-muted/30">
            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <h4 className="font-semibold mb-1">Quick Response</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours during
                  business days. For urgent matters, please mention it in your
                  message.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
